#!/usr/bin/env node

/**
 * Deployment Automation
 * Comprehensive deployment pipeline with multiple environments
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeploymentAutomation {
  constructor() {
    this.results = {
      deployments: [],
      rollbacks: [],
      healthChecks: [],
      errors: []
    };
    this.startTime = Date.now();
  }

  log(message, type = 'INFO') {
    const icons = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    };
    
    console.log(`${icons[type]} ${message}`);
  }

  ensureDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  // Create deployment configurations
  createDeploymentConfigs() {
    this.log('Creating deployment configurations...', 'PROGRESS');
    
    // Docker configuration
    const dockerfile = `FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]`;

    fs.writeFileSync('Dockerfile', dockerfile);

    // Docker Compose for development
    const dockerComposeDev = `version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
    command: npm run dev

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:`;

    fs.writeFileSync('docker-compose.dev.yml', dockerComposeDev);

    // Docker Compose for production
    const dockerComposeProd = `version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    depends_on:
      - mongodb
      - redis

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
    restart: unless-stopped

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    restart: unless-stopped
    volumes:
      - redis_data:/data

  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password
    volumes:
      - mongodb_data:/data/db
    restart: unless-stopped

  monitoring:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml
    restart: unless-stopped

volumes:
  mongodb_data:
  redis_data:`;

    fs.writeFileSync('docker-compose.prod.yml', dockerComposeProd);

    this.log('✅ Deployment configurations created', 'SUCCESS');
  }

  // Create CI/CD pipeline
  createCIPipeline() {
    this.log('Creating CI/CD pipeline...', 'PROGRESS');
    
    const githubActions = `name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  NODE_VERSION: '18'
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: \${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run type checking
        run: npm run type-check

      - name: Run unit tests
        run: npm run test:unit

      - name: Run integration tests
        run: npm run test:integration

      - name: Upload coverage reports
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: \${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Build Docker image
        run: docker build -t \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }} .

      - name: Log in to Container Registry
        uses: docker/login-action@v3
        with:
          registry: \${{ env.REGISTRY }}
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}

      - name: Push Docker image
        run: docker push \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }}

  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/develop'
    environment: staging
    steps:
      - name: Deploy to staging
        run: |
          echo "Deploying to staging environment"
          # Add your staging deployment commands here

  deploy-production:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: production
    steps:
      - name: Deploy to production
        run: |
          echo "Deploying to production environment"
          # Add your production deployment commands here

  security-scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          format: 'sarif'
          output: 'trivy-results.sarif'

      - name: Upload Trivy scan results
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: 'trivy-results.sarif'`;

    this.ensureDirectory('.github/workflows');
    fs.writeFileSync('.github/workflows/ci-cd.yml', githubActions);

    this.log('✅ CI/CD pipeline created', 'SUCCESS');
  }

  // Create Kubernetes configurations
  createKubernetesConfigs() {
    this.log('Creating Kubernetes configurations...', 'PROGRESS');
    
    const k8sNamespace = `apiVersion: v1
kind: Namespace
metadata:
  name: ziontechgroup
  labels:
    name: ziontechgroup`;

    const k8sDeployment = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: ziontechgroup-app
  namespace: ziontechgroup
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ziontechgroup-app
  template:
    metadata:
      labels:
        app: ziontechgroup-app
    spec:
      containers:
      - name: app
        image: ziontechgroup:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: MONGODB_URI
          valueFrom:
            secretKeyRef:
              name: mongodb-secret
              key: uri
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5`;

    const k8sService = `apiVersion: v1
kind: Service
metadata:
  name: ziontechgroup-service
  namespace: ziontechgroup
spec:
  selector:
    app: ziontechgroup-app
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer`;

    const k8sIngress = `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ziontechgroup-ingress
  namespace: ziontechgroup
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - ziontechgroup.com
    - www.ziontechgroup.com
    secretName: ziontechgroup-tls
  rules:
  - host: ziontechgroup.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: ziontechgroup-service
            port:
              number: 80`;

    this.ensureDirectory('k8s');
    fs.writeFileSync('k8s/namespace.yaml', k8sNamespace);
    fs.writeFileSync('k8s/deployment.yaml', k8sDeployment);
    fs.writeFileSync('k8s/service.yaml', k8sService);
    fs.writeFileSync('k8s/ingress.yaml', k8sIngress);

    this.log('✅ Kubernetes configurations created', 'SUCCESS');
  }

  // Create monitoring configurations
  createMonitoringConfigs() {
    this.log('Creating monitoring configurations...', 'PROGRESS');
    
    const prometheusConfig = `global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "rules/*.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'ziontechgroup-app'
    static_configs:
      - targets: ['app:3000']
    metrics_path: '/api/metrics'
    scrape_interval: 5s

  - job_name: 'nginx'
    static_configs:
      - targets: ['nginx:9113']

  - job_name: 'mongodb'
    static_configs:
      - targets: ['mongodb-exporter:9216']`;

    const grafanaDashboard = `{
  "dashboard": {
    "id": null,
    "title": "Zion Tech Group Monitoring",
    "tags": ["ziontechgroup"],
    "style": "dark",
    "timezone": "browser",
    "panels": [
      {
        "id": 1,
        "title": "Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total[5m])",
            "legendFormat": "{{method}} {{endpoint}}"
          }
        ],
        "yAxes": [
          {
            "label": "Requests/sec"
          }
        ]
      },
      {
        "id": 2,
        "title": "Response Time",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))",
            "legendFormat": "95th percentile"
          }
        ],
        "yAxes": [
          {
            "label": "Seconds"
          }
        ]
      },
      {
        "id": 3,
        "title": "Error Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total{status=~\"5..\"}[5m])",
            "legendFormat": "5xx errors"
          }
        ],
        "yAxes": [
          {
            "label": "Errors/sec"
          }
        ]
      }
    ],
    "time": {
      "from": "now-1h",
      "to": "now"
    },
    "refresh": "5s"
  }
}`;

    this.ensureDirectory('monitoring');
    fs.writeFileSync('monitoring/prometheus.yml', prometheusConfig);
    fs.writeFileSync('monitoring/grafana-dashboard.json', grafanaDashboard);

    this.log('✅ Monitoring configurations created', 'SUCCESS');
  }

  // Create deployment scripts
  createDeploymentScripts() {
    this.log('Creating deployment scripts...', 'PROGRESS');
    
    const deployScript = `#!/bin/bash
set -e

# Deployment script for Zion Tech Group
ENVIRONMENT=\${1:-staging}
VERSION=\${2:-latest}

echo "🚀 Starting deployment to \${ENVIRONMENT} environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Build the application
echo "📦 Building application..."
npm run build

# Build Docker image
echo "🐳 Building Docker image..."
docker build -t ziontechgroup:\${VERSION} .

# Tag image for environment
docker tag ziontechgroup:\${VERSION} ziontechgroup:\${ENVIRONMENT}

# Deploy based on environment
if [ "\${ENVIRONMENT}" = "production" ]; then
    echo "🚀 Deploying to production..."
    docker-compose -f docker-compose.prod.yml up -d
    
    # Wait for health check
    echo "⏳ Waiting for health check..."
    sleep 30
    
    # Check if deployment is healthy
    if curl -f http://localhost/api/health > /dev/null 2>&1; then
        echo "✅ Production deployment successful!"
    else
        echo "❌ Production deployment failed health check"
        exit 1
    fi
else
    echo "🚀 Deploying to staging..."
    docker-compose -f docker-compose.dev.yml up -d
    
    # Wait for health check
    echo "⏳ Waiting for health check..."
    sleep 15
    
    # Check if deployment is healthy
    if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
        echo "✅ Staging deployment successful!"
    else
        echo "❌ Staging deployment failed health check"
        exit 1
    fi
fi

echo "🎉 Deployment completed successfully!"`;

    fs.writeFileSync('deploy.sh', deployScript);
    fs.chmodSync('deploy.sh', '755');

    const rollbackScript = `#!/bin/bash
set -e

# Rollback script for Zion Tech Group
ENVIRONMENT=\${1:-staging}

echo "🔄 Starting rollback for \${ENVIRONMENT} environment..."

# Get the previous version
PREVIOUS_VERSION=\$(docker images --format "table {{.Tag}}" | grep \${ENVIRONMENT} | head -2 | tail -1)

if [ -z "\${PREVIOUS_VERSION}" ]; then
    echo "❌ No previous version found for rollback"
    exit 1
fi

echo "📦 Rolling back to version: \${PREVIOUS_VERSION}"

# Deploy previous version
if [ "\${ENVIRONMENT}" = "production" ]; then
    docker-compose -f docker-compose.prod.yml down
    docker tag ziontechgroup:\${PREVIOUS_VERSION} ziontechgroup:production
    docker-compose -f docker-compose.prod.yml up -d
else
    docker-compose -f docker-compose.dev.yml down
    docker tag ziontechgroup:\${PREVIOUS_VERSION} ziontechgroup:staging
    docker-compose -f docker-compose.dev.yml up -d
fi

# Wait for health check
echo "⏳ Waiting for health check..."
sleep 30

# Check if rollback is healthy
if curl -f http://localhost/api/health > /dev/null 2>&1; then
    echo "✅ Rollback successful!"
else
    echo "❌ Rollback failed health check"
    exit 1
fi

echo "🎉 Rollback completed successfully!"`;

    fs.writeFileSync('rollback.sh', rollbackScript);
    fs.chmodSync('rollback.sh', '755');

    this.log('✅ Deployment scripts created', 'SUCCESS');
  }

  // Generate comprehensive report
  generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      deployments: this.results.deployments,
      rollbacks: this.results.rollbacks,
      healthChecks: this.results.healthChecks,
      errors: this.results.errors,
      summary: {
        totalDeployments: this.results.deployments.length,
        totalRollbacks: this.results.rollbacks.length,
        totalHealthChecks: this.results.healthChecks.length,
        totalErrors: this.results.errors.length
      }
    };

    this.ensureDirectory('automation-reports');
    fs.writeFileSync('automation-reports/deployment-automation-report.json', JSON.stringify(report, null, 2));
    
    this.log('📊 Deployment Automation Report Generated', 'SUCCESS');
    this.log(`⏱️ Total Duration: ${report.duration}`, 'INFO');
    this.log(`🚀 Deployments: ${report.summary.totalDeployments}`, 'SUCCESS');
    this.log(`🔄 Rollbacks: ${report.summary.totalRollbacks}`, 'SUCCESS');
    this.log(`🏥 Health Checks: ${report.summary.totalHealthChecks}`, 'SUCCESS');
    this.log(`❌ Errors: ${report.summary.totalErrors}`, report.summary.totalErrors > 0 ? 'ERROR' : 'SUCCESS');
  }

  async run() {
    this.log('🚀 Starting Deployment Automation...', 'PROGRESS');
    
    try {
      this.createDeploymentConfigs();
      this.createCIPipeline();
      this.createKubernetesConfigs();
      this.createMonitoringConfigs();
      this.createDeploymentScripts();
      
      this.generateReport();
      
      this.log('🎉 Deployment Automation completed successfully!', 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Deployment Automation failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
}

// Run the deployment automation
if (require.main === module) {
  const automation = new DeploymentAutomation();
  automation.run().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(error => {
    console.error('Deployment automation failed:', error);
    process.exit(1);
  });
}

module.exports = DeploymentAutomation;