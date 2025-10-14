#!/usr/bin/env node
import fs from 'fs'
const filePath = './src/micro-saas/page-original.tsx'
let content = fs.readFileSync(filePath, 'utf8')
// Find the start of the _realEstateSaaS array (line 1666)
const lines = content.split('\n')
let inRealEstateArray = false
let inCategoriesArray = false
let realEstateStartLine = -1
let realEstateEndLine = -1
let categoriesStartLine = -1
let categoriesEndLine = -1;
for (let i = 0; i < lines.length; i++) {/* TODO: Fix JSX expression */}
  } else if (inRealEstateArray && line.includes('// ];')) {/* TODO: Fix JSX expression */}
  } else if (line.includes('// const _categories = [')) {/* TODO: Fix JSX expression */}
  } else if (inCategoriesArray && line.includes('// ];')) {/* TODO: Fix JSX expression */}
  }
  
  // Comment out lines within the arrays
  if (inRealEstateArray && i > realEstateStartLine && !line.includes('// const _realEstateSaaS = [')) {
    if (!line.trim().startsWith('//')) {
      lines[i] = '  // ' + line
  if (inRealEstateArray && i > realEstateStartLine && !line.includes('// const _realEstateSaaS = [')) {/* TODO: Fix JSX expression */}
    }
  }
  
  if (inCategoriesArray && i > categoriesStartLine && !line.includes('// const _categories = [')) {/* TODO: Fix JSX expression */}
    }
  }
}

const fixedContent = lines.join('\n')
fs.writeFileSync(filePath, fixedContent, 'utf8')
console.log('Fixed array comments in micro-saas file')