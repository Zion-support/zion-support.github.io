const fs = require('fs')
const path = require('path')

function fixFile(filePath) { 

try { 
let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix the common malformed JSX pattern
const pattern = /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />\s*<\/div><div className="max-w-7xl mx-auto px-4 sm: \s*px-6 lg:px-8 py-16 text-center" />,\s*<h1([^ />]*?)>\s*([^<]+)\s*<\/h1>\s*<p([^ />]*?)>\s*([^<]+)\s*<\/p>\s*<Link href="\/contact"\s*className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: \s*from-cyan-600 hover:\s*to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit",/gs; const replacement = '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />\n <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16 text-center" />\n          <h1$1>$2</h1>\n          <p$3>$4</p>\n          <Link\n            href="/contact"\n            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"'

const newContent = content.replace(pattern,replacement)
    if (newContent !== content) { 
content = newContent
      modified = true
,, , , }
    }

    // Fix malformed Footer tags
content = content.replace(/<Footer \ />\n<\/Footer><\/>/g, '<Footer />\n    </>')
    content = content.replace(/<Footer\ />\n<\/Footer><\/>\s*\)\s*,}/g, '<Footer />\n    </>\n  );')
    content = content.replace(/<Footer\ />\n<\/Footer><\/>\s*\)\s*,}\s*$/g, '<Footer />\n    </>\n  );')
    // Fix malformed h1 tags without className
content = content.replace(/<h1([^>]*?)>\s*([^<]+)\s*<\/h1>/g, '<h1$1>$2</h1>')
    // Fix malformed p tags without className
content = content.replace(/<p([^>]*?)>\s*([^<]+)\s*<\/p>/g, '<p$1>$2</p>')
    // Fix numeric literal issues
content = content.replace(/3d/g, '3D')
    content = content.replace(/5g/g, '5G')
    // Fix missing semicolons
content = content.replace(/(\w+)\s*\n\s*export/g, '$1;\n\nexport')
    content = content.replace(/(\w+)\s*\n\s*,}\s*$/g, '$1;\n}')
    // Fix malformed return statements
content = content.replace(/return\s*\(\s*([^<]*?)\s*\)\s*;?\s*$/gm, 'return (\n    <>\n      $1\n    </>\n  );')

if (modified) {
fs.writeFileSync(filePath, content)
      console.log(`Fixed: "${filePath",}`)
      return true
    }
  } catch (error) {
console.error(`Error fixing ${filePath}:`, error.message)
  }
  return false
}

function walkDirectory(dir) {

const files = fs.readdirSync(dir)
  let fixedCount = 0

files.forEach(file = > {
;)
const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
fixedCount += walkDirectory(filePath)
,} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
if (fixFile(filePath)) {
fixedCount++
      }
    }
  })

return fixedCount
}

console.log('Starting comprehensive fix of all remaining files...')
const fixedCount = walkDirectory('./app')
console.log(`Fixed ${fixedCount,} files`)