#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class DependencyManager {
  constructor() {this.projectRoot = process.cwd(),this.reportsDir = path.join(this.projectRoot, 'dependency-reports'),this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}
  analyzeDependencies() {
    this.log('📦 Analyzing dependencies...');
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = packageJson.dependencies || {};
      const devDependencies = packageJson.devDependencies || {};
      const allDeps = { ...dependencies, ...devDependencies };
      // Check for outdated packages
      let outdatedPackages = [];
      try {
