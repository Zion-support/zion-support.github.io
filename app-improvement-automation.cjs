#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AppImprovementAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'app-improvement.log');
    this.ensureDirectories()}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir { recursive: true })}
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n')}

  async optimizeNextConfig() {
    this.log('⚙️ Optimizing Next.js configuration...');

    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    if (!fs.existsSync(nextConfigPath)) {
      this.log('❌ next.config.js not found');
      return { success: false, error: 'next.config.js not found' }}

    try {
      let config = fs.readFileSync(nextConfigPath, 'utf8');

      // Remove deprecated options
      config = config.replace(/newNextLinkBehavior:\s*true,?/g, '');
      config = config.replace(/esmExternals:\s*[^}]+[}]?/g, '');

      // Add performance optimizations
      if (!config.includes('experimental:')) {
        config = config.replace(
          /(module\.exports\s*=\s*{)/,
          "$1\n  experimental: {\n    optimizeCss: true,\n    optimizePackageImports: ['lucide-react', 'framer-motion'],\n  }",
        )}

      // Add compression
      if (!config.includes('compress:')) {
        config = config.replace(
          /(module\.exports\s*=\s*{)/,
          '$1\n  compress: true',
        )}

      // Add poweredByHeader: false for security
      if (!config.includes('poweredByHeader:')) {
        config = config.replace(
          /(module\.exports\s*=\s*{)/,
          '$1\n  poweredByHeader: false',
        )}

      fs.writeFileSync(nextConfigPath, config);
      this.log('✅ Next.js configuration optimized');
      return { success: true }} catch (error) {
      this.log(`❌ Failed to optimize Next.js config: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async optimizePackageJson() {
    this.log('📦 Optimizing package.json...');

    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      this.log('❌ package.json not found');
      return { success: false, error: 'package.json not found' }}

    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

      // Add useful scripts
      const usefulScripts = {
        'dev:clean': 'rm -rf .next && npm run dev',
        'build:analyze': 'ANALYZE=true npm run build',
        'build:clean': 'rm -rf .next && npm run build',
        'lint:fix': 'next lint --fix',
        'type-check:watch': 'tsc --noEmit --watch',
        'test:ci': 'jest --ci --coverage --watchAll=false',
        clean: 'rm -rf .next node_modules/.cache',
        postinstall: 'npm run clean'};

      packageJson.scripts = { ...packageJson.scripts, ...usefulScripts };

      // Add engines field for better compatibility
      if (!packageJson.engines) {
        packageJson.engines = {
          node: '>=18.0.0',
          npm: '>=8.0.0'}}

      // Add repository info if missing
      if (!packageJson.repository) {
        packageJson.repository = {
          type: 'git',
          url: 'git+https://github.com/your-org/your-repo.git'}}

      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      this.log('✅ package.json optimized');
      return { success: true }} catch (error) {
      this.log(`❌ Failed to optimize package.json: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async createGitHooks() {
    this.log('🪝 Setting up Git hooks...');

    const gitHooksDir = path.join(this.projectRoot, '.git', 'hooks');
    if (!fs.existsSync(gitHooksDir)) {
      this.log('❌ Git hooks directory not found');
      return { success: false, error: 'Git hooks directory not found' }}

    try {
      // Pre-commit hook
      const preCommitHook = `#!/bin/sh
# Pre-commit hook
echo "🔍 Running pre-commit checks..."

# Run linting
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ Linting failed. Please fix the issues before committing."
  exit 1
fi

# Run type checking
npm run type-check
if [ $? -ne 0 ]; then
  echo "❌ Type checking failed. Please fix the issues before committing."
  exit 1
fi

echo "✅ Pre-commit checks passed"
`;

      const preCommitPath = path.join(gitHooksDir, 'pre-commit');
      fs.writeFileSync(preCommitPath, preCommitHook);
      fs.chmodSync(preCommitPath, '755');

      // Pre-push hook
      const prePushHook = `#!/bin/sh
# Pre-push hook
echo "🧪 Running pre-push checks..."

# Run tests
npm run test:ci
if [ $? -ne 0 ]; then
  echo "❌ Tests failed. Please fix the issues before pushing."
  exit 1
fi

echo "✅ Pre-push checks passed"
`;

      const prePushPath = path.join(gitHooksDir, 'pre-push');
      fs.writeFileSync(prePushPath, prePushHook);
      fs.chmodSync(prePushPath, '755');

      this.log('✅ Git hooks created');
      return { success: true }} catch (error) {
      this.log(`❌ Failed to create Git hooks: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async createDockerfile() {
    this.log('🐳 Creating optimized Dockerfile...');

    const dockerfilePath = path.join(this.projectRoot, 'Dockerfile');

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

CMD ["node", "server.js"]
`;

    try {
      fs.writeFileSync(dockerfilePath, dockerfile);
      this.log('✅ Dockerfile created');
      return { success: true }} catch (error) {
      this.log(`❌ Failed to create Dockerfile: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async createDockerCompose() {
    this.log('🐳 Creating docker-compose.yml...');

    const dockerComposePath = path.join(this.projectRoot, 'docker-compose.yml');

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
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
    restart: unless-stopped
`;

    try {
      fs.writeFileSync(dockerComposePath, dockerCompose);
      this.log('✅ docker-compose.yml created');
      return { success: true }} catch (error) {
      this.log(`❌ Failed to create docker-compose.yml: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async createNginxConfig() {
    this.log('🌐 Creating Nginx configuration...');

    const nginxConfigPath = path.join(this.projectRoot, 'nginx.conf');

    const nginxConfig = `events {
    worker_connections 1024}

http {
    upstream app {
        server app:3000}

    server {
        listen 80;
        server_name localhost;

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
            proxy_cache_bypass $http_upgrade}

        # Static files caching
        location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            proxy_pass http://app;
            expires 1y;
            add_header Cache-Control "public, immutable"}
    }
}
`;

    try {
      fs.writeFileSync(nginxConfigPath, nginxConfig);
      this.log('✅ Nginx configuration created');
      return { success: true }} catch (error) {
      this.log(`❌ Failed to create Nginx config: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async createHealthCheck() {
    this.log('🏥 Creating health check endpoint...');

    const healthCheckPath = path.join(
      this.projectRoot,
      'pages',
      'api',
      'health.js'
    );
    const apiDir = path.dirname(healthCheckPath);

    if (!fs.existsSync(apiDir)) {
      fs.mkdirSync(apiDir { recursive: true })}

    const healthCheck = `export default function handler(req, res) {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version || '1.0.0'
  };

  try {
    res.status(200).json(healthCheck)} catch (error) {
    healthCheck.message = error.message;
    res.status(503).json(healthCheck)}
}
`;

    try {
      fs.writeFileSync(healthCheckPath, healthCheck);
      this.log('✅ Health check endpoint created');
      return { success: true }} catch (error) {
      this.log(`❌ Failed to create health check: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async createCIWorkflow() {
    this.log('🔄 Creating GitHub Actions workflow...');

    const workflowDir = path.join(this.projectRoot, '.github', 'workflows');
    if (!fs.existsSync(workflowDir)) {
      fs.mkdirSync(workflowDir { recursive: true })}

    const workflowPath = path.join(workflowDir, 'ci.yml');

    const workflow = `name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
    - uses: actions/checkout@v4
    
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: \${{ matrix.node-version }}
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
    
    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Deploy to production
      run: echo "Deploy to production server"
`;

    try {
      fs.writeFileSync(workflowPath, workflow);
      this.log('✅ GitHub Actions workflow created');
      return { success: true }} catch (error) {
      this.log(`❌ Failed to create workflow: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async run() {
    this.log('🚀 Starting App Improvement Automation');

    const results = {
      timestamp: new Date().toISOString(),
      optimizations: {}};

    // Run all optimizations
    results.optimizations.nextConfig = await this.optimizeNextConfig();
    results.optimizations.packageJson = await this.optimizePackageJson();
    results.optimizations.gitHooks = await this.createGitHooks();
    results.optimizations.dockerfile = await this.createDockerfile();
    results.optimizations.dockerCompose = await this.createDockerCompose();
    results.optimizations.nginxConfig = await this.createNginxConfig();
    results.optimizations.healthCheck = await this.createHealthCheck();
    results.optimizations.ciWorkflow = await this.createCIWorkflow();

    // Generate report
    const reportPath = path.join(
      this.reportsDir,
      'app-improvement-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

    this.log('📊 Report generated: ' + reportPath);
    this.log('🎉 App Improvement Automation Completed');

    return results}
}

// Run the automation
const automation = new AppImprovementAutomation();
automation.run().catch(console.error);
