#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.deploymentStatus = {
      preDeploymentChecks: [],
      buildStatus: null,
      testStatus: null,
      deploymentReady: false,
      errors: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const emoji = {
      info: 'ℹ️',
      success: '✅',
      error: '❌',
      warning: '⚠️'
    };
    console.log(`[${timestamp}] ${emoji[type]} ${message}`);
  }

  async runCommand(command, description) {
    this.log(`🚀 ${description}`, 'info');
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ ${description} completed successfully`, 'success');
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...', 'info');
    
    const checks = [
      { name: 'Dependencies', command: 'npm install', description: 'Installing dependencies' },
      { name: 'Linting', command: 'npm run lint', description: 'Running linting' },
      { name: 'Type Check', command: 'npm run type-check', description: 'Running type checking' },
      { name: 'Build', command: 'npm run build', description: 'Building application' }
    ];

    for (const check of checks) {
      const result = await this.runCommand(check.command, check.description);
      this.deploymentStatus.preDeploymentChecks.push({
        name: check.name,
        success: result.success,
        error: result.error
      });

      if (!result.success) {
        this.deploymentStatus.errors.push(`${check.name}: ${result.error}`);
      }
    }

    this.deploymentStatus.deploymentReady = this.deploymentStatus.errors.length === 0;
  }

  async createDeploymentScript() {
    this.log('📝 Creating deployment script...', 'info');
    
    const deploymentScript = `#!/bin/bash

# Deployment Script for Zion Tech Group
# Generated on ${new Date().toISOString()}

set -e

echo "🚀 Starting deployment process..."

# Pre-deployment checks
echo "🔍 Running pre-deployment checks..."
npm install
npm run lint
npm run type-check
npm run build

# Create deployment package
echo "📦 Creating deployment package..."
tar -czf deployment-$(date +%Y%m%d-%H%M%S).tar.gz .next public package.json package-lock.json

echo "✅ Deployment package created successfully"
echo "📋 Deployment ready for production"

# Optional: Deploy to production
# echo "🌐 Deploying to production..."
# # Add your deployment commands here
# # Example: rsync, scp, docker push, etc.

echo "🎉 Deployment process completed!"
`;

    const scriptPath = path.join(this.projectRoot, 'deploy.sh');
    fs.writeFileSync(scriptPath, deploymentScript);
    fs.chmodSync(scriptPath, '755');
    
    this.log(`✅ Deployment script created: ${scriptPath}`, 'success');
  }

  async createDockerfile() {
    this.log('🐳 Creating optimized Dockerfile...', 'info');
    
    const dockerfile = `# Multi-stage build for production
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
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

CMD ["node", "server.js"]
`;

    const dockerfilePath = path.join(this.projectRoot, 'Dockerfile.production');
    fs.writeFileSync(dockerfilePath, dockerfile);
    
    this.log(`✅ Production Dockerfile created: ${dockerfilePath}`, 'success');
  }

  async createGitHubActions() {
    this.log('🔄 Creating GitHub Actions workflow...', 'info');
    
    const workflow = `name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
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
      run: npm test
    
    - name: Build application
      run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to production
      run: |
        echo "Deploying to production..."
        # Add your deployment commands here
`;

    const workflowDir = path.join(this.projectRoot, '.github', 'workflows');
    if (!fs.existsSync(workflowDir)) {
      fs.mkdirSync(workflowDir, { recursive: true });
    }
    
    const workflowPath = path.join(workflowDir, 'ci-cd.yml');
    fs.writeFileSync(workflowPath, workflow);
    
    this.log(`✅ GitHub Actions workflow created: ${workflowPath}`, 'success');
  }

  async generateDeploymentReport() {
    const report = {
      timestamp: new Date().toISOString(),
      deploymentStatus: this.deploymentStatus,
      recommendations: [
        'Set up automated testing in CI/CD pipeline',
        'Implement blue-green deployment strategy',
        'Add monitoring and alerting for production',
        'Set up automated rollback mechanisms',
        'Implement security scanning in deployment pipeline'
      ],
      nextSteps: [
        'Review and customize deployment scripts',
        'Set up production environment variables',
        'Configure monitoring and logging',
        'Test deployment in staging environment',
        'Schedule production deployment'
      ]
    };

    const reportPath = path.join(this.projectRoot, 'deployment-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📋 Deployment report generated: ${reportPath}`, 'success');
  }

  async runAll() {
    this.log('🚀 Starting deployment automation...', 'info');
    
    await this.preDeploymentChecks();
    await this.createDeploymentScript();
    await this.createDockerfile();
    await this.createGitHubActions();
    await this.generateDeploymentReport();
    
    if (this.deploymentStatus.deploymentReady) {
      this.log('🎉 Deployment automation completed successfully!', 'success');
    } else {
      this.log('⚠️ Deployment automation completed with issues. Please review errors.', 'warning');
    }
    
    return this.deploymentStatus;
  }
}

// Run if called directly
if (require.main === module) {
  const deployment = new DeploymentAutomation();
  deployment.runAll().catch(console.error);
}

module.exports = DeploymentAutomation;