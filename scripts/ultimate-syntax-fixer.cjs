<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');




const filesToFix = ['pages/api/health.ts',
  'components/LoadingSpinner.tsx',
  'pages/docs/api-quick-start.tsx',
  'pages/docs/api-reference.tsx',
  'pages/docs/authentication.tsx'
];

function fixFile(filePath) {
  try {
    
    
    if (!fs.existsSync(filePath)) {
      
      return}
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixesApplied = 0;
    
    // Fix extra closing braces
    content = content.replace(/\}\s*\}\s*$/gm, '}');
    if (content !== originalContent) {
      fixesApplied++;
      
      originalContent = content}
    
    // Fix malformed template literals in JSX
    content = content.replace(/"([^"]*?)\"\s*"\}/g, '"$1"}');
    if (content !== originalContent) {
      fixesApplied++;
      
      originalContent = content}
    
    // Fix broken JSX attributes
    content = content.replace(/style=\{\{\s*"display": \s*'gridTemplateColumns',\s*'([^']*)'\s*"gap": \s*'([^']*)'\s*\}\}/g, 'style={{ "display": \'grid\', "gridTemplateColumns": \'$1\', "gap": \'$2\' }}');
    if (content !== originalContent) {
      fixesApplied++;
      
      originalContent = content}
    
    // Fix malformed JSON in template literals
    content = content.replace(/\}\"\s*\}\"\}/g, '}"}');
    if (content !== originalContent) {
      fixesApplied++;
      
      originalContent = content}
    
    // Fix broken string concatenation in template literals
    content = content.replace(/([^"]*?)\"\s*([^"]*?)\"/g, (match, p1, p2) => {
      if (p1.includes('"') && p2.includes('"')) {
        return p1 + p2}
      return match});
    if (content !== originalContent) {
      fixesApplied++;
      
      originalContent = content}
    
    // Fix malformed JSX with broken quotes
    content = content.replace(/href=\{\"\$\{([^}]*?)\}\/docs\/authentication\"\s*\/\>\>\s*<\/div\>/g, 'href={"$1/docs/authentication"} />');
    if (content !== originalContent) {
      fixesApplied++;
      
      originalContent = content}
    
    // Fix broken JSX structure
    content = content.replace(/return\s*\(\<\>\<Head\>/g, 'return (\n    <>\n      <Head>');
    if (content !== originalContent) {
      fixesApplied++;
      
      originalContent = content}
    
    // Fix malformed template literals with broken quotes
    content = content.replace(/\{"([^"]*?)\"\s*"\}/g, '{"$1"}');
    if (content !== originalContent) {
      fixesApplied++;
      
      originalContent = content}
    
    // Fix broken string concatenation in JSX
    content = content.replace(/"([^"]*?)"\s*"([^"]*?)"/g, '"$1$2"');
    if (content !== originalContent) {
      fixesApplied++;
      
      originalContent = content}
    
    // Fix malformed object properties
    content = content.replace(/(\w+):\s*'([^']*?)',\s*(\w+):\s*'([^']*?)'/g, '$"1": \'$2\',\n    $"3": \'$4\'');
    if (content !== originalContent) {
      fixesApplied++;
      
      originalContent = content}
    
    // Fix broken template literals with line breaks
    content = content.replace(/\{"([^"]*?)\n([^"]*?)\"\}/g, '{"$1$2"}');
    if (content !== originalContent) {
      fixesApplied++;
      
      originalContent = content}
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      } else {
      }
    
  } catch (error) {
    }
}

// Fix all files
filesToFix.forEach(fixFile);

=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"console.log(" Ultimate Syntax Fixer.");"console.log("===========================");"const filesToFix = ["pages/api/health.ts"," "components/LoadingSpinner.tsx"," "pages/docs/api-quick-start.tsx"," "pages/docs/api-reference.tsx"," "pages/docs/authentication.tsx"];function fixFile(filePath) { try { console.log(`\n Fixing: ${filePath}`); if (!fs.existsSync(filePath)) {"` console.log(` File not found: ${filePath}`); return} " let content = fs.readFileSync(filePath, "utf8"); let originalContent = content; let fixesApplied = 0; / Fix extra closing braces" content = content.replace(/\}\s*\}\s*$/gm, "}"); if (content !== originalContent) { fixesApplied++;" console.log(" Fixed extra closing braces"); originalContent = content} / Fix malformed template literals in JSX"" content = content.replace(/"([^"]*?)\"\s*"\}/g, ""$1"}"); if (content !== originalContent) { fixesApplied++;" console.log(" Fixed malformed template literals"); originalContent = content} / Fix broken JSX attributes"" content = content.replace(/style=\{\{\s*display: \s*"gridTemplateColumns",\s*"([^"]*)"\s*gap: \s*"([^"]*)"\s*\}\}/g, "style={{ display: \"grid\", gridTemplateColumns: \"$1\", gap: \"$2\" }}"); if (content !== originalContent) { fixesApplied++;" console.log(" Fixed grid style attributes"); originalContent = content} / Fix malformed JSON in template literals"" content = content.replace(/\}\"\s*\}\"\}/g, "}"}"); if (content !== originalContent) { fixesApplied++;" console.log(" Fixed malformed JSON in template literals"); originalContent = content} / Fix broken string concatenation in template literals" content = content.replace(/([^"]*?)\"\s*([^"]*?)\"/g, (match, p1, p2) => {"" if (p1.includes(""") && p2.includes(""")) { return p1 + p2} return match}); if (content !== originalContent) { fixesApplied++;" console.log(" Fixed broken string concatenation"); originalContent = content} / Fix malformed JSX with broken quotes"" content = content.replace(/href=\{\"\$\{([^}]*?)\}\/docs\/authentication\"\s*\/\>\>\s*<\/div\>/g, "href={"$1/docs/authentication"} />"); if (content !== originalContent) { fixesApplied++;" console.log(" Fixed malformed JSX href"); originalContent = content} / Fix broken JSX structure" content = content.replace(/return\s*\(\<\>\<Head\>/g, "return (\n <>\n <Head>"); if (content !== originalContent) { fixesApplied++;" console.log(" Fixed broken JSX structure"); originalContent = content} / Fix malformed template literals with broken quotes"" content = content.replace(/\{"([^"]*?)\"\s*"\}/g, "{"$1"}"); if (content !== originalContent) { fixesApplied++;" console.log(" Fixed malformed template literals with quotes"); originalContent = content} / Fix broken string concatenation in JSX"" content = content.replace(/"([^"]*?)"\s*"([^"]*?)"/g, ""$1$2""); if (content !== originalContent) { fixesApplied++;" console.log(" Fixed broken string concatenation in JSX"); originalContent = content} / Fix malformed object properties"" content = content.replace(/(\w+):\s*"([^"]*?)",\s*(\w+):\s*"([^"]*?)"/g, "$1: \"$2\",\n $3: \"$4\""); if (content !== originalContent) { fixesApplied++;" console.log(" Fixed malformed object properties"); originalContent = content} / Fix broken template literals with line breaks"" content = content.replace(/\{"([^"]*?)\n([^"]*?)\"\}/g, "{"$1$2"}"); if (content !== originalContent) { fixesApplied++;" console.log(" Fixed broken template literals with line breaks"); originalContent = content} if (content !== originalContent) {" fs.writeFileSync(filePath, content, "utf8");" console.log(" Applied ${fixesApplied} fixes to ${filePath}")} else {" console.log(" No fixes needed for ${filePath}")} } catch (error) {"` console.log(" Error fixing ${filePath}: ${error.message}`)}}/ Fix all filesfilesToFix.forEach(fixFile);"console.log("\n Ultimate syntax fixing completed!");""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
// console.log(' Ultimate Syntax Fixer...')
console.log('======')
const filesToFix = ['pages/api/health.ts']
  'components/LoadingSpinner.tsx'
  'pages/docs/api-quick-start.tsx'
  'pages/docs/api-reference.tsx'
  'pages/docs/authentication.tsx'
    let content = fs.readFileSync(filePath, 'utf8')
    content = content.replace(/\}\s*\}\s*$/gm, '}')
      console.log('    Fixed extra closing braces')
    content = content.replace(/"([^"]*?)\"\s*"\}/g, '"$1"
    content = content.replace(/style=\{\{\s*"display": \s*'gridTemplateColumns',\s*'([^']*)'\s*"gap": \s*'([^']*)'\s*\}\}/g, 'style={{ "display": \'grid\', "gridTemplateColumns": \'$1\', "gap"}
    content = content.replace(/\}\"\s*\}\"\}/g, '}')
      if (p1.includes('"') && p2.includes('')
    content = content.replace(/href=\{\"\$\{([^}]*?)\}\/docs\/authentication\"\s*\/\>\>\s*<\/div\>/g, 'href={"$1/docs/authentication"}
    content = content.replace(/\{"([^"]*?)\"\s*"\}/g, '{"$1"}
    content = content.replace(/"([^"]*?)"\s*"([^"]*?)"/g, '"$1$2"
    content = content.replace(/(\w+):\s*'([^']*?)',\s*(\w+):\s*'([^']*?)'/g, '$"1": \'$2\',\n    $"3"
    content = content.replace(/\{"([^"]*?)\n([^"]*?)\"\}/g, '{"$1$2"}
>>>>>>> main
>>>>>>> main
