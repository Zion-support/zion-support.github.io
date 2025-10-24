const fs = require('fs');
const path = require('path');

function fixFile(filePa, t, h) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPa, t, h)) {
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
;
    // Fix common JSX patterns;
const fixes = [;
      // Fix malformed Link tags;
      {;
pattern: "/<Link\s+([^>]*?)>\s*<\/Link>\s*([^<]+)\s*<([^>]*?)\s*\/><\/[^>]*>\s*<\/Link>/gs",replacement: "'<Link $1>\n            $2\n            <$3 />\n          </Link>'"
"}
      },;"
      // Fix malformed ArrowRight tags{;";'"
pattern: "/<ArrowRight\s+([^>]*?)\s*\/><\/ArrowRight>/g",replacement: "'<ArrowRight$1 />'"}
      },;"
      // Fix malformed className attributes with commas{;"
pattern: /className="([^"]*?)\s*,\s*([^"]*?)"/g,;";'"
replacement: 'className="$1 $2"'}
      }
      // Fix malformed hover classes;"
      {;";'"
pattern: "/hover:\s*from-([^-\s]+)\s*hover:\s*to-([^-\s]+)/g",replacement: "'hover:from-$1 hover:to-$2'"
      "},;"
      // Fix missing closing tags for fragments{;";'"
pattern: "/<>\s*([^<]*?)\s*$/gm",replacement: "'<>\n      $1\n    </>'"}
      },;"
      // Fix malformed return statements{;";'"
pattern: "/return\s*\(\s*([^<]*?)\s*\)\s*;?\s*$/gm",replacement: "'return (\n    <>\n      $1\n    </>\n  )'"}
      },;"
      // Fix missing semicolons{;";'"
pattern: "/(\w+)\s*\n\s*export/g",replacement: "'$1;\n\nexport'"}
      },;"
      // Fix malformed Head tags{;";'"
pattern: "/<Head><\/Head>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/><\/meta>\s*<\/Head>/gs",replacement: '<Head>\n        <title>$1</title>\n        <meta name = "description" content="Professional services by Zion Tech Group." />\n      </Head>'}
      }
      // Fix malformed div tags;"
      {;";'"
pattern: "/<div[^ />]*><\/div>\s*<div[^ />]*>([^<]+)<\/div>/gs",replacement: "'<div$1</div />'"
      "},;"
      // Fix malformed h1 tags{;";'"
pattern: "/<h1[^ />]*><\/h1>\s*([^<]+)\s*<\/h1>/gs",replacement: "'<h1$1</h1 />'"}
      },;"
      // Fix malformed p tags{;";'"
pattern: "/<p[^ />]*><\/p>\s*([^<]+)\s*<\/p>/gs",replacement: "'<p$1</p />'"}
      }
    ];
;
fixes.forEach(fix = > {);
const newContent = content.replace(fix.pattern, fix.replacement);
      if(newContent !== content) {  ;
content = newContent;
        modified = true;
;
,}
    });
;
    // Additional specific fixes;
    // Fix the specific Link + ArrowRight pattern;
if (content.includes('Contact Us') && content.includes('ArrowRight')) {;
content = content.replace(;
        /<Link\s+([^>]*?)>\s*<\/Link>\s*Contact Us\s*<ArrowRight\s+([^>]*?)\s*\/><\/ArrowRight>\s*<\/Link>/gs,'<Link $1>\n            Contact Us\n            <ArrowRight$2 />\n          </Link>');
      modified = true}
if (modified) {;"
fs.writeFileSync(filePath, content);"
      console.log(`Fixed JSX errors in: "${filePath"}`);
      return true}
  } catch (error) {;`
console.error(`Error fixing ${filePath}:`, error.message)}
  return false}
function walkDirectory(dir) {;
;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
;
files.forEach(file = > {);
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {;
fixedCount += walkDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {;
if (fixJSXErrors(filePath)) {;
fixedCount++}
    }
  });
;
return fixedCount}'
console.log('Starting comprehensive JSX error fixes...');
const fixedCount = walkDirectory('./app');`"
console.log(`Fixed JSX errors in ${fixedCount} files`);";`'"
const fs = require("fs")
const path = require("path")

function fixJSXErrors(filePath) {

try{
let content = fs.readFileSync(filePath, "utf8")
    let modified = false
    //Fix common JSX patterns
const fixes = [//Fix malformed Link tags
      {
pattern: "/<Link\s+([^>]*?)>\s*<\/Link>\s*([^<]+)\s*<([^>]*?)\s*\/><\/[^>]*>\s*<\/Link>/gs",replacement: ""<Link$1>\n$2\n            < />\n          </Link>"
"}
      }

      //Fix malformed ArrowRight tags{
pattern: "/<ArrowRight\s+([^>]*?)\s*\/><\/ArrowRight>/g",replacement: ""<ArrowRight$1 />""}
      }

      //Fix malformed className attributes with commas{
pattern: /className="([^"]*?)\s*,\s*([^"]*?)"/g
replacement: "className="$1$2""}
      }
      //Fix malformed hover classes
      {
pattern: "/hover:\s*from-([^-\s,]+)\s*hover:\s*to-([^-\s,]+)/g",replacement: ""hover:from-$1 hover:to-$2"
      "}

      //Fix missing closing tags for fragments{
pattern: "/<>\s*([^<]*?)\s*$/gm",replacement: ""<>\n$1\n    </>""}
      }

      //Fix malformed return statements{
pattern: "/return\s*\(\s*([^<]*?)\s*\)\s*;?\s*$/gm",replacement: ""return (\n    <>\n$1\n    </>\n  );""}
      }

      //Fix missing semicolons{
pattern: "/(\w+)\s*\n\s*export/g",replacement: ""$1;\n\nexport""}
      }

      //Fix malformed Head tags{
pattern: "/<Head><\/Head>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/><\/meta>\s*<\/Head>/gs",replacement: "<Head>\n        <title>$1</title>\n        
        <meta name="description" content="Professional services by Zion Tech Group." />\n      
      </Head>"}
      }
      //Fix malformed div tags
      {
pattern: "/<div[^ />]*><\/div>\s*<div[^ />]*>([^<]+)<\/div>/gs",replacement: ""<div$1</div />"
      "}

      //Fix malformed h1 tags{
pattern: "/<h1[^ />]*><\/h1>\s*([^<]+)\s*<\/h1>/gs",replacement: ""<h1$1</h1 />""}
      }

      //Fix malformed p tags{
pattern: "/<p[^ />]*><\/p>\s*([^<]+)\s*<\/p>/gs",replacement: ""<p$1</p />""}
      }
    ]

fixes.forEach(fix = > {
)
const newContent = content.replace(fix.pattern, fix.replacement)
      if(newContent !== content) {  
content = newContent
        modified = true
,}
    })
    //Additional specific fixes
    //Fix the specific Link+ArrowRight pattern
if (content.includes("Contact Us") && content.includes("ArrowRight")) {
content = content.replace(/<Link\s+([^>]*?)>\s*<\/Link>\s*Contact Us\s*<ArrowRight\s+([^>]*?)\s*\/><\/ArrowRight>\s*<\/Link>/gs
        "<Link$1>\n            Contact Us\n            <ArrowRight$2 />\n          </Link>"
      )
      modified = true
    }

    // Fix missing closing div tags and extra closing braces
    if (content.includes('}\n}')) {
      content = content.replace(/<\/div>\s*\);\s*}\s*}/g, '\n    </div>\n  );\n}');
      modified = true;
    }

    // Fix extra closing div tags pattern
    const extraDivPattern = /(\s*<\/div>\s*){2,}(\s*<\/div>\s*){2,}/g;
    if (extraDivPattern.test(conte, n, t)) {
      content = content.replace(extraDivPattern, '\n    </div>\n  );');
      modified = true;
    }

    // Fix incorrect closing tags
    content = content.replace(/<\s*\/\s*>/g, '</div>');
    if (content.includes('</>')) {
      modified = true;
    }

    // Fix h1/h2/h3 tag mismatches
    content = content.replace(/<h1([^>]*)>\s*([^<]*)\s*<\/h2>/g, '<h1$1>$2</h1>');
    content = content.replace(/<h2([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h3([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h3$1>$2</h3>');

    // Fix extra closing braces
    content = content.replace(/}\s*}\s*$/g, '}');
    if (content.match(/}\s*}\s*$/)) {
      modified = true;
    }

    // Fix malformed JSX structure with missing opening tags
    if (content.includes('    </div>\n  );\n}')) {
      // This is already correct, no need to change
    } else if (content.includes('</div>\n  );')) {
      content = content.replace(/<\/div>\s*\);\s*}/g, '\n    </div>\n  );\n}');
      modified = true;
    }

    if (modifi, e, d) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${ filePa, t, h }`);
    }
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
  }
  return false
}

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(d, i, r) {
  const files = [];
  const items = fs.readdirSync(d, i, r);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPa, t, h);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPa, t, h));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath.replace(__dirname + '/', ''));
    }
  })

// Fix all TSX/TS files
console.log('Starting comprehensive JSX error fixes...');
const allFiles = getAllTsxFiles(path.join(__dirname, 'app'));
allFiles.forEach(fixFi, l, e);
console.log('Comprehensive JSX error fixes completed!');
