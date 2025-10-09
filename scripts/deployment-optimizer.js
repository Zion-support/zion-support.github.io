#!/usr/bin/env node

/**
 * Deployment Optimization Script for Zion Tech Group Website
 * This script optimizes the application for production deployment
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting deployment optimization...');

// Generate optimized package.json for production
function generateProductionPackageJson() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  // Remove dev dependencies that aren't needed in production
  const productionPackageJson = {
    ...packageJson,
    scripts: {
      start: 'vite preview --host 0.0.0.0 --port 3000',
      build: 'NODE_OPTIONS="--max-old-space-size=4096" vite build --mode production --minify terser',
      'build:analyze': 'NODE_OPTIONS="--max-old-space-size=4096" vite build --mode analyze && npx vite-bundle-analyzer dist/stats.html',
      preview: 'vite preview --host 0.0.0.0 --port 3000',
      'health-check': 'curl -f http://localhost:3000 || exit 1'
    },
    devDependencies: {},
    engines: {
      node: '>=18.0.0',
      npm: '>=8.0.0'
    }
  };

  fs.writeFileSync('package.production.json', JSON.stringify(productionPackageJson, null, 2));
  console.log('✅ Production package.json generated');
}

// Generate Docker configuration
function generateDockerConfig() {
  const dockerfile = `
# Multi-stage build for production
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml* ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM nginx:alpine AS production

# Install Node.js for runtime
RUN apk add --no-cache nodejs npm

# Copy built application
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy custom nginx configuration
COPY nginx-site.conf /etc/nginx/conf.d/default.conf

# Copy security headers
COPY security-headers.conf /etc/nginx/conf.d/security-headers.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
`;

  const nginxConf = `
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
    use epoll;
    multi_accept on;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logging
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;

    # Performance
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    client_max_body_size 16M;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;

    # Security headers
    include /etc/nginx/conf.d/security-headers.conf;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;

    # Include site configuration
    include /etc/nginx/conf.d/*.conf;
}
`;

  const nginxSiteConf = `
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Cache static assets
    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header X-Content-Type-Options "nosniff";
    }

    # Cache HTML files
    location ~* \\.html$ {
        expires 1h;
        add_header Cache-Control "public";
    }

    # Handle SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API rate limiting
    location /api/ {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Health check endpoint
    location /health {
        access_log off;
        return 200 "healthy\\n";
        add_header Content-Type text/plain;
    }

    # Security.txt
    location /.well-known/security.txt {
        return 301 https://ziontechgroup.com/security.txt;
    }

    # Robots.txt
    location /robots.txt {
        add_header Content-Type text/plain;
    }

    # Sitemap
    location /sitemap.xml {
        add_header Content-Type application/xml;
    }
}
`;

  const securityHeadersConf = `
# Security Headers Configuration
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;

# Content Security Policy
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" always;

# Additional security headers
add_header Cross-Origin-Embedder-Policy "require-corp" always;
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Resource-Policy "same-origin" always;
`;

  fs.writeFileSync('Dockerfile', dockerfile);
  fs.writeFileSync('nginx.conf', nginxConf);
  fs.writeFileSync('nginx-site.conf', nginxSiteConf);
  fs.writeFileSync('security-headers.conf', securityHeadersConf);
  console.log('✅ Docker configuration generated');
}

// Generate Docker Compose for development
function generateDockerCompose() {
  const dockerCompose = `
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:80"
    environment:
      - NODE_ENV=production
    volumes:
      - ./logs:/var/log/nginx
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx-site.conf:/etc/nginx/conf.d/default.conf:ro
      - ./security-headers.conf:/etc/nginx/conf.d/security-headers.conf:ro
      - ./dist:/usr/share/nginx/html:ro
    depends_on:
      - app
    restart: unless-stopped

networks:
  default:
    driver: bridge
`;

  fs.writeFileSync('docker-compose.yml', dockerCompose);
  console.log('✅ Docker Compose configuration generated');
}

// Generate deployment scripts
function generateDeploymentScripts() {
  const deployScript = `#!/bin/bash

# Deployment script for Zion Tech Group Website
set -e

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build the application
echo "🔨 Building application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist directory not found."
    exit 1
fi

# Run health check
echo "🏥 Running health check..."
npm run health-check || {
    echo "❌ Error: Health check failed."
    exit 1
}

echo "✅ Deployment completed successfully!"
echo "🌐 Application is ready at http://localhost:3000"
`;

  const healthCheckScript = `#!/bin/bash

# Health check script
set -e

URL="http://localhost:3000"
TIMEOUT=10

echo "🏥 Running health check on $URL..."

# Check if the server is responding
if curl -f -s --max-time $TIMEOUT "$URL" > /dev/null; then
    echo "✅ Health check passed"
    exit 0
else
    echo "❌ Health check failed"
    exit 1
fi
`;

  fs.writeFileSync('deploy.sh', deployScript);
  fs.writeFileSync('health-check.sh', healthCheckScript);
  
  // Make scripts executable
  fs.chmodSync('deploy.sh', '755');
  fs.chmodSync('health-check.sh', '755');
  
  console.log('✅ Deployment scripts generated');
}

// Generate CI/CD configuration
function generateCIConfig() {
  const githubActions = `name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run type checking
      run: npm run type-check
    
    - name: Run tests
      run: npm run test:ci
    
    - name: Build application
      run: npm run build
    
    - name: Upload build artifacts
      uses: actions/upload-artifact@v4
      with:
        name: build-files
        path: dist/

  security:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Run security audit
      run: npm audit --audit-level=moderate
    
    - name: Run dependency check
      run: npx audit-ci --moderate

  deploy:
    needs: [test, security]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Download build artifacts
      uses: actions/download-artifact@v4
      with:
        name: build-files
        path: dist/
    
    - name: Deploy to production
      run: |
        echo "Deploying to production..."
        # Add your deployment commands here
`;

  fs.writeFileSync('.github/workflows/ci-cd.yml', githubActions);
  console.log('✅ CI/CD configuration generated');
}

// Generate monitoring configuration
function generateMonitoringConfig() {
  const monitoringScript = `#!/usr/bin/env node

/**
 * Monitoring and Health Check Script
 * Monitors application health and performance
 */

import fs from 'fs';
import https from 'https';
import http from 'http';

const config = {
  url: process.env.HEALTH_CHECK_URL || 'http://localhost:3000',
  interval: parseInt(process.env.CHECK_INTERVAL || '30000'),
  timeout: parseInt(process.env.CHECK_TIMEOUT || '5000'),
  logFile: process.env.LOG_FILE || './logs/health.log'
};

class HealthMonitor {
  constructor() {
    this.startMonitoring();
  }

  async checkHealth() {
    const startTime = Date.now();
    
    try {
      const response = await this.makeRequest(config.url);
      const responseTime = Date.now() - startTime;
      
      const healthData = {
        timestamp: new Date().toISOString(),
        status: response.statusCode === 200 ? 'healthy' : 'unhealthy',
        responseTime,
        statusCode: response.statusCode,
        url: config.url
      };
      
      this.logHealth(healthData);
      
      if (response.statusCode !== 200) {
        this.alert('Health check failed', healthData);
      }
      
    } catch (error) {
      const healthData = {
        timestamp: new Date().toISOString(),
        status: 'error',
        error: error.message,
        url: config.url
      };
      
      this.logHealth(healthData);
      this.alert('Health check error', healthData);
    }
  }

  makeRequest(url) {
    return new Promise((resolve, reject) => {
      const client = url.startsWith('https') ? https : http;
      const request = client.get(url, { timeout: config.timeout }, (response) => {
        resolve(response);
      });
      
      request.on('error', reject);
      request.on('timeout', () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  logHealth(data) {
    const logEntry = JSON.stringify(data) + '\\n';
    
    // Ensure logs directory exists
    const logDir = path.dirname(config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    fs.appendFileSync(config.logFile, logEntry);
    console.log(\`Health check: \${data.status} (\${data.responseTime || 'N/A'}ms)\`);
  }

  alert(message, data) {
    console.error(\`🚨 ALERT: \${message}\`, data);
    
    // Here you would integrate with your alerting system
    // e.g., send email, Slack notification, etc.
  }

  startMonitoring() {
    console.log(\`Starting health monitoring for \${config.url}\`);
    console.log(\`Check interval: \${config.interval}ms\`);
    console.log(\`Timeout: \${config.timeout}ms\`);
    
    setInterval(() => {
      this.checkHealth();
    }, config.interval);
    
    // Initial check
    this.checkHealth();
  }
}

// Start monitoring
new HealthMonitor();
`;

  fs.writeFileSync('scripts/monitor.js', monitoringScript);
  console.log('✅ Monitoring configuration generated');
}

// Generate environment configuration
function generateEnvConfig() {
  const envExample = `# Environment Configuration
NODE_ENV=production
PORT=3000
HOST=0.0.0.0

# Database (if applicable)
# DATABASE_URL=postgresql://user:password@localhost:5432/ziontech

# Analytics
GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Security
JWT_SECRET=your-jwt-secret-here
ENCRYPTION_KEY=your-encryption-key-here

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Monitoring
HEALTH_CHECK_URL=http://localhost:3000
CHECK_INTERVAL=30000
CHECK_TIMEOUT=5000
LOG_FILE=./logs/health.log

# CDN (if applicable)
# CDN_URL=https://cdn.ziontechgroup.com

# Email (if applicable)
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your-email@gmail.com
# SMTP_PASS=your-app-password
`;

  const envProduction = `NODE_ENV=production
PORT=3000
HOST=0.0.0.0
`;

  fs.writeFileSync('.env.example', envExample);
  fs.writeFileSync('.env.production', envProduction);
  console.log('✅ Environment configuration generated');
}

// Main execution
function main() {
  try {
    // Create necessary directories
    const dirs = ['.github/workflows', 'logs', 'scripts'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    // Generate deployment configurations
    generateProductionPackageJson();
    generateDockerConfig();
    generateDockerCompose();
    generateDeploymentScripts();
    generateCIConfig();
    generateMonitoringConfig();
    generateEnvConfig();

    console.log('🎉 Deployment optimization completed successfully!');
    console.log('📦 Generated deployment files:');
    console.log('  - Dockerfile (Docker configuration)');
    console.log('  - docker-compose.yml (Docker Compose)');
    console.log('  - nginx.conf (Nginx configuration)');
    console.log('  - nginx-site.conf (Site configuration)');
    console.log('  - security-headers.conf (Security headers)');
    console.log('  - deploy.sh (Deployment script)');
    console.log('  - health-check.sh (Health check script)');
    console.log('  - .github/workflows/ci-cd.yml (CI/CD pipeline)');
    console.log('  - scripts/monitor.js (Monitoring script)');
    console.log('  - .env.example (Environment variables example)');
    console.log('  - package.production.json (Production package.json)');

  } catch (error) {
    console.error('❌ Error during deployment optimization:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateProductionPackageJson, generateDockerConfig, generateDeploymentScripts };