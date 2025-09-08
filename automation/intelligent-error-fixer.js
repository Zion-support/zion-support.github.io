

=
>        fix: (content) => {















          if (!content.includes("import React")) {







  async runBuildCheck() {




  async runLintCheck() {



  async runTypeCheck() {

    try {
      this.log('Running TypeScript check...');
        encoding: 'utf8', 










    return errors;
  }




>












>







>






      // Fix import statements
      if (content.includes('React.') && !content.includes("import React")) {
        content = `import React from 'react';\n${content}`;
        modified = true;
      }














>






  async cleanupDuplicateFiles() {
    this.log('Checking for duplicate page files...')
    const pagesDir = path.join(process.cwd(), 'pages')
    if (!fs.existsSync(pagesDir)) {
      return
    const duplicates = []
    const seen = new Set()
    function scanDirectory(dir) {
      const files = fs.readdirSync(dir, { withFileTypes: true });






      files.forEach(file => {
























<









<



















