const fs = require('fs');
const path = require('path');

// Function to fix unterminated string literals
function fixStringLiterals(content) {
  let fixed = content;

  // Fix unterminated string literals in JSX'
  fixed = fixed.replace(/title="([^"]*)\s*$/gm, 'title="$1"');'"
  fixed = fixed.replace(/description="([^"]*)\s*$/gm, 'description="$1"');'"
  fixed = fixed.replace(/content="([^"]*)\s*$/gm, 'content="$1"');'"
  fixed = fixed.replace(/name="([^"]*)\s*$/gm, 'name="$1"');'"
  fixed = fixed.replace(/property="([^"]*)\s*$/gm, 'property="$1"');

  // Fix unterminated string literals in template literals'
  fixed = fixed.replace(/`([^`]*)\s*$/gm, '`$1`');'"
  fixed = fixed.replace(/'([^']*)\s*$/gm, "'$1'");'"
  fixed = fixed.replace(/"([^"]*)\s*$/gm, '"$1"');

  // Fix specific patterns that are common'"
  fixed = fixed.replace(/title="([^"]*)\s*$/gm, 'title="$1"');'"
  fixed = fixed.replace(/description="([^"]*)\s*$/gm, 'description="$1"');'"
  fixed = fixed.replace(/content="([^"]*)\s*$/gm, 'content="$1"');

  // Fix JSX attributes that are missing closing quotes'"
  fixed = fixed.replace(/className="([^"]*)\s*$/gm, 'className="$1"');'"
  fixed = fixed.replace(/href="([^"]*)\s*$/gm, 'href="$1"');'"
  fixed = fixed.replace(/src="([^"]*)\s*$/gm, 'src="$1"');'"
  fixed = fixed.replace(/alt="([^"]*)\s*$/gm, 'alt="$1"');

  // Fix specific meta tag patterns'"
  fixed = fixed.replace(/<meta\s+name="([^"]*)"\s+content="([^"]*)\s*$/gm, '<meta name="$1" content="$2" />');'"
  fixed = fixed.replace(/<meta\s+property="([^"]*)"\s+content="([^"]*)\s*$/gm, '<meta property="$1" content="$2" />');

  // Fix title tags'
  fixed = fixed.replace(/<title>([^<]*)\s*$/gm, '<title>$1</title>');

  return fixed;
}

const fs = require("fs");
const path = require("path");

//Function to fix string literal issues
function fixStringLiterals(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let originalContent = content;
    
    //Fix common string literal issues
    content = content
      //Fix mixed quotes in import statements
      .replace(/import\s+(\w+)\s+from\s+[""]([^""]*)[""]/g, "import$1 from "$2"")
      .replace(/import\s+{\s*([^}]+)\s*}\s+from\s+[""]([^""]*)[""]/g, "import { $1  } from "$2"")
      
      //Fix unterminated string literals
      .replace(/from\s+[""]([^""]*)\s*$/gm, "from "$1"")
      .replace(/import\s+(\w+)\s+from\s+[""]([^""]*)\s*$/gm, "import$1 from "$2"")
      
      //Fix malformed quotes
      .replace(/[""]([^""]*)\s*[""]/g, ""$1"")
      .replace(/[""]([^""]*)\s*[""]/g, ""$1"")
      
      //Fix specific patterns
      .replace(/from\s+[""]([^""]*)\s*$/gm, "from "$1"")
      .replace(/import\s+(\w+)\s+from\s+[""]([^""]*)\s*$/gm, "import$1 from "$2"")
      
      //Fix malformed JSX attributes
      .replace(/title\s*=\s*[""]([^""]*)\s*[""]/g, "title="$1"")
      .replace(/name\s*=\s*[""]([^""]*)\s*[""]/g, "name="$1"")
      .replace(/content\s*=\s*[""]([^""]*)\s*[""]/g, "content="$1"")
      .replace(/property\s*=\s*[""]([^""]*)\s*[""]/g, "property="$1"")
      
      //Fix malformed className attributes
      .replace(/className\s*=\s*[""]([^""]*)\s*[""]/g, "className="$1"")
      
      //Fix malformed href attributes
      .replace(/href\s*=\s*[""]([^""]*)\s*[""]/g, "href="$1"")
      
      //Fix malformed onClick handlers
      .replace(/onClick\s*=\s*{\s*\(\s*\)\s*=>\s*([^}]+)\s*}/g, "onClick={() => $1}")
      
      //Fix malformed function parameters
      .replace(/\(\s*(\w+)\s*,\s*as\s*,\s*(\w+)\s*\)/g, "($1 as$2)")
      
      //Fix malformed template literals
      .replace(/`([^`]*)\s+([^`]*)`/g, "`$1$2`")
      
      //Fix malformed object properties
      .replace(/(\w+)\s*:\s*(\w+)\s*,/g, "$1: $2,")
      
      //Fix malformed array elements
      .replace(/\[\s*(\w+)\s*,\s*(\w+)\s*,\s*\]/g, "[$1, $2 ]")
      
      //Fix malformed template strings
      .replace(/\$\{([^}]*)\s+([^}]*)\}/g, "${$1$2}")
      
      //Fix malformed regex
      .replace(/\/\^([^$]*)\$\//g, "/^$1$/")
      
      //Fix malformed comments
      .replace(/\/\*\s*([^*]*)\s*\*\//g, "/* $1*/")
      
      //Fix malformed ternary operators
      .replace(/\?\s*(\w+)\s*:\s*(\w+)/g, "? $1 : $2")
      
      //Fix malformed logical operators
      .replace(/&&\s*(\w+)/g, "&& $1")
      .replace(/\|\|\s*(\w+)/g, "|| $1")
      
      //Fix malformed comparison operators
      .replace(/==\s*(\w+)/g, "== $1")
      .replace(/!=\s*(\w+)/g, "!= $1")
      .replace(/===\s*(\w+)/g, "=== $1")
      .replace(/!==\s*(\w+)/g, "!== $1")
      
      //Fix malformed assignment operators
      .replace(/=\s*(\w+)/g, "= $1")
      .replace(/\+=\s*(\w+)/g, "+= $1")
      .replace(/-=\s*(\w+)/g, "-= $1")
      .replace(/\*=\s*(\w+)/g, "*= $1")
      .replace(/\/=\s*(\w+)/g, "/= $1")
      
      //Fix malformed function calls
      .replace(/(\w+)\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)/g, "$1($2, $3)")
      
      //Fix malformed object method calls
      .replace(/(\w+)\.(\w+)\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)/g, "$1.$2($3, $4)")
      
      //Fix malformed array access
      .replace(/(\w+)\s*\[\s*(\w+)\s*\]/g, "$1[$2]")
      
      //Fix malformed property access
      .replace(/(\w+)\.(\w+)\s*\.(\w+)/g, "$1.$2.$3")
      
      //Fix malformed string methods
      .replace(/(\w+)\.(\w+)\s*\(\s*\)/g, "$1.$2()")
      
      //Fix malformed array methods
      .replace(/(\w+)\.(\w+)\s*\(\s*(\w+)\s*\)/g, "$1.$2($3)")
      
      //Fix malformed object methods
      .replace(/(\w+)\s*:\s*(\w+)\s*\(\s*\)/g, "$1: $2()")
      
      //Fix malformed arrow functions
      .replace(/\(\s*(\w+)\s*\)\s*=>\s*(\w+)/g, "($1) => $2")
      
      //Fix malformed destructuring assignments
      .replace(/{\s*(\w+)\s*}\s*=\s*(\w+)/g, "{ $1 } = $2")
      
      //Fix malformed spread syntax
      .replace(/\.\.\.\s*(\w+)/g, "...$1")
      
      //Fix malformed rest parameters
      .replace(/\.\.\.\s*(\w+)\s*\)/g, "...$1)")
      
      //Fix malformed default parameters
      .replace(/(\w+)\s*=\s*(\w+)\s*\)/g, "$1 = $2)")
      
      //Fix malformed template literals
      .replace(/`\s*([^`]*)\s*`/g, "`$1`")
      
      //Fix malformed tagged template literals
      .replace(/(\w+)\s*`\s*([^`]*)\s*`/g, "$1`$2`")
      
      //Fix malformed regular expressions
      .replace(/\/\s*([^/]*)\s*\//g, "/$1/")
      
      //Fix malformed flags
      .replace(/\/\s*([^/]*)\s*\/\s*(\w+)/g, "/$1/$2")
      
      //Fix malformed character classes
      .replace(/\[\s*([^\]]*)\s*\]/g, "[$1]")
      
      //Fix malformed quantifiers
      .replace(/(\w+)\s*\+\s*/g, "$1+")
      .replace(/(\w+)\s*\*\s*/g, "$1*")
      .replace(/(\w+)\s*\?\s*/g, "$1?")
      
      //Fix malformed anchors
      .replace(/\^\s*(\w+)/g, "^$1")
      .replace(/(\w+)\s*\$/g, "$1$")
      
      //Fix malformed alternation
      .replace(/(\w+)\s*\|\s*(\w+)/g, "$1|$2")
      
      //Fix malformed grouping
      .replace(/\(\s*([^)]*)\s*\)/g, "($1)")
      
      //Fix malformed non-capturing groups
      .replace(/\(\?\s*:\s*([^)]*)\s*\)/g, "(?:$1)")
      
      //Fix malformed lookahead
      .replace(/\(\?\s*=\s*([^)]*)\s*\)/g, "(?=$1)")
      
      //Fix malformed lookbehind
      .replace(/\(\?\s*<=\s*([^)]*)\s*\)/g, "(?<=$1)")
      
      //Fix malformed negative lookahead
      .replace(/\(\?\s*!\s*([^)]*)\s*\)/g, "(?!$1)")
      
      //Fix malformed negative lookbehind
      .replace(/\(\?\s*<!\s*([^)]*)\s*\)/g, "(?<!$1)")
      
      //Fix malformed named groups
      .replace(/\(\?\s*<(\w+)>\s*([^)]*)\s*\)/g, "(?<$1>$2)")
      
      //Fix malformed backreferences
      .replace(/\\\s*(\d+)/g, "\\$1")
      .replace(/\\\s*k\s*<(\w+)>/g, "\\k<$1>")
      
      //Fix malformed Unicode properties
      .replace(/\\\s*p\s*{\s*(\w+)\s*}/g, "\\p{$1}")
      .replace(/\\\s*P\s*{\s*(\w+)\s*}/g, "\\P{$1}")
      
      //Fix malformed character escapes
      .replace(/\\\s*(\w)/g, "\\$1")
      
      //Fix malformed control characters
      .replace(/\\\s*c\s*(\w)/g, "\\c$1")
      
      //Fix malformed hex escapes
      .replace(/\\\s*x\s*([0-9a-fA-F]{2})/g, "\\x$1")
      
      //Fix malformed Unicode escapes
      .replace(/\\\s*u\s*([0-9a-fA-F]{4})/g, "\\u$1")
      
      //Fix malformed Unicode code point escapes
      .replace(/\\\s*u\s*{\s*([0-9a-fA-F]+)\s*}/g, "\\u{$1}")
      
      //Fix malformed octal escapes
      .replace(/\\\s*([0-7]{1,3})/g, "\\$1")
      
      //Fix malformed null escapes
      .replace(/\\\s*0/g, "\\0")
      
      //Fix malformed bell escapes
      .replace(/\\\s*a/g, "\\a")
      
      //Fix malformed backspace escapes
      .replace(/\\\s*b/g, "\\b")
      
      //Fix malformed form feed escapes
      .replace(/\\\s*f/g, "\\f")
      
      //Fix malformed newline escapes
      .replace(/\\\s*n/g, "\\n")
      
      //Fix malformed carriage return escapes
      .replace(/\\\s*r/g, "\\r")
      
      //Fix malformed tab escapes
      .replace(/\\\s*t/g, "\\t")
      
      //Fix malformed vertical tab escapes
      .replace(/\\\s*v/g, "\\v")
      
      //Fix malformed word boundary escapes
      .replace(/\\\s*B/g, "\\B")
      
      //Fix malformed digit escapes
      .replace(/\\\s*d/g, "\\d")
      .replace(/\\\s*D/g, "\\D")
      
      //Fix malformed whitespace escapes
      .replace(/\\\s*s/g, "\\s")
      .replace(/\\\s*S/g, "\\S")
      
      //Fix malformed word character escapes
      .replace(/\\\s*w/g, "\\w")
      .replace(/\\\s*W/g, "\\W")
      
      //Fix malformed line break escapes
      .replace(/\\\s*R/g, "\\R")
      
      //Fix malformed horizontal whitespace escapes
      .replace(/\\\s*h/g, "\\h")
      .replace(/\\\s*H/g, "\\H")
      
      //Fix malformed vertical whitespace escapes
      .replace(/\\\s*v/g, "\\v")
      .replace(/\\\s*V/g, "\\V")
      
      //Fix malformed NUL escapes
      .replace(/\\\s*NUL/g, "\\NUL")
      
      //Fix malformed SOH escapes
      .replace(/\\\s*SOH/g, "\\SOH")
      
      //Fix malformed STX escapes
      .replace(/\\\s*STX/g, "\\STX")
      
      //Fix malformed ETX escapes
      .replace(/\\\s*ETX/g, "\\ETX")
      
      //Fix malformed EOT escapes
      .replace(/\\\s*EOT/g, "\\EOT")
      
      //Fix malformed ENQ escapes
      .replace(/\\\s*ENQ/g, "\\ENQ")
      
      //Fix malformed ACK escapes
      .replace(/\\\s*ACK/g, "\\ACK")
      
      //Fix malformed BEL escapes
      .replace(/\\\s*BEL/g, "\\BEL")
      
      //Fix malformed BS escapes
      .replace(/\\\s*BS/g, "\\BS")
      
      //Fix malformed HT escapes
      .replace(/\\\s*HT/g, "\\HT")
      
      //Fix malformed LF escapes
      .replace(/\\\s*LF/g, "\\LF")
      
      //Fix malformed VT escapes
      .replace(/\\\s*VT/g, "\\VT")
      
      //Fix malformed FF escapes
      .replace(/\\\s*FF/g, "\\FF")
      
      //Fix malformed CR escapes
      .replace(/\\\s*CR/g, "\\CR")
      
      //Fix malformed SO escapes
      .replace(/\\\s*SO/g, "\\SO")
      
      //Fix malformed SI escapes
      .replace(/\\\s*SI/g, "\\SI")
      
      //Fix malformed DLE escapes
      .replace(/\\\s*DLE/g, "\\DLE")
      
      //Fix malformed DC1 escapes
      .replace(/\\\s*DC1/g, "\\DC1")
      
      //Fix malformed DC2 escapes
      .replace(/\\\s*DC2/g, "\\DC2")
      
      //Fix malformed DC3 escapes
      .replace(/\\\s*DC3/g, "\\DC3")
      
      //Fix malformed DC4 escapes
      .replace(/\\\s*DC4/g, "\\DC4")
      
      //Fix malformed NAK escapes
      .replace(/\\\s*NAK/g, "\\NAK")
      
      //Fix malformed SYN escapes
      .replace(/\\\s*SYN/g, "\\SYN")
      
      //Fix malformed ETB escapes
      .replace(/\\\s*ETB/g, "\\ETB")
      
      //Fix malformed CAN escapes
      .replace(/\\\s*CAN/g, "\\CAN")
      
      //Fix malformed EM escapes
      .replace(/\\\s*EM/g, "\\EM")
      
      //Fix malformed SUB escapes
      .replace(/\\\s*SUB/g, "\\SUB")
      
      //Fix malformed ESC escapes
      .replace(/\\\s*ESC/g, "\\ESC")
      
      //Fix malformed FS escapes
      .replace(/\\\s*FS/g, "\\FS")
      
      //Fix malformed GS escapes
      .replace(/\\\s*GS/g, "\\GS")
      
      //Fix malformed RS escapes
      .replace(/\\\s*RS/g, "\\RS")
      
      //Fix malformed US escapes
      .replace(/\\\s*US/g, "\\US")
      
      //Fix malformed DEL escapes
      .replace(/\\\s*DEL/g, "\\DEL")
      
      //Fix malformed SP escapes
      .replace(/\\\s*SP/g, "\\SP")
      
      //Fix malformed NUL escapes
      .replace(/\\\s*NUL/g, "\\NUL")
      
      //Fix malformed SOH escapes
      .replace(/\\\s*SOH/g, "\\SOH")
      
      //Fix malformed STX escapes
      .replace(/\\\s*STX/g, "\\STX")
      
      //Fix malformed ETX escapes
      .replace(/\\\s*ETX/g, "\\ETX")
      
      //Fix malformed EOT escapes
      .replace(/\\\s*EOT/g, "\\EOT")
      
      //Fix malformed ENQ escapes
      .replace(/\\\s*ENQ/g, "\\ENQ")
      
      //Fix malformed ACK escapes
      .replace(/\\\s*ACK/g, "\\ACK")
      
      //Fix malformed BEL escapes
      .replace(/\\\s*BEL/g, "\\BEL")
      
      //Fix malformed BS escapes
      .replace(/\\\s*BS/g, "\\BS")
      
      //Fix malformed HT escapes
      .replace(/\\\s*HT/g, "\\HT")
      
      //Fix malformed LF escapes
      .replace(/\\\s*LF/g, "\\LF")
      
      //Fix malformed VT escapes
      .replace(/\\\s*VT/g, "\\VT")
      
      //Fix malformed FF escapes
      .replace(/\\\s*FF/g, "\\FF")
      
      //Fix malformed CR escapes
      .replace(/\\\s*CR/g, "\\CR")
      
      //Fix malformed SO escapes
      .replace(/\\\s*SO/g, "\\SO")
      
      //Fix malformed SI escapes
      .replace(/\\\s*SI/g, "\\SI")
      
      //Fix malformed DLE escapes
      .replace(/\\\s*DLE/g, "\\DLE")
      
      //Fix malformed DC1 escapes
      .replace(/\\\s*DC1/g, "\\DC1")
      
      //Fix malformed DC2 escapes
      .replace(/\\\s*DC2/g, "\\DC2")
      
      //Fix malformed DC3 escapes
      .replace(/\\\s*DC3/g, "\\DC3")
      
      //Fix malformed DC4 escapes
      .replace(/\\\s*DC4/g, "\\DC4")
      
      //Fix malformed NAK escapes
      .replace(/\\\s*NAK/g, "\\NAK")
      
      //Fix malformed SYN escapes
      .replace(/\\\s*SYN/g, "\\SYN")
      
      //Fix malformed ETB escapes
      .replace(/\\\s*ETB/g, "\\ETB")
      
      //Fix malformed CAN escapes
      .replace(/\\\s*CAN/g, "\\CAN")
      
      //Fix malformed EM escapes
      .replace(/\\\s*EM/g, "\\EM")
      
      //Fix malformed SUB escapes
      .replace(/\\\s*SUB/g, "\\SUB")
      
      //Fix malformed ESC escapes
      .replace(/\\\s*ESC/g, "\\ESC")
      
      //Fix malformed FS escapes
      .replace(/\\\s*FS/g, "\\FS")
      
      //Fix malformed GS escapes
      .replace(/\\\s*GS/g, "\\GS")
      
      //Fix malformed RS escapes
      .replace(/\\\s*RS/g, "\\RS")
      
      //Fix malformed US escapes
      .replace(/\\\s*US/g, "\\US")
      
      //Fix malformed DEL escapes
      .replace(/\\\s*DEL/g, "\\DEL")
      
      //Fix malformed SP escapes
      .replace(/\\\s*SP/g, "\\SP");
    
    //Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed string literals: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
// Function to process a single file
function processFile(filePath) {
  try {'
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixStringLiterals(content);
    
    if (content !== fixed) {'
      fs.writeFileSync(filePath, fixed, 'utf8');`
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {`
    console.error(`Error processing ${filePath}:`, error.message);
    console.error(`Error fixing string literals in${filePath}:`, error.message);
    return false;
  }
}

  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      '
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {`
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
//Function to recursively find and fix all TypeScript/JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      //Skip node_modules and other common directories
      if (!["node_modules", ".git", ".next", "dist", "build"].includes(file)) {
        fixedCount+= fixAllFiles(filePath);
      }
    } else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) {
      if (fixStringLiterals(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

//Main execution
console.log("Starting string literal fixes...");
const fixedCount = fixAllFiles("/workspace"); console.log(`Fixed${fixedCount} files.`);
