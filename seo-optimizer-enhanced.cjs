#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    this.log(' Checking meta tags...')
    const pagesDir = path.join(this.projectRoot, 'pages')
      this.log('Pages directory not found')
      if (file.endsWith('.tsx') || file.endsWith('.jsx')
        const content = fs.readFileSync(filePath, 'utf8')
        if (!content.includes('<Head>') && !content.includes('<title>')
            "issue"
            "recommendation"
