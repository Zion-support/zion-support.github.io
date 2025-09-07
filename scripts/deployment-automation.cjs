#!/usr/bin/env node
/**
 * Deployment Automation Script
 * Automated deployment pipeline for Zion Tech Group application
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.deploymentSteps = [];
    this.errors = [];
    this.warnings = [];
  }

  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');
    
    const checks = [
      {
        name: 'Dependencies Check',
        command: 'npm ci',
        description: 'Installing dependencies'
      },
      {
        name: 'Type Check',
        command: 'npm run type-check',
        description: 'Running TypeScript type checking'
      },
      {
        name: 'Lint Check',
        command: 'npm run lint',
        description: 'Running ESLint checks'
      },
      {
        name: 'Build Test',
        command: 'npm run build',
        description: 'Testing production build'
      }
    ];

    for (const check of checks) {
      try {
        this.log(`Running ${check.name}...`);
        execSync(check.command, { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 120000
        });
        
        this.deploymentSteps.push({
          step: check.name,
          status: 'success',
          description: check.description
        });
        this.log(`${check.name} passed`, 'success');
      } catch (error) {
        this.deploymentSteps.push({
          step: check.name,
          status: 'failed',
          description: check.description,
          error: error.message
        });
        this.errors.push(`${check.name}: ${error.message}`);
        this.log(`${check.name} failed: ${error.message}`, 'error');
      }
    }
  }

  async optimizeForProduction() {
    this.log('⚡ Optimizing for production...');
    
    try {
      // Remove development dependencies from build
      this.log('Cleaning up development files...');
      
      const devFiles = [
        'src_backup_temp',
        'test-reports',
        'coverage',
        '.nyc_output'
      ];
      
      for (const file of devFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          execSync(`rm -rf "${filePath}"`, { cwd: this.projectRoot });
          this.log(`Removed ${file}`, 'success');
        }
      }
      
      // Optimize images if any exist
      this.log('Checking for image optimization...');
      const publicDir = path.join(this.projectRoot, 'public');
      if (fs.existsSync(publicDir)) {
        const images = fs.readdirSync(publicDir).filter(file => 
          /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        );
        
        if (images.length > 0) {
          this.log(`Found ${images.length} images in public directory`);
          this.warnings.push('Consider optimizing images for better performance');
        }
      }
      
      this.deploymentSteps.push({
        step: 'Production Optimization',
        status: 'success',
        description: 'Optimized application for production'
      });
      
      this.log('Production optimization completed', 'success');
      return true;
    } catch (error) {
      this.deploymentSteps.push({
        step: 'Production Optimization',
        status: 'failed',
        description: 'Failed to optimize for production',
        error: error.message
      });
      this.errors.push(`Production optimization failed: ${error.message}`);
      this.log(`Production optimization failed: ${error.message}`, 'error');
      return false;
    }
  }

  async generateDeploymentPackage() {
    this.log('📦 Generating deployment package...');
    
    try {
      // Create deployment directory
      const deployDir = path.join(this.projectRoot, 'deployment');
      if (fs.existsSync(deployDir)) {
        execSync(`rm -rf "${deployDir}"`, { cwd: this.projectRoot });
      }
      fs.mkdirSync(deployDir, { recursive: true });
      
      // Copy necessary files
      const filesToCopy = [
        '.next',
        'public',
        'package.json',
        'package-lock.json',
        'next.config.js',
        'middleware.ts',
        'app',
        'pages',
        'components',
        'utils',
        'styles',
        'tailwind.config.js',
        'postcss.config.js',
        'tsconfig.json'
      ];
      
      for (const file of filesToCopy) {
        const sourcePath = path.join(this.projectRoot, file);
        const destPath = path.join(deployDir, file);
        
        if (fs.existsSync(sourcePath)) {
          if (fs.statSync(sourcePath).isDirectory()) {
            execSync(`cp -r "${sourcePath}" "${destPath}"`, { cwd: this.projectRoot });
          } else {
            fs.copyFileSync(sourcePath, destPath);
          }
          this.log(`Copied ${file}`, 'success');
        }
      }
      
      // Create deployment script
      const deployScript = `#!/bin/bash
# Zion Tech Group Deployment Script
echo "Starting deployment..."

# Install production dependencies
npm ci --only=production

# Start the application
npm start

echo "Deployment completed successfully!"
`;
      
      fs.writeFileSync(path.join(deployDir, 'deploy.sh'), deployScript);
      execSync(`chmod +x "${path.join(deployDir, 'deploy.sh')}"`, { cwd: this.projectRoot });
      
      this.deploymentSteps.push({
        step: 'Deployment Package',
        status: 'success',
        description: 'Generated deployment package'
      });
      
      this.log('Deployment package generated successfully', 'success');
      return true;
    } catch (error) {
      this.deploymentSteps.push({
        step: 'Deployment Package',
        status: 'failed',
        description: 'Failed to generate deployment package',
        error: error.message
      });
      this.errors.push(`Deployment package generation failed: ${error.message}`);
      this.log(`Deployment package generation failed: ${error.message}`, 'error');
      return false;
    }
  }

  async createDockerConfiguration() {
    this.log('🐳 Creating Docker configuration...');
    
    try {
      const dockerfile = `FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
`;

      const dockerCompose = `version: '3.8'

services:
  zion-app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
`;

      fs.writeFileSync(path.join(this.projectRoot, 'Dockerfile'), dockerfile);
      fs.writeFileSync(path.join(this.projectRoot, 'docker-compose.yml'), dockerCompose);
      
      this.deploymentSteps.push({
        step: 'Docker Configuration',
        status: 'success',
        description: 'Created Docker configuration files'
      });
      
      this.log('Docker configuration created', 'success');
      return true;
    } catch (error) {
      this.deploymentSteps.push({
        step: 'Docker Configuration',
        status: 'failed',
        description: 'Failed to create Docker configuration',
        error: error.message
      });
      this.errors.push(`Docker configuration failed: ${error.message}`);
      this.log(`Docker configuration failed: ${error.message}`, 'error');
      return false;
    }
  }

  async generateDeploymentReport() {
    const report = {
      timestamp: new Date().toISOString(),
      deploymentSteps: this.deploymentSteps,
      errors: this.errors,
      warnings: this.warnings,
      summary: {
        totalSteps: this.deploymentSteps.length,
        successfulSteps: this.deploymentSteps.filter(step => step.status === 'success').length,
        failedSteps: this.deploymentSteps.filter(step => step.status === 'failed').length,
        errorCount: this.errors.length,
        warningCount: this.warnings.length
      }
    };

    const reportPath = path.join(this.projectRoot, 'deployment-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Deployment report saved to ${reportPath}`, 'success');

    return report;
  }

  async run() {
    this.log('🚀 Starting Deployment Automation');
    
    try {
      await this.preDeploymentChecks();
      await this.optimizeForProduction();
      await this.generateDeploymentPackage();
      await this.createDockerConfiguration();
      
      const report = await this.generateDeploymentReport();
      
      this.log('✅ Deployment automation completed', 'success');
      this.log(`📊 Successful steps: ${report.summary.successfulSteps}/${report.summary.totalSteps}`);
      
      if (report.summary.failedSteps > 0) {
        this.log(`❌ Failed steps: ${report.summary.failedSteps}`, 'error');
      }
      
      if (report.summary.warningCount > 0) {
        this.log(`⚠️ Warnings: ${report.summary.warningCount}`);
      }
      
      return report;
    } catch (error) {
      this.log(`❌ Deployment automation failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const deployment = new DeploymentAutomation();
  deployment.run().catch(error => {
    console.error('Deployment automation failed:', error);
    process.exit(1);
  });
}

module.exports = DeploymentAutomation;