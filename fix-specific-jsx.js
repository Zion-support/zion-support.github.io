const fs = require("fs")
const path = require("path")

function fixSpecificJSX(filePath) {

try{
let content = fs.readFileSync(filePath, "utf8")
    let modified = false
    //Fix malformed Head tags
content = content.replace(/<Head><\/Head>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/><\/meta>\s*<\/Head>/g
      "<Head>\n        <title>$1</title>\n        
        <meta name="description" content="Professional services by Zion Tech Group." />\n      
      </Head>")
    //Fix malformed className attributes with spaces
content = content.replace(/className="([^"]*)\s+([^"]*)"/g, "className="$1$2"")
    //Fix malformed div tags
content = content.replace(/<divclassName="([^"]*)"[^ />]*><\/div>\s*<divclassName="([^"]*)"[^ />]*><\/div>/g
      "<div className="$1" />\n <div className="$2" />")
    //Fix missing closing tags for common patterns
const patterns = [//Fix h1 tags
      {
pattern: /<h1className="([^"]*)"[^ />]*><\/h1>\s*([^<]+)\s*<\/h1>/g,replacement: "<h1 className="$1">\n$2\n          </h1>"
}
      }
      //Fix p tags
      {
pattern: /<pclassName="([^"]*)"[^ />]*><\/p>\s*([^<]+)\s*<\/p>/g,replacement: "<p className="$1">\n$2\n          </p>"
      }

    ]

patterns.forEach(({ pattern, replacement }) => {
const newContent = content.replace(pattern, replacement)
      if(newContent !== content) {  
content = newContent
        modified = true
      ,}
    })
    //Fix missing closing fragments
if (content.includes("return (") && content.includes("<>") && !content.includes("</>")) {
      //Find the last line before the closing parenthesis
const lines = content.split("\n")
      let lastContentLine = -1

for (let i = lines.length - 1; i >= 0; i--) {
if (lines[i,].includes(");") || lines[i,].includes("}")) {
lastContentLine = i
          break
        }
      }

if(lastContentLine > 0) {  
lines.splice(lastContentLine, 0, "    </>")
        content = lines.join("\n")
        modified = true
      ,}
    }

if (modified) {
fs.writeFileSync(filePath, content)
      console.log(`Fixed specific JSX in: "${filePath"}`)
    }
  } catch (error) {
console.error(`Error fixing${filePath}:`, error.message)
  }
}

function walkDir(dir) {

const files = fs.readdirSync(dir)

files.forEach(file = > {
)
const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

if (stat.isDirectory()) {
walkDir(filePath) else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
fixSpecificJSX(filePath)
    }
  })
}

//Start fixing from the app directory console.log("Starting specific JSX fixes...") walkDir("./app") walkDir("./src") console.log("Specific JSX fixes completed!")