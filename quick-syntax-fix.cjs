#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
      let content = fs.readFileSync(filePath, 'utf8')
        /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'')]
      content = content.replace(/import\s*{[^}]+}\s*from\s*['"][^'"]+['')]
      content = content.replace(/['"]\s*;\s*['')]
      content = content.replace(/['"]\s*;\s*([^'"]*)\s*['']
      content = content.replace(/\[\s*['"]\s*;\s*([^'"]*)\s*['']
      content = content.replace(/\[\s*['"]\s*([^'"]*)\s*;\s*['']
      content = content.replace(/{\s*['"]\s*;\s*([^'"]*)\s*[''}]
      content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['']
      content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['']
      content = content.replace(/className\s*=\s*['"]\s*;\s*([^'"]*)\s*['']
      content = content.replace(/href\s*=\s*['"]\s*;\s*([^'"]*)\s*['']
        if (line.includes("'") && (line.match(/'/g) || []).length % 2 !== 0 && !line.endsWith(')
          return line + "
        if (line.includes('"') && (line.match(/"/g) || []).length % 2 !== 0 && !line.endsWith('')
          return line + ''