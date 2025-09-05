#!/usr/bin/env node
/**
 * Automation Test Runner
 * Tests all automation scripts and reports results
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationTestRunner {
  constructor() {
    this.results = {
      "timestamp": new Date().toISOString(),
      "tests": []
    }}

  async runTest(scriptPath, description) {
    
    
    try {
      const result = execSync(`node ${scriptPath}`, { 
        "encoding": 'utf8', 
        "timeout": 10000,
        "stdio": 'pipe'
      });
      
      this.results.tests.push({
        "script": scriptPath,
        description,
        "status": 'passed',
        "output": result.substring(0, 500) // Limit output length
      });
      
      
      return true} catch (error) {
      this.results.tests.push({
        "script": scriptPath,
        description,
        "status": 'failed',
        "error": error.message
      });
      
      
      return false}
  }

  async runAllTests() {
    
    
    const testScripts = [{ "path": 'scripts/health-check.cjs', "desc": 'Health Check Script' },
      { "path": 'scripts/simple-performance-monitor.cjs', "desc": 'Performance Monitor' },
      { "path": 'scripts/simple-code-quality.cjs', "desc": 'Code Quality Checker' }
    ];

    let passed = 0;
    let total = testScripts.length;

    for (const test of testScripts) {
      if (fs.existsSync(test.path)) {
        const success = await this.runTest(test.path, test.desc);
        if (success) passed++} else {
        
        this.results.tests.push({
          "script": test.path,
          "description": test.desc,
          "status": 'not_found'
        })}
    }

    // Save results
    fs.writeFileSync('automation-test-results.json', JSON.stringify(this.results, null, 2));
    
    
    
    
    return this.results}
}

// Run if called directly
if (require.main === module) {
  const runner = new AutomationTestRunner();
  runner.runAllTests().catch(console.error)}

module.exports = AutomationTestRunner;