const fs = require("fs");
const path = require("path");

//Common syntax fixes
const fixes = [//Fix import statements
  { pattern: /import\s+(\w+)\s+}\s+from\s+[""]([^""]+)[""]/g, replacement: "import { $1  } from "$2"" },
  { pattern: /import\s+{\s*(\w+)\s+}\s+from\s+[""]([^""]+)[""]/g, replacement: "import { $1  } from "$2"" },
  { pattern: /import\s+,\s+(\w+)/g, replacement: "import$1" },
  { pattern: /import\s+{\s*{\s*(\w+)\s*}\s*}/g, replacement: "import { $1 }" },
  { pattern: /from\s+from\s+/g, replacement: "from " },
  "
  //Fix function declarations"
  { pattern: /const\s+(\w+)\s*=\s*\(\s*$/gm, replacement: "const$1 = () => {" },
  { pattern: /export\s+default\s+function\s+(\w+)\s*\(\s*$/gm, replacement: "export default function$1() {" },
  
  //Fix JSX syntax
  { pattern: /<(\w+)\s*\/\s*>/g, replacement: "<$1 />" },
  { pattern: /className\s*=\s*[""]([^""]*)\s+([^""]*)[""]/g, replacement: "className="$1$2"" },
  { pattern: /hover:\s*([^""\s]+)/g, replacement: "hover:$1" },
  { pattern: /from-(\w+)\s+([^""\s]+)/g, replacement: "from-$1$2" },
  { pattern: /to-(\w+)\s+([^""\s]+)/g, replacement: "to-$1$2" },
  
  //Fix closing tags and brackets
  { pattern: /\)\s*,\s*}/g, replacement: ")" },
  { pattern: /\)\s*;\s*}/g, replacement: ")" },
  { pattern: /\)\s*,\s*\)/g, replacement: ")" },
  { pattern: /}\s*,\s*\)/g, replacement: "}" },
  { pattern: /}\s*;\s*\)/g, replacement: "}" },
  
  //Fix malformed strings
  { pattern: /[""]([^""]*)\s+([^""]*)[""]/g, replacement: ""$1$2"" },
  { pattern: /href\s*=\s*[""]([^""]*)\s+([^""]*)[""]/g, replacement: "href="$1$2"" },
  
  //Fix component syntax
  { pattern: /<(\w+)\s*\/\s*>/g, replacement: "<$1 />" },
  { pattern: /<\/\s*(\w+)\s*>/g, replacement: "</$1>" },
  
  //Fix return statements
  { pattern: /return\s*\(\s*<\s*>\s*$/gm, replacement: "return (" },
  { pattern: /return\s*\(\s*<\s*\/\s*>\s*$/gm, replacement: "return (" },
  
  //Fix arrow functions
  { pattern: /\(\s*\)\s*=>\s*{\s*$/gm, replacement: "() => {" },
  { pattern: /\(\s*\)\s*=>\s*\(\s*$/gm, replacement: "() => (" },
  
  //Fix destructuring
  { pattern: /{\s*{\s*(\w+)\s*}\s*}/g, replacement: "{ $1 }" },
  
  //Fix semicolons and commas
  { pattern: /;\s*}/g, replacement: "}" },
  { pattern: /,\s*}/g, replacement: "}" },
  { pattern: /,\s*\)/g, replacement: ")" },
  { pattern: /;\s*\)/g, replacement: ")" },
  
  //Fix specific patterns
  { pattern: /<div\s+className\s*=\s*[""]([^""]*)\s+([^""]*)[""]\s*\/\s*>/g, replacement: "<div className="$1$2" />" },
  { pattern: /<h1\s+className\s*=\s*[""]([^""]*)\s+([^""]*)[""]\s*\/\s*>/g, replacement: "<h1 className="$1$2" />" },
  { pattern: /<p\s+className\s*=\s*[""]([^""]*)\s+([^""]*)[""]\s*\/\s*>/g, replacement: "<p className="$1$2" />" },
  { pattern: /<Link\s+href\s*=\s*[""]([^""]*)\s+([^""]*)[""]/g, replacement: "<Link href="$1$2"" },
  
  //Fix malformed JSX elements
  { pattern: /<(\w+)\s*\/\s*>\s*<\/\1>/g, replacement: "<$1 />" },
  { pattern: /<(\w+)\s+([^>]*)\s*\/\s*>\s*<\/\1>/g, replacement: "<$1$2 />" },
  
  //Fix specific syntax errors
  { pattern: /\/g, replacement: "" },
  { pattern: /,\s*\)\s*=>\s*{\s*$/gm, replacement: ") => {" },
  { pattern: /,\s*;\s*}/g, replacement: ";" },
  { pattern: /,\s*;\s*\)/g, replacement: ")" },
  
  //Fix malformed function calls
  { pattern: /onClick\s*=\s*\(\s*\(\s*\)\s*=>\s*window\.history\.back\(\),\s*\)\s*=>\s*{\s*$/gm, replacement: "onClick={() => window.history.back()}" },
  { pattern: /onClick\s*=\s*\(\s*\(\s*\)\s*=>\s*window\.location\.reload\(\),\s*;\s*}/gm, replacement: "onClick={() => window.location.reload()}" },
  
  //Fix template literals
  { pattern: /`([^`]*)\s+([^`]*)`/g, replacement: "`$1$2`" },
  
  //Fix object destructuring
  { pattern: /{\s*(\w+)\s*,\s*(\w+)\s*}\s*from/g, replacement: "{ $1, $2 } from" },
  
  //Fix array destructuring
  { pattern: /\[\s*(\w+)\s*,\s*(\w+)\s*\]\s*=/g, replacement: "[$1, $2 ] =" },
  
  //Fix conditional rendering
  { pattern: /{\s*(\w+)\s*&&\s*<\s*(\w+)\s*\/\s*>\s*}/g, replacement: "{ $1 && <$2 /> }" },
  
  //Fix spread operators
  { pattern: /\.\.\.\s*(\w+)\s*}/g, replacement: "...$1 }" },
  
  //Fix default exports
  { pattern: /export\s+default\s+(\w+)\s*$/gm, replacement: "export default$1" },
  
  //Fix malformed JSX attributes
  { pattern: /(\w+)\s*=\s*{\s*(\w+)\s*}\s*}/g, replacement: "$1={$2}" },
  { pattern: /(\w+)\s*=\s*{\s*(\w+)\s*}\s*\/\s*>/g, replacement: "$1={$2} />" },
  
  //Fix string concatenation
  { pattern: /"\s*\+\s*"/g, replacement: """" },
  { pattern: /"\s*\+\s*"/g, replacement: """" },
  
  //Fix malformed function parameters
  { pattern: /\(\s*(\w+)\s*,\s*as\s*,\s*(\w+)\s*\)/g, replacement: "($1 as$2)" },
  
  //Fix malformed object properties
  { pattern: /(\w+)\s*:\s*(\w+)\s*,/g, replacement: "$1: $2," },
  
  //Fix malformed array elements
  { pattern: /\[\s*(\w+)\s*,\s*(\w+)\s*,\s*\]/g, replacement: "[$1, $2 ]" },
  
  //Fix malformed template strings
  { pattern: /\$\{([^}]*)\s+([^}]*)\}/g, replacement: "${$1$2}" },
  
  //Fix malformed regex
  { pattern: /\/\^([^$]*)\$\//g, replacement: "/^$1$/" },
  
  //Fix malformed comments
  { pattern: /\/\*\s*([^*]*)\s*\*\//g, replacement: "/* $1*/" },
  
  //Fix malformed ternary operators
  { pattern: /\?\s*(\w+)\s*:\s*(\w+)/g, replacement: "? $1 : $2" },
  
  //Fix malformed logical operators
  { pattern: /&&\s*(\w+)/g, replacement: "&& $1" },
  { pattern: /\|\|\s*(\w+)/g, replacement: "|| $1" },
  
  //Fix malformed comparison operators
  { pattern: /==\s*(\w+)/g, replacement: "== $1" },
  { pattern: /!=\s*(\w+)/g, replacement: "!= $1" },
  { pattern: /===\s*(\w+)/g, replacement: "=== $1" },
  { pattern: /!==\s*(\w+)/g, replacement: "!== $1" },
  
  //Fix malformed assignment operators
  { pattern: /=\s*(\w+)/g, replacement: "= $1" },
  { pattern: /\+=\s*(\w+)/g, replacement: "+= $1" },
  { pattern: /-=\s*(\w+)/g, replacement: "-= $1" },
  { pattern: /\*=\s*(\w+)/g, replacement: "*= $1" },
  { pattern: /\/=\s*(\w+)/g, replacement: "/= $1" },
  
  //Fix malformed function calls
  { pattern: /(\w+)\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)/g, replacement: "$1($2)" },
  
  //Fix malformed object method calls
  { pattern: /(\w+)\.(\w+)\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)/g, replacement: "$1.$2(, $4)" },
  
  //Fix malformed array access
  { pattern: /(\w+)\s*\[\s*(\w+)\s*\]/g, replacement: "$1[$2]" },
  
  //Fix malformed property access
  { pattern: /(\w+)\.(\w+)\s*\.(\w+)/g, replacement: "$1.$2." },
  
  //Fix malformed string methods
  { pattern: /(\w+)\.(\w+)\s*\(\s*\)/g, replacement: "$1.$2()" },
  
  //Fix malformed array methods
  { pattern: /(\w+)\.(\w+)\s*\(\s*(\w+)\s*\)/g, replacement: "$1.$2()" },
  
  //Fix malformed object methods
  { pattern: /(\w+)\s*:\s*(\w+)\s*\(\s*\)/g, replacement: "$1: $2()" },
  
  //Fix malformed arrow functions
  { pattern: /\(\s*(\w+)\s*\)\s*=>\s*(\w+)/g, replacement: "($1) => $2" },
  
  //Fix malformed destructuring assignments
  { pattern: /{\s*(\w+)\s*}\s*=\s*(\w+)/g, replacement: "{ $1 } = $2" },
  
  //Fix malformed spread syntax
  { pattern: /\.\.\.\s*(\w+)/g, replacement: "...$1" },
  
  //Fix malformed rest parameters
  { pattern: /\.\.\.\s*(\w+)\s*\)/g, replacement: "...$1)" },
  
  //Fix malformed default parameters
  { pattern: /(\w+)\s*=\s*(\w+)\s*\)/g, replacement: "$1 = $2)" },
  
  //Fix malformed template literals
  { pattern: /`\s*([^`]*)\s*`/g, replacement: "`$1`" },
  
  //Fix malformed tagged template literals
  { pattern: /(\w+)\s*`\s*([^`]*)\s*`/g, replacement: "$1`$2`" },
  
  //Fix malformed regular expressions
  { pattern: /\/\s*([^/]*)\s*\//g, replacement: "/$1/" },
  
  //Fix malformed flags
  { pattern: /\/\s*([^/]*)\s*\/\s*(\w+)/g, replacement: "/$1/$2" },
  
  //Fix malformed character classes
  { pattern: /\[\s*([^\]]*)\s*\]/g, replacement: "[$1]" },
  
  //Fix malformed quantifiers
  { pattern: /(\w+)\s*\+\s*/g, replacement: "$1+" },
  { pattern: /(\w+)\s*\*\s*/g, replacement: "$1*" },
  { pattern: /(\w+)\s*\?\s*/g, replacement: "$1?" },
  
  //Fix malformed anchors
  { pattern: /\^\s*(\w+)/g, replacement: "^$1" },
  { pattern: /(\w+)\s*\$/g, replacement: "$1$" },
  
  //Fix malformed alternation
  { pattern: /(\w+)\s*\|\s*(\w+)/g, replacement: "$1|$2" },
  
  //Fix malformed grouping
  { pattern: /\(\s*([^)]*)\s*\)/g, replacement: "($1)" },
  
  //Fix malformed non-capturing groups
  { pattern: /\(\?\s*:\s*([^)]*)\s*\)/g, replacement: "(?:$1)" },
  
  //Fix malformed lookahead
  { pattern: /\(\?\s*=\s*([^)]*)\s*\)/g, replacement: "(?=$1)" },
  
  //Fix malformed lookbehind
  { pattern: /\(\?\s*<=\s*([^)]*)\s*\)/g, replacement: "(?<=$1)" },
  
  //Fix malformed negative lookahead
  { pattern: /\(\?\s*!\s*([^)]*)\s*\)/g, replacement: "(?!$1)" },
  
  //Fix malformed negative lookbehind
  { pattern: /\(\?\s*<!\s*([^)]*)\s*\)/g, replacement: "(?<!$1)" },
  
  //Fix malformed named groups
  { pattern: /\(\?\s*<(\w+)>\s*([^)]*)\s*\)/g, replacement: "(?<$1>$2)" },
  
  //Fix malformed backreferences
  { pattern: /\\\s*(\d+)/g, replacement: "\\$1" },
  { pattern: /\\\s*k\s*<(\w+)>/g, replacement: "\\k<$1>" },
  
  //Fix malformed Unicode properties
  { pattern: /\\\s*p\s*{\s*(\w+)\s*}/g, replacement: "\\p{$1}" },
  { pattern: /\\\s*P\s*{\s*(\w+)\s*}/g, replacement: "\\P{$1}" },
  
  //Fix malformed character escapes
  { pattern: /\\\s*(\w)/g, replacement: "\\$1" },
  
  //Fix malformed control characters
  { pattern: /\\\s*c\s*(\w)/g, replacement: "\\c$1" },
  
  //Fix malformed hex escapes
  { pattern: /\\\s*x\s*([0-9a-fA-F]{2})/g, replacement: "\\x$1" },
  
  //Fix malformed Unicode escapes
  { pattern: /\\\s*u\s*([0-9a-fA-F]{4})/g, replacement: "\\u$1" },
  
  //Fix malformed Unicode code point escapes
  { pattern: /\\\s*u\s*{\s*([0-9a-fA-F]+)\s*}/g, replacement: "\\u{$1}" },
  
  //Fix malformed octal escapes
  { pattern: /\\\s*([0-7]{1,3})/g, replacement: "\\$1" },
  
  //Fix malformed null escapes
  { pattern: /\\\s*0/g, replacement: "\\0" },
  
  //Fix malformed bell escapes
  { pattern: /\\\s*a/g, replacement: "\\a" },
  
  //Fix malformed backspace escapes
  { pattern: /\\\s*b/g, replacement: "\\b" },
  
  //Fix malformed form feed escapes
  { pattern: /\\\s*f/g, replacement: "\\f" },
  
  //Fix malformed newline escapes
  { pattern: /\\\s*n/g, replacement: "\\n" },
  
  //Fix malformed carriage return escapes
  { pattern: /\\\s*r/g, replacement: "\\r" },
  
  //Fix malformed tab escapes
  { pattern: /\\\s*t/g, replacement: "\\t" },
  
  //Fix malformed vertical tab escapes
  { pattern: /\\\s*v/g, replacement: "\\v" },
  
  //Fix malformed word boundary escapes
  { pattern: /\\\s*B/g, replacement: "\\B" },
  
  //Fix malformed digit escapes
  { pattern: /\\\s*d/g, replacement: "\\d" },
  { pattern: /\\\s*D/g, replacement: "\\D" },
  
  //Fix malformed whitespace escapes
  { pattern: /\\\s*s/g, replacement: "\\s" },
  { pattern: /\\\s*S/g, replacement: "\\S" },
  
  //Fix malformed word character escapes
  { pattern: /\\\s*w/g, replacement: "\\w" },
  { pattern: /\\\s*W/g, replacement: "\\W" },
  
  //Fix malformed line break escapes
  { pattern: /\\\s*R/g, replacement: "\\R" },
  
  //Fix malformed horizontal whitespace escapes
  { pattern: /\\\s*h/g, replacement: "\\h" },
  { pattern: /\\\s*H/g, replacement: "\\H" },
  
  //Fix malformed vertical whitespace escapes
  { pattern: /\\\s*v/g, replacement: "\\v" },
  { pattern: /\\\s*V/g, replacement: "\\V" },
  
  //Fix malformed NUL escapes
  { pattern: /\\\s*NUL/g, replacement: "\\NUL" },
  
  //Fix malformed SOH escapes
  { pattern: /\\\s*SOH/g, replacement: "\\SOH" },
  
  //Fix malformed STX escapes
  { pattern: /\\\s*STX/g, replacement: "\\STX" },
  
  //Fix malformed ETX escapes
  { pattern: /\\\s*ETX/g, replacement: "\\ETX" },
  
  //Fix malformed EOT escapes
  { pattern: /\\\s*EOT/g, replacement: "\\EOT" },
  
  //Fix malformed ENQ escapes
  { pattern: /\\\s*ENQ/g, replacement: "\\ENQ" },
  
  //Fix malformed ACK escapes
  { pattern: /\\\s*ACK/g, replacement: "\\ACK" },
  
  //Fix malformed BEL escapes
  { pattern: /\\\s*BEL/g, replacement: "\\BEL" },
  
  //Fix malformed BS escapes
  { pattern: /\\\s*BS/g, replacement: "\\BS" },
  
  //Fix malformed HT escapes
  { pattern: /\\\s*HT/g, replacement: "\\HT" },
  
  //Fix malformed LF escapes
  { pattern: /\\\s*LF/g, replacement: "\\LF" },
  
  //Fix malformed VT escapes
  { pattern: /\\\s*VT/g, replacement: "\\VT" },
  
  //Fix malformed FF escapes
  { pattern: /\\\s*FF/g, replacement: "\\FF" },
  
  //Fix malformed CR escapes
  { pattern: /\\\s*CR/g, replacement: "\\CR" },
  
  //Fix malformed SO escapes
  { pattern: /\\\s*SO/g, replacement: "\\SO" },
  
  //Fix malformed SI escapes
  { pattern: /\\\s*SI/g, replacement: "\\SI" },
  
  //Fix malformed DLE escapes
  { pattern: /\\\s*DLE/g, replacement: "\\DLE" },
  
  //Fix malformed DC1 escapes
  { pattern: /\\\s*DC1/g, replacement: "\\DC1" },
  
  //Fix malformed DC2 escapes
  { pattern: /\\\s*DC2/g, replacement: "\\DC2" },
  
  //Fix malformed DC3 escapes
  { pattern: /\\\s*DC3/g, replacement: "\\DC3" },
  
  //Fix malformed DC4 escapes
  { pattern: /\\\s*DC4/g, replacement: "\\DC4" },
  
  //Fix malformed NAK escapes
  { pattern: /\\\s*NAK/g, replacement: "\\NAK" },
  
  //Fix malformed SYN escapes
  { pattern: /\\\s*SYN/g, replacement: "\\SYN" },
  
  //Fix malformed ETB escapes
  { pattern: /\\\s*ETB/g, replacement: "\\ETB" },
  
  //Fix malformed CAN escapes
  { pattern: /\\\s*CAN/g, replacement: "\\CAN" },
  
  //Fix malformed EM escapes
  { pattern: /\\\s*EM/g, replacement: "\\EM" },
  
  //Fix malformed SUB escapes
  { pattern: /\\\s*SUB/g, replacement: "\\SUB" },
  
  //Fix malformed ESC escapes
  { pattern: /\\\s*ESC/g, replacement: "\\ESC" },
  
  //Fix malformed FS escapes
  { pattern: /\\\s*FS/g, replacement: "\\FS" },
  
  //Fix malformed GS escapes
  { pattern: /\\\s*GS/g, replacement: "\\GS" },
  
  //Fix malformed RS escapes
  { pattern: /\\\s*RS/g, replacement: "\\RS" },
  
  //Fix malformed US escapes
  { pattern: /\\\s*US/g, replacement: "\\US" },
  
  //Fix malformed DEL escapes
  { pattern: /\\\s*DEL/g, replacement: "\\DEL" },
  
  //Fix malformed SP escapes
  { pattern: /\\\s*SP/g, replacement: "\\SP" },
  
  //Fix malformed NUL escapes
  { pattern: /\\\s*NUL/g, replacement: "\\NUL" },
  
  //Fix malformed SOH escapes
  { pattern: /\\\s*SOH/g, replacement: "\\SOH" },
  
  //Fix malformed STX escapes
  { pattern: /\\\s*STX/g, replacement: "\\STX" },
  
  //Fix malformed ETX escapes
  { pattern: /\\\s*ETX/g, replacement: "\\ETX" },
  
  //Fix malformed EOT escapes
  { pattern: /\\\s*EOT/g, replacement: "\\EOT" },
  
  //Fix malformed ENQ escapes
  { pattern: /\\\s*ENQ/g, replacement: "\\ENQ" },
  
  //Fix malformed ACK escapes
  { pattern: /\\\s*ACK/g, replacement: "\\ACK" },
  
  //Fix malformed BEL escapes
  { pattern: /\\\s*BEL/g, replacement: "\\BEL" },
  
  //Fix malformed BS escapes
  { pattern: /\\\s*BS/g, replacement: "\\BS" },
  
  //Fix malformed HT escapes
  { pattern: /\\\s*HT/g, replacement: "\\HT" },
  
  //Fix malformed LF escapes
  { pattern: /\\\s*LF/g, replacement: "\\LF" },
  
  //Fix malformed VT escapes
  { pattern: /\\\s*VT/g, replacement: "\\VT" },
  
  //Fix malformed FF escapes
  { pattern: /\\\s*FF/g, replacement: "\\FF" },
  
  //Fix malformed CR escapes
  { pattern: /\\\s*CR/g, replacement: "\\CR" },
  
  //Fix malformed SO escapes
  { pattern: /\\\s*SO/g, replacement: "\\SO" },
  
  //Fix malformed SI escapes
  { pattern: /\\\s*SI/g, replacement: "\\SI" },
  
  //Fix malformed DLE escapes
  { pattern: /\\\s*DLE/g, replacement: "\\DLE" },
  
  //Fix malformed DC1 escapes
  { pattern: /\\\s*DC1/g, replacement: "\\DC1" },
  
  //Fix malformed DC2 escapes
  { pattern: /\\\s*DC2/g, replacement: "\\DC2" },
  
  //Fix malformed DC3 escapes
  { pattern: /\\\s*DC3/g, replacement: "\\DC3" },
  
  //Fix malformed DC4 escapes
  { pattern: /\\\s*DC4/g, replacement: "\\DC4" },
  
  //Fix malformed NAK escapes
  { pattern: /\\\s*NAK/g, replacement: "\\NAK" },
  
  //Fix malformed SYN escapes
  { pattern: /\\\s*SYN/g, replacement: "\\SYN" },
  
  //Fix malformed ETB escapes
  { pattern: /\\\s*ETB/g, replacement: "\\ETB" },
  
  //Fix malformed CAN escapes
  { pattern: /\\\s*CAN/g, replacement: "\\CAN" },
  
  //Fix malformed EM escapes
  { pattern: /\\\s*EM/g, replacement: "\\EM" },
  
  //Fix malformed SUB escapes
  { pattern: /\\\s*SUB/g, replacement: "\\SUB" },
  
  //Fix malformed ESC escapes
  { pattern: /\\\s*ESC/g, replacement: "\\ESC" },
  
  //Fix malformed FS escapes
  { pattern: /\\\s*FS/g, replacement: "\\FS" },
  
  //Fix malformed GS escapes
  { pattern: /\\\s*GS/g, replacement: "\\GS" },
  
  //Fix malformed RS escapes
  { pattern: /\\\s*RS/g, replacement: "\\RS" },
  
  //Fix malformed US escapes
  { pattern: /\\\s*US/g, replacement: "\\US" },
  
  //Fix malformed DEL escapes
  { pattern: /\\\s*DEL/g, replacement: "\\DEL" },
  
  //Fix malformed SP escapes
  { pattern: /\\\s*SP/g, replacement: "\\SP" }
];

//Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let originalContent = content;
    
    //Apply all fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement));
    
    //Additional specific fixes for common issues
    content = content
      //Fix malformed imports
      .replace(/import\s+(\w+)\s+}\s+from\s+[""]([^""]+)[""]/g, "import { $1  } from "$2"")
      .replace(/import\s+{\s*(\w+)\s+}\s+from\s+[""]([^""]+)[""]/g, "import { $1  } from "$2"")
      .replace(/import\s+,\s+(\w+)/g, "import$1")
      .replace(/import\s+{\s*{\s*(\w+)\s*}\s*}/g, "import { $1 }")
      .replace(/from\s+from\s+/g, "from ")
      "
      //Fix function declarations"
      .replace(/const\s+(\w+)\s*=\s*\(\s*$/gm, "const$1 = () => {")
      .replace(/export\s+default\s+function\s+(\w+)\s*\(\s*$/gm, "export default function$1() {")
      
      //Fix JSX syntax
      .replace(/<(\w+)\s*\/\s*>/g, "<$1 />")
      .replace(/className\s*=\s*[""]([^""]*)\s+([^""]*)[""]/g, "className="$1$2"")
      .replace(/hover:\s*([^""\s]+)/g, "hover:$1")
      .replace(/from-(\w+)\s+([^""\s]+)/g, "from-$1$2")
      .replace(/to-(\w+)\s+([^""\s]+)/g, "to-$1$2")
      
      //Fix closing tags and brackets
      .replace(/\)\s*,\s*}/g, ")")
      .replace(/\)\s*;\s*}/g, ")")
      .replace(/\)\s*,\s*\)/g, ")")
      .replace(/}\s*,\s*\)/g, "}")
      .replace(/}\s*;\s*\)/g, "}")
      
      //Fix malformed strings
      .replace(/[""]([^""]*)\s+([^""]*)[""]/g, ""$1$2"")
      .replace(/href\s*=\s*[""]([^""]*)\s+([^""]*)[""]/g, "href="$1$2"")
      
      //Fix component syntax
      .replace(/<(\w+)\s*\/\s*>/g, "<$1 />")
      .replace(/<\/\s*(\w+)\s*>/g, "</$1>")
      
      //Fix return statements
      .replace(/return\s*\(\s*<\s*>\s*$/gm, "return (")
      .replace(/return\s*\(\s*<\s*\/\s*>\s*$/gm, "return (")
      
      //Fix arrow functions
      .replace(/\(\s*\)\s*=>\s*{\s*$/gm, "() => {")
      .replace(/\(\s*\)\s*=>\s*\(\s*$/gm, "() => (")
      
      //Fix destructuring
      .replace(/{\s*{\s*(\w+)\s*}\s*}/g, "{ $1 }")
      
      //Fix semicolons and commas
      .replace(/;\s*}/g, "}")
      .replace(/,\s*}/g, "}")
      .replace(/,\s*\)/g, ")")
      .replace(/;\s*\)/g, ")")
      
      //Fix specific patterns
      .replace(/<div\s+className\s*=\s*[""]([^""]*)\s+([^""]*)[""]\s*\/\s*>/g, "<div className="$1$2" />")
      .replace(/<h1\s+className\s*=\s*[""]([^""]*)\s+([^""]*)[""]\s*\/\s*>/g, "<h1 className="$1$2" />")
      .replace(/<p\s+className\s*=\s*[""]([^""]*)\s+([^""]*)[""]\s*\/\s*>/g, "<p className="$1$2" />")
      .replace(/<Link\s+href\s*=\s*[""]([^""]*)\s+([^""]*)[""]/g, "<Link href="$1$2"")
      
      //Fix malformed JSX elements
      .replace(/<(\w+)\s*\/\s*>\s*<\/\1>/g, "<$1 />")
      .replace(/<(\w+)\s+([^>]*)\s*\/\s*>\s*<\/\1>/g, "<$1$2 />")
      
      //Fix specific syntax errors
      .replace(/\/g, "")
      .replace(/,\s*\)\s*=>\s*{\s*$/gm, ") => {")
      .replace(/,\s*;\s*}/g, ";")
      .replace(/,\s*;\s*\)/g, ")")
      
      //Fix malformed function calls
      .replace(/onClick\s*=\s*\(\s*\(\s*\)\s*=>\s*window\.history\.back\(\),\s*\)\s*=>\s*{\s*$/gm, "onClick={() => window.history.back()}")
      .replace(/onClick\s*=\s*\(\s*\(\s*\)\s*=>\s*window\.location\.reload\(\),\s*;\s*}/gm, "onClick={() => window.location.reload()}")
      
      //Fix template literals
      .replace(/`([^`]*)\s+([^`]*)`/g, "`$1$2`")
      
      //Fix object destructuring
      .replace(/{\s*(\w+)\s*,\s*(\w+)\s*}\s*from/g, "{ $1, $2 } from")
      
      //Fix array destructuring
      .replace(/\[\s*(\w+)\s*,\s*(\w+)\s*\]\s*=/g, "[$1, $2 ] =")
      
      //Fix conditional rendering
      .replace(/{\s*(\w+)\s*&&\s*<\s*(\w+)\s*\/\s*>\s*}/g, "{ $1 && <$2 /> }")
      
      //Fix spread operators
      .replace(/\.\.\.\s*(\w+)\s*}/g, "...$1 }")
      
      //Fix default exports
      .replace(/export\s+default\s+(\w+)\s*$/gm, "export default$1")
      
      //Fix malformed JSX attributes
      .replace(/(\w+)\s*=\s*{\s*(\w+)\s*}\s*}/g, "$1={$2}")
      .replace(/(\w+)\s*=\s*{\s*(\w+)\s*}\s*\/\s*>/g, "$1={$2} />")
      
      //Fix string concatenation
      .replace(/"\s*\+\s*"/g, """")
      .replace(/"\s*\+\s*"/g, """")
      
      //Fix malformed function parameters
      .replace(/\(\s*(\w+)\s*,\s*as\s*,\s*(\w+)\s*\)/g, "($1 as$2)")
      
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
      .replace(/(\w+)\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)/g, "$1($2)")
      
      //Fix malformed object method calls
      .replace(/(\w+)\.(\w+)\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)/g, "$1.$2(, $4)")
      
      //Fix malformed array access
      .replace(/(\w+)\s*\[\s*(\w+)\s*\]/g, "$1[$2]")
      
      //Fix malformed property access
      .replace(/(\w+)\.(\w+)\s*\.(\w+)/g, "$1.$2.")
      
      //Fix malformed string methods
      .replace(/(\w+)\.(\w+)\s*\(\s*\)/g, "$1.$2()")
      
      //Fix malformed array methods
      .replace(/(\w+)\.(\w+)\s*\(\s*(\w+)\s*\)/g, "$1.$2()")
      
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
      console.log(`Fixed: ${filePath}`);
      return true}
    return false} catch (error) {
    console.error(`Error fixing${filePath}:`, error.message);
    return false}
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
        fixedCount+= fixAllFiles(filePath)
    } else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) {
      if (fixFile(filePath)) {
        fixedCount++}
    }
  });
  
  return fixedCount}

//Main execution console.log("Starting syntax error fixes...");
const fixedCount = fixAllFiles("/workspace"); console.log(`Fixed${fixedCount} files.`);