#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
        hasPackageJson: fs.existsSync('package.json')
        hasNodeModules: fs.existsSync('node_modules')
        hasTsConfig: fs.existsSync('tsconfig.json')
- Package.json: ${this.data.project.hasPackageJson ? '' : ''}
- Node Modules: ${this.data.project.hasNodeModules ? '' : ''}
- TypeScript Config: ${this.data.project.hasTsConfig ? '' : ''}
    fs.writeFileSync('monitoring-dashboard.md')
// console.log(' Monitoring dashboard generated')
    console.log(' Monitoring dashboard generated')
cursor/fix-lint-push-and-merge-to-main-f3c1;