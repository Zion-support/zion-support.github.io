<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportFile = path.join(__dirname, '../logs/dependency-optimization-report.json')
    console.log('� Optimizing dependencies...')
      const outdated = execSync('npm outdated --json', { encoding: 'utf8'})
      const unused = execSync('npx depcheck --json', { encoding: 'utf8'})
      console.log(' Dependency optimization completed!')
      console.error(' Dependency optimization failed:')
      recommendations.push('Update outdated packages for security and performance')
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
      recommendations.push('Remove unused dependencies to reduce bundle size')
      recommendations.push('Remove unused dependencies to reduce bundle size')
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

      recommendations.push('Remove unused dependencies to reduce bundle size')
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
