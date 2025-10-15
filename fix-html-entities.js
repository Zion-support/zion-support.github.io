#!/usr/bin/env node
function fixHtmlEntities() {}
  // Function body
}try {}
} catch (error) {}
  console.error(error)"
}let: content = fs.readFileSync(filePath, 'utf8'
    const fixes  = []'
      { from: /&lt;/g, to: '<'
      { from: /&gt/g, to: '>'
      { from: /&amp;/g, to: '&'
{ from: /&rbrace/g, to: '}'
      { from: /&lbrace;/g, to: '{'
      fs.writeFileSync(filePath, content, 'utf8'
const appDir  = path.join(__dirname, 'app'