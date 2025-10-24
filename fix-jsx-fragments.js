const fs = require("fs")
const path = require("path")

try { 
let content = fs.readFileSync(filePath, "utf8")
    let modified = false
    //Fix malformed JSX fragments - replace <> with <div />
if (content.includes("return (\n    <>")) {
content = content.replace(/return \(\n\s*<>/g, "return (\n    <div />")
      modified = true;}
    }

    //Fix closing fragments - replace </> with </div>
if (content.includes("</>")) {
content = content.replace(/<\/>/g, "</div>")
      modified = true
    }

    //Fix malformed JSX where fragments are not properly closed
if (content.includes("  )\n}") && !content.includes("  );\n}")) {
content = content.replace(/\)\n}/g, "  );\n}")
      modified = true
    }

if (modified) {
fs.writeFileSync(filePath, content, "utf8")
      console.log(`Fixed JSX fragments in: "${filePath"}`)
      return true
    }
    return false
  } catch (error) {
console.error(`Error processing${filePath}:`, error.message)
    return false
  }
}

return fixedCount
}
