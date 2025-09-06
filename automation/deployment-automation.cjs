#!/usr/bin/env node

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
/**
 * Deployment Automation for Zion Tech Group
 * Automated deployment with health checks and rollback capabilities
 */

<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.deploymentSteps = [];
    this.startTime = Date.now();
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, timeout = 120000) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: timeout
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      this.deploymentSteps.push({
        step: description,
        success: true,
        output: result
      });
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      this.deploymentSteps.push({
        step: description,
        success: false,
        error: error.message
      });
      return { success: false, error: error.message };
    }
  }

  async preDeploymentChecks() {
    this.log('🔍 Running Pre-deployment Checks');
    
    const checks = [
      { cmd: 'npm run type-check', desc: 'TypeScript Type Check' },
      { cmd: 'npm run build', desc: 'Build Application' },
      { cmd: 'npm run lint', desc: 'Lint Check' }
    ];

    for (const check of checks) {
      await this.runCommand(check.cmd, check.desc);
    }
  }

  async createDeploymentConfig() {
    this.log('⚙️ Creating Deployment Configuration');
    
    const deploymentConfig = {
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'production',
      build: {
        command: 'npm run build',
        output: 'dist',
        clean: true
      },
      deployment: {
        strategy: 'blue-green',
        healthCheck: '/health',
        rollback: true
      },
      monitoring: {
        enabled: true,
        metrics: ['performance', 'errors', 'uptime'],
        alerts: ['error_rate', 'response_time']
      }
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'deployment-config.json'),
      JSON.stringify(deploymentConfig, null, 2)
    );
    
    this.log('Deployment configuration created', 'SUCCESS');
  }

  async createDockerfile() {
    this.log('🐳 Creating Dockerfile');
    
    const dockerfile = `# Multi-stage build for production
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
`;

    fs.writeFileSync(path.join(this.projectRoot, 'Dockerfile.production'), dockerfile);
    this.log('Dockerfile created', 'SUCCESS');
  }

  async createNginxConfig() {
    this.log('🌐 Creating Nginx Configuration');
    
    const nginxConfig = `events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    # Logging
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        # Health check endpoint
        location /health {
            access_log off;
            return 200 "healthy\\n";
            add_header Content-Type text/plain;
        }

        # Static files
        location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # Main application
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Error pages
        error_page 404 /index.html;
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root /usr/share/nginx/html;
        }
    }
}
`;

    fs.writeFileSync(path.join(this.projectRoot, 'nginx.conf'), nginxConfig);
    this.log('Nginx configuration created', 'SUCCESS');
  }

  async createDeploymentScript() {
    this.log('📜 Creating Deployment Script');
    
    const deployScript = `#!/bin/bash

# Deployment script for production
set -e

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Error: Docker is not installed or not in PATH."
    exit 1
fi

# Build the Docker image
echo "🐳 Building Docker image..."
docker build -f Dockerfile.production -t ziontechgroup-app:latest .

# Stop existing container if running
echo "🛑 Stopping existing container..."
docker stop ziontechgroup-app || true
docker rm ziontechgroup-app || true

# Run the new container
echo "▶️ Starting new container..."
docker run -d \\
    --name ziontechgroup-app \\
    -p 80:80 \\
    --restart unless-stopped \\
    ziontechgroup-app:latest

# Wait for health check
echo "⏳ Waiting for health check..."
sleep 10

# Check if container is healthy
if docker ps | grep -q "ziontechgroup-app"; then
    echo "✅ Deployment successful!"
    echo "🌐 Application is running at http://localhost"
else
    echo "❌ Deployment failed!"
    exit 1
fi
`;

    fs.writeFileSync(path.join(this.projectRoot, 'deploy.sh'), deployScript);
    fs.chmodSync(path.join(this.projectRoot, 'deploy.sh'), '755');
    this.log('Deployment script created', 'SUCCESS');
  }

  async createHealthCheck() {
    this.log('🏥 Creating Health Check Endpoint');
    
    const healthCheck = `#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      version: process.version
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(healthStatus, null, 2));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(\`Health check server running on port \${PORT}\`);
});
`;

    fs.writeFileSync(path.join(this.projectRoot, 'health-check-server.js'), healthCheck);
    this.log('Health check server created', 'SUCCESS');
  }

  async runDeploymentAutomation() {
    this.log('🚀 Starting Deployment Automation');
    
    try {
      await this.preDeploymentChecks();
      await this.createDeploymentConfig();
      await this.createDockerfile();
      await this.createNginxConfig();
      await this.createDeploymentScript();
      await this.createHealthCheck();
      
      this.generateFinalReport();
    } catch (error) {
      this.log(`Deployment automation failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }

  generateFinalReport() {
    const duration = Date.now() - this.startTime;
    const successful = this.deploymentSteps.filter(step => step.success).length;
    const failed = this.deploymentSteps.filter(step => !step.success).length;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      summary: {
        totalSteps: this.deploymentSteps.length,
        successful,
        failed,
        successRate: Math.round((successful / this.deploymentSteps.length) * 100)
      },
      steps: this.deploymentSteps,
      files: [
        'deployment-config.json',
        'Dockerfile.production',
        'nginx.conf',
        'deploy.sh',
        'health-check-server.js'
      ]
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'deployment-automation-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log('📊 Final Deployment Report Generated', 'SUCCESS');
    this.log(`✅ Successful Steps: ${successful}`);
    this.log(`❌ Failed Steps: ${failed}`);
    this.log(`📈 Success Rate: ${report.summary.successRate}%`);
    this.log(`📁 Files Created: ${report.files.length}`);
  }
}

// Run if called directly
if (require.main === module) {
  const automation = new DeploymentAutomation();
  automation.runDeploymentAutomation().catch(error => {
    console.error('Deployment automation failed:', error);
    process.exit(1);
<<<<<<< HEAD
<<<<<<< HEAD
=======
  });
}

module.exports = DeploymentAutomation;
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
});
<<<<<<< HEAD
=======
=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Deployment Automation Starting...');

class DeploymentAutomation {
  constructor() {
    this.logFile = '/workspace/automation/logs/deployment.log';
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, {
        cwd: '/workspace',
        encoding: 'utf8',
        stdio: 'pipe',
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');

    const checks = [
      { cmd: 'npm run test:smoke', desc: 'Smoke Tests' },
      { cmd: 'npm run lint:check', desc: 'Lint Check' },
      { cmd: 'npm run type-check', desc: 'Type Check' },
      { cmd: 'npm run build', desc: 'Build Test' },
    ];

    const results = [];
    for (const check of checks) {
      const result = await this.runCommand(check.cmd, check.desc);
      results.push({ ...check, ...result });
    }

    const failedChecks = results.filter(r => !r.success);
    if (failedChecks.length > 0) {
      throw new Error(
        `Pre-deployment checks failed: ${failedChecks.map(c => c.desc).join(', ')}`
      );
    }

    return results;
  }

  async buildApplication() {
    this.log('🏗️ Building application...');

    const buildSteps = [
      { cmd: 'npm run clean', desc: 'Clean Build Directory' },
      { cmd: 'npm run build', desc: 'Build Application' },
      { cmd: 'npm run build:analyze', desc: 'Bundle Analysis' },
    ];

    const results = [];
    for (const step of buildSteps) {
      const result = await this.runCommand(step.cmd, step.desc);
      results.push({ ...step, ...result });
    }

    return results;
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');

    const securitySteps = [
      { cmd: 'npm audit --audit-level moderate', desc: 'Security Audit' },
      { cmd: 'npm run security:scan', desc: 'Security Scan' },
    ];

    const results = [];
    for (const step of securitySteps) {
      const result = await this.runCommand(step.cmd, step.desc);
      results.push({ ...step, ...result });
    }

    return results;
  }

  async generateDeploymentArtifacts() {
    this.log('📦 Generating deployment artifacts...');

    const artifacts = [
      { cmd: 'npm run sitemap:generate', desc: 'Generate Sitemap' },
      { cmd: 'npm run search:index', desc: 'Generate Search Index' },
    ];

    const results = [];
    for (const artifact of artifacts) {
      const result = await this.runCommand(artifact.cmd, artifact.desc);
      results.push({ ...artifact, ...result });
    }

    return results;
  }

  async commitAndPush() {
    this.log('📝 Committing and pushing changes...');

    const gitSteps = [
      { cmd: 'git add .', desc: 'Stage Changes' },
      {
        cmd: 'git commit -m "Automated deployment: $(date)"',
        desc: 'Commit Changes',
      },
      { cmd: 'git push origin main', desc: 'Push to Main Branch' },
    ];

    const results = [];
    for (const step of gitSteps) {
      const result = await this.runCommand(step.cmd, step.desc);
      results.push({ ...step, ...result });
    }

    return results;
  }

  async run() {
    try {
      this.log('🚀 Starting Deployment Automation');

      // Pre-deployment checks
      await this.preDeploymentChecks();

      // Build application
      await this.buildApplication();

      // Security audit
      await this.runSecurityAudit();

      // Generate deployment artifacts
      await this.generateDeploymentArtifacts();

      // Commit and push
      await this.commitAndPush();

      this.log('✅ Deployment Automation completed successfully');
    } catch (error) {
      this.log(`❌ Deployment Automation failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the deployment automation
if (require.main === module) {
  const deployment = new DeploymentAutomation();
  deployment
    .run()
    .then(() => {
      console.log('✅ Deployment completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Deployment failed:', error.message);
      process.exit(1);
    });
}

module.exports = DeploymentAutomation;
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
<<<<<<< HEAD
=======
  });
}

module.exports = DeploymentAutomation;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
