
 async analyzeBuild() {_; try {; this.log(' Analyzing current build...'
 if (!fs.existsSync('dist') {; this.log(' Building project first...'); execSync('npm run build', _{; cwd: this.projectRoot; stdio: any
 if (stat.isDirectory() {; analyzeDirectory(fullPath)} else {_; const fileInfo = {; path: fullPath.replace(this.projectRoot + '/dist/
 const packageJson = JSON.parse(fs.readFileSync('package.json', _'utf8'); const hasAnalyzer = packageJson.devDependencies &&; (packageJson.devDependencies['webpack-bundle-analyzer'] ||; packageJson.devDependencies['@next/
 return {; available: hasAnalyzer, package: hasAnalyzer ?; (packageJson.devDependencies['webpack-bundle-analyzer'] ? 'webpack-bundle-analyzer': any
 try {_; //
 //
 //
              pat:h:fullPath.replace(this.projectRoot + '/dist/
              path: fullPath.replace(this.projectRoot + '/dist/
         packageJson.devDependencies['@next/
          (packageJson.devDependencies['webpack-bundle-analyzer'] ? 'webpack-bundle-analyzer' : any
          (packageJson.devDependencies['webpack-bundle-analyzer'] ? 'webpack-bundle-analyzer' : any
              pat:h:fullPath.replace(this.projectRoot + '/dist/
         packageJson.devDependencies['@next/
          (packageJson.devDependencies['webpack-bundle-analyzer'] ? 'webpack-bundle-analyzer' : any
              path: fullPath.replace(this.projectRoot + '/dist/
         packageJson.devDependencies['@next/
          (packageJson.devDependencies['webpack-bundle-analyzer'] ? 'webpack-bundle-analyzer' : any