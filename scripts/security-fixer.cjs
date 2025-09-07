<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportFile = path.join(this.projectRoot, 'security-fix-report.json')
=======
#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportFile = path.join(this.projectRoot,security-fix-report.json')
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    this.log('� Starting Security Fixes')
      this.log(' Security fixes completed')
    this.log(' Fixing dependency vulnerabilities')
      execSync('npm audit fix --force')
<<<<<<< HEAD
        "type"""
        "action"""
        "status"""
            """
          'dangerouslySetInnerHTML={{"__html"}""
          "file"""
        "successful"""
=======
        "type"
        "action"
        "status"
        "type"
        "action"
        "status"
            "
          'dangerouslySetInnerHTML={{"__html"}
          "type"
          "file"
          "action"
          "status"
          "type"
          "file"
          "action"
          "status"
          "type"
          "file"
          "action"
          "status"
          "type"
          "file"
          "action"
          "status"
        "successful"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
