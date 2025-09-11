const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
        this.logFile = path.join(this.projectRoot, 'logs', 'error-recovery.log')
        const logsDir = path.join(this.projectRoot, 'logs')
        this.log(' Detecting errors...')
            const syntaxCheck = execSync('npm run type-check', { "cwd": this.projectRoot, "encoding"})
                "type"
                "severity"
            const lintCheck = execSync('npm run lint', { "cwd": this.projectRoot, "encoding"})
                "type"
                "severity"
            const buildCheck = execSync('npm run build', { "cwd": this.projectRoot, "encoding"})
                "type"
                "severity"
            execSync('npm run "lint")