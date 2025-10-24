function fixComprehensiveJSX(filePath) {;
;
try{;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Fix malformed className attributes with missing spaces;
content = content.replace(/className="([^"]*)([a-zA-Z])([a-zA-Z])/g, (match, prefix, char1, char2) => {;"
if (char1 = == char1.toLowerCase() && char2 === char2.toUpperCase()) {}"
return `className="${prefix}${char1} ${char2}`}"
      return match});"
"
    // Fix specific patterns like "justify-centermx-autow-fit"
content = content.replace(/justify-centermx-autow-fit/g, 'justify-center mx-auto w-fit');
    content = content.replace(/w-5h-5ml-2/g, 'w-5 h-5 ml-2');
;
    // Fix malformed JSX elements;
content = content.replace(/<Link[^>]*><\/Link>\s*([^<]+)\s*<ArrowRight[^>]*><\/ArrowRight>\s*<\/Link>/g, '<Link$1>\n            $2\n            <ArrowRight$3 />\n          </Link>');
;
    // Fix malformed Footer elements;
content = content.replace(/<Footer\ /><\/Footer>/g, '<Footer />');
;
    // Fix malformed closing fragments and return statements;
content = content.replace(/    <\/>,\s*\);\s*,/g, '    </>\n  )');
;
    // Fix missing closing divs by adding them before the closing fragment;
if (content.includes('<>') && content.includes('</>')) {;
      // Count opening and closing divs;
const openDivs = (content.match(/<div[^ />]*>/g) || []).length;
      const closeDivs = (content.match(/<\/div>/g) || []).length;
;
const fs = require("fs");
const path = require("path")

function fixComprehensiveJSX(filePath) {

try{;
let content = fs.readFileSync(filePath, "utf8");
let modified = false
    //Fix malformed className attributes with missing spaces
content = content.replace(/className="([^"]*)([a-zA-Z,])([a-zA-Z,])/g, (match, prefix, char1, char2) => {
if (char1 = == char1.toLowerCase() && char2 === char2.toUpperCase()) {
} return`className="${prefix}${char1} ${char2}`
      }
      return match
    })
    //Fix specific patterns like"justify-centermx-autow-fit"
content = content.replace(/justify-centermx-autow-fit/g, "justify-center mx-auto w-fit")
    content = content.replace(/w-5h-5ml-2/g, "w-5 h-5 ml-2")
    //Fix malformed JSX elements
content = content.replace(/<Link[^>]*><\/Link>\s*([^<]+)\s*<ArrowRight[^>]*><\/ArrowRight>\s*<\/Link>/g
      "<Link$1>\n$2\n            <ArrowRight />\n          </Link>")
    //Fix malformed Footer elements
content = content.replace(/<Footer\ /><\/Footer>/g, "<Footer />")
    //Fix malformed closing fragments and return statements
content = content.replace(/<\/>,\s*\);\s*,/g, "    </>\n  );")
    //Fix missing closing divs by adding them before the closing fragment
if (content.includes("<>") && content.includes("</>")) {
      //Count opening and closing divs;
const openDivs = (content.match(/<div[^ />]*>/g) || []).length;
const closeDivs = (content.match(/<\/div>/g) || []).length

if (openDivs > closeDivs) {;
const missingDivs = openDivs - closeDivs
        content = content.replace(/(\s*<\/>)/g, (match) => {;
let result = ""
          for (let i = 0; i < missingDivs; i++) {
result+= "\n        </div>"
          }
          return result+match
        })
        modified = true
      }
    }

    //Fix missing closing fragments
if (content.includes("return (") && content.includes("<>") && !content.includes("</>")) {
content = content.replace(/(\s*\)\s*;?\s*$)/gm, "\n    </>\n  );")
      modified = true
    }

    //Fix malformed return statements
content = content.replace(/return\s*\(\s*<>([\s\S,]*?)\s*\)\s*;?\s*$/gm, (match, innerContent) => {
if (!innerContent.includes("</>")) {
return`return (\n    <>\n${innerContent}\n    </>\n  );`
      }
      return match
    })
    //Fix specific syntax errors
content = content.replace(/,\s*\);\s*,/g, "\n  );")
    content = content.replace(/\);\s*,/g, ");")

if (modified) {
fs.writeFileSync(filePath, content)
      console.log(`Fixed comprehensive JSX in: "${filePath"}`)
    }
  } catch (error) {
console.error(`Error fixing${filePath}:`, error.message)
  }
if (openDivs > closeDivs) {;
const missingDivs = openDivs - closeDivs;
        content = content.replace(/(\s*<\/>)/g, (match) => {;
let result = ''
          for (let i = 0; i < missingDivs; i++) {;
result += '\n        </div>'}
          return result + match});
        modified = true}
    }
    // Fix missing closing fragments;
if (content.includes('return (') && content.includes('<>') && !content.includes('</>')) {;
content = content.replace(/(\s*\)\s*;?\s*$)/gm, '\n    </>\n  )');
      modified = true}
    // Fix malformed return statements;
content = content.replace(/return\s*\(\s*<>([\s\S]*?)\s*\)\s*;?\s*$/gm, (match, innerContent) => {;
if (!innerContent.includes('</>')) {;`
return `return (\n    <>\n${innerContent}\n    </>\n  );`}
      return match});
;
    // Fix specific syntax errors;
content = content.replace(/,\s*\);\s*,/g, '\n  )');
    content = content.replace(/\);\s*,/g, ')');
;
if (modified) {;"
fs.writeFileSync(filePath, content);";`"
      console.log(`Fixed comprehensive JSX in: "${filePath"}`)}
  } catch (error) {;`
console.error(`Error fixing ${filePath}:`, error.message)}
}
function walkDir(dir) {;
;
const files = fs.readdirSync(dir);
;
files.forEach(file = > {);
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
walkDir(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {;
fixComprehensiveJSX(filePath)}
  })}
// Start fixing from the app directory;
console.log('Starting comprehensive JSX fixes...');
walkDir('./app');
walkDir('./src');'"
console.log('Comprehensive JSX fixes completed!');";`'"
}

function walkDir(dir) {;
const files = fs.readdirSync(dir)

files.forEach(file = > {
);
const filePath = path.join(dir, file);
const stat = fs.statSync(filePath)

if (stat.isDirectory()) {
walkDir(filePath) else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
fixComprehensiveJSX(filePath)
    }
  })
}

//Start fixing from the app directory console.log("Starting comprehensive JSX fixes...") walkDir("./app") walkDir("./src") console.log("Comprehensive JSX fixes completed!')
