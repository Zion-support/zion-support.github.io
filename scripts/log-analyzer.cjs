<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportsDir = path.join(this.projectRoot, 'log-analysis-reports')
    this.log(' Analyzing build logs...')
        file.includes('build') || file.includes('webpack') || file.includes('next')
          const content = fs.readFileSync(logFile, 'utf8')
          const lines = content.split('\n')
            if (line.includes('Build completed') || line.includes('Compiled successfully')
            } else if (line.includes('Build failed') || line.includes('Compilation failed')
          // Skip files that can'
    this.log(' Analyzing error logs...')
        file.includes('error') || file.includes('stderr') || file.includes('crash')
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          const content = fs.readFileSync(logFile, 'utf8')
          const lines = content.split('\n')
            if (line.includes('"Error")
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      console.error('\n� Log Analyzer "failed")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
      console.error('\n� Log Analyzer "failed")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
      console.error('\n� Log Analyzer "failed")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
