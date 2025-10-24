const fs = require("fs");
const path = require("path")
//Function to fix JSX syntax issues comprehensively
function fixJSXSyntax(content) {;
let fixed = content
  //1. Fix malformed component declarations
  fixed = fixed.replace(/interface\s+(\w+)Props\s*{\s*([^}]*)\s*}\s*const\s+(\w+):\s*React\.FC<(\w+)Props>\s*=\s*\(\s*{\s*([^}]*)\s*}\s*\)\s*=>\s*{\s*return\s*\(\s*<\/\w+>/g
    "interface$1Props {\n$2\n}\n\nconst : React.FC<$1Props> = ({ $5 }) => {\n  return (\n    <div>"
  )
  //2. Fix missing closing tags and fragments
  fixed = fixed.replace(/<\/div>\s*export\s+default\s+(\w+)/g, "</div>\n  );\n};\n\nexport default$1")
  //3. Fix malformed JSX returns
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*<div/g, "return (\n    <>\n      <div")
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*\)/g, "</div>\n    </>\n  )")
  //4. Fix missing React fragments
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*<Head/g, "return (\n    <>\n      <div>\n        <Head")
  fixed = fixed.replace(/<\/Head>\s*<div[^>]*>\s*<\/div>\s*<\/div>\s*\)/g, "
      </Head>\n      </div>\n    </>\n  )")
  //5. Fix malformed JSX expressions
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div/g, "<div")
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<h/g, "<h")
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<p/g, "<p")
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<span/g, "<span")
  //6. Fix missing closing tags
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/div>/g, "</div>")
  //7. Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<div[^>]*>\s*<\/div>\s*<div/g, "<div")
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/>/g, "</div>")
  //8. Fix missing semicolons and commas
  fixed = fixed.replace(/}\s*const\s+/g, "};\n\nconst ")
  fixed = fixed.replace(/}\s*export\s+/g, "};\n\nexport ")
  fixed = fixed.replace(/}\s*interface\s+/g, "};\n\ninterface ")
  fixed = fixed.replace(/}\s*type\s+/g, "};\n\ntype ")
  //9. Fix malformed interface declarations
  fixed = fixed.replace(/interface\s+(\w+)\s*{\s*([^}]*)\s*}\s*const/g, "interface$1 {\n$2\n}\n\nconst")
  //10. Fix missing closing braces
  fixed = fixed.replace(/}\s*export\s+default\s+(\w+)/g, "};\n\nexport default$1")
  //11. Fix malformed JSX attributes
  fixed = fixed.replace(/className=\{[^}]*\}\s*>\s*<\/div>\s*<div/g, "className={$1}>\n        <div")
  //12. Fix missing closing tags in arrays
  fixed = fixed.replace(/\[\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*\]/g
    "[\n                { name: "$1", path: "$2" },\n                { name: "", path: "$4" },\n                { name: "$5", path: "$6" },\n                { name: "$7", path: "$8" }\n              ]")
  //13. Fix specific component patterns
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*{\s*([^}]*)\s*}\s*\)\s*=>\s*{\s*return\s*\(\s*<\/\w+>/g, "const$1 = ({ $2 }) => {\n  return (\n    <div>")
  //14. Fix missing closing tags for components
  fixed = fixed.replace(/<\/div>\s*export\s+default\s+(\w+)/g, "</div>\n  );\n};\n\nexport default$1")
  //15. Fix malformed JSX expressions with fragments
  fixed = fixed.replace(/<>\s*<div[^>]*>\s*<\/div>\s*<div/g, "<div")
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/>/g, "</div>")
  //16. Fix missing closing tags for JSX fragments
  fixed = fixed.replace(/<>\s*<div[^>]*>\s*<\/div>\s*<div/g, "<div")
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/>/g, "</div>")
  //17. Fix malformed JSX expressions with multiple elements
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div/g, "<div")
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<\/div>/g, "</div>")
  //18. Fix missing closing tags for JSX fragments
  fixed = fixed.replace(/<>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div/g, "<div")
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<\/>/g, "</div>")
  //19. Fix malformed JSX expressions with multiple elements
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div/g, "<div")
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<\/div>/g, "</div>")
  //20. Fix missing closing tags for JSX fragments
  fixed = fixed.replace(/<>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div/g, "<div")
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<\/>/g, "</div>")
  return fixed
}

  //Remove extra semicolons and fix basic syntax
  fixed = fixed.replace(/;\s*;/g, ";")
  fixed = fixed.replace(/;\s*$/gm, "")
  fixed = fixed.replace(/,\s*;/g, ",")
  fixed = fixed.replace(/,\s*$/gm, "")
  //Fix JSX attribute syntax
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*{([^
}]+)}/g, "$1 = {$2}")
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*"([^"]*)"/g, "$1="$2"")
  //Fix className syntax
  fixed = fixed.replace(/className\s*=\s*"([^"]*)"\s*>/g, "className="$1">")
  fixed = fixed.replace(/className\s*=\s*{([^}]+)}\s*>/g, "className = {$1} >")
  //Fix JSX element spacing
  fixed = fixed.replace(/<([A-Z,][a-zA-Z0-9,]*)\s+([^>]*?)\s*>/g, (match, tag, attrs) => {;
const cleanAttrs = attrs.replace(/\s+/g, " ").trim()
    return`<${tag} ${cleanAttrs}>`
  })
  //Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>(?!.*<\/div>)([\s\S,]*?)<\/div>/g, "<div$1>$2</div>")
  fixed = fixed.replace(/<span([^>]*)>(?!.*<\/span>)([\s\S,]*?)<\/span>/g, "<span$1>$2</span>")
  fixed = fixed.replace(/<p([^>]*)>(?!.*<\/p>)([\s\S,]*?)<\/p>/g, "<p$1>$2</p>")
  fixed = fixed.replace(/<h[1-6,]([^>]*)>(?!.*<\/h[1-6,]>)([\s\S,]*?)<\/h[1-6,]>/g, (match, attrs, content) => {;
const level = match.match(/<h([1-6,])/)[1,]
    return`<h${level}${attrs}>${content}</h${level}>`
  })
  //Fix React component structure
  fixed = fixed.replace(/const\s+([A-Z,][a-zA-Z0-9,]*)\s*=\s*\(\s*\)\s*=>\s*{([\s\S,]*?)return\s*\(([\s\S,]*?)\);?\s*}/g, (match, componentName, body, returnContent) => {
    return`const${componentName} = () => {\n${body}\n  return (\n${returnContent.trim()\n  );\n}`
  })
  //Fix export default statements
  fixed = fixed.replace(/export\s+default\s+([A-Z,][a-zA-Z0-9,]*);?/g, "export default$1;")
  //Fix import statements;
  fixed = fixed.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+[""]([^""]+)[""];?/g, "import { $1 } from \"$2\";")
  //Fix JSX fragment syntax
  fixed = fixed.replace(/<>\s*<([A-Z,][a-zA-Z0-9,]*)[^>]*>[\s\S,]*?<\/\1>\s*<([A-Z,][a-zA-Z0-9,]*)[^>]*>[\s\S,]*?<\/\2>\s*<\/>/g, (match) => {
    return match.replace(/<>\s*/, "<>\n      ").replace(/\s*<\/>/, "\n    </>")
  })
  //Fix missing semicolons in JSX
  fixed = fixed.replace(/([^}])\s*\n\s*export/g, "$1;\nexport")
  fixed = fixed.replace(/([^}])\s*\n\s*import/g, "$1;\nimport")
  //Fix object property syntax in JSX props
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^}]+),?\s*/g, "$1: "$2",")
  //Fix JSX element structure - ensure proper nesting
  fixed = fixed.replace(/<div([^>]*)>([\s\S,]*?)<\/div>\s*<([A-Z,][a-zA-Z0-9,]*)([^>]*)>([\s\S,]*?)<\/\3>/g, (match, divAttrs, divContent, nextTag, nextAttrs, nextContent) => {
    return`<div${divAttrs}>\n${divContent}\n      <${nextTag}${nextAttrs}>\n${nextContent}\n      </${nextTag}>\n    </div>`
  })
  //Fix JSX element structure - wrap multiple elements in fragments
  fixed = fixed.replace(/return\s*\(\s*<([A-Z,][a-zA-Z0-9,]*)[^>]*>[\s\S,]*?<\/\1>\s*<([A-Z,][a-zA-Z0-9,]*)[^>]*>[\s\S,]*?<\/\2>\s*\)/g, (match) => {
    return match.replace(/return\s*\(\s*/, "return (\n    <>\n      ").replace(/\s*\)$/, "\n    </>\n  )")
  })
  //Clean up extra whitespace
  fixed = fixed.replace(/\n\s*\n\s*\n/g, "\n\n")
  fixed = fixed.replace(/^\s+$/gm, "")
//Function to fix specific file patterns
function fixSpecificFile(content, filePath) {;
let fixed = content;"
  "
  // Fix 404.tsx specific issues"'"
  if (filePath.includes('404.tsx")) {
    // Fix the main structure"
    fixed = fixed.replace("
      /return\s*\(\s*<div><\/div>\s*<Head>/g,"'"
      'return (\n    <>\n      <Head>"
    );"
    fixed = fixed.replace("
      /<\/Head>\s*<div[^>]*><\/div>\s*<div[^>]*><\/div>/g,"'"
      '</Head>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">\n        <div className="max-w-2xl w-full text-center">"
    );"
    fixed = fixed.replace("
      /<\/div>\s*<\/div>\s*<\/div>\s*\)/g,"'"
      '</div>\n      </div>\n    </>\n  )"
    );
  }"
  "
  // Fix component files"'"
  if (filePath.includes('components/")) {
    // Fix malformed component declarations"
    fixed = fixed.replace("
      /interface\s+(\w+)Props\s*{\s*([^}]*)\s*}\s*const\s+(\w+):\s*React\.FC<(\w+)Props>\s*=\s*\(\s*{\s*([^}]*)\s*}\s*\)\s*=>\s*{\s*return\s*\(\s*<\/\w+>/g,"'"
      'interface $1Props {\n  $2\n}\n\nconst $3: React.FC<$1Props> = ({ $5 }) => {\n  return (\n    <div>"
    );"
    "
    // Fix missing closing tags"'"
    fixed = fixed.replace(/<\/div>\s*export\s+default\s+(\w+)/g, '</div>\n  );\n};\n\nexport default $1");
  }"
  "
  // Fix page files"'"
  if (filePath.includes('page.tsx")) {
    // Fix malformed page components"
    fixed = fixed.replace("
      /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(\s*<div[^>]*>\s*<\/div>\s*<div/g,"'"
      'export default function $1() {\n  return (\n    <>\n      <div"
    );"
    fixed = fixed.replace("
      /<\/div>\s*<\/div>\s*\)/g,"'"
      '</div>\n    </>\n  )"
    );
  let fixed = content
  //Fix 404.tsx specific issues
  if (filePath.includes("404.tsx")) {
    //Fix the main structure
    fixed = fixed.replace(/return\s*\(\s*<div><\/div>\s*<Head>/g
      "return (\n    <>\n      <Head>"
    )
    fixed = fixed.replace(/<\/Head>\s*<div[^>]*><\/div>\s*<div[^>]*><\/div>/g
      "
      </Head>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">\n        <div className="max-w-2xl w-full text-center">"
    )
    fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>\s*\)/g
      "</div>\n      </div>\n    </>\n  )"
    )
  }
  
  //Fix component files
  if (filePath.includes("components/")) {
    //Fix malformed component declarations
    fixed = fixed.replace(/interface\s+(\w+)Props\s*{\s*([^}]*)\s*}\s*const\s+(\w+):\s*React\.FC<(\w+)Props>\s*=\s*\(\s*{\s*([^}]*)\s*}\s*\)\s*=>\s*{\s*return\s*\(\s*<\/\w+>/g
      "interface$1Props {\n$2\n}\n\nconst : React.FC<$1Props> = ({ $5 }) => {\n  return (\n    <div>"
    )
    //Fix missing closing tags
    fixed = fixed.replace(/<\/div>\s*export\s+default\s+(\w+)/g, "</div>\n  );\n};\n\nexport default$1")
  }
  
  //Fix page files
  if (filePath.includes("page.tsx")) {
    //Fix malformed page components
    fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(\s*<div[^>]*>\s*<\/div>\s*<div/g
      "export default function$1() {\n  return (\n    <>\n      <div"
    )
    fixed = fixed.replace(/<\/div>\s*<\/div>\s*\)/g
      "</div>\n    </>\n  )"
    )
  }
  
  return fixed
}

  try {"'";
const content = fs.readFileSync(filePath, 'utf8");
    let fixed = fixJSXSyntax(content);
    fixed = fixSpecificFile(fixed, filePath);"
    "
    // Write the fixed content back"'"
    fs.writeFileSync(filePath, fixed, 'utf8");
const fs = require('fs');
const path = require('path');
;
// Function to fix JSX structure issues;
function fixJSXStructure(content) {;
// Function to fix JSX syntax issues comprehensively;
function fixJSXSyntax(content) {;
  let fixed = content;
;
  // 1. Fix malformed component declarations;
  fixed = fixed.replace(;
    /interface\s+(\w+)Props\s*{\s*([^}]*)\s*}\s*const\s+(\w+):\s*React\.FC<(\w+)Props>\s*=\s*\(\s*{\s*([^}]*)\s*}\s*\)\s*=>\s*{\s*return\s*\(\s*<\/\w+>/g,);
    'interface $1Props {\n  $2\n}\n\nconst $3: React.FC<$1Props> = ({ $5 }) => {\n  return (\n    <div>');
  );
;
  // 2. Fix missing closing tags and fragments;
  fixed = fixed.replace(/<\/div>\s*export\s+default\s+(\w+)/g, '</div>\n  );\n};\n\nexport default $1');
;
  // 3. Fix malformed JSX returns;
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*<div/g, 'return (\n    <>\n      <div');
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*\)/g, '</div>\n    </>\n  )');
;
  // 4. Fix missing React fragments;
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*<Head/g, 'return (\n    <>\n      <div>\n        <Head');
  fixed = fixed.replace(/<\/Head>\s*<div[^>]*>\s*<\/div>\s*<\/div>\s*\)/g, '</Head>\n      </div>\n    </>\n  )');
;
  // 5. Fix malformed JSX expressions;
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div/g, '<div');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<h/g, '<h');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<p/g, '<p');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<span/g, '<span');
;
  // 6. Fix missing closing tags;
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/div>/g, '</div>');
;
  // 7. Fix malformed JSX fragments;
  fixed = fixed.replace(/<>\s*<div[^>]*>\s*<\/div>\s*<div/g, '<div');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/>/g, '</div>');
;
  // 8. Fix missing semicolons and commas;
  fixed = fixed.replace(/}\s*const\s+/g, '};\n\nconst ');
  fixed = fixed.replace(/}\s*export\s+/g, '};\n\nexport ');
  fixed = fixed.replace(/}\s*interface\s+/g, '};\n\ninterface ');
  fixed = fixed.replace(/}\s*type\s+/g, '};\n\ntype ');
;
  // 9. Fix malformed interface declarations;
  fixed = fixed.replace(/interface\s+(\w+)\s*{\s*([^}]*)\s*}\s*const/g, 'interface $1 {\n  $2\n}\n\nconst');
;
  // 10. Fix missing closing braces;
  fixed = fixed.replace(/}\s*export\s+default\s+(\w+)/g, '};\n\nexport default $1');
;
  // 11. Fix malformed JSX attributes;
  fixed = fixed.replace(/className=\{[^}]*\}\s*>\s*<\/div>\s*<div/g, 'className={$1}>\n        <div');
;
  // 12. Fix missing closing tags in arrays;
  fixed = fixed.replace(/\[\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*\]/g, ";'"
    '[\n                { name: "$1", path: "$2" },\n                { name: "$3", path: "$4" },\n                { name: "$5", path: "$6" },\n                { name: "$7", path: "$8" }\n              ]');
;
  // 13. Fix specific component patterns;
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*{\s*([^}]*)\s*}\s*\)\s*=>\s*{\s*return\s*\(\s*<\/\w+>/g, 'const $1 = ({ $2 }) => {\n  return (\n    <div>');
;
  // 14. Fix missing closing tags for components;
  fixed = fixed.replace(/<\/div>\s*export\s+default\s+(\w+)/g, '</div>\n  );\n};\n\nexport default $1');
;
  // 15. Fix malformed JSX expressions with fragments;
  fixed = fixed.replace(/<>\s*<div[^>]*>\s*<\/div>\s*<div/g, '<div');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/>/g, '</div>');
;
  // 16. Fix missing closing tags for JSX fragments;
  fixed = fixed.replace(/<>\s*<div[^>]*>\s*<\/div>\s*<div/g, '<div');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/>/g, '</div>');
;
  // 17. Fix malformed JSX expressions with multiple elements;
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div/g, '<div');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<\/div>/g, '</div>');
;
  // 18. Fix missing closing tags for JSX fragments;
  fixed = fixed.replace(/<>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div/g, '<div');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<\/>/g, '</div>');
;
  // 19. Fix malformed JSX expressions with multiple elements;
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div/g, '<div');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<\/div>/g, '</div>');
;
  // 20. Fix missing closing tags for JSX fragments;
  fixed = fixed.replace(/<>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div/g, '<div');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<div[^>]*>\s*<\/div>\s*<\/>/g, '</div>');
;
  return fixed}
// Function to fix specific file patterns;
function fixSpecificFile(content, filePath) {;
  let fixed = content;
;
  // Fix 404.tsx specific issues;
  if (filePath.includes('404.tsx')) {;
    // Fix the main structure;
    fixed = fixed.replace(/return\s*\(\s*<div><\/div>\s*<Head>/g,;
      'return (\n    <>\n      <Head>');
    );"
    fixed = fixed.replace(/<\/Head>\s*<div[^>]*><\/div>\s*<div[^>]*><\/div>/g,";'"
      '</Head>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">\n        <div className="max-w-2xl w-full text-center">');
    );
    fixed = fixed.replace(;
      /<\/div>\s*<\/div>\s*<\/div>\s*\)/g,;
      '</div>\n      </div>\n    </>\n  )'
    )}
  // Fix component files;
  if (filePath.includes('components/')) {;
    // Fix malformed component declarations;
    fixed = fixed.replace(;
      /interface\s+(\w+)Props\s*{\s*([^}]*)\s*}\s*const\s+(\w+):\s*React\.FC<(\w+)Props>\s*=\s*\(\s*{\s*([^}]*)\s*}\s*\)\s*=>\s*{\s*return\s*\(\s*<\/\w+>/g,);
      'interface $1Props {\n  $2\n}\n\nconst $3: React.FC<$1Props> = ({ $5 }) => {\n  return (\n    <div>');
    );
;
    // Fix missing closing tags;
    fixed = fixed.replace(/<\/div>\s*export\s+default\s+(\w+)/g, '</div>\n  );\n};\n\nexport default $1')}
  // Fix page files;
  if (filePath.includes('page.tsx')) {;
    // Fix malformed page components;
    fixed = fixed.replace(;
      /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(\s*<div[^>]*>\s*<\/div>\s*<div/g,);
      'export default function $1() {\n  return (\n    <>\n      <div');
    );
    fixed = fixed.replace(;
      /<\/div>\s*<\/div>\s*\)/g,;
      '</div>\n    </>\n  )'
    )}
  return fixed}
// Function to process a single file;
function processFile(filePath) {;
  try {;
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = fixJSXSyntax(content);
    fixed = fixSpecificFile(fixed, filePath);
;
    // Write the fixed content back;
    fs.writeFileSync(filePath, fixed, 'utf8');`
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {;`
    console.error(`Error processing ${filePath}:`, error.message);
    return false}
}
// Function to recursively find and process files;
//Function to process a single file
function processFile(filePath) {

  try{const content = fs.readFileSync(filePath, "utf8");
const fixed = fixJSXStructure(content)
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed)
}
      console.log(`Fixed JSX structure: "${filePath"}`)
      return true
    }
    return false;
const content = fs.readFileSync(filePath, "utf8");
let fixed = fixJSXSyntax(content)
    fixed = fixSpecificFile(fixed, filePath)
    //Write the fixed content back
    fs.writeFileSync(filePath, fixed, "utf8")
    console.log(`Fixed: ${filePath}`)
    return true
  } catch (error) {
    console.error(`Error processing${filePath}:`, error.message)
    return false
  }
}

//Function to recursively find and process files
        if (processFile(fullPath)) {
          fixedCount++
        }
function processDirectory(dirPath) {
;
      if (stat.isDirectory()) {;
        // Skip node_modules and other common directories;
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {;
          fixedCount += processDirectory(fullPath)}
        }'
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {;
        if (processFile(fullPath)) {;
          fixedCount++}
function processDirectory(dirPath) {;
  const files = fs.readdirSync(dirPath);
  let processedCount = 0;
;
  for (const file of files) {;
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
;
    if (stat.isDirectory()) {;
      // Skip node_modules and other directories;
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {;
        processedCount += processDirectory(filePath)}'
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {;
      if (processFile(filePath)) {;
        processedCount++;
  const files = fs.readdirSync(dirPath);
let processedCount = 0
  for (const file of files) {;
const filePath = path.join(dirPath, file);
const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      //Skip node_modules and other directories
      if (!["node_modules", ".git", ".next", "dist", "build"].includes(file)) {
        processedCount+= processDirectory(filePath)
      }
    } else if (file.endsWith(".tsx") || file.endsWith(".jsx")) {
      if (processFile(filePath)) {
        processedCount++
      }
    }
  }
console.log('Processing specific problematic files...");
for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    processFile(file);
  }"
}"
"'"
console.log('Comprehensive JSX syntax fixes completed!");"
")))'"
  return processedCount}
// Main execution;
console.log('Starting comprehensive JSX syntax fixes...');
const processedCount = processDirectory('/workspace');`
console.log(`Processed ${processedCount} files`);
;
// Also process specific problematic files mentioned in the lint output;
const problematicFiles = [;
  '/workspace/app/404.tsx',;
  '/workspace/app/components/AccessibilityComponents.tsx',;
  '/workspace/app/components/AnimatedText.tsx',;
  '/workspace/app/components/ContactForm.tsx',;
  '/workspace/app/components/ErrorBoundary.tsx',;
  '/workspace/app/components/Header.tsx',;
  '/workspace/app/components/Navigation.tsx',;
  '/workspace/app/components/ServiceCard.tsx',;
  '/workspace/app/pages/HomePage.tsx',;
  '/workspace/app/pages/AboutPage.tsx',;
  '/workspace/app/pages/ContactPage.tsx'
];
;
const endTime = Date.now();`
console.log(`\nCompleted! Fixed ${fixedCount} files in ${endTime - startTime}ms`);
console.log('Processing specific problematic files...');
for (const file of problematicFiles) {;
  if (fs.existsSync(file)) {;
    processFile(file)}
}'
console.log('Comprehensive JSX syntax fixes completed!');
";`'"
  return processedCount
}

//Main execution console.log("Starting comprehensive JSX syntax fixes...");
const processedCount = processDirectory("/workspace") console.log(`Processed${processedCount} files`)
//Also process specific problematic files mentioned in the lint output;
const problematicFiles = ["/workspace/app/404.tsx"
  "/workspace/app/components/AccessibilityComponents.tsx"
  "/workspace/app/components/AnimatedText.tsx"
  "/workspace/app/components/ContactForm.tsx"
  "/workspace/app/components/ErrorBoundary.tsx"
  "/workspace/app/components/Header.tsx"
  "/workspace/app/components/Navigation.tsx"
  "/workspace/app/components/ServiceCard.tsx"
  "/workspace/app/pages/HomePage.tsx"
  "/workspace/app/pages/AboutPage.tsx"
  "/workspace/app/pages/ContactPage.tsx"
];
const endTime = Date.now() console.log(`\nCompleted! Fixed${fixedCount} files in${endTime - startTime}ms`)
for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    processFile(file)
  }
}
 console.log("Comprehensive JSX syntax fixes completed!")
