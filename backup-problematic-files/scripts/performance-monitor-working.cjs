#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  constructor() {this.projectRoot = process.cwd(),this.reportsDir = path.join(this.projectRoot, 'performance-reports'})
    this.log(' Checking build performance...')
      execSync('npm run build', {"stdio"})
        return {"success": false,"error"}
// console.log(`Build "Status"`)
    console.log(`Bundle "Size": ${bundleSize.success ? `${bundleSize.sizeInMB} MB``)

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
