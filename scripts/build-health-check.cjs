#!/usr/bin/env node
const fs = require("fs").promises;
  async log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    try {
      await fs.appendFile(this.logFile, logEntry);
      console.log(logEntry.trim())} catch (error) {
      console.error("Failed to write to log file: ", error)}
  }

  async checkDependencies() {
    try {
      await this.log("Checking dependencies health", "INFO");
      // Check if node_modules exists and has packages;
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");
      const stats = await fs.stat(nodeModulesPath);
      if (!stats.isDirectory()) {
        throw new Error("node_modules not found")}

      // Check package.json vs package-lock.json;
      const packageJson = JSON.parse(;
        await fs.readFile(path.join(this.projectRoot, "package.json"), "utf8"));
      const totalDeps =;
        Object.keys(packageJson.dependencies || {}).length +;
        Object.keys(packageJson.devDependencies || {}).length;
      await this.log(Dependencies check passed: ${totalDeps} packages expected",;
        "INFO");
      return { status: "healthy", totalDeps }
    } catch (error) {await this.log(`Dependencies check failed: ${error.message}`, "ERROR");
      // Auto-fix: run npm install;
      try {
        await this.log("Attempting to fix dependencies", "INFO");
        await execAsync("cd /workspace && npm install --legacy-peer-deps");
        await this.log("Dependencies fixed successfully", "INFO");
        return { status: "fixed", action: "npm install" }
      } catch (fixError) {
        await this.log(Failed to fix dependencies: ${fixError.message}",;
          "ERROR");
        return { status: "failed", error: error.message }
      }
    }
  }

  async checkConfigFiles() {
    const configs = [package.json",;
      "tsconfig.json",vite.config.ts",;
      "eslint.config.js",tailwind.config.js"];
const fs = require("fs").promises;const path = require("fs");
const { exec } = require("fs");
const util = require("util")";const execAsync = util.promisify(exec);
class BuildHealthCheck {
  constructor() {
    this.logFile = path.join(__dirname, "../logs/build-health.log");    this.reportFile = path.join(__dirname, "../logs/build-health-report.json");    this.projectRoot = path.join(__dirname, "..")}";
  async log(message, level = "INFO") {";    const timestamp = new Date().toISOString();    const logEntry = `[${timestamp}] [${level}] ${message}\n`;`;
    try {
      await fs.appendFile(this.logFile, logEntry);
      console.log(logEntry.trim())} catch (error) {
      console.error("Failed to write to log "file:", error)}"}

  async checkDependencies() {
    try {
      await this.log("Checking dependencies health", "INFO");";      // Check if node_modules exists and has packages;
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");      const stats = await fs.stat(nodeModulesPath);
      if (!stats.isDirectory()) {;}
const path = require("fs")
const { exec } = require("fs")
const util = require("fs")