#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

class BuildMonitor {
  constructor() {
    this.projectRoot = process.cwd()
    this.logFile = path.join(this.projectRoot, 'automation/logs/build-monitor.log')
    this.reportFile = path.join(this.projectRoot, 'automation/logs/build-report.json')
    this.interval = 300000
    this.isRunning = false
    this.setupLogging()
    this.log('Build Monitor initialized')
  }

  setupLogging() {
    const dir = path.dirname(this.logFile)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  }

  log(message) {
    const ts = new Date().toISOString()
    const line = `[${ts}] ${message}\n`
    console.log(line.trim())
    fs.appendFileSync(this.logFile, line)
  }

  getNextDir() { return path.join(this.projectRoot, '.next') }

  async performBuild() {
    try {
      const start = Date.now()
      execSync('npm run clean', { cwd: this.projectRoot, stdio: 'inherit', timeout: 60000 })
      execSync('npm run build', { cwd: this.projectRoot, stdio: 'inherit', timeout: 600000 })
      const duration = Date.now() - start
      this.log(`Build completed successfully in ${duration}ms`)
      fs.writeFileSync(this.reportFile, JSON.stringify({ timestamp: new Date().toISOString(), success: true, duration }, null, 2))
    } catch (e) {
      this.log(`Build failed: ${e.message}`)
      fs.writeFileSync(this.reportFile, JSON.stringify({ timestamp: new Date().toISOString(), success: false, error: e.message }, null, 2))
      try {
        execSync('npm run lint:fix', { cwd: this.projectRoot, stdio: 'inherit', timeout: 120000 })
        execSync('npm run build', { cwd: this.projectRoot, stdio: 'inherit', timeout: 600000 })
        this.log('Build succeeded after lint fixes')
      } catch (e2) {
        this.log(`Build still failing after fixes: ${e2.message}`)
      }
    }
  }

  async checkBuildHealth() {
    const dir = this.getNextDir()
    if (!fs.existsSync(dir)) { this.log('No build found; performing initial build'); await this.performBuild(); return }
    const st = fs.statSync(dir)
    if (Date.now() - st.mtime.getTime() > 3600000) { this.log('Build is stale; rebuilding'); await this.performBuild() }
    else { this.log('Build is fresh') }
  }

  async start() { this.isRunning = true; await this.checkBuildHealth(); setInterval(async () => { if (this.isRunning) await this.performBuild() }, this.interval) }
}

new BuildMonitor().start().catch(err => { console.error(err); process.exit(1) })

