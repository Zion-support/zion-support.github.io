#!/usr/bin/env node
const fs = // // require('fs'
const path = // // require('path'
const glob = // // require('glob'
    this.srcDir = path.join(this.projectRoot, 'src'
    this.reportsDir = path.join(this.projectRoot, 'automation-reports'
    this.log('🧹 Starting console.log removal from production code'
    const files = glob.sync('**/*.{js,jsx,ts,tsx}'
      "ignore"
      console.error(' Console log removal "failed"