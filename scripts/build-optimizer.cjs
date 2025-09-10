const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'build-reports');
    this.ensureDirectories()}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true })}
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  analyzeBuildConfig() {
    this.log('🔍 Analyzing build configuration...');

    try {
      const configFiles = [;
        'vite.config.js',;
        'vite.config.ts',;
        'next.config.js',;
        'next.config.ts',;
        'webpack.config.js',;
        'webpack.config.ts',;
        'rollup.config.js',;
        'rollup.config.ts';
      ];

      const foundConfigs = [];
      const configAnalysis = {}
