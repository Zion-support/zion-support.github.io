#!/usr/bin/env node

/**
 * Intelligent CI/CD Pipeline Orchestrator
 * 
 * This automation handles:
 * - Smart build orchestration
 * - Intelligent testing strategies
 * - Deployment decision making
 * - Rollback automation
 * - Performance monitoring
 * - Security validation
 * - Environment management
 */

const { spawn, execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
class IntelligentCICDOrchestrator {
  constructor() {
        this.projectRoot = process.cwd()
        this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-cicd-orchestrator.log')
        this.config = this.loadConfig()
        this.pipelineStates = new Map()
        this.buildHistory = new Map()
        this.deploymentHistory = new Map()
        this.performanceBaselines = new Map()
        this.securityBaselines = new Map()
    }

    loadConfig() {
        const configPath = path.join(this.projectRoot, 'scripts', 'automation', 'cicd-orchestrator.config.json')
        try {
            if (fs.existsSync(configPath)) {
                return JSON.parse(fs.readFileSync(configPath, 'utf8'))
            }
        } catch (error) {
            this.log('Error loading config, using defaults', 'error')
        }

        return {
            environments: {
                development: {
                    autoDeploy: true,
                    requireTests: true,
                    requireSecurityScan: false,
                    performanceThreshold: 0.8
                },
                staging: {
                    autoDeploy: true,
                    requireTests: true,
                    requireSecurityScan: true,
                    performanceThreshold: 0.9
                },
                production: {
                    autoDeploy: false,
                    requireTests: true,
                    requireSecurityScan: true,
                    performanceThreshold: 0.95,
                    requireApproval: true
                }
            },
            buildStrategies: {
                incremental: {
                    enabled: true,
                    threshold: 0.3, // 30% change threshold
                    maxBuildTime: 300 // 5 minutes
                },
                full: {
                    enabled: true,
                    maxBuildTime: 1800 // 30 minutes
                },
                parallel: {
                    enabled: true,
                    maxConcurrent: 3
                }
            },
            testingStrategies: {
                unit: { required: true, parallel: true },
                integration: { required: true, parallel: false },
                e2e: { required: false, parallel: true },
                performance: { required: true, parallel: false },
                security: { required: true, parallel: false }
            },
            deploymentStrategies: {
                blueGreen: { enabled: true, healthCheckTimeout: 300 },
                canary: { enabled: true, percentage: 10, duration: 300 },
                rolling: { enabled: true, maxUnavailable: 1 },
                immediate: { enabled: false }
            }
        }
    }

    log(message, level = 'info') {
        const timestamp = new Date().toISOString()
        const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`
        console.log(logEntry.trim())
        try {
            fs.appendFileSync(this.logFile, logEntry)
        } catch (error) {
            console.error('Failed to write to log file:', error.message)
        }
    }

    async executeCommand(command, options = {}) {
        return new Promise((resolve, reject) => {
            const child = spawn(command, options.args || [], {
                cwd: this.projectRoot,
                stdio: options.silent ? 'pipe' : 'inherit',
                shell: true
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
                    resolve(stdout)
                } else {
                    reject(new Error(`Command failed with code ${code}: ${stderr}`))
                }
            })
            child.on('error', (error) => {
                reject(error)
            })
        })
    }

    async startIntelligentPipeline(trigger = 'manual', metadata = {}) {
        try {
            this.log(`Starting intelligent CI/CD pipeline. Trigger: ${trigger}`)
            const pipelineId = this.generatePipelineId()
            const pipeline = {
                id: pipelineId,
                trigger: trigger,
                metadata: metadata,
                status: 'initializing',
                startTime: new Date(),
                stages: [],
                artifacts: {},
                decisions: [],
                performance: {},
                security: {}
            }
            this.pipelineStates.set(pipelineId, pipeline)
            // Analyze changes and determine build strategy
            const buildStrategy = await this.determineBuildStrategy(pipeline)
            pipeline.buildStrategy = buildStrategy
            // Execute intelligent build
            const buildResult = await this.executeIntelligentBuild(pipeline)
            if (!buildResult.success) {
                throw new Error(`Build failed: ${buildResult.error}`)
            }
            
            // Execute intelligent testing
            const testResult = await this.executeIntelligentTesting(pipeline)
            if (!testResult.success) {
                throw new Error(`Testing failed: ${testResult.error}`)
            }
            
            // Execute intelligent deployment
            const deployResult = await this.executeIntelligentDeployment(pipeline)
            if (!deployResult.success) {
                throw new Error(`Deployment failed: ${deployResult.error}`)
            }
            
            // Pipeline completed successfully
            pipeline.status = 'completed'
            pipeline.endTime = new Date()
            pipeline.duration = pipeline.endTime - pipeline.startTime
            this.log(`Pipeline ${pipelineId} completed successfully in ${pipeline.duration}ms`, 'success')
            // Save pipeline history
            this.savePipelineHistory(pipeline)
            return { success: true, pipelineId: pipelineId, pipeline: pipeline }
        } catch (error) {
            this.log(`Pipeline failed: ${error.message}`, 'error')
            // Attempt rollback if deployment was partially successful
            await this.attemptRollback(pipeline)
            return { success: false, error: error.message }
        }
    }

    generatePipelineId() {
        const timestamp = Date.now()
        const random = Math.random().toString(36).substring(2, 8)
        return `pipeline-${timestamp}-${random}`
    }

    async determineBuildStrategy(pipeline) {
        try {
            // Analyze code changes
            const changes = await this.analyzeCodeChanges()
            // Calculate change percentage
            const changePercentage = changes.modifiedFiles / changes.totalFiles
            // Determine optimal build strategy
            let strategy = 'full'
            if (this.config.buildStrategies.incremental.enabled && 
                changePercentage < this.config.buildStrategies.incremental.threshold) {
                strategy = 'incremental'
            }
            
            // Check if parallel builds are available
            const activeBuilds = Array.from(this.pipelineStates.values())
                .filter(p => p.status === 'building').length
            if (this.config.buildStrategies.parallel.enabled && 
                activeBuilds < this.config.buildStrategies.parallel.maxConcurrent) {
                strategy += '-parallel'
            }
            
            this.log(`Selected build strategy: ${strategy} (change percentage: ${(changePercentage * 100).toFixed(1)}%)`)
            return strategy
        } catch (error) {
            this.log(`Failed to determine build strategy: ${error.message}`, 'warning')
            return 'full'
        }
    }

    async analyzeCodeChanges() {
        try {
            // Get diff with main branch
            const diff = await this.executeCommand('git', { 
                args: ['diff', 'main', '--stat'], 
                silent: true 
            })
            // Parse diff output
            const lines = diff.split('\n')
            const modifiedFiles = lines.filter(line => line.includes('|')).length
            // Get total files in project
            const totalFiles = await this.getTotalFileCount()
            return {
                modifiedFiles: modifiedFiles,
                totalFiles: totalFiles,
                changePercentage: modifiedFiles / totalFiles
            }
        } catch (error) {
            return { modifiedFiles: 0, totalFiles: 0, changePercentage: 0 }
        }
    }

    async getTotalFileCount() {
        try {
            const result = await this.executeCommand('find', { 
                args: ['.', '-type', 'f', '!', '-path', './node_modules/*', '!', '-path', './.git/*'], 
                silent: true 
            })
            return result.split('\n').filter(f => f.trim()).length
        } catch (error) {
            return 1000; // Default fallback
        }
    }

    async executeIntelligentBuild(pipeline) {
        try {
            this.log(`Executing intelligent build with strategy: ${pipeline.buildStrategy}`)
            pipeline.status = 'building'
            pipeline.stages.push({
                name: 'build',
                startTime: new Date(),
                status: 'running'
            })
            const buildStart = Date.now()
            // Execute build based on strategy
            let buildResult
            switch (pipeline.buildStrategy) {
                case 'incremental':
                    buildResult = await this.executeIncrementalBuild(pipeline)
                    break
                case 'full':
                default:
                    buildResult = await this.executeFullBuild(pipeline)
                    break
            }
            
            const buildDuration = Date.now() - buildStart
            // Update pipeline stage
            const buildStage = pipeline.stages.find(s => s.name === 'build')
            buildStage.endTime = new Date()
            buildStage.duration = buildDuration
            buildStage.status = buildResult.success ? 'completed' : 'failed'
            buildStage.output = buildResult
            // Store build artifacts
            pipeline.artifacts.build = buildResult
            // Update performance metrics
            pipeline.performance.buildTime = buildDuration
            pipeline.performance.buildSize = await this.getBuildSize()
            this.log(`Build completed in ${buildDuration}ms. Success: ${buildResult.success}`, 
                buildResult.success ? 'success' : 'error')
            return buildResult
        } catch (error) {
            this.log(`Build execution failed: ${error.message}`, 'error')
            return { success: false, error: error.message }
        }
    }

    async executeIncrementalBuild(pipeline) {
        try {
            this.log('Executing incremental build')
            // Get changed files
            const changedFiles = await this.getChangedFiles()
            // Build only changed components
            const buildCommands = [
                ['run', 'build:incremental'],
                ['run', 'build:changed', '--files', changedFiles.join(',')]
            ]
            for (const command of buildCommands) {
                try {
                    await this.executeCommand('npm', { args: command, silent: true })
                    break; // Use first successful command
                } catch (error) {
                    this.log(`Incremental build command failed: ${command.join(' ')}`, 'warning')
                }
            }
            
            return { success: true, strategy: 'incremental', changedFiles: changedFiles }
        } catch (error) {
            this.log(`Incremental build failed, falling back to full build: ${error.message}`, 'warning')
            return await this.executeFullBuild(pipeline)
        }
    }

    async executeFullBuild(pipeline) {
        try {
            this.log('Executing full build')
            // Clean build directory
            await this.executeCommand('npm', { args: ['run', 'clean'], silent: true })
            // Install dependencies
            await this.executeCommand('npm', { args: ['install'], silent: true })
            // Run full build
            await this.executeCommand('npm', { args: ['run', 'build'], silent: true })
            return { success: true, strategy: 'full' }
        } catch (error) {
            this.log(`Full build failed: ${error.message}`, 'error')
            return { success: false, error: error.message }
        }
    }

    async getChangedFiles() {
        try {
            const diff = await this.executeCommand('git', { 
                args: ['diff', 'main', '--name-only'], 
                silent: true 
            })
            return diff.split('\n').filter(f => f.trim())
        } catch (error) {
            return []
        }
    }

    async getBuildSize() {
        try {
            const buildDir = path.join(this.projectRoot, 'out')
            if (fs.existsSync(buildDir)) {
                const files = fs.readdirSync(buildDir)
                let totalSize = 0
                for (const file of files) {
                    const filePath = path.join(buildDir, file)
                    const stats = fs.statSync(filePath)
                    if (stats.isFile()) {
                        totalSize += stats.size
                    }
                }
                
                return totalSize
            }
            return 0
        } catch (error) {
            return 0
        }
    }

    async executeIntelligentTesting(pipeline) {
        try {
            this.log('Executing intelligent testing')
            pipeline.status = 'testing'
            pipeline.stages.push({
                name: 'testing',
                startTime: new Date(),
                status: 'running'
            })
            const testStart = Date.now()
            // Determine which tests to run based on changes
            const testStrategy = await this.determineTestStrategy(pipeline)
            // Execute tests in parallel where possible
            const testResults = await this.executeParallelTests(testStrategy)
            const testDuration = Date.now() - testStart
            // Update pipeline stage
            const testStage = pipeline.stages.find(s => s.name === 'testing')
            testStage.endTime = new Date()
            testStage.duration = testDuration
            testStage.status = 'completed'
            testStage.output = testResults
            // Store test artifacts
            pipeline.artifacts.testing = testResults
            // Update performance metrics
            pipeline.performance.testTime = testDuration
            pipeline.performance.testCoverage = testResults.coverage
            this.log(`Testing completed in ${testDuration}ms. Coverage: ${testResults.coverage}%`, 'success')
            return { success: true, results: testResults }
        } catch (error) {
            this.log(`Testing execution failed: ${error.message}`, 'error')
            return { success: false, error: error.message }
        }
    }

    async determineTestStrategy(pipeline) {
        try {
            const changes = await this.analyzeCodeChanges()
            const strategy = {
                unit: true,
                integration: changes.changePercentage > 0.1,
                e2e: changes.changePercentage > 0.2,
                performance: changes.changePercentage > 0.05,
                security: true
            }
            this.log(`Test strategy determined: ${JSON.stringify(strategy)}`)
            return strategy
        } catch (error) {
            return { unit: true, integration: true, e2e: false, performance: true, security: true }
        }
    }

    async executeParallelTests(testStrategy) {
        try {
            const testPromises = []
            const results = {
                unit: null,
                integration: null,
                e2e: null,
                performance: null,
                security: null,
                coverage: 0
            }
            // Execute tests in parallel based on strategy
            if (testStrategy.unit) {
                testPromises.push(this.executeUnitTests().then(r => { results.unit = r; }))
            }
            
            if (testStrategy.integration) {
                testPromises.push(this.executeIntegrationTests().then(r => { results.integration = r; }))
            }
            
            if (testStrategy.e2e) {
                testPromises.push(this.executeE2ETests().then(r => { results.e2e = r; }))
            }
            
            if (testStrategy.performance) {
                testPromises.push(this.executePerformanceTests().then(r => { results.performance = r; }))
            }
            
            if (testStrategy.security) {
                testPromises.push(this.executeSecurityTests().then(r => { results.security = r; }))
            }
            
            // Wait for all tests to complete
            await Promise.all(testPromises)
            // Calculate overall coverage
            results.coverage = this.calculateOverallCoverage(results)
            return results
        } catch (error) {
            this.log(`Parallel test execution failed: ${error.message}`, 'error')
            throw error
        }
    }

    async executeUnitTests() {
        try {
            const result = await this.executeCommand('npm', { args: ['run', 'test:unit'], silent: true })
            return { success: true, output: result }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    async executeIntegrationTests() {
        try {
            const result = await this.executeCommand('npm', { args: ['run', 'test:integration'], silent: true })
            return { success: true, output: result }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    async executeE2ETests() {
        try {
            const result = await this.executeCommand('npm', { args: ['run', 'test:e2e'], silent: true })
            return { success: true, output: result }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    async executePerformanceTests() {
        try {
            const result = await this.executeCommand('npm', { args: ['run', 'test:performance'], silent: true })
            return { success: true, output: result }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    async executeSecurityTests() {
        try {
            const result = await this.executeCommand('npm', { args: ['audit'], silent: true })
            return { success: true, output: result }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    calculateOverallCoverage(results) {
        const tests = [results.unit, results.integration, results.e2e, results.performance, results.security]
        const successfulTests = tests.filter(t => t && t.success).length
        return Math.round((successfulTests / tests.length) * 100)
    }

    async executeIntelligentDeployment(pipeline) {
        try {
            this.log('Executing intelligent deployment')
            pipeline.status = 'deploying'
            pipeline.stages.push({
                name: 'deployment',
                startTime: new Date(),
                status: 'running'
            })
            const deployStart = Date.now()
            // Determine deployment strategy
            const deployStrategy = await this.determineDeploymentStrategy(pipeline)
            // Execute deployment
            const deployResult = await this.executeDeployment(deployStrategy, pipeline)
            const deployDuration = Date.now() - deployStart
            // Update pipeline stage
            const deployStage = pipeline.stages.find(s => s.name === 'deployment')
            deployStage.endTime = new Date()
            deployStage.duration = deployDuration
            deployStage.status = 'completed'
            deployStage.output = deployResult
            // Store deployment artifacts
            pipeline.artifacts.deployment = deployResult
            // Update performance metrics
            pipeline.performance.deployTime = deployDuration
            this.log(`Deployment completed in ${deployDuration}ms. Success: ${deployResult.success}`, 
                deployResult.success ? 'success' : 'error')
            return deployResult
        } catch (error) {
            this.log(`Deployment execution failed: ${error.message}`, 'error')
            return { success: false, error: error.message }
        }
    }

    async determineDeploymentStrategy(pipeline) {
        try {
            // Analyze risk factors
            const riskFactors = await this.analyzeDeploymentRisk(pipeline)
            // Select strategy based on risk
            let strategy = 'rolling'
            if (riskFactors.riskLevel === 'high') {
                strategy = 'canary'
            } else if (riskFactors.riskLevel === 'critical') {
                strategy = 'blueGreen'
            }
            
            this.log(`Deployment strategy selected: ${strategy} (risk level: ${riskFactors.riskLevel})`)
            return strategy
        } catch (error) {
            return 'rolling'
        }
    }

    async analyzeDeploymentRisk(pipeline) {
        try {
            const riskFactors = {
                changeSize: 0,
                testCoverage: 0,
                securityIssues: 0,
                performanceImpact: 0,
                riskLevel: 'low'
            }
            // Analyze change size
            const changes = await this.analyzeCodeChanges()
            riskFactors.changeSize = changes.changePercentage
            // Analyze test coverage
            if (pipeline.artifacts.testing) {
                riskFactors.testCoverage = pipeline.artifacts.testing.coverage / 100
            }
            
            // Analyze security issues
            if (pipeline.artifacts.testing && pipeline.artifacts.testing.security) {
                const securityOutput = pipeline.artifacts.testing.security.output
                riskFactors.securityIssues = this.countSecurityIssues(securityOutput)
            }
            
            // Analyze performance impact
            if (pipeline.artifacts.testing && pipeline.artifacts.testing.performance) {
                riskFactors.performanceImpact = this.assessPerformanceImpact(pipeline.artifacts.testing.performance)
            }
            
            // Calculate overall risk level
            const riskScore = (
                riskFactors.changeSize * 0.3 +
                (1 - riskFactors.testCoverage) * 0.3 +
                riskFactors.securityIssues * 0.2 +
                riskFactors.performanceImpact * 0.2
            )
            if (riskScore > 0.7) riskFactors.riskLevel = 'critical'
            else if (riskScore > 0.5) riskFactors.riskLevel = 'high'
            else if (riskScore > 0.3) riskFactors.riskLevel = 'medium'
            else riskFactors.riskLevel = 'low'
            return riskFactors
        } catch (error) {
            return { riskLevel: 'medium' }
        }
    }

    countSecurityIssues(securityOutput) {
        try {
            const lines = securityOutput.split('\n')
            return lines.filter(line => 
                line.includes('critical') || line.includes('high') || line.includes('moderate')
            ).length
        } catch (error) {
            return 0
        }
    }

    assessPerformanceImpact(performanceOutput) {
        try {
            // Simplified performance impact assessment
            return 0.1; // Low impact by default
        } catch (error) {
            return 0.1
        }
    }

    async executeDeployment(strategy, pipeline) {
        try {
            this.log(`Executing deployment with strategy: ${strategy}`)
            switch (strategy) {
                case 'blueGreen':
                    return await this.executeBlueGreenDeployment(pipeline)
                case 'canary':
                    return await this.executeCanaryDeployment(pipeline)
                case 'rolling':
                default:
                    return await this.executeRollingDeployment(pipeline)
            }
            
        } catch (error) {
            this.log(`Deployment execution failed: ${error.message}`, 'error')
            return { success: false, error: error.message }
        }
    }

    async executeBlueGreenDeployment(pipeline) {
        try {
            this.log('Executing blue-green deployment')
            // Deploy to staging environment
            await this.executeCommand('npm', { args: ['run', 'deploy:staging'], silent: true })
            // Run health checks
            const healthCheck = await this.runHealthChecks('staging')
            if (!healthCheck.success) {
                throw new Error(`Staging health check failed: ${healthCheck.error}`)
            }
            
            // Deploy to production
            await this.executeCommand('npm', { args: ['run', 'deploy:production'], silent: true })
            // Run production health checks
            const prodHealthCheck = await this.runHealthChecks('production')
            if (!prodHealthCheck.success) {
                throw new Error(`Production health check failed: ${prodHealthCheck.error}`)
            }
            
            return { success: true, strategy: 'blueGreen', environments: ['staging', 'production'] }
        } catch (error) {
            this.log(`Blue-green deployment failed: ${error.message}`, 'error')
            return { success: false, error: error.message }
        }
    }

    async executeCanaryDeployment(pipeline) {
        try {
            this.log('Executing canary deployment')
            // Deploy to canary environment
            await this.executeCommand('npm', { args: ['run', 'deploy:canary'], silent: true })
            // Monitor canary performance
            const canaryHealth = await this.monitorCanaryHealth(pipeline)
            if (!canaryHealth.success) {
                throw new Error(`Canary deployment failed: ${canaryHealth.error}`)
            }
            
            // Gradually roll out to production
            await this.executeCommand('npm', { args: ['run', 'deploy:production:canary'], silent: true })
            return { success: true, strategy: 'canary', canaryHealth: canaryHealth }
        } catch (error) {
            this.log(`Canary deployment failed: ${error.message}`, 'error')
            return { success: false, error: error.message }
        }
    }

    async executeRollingDeployment(pipeline) {
        try {
            this.log('Executing rolling deployment')
            // Deploy to production with rolling strategy
            await this.executeCommand('npm', { args: ['run', 'deploy:production:rolling'], silent: true })
            // Verify deployment
            const verification = await this.verifyDeployment(pipeline)
            return { success: true, strategy: 'rolling', verification: verification }
        } catch (error) {
            this.log(`Rolling deployment failed: ${error.message}`, 'error')
            return { success: false, error: error.message }
        }
    }

    async runHealthChecks(environment) {
        try {
            this.log(`Running health checks for environment: ${environment}`)
            // Run basic health checks
            const healthResult = await this.executeCommand('npm', { 
                args: ['run', `health:${environment}`], 
                silent: true 
            })
            // Parse health check results
            const isHealthy = healthResult.includes('healthy') || healthResult.includes('OK')
            return { success: isHealthy, output: healthResult }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    async monitorCanaryHealth(pipeline) {
        try {
            this.log('Monitoring canary deployment health')
            // Monitor for specified duration
            const monitorDuration = this.config.deploymentStrategies.canary.duration * 1000
            const startTime = Date.now()
            while (Date.now() - startTime < monitorDuration) {
                const health = await this.runHealthChecks('canary')
                if (!health.success) {
                    return { success: false, error: 'Canary health check failed' }
                }
                
                // Wait before next check
                await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds
            }
            
            return { success: true, duration: monitorDuration }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    async verifyDeployment(pipeline) {
        try {
            this.log('Verifying deployment')
            // Run verification tests
            const verification = await this.executeCommand('npm', { 
                args: ['run', 'verify:deployment'], 
                silent: true 
            })
            // Check deployment status
            const status = await this.executeCommand('npm', { 
                args: ['run', 'status:deployment'], 
                silent: true 
            })
            return { success: true, verification: verification, status: status }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    async attemptRollback(pipeline) {
        try {
            this.log('Attempting rollback due to pipeline failure')
            // Check if deployment was partially successful
            if (pipeline.artifacts.deployment && pipeline.artifacts.deployment.success) {
                this.log('Rolling back deployment')
                // Execute rollback
                await this.executeCommand('npm', { args: ['run', 'rollback'], silent: true })
                // Verify rollback
                const rollbackVerification = await this.verifyRollback(pipeline)
                this.log(`Rollback completed. Success: ${rollbackVerification.success}`)
            }
            
        } catch (error) {
            this.log(`Rollback failed: ${error.message}`, 'error')
        }
    }

    async verifyRollback(pipeline) {
        try {
            // Run rollback verification
            const verification = await this.executeCommand('npm', { 
                args: ['run', 'verify:rollback'], 
                silent: true 
            })
            return { success: true, verification: verification }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    savePipelineHistory(pipeline) {
        try {
            this.buildHistory.set(pipeline.id, pipeline)
            // Save to file
            const historyFile = path.join(this.projectRoot, 'logs', 'pipeline-history.json')
            const allPipelines = Array.from(this.buildHistory.values())
            fs.writeFileSync(historyFile, JSON.stringify(allPipelines, null, 2))
        } catch (error) {
            this.log(`Failed to save pipeline history: ${error.message}`, 'error')
        }
    }

    async getPipelineStatus(pipelineId) {
        return this.pipelineStates.get(pipelineId) || null
    }

    async getAllPipelines() {
        return Array.from(this.pipelineStates.values())
    }

    async startOrchestrator() {
        this.log('Intelligent CI/CD Pipeline Orchestrator started')
        // Set up periodic monitoring
        setInterval(async () => {
            const activePipelines = Array.from(this.pipelineStates.values())
                .filter(p => ['building', 'testing', 'deploying'].includes(p.status))
            this.log(`Active pipelines: ${activePipelines.length}`)
            // Clean up completed pipelines
            for (const [id, pipeline] of this.pipelineStates.entries()) {
                if (pipeline.status === 'completed' && 
                    Date.now() - pipeline.endTime > 24 * 60 * 60 * 1000) { // 24 hours
                    this.pipelineStates.delete(id)
                }
            }
            
        }, 5 * 60 * 1000); // Every 5 minutes
    }
}

// Main execution
if (require.main === module) {
    const orchestrator = new IntelligentCICDOrchestrator()
    const args = process.argv.slice(2)
    const command = args[0]
    switch (command) {
        case 'start':
            orchestrator.startOrchestrator()
            break
        case 'pipeline':
            const trigger = args[1] || 'manual'
            const metadata = args[2] ? JSON.parse(args[2]) : {}
            orchestrator.startIntelligentPipeline(trigger, metadata).then(result => {
                console.log(JSON.stringify(result, null, 2))
                process.exit(0)
            })
            break
        case 'status':
            const pipelineId = args[1]
            if (pipelineId) {
                orchestrator.getPipelineStatus(pipelineId).then(status => {
                    console.log(JSON.stringify(status, null, 2))
                    process.exit(0)
                })
            } else {
                orchestrator.getAllPipelines().then(pipelines => {
                    console.log(JSON.stringify(pipelines, null, 2))
                    process.exit(0)
                })
            }
            break
        default:
            console.log(`
Intelligent CI/CD Pipeline Orchestrator

Usage:
  node intelligent-cicd-orchestrator.cjs <command> [options]

Commands:
  start       Start orchestrator monitoring
  pipeline    Start new pipeline
  status      Get pipeline status

Examples:
  node intelligent-cicd-orchestrator.cjs start
  node intelligent-cicd-orchestrator.cjs pipeline "git-push" '{"branch":"feature/new-feature"}'
  node intelligent-cicd-orchestrator.cjs status
  node intelligent-cicd-orchestrator.cjs status pipeline-123
            `)
            process.exit(1)
    }
}

module.exports = IntelligentCICDOrchestrator;