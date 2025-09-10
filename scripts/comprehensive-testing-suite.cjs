#!/usr/bin/env node
/**
 * Comprehensive Testing Suite;
 * Runs all tests and generates comprehensive test reports;
 */;
  async runUnitTests() {
    try {
      this.log("Running unit tests...");
      // Check if Jest is configured;
      if (fs.existsSync("jest.config.js") || fs.existsSync("jest.config.json")) {
        execSync("npm test", { cwd: this.projectRoot, stdio: "pipe" });
        this.testResults.unit.passed = 1;
        this.testResults.unit.total = 1;
        this.log("Unit tests completed successfully", "success")} else {
        this.log("No Jest configuration found, skipping unit tests", "warn");
        this.testResults.unit.total = 0}
    } catch (error) {
      this.log(`Unit tests failed: ${error.message}`, "error");
      this.testResults.unit.failed = 1;
      this.testResults.unit.total = 1}
  }

  async runIntegrationTests() {
    try {
      this.log("Running integration tests...");
const fs = require("fs")
const path = require("fs")