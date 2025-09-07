#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeploymentAutomation {
  constructor() {
    this.deploymentSteps = [];
    this.projectRoot = process.cwd();
  }

  async preDeploymentChecks() {
    console.log('🔍 Running pre-deployment checks...');
    
    const checks = [
      { name: 'Package.json validation', command: 'node -e "JSON.parse(require(\'fs\').readFileSync(\'package.json\', \'utf8\'))"' },
      { name: 'Dependencies installation', command: 'npm install' },
      { name: 'TypeScript compilation', command: 'npm run type-check' },
      { name: 'Linting', command: 'npm run lint:check' },
      { name: 'Build verification', command: 'npm run build' }
    ];
    
    let allPassed = true;
    
    for (const check of checks) {
      try {
        console.log(`  ✓ ${check.name}...`);
        execSync(check.command, { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 120000
        });
        this.deploymentSteps.push({ step: check.name, status: 'passed' });
      } catch (error) {
        console.log(`  ❌ ${check.name} failed:`, error.message);
        this.deploymentSteps.push({ step: check.name, status: 'failed', error: error.message });
        allPassed = false;
      }
    }
    
    return allPassed;
  }

  async createProductionBuild() {
    console.log('🏗️ Creating production build...');
    
    try {
      // Clean previous builds
      if (fs.existsSync('.next')) {
        execSync('rm -rf .next', { cwd: this.projectRoot });
      }
      
      // Create production build
      execSync('npm run build', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000
      });
      
      this.deploymentSteps.push({ step: 'Production build', status: 'passed' });
      console.log('✅ Production build created successfully');
      return true;
    } catch (error) {
      this.deploymentSteps.push({ step: 'Production build', status: 'failed', error: error.message });
      console.log('❌ Production build failed:', error.message);
      return false;
    }
  }

  async optimizeAssets() {
    console.log('🎨 Optimizing assets...');
    
    try {
      // Optimize images (if sharp is available)
      try {
        execSync('npx next-optimized-images', { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 60000
        });
        this.deploymentSteps.push({ step: 'Image optimization', status: 'passed' });
      } catch (error) {
        console.log('⚠️ Image optimization skipped (next-optimized-images not available)');
        this.deploymentSteps.push({ step: 'Image optimization', status: 'skipped' });
      }
      
      // Generate sitemap
      try {
        execSync('node scripts/seo-optimizer.cjs', { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 30000
        });
        this.deploymentSteps.push({ step: 'Sitemap generation', status: 'passed' });
      } catch (error) {
        console.log('⚠️ Sitemap generation skipped');
        this.deploymentSteps.push({ step: 'Sitemap generation', status: 'skipped' });
      }
      
      console.log('✅ Asset optimization completed');
      return true;
    } catch (error) {
      this.deploymentSteps.push({ step: 'Asset optimization', status: 'failed', error: error.message });
      console.log('❌ Asset optimization failed:', error.message);
      return false;
    }
  }

  async createDockerfile() {
    console.log('🐳 Creating Dockerfile...');
    
    const dockerfile = `# Use the official Node.js runtime as the base image
FROM node:18-alpine AS base

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

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]`;

    fs.writeFileSync(path.join(this.projectRoot, 'Dockerfile'), dockerfile);
    this.deploymentSteps.push({ step: 'Dockerfile creation', status: 'passed' });
    console.log('✅ Dockerfile created');
  }

  async createDockerCompose() {
    console.log('🐳 Creating docker-compose.yml...');
    
    const dockerCompose = `version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
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
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app
    restart: unless-stopped`;

    fs.writeFileSync(path.join(this.projectRoot, 'docker-compose.yml'), dockerCompose);
    this.deploymentSteps.push({ step: 'Docker Compose creation', status: 'passed' });
    console.log('✅ docker-compose.yml created');
  }

  async createNginxConfig() {
    console.log('🌐 Creating nginx configuration...');
    
    const nginxConfig = `events {
    worker_connections 1024;
}

http {
    upstream app {
        server app:3000;
    }

    server {
        listen 80;
        server_name _;

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

        location / {
            proxy_pass http://app;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
        }

        # Static files caching
        location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            proxy_pass http://app;
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}`;

    fs.writeFileSync(path.join(this.projectRoot, 'nginx.conf'), nginxConfig);
    this.deploymentSteps.push({ step: 'Nginx configuration', status: 'passed' });
    console.log('✅ nginx.conf created');
  }

  async generateDeploymentScript() {
    console.log('📜 Generating deployment script...');
    
    const deployScript = `#!/bin/bash

# Deployment script for Zion Tech Group App
set -e

echo "🚀 Starting deployment process..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Build and start the application
echo "🏗️ Building and starting the application..."
docker-compose up --build -d

# Wait for the application to be ready
echo "⏳ Waiting for the application to be ready..."
sleep 30

# Check if the application is running
if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    echo "✅ Application is running successfully!"
    echo "🌐 Application is available at: http://localhost:3000"
else
    echo "❌ Application failed to start. Check the logs with: docker-compose logs"
    exit 1
fi

echo "🎉 Deployment completed successfully!"`;

    fs.writeFileSync(path.join(this.projectRoot, 'deploy.sh'), deployScript);
    execSync('chmod +x deploy.sh', { cwd: this.projectRoot });
    this.deploymentSteps.push({ step: 'Deployment script', status: 'passed' });
    console.log('✅ deploy.sh created');
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      steps: this.deploymentSteps,
      total: this.deploymentSteps.length,
      passed: this.deploymentSteps.filter(step => step.status === 'passed').length,
      failed: this.deploymentSteps.filter(step => step.status === 'failed').length,
      skipped: this.deploymentSteps.filter(step => step.status === 'skipped').length
    };

    const reportPath = path.join(this.projectRoot, 'deployment-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Deployment automation report saved to ${reportPath}`);
    
    return report;
  }

  async run() {
    console.log('🚀 Starting deployment automation...');
    
    const preChecksPassed = await this.preDeploymentChecks();
    
    if (!preChecksPassed) {
      console.log('❌ Pre-deployment checks failed. Aborting deployment.');
      return;
    }
    
    await this.createProductionBuild();
    await this.optimizeAssets();
    await this.createDockerfile();
    await this.createDockerCompose();
    await this.createNginxConfig();
    await this.generateDeploymentScript();
    
    const report = this.generateReport();
    
    console.log('✅ Deployment automation completed!');
    console.log(`📊 Total steps: ${report.total}`);
    console.log(`✅ Passed: ${report.passed}`);
    console.log(`❌ Failed: ${report.failed}`);
    console.log(`⏭️ Skipped: ${report.skipped}`);
    
    return report;
  }
}

// Main execution
if (require.main === module) {
  const deployment = new DeploymentAutomation();
  deployment.run().catch(console.error);
}

module.exports = DeploymentAutomation;