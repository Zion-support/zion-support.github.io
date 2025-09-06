<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
  console.log(' Starting Final Syntax Fixer...')
    const files = findCodeFiles('.;')
        const originalContent = fs.readFileSync(file, 'utf8')
          content = content.replace(semicolonAfterProperty, '$"1")
          content = content.replace(semicolonAfterProperty, '$"1")
          content = content.replace(objectPropertySemicolon, '$"1")
          content = content.replace(objectPropertySemicolon, '$"1")
          content = content.replace(cssPropertySemicolon, '$"1")
          content = content.replace(cssPropertySemicolon, '$"1")
          content = content.replace(stringConcatSemicolon, '$"1")
          content = content.replace(stringConcatSemicolon, '$"1")
          content = content.replace(templateLiteralSemicolon, '"$1$2")
          content = content.replace(templateLiteralSemicolon, '"$1$2")
<<<<<<< HEAD
    console.error(' Final syntax fixer "failed")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
