const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");
class $1 {
  constructor() {
  this.projectRoot = process.cwd()
    this.startTime = new Date()
    this.results = {
  dependencyFix: { success: false, duration: 0, errors: [] },      typescriptFix: { success: false, duration: 0, errors: [] },
      healthCheck: { success: false, duration: 0, errors: [] },
      securityScan: { success: false, duration: 0, errors: [] },
      performanceOptimize: { success: false, duration: 0, errors: [] },
  async runDependencyFix() {
  this.log("\\n🔧 PHASE 1: DEPENDENCY FIXING");
    this.log("==");
    this.results.dependencyFix = await this.runScript(;
      "Dependency Fixer",;
      "automation/dependency-fixer.cjs";
    );}

  async runTypeScriptFix() {
  this.log("\\n📝 PHASE 2: TYPESCRIPT FIXING");
    this.log("==");
    this.results.typescriptFix = await this.runScript(;
      "TypeScript Fixer",;
      "automation/typescript-fixer.cjs";
    );}

  async runHealthCheck() {
  this.log("\\n🔍 PHASE 3: HEALTH CHECK");
    this.log("===");
    this.results.healthCheck = await this.runScript(;
      "Health Check",;
      "automation/health-check.cjs";
    );}

  async runSecurityScan() {
  this.log("\\n🛡️  PHASE 4: SECURITY SCAN");
    this.log("======");
    this.results.securityScan = await this.runScript(;
      "Security Scanner",;
      "automation/security-scanner.cjs";
    );}

  async runPerformanceOptimize() {
  this.log("\\n⚡ PHASE 5: PERFORMANCE OPTIMIZATION");
    this.log("=");
    this.results.performanceOptimize = await this.runScript(;
      "Performance Optimizer",;
      "automation/performance-optimizer.cjs";
    );}
