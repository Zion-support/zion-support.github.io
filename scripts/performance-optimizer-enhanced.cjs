#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportFile = path.join(this.projectRoot, 'performance-optimization-report.json')

    this.log('⚡ Starting Performance Optimizations')
      this.log(' Performance optimizations completed')
    this.log('� Optimizing bundle size')
      execSync('npx depcheck --json')
      execSync('npm run analyze')
        "warnings"
        "warnings"


