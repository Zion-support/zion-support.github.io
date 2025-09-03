#!/usr/bin/env node

/**
 * Intelligent Deployment Pipeline
 * 
 * This script provides intelligent deployment automation including:
 * - Automated deployment triggers
 * - Health checks before and after deployment
 * - Smart rollback on failures
 * - Performance monitoring during deployment
 * - Dependency validation
 * - Environment-specific configurations
 */

const { execSync, spawn } = require('child_process')
const fs = require('fs')
const path = require('path')
const http = require('http')
class IntelligentDeploymentPipeline {
  constructor() {
    this.projectRoot = process.cwd()
    this.logsDir = path.join(this.projectRoot, 'logs')
    this.reportsDir = path.join(this.projectRoot, 'reports')
    this.deploymentsDir = path.join(this.projectRoot, 'deployments')
    // Ensure directories exist
    [this.logsDir, this.reportsDir, this.deploymentsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
    })
    this.logFile = path.join(this.logsDir, 'intelligent-deployment-pipeline.log')
    this.statusFile = path.join(this.reportsDir, 'deployment-status.json')
    // Configuration
    this.config = {
      autoDeploy: process.env.AUTO_DEPLOY === 'true',
      deployStrategy: process.env.DEPLOY_STRATEGY || 'intelligent',
      healthCheckUrl: process.env.HEALTH_CHECK_URL || 'http://localhost:3000/health',
      healthCheckTimeout: 30000, // 30 seconds
      maxDeploymentTime: 10 * 60 * 1000, // 10 minutes
      rollbackThreshold: 3, // Number of failed health checks before rollback
      deploymentInterval: 2 * 60 * 60 * 1000, // 2 hours
      environment: process.env.NODE_ENV || 'development'
    }
    this.stats = {
      deployments: 0,
      successful: 0,
      failed: 0,
      rollbacks: 0,
      lastDeployment: null,
      lastRollback: null,
      averageDeploymentTime: 0
    }
    this.currentDeployment = null
    this.deploymentHistory = []
    this.loadStatus()
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${level}] ${message}`
    console.log(logEntry)
    // Write to log file
    fs.appendFileSync(this.logFile, logEntry + '\n')
  }

  saveStatus() {
    this.stats.lastUpdate = new Date().toISOString()
    this.stats.deploymentHistory = this.deploymentHistory.slice(-10); // Keep last 10 deployments
    
    fs.writeFileSync(this.statusFile, JSON.stringify({
      stats: this.stats,
      currentDeployment: this.currentDeployment,
      config: this.config
    }, null, 2))
  }

  loadStatus() {
    if (fs.existsSync(this.statusFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'))
        this.stats = { ...this.stats, ...data.stats }
        this.deploymentHistory = data.deploymentHistory || []
        this.currentDeployment = data.currentDeployment
      } catch (error) {
        this.log(`Error loading status: ${error.message}`, 'ERROR')
      }
    }
  }

  async executeCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn('bash', ['-c', command], {
        cwd: this.projectRoot,
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      })
      let stdout = ''
      let stderr = ''
      if (options.silent) {
        child.stdout.on('data', (data) => {
          stdout += data.toString()
        })
        child.stderr.on('data', (data) => {
          stderr += data.toString()
        })
      }

      child.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, stdout, stderr, code })
        } else {
          reject({ success: false, stdout, stderr, code })
        }
      })
      child.on('error', (error) => {
        reject({ success: false, error: error.message })
      })
    })
  }

  async checkHealth(url, timeout = 30000) {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve({ healthy: false, error: 'Timeout' })
      }, timeout)
      const req = http.get(url, (res) => {
        clearTimeout(timer)
        const healthy = res.statusCode >= 200 && res.statusCode < 300
        resolve({ healthy, statusCode: res.statusCode })
      })
      req.on('error', (error) => {
        clearTimeout(timer)
        resolve({ healthy: false, error: error.message })
      })
      req.setTimeout(timeout, () => {
        clearTimeout(timer)
        req.destroy()
        resolve({ healthy: false, error: 'Request timeout' })
      })
    })
  }

  async performHealthCheck(description = 'Health check') {
    try {
      this.log(`Performing ${description}...`)
      const health = await this.checkHealth(this.config.healthCheckUrl, this.config.healthCheckTimeout)
      if (health.healthy) {
        this.log(`✅ ${description} passed`)
        return true
      } else {
        this.log(`❌ ${description} failed: ${health.error || `Status ${health.statusCode}`}`, 'ERROR')
        return false
      }
    } catch (error) {
      this.log(`❌ ${description} error: ${error.message}`, 'ERROR')
      return false
    }
  }

  async validateDependencies() {
    try {
      this.log('Validating dependencies...')
      // Check if package.json exists
      if (!fs.existsSync(path.join(this.projectRoot, 'package.json'))) {
        throw new Error('package.json not found')
      }
      
      // Check if node_modules exists and is not empty
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules')
      if (!fs.existsSync(nodeModulesPath)) {
        this.log('Installing dependencies...')
        await this.executeCommand('npm install --legacy-peer-deps')
      }
      
      // Check for critical dependencies
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'))
      const criticalDeps = ['next', 'react', 'react-dom']
      for (const dep of criticalDeps) {
        if (!packageJson.dependencies[dep] && !packageJson.devDependencies[dep]) {
          throw new Error(`Critical dependency missing: ${dep}`)
        }
      }
      
      this.log('✅ Dependencies validation passed')
      return true
    } catch (error) {
      this.log(`❌ Dependencies validation failed: ${error.message}`, 'ERROR')
      return false
    }
  }

  async buildProject() {
    try {
      this.log('Building project...')
      // Run build command
      await this.executeCommand('npm run build')
      this.log('✅ Project build successful')
      return true
    } catch (error) {
      this.log(`❌ Project build failed: ${error.message}`, 'ERROR')
      return false
    }
  }

  async runTests() {
    try {
      this.log('Running tests...')
      // Run test command if available
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'))
      if (packageJson.scripts.test) {
        await this.executeCommand('npm test')
        this.log('✅ Tests passed')
      } else {
        this.log('⚠️  No test script found, skipping tests')
      }
      
      return true
    } catch (error) {
      this.log(`❌ Tests failed: ${error.message}`, 'ERROR')
      return false
    }
  }

  async deploy() {
    try {
      this.log('🚀 Starting intelligent deployment...')
      const deploymentId = `deploy-${Date.now()}`
      const startTime = Date.now()
      this.currentDeployment = {
        id: deploymentId,
        startTime: new Date().toISOString(),
        status: 'in_progress',
        steps: []
      }
      // Step 1: Pre-deployment health check
      this.currentDeployment.steps.push({ name: 'pre_deployment_health_check', status: 'pending' })
      const preHealth = await this.performHealthCheck('Pre-deployment health check')
      if (!preHealth) {
        throw new Error('Pre-deployment health check failed')
      }
      this.currentDeployment.steps[0].status = 'completed'
      // Step 2: Validate dependencies
      this.currentDeployment.steps.push({ name: 'dependency_validation', status: 'pending' })
      const depsValid = await this.validateDependencies()
      if (!depsValid) {
        throw new Error('Dependency validation failed')
      }
      this.currentDeployment.steps[1].status = 'completed'
      // Step 3: Run tests
      this.currentDeployment.steps.push({ name: 'test_execution', status: 'pending' })
      const testsPassed = await this.runTests()
      if (!testsPassed) {
        throw new Error('Tests failed')
      }
      this.currentDeployment.steps[2].status = 'completed'
      // Step 4: Build project
      this.currentDeployment.steps.push({ name: 'project_build', status: 'pending' })
      const buildSuccess = await this.buildProject()
      if (!buildSuccess) {
        throw new Error('Project build failed')
      }
      this.currentDeployment.steps[3].status = 'completed'
      // Step 5: Deploy to PM2
      this.currentDeployment.steps.push({ name: 'pm2_deployment', status: 'pending' })
      await this.executeCommand('pm2 reload ecosystem.config.cjs --env production')
      this.currentDeployment.steps[4].status = 'completed'
      // Step 6: Post-deployment health check
      this.currentDeployment.steps.push({ name: 'post_deployment_health_check', status: 'pending' })
      // Wait for services to start
      await new Promise(resolve => setTimeout(resolve, 10000))
      const postHealth = await this.performHealthCheck('Post-deployment health check')
      if (!postHealth) {
        throw new Error('Post-deployment health check failed')
      }
      this.currentDeployment.steps[5].status = 'completed'
      // Deployment successful
      const endTime = Date.now()
      const duration = endTime - startTime
      this.currentDeployment.status = 'completed'
      this.currentDeployment.endTime = new Date().toISOString()
      this.currentDeployment.duration = duration
      this.stats.deployments++
      this.stats.successful++
      this.stats.lastDeployment = new Date().toISOString()
      // Update average deployment time
      this.stats.averageDeploymentTime = 
        (this.stats.averageDeploymentTime * (this.stats.deployments - 1) + duration) / this.stats.deployments
      this.log(`✅ Deployment completed successfully in ${duration}ms`)
      // Add to history
      this.deploymentHistory.push({ ...this.currentDeployment })
      if (this.deploymentHistory.length > 20) {
        this.deploymentHistory = this.deploymentHistory.slice(-20)
      }
      
      return true
    } catch (error) {
      this.log(`❌ Deployment failed: ${error.message}`, 'ERROR')
      if (this.currentDeployment) {
        this.currentDeployment.status = 'failed'
        this.currentDeployment.endTime = new Date().toISOString()
        this.currentDeployment.error = error.message
      }
      
      this.stats.deployments++
      this.stats.failed++
      // Attempt rollback
      await this.rollback()
      return false
    } finally {
      this.saveStatus()
      this.currentDeployment = null
    }
  }

  async rollback() {
    try {
      this.log('🔄 Attempting rollback...')
      // Check if we have a previous successful deployment
      const lastSuccessful = this.deploymentHistory
        .filter(d => d.status === 'completed')
        .pop()
      if (!lastSuccessful) {
        this.log('⚠️  No previous successful deployment found for rollback')
        return false
      }
      
      // Rollback to previous version
      await this.executeCommand('git reset --hard HEAD~1')
      await this.executeCommand('npm install --legacy-peer-deps')
      await this.executeCommand('npm run build')
      await this.executeCommand('pm2 reload ecosystem.config.cjs --env production')
      this.stats.rollbacks++
      this.stats.lastRollback = new Date().toISOString()
      this.log('✅ Rollback completed successfully')
      return true
    } catch (error) {
      this.log(`❌ Rollback failed: ${error.message}`, 'ERROR')
      return false
    }
  }

  async monitorDeployment() {
    if (!this.currentDeployment || this.currentDeployment.status !== 'in_progress') {
      return
    }
    
    try {
      // Check deployment timeout
      const startTime = new Date(this.currentDeployment.startTime).getTime()
      const currentTime = Date.now()
      if (currentTime - startTime > this.config.maxDeploymentTime) {
        throw new Error('Deployment timeout exceeded')
      }
      
      // Perform health check during deployment
      const health = await this.performHealthCheck('Deployment health check')
      if (!health) {
        // Increment failure counter
        this.currentDeployment.healthCheckFailures = (this.currentDeployment.healthCheckFailures || 0) + 1
        if (this.currentDeployment.healthCheckFailures >= this.config.rollbackThreshold) {
          throw new Error('Health check failures exceeded threshold')
        }
      }
      
    } catch (error) {
      this.log(`Deployment monitoring error: ${error.message}`, 'ERROR')
      await this.rollback()
    }
  }

  async generateDeploymentReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        stats: this.stats,
        recentDeployments: this.deploymentHistory.slice(-5),
        currentDeployment: this.currentDeployment,
        environment: this.config.environment,
        health: await this.checkHealth(this.config.healthCheckUrl)
      }
      const reportFile = path.join(this.reportsDir, 'deployment-report.json')
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2))
      this.log('📊 Deployment report generated')
      return report
    } catch (error) {
      this.log(`Error generating deployment report: ${error.message}`, 'ERROR')
      return null
    }
  }

  async run() {
    this.log('🚀 Starting Intelligent Deployment Pipeline')
    // Main deployment loop
    const runDeployment = async () => {
      try {
        if (this.config.autoDeploy && !this.currentDeployment) {
          await this.deploy()
        }
        
        // Monitor current deployment
        await this.monitorDeployment()
        // Generate report
        await this.generateDeploymentReport()
      } catch (error) {
        this.log(`Deployment cycle error: ${error.message}`, 'ERROR')
      }
    }
    // Run initial cycle
    await runDeployment()
    // Schedule regular deployments
    setInterval(runDeployment, this.config.deploymentInterval)
    // Schedule monitoring (every 30 seconds)
    setInterval(() => this.monitorDeployment(), 30000)
    this.log('✅ Intelligent Deployment Pipeline is running')
    // Keep the process alive
    process.on('SIGINT', () => {
      this.log('🛑 Shutting down Intelligent Deployment Pipeline')
      this.saveStatus()
      process.exit(0)
    })
  }
}

// Start the deployment pipeline
if (require.main === module) {
  const pipeline = new IntelligentDeploymentPipeline()
  pipeline.run().catch(error => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
}

module.exports = IntelligentDeploymentPipeline;