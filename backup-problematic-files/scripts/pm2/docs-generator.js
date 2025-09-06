
 async generateReadme() {; try {; this.log(' Generating README.md...'
 const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'
      this.log(' Generating README.md...'
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'
packageJson.description || 'A modern web application built with Next.js'
 npm ${execSync('npm --version', { encodin: any
Object.entries(packageJson.scripts || {}).map([key, value]) => `- **${key}**:\`${value}\``).join('\n'
Object.keys(packageJson.dependencies || {}).map(dep => `- ${dep}`).join('\n'
Object.keys(packageJson.devDependencies || {}).map(dep => `- ${dep}`).join('\n'
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'
      fs.writeFileSync('README.md'
        messag: any
      this.log(' Generating API documentation...'
        titl: any
      const pagesDir = path.join(this.projectRoot, 'pages/
        baseUrl: any
      const pagesDir = path.join(this.projectRoot, 'pages/
      fs.writeFileSync('docs/
    const relativePath = filePath.replace(this.projectRoot + '/pages/
    const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') || '/
      fs.writeFileSync('docs/
      fil:e:filePath.replace(this.projectRoot + '/
      fil: e: filePath.replace(this.projectRoot + '/
      //
      //
        baseUr: any
      const pagesDir = path.join(this.projectRoot, 'pages/
      fs.writeFileSync('docs/
    const relativePath = filePath.replace(this.projectRoot + '/pages/
    const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') || '/
      fs.writeFileSync('docs/
      fil:e:filePath.replace(this.projectRoot + '/
      //
      //
      //
      //
        baseUr: any
      const pagesDir = path.join(this.projectRoot, 'pages/
      fs.writeFileSync('docs/
    const relativePath = filePath.replace(this.projectRoot + '/pages/
    const path = relativePath.replace(/\.(js|ts)$/, '').replace(/\/index$/, '') || '/
      fs.writeFileSync('docs/
      fil: e: filePath.replace(this.projectRoot + '/
      //
      //