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
<<<<<<< HEAD
    console.log(`"Dependencies"`)
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
