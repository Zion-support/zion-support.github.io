

<<<<<<< HEAD
  console.log(' Starting Final Syntax Fixer...')
    const files = findCodeFiles('.;')
        const originalContent = fs.readFileSync(file, 'utf8')
          content = content.replace(semicolonAfterProperty, '$"1")""
          content = content.replace(objectPropertySemicolon, '$"1")""
          content = content.replace(cssPropertySemicolon, '$"1")""
          content = content.replace(stringConcatSemicolon, '$"1")""
          content = content.replace(templateLiteralSemicolon, '"$1$2")""
=======
  console.log(' Starting Final Syntax Fixer...)
    const files = findCodeFiles('.;)
        const originalContent = fs.readFileSync(file,utf8)
          content = content.replace(semicolonAfterProperty,$"1")
          content = content.replace(semicolonAfterProperty,$"1")
          content = content.replace(objectPropertySemicolon,$"1")
          content = content.replace(objectPropertySemicolon,$"1")
          content = content.replace(cssPropertySemicolon,$"1")
          content = content.replace(cssPropertySemicolon,$"1")
          content = content.replace(stringConcatSemicolon,$"1")
          content = content.replace(stringConcatSemicolon,$"1")
          content = content.replace(templateLiteralSemicolon,"$1$2")
          content = content.replace(templateLiteralSemicolon,"$1$2")
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
