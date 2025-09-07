


#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd();

    this.results = {
      startTime: new Date().toISOString(),
      endTime: null,
      steps: [],
      success: false,
      errors: [],
      warnings: []
    };

    // Check if we're in a git repository
    const gitCheck = await this.runStep('Git Repository Check,git status');
    if (!gitCheck.success) {
      this.log('❌ Not in a git repository,ERROR');
      return false;

    // Check if there are uncommitted changes
    const uncommittedCheck = await this.runStep('Uncommitted Changes Check,git diff --quiet');
    if (uncommittedCheck.success) {
      this.log('✅ No uncommitted changes');
    } else {
      this.log('⚠️  Uncommitted changes detected,WARNING');
      this.results.warnings.push('Uncommitted changes detected');

    // Check if we're on the main branch
    const branchCheck = await this.runStep('Branch Check,git branch --show-current');
    if (branchCheck.success) {
      const currentBranch = branchCheck.output.trim();

        this.log('✅ On main branch');

    return true;

  async runTests() {
    this.log('🧪 Running tests...);
    // Run lint check
    const lintCheck = await this.runStep('Lint Check,npm run lint');
    if (!lintCheck.success) {


    // Run type check
    const typeCheck = await this.runStep('Type Check,npm run type-check');
    if (!typeCheck.success) {


    // Run build
    const buildCheck = await this.runStep('Build Check,npm run build');
    if (!buildCheck.success) {


    // Run smoke tests
    const smokeTests = await this.runStep('Smoke Tests,npm run test:smoke');
    if (!smokeTests.success) {



  async deployToNetlify() {
    this.log('🚀 Deploying to Netlify...);
    // Check if Netlify CLI is installed
    const netlifyCheck = await this.runStep('Netlify CLI Check,netlify --version');
    if (!netlifyCheck.success) {


    // Deploy to Netlify
    const deployResult = await this.runStep('Netlify Deploy,netlify deploy --prod --dir=dist');
    if (!deployResult.success) {


  async deployToVercel() {
    this.log('🚀 Deploying to Vercel...);


    // Check if Vercel CLI is installed
    const vercelCheck = await this.runStep('Vercel CLI Check,vercel --version');
    if (!vercelCheck.success) {



  async postDeploymentTasks() {
    this.log('📋 Running post-deployment tasks...);
    // Generate deployment report
    this.generateReport();
    // Send notification (if configured)



  async runDeployment(platform = 'netlify') {
    this.log('🚀 Starting Deployment Automation...);
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


      // Run tests
      const testsPassed = await this.runTests();
      if (!testsPassed) {


      // Deploy to specified platform
      let deploySuccess = false;
      if (platform ===netlify') {
        deploySuccess = await this.deployToNetlify();
      } else if (platform ===vercel') {
        deploySuccess = await this.deployToVercel();


      // Post-deployment tasks
      await this.postDeploymentTasks();

      this.results.success = true;
      this.log('🎉 Deployment completed successfully!);


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


    const reportFile = path.join(this.projectRoot,deployment-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    const summary = `
Deployment Automation Report

