const fs = require('fs';'
  const filePath  = '/workspace/eslint.config.js';try {let content  = fs.readFileSync(filePath, 'utf8')// Replace all ' with single quotes;'
  }
  content = content.replace(/'/g, "'")fs.writeFileSync(filePath, content, 'utf8')console.log('Fixed eslint.config.js - replaced all ' with single quotes')} catch (error) {console.error('Error fixing eslint.config."js":', error.message)}