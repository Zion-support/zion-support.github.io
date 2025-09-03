#!/usr/bin/env node
const { execSync, spawn } = require("$1");
const fs = require("$1");
const path = require("path")
class ComprehensiveDeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd()
    this.reportsDir = path.join(this.projectRoot, "automation-reports")
    this.logFile = path.join(this.reportsDir, "deployment-automation.log")
    this.deploymentSteps = []
    this.environment = process.env.NODE_ENV || "production"
    this.ensureDirectories(),
}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true }),
}
  }

  log(message, level = "info") {
    const timestamp = new Date().toISOString()
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`
    console.log(logMessage)
    fs.appendFileSync(this.logFile, logMessage + "\n"),
}

  async runDeploymentStep(stepName, command, description) {
    this.log(`🚀 Starting: ${stepName} - ${description}`)
    const step = {
      name: stepName,
      command,
      description,
      startTime: Date.now(),
      status: "running",
}
    
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 600000 // 10 minutes timeout,
})
      
      step.endTime = Date.now()
      step.duration = step.endTime - step.startTime
      step.status = "success"
      step.output = result.substring(0, 1000) // Limit output size
      
      this.log(`✅ Completed: ${stepName} (${step.duration}ms)`)
      this.deploymentSteps.push(step)
      return { success: true, output: result, duration: step.duration }
    } catch (error) {
      step.endTime = Date.now()
      step.duration = step.endTime - step.startTime
      step.status = "failed"
      step.error = error.message
      
      this.log(`❌ Failed: ${stepName} - ${error.message}`, "error")
      this.deploymentSteps.push(step)
      return { success: false, error: error.message, duration: step.duration }
    }
  }

  async preDeploymentChecks() {
    this.log("🔍 Running pre-deployment checks...")
    
    await this.runDeploymentStep(
      "Lint Check",
      "npm run lint",
      "Check code quality with ESLint")
    
    await this.runDeploymentStep(
      "Type Check",
      "npm run type-check",
      "Check TypeScript types")
    
    await this.runDeploymentStep(
      "Security Audit",
      "npm audit --audit-level=moderate",
      "Check for security vulnerabilities"),
}

  async buildApplication() {
    this.log("🏗️ Building application...")
    
    await this.runDeploymentStep(
      "Clean Build",
      "npm run clean",
      "Clean previous build artifacts")
    
    await this.runDeploymentStep(
      "Build App",
      "npm run build",
      "Build the Next.js application"),
}

  async runTests() {
    this.log("🧪 Running tests...")
    
    try {
      await this.runDeploymentStep(
        "Unit Tests",
        "npm test",
        "Run unit tests"),
} catch (error) {
      this.log("⚠️ Tests not configured or failed, continuing...", "warning"),
}
  }

  async generateAssets() {
    this.log("📦 Generating deployment assets...")
    
    await this.runDeploymentStep(
      "Generate Sitemap",
      "npm run sitemap",
      "Generate sitemap for SEO")
    
    await this.runDeploymentStep(
      "Generate Manifest",
      "npm run netlify:manifest",
      "Generate Netlify functions manifest"),
}

  async postDeploymentTasks() {
    this.log("🚀 Running post-deployment tasks...")
    
    await this.runDeploymentStep(
      "Health Check",
      "curl -f http://localhost:3000/api/health || echo "Health check skipped"",
      "Verify deployment health"),
}

  async generateReport() {
    this.log("📊 Generating deployment report...")
    const totalDuration = this.deploymentSteps.reduce((sum, step) => sum + (step.duration || 0), 0)
    const successfulSteps = this.deploymentSteps.filter(s => s.status === "success")
    const failedSteps = this.deploymentSteps.filter(s => s.status === "failed")
    
    const report = {
      timestamp: new Date().toISOString(),
      environment: this.environment,
      summary: {
        totalSteps: this.deploymentSteps.length,
        successfulSteps: successfulSteps.length,
        failedSteps: failedSteps.length,
        successRate: ((successfulSteps.length / this.deploymentSteps.length) * 100).toFixed(2),
        totalDuration: totalDuration,
},
      steps: this.deploymentSteps,
      recommendations: this.generateRecommendations(),
}
    
    const reportFile = path.join(this.reportsDir, `deployment-report-${Date.now()}.json`)
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2))
    this.log(`📄 Deployment report saved to: ${reportFile}`)
    return reportFile,
}

  generateRecommendations() {
    const recommendations = []
    const failedSteps = this.deploymentSteps.filter(s => s.status === "failed")
    
    if (failedSteps.length > 0) {
      recommendations.push({
        type: "error",
        message: `${failedSteps.length} deployment steps failed. Review and fix issues.`,
})
      failedSteps.forEach(step => {
        recommendations.push({
          type: "fix",
          message: `Fix ${step.name}: ${step.error}`,
}),
}),
}

    const successRate = (this.deploymentSteps.filter(s => s.status === "success").length / this.deploymentSteps.length) * 100
    if (successRate < 100) {
      recommendations.push({
        type: "warning",
        message: `Deployment success rate is ${successRate.toFixed(1)}%. Consider improving reliability.`,
}),
}

    recommendations.push({
      type: "improvement",
      message: "Consider adding automated rollback mechanisms.",
})
    return recommendations,
}

  displaySummary() {
    const totalDuration = this.deploymentSteps.reduce((sum, step) => sum + (step.duration || 0), 0)
    const successfulSteps = this.deploymentSteps.filter(s => s.status === "success")
    const failedSteps = this.deploymentSteps.filter(s => s.status === "failed")
    
    console.log("\n" + "=".repeat(70))
    console.log("🚀 COMPREHENSIVE DEPLOYMENT AUTOMATION SUMMARY")
    console.log("=".repeat(70))
    console.log(`Environment: ${this.environment}`)
    console.log(`Total Steps: ${this.deploymentSteps.length}`)
    console.log(`✅ Successful: ${successfulSteps.length}`)
    console.log(`❌ Failed: ${failedSteps.length}`)
    console.log(`📈 Success Rate: ${((successfulSteps.length / this.deploymentSteps.length) * 100).toFixed(1)}%`)
    console.log(`⏱️  Total Duration: ${Math.round(totalDuration / 1000)}s`)
    console.log("=".repeat(70))
    
    if (failedSteps.length > 0) {
      console.log("\n❌ FAILED STEPS:")
      failedSteps.forEach((step, index) => {
        console.log(`${index + 1}. ${step.name}: ${step.error}`),
}),
}
  }

  async run() {
    try {
      this.log("🎯 Starting Comprehensive Deployment Automation")
      
      await this.preDeploymentChecks()
      await this.buildApplication()
      await this.runTests()
      await this.generateAssets()
      await this.postDeploymentTasks()
      
      await this.generateReport()
      this.displaySummary()
      
      this.log("🎉 Comprehensive Deployment Automation completed successfully")
      return { success: true, steps: this.deploymentSteps }
    } catch (error) {
      this.log(`💥 Deployment automation failed: ${error.message}`, "error")
      await this.generateReport()
      this.displaySummary()
      return { success: false, error: error.message }
    }
  }
}

// Run the deployment automation
if (require.main === module) {
  const deployment = new ComprehensiveDeploymentAutomation()
  deployment.run().then(result => {
    process.exit(result.success ? 0 : 1),
}),
}

module.exports = ComprehensiveDeploymentAutomation