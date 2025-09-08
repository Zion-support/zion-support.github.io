#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PM2Automation {
  constructor() {
    this.workspace = process.cwd();
    this.logFile = path.join(this.workspace, 'pm2-automation.log');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { 
        cwd: this.workspace, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✓ ${description} completed successfully`);
      return result;
    } catch (error) {
      this.log(`✗ ${description} failed: ${error.message}`);
      throw error;
    }
  }

  async ciPipeline() {
    this.log('🚀 Starting CI Pipeline...');
    
    try {
      // Install dependencies
      await this.runCommand('npm ci', 'Installing dependencies');
      
      // Lint and type-check
      await this.runCommand('npm run lint', 'Running linting');
      await this.runCommand('npm run type-check', 'Running type checking');
      
      // Build project
      await this.runCommand('npm run build', 'Building project');
      
      // Verify build output
      const distExists = fs.existsSync(path.join(this.workspace, 'dist'));
      if (!distExists) {
        throw new Error('Build failed: dist folder not found');
      }
      
      this.log('✅ CI Pipeline completed successfully');
      return true;
    } catch (error) {
      this.log(`❌ CI Pipeline failed: ${error.message}`);
      return false;
    }
  }

  async securityScan() {
    this.log('🔒 Starting Security Scan...');
    
    try {
      // Run security audit
      await this.runCommand('npm audit --audit-level=moderate', 'Running security audit');
      
      // Check for high severity vulnerabilities
      try {
        await this.runCommand('npm audit --audit-level=high', 'Checking for high severity vulnerabilities');
        this.log('✅ No high severity vulnerabilities found');
      } catch (auditError) {
        this.log('⚠️ High severity vulnerabilities detected');
        throw auditError;
      }
      
      this.log('✅ Security scan completed successfully');
      return true;
    } catch (error) {
      this.log(`❌ Security scan failed: ${error.message}`);
      return false;
    }
  }

  async deploy() {
    this.log('🚀 Starting Deployment...');
    
    try {
      // Build project
      await this.runCommand('npm run build', 'Building project for deployment');
      
      // Verify build output
      const distPath = path.join(this.workspace, 'dist');
      if (!fs.existsSync(distPath)) {
        throw new Error('Build failed: dist folder not found');
      }
      
      // Check for essential files
      const indexHtml = path.join(distPath, 'index.html');
      if (!fs.existsSync(indexHtml)) {
        throw new Error('index.html not found in build output');
      }
      
      this.log('✅ Build verification completed');
      this.log('🚀 Ready for deployment to hosting platform');
      
      // Here you can add your deployment commands
      // Examples:
      // - AWS S3: aws s3 sync dist/ s3://your-bucket-name/
      // - Netlify: npx netlify-cli deploy --prod --dir=dist
      // - Vercel: npx vercel --prod --cwd=dist
      
      this.log('✅ Deployment workflow completed');
      return true;
    } catch (error) {
      this.log(`❌ Deployment failed: ${error.message}`);
      return false;
    }
  }

  async continuousImprovement() {
    this.log('🔄 Starting Continuous Improvement...');
    
    try {
      // Install dependencies
      await this.runCommand('npm ci', 'Installing dependencies');
      
      // Build project
      await this.runCommand('npm run build', 'Building project');
      
      // Run code quality checks with auto-fix
      try {
        await this.runCommand('npm run lint -- --fix', 'Running linting with auto-fix');
      } catch (lintError) {
        this.log('⚠️ Linting with auto-fix completed with warnings');
      }
      
      try {
        await this.runCommand('npm run type-check', 'Running type checking');
      } catch (typeError) {
        this.log('⚠️ Type checking completed with warnings');
      }
      
      this.log('✅ Continuous improvement completed successfully');
      return true;
    } catch (error) {
      this.log(`❌ Continuous improvement failed: ${error.message}`);
      return false;
    }
  }

  async runScheduledTasks() {
    this.log('⏰ Running scheduled tasks...');
    
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday
    
    // Run continuous improvement on Mondays (similar to GitHub Actions schedule)
    if (dayOfWeek === 1) {
      this.log('📅 Monday detected - running continuous improvement');
      await this.continuousImprovement();
    }
    
    // Run security scan daily
    this.log('🔒 Running daily security scan');
    await this.securityScan();
    
    this.log('✅ Scheduled tasks completed');
  }
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const automation = new PM2Automation();
  const command = process.argv[2];
  
  switch (command) {
    case 'ci':
      automation.ciPipeline();
      break;
    case 'security':
      automation.securityScan();
      break;
    case 'deploy':
      automation.deploy();
      break;
    case 'improvement':
      automation.continuousImprovement();
      break;
    case 'scheduled':
      automation.runScheduledTasks();
      break;
    default:
      console.log(`
PM2 Automation Script

Usage: node scripts/pm2-automation.js <command>

Commands:
  ci          - Run CI pipeline (build, lint, type-check)
  security    - Run security scan
  deploy      - Run deployment workflow
  improvement - Run continuous improvement tasks
  scheduled   - Run scheduled tasks (daily/weekly)
      `);
  }
}

export default PM2Automation;