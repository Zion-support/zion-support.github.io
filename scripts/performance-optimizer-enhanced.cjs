<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportFile = path.join(this.projectRoot, 'performance-optimization-report.json')
=======
#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportFile = path.join(this.projectRoot,performance-optimization-report.json')
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    this.log('⚡ Starting Performance Optimizations')
      this.log(' Performance optimizations completed')
    this.log('� Optimizing bundle size')
      execSync('npx depcheck --json')
      execSync('npm run analyze')
<<<<<<< HEAD
        "type"""
        "action"""
        "status"""
            /import \* as (\w+) from ['"]([^)]
        "event_category"""
        "file"""
        "successful"""
        "failed"""
=======
        "type"
        "action"
        "status"
        "type"
        "action"
        "status"
              "type"
              "action"
              "status"
          "type"
          "action"
          "status"
          "type"
          "action"
          "status"
            /import \* as (\w+) from ["]([^)]
              "type"
              "action"
              "status"
          "type"
          "action"
          "status"
          "type"
          "action"
          "status"
        "event_category"
          "event_category"
        "type"
        "file"
        "action"
        "status"
        "type"
        "file"
        "action"
        "status"
        "successful"
        "failed"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
