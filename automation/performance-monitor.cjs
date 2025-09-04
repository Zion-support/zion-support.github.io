#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd()
    this.logFile = path.join(this.projectRoot, 'automation/logs/performance-monitor.log')
    this.reportFile = path.join(this.projectRoot, 'automation/logs/performance-report.json')
    this.checkInterval = 300000
    this.isRunning = false
    this.setupLogging()
    this.log('Performance Monitor initialized')
  }

  setupLogging() {
    const logDir = path.dirname(this.logFile)
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true })
  }

  log(message) {
    const timestamp = new Date().toISOString()
    const line = `[${timestamp}] ${message}\n`
    console.log(line.trim())
    fs.appendFileSync(this.logFile, line)
  }

  async getSystemMetrics() {
    const metrics = {
      memory: process.memoryUsage(),
      uptime: process.uptime(),
      cpuUsage: process.cpuUsage(),
      nodeVersion: process.version,
      platform: process.platform,
    }
    try {
      metrics.diskUsage = execSync('df -h .', { cwd: this.projectRoot, encoding: 'utf8', timeout: 10000 })
    } catch {
      metrics.diskUsage = 'unavailable'
    }
    return metrics
  }

  getDirectorySize(dirPath) {
    let total = 0
    try {
      for (const name of fs.readdirSync(dirPath)) {
        const p = path.join(dirPath, name)
        const st = fs.statSync(p)
        total += st.isDirectory() ? this.getDirectorySize(p) : st.size
      }
    } catch {}
    return total
  }

  async getBuildMetrics() {
    const buildDir = path.join(this.projectRoot, '.next')
    if (!fs.existsSync(buildDir)) return { exists: false }
    const st = fs.statSync(buildDir)
    return { exists: true, lastModified: st.mtime, size: this.getDirectorySize(buildDir), age: Date.now() - st.mtime.getTime() }
  }

  async getBundleMetrics() {
    try {
      const pkg = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'))
      return { analyzerAvailable: Boolean(pkg.scripts && pkg.scripts.analyze) }
    } catch (e) {
      return { error: e.message }
    }
  }

  async checkPerformance() {
    const start = Date.now()
    const systemMetrics = await this.getSystemMetrics()
    const buildMetrics = await this.getBuildMetrics()
    const bundleMetrics = await this.getBundleMetrics()
    const duration = Date.now() - start
    const report = { timestamp: new Date().toISOString(), duration, systemMetrics, buildMetrics, bundleMetrics }
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))
    this.log(`Performance check completed in ${duration}ms`)
    await this.maybeOptimize(report)
  }

  async maybeOptimize(report) {
    const mem = report.systemMetrics.memory
    const memPct = (mem.heapUsed / Math.max(mem.heapTotal, 1)) * 100
    if (memPct > 90 && global.gc) {
      this.log('High memory usage detected, forcing GC')
      try { global.gc() } catch {}
    }
    if (report.buildMetrics.exists && report.buildMetrics.age > 3600000) {
      this.log('Stale build detected, triggering clean build')
      try {
        execSync('npm run clean', { cwd: this.projectRoot, stdio: 'inherit', timeout: 60000 })
        execSync('npm run build', { cwd: this.projectRoot, stdio: 'inherit', timeout: 600000 })
      } catch (e) {
        this.log(`Rebuild failed: ${e.message}`)
      }
    }
  }

  async start() {
    this.isRunning = true
    await this.checkPerformance()
    setInterval(async () => { if (this.isRunning) await this.checkPerformance() }, this.checkInterval)
  }
}

new PerformanceMonitor().start().catch(err => { console.error(err); process.exit(1) })

