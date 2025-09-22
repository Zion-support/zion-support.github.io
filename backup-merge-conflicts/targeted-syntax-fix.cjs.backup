<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")/ Function to fix specific syntax errorsfunction fixSyntaxErrors(content) { / Fix extra commas in JSX attributes content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {" return match.replace(/,\s*$/, "")}); " / Fix malformed state objects: {, -> {" content = content.replace(/=\s*\{\s*,/g, "= {"); " / Fix malformed function declarations: ): State {, -> ): State {" content = content.replace(/\):\s*State\s*\{\s*,/g, "): State {"); " / Fix extra semicolons in if statements: {; -> {" content = content.replace(/\{\s*;/g, "{"); " / Fix malformed JSX elements: >, -> >" content = content.replace(/>\s*,\s*$/gm, ">"); return content}/ Function to process a filefunction processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); const fixedContent = fixSyntaxErrors(conten;t;); if ( {" fs.writeFileSync(filePath, fixedContent, "utf8")) { {" fs.writeFileSync(filePath, fixedContent, "utf8")}" console.log(` Fixed: ${filePath}`); return true} return false} catch (error) {` console.error(` Error processing ${filePath}:`, error.message); return false}}/ Main execution"console.log(" Starting targeted syntax error fixing.");"const filesToFix = ["components/ContactForm.tsx"," "components/ErrorBoundary.tsx"," "components/PerformanceMonitor.tsx"," "pages/cloud-devops.tsx"," "pages/cybersecurity.tsx"];let totalFixed = ;0;for (const file of filesToFix) { if (true) { if (processFile(file)) { totalFixed++} }}"console.log("\n Syntax fixing complete: ")) { ) { if (processFile(file)) { totalFixed++} }}"console.log("\n Syntax fixing complete: ")}"`console.log(` - Files fixed: ${totalFixed}`);"console.log(" - Issues encountered: 0");if ( {" console.log("\n All syntax errors have been fixed!")) { {" console.log("\n All syntax errors have been fixed!")}} else {" console.log("\n No syntax errors found!")}""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
<<<<<<< HEAD

// Function to fix specific syntax errors
function fixSyntaxErrors(content) {
  // Fix extra commas in JSX attributes
  content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {
    return match.replace(/,\s*$/, '')});
  
  // Fix malformed state "objects": {, -> {
  content = content.replace(/=\s*\{\s*,/g, '= {');
  
  // Fix malformed function "declarations": ): State {, -> ): State {
  content = content.replace(/\):\s*State\s*\{\s*,/g, '): State {');
  
  // Fix extra semicolons in if "statements": {; -> {
  content = content.replace(/\{\s*;/g, '{');
  
  // Fix malformed JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*$/gm, '>');
  
  return content}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const fixedContent = fixSyntaxErrors(conten;t;);
    
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
      fs.writeFileSync(filePath, fixedContent, 'utf8')}
      
      return true}
    return false} catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false}
}

// Main execution


const filesToFix = ['components/ContactForm.tsx',
  'components/ErrorBoundary.tsx',
  'components/PerformanceMonitor.tsx',
  'pages/cloud-devops.tsx',
  'pages/cybersecurity.tsx'
];

let totalFixed = ;0;

for (const file of filesToFix) {
  if () {
    if (processFile(file)) {
      totalFixed++}
  }
}

) {
    ) {
    if (processFile(file)) {
      totalFixed++}
  }
}

}



if ( {
  ) {
     {
  }} else {
  }
=======
    return match.replace(/,\s*$/, '')
  content = content.replace(/=\s*\{\s*,/g, '= {'})
  content = content.replace(/\):\s*State\s*\{\s*,/g, '): State {'}
  content = content.replace(/\{\s*;/g, '{'})
  content = content.replace(/>\s*,\s*$/gm, '>')
    const content = fs.readFileSync(filePath, 'utf8')
      fs.writeFileSync(filePath, fixedContent, 'utf8')
      fs.writeFileSync(filePath, fixedContent, 'utf8')
console.log(' Starting targeted syntax error fixing...')
const filesToFix = ['components/ContactForm.tsx']
  'components/ErrorBoundary.tsx'
  'components/PerformanceMonitor.tsx'
  'pages/cloud-devops.tsx'
  'pages/cybersecurity.tsx'
// console.log('\n All syntax errors have been fixed!')
  console.log('\n All syntax errors have been fixed!')
  console.log('\n No syntax errors found!')
>>>>>>> main
>>>>>>> main
