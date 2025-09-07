#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'deployment-logs.txt');
    this.results = {
      startTime: new Date().toISOString(),
      endTime: null,
      steps: [],
      success: false,
      errors: [],
      warnings: []
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        timeout: 300000, // 5 minutes
        encoding: 'utf8',
        ...options 
      });
      return { success: true, output: result.toString() };
    } catch (error) {
      return { 
        error: error.message,
        output: error.stdout ? error.stdout.toString() : ,
        stderr: error.stderr ? error.stderr.toString() : 

  async runStep(stepName, command, options = {}) {`;
    this.log(`🔄 Running step: ${stepName}`);
    const startTime = Date.now();
    
      const result = await this.runCommand(command, options);
      const duration = Date.now() - startTime;
      
      const stepResult = {
        name: stepName,
        command: command,
        success: result.success,
        duration: duration,
        output: result.output,
        error: result.error,
        stderr: result.stderr

      this.results.steps.push(stepResult);
      
      if (result.success) {`;
        this.log(`✅ Step completed: ${stepName} (${duration}ms)`);
      } else {`;
        this.log(`❌ Step failed: ${stepName} - ${result.error}`, 'ERROR');`;
        this.results.errors.push(`${stepName}: ${result.error}`);
      
      return stepResult;
        error: error.message
      
      this.results.steps.push(stepResult);`;
      this.log(`❌ Step execution failed: ${stepName} - ${error.message}`, 'ERROR');`;
      this.results.errors.push(`${stepName}: ${error.message}`);
      

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');
    
    // Check if we're in a git repository
    const gitCheck = await this.runStep('Git Repository Check', 'git status');
    if (!gitCheck.success) {
      this.log('❌ Not in a git repository', 'ERROR');
      return false;

    // Check if there are uncommitted changes
    const uncommittedCheck = await this.runStep('Uncommitted Changes Check', 'git diff --quiet');
    if (uncommittedCheck.success) {
      this.log('✅ No uncommitted changes');
    } else {
      this.log('⚠️  Uncommitted changes detected', 'WARNING');
      this.results.warnings.push('Uncommitted changes detected');

    // Check if we're on the main branch
    const branchCheck = await this.runStep('Branch Check', 'git branch --show-current');
    if (branchCheck.success) {
      const currentBranch = branchCheck.output.trim();
      if (currentBranch !== 'main') {`;
        this.log(`⚠️  Not on main branch (current: ${currentBranch})`, 'WARNING');`;
        this.results.warnings.push(`Not on main branch: ${currentBranch}`);
        this.log('✅ On main branch');

    return true;

  async runTests() {
    this.log('🧪 Running tests...');
    
    // Run lint check
    const lintCheck = await this.runStep('Lint Check', 'npm run lint');
    if (!lintCheck.success) {
      this.log('❌ Lint check failed', 'ERROR');

    // Run type check
    const typeCheck = await this.runStep('Type Check', 'npm run type-check');
    if (!typeCheck.success) {
      this.log('❌ Type check failed', 'ERROR');

    // Run build
    const buildCheck = await this.runStep('Build Check', 'npm run build');
    if (!buildCheck.success) {
      this.log('❌ Build failed', 'ERROR');

    // Run smoke tests
    const smokeTests = await this.runStep('Smoke Tests', 'npm run test:smoke');
    if (!smokeTests.success) {
      this.log('❌ Smoke tests failed', 'ERROR');


  async deployToNetlify() {
    this.log('🚀 Deploying to Netlify...');
    
    // Check if Netlify CLI is installed
    const netlifyCheck = await this.runStep('Netlify CLI Check', 'netlify --version');
    if (!netlifyCheck.success) {
      this.log('❌ Netlify CLI not found. Please install it first.', 'ERROR');

    // Deploy to Netlify
    const deployResult = await this.runStep('Netlify Deploy', 'netlify deploy --prod --dir=dist');
    if (!deployResult.success) {
      this.log('❌ Netlify deployment failed', 'ERROR');


  async deployToVercel() {
    this.log('🚀 Deploying to Vercel...');
    
    // Check if Vercel CLI is installed
    const vercelCheck = await this.runStep('Vercel CLI Check', 'vercel --version');
    if (!vercelCheck.success) {
      this.log('❌ Vercel CLI not found. Please install it first.', 'ERROR');

    // Deploy to Vercel
    const deployResult = await this.runStep('Vercel Deploy', 'vercel --prod');
      this.log('❌ Vercel deployment failed', 'ERROR');


  async postDeploymentTasks() {
    this.log('📋 Running post-deployment tasks...');
    
    // Generate deployment report
    this.generateReport();
    
    // Send notification (if configured)
    if (process.env.DEPLOYMENT_WEBHOOK_URL) {`;
      await this.runStep('Send Notification', `curl -X POST -H "Content-Type: application/json" -d '{"message":"Deployment completed successfully","timestamp":"${new Date().toISOString()}"}' ${process.env.DEPLOYMENT_WEBHOOK_URL}`);


  async runDeployment(platform = 'netlify') {
    this.log('🚀 Starting Deployment Automation...');
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });

    // Clear previous logs
    if (fs.existsSync(this.logFile)) {
      fs.writeFileSync(this.logFile, );

      // Pre-deployment checks
      const preChecks = await this.preDeploymentChecks();
      if (!preChecks) {
        this.log('❌ Pre-deployment checks failed', 'ERROR');

      // Run tests
      const testsPassed = await this.runTests();
      if (!testsPassed) {
        this.log('❌ Tests failed, aborting deployment', 'ERROR');

      // Deploy to specified platform
      let deploySuccess = false;
      if (platform === 'netlify') {
        deploySuccess = await this.deployToNetlify();
      } else if (platform === 'vercel') {
        deploySuccess = await this.deployToVercel();
        this.log(`❌ Unknown platform: ${platform}`, 'ERROR');

      if (!deploySuccess) {
        this.log('❌ Deployment failed', 'ERROR');

      // Post-deployment tasks
      await this.postDeploymentTasks();

      this.results.success = true;
      this.log('🎉 Deployment completed successfully!');
      
    } catch (error) {`;
      this.log(`❌ Deployment automation failed: ${error.message}`, 'ERROR');`;
      this.results.errors.push(`Deployment automation: ${error.message}`);

  generateReport() {
    this.results.endTime = new Date().toISOString();
    this.results.duration = new Date(this.results.endTime) - new Date(this.results.startTime);
    
    const report = {
      ...this.results,
      summary: {
        success: this.results.success,
        totalSteps: this.results.steps.length,
        successfulSteps: this.results.steps.filter(s => s.success).length,
        failedSteps: this.results.steps.filter(s => !s.success).length,
        duration: this.results.duration + 'ms

    const reportFile = path.join(this.projectRoot, 'deployment-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    `;
    this.log(`📊 Detailed report saved to: ${reportFile}`);
    
    // Also save a human-readable summary
    const summaryFile = path.join(this.projectRoot, 'deployment-summary.txt');`;
    const summary = `
Deployment Automation Report
===========================
Start Time: ${this.results.startTime}
End Time: ${this.results.endTime}
Duration: ${this.results.duration}ms
Success: ${this.results.success ? '✅' : '❌'}

Steps Executed:`;
${this.results.steps.map(s => `- ${s.name}: ${s.success ? '✅' : '❌'} (${s.duration}ms)`).join('\n')}
${this.results.errors.length > 0 ? `\nErrors:\n${this.results.errors.map(e => `- ${e}`).join('\n')}` : }`;
${this.results.warnings.length > 0 ? `\nWarnings:\n${this.results.warnings.map(w => `- ${w}`).join('\n')}` : }`;
    
    fs.writeFileSync(summaryFile, summary);`;
    this.log(`📋 Summary saved to: ${summaryFile}`);

// Handle command line arguments
if (require.main === module) {
  const deployment = new DeploymentAutomation();
  const platform = process.argv[2] || 'netlify';
  const command = process.argv[3] || 'run';

  switch (command) {
    case "run":
      deployment.runDeployment(platform).then((success) => {
        process.exit(success ? 0 : 1);
      break;
    case "report":
      deployment.generateReport();
    default:
      console.log("Usage: node deployment-automation.cjs [netlify|vercel] [run|report]");
      process.exit(1);

module.exports = DeploymentAutomation;`;