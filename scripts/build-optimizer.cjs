#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
class BuildOptimizer {
  constructor() {
    this.projectRoot = process.cwd()
    this.reportsDir = path.join(this.projectRoot, 'build-reports')
    this.ensureDirectories()
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true })
    }
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)
  }

  analyzeBuildConfig() {
    this.log('🔍 Analyzing build configuration...')
    try {
      const configFiles = [
        'vite.config.js',
        'vite.config.ts',
        'next.config.js',
        'next.config.ts',
        'webpack.config.js',
        'webpack.config.ts',
        'rollup.config.js',
        'rollup.config.ts'
      ]
      const foundConfigs = []
      const configAnalysis = {}
      for (const configFile of configFiles) {
        const configPath = path.join(this.projectRoot, configFile)
        if (fs.existsSync(configPath)) {
          foundConfigs.push(configFile)
          try {
            const content = fs.readFileSync(configPath, 'utf8')
            configAnalysis[configFile] = {
              size: content.length,
              hasOptimization: content.includes('optimization') || content.includes('minify'),
              hasCompression: content.includes('compression') || content.includes('gzip'),
              hasCodeSplitting: content.includes('splitChunks') || content.includes('chunks'),
              hasTreeShaking: content.includes('treeshake') || content.includes('treeShaking')
            }
          } catch (error) {
            configAnalysis[configFile] = { error: error.message }
          }
        }
      }
      
      this.log(`✅ Found ${foundConfigs.length} build configuration files`)
      return {
        success: true,
        foundConfigs,
        configAnalysis,
        timestamp: new Date().toISOString()
      }
    } catch (error) {
      this.log(`❌ Build config analysis failed: ${error.message}`)
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      }
    }
  }

  runBuild() {
    this.log('🔨 Running build...')
    try {
      const startTime = Date.now()
      // Clean previous build
      const distPath = path.join(this.projectRoot, 'dist')
      if (fs.existsSync(distPath)) {
        execSync('rm -rf dist', { cwd: this.projectRoot })
        this.log('🧹 Cleaned previous build')
      }
      
      // Run build
      execSync('npm run build', { 
        stdio: 'pipe', 
        cwd: this.projectRoot,
        timeout: 300000 // 5 minutes timeout
      })
      const endTime = Date.now()
      const buildTime = endTime - startTime
      this.log(`✅ Build completed in ${buildTime}ms`)
      return {
        success: true,
        buildTime,
        timestamp: new Date().toISOString()
      }
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`)
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      }
    }
  }

  analyzeBuildOutput() {
    this.log('📊 Analyzing build output...')
    try {
      const distPath = path.join(this.projectRoot, 'dist')
      if (!fs.existsSync(distPath)) {
        return {
          success: false,
          error: 'Build output directory not found',
          timestamp: new Date().toISOString()
        }
      }
      
      const getDirectoryStats = (dir) => {
        let totalSize = 0
        let fileCount = 0
        const fileTypes = {}
        const largeFiles = []
        const scanDirectory = (currentDir) => {
          const files = fs.readdirSync(currentDir)
          for (const file of files) {
            const filePath = path.join(currentDir, file)
            const stat = fs.statSync(filePath)
            if (stat.isDirectory()) {
              scanDirectory(filePath)
            } else {
              totalSize += stat.size
              fileCount++
              const ext = path.extname(file)
              fileTypes[ext] = (fileTypes[ext] || 0) + 1
              if (stat.size > 100 * 1024) { // Files larger than 100KB
                largeFiles.push({
                  file: path.relative(distPath, filePath),
                  size: stat.size,
                  sizeKB: (stat.size / 1024).toFixed(1)
                })
              }
            }
          }
        }
        scanDirectory(dir)
        return {
          totalSize,
          fileCount,
          fileTypes,
          largeFiles
        }}
      
      const stats = getDirectoryStats(distPath)
      const totalSizeMB = (stats.totalSize / 1024 / 1024).toFixed(2)
      this.log(`✅ Build output: ${stats.fileCount} files, ${totalSizeMB} MB`)
      this.log(`📊 Large files (>100KB): ${stats.largeFiles.length}`)
      return {
        success: true,
        totalSize: stats.totalSize,
        totalSizeMB: parseFloat(totalSizeMB),
        fileCount: stats.fileCount,
        fileTypes: stats.fileTypes,
        largeFiles: stats.largeFiles,
        timestamp: new Date().toISOString()
      }
    } catch (error) {
      this.log(`❌ Build output analysis failed: ${error.message}`)
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      }
    }
  }

  checkBuildPerformance() {
    this.log('⚡ Checking build performance...')
    try {
      const performanceChecks = {
        hasSourceMaps: false,
        hasMinification: false,
        hasCompression: false,
        hasCodeSplitting: false
      }
      // Check for source maps
      const distPath = path.join(this.projectRoot, 'dist')
      if (fs.existsSync(distPath)) {
        const findSourceMaps = (dir) => {
          const files = fs.readdirSync(dir)
          for (const file of files) {
            const filePath = path.join(dir, file)
            const stat = fs.statSync(filePath)
            if (stat.isDirectory()) {
              findSourceMaps(filePath)
            } else if (file.endsWith('.map')) {
              performanceChecks.hasSourceMaps = true
            }
          }
        }
        findSourceMaps(distPath)
      }
      
      // Check for minified files
      if (fs.existsSync(distPath)) {
        const findMinifiedFiles = (dir) => {
          const files = fs.readdirSync(dir)
          for (const file of files) {
            const filePath = path.join(dir, file)
            const stat = fs.statSync(filePath)
            if (stat.isDirectory()) {
              findMinifiedFiles(filePath)
            } else if (file.includes('.min.') || file.includes('.prod.')) {
              performanceChecks.hasMinification = true
            }
          }
        }
        findMinifiedFiles(distPath)
      }
      
      this.log(`✅ Performance checks completed`)
      return {
        success: true,
        checks: performanceChecks,
        timestamp: new Date().toISOString()
      }
    } catch (error) {
      this.log(`❌ Performance check failed: ${error.message}`)
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      }
    }
  }

  generateReport() {
    this.log('📊 Generating build optimization report...')
    const configAnalysis = this.analyzeBuildConfig()
    const buildResult = this.runBuild()
    const outputAnalysis = this.analyzeBuildOutput()
    const performanceCheck = this.checkBuildPerformance()
    const report = {
      timestamp: new Date().toISOString(),
      configAnalysis,
      buildResult,
      outputAnalysis,
      performanceCheck,
      summary: {
        buildSuccessful: buildResult.success,
        buildTime: buildResult.success ? buildResult.buildTime : null,
        outputSizeMB: outputAnalysis.success ? outputAnalysis.totalSizeMB : null,
        fileCount: outputAnalysis.success ? outputAnalysis.fileCount : null,
        largeFiles: outputAnalysis.success ? outputAnalysis.largeFiles.length : null,
        hasSourceMaps: performanceCheck.success ? performanceCheck.checks.hasSourceMaps : false,
        hasMinification: performanceCheck.success ? performanceCheck.checks.hasMinification : false
      }
    }
    const reportFile = path.join(this.reportsDir, `build-optimization-report-${Date.now()}.json`)
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2))
    this.log(`📄 Report saved to: ${reportFile}`)
    // Print summary
    console.log('\n🔨 BUILD OPTIMIZER SUMMARY')
    console.log('=' * 50)
    console.log(`Build Status: ${report.summary.buildSuccessful ? '✅ Success' : '❌ Failed'}`)
    if (report.summary.buildSuccessful) {
      console.log(`Build Time: ${report.summary.buildTime}ms`)
    }
    console.log(`Output Size: ${report.summary.outputSizeMB ? `${report.summary.outputSizeMB} MB` : 'N/A'}`)
    console.log(`File Count: ${report.summary.fileCount || 'N/A'}`)
    console.log(`Large Files: ${report.summary.largeFiles || 'N/A'}`)
    console.log(`Source Maps: ${report.summary.hasSourceMaps ? '✅ Enabled' : '❌ Disabled'}`)
    console.log(`Minification: ${report.summary.hasMinification ? '✅ Enabled' : '❌ Disabled'}`)
    console.log(`Report: ${reportFile}`)
    return report
  }

  async run() {
    try {
      this.log('🚀 Starting Build Optimizer')
      const report = this.generateReport()
      this.log('✅ Build optimization completed')
      return report
    } catch (error) {
      this.log(`💥 Build optimizer error: ${error.message}`)
      throw error
    }
  }
}

// Run the build optimizer
if (require.main === module) {
  const optimizer = new BuildOptimizer()
  optimizer.run().catch(console.error)
}

module.exports = BuildOptimizer;