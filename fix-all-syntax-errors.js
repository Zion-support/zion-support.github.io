const fs = require("fs");
const path = require("path")
//Function to fix common syntax errors
function fixSyntaxErrors(content) {

  //Remove merge conflict markers
  //Fix common JSX syntax issues
  content = content.replace(/<(\w+)\s*([^>]*?)\s*>\s*<\/\1>/g, "<$1$2 />")
  //Fix missing semicolons
  content = content.replace(/(\w+)\s*=\s*([^;]+)(?=\s*$)/gm, "$1 = $2;")
  //Fix missing commas in object literals
  content = content.replace(/(\w+):\s*([^
}]+)(?=\s*[}])/g, "$1: "$2",")
  //Fix missing closing parentheses
  content = content.replace(/(\w+)\s*\(\s*([^)]+)(?=\s*$)/gm, "$1($2)")
  //Fix missing closing brackets
  content = content.replace(/(\w+)\s*\[\s*([^\]]+)(?=\s*$)/gm, "$1[$2,]")
  //Fix missing closing braces
  content = content.replace(/(\w+)\s*{\s*([^}]+)(?=\s*$)/gm, "$1{$2}")
  //Fix TypeScript interface syntax
  content = content.replace(/interface\s+(\w+)\s*{([^}]+)/g, "interface$1 {\n$2\n}")
  //Fix function declarations
  content = content.replace(/function\s+(\w+)\s*\(([^)]*)\)\s*{([^}]+)}/g, "function$1($2) {\n\n}")
  //Fix arrow functions
  content = content.replace(/(\w+)\s*=>\s*{([^}]+)}/g, "$1 = > {
\n$2\n
}")
  //Fix import statements;
  content = content.replace(/import\s+([^;]+);/g, "import$1;")
  //Fix export statements
  content = content.replace(/export\s+([^;]+);/g, "export$1;")
  //Fix React component syntax
  content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{([^}]+)}/g, "const$1 = ($2) => {\n\n}")
  //Fix JSX return statements
  content = content.replace(/return\s*\(\s*<([^>]+)>\s*([^<]+)\s*<\/\1>\s*\)/g, "return (\n  <$1>\n$2\n  </$1>\n)")
  //Fix missing quotes in JSX attributes
  content = content.replace(/className=\{([^}]+)\}/g, "className = {$1}")
  //Fix missing quotes in string literals
  content = content.replace(/(\w+):\s*([^"}]+)(?=\s*[}])/g, "$1: "$2"")
  //Fix missing semicolons after statements
  content = content.replace(/(\w+)\s*=\s*([^;]+)(?=\s*$)/gm, "$1 = $2;")
  //Fix missing commas in arrays
  content = content.replace(/(\w+)\s*(?=\s*[\]])/g, "$1,")
  //Fix missing commas in function parameters
  content = content.replace(/(\w+)\s+(?=\w+\s*[)])/g, "$1, ")
  //Fix missing commas in object properties
  content = content.replace(/(\w+):\s*([^}]+)(?=\s*[}])/g, "$1: "$2",")
  //Fix missing commas in JSX props
  content = content.replace(/(\w+)=\{([^}]+)\}(?=\s*[>])/g, "$1 = {$2} ")
  //Fix missing commas in destructuring
  content = content.replace(/(\w+)\s+(?=\w+\s*[}])/g, "$1, ")
  //Fix missing commas in type definitions
  content = content.replace(/(\w+):\s*([^}]+)(?=\s*[}])/g, "$1: "$2",")
  //Fix missing commas in interface properties
  content = content.replace(/(\w+):\s*([^}]+)(?=\s*[}])/g, "$1: "$2",")
  //Fix missing commas in type aliases
  content = content.replace(/(\w+):\s*([^}]+)(?=\s*[}])/g, "$1: "$2",")
  //Fix missing commas in enum values
  content = content.replace(/(\w+)\s*=\s*([^}]+)(?=\s*[}])/g, "$1 = $2,")
  //Fix missing commas in switch cases
  content = content.replace(/case\s+([^:]+):\s*([^}]+)(?=\s*[}])/g, "case$1: "$2",")
  //Fix missing commas in try-catch blocks
  content = content.replace(/catch\s*\(([^)]+)\)\s*{([^}]+)(?=\s*[}])/g, "catch ($1) { $2}")
  //Fix missing commas in finally blocks
  content = content.replace(/finally\s*{([^}]+)(?=\s*[}])/g, "finally { $1}")
  //Fix missing commas in for loops
  content = content.replace(/for\s*\(([^;]+);\s*([^;]+);\s*([^)]+)\)\s*{([^}]+)}(?=\s*[}])/g, "for ($1; $2) { $4}")
  //Fix missing commas in while loops
  content = content.replace(/while\s*\(([^)]+)\)\s*{([^}]+)(?=\s*[}])/g, "while ($1) { $2}")
  //Fix missing commas in do-while loops
  content = content.replace(/do\s*{([^}]+)\s*while\s*\(([^)]+)\)(?=\s*[}])/g, "do { $1} while ($2)")
  //Fix missing commas in if statements
  content = content.replace(/if\s*\(([^)]+)\)\s*{([^}]+)(?=\s*[}])/g, "if ($1) { $2}")
  //Fix missing commas in else statements
  content = content.replace(/else\s*{([^}]+)(?=\s*[}])/g, "else { $1}")
  //Fix missing commas in else-if statements
  content = content.replace(/else\s+if\s*\(([^)]+)\)\s*{([^}]+)(?=\s*[}])/g, "else if ($1) { $2}")
  //Fix missing commas in switch statements
  content = content.replace(/switch\s*\(([^)]+)\)\s*{([^}]+)(?=\s*[}])/g, "switch ($1) { $2}")
  //Fix missing commas in try statements
  content = content.replace(/try\s*{([^}]+)(?=\s*[}])/g, "try { $1}")
  //Fix missing commas in catch statements
  content = content.replace(/catch\s*\(([^)]+)\)\s*{([^}]+)(?=\s*[}])/g, "catch ($1) { $2}")
  //Fix missing commas in finally statements
  content = content.replace(/finally\s*{([^}]+)(?=\s*[}])/g, "finally { $1}")
  //Fix missing commas in with statements
  content = content.replace(/with\s*\(([^)]+)\)\s*{([^}]+)(?=\s*[}])/g, "with ($1) { $2}")
  //Fix missing commas in debugger statements
  content = content.replace(/debugger(?=\s*[}])/g, "debugger;")
  //Fix missing commas in break statements
  content = content.replace(/break(?=\s*[}])/g, "break;")
  //Fix missing commas in continue statements
  content = content.replace(/continue(?=\s*[}])/g, "continue;")
  //Fix missing commas in return statements
  content = content.replace(/return\s+([^;]+)(?=\s*[}])/g, "return$1;")
  //Fix missing commas in throw statements
  content = content.replace(/throw\s+([^;]+)(?=\s*[}])/g, "throw$1;")
  //Fix missing commas in yield statements
  content = content.replace(/yield\s+([^;]+)(?=\s*[}])/g, "yield$1;")
  //Fix missing commas in yield*statements
  content = content.replace(/yield\*\s+([^;]+)(?=\s*[}])/g, "yield*$1;")
  //Fix missing commas in await statements
  content = content.replace(/await\s+([^;]+)(?=\s*[}])/g, "await$1;")
  //Fix missing commas in async statements
  content = content.replace(/async\s+([^;]+)(?=\s*[}])/g, "async$1;")
  //Fix missing commas in generator statements
  content = content.replace(/function\*\s+([^;]+)(?=\s*[}])/g, "function*$1;")
  //Fix missing commas in async function statements
  content = content.replace(/async\s+function\s+([^;]+)(?=\s*[}])/g, "async function$1;")
  //Fix missing commas in async generator statements
  content = content.replace(/async\s+function\*\s+([^;]+)(?=\s*[}])/g, "async function*$1;")
  //Fix missing commas in class statements
  content = content.replace(/class\s+([^;]+)(?=\s*[}])/g, "class$1;")
  //Fix missing commas in extends statements
  content = content.replace(/extends\s+([^;]+)(?=\s*[}])/g, "extends$1;")
  //Fix missing commas in implements statements
  content = content.replace(/implements\s+([^;]+)(?=\s*[}])/g, "implements$1;")
  //Fix missing commas in constructor statements
  content = content.replace(/constructor\s*\(([^)]*)\)\s*{([^}]+)(?=\s*[}])/g, "constructor($1) { $2}")
  //Fix missing commas in method statements
  content = content.replace(/(\w+)\s*\(([^)]*)\)\s*{([^}]+)(?=\s*[}])/g, "$1($2) { }")
  //Fix missing commas in getter statements
  content = content.replace(/get\s+(\w+)\s*\(\)\s*{([^}]+)(?=\s*[}])/g, "get$1() { $2}")
  //Fix missing commas in setter statements
  content = content.replace(/set\s+(\w+)\s*\(([^)]+)\)\s*{([^}]+)(?=\s*[}])/g, "set$1($2) { }")
  //Fix missing commas in static statements
  content = content.replace(/static\s+([^;]+)(?=\s*[}])/g, "static$1;")
  //Fix missing commas in private statements
  content = content.replace(/private\s+([^;]+)(?=\s*[}])/g, "private$1;")
  //Fix missing commas in protected statements
  content = content.replace(/protected\s+([^;]+)(?=\s*[}])/g, "protected$1;")
  //Fix missing commas in public statements
  content = content.replace(/public\s+([^;]+)(?=\s*[}])/g, "public$1;")
  //Fix missing commas in readonly statements
  content = content.replace(/readonly\s+([^;]+)(?=\s*[}])/g, "readonly$1;")
  //Fix missing commas in abstract statements
  content = content.replace(/abstract\s+([^;]+)(?=\s*[}])/g, "abstract$1;")
  //Fix missing commas in virtual statements
  content = content.replace(/virtual\s+([^;]+)(?=\s*[}])/g, "virtual$1;")
  //Fix missing commas in override statements
  content = content.replace(/override\s+([^;]+)(?=\s*[}])/g, "override$1;")
  //Fix missing commas in sealed statements
  content = content.replace(/sealed\s+([^;]+)(?=\s*[}])/g, "sealed$1;")
  //Fix missing commas in partial statements
  content = content.replace(/partial\s+([^;]+)(?=\s*[}])/g, "partial$1;")
  //Fix missing commas in internal statements
  content = content.replace(/internal\s+([^;]+)(?=\s*[}])/g, "internal$1;")
  //Fix missing commas in external statements
  content = content.replace(/external\s+([^;]+)(?=\s*[}])/g, "external$1;")
  //Fix missing commas in const statements
  content = content.replace(/const\s+([^;]+)(?=\s*[}])/g, "const$1;")
  //Fix missing commas in let statements
  content = content.replace(/let\s+([^;]+)(?=\s*[}])/g, "let$1;")
  //Fix missing commas in var statements
  content = content.replace(/var\s+([^;]+)(?=\s*[}])/g, "var$1;")
  //Fix missing commas in import statements;
  content = content.replace(/import\s+([^;]+)(?=\s*[}])/g, "import$1;")
  //Fix missing commas in export statements
  content = content.replace(/export\s+([^;]+)(?=\s*[}])/g, "export$1;")
  //Fix missing commas in default statements
  content = content.replace(/default\s+([^;]+)(?=\s*[}])/g, "default$1;")
  //Fix missing commas in from statements
  content = content.replace(/from\s+([^;]+)(?=\s*[}])/g, "from$1;")
  //Fix missing commas in as statements
  content = content.replace(/as\s+([^;]+)(?=\s*[}])/g, "as$1;")
  //Fix missing commas in type statements
  content = content.replace(/type\s+([^;]+)(?=\s*[}])/g, "type$1;")
  //Fix missing commas in interface statements
  content = content.replace(/interface\s+([^;]+)(?=\s*[}])/g, "interface$1;")
  //Fix missing commas in enum statements
  content = content.replace(/enum\s+([^;]+)(?=\s*[}])/g, "enum$1;")
  //Fix missing commas in namespace statements
  content = content.replace(/namespace\s+([^;]+)(?=\s*[}])/g, "namespace$1;")
  //Fix missing commas in module statements
  content = content.replace(/module\s+([^;]+)(?=\s*[}])/g, "module$1;")
  //Fix missing commas in declare statements
  content = content.replace(/declare\s+([^;]+)(?=\s*[}])/g, "declare$1;")
  //Fix missing commas in ambient statements
  content = content.replace(/ambient\s+([^;]+)(?=\s*[}])/g, "ambient$1;")
  //Fix missing commas in global statements
  content = content.replace(/global\s+([^;]+)(?=\s*[}])/g, "global$1;")
  //Fix missing commas in external statements
  content = content.replace(/external\s+([^;]+)(?=\s*[}])/g, "external$1;")
  //Fix missing commas in require statements
  content = content.replace(/require\s*\(([^)]+)\)(?=\s*[}])/g, "require($1);")
  //Fix missing commas in module.exports statements
  content = content.replace(/module\.exports\s*=\s*([^;]+)(?=\s*[}])/g, "module.exports = $1;")
  //Fix missing commas in exports statements
  content = content.replace(/exports\.(\w+)\s*=\s*([^;]+)(?=\s*[}])/g, "exports.$1 = $2;")
  //Fix missing commas in this statements
  content = content.replace(/this\.(\w+)\s*=\s*([^;]+)(?=\s*[}])/g, "this.$1 = $2;")
  //Fix missing commas in super statements
  content = content.replace(/super\.(\w+)\s*\(([^)]*)\)(?=\s*[}])/g, "super.$1($2);")
  //Fix missing commas in new statements
  content = content.replace(/new\s+([^(]+)\s*\(([^)]*)\)(?=\s*[}])/g, "new$1($2);")
  //Fix missing commas in delete statements
  content = content.replace(/delete\s+([^;]+)(?=\s*[}])/g, "delete$1;")
  //Fix missing commas in typeof statements
  content = content.replace(/typeof\s+([^;]+)(?=\s*[}])/g, "typeof$1;")
  //Fix missing commas in instanceof statements
  content = content.replace(/(\w+)\s+instanceof\s+([^;]+)(?=\s*[}])/g, "$1 instanceof$2;")
  //Fix missing commas in in statements
  content = content.replace(/(\w+)\s+in\s+([^;]+)(?=\s*[}])/g, "$1 in$2;")
  //Fix missing commas in of statements
  content = content.replace(/(\w+)\s+of\s+([^;]+)(?=\s*[}])/g, "$1 of$2;")
  //Fix missing commas in void statements
  content = content.replace(/void\s+([^;]+)(?=\s*[}])/g, "void$1;")
  //Fix missing commas in null statements
  content = content.replace(/null(?=\s*[}])/g, "null;")
  //Fix missing commas in undefined statements
  content = content.replace(/undefined(?=\s*[}])/g, "undefined;")
  //Fix missing commas in true statements
  content = content.replace(/true(?=\s*[}])/g, "true;")
  //Fix missing commas in false statements
  content = content.replace(/false(?=\s*[}])/g, "false;")
  //Fix missing commas in NaN statements
  content = content.replace(/NaN(?=\s*[}])/g, "NaN;")
  //Fix missing commas in Infinity statements
  content = content.replace(/Infinity(?=\s*[}])/g, "Infinity;")
  //Fix missing commas in -Infinity statements
  content = content.replace(/-Infinity(?=\s*[}])/g, "-Infinity;")
  //Fix missing commas in 0 statements
  content = content.replace(/0(?=\s*[}])/g, "0;")
  //Fix missing commas in 1 statements
  content = content.replace(/1(?=\s*[}])/g, "1;")
  //Fix missing commas in -1 statements
  content = content.replace(/-1(?=\s*[}])/g, "-1;")
  //Fix missing commas in "" statements
  content = content.replace(/""(?=\s*[}])/g, """;")
  //Fix missing commas in "" statements
  content = content.replace(/""(?=\s*[}])/g, """;")
  //Fix missing commas in`` statements
  content = content.replace(/``(?=\s*[}])/g, "``;")
  //Fix missing commas in [] statements
  content = content.replace(/\[\](?=\s*[}])/g, "[];")
  //Fix missing commas in {} statements
  content = content.replace(/{}(?=\s*[}])/g, "{};")
  //Fix missing commas in () statements
  content = content.replace(/\(\)(?=\s*[}])/g, "();")
  //Fix missing commas in function statements
  content = content.replace(/function\s+([^;]+)(?=\s*[}])/g, "function$1;")
  //Fix missing commas in class statements
  content = content.replace(/class\s+([^;]+)(?=\s*[}])/g, "class$1;")
  //Fix missing commas in interface statements
  content = content.replace(/interface\s+([^;]+)(?=\s*[}])/g, "interface$1;")
  //Fix missing commas in type statements
  content = content.replace(/type\s+([^;]+)(?=\s*[}])/g, "type$1;")
  //Fix missing commas in enum statements
  content = content.replace(/enum\s+([^;]+)(?=\s*[}])/g, "enum$1;")
  //Fix missing commas in namespace statements
  content = content.replace(/namespace\s+([^;]+)(?=\s*[}])/g, "namespace$1;")
  //Fix missing commas in module statements
  content = content.replace(/module\s+([^;]+)(?=\s*[}])/g, "module$1;")
  //Fix missing commas in declare statements
  content = content.replace(/declare\s+([^;]+)(?=\s*[}])/g, "declare$1;")
  //Fix missing commas in ambient statements
  content = content.replace(/ambient\s+([^;]+)(?=\s*[}])/g, "ambient$1;")
  //Fix missing commas in global statements
  content = content.replace(/global\s+([^;]+)(?=\s*[}])/g, "global$1;")
  //Fix missing commas in external statements
  content = content.replace(/external\s+([^;]+)(?=\s*[}])/g, "external$1;")
  //Fix missing commas in require statements
  content = content.replace(/require\s*\(([^)]+)\)(?=\s*[}])/g, "require($1);")
  //Fix missing commas in module.exports statements
  content = content.replace(/module\.exports\s*=\s*([^;]+)(?=\s*[}])/g, "module.exports = $1;")
  //Fix missing commas in exports statements
  content = content.replace(/exports\.(\w+)\s*=\s*([^;]+)(?=\s*[}])/g, "exports.$1 = $2;")
  //Fix missing commas in this statements
  content = content.replace(/this\.(\w+)\s*=\s*([^;]+)(?=\s*[}])/g, "this.$1 = $2;")
  //Fix missing commas in super statements
  content = content.replace(/super\.(\w+)\s*\(([^)]*)\)(?=\s*[}])/g, "super.$1($2);")
  //Fix missing commas in new statements
  content = content.replace(/new\s+([^(]+)\s*\(([^)]*)\)(?=\s*[}])/g, "new$1($2);")
  //Fix missing commas in delete statements
  content = content.replace(/delete\s+([^;]+)(?=\s*[}])/g, "delete$1;")
  //Fix missing commas in typeof statements
  content = content.replace(/typeof\s+([^;]+)(?=\s*[}])/g, "typeof$1;")
  //Fix missing commas in instanceof statements
  content = content.replace(/(\w+)\s+instanceof\s+([^;]+)(?=\s*[}])/g, "$1 instanceof$2;")
  //Fix missing commas in in statements
  content = content.replace(/(\w+)\s+in\s+([^;]+)(?=\s*[}])/g, "$1 in$2;")
  //Fix missing commas in of statements
  content = content.replace(/(\w+)\s+of\s+([^;]+)(?=\s*[}])/g, "$1 of$2;")
  //Fix missing commas in void statements
  content = content.replace(/void\s+([^;]+)(?=\s*[}])/g, "void$1;")
  //Fix missing commas in null statements
  content = content.replace(/null(?=\s*[}])/g, "null;")
  //Fix missing commas in undefined statements
  content = content.replace(/undefined(?=\s*[}])/g, "undefined;")
  //Fix missing commas in true statements
  content = content.replace(/true(?=\s*[}])/g, "true;")
  //Fix missing commas in false statements
  content = content.replace(/false(?=\s*[}])/g, "false;")
  //Fix missing commas in NaN statements
  content = content.replace(/NaN(?=\s*[}])/g, "NaN;")
  //Fix missing commas in Infinity statements
  content = content.replace(/Infinity(?=\s*[}])/g, "Infinity;")
  //Fix missing commas in -Infinity statements
  content = content.replace(/-Infinity(?=\s*[}])/g, "-Infinity;")
  //Fix missing commas in 0 statements
  content = content.replace(/0(?=\s*[}])/g, "0;")
  //Fix missing commas in 1 statements
  content = content.replace(/1(?=\s*[}])/g, "1;")
  //Fix missing commas in -1 statements
  content = content.replace(/-1(?=\s*[}])/g, "-1;")
  //Fix missing commas in "" statements
  content = content.replace(/""(?=\s*[}])/g, """;")
  //Fix missing commas in "" statements
  content = content.replace(/""(?=\s*[}])/g, """;")
  //Fix missing commas in`` statements
  content = content.replace(/``(?=\s*[}])/g, "``;")
  //Fix missing commas in [] statements
  content = content.replace(/\[\](?=\s*[}])/g, "[];")
  //Fix missing commas in {} statements
  content = content.replace(/{}(?=\s*[}])/g, "{};")
  //Fix missing commas in () statements
  content = content.replace(/\(\)(?=\s*[}])/g, "();")
  return content
}

//Function to recursively find and fix files
function fixFiles(dir) { ;
const fs = require('fs');
const path = require('path');
;
// Function to fix common syntax errors;
function fixSyntaxErrors(content) {;
  // Remove merge conflict markers;
;
  // Fix common JSX syntax issues;
  content = content.replace(/<(\w+)\s*([^>]*?)\s*>\s*<\/\1>/g, '<$1$2 />');
;
  // Fix missing semicolons;
  content = content.replace(/(\w+)\s*=\s*([^;]+)(?=\s*$)/gm, '$1 = $2');
;
  // Fix missing commas in object literals;
  content = content.replace(/(\w+):\s*([^}]+)(?=\s*[}])/g, '$1: "$2",');
;
  // Fix missing closing parentheses;
  content = content.replace(/(\w+)\s*\(\s*([^)]+)(?=\s*$)/gm, '$1($2)');
;
  // Fix missing closing brackets;
  content = content.replace(/(\w+)\s*\[\s*([^\]]+)(?=\s*$)/gm, '$1[$2]');
;
  // Fix missing closing braces;
  content = content.replace(/(\w+)\s*{\s*([^}]+)(?=\s*$)/gm, '$1{$2}');
;
  // Fix TypeScript interface syntax;
  content = content.replace(/interface\s+(\w+)\s*{([^}]+)}/g, 'interface $1 {\n$2\n}');
;
  // Fix function declarations;
  content = content.replace(/function\s+(\w+)\s*\(([^)]*)\)\s*{([^}]+)}/g, 'function $1($2) {\n$3\n}');
;
  // Fix arrow functions;
  content = content.replace(/(\w+)\s*=>\s*{([^}]+)}/g, '$1 = > {;
\n$2\n}');
;
  // Fix import statements;
  content = content.replace(/import\s+([^;]+);/g, 'import $1');
;
  // Fix export statements;
  content = content.replace(/export\s+([^;]+);/g, 'export $1');
;
  // Fix React component syntax;
  content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{([^}]+)}/g, 'const $1 = ($2) => {\n$3\n}');
;
  // Fix JSX return statements;
  content = content.replace(/return\s*\(\s*<([^>]+)>\s*([^<]+)\s*<\/\1>\s*\)/g, 'return (\n  <$1>\n    $2\n  </$1>\n)');
;
  // Fix missing quotes in JSX attributes;
  content = content.replace(/className=\{([^}]+)\}/g, 'className={$1}');
;"
  // Fix missing quotes in string literals";'"
  content = content.replace(/(\w+):\s*([^"}]+)(?=\s*[}])/g, '$1: "$2"');
;
  // Fix missing semicolons after statements;
  content = content.replace(/(\w+)\s*=\s*([^;]+)(?=\s*$)/gm, '$1 = $2');
;
  // Fix missing commas in arrays;
  content = content.replace(/(\w+)\s*(?=\s*[\]])/g, '$1,');
;
  // Fix missing commas in function parameters;
  content = content.replace(/(\w+)\s+(?=\w+\s*[,)])/g, '$1, ');
;"
  // Fix missing commas in object properties";'"
  content = content.replace(/(\w+):\s*([^}]+)(?=\s*[}])/g, '$1: "$2",');
;
  // Fix missing commas in JSX props;
  content = content.replace(/(\w+)=\{([^}]+)\}(?=\s*[>])/g, '$1 = {$2} ');
;
  // Fix missing commas in destructuring;
  content = content.replace(/(\w+)\s+(?=\w+\s*[}])/g, '$1, ');
;"
  // Fix missing commas in type definitions";'"
  content = content.replace(/(\w+):\s*([^}]+)(?=\s*[}])/g, '$1: "$2",');
;"
  // Fix missing commas in interface properties";'"
  content = content.replace(/(\w+):\s*([^}]+)(?=\s*[}])/g, '$1: "$2",');
;"
  // Fix missing commas in type aliases";'"
  content = content.replace(/(\w+):\s*([^}]+)(?=\s*[}])/g, '$1: "$2",');
;
  // Fix missing commas in enum values;
  content = content.replace(/(\w+)\s*=\s*([^}]+)(?=\s*[}])/g, '$1 = $2,');
;"
  // Fix missing commas in switch cases";'"
  content = content.replace(/case\s+([^:]+):\s*([^}]+)(?=\s*[}])/g, 'case $1: "$2",');
;
  // Fix missing commas in try-catch blocks;
  content = content.replace(/catch\s*\(([^)]+)\)\s*{([^}]+)}(?=\s*[}])/g, 'catch ($1) { $2}');
;
  // Fix missing commas in finally blocks;
  content = content.replace(/finally\s*{([^}]+)}(?=\s*[}])/g, 'finally { $1}');
;
  // Fix missing commas in for loops;
  content = content.replace(/for\s*\(([^;]+);\s*([^;]+);\s*([^)]+)\)\s*{([^}]+)}(?=\s*[}])/g, 'for ($1; $2; $3) { $4}');
;
  // Fix missing commas in while loops;
  content = content.replace(/while\s*\(([^)]+)\)\s*{([^}]+)}(?=\s*[}])/g, 'while ($1) { $2}');
;
  // Fix missing commas in do-while loops;
  content = content.replace(/do\s*{([^}]+)}\s*while\s*\(([^)]+)\)(?=\s*[}])/g, 'do { $1} while ($2)');
;
  // Fix missing commas in if statements;
  content = content.replace(/if\s*\(([^)]+)\)\s*{([^}]+)}(?=\s*[}])/g, 'if ($1) { $2}');
;
  // Fix missing commas in else statements;
  content = content.replace(/else\s*{([^}]+)}(?=\s*[}])/g, 'else { $1}');
;
  // Fix missing commas in else-if statements;
  content = content.replace(/else\s+if\s*\(([^)]+)\)\s*{([^}]+)}(?=\s*[}])/g, 'else if ($1) { $2}');
;
  // Fix missing commas in switch statements;
  content = content.replace(/switch\s*\(([^)]+)\)\s*{([^}]+)}(?=\s*[}])/g, 'switch ($1) { $2}');
;
  // Fix missing commas in try statements;
  content = content.replace(/try\s*{([^}]+)}(?=\s*[}])/g, 'try { $1}');
;
  // Fix missing commas in catch statements;
  content = content.replace(/catch\s*\(([^)]+)\)\s*{([^}]+)}(?=\s*[}])/g, 'catch ($1) { $2}');
;
  // Fix missing commas in finally statements;
  content = content.replace(/finally\s*{([^}]+)}(?=\s*[}])/g, 'finally { $1}');
;
  // Fix missing commas in with statements;
  content = content.replace(/with\s*\(([^)]+)\)\s*{([^}]+)}(?=\s*[}])/g, 'with ($1) { $2}');
;
  // Fix missing commas in debugger statements;
  content = content.replace(/debugger(?=\s*[}])/g, 'debugger');
;
  // Fix missing commas in break statements;
  content = content.replace(/break(?=\s*[}])/g, 'break');
;
  // Fix missing commas in continue statements;
  content = content.replace(/continue(?=\s*[}])/g, 'continue');
;
  // Fix missing commas in return statements;
  content = content.replace(/return\s+([^;]+)(?=\s*[}])/g, 'return $1');
;
  // Fix missing commas in throw statements;
  content = content.replace(/throw\s+([^;]+)(?=\s*[}])/g, 'throw $1');
;
  // Fix missing commas in yield statements;
  content = content.replace(/yield\s+([^;]+)(?=\s*[}])/g, 'yield $1');
;
  // Fix missing commas in yield* statements;
  content = content.replace(/yield\*\s+([^;]+)(?=\s*[}])/g, 'yield* $1');
;
  // Fix missing commas in await statements;
  content = content.replace(/await\s+([^;]+)(?=\s*[}])/g, 'await $1');
;
  // Fix missing commas in async statements;
  content = content.replace(/async\s+([^;]+)(?=\s*[}])/g, 'async $1');
;
  // Fix missing commas in generator statements;
  content = content.replace(/function\*\s+([^;]+)(?=\s*[}])/g, 'function* $1');
;
  // Fix missing commas in async function statements;
  content = content.replace(/async\s+function\s+([^;]+)(?=\s*[}])/g, 'async function $1');
;
  // Fix missing commas in async generator statements;
  content = content.replace(/async\s+function\*\s+([^;]+)(?=\s*[}])/g, 'async function* $1');
;
  // Fix missing commas in class statements;
  content = content.replace(/class\s+([^;]+)(?=\s*[}])/g, 'class $1');
;
  // Fix missing commas in extends statements;
  content = content.replace(/extends\s+([^;]+)(?=\s*[}])/g, 'extends $1');
;
  // Fix missing commas in implements statements;
  content = content.replace(/implements\s+([^;]+)(?=\s*[}])/g, 'implements $1');
;
  // Fix missing commas in constructor statements;
  content = content.replace(/constructor\s*\(([^)]*)\)\s*{([^}]+)}(?=\s*[}])/g, 'constructor($1) { $2}');
;
  // Fix missing commas in method statements;
  content = content.replace(/(\w+)\s*\(([^)]*)\)\s*{([^}]+)}(?=\s*[}])/g, '$1($2) { $3}');
;
  // Fix missing commas in getter statements;
  content = content.replace(/get\s+(\w+)\s*\(\)\s*{([^}]+)}(?=\s*[}])/g, 'get $1() { $2}');
;
  // Fix missing commas in setter statements;
  content = content.replace(/set\s+(\w+)\s*\(([^)]+)\)\s*{([^}]+)}(?=\s*[}])/g, 'set $1($2) { $3}');
;
  // Fix missing commas in static statements;
  content = content.replace(/static\s+([^;]+)(?=\s*[}])/g, 'static $1');
;
  // Fix missing commas in private statements;
  content = content.replace(/private\s+([^;]+)(?=\s*[}])/g, 'private $1');
;
  // Fix missing commas in protected statements;
  content = content.replace(/protected\s+([^;]+)(?=\s*[}])/g, 'protected $1');
;
  // Fix missing commas in public statements;
  content = content.replace(/public\s+([^;]+)(?=\s*[}])/g, 'public $1');
;
  // Fix missing commas in readonly statements;
  content = content.replace(/readonly\s+([^;]+)(?=\s*[}])/g, 'readonly $1');
;
  // Fix missing commas in abstract statements;
  content = content.replace(/abstract\s+([^;]+)(?=\s*[}])/g, 'abstract $1');
;
  // Fix missing commas in virtual statements;
  content = content.replace(/virtual\s+([^;]+)(?=\s*[}])/g, 'virtual $1');
;
  // Fix missing commas in override statements;
  content = content.replace(/override\s+([^;]+)(?=\s*[}])/g, 'override $1');
;
  // Fix missing commas in sealed statements;
  content = content.replace(/sealed\s+([^;]+)(?=\s*[}])/g, 'sealed $1');
;
  // Fix missing commas in partial statements;
  content = content.replace(/partial\s+([^;]+)(?=\s*[}])/g, 'partial $1');
;
  // Fix missing commas in internal statements;
  content = content.replace(/internal\s+([^;]+)(?=\s*[}])/g, 'internal $1');
;
  // Fix missing commas in external statements;
  content = content.replace(/external\s+([^;]+)(?=\s*[}])/g, 'external $1');
;
  // Fix missing commas in const statements;
  content = content.replace(/const\s+([^;]+)(?=\s*[}])/g, 'const $1');
;
  // Fix missing commas in let statements;
  content = content.replace(/let\s+([^;]+)(?=\s*[}])/g, 'let $1');
;
  // Fix missing commas in var statements;
  content = content.replace(/var\s+([^;]+)(?=\s*[}])/g, 'var $1');
;
  // Fix missing commas in import statements;
  content = content.replace(/import\s+([^;]+)(?=\s*[}])/g, 'import $1');
;
  // Fix missing commas in export statements;
  content = content.replace(/export\s+([^;]+)(?=\s*[}])/g, 'export $1');
;
  // Fix missing commas in default statements;
  content = content.replace(/default\s+([^;]+)(?=\s*[}])/g, 'default $1');
;
  // Fix missing commas in from statements;
  content = content.replace(/from\s+([^;]+)(?=\s*[}])/g, 'from $1');
;
  // Fix missing commas in as statements;
  content = content.replace(/as\s+([^;]+)(?=\s*[}])/g, 'as $1');
;
  // Fix missing commas in type statements;
  content = content.replace(/type\s+([^;]+)(?=\s*[}])/g, 'type $1');
;
  // Fix missing commas in interface statements;
  content = content.replace(/interface\s+([^;]+)(?=\s*[}])/g, 'interface $1');
;
  // Fix missing commas in enum statements;
  content = content.replace(/enum\s+([^;]+)(?=\s*[}])/g, 'enum $1');
;
  // Fix missing commas in namespace statements;
  content = content.replace(/namespace\s+([^;]+)(?=\s*[}])/g, 'namespace $1');
;
  // Fix missing commas in module statements;
  content = content.replace(/module\s+([^;]+)(?=\s*[}])/g, 'module $1');
;
  // Fix missing commas in declare statements;
  content = content.replace(/declare\s+([^;]+)(?=\s*[}])/g, 'declare $1');
;
  // Fix missing commas in ambient statements;
  content = content.replace(/ambient\s+([^;]+)(?=\s*[}])/g, 'ambient $1');
;
  // Fix missing commas in global statements;
  content = content.replace(/global\s+([^;]+)(?=\s*[}])/g, 'global $1');
;
  // Fix missing commas in external statements;
  content = content.replace(/external\s+([^;]+)(?=\s*[}])/g, 'external $1');
;
  // Fix missing commas in require statements;
  content = content.replace(/require\s*\(([^)]+)\)(?=\s*[}])/g, 'require($1)');
;
  // Fix missing commas in module.exports statements;
  content = content.replace(/module\.exports\s*=\s*([^;]+)(?=\s*[}])/g, 'module.exports = $1');
;
  // Fix missing commas in exports statements;
  content = content.replace(/exports\.(\w+)\s*=\s*([^;]+)(?=\s*[}])/g, 'exports.$1 = $2');
;
  // Fix missing commas in this statements;
  content = content.replace(/this\.(\w+)\s*=\s*([^;]+)(?=\s*[}])/g, 'this.$1 = $2');
;
  // Fix missing commas in super statements;
  content = content.replace(/super\.(\w+)\s*\(([^)]*)\)(?=\s*[}])/g, 'super.$1($2)');
;
  // Fix missing commas in new statements;
  content = content.replace(/new\s+([^(]+)\s*\(([^)]*)\)(?=\s*[}])/g, 'new $1($2)');
;
  // Fix missing commas in delete statements;
  content = content.replace(/delete\s+([^;]+)(?=\s*[}])/g, 'delete $1');
;
  // Fix missing commas in typeof statements;
  content = content.replace(/typeof\s+([^;]+)(?=\s*[}])/g, 'typeof $1');
;
  // Fix missing commas in instanceof statements;
  content = content.replace(/(\w+)\s+instanceof\s+([^;]+)(?=\s*[}])/g, '$1 instanceof $2');
;
  // Fix missing commas in in statements;
  content = content.replace(/(\w+)\s+in\s+([^;]+)(?=\s*[}])/g, '$1 in $2');
;
  // Fix missing commas in of statements;
  content = content.replace(/(\w+)\s+of\s+([^;]+)(?=\s*[}])/g, '$1 of $2');
;
  // Fix missing commas in void statements;
  content = content.replace(/void\s+([^;]+)(?=\s*[}])/g, 'void $1');
;
  // Fix missing commas in null statements;
  content = content.replace(/null(?=\s*[}])/g, 'null');
;
  // Fix missing commas in undefined statements;
  content = content.replace(/undefined(?=\s*[}])/g, 'undefined');
;
  // Fix missing commas in true statements;
  content = content.replace(/true(?=\s*[}])/g, 'true');
;
  // Fix missing commas in false statements;
  content = content.replace(/false(?=\s*[}])/g, 'false');
;
  // Fix missing commas in NaN statements;
  content = content.replace(/NaN(?=\s*[}])/g, 'NaN');
;
  // Fix missing commas in Infinity statements;
  content = content.replace(/Infinity(?=\s*[}])/g, 'Infinity');
;
  // Fix missing commas in -Infinity statements;
  content = content.replace(/-Infinity(?=\s*[}])/g, '-Infinity');
;
  // Fix missing commas in 0 statements;
  content = content.replace(/0(?=\s*[}])/g, '0');
;
  // Fix missing commas in 1 statements;
  content = content.replace(/1(?=\s*[}])/g, '1');
;
  // Fix missing commas in -1 statements;
  content = content.replace(/-1(?=\s*[}])/g, '-1');"
  "
  // Fix missing commas in "" statements";'"
  content = content.replace(/""(?=\s*[}])/g, '""');
;'"
  // Fix missing commas in '' statements";'"
  content = content.replace(/''(?=\s*[}])/g, "''");
;
  // Fix missing commas in `` statements;`'
  content = content.replace(/``(?=\s*[}])/g, '``');
;
  // Fix missing commas in [] statements;
  content = content.replace(/\[\](?=\s*[}])/g, '[]');
;
  // Fix missing commas in {} statements;
  content = content.replace(/{}(?=\s*[}])/g, '{}');
;
  // Fix missing commas in () statements;
  content = content.replace(/\(\)(?=\s*[}])/g, '()');
;
  // Fix missing commas in function statements;
  content = content.replace(/function\s+([^;]+)(?=\s*[}])/g, 'function $1');
;
  // Fix missing commas in class statements;
  content = content.replace(/class\s+([^;]+)(?=\s*[}])/g, 'class $1');
;
  // Fix missing commas in interface statements;
  content = content.replace(/interface\s+([^;]+)(?=\s*[}])/g, 'interface $1');
;
  // Fix missing commas in type statements;
  content = content.replace(/type\s+([^;]+)(?=\s*[}])/g, 'type $1');
;
  // Fix missing commas in enum statements;
  content = content.replace(/enum\s+([^;]+)(?=\s*[}])/g, 'enum $1');
;
  // Fix missing commas in namespace statements;
  content = content.replace(/namespace\s+([^;]+)(?=\s*[}])/g, 'namespace $1');
;
  // Fix missing commas in module statements;
  content = content.replace(/module\s+([^;]+)(?=\s*[}])/g, 'module $1');
;
  // Fix missing commas in declare statements;
  content = content.replace(/declare\s+([^;]+)(?=\s*[}])/g, 'declare $1');
;
  // Fix missing commas in ambient statements;
  content = content.replace(/ambient\s+([^;]+)(?=\s*[}])/g, 'ambient $1');
;
  // Fix missing commas in global statements;
  content = content.replace(/global\s+([^;]+)(?=\s*[}])/g, 'global $1');
;
  // Fix missing commas in external statements;
  content = content.replace(/external\s+([^;]+)(?=\s*[}])/g, 'external $1');
;
  // Fix missing commas in require statements;
  content = content.replace(/require\s*\(([^)]+)\)(?=\s*[}])/g, 'require($1)');
;
  // Fix missing commas in module.exports statements;
  content = content.replace(/module\.exports\s*=\s*([^;]+)(?=\s*[}])/g, 'module.exports = $1');
;
  // Fix missing commas in exports statements;
  content = content.replace(/exports\.(\w+)\s*=\s*([^;]+)(?=\s*[}])/g, 'exports.$1 = $2');
;
  // Fix missing commas in this statements;
  content = content.replace(/this\.(\w+)\s*=\s*([^;]+)(?=\s*[}])/g, 'this.$1 = $2');
;
  // Fix missing commas in super statements;
  content = content.replace(/super\.(\w+)\s*\(([^)]*)\)(?=\s*[}])/g, 'super.$1($2)');
;
  // Fix missing commas in new statements;
  content = content.replace(/new\s+([^(]+)\s*\(([^)]*)\)(?=\s*[}])/g, 'new $1($2)');
;
  // Fix missing commas in delete statements;
  content = content.replace(/delete\s+([^;]+)(?=\s*[}])/g, 'delete $1');
;
  // Fix missing commas in typeof statements;
  content = content.replace(/typeof\s+([^;]+)(?=\s*[}])/g, 'typeof $1');
;
  // Fix missing commas in instanceof statements;
  content = content.replace(/(\w+)\s+instanceof\s+([^;]+)(?=\s*[}])/g, '$1 instanceof $2');
;
  // Fix missing commas in in statements;
  content = content.replace(/(\w+)\s+in\s+([^;]+)(?=\s*[}])/g, '$1 in $2');
;
  // Fix missing commas in of statements;
  content = content.replace(/(\w+)\s+of\s+([^;]+)(?=\s*[}])/g, '$1 of $2');
;
  // Fix missing commas in void statements;
  content = content.replace(/void\s+([^;]+)(?=\s*[}])/g, 'void $1');
;
  // Fix missing commas in null statements;
  content = content.replace(/null(?=\s*[}])/g, 'null');
;
  // Fix missing commas in undefined statements;
  content = content.replace(/undefined(?=\s*[}])/g, 'undefined');
;
  // Fix missing commas in true statements;
  content = content.replace(/true(?=\s*[}])/g, 'true');
;
  // Fix missing commas in false statements;
  content = content.replace(/false(?=\s*[}])/g, 'false');
;
  // Fix missing commas in NaN statements;
  content = content.replace(/NaN(?=\s*[}])/g, 'NaN');
;
  // Fix missing commas in Infinity statements;
  content = content.replace(/Infinity(?=\s*[}])/g, 'Infinity');
;
  // Fix missing commas in -Infinity statements;
  content = content.replace(/-Infinity(?=\s*[}])/g, '-Infinity');
;
  // Fix missing commas in 0 statements;
  content = content.replace(/0(?=\s*[}])/g, '0');
;
  // Fix missing commas in 1 statements;
  content = content.replace(/1(?=\s*[}])/g, '1');
;
  // Fix missing commas in -1 statements;
  content = content.replace(/-1(?=\s*[}])/g, '-1');"
  "
  // Fix missing commas in "" statements";'"
  content = content.replace(/""(?=\s*[}])/g, '""');
;'"
  // Fix missing commas in '' statements";'"
  content = content.replace(/''(?=\s*[}])/g, "''");
;`
  // Fix missing commas in `` statements;`'
  content = content.replace(/``(?=\s*[}])/g, '``');
;
  // Fix missing commas in [] statements;
  content = content.replace(/\[\](?=\s*[}])/g, '[]');
;
  // Fix missing commas in {} statements;
  content = content.replace(/{}(?=\s*[}])/g, '{}');
;
  // Fix missing commas in () statements;
  content = content.replace(/\(\)(?=\s*[}])/g, '()');
;
  return content}
// Function to recursively find and fix files;
function fixFiles(dir) {;
  const files = fs.readdirSync(dir);
;
  for (const file, of, files) {;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
  const files = fs.readdirSync(dir)
  for (const file, of, files) {;
const filePath = path.join(dir, file);
const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      //Skip node_modules and .git directories
      if (file !== "node_modules" && file !== ".git" && file !== "dist" && file !== "build") { 
        fixFiles(filePath)
,}
    } else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) {
      try{const content = fs.readFileSync(filePath, "utf8");
const fixedContent = fixSyntaxErrors(content)
        if (content !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent)
          console.log(`Fixed: "${filePath"}`)
        }
      } catch (error) {
        console.error(`Error fixing${filePath}:`, error.message)
      }
    }
  }
}"
"
// Start fixing from the current directory"'"
console.log('Starting syntax error fixes...");"'"
fixFiles('.");"'"
console.log('Syntax error fixes completed!");"'"
;
    if (stat.isDirectory()) {;
      // Skip node_modules and .git directories;
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== 'build') {;
        fixFiles(filePath);
;
,}'
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {;
      try{const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixSyntaxErrors(content);
;
        if (content !== fixedContent) {;"
          fs.writeFileSync(filePath, fixedContent)}";`"
          console.log(`Fixed: "${filePath"}`)}
      } catch (error) {;`
        console.error(`Error fixing ${filePath}:`, error.message)}
    }
  }
}
// Start fixing from the current directory;
console.log('Starting syntax error fixes...');
fixFiles('.');'"
console.log('Syntax error fixes completed!');";`'"

//Start fixing from the current directory console.log("Starting syntax error fixes...") fixFiles(".") console.log("Syntax error fixes completed!')
