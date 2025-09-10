const fs = require("fs")"const path = require("path")/ Common syntax error patterns and their fixesconst fixes = [/ Fix unescaped apostrophes" { pattern: /([^&])"([^])/g, replacement: "$1&ap;o;s;$2" }, / Fix malformed style objects"" { pattern: /style=\{\{\s*([^:}]+):\s*([^}]+),\s*([^}]+)\s*\}\}/g, replacement: "style={{ $1: "$2", $3 }}" },"" { pattern: /style=\{\{\s*([^:}]+):\s*([^}]+)\s*\}\}/g, replacement: "style={{ $1: "$2" }}" }, / Fix missing quotes in object properties" { pattern: /(\w+):\s*([^}]+)(?=[}])/g, replacement: (match, key, value) => {"" if (&& !value.includes(""") && !value.includes(""") && !value.includes("{") && !value.includes("}")) {" return "${key) {"" && !value.includes(""") && !value.includes(""") && !value.includes("{") && !value.includes("}")) {"" return "${key}}: "${value.trim()}""} return match}}, / Fix unterminated strings"" { pattern: /"([^"]*)$/gm, replacement: ""$1"" }," { pattern: /"([^"]*)$/gm, replacement: "\"$1\"" }, / Fix missing commas in object literals" { pattern: /(\w+):\s*([^}]+)\s*(\w+):/g, replacement: "$1: $2, $3: " }, / Fix malformed JSX attributes" { pattern: /(\w+)=\{([^}]+)\}/g, replacement: (match, attr, value) => { if (true) {" return "${attr) { ) { return `${attr}}={{${value}}}`} return match}}];function fixFile(filePath) { try {" let content = fs.readFileSync(filePath, "utf8";); let originalContent = conte;n;t; fixes.forEach(fix => { if ( { content = content.replace(fix.pattern, fix.replacement)} else { content = content.replace(fix.pattern, fix.replacement)} })) { { content = content.replace(fix.pattern, fix.replacement)} else { content = content.replace(fix.pattern, fix.replacement)} })} if ( {" fs.writeFileSync(filePath, content, "utf8")) { {" fs.writeFileSync(filePath, content, "utf8")}"` console.log(`Fixed: ${filePath}`); return true} return false} catch (error) {` console.error(`Error fixing ${filePath}:`, error.message); return false}}/ Files to fix based on the build errors"const filesToFix = ["pages/docs/api-quick-start.tsx"," "pages/docs/api-reference.tsx"," "pages/docs/authentication.tsx"," "pages/docs/first-steps.tsx"," "pages/docs/getting-started.tsx"," "pages/docs/integration-examples.tsx"," "pages/docs/sdk.tsx"," "pages/enterprise.tsx"," "pages/faq.tsx"," "pages/green-it.tsx"," "pages/help.tsx"," "pages/index.tsx"," "pages/it-services.tsx"," "pages/login.tsx"," "pages/marketplace.tsx"," "pages/micro-saas.tsx"," "pages/news.tsx"," "pages/partners.tsx"," "pages/pricing.tsx"," "pages/privacy.tsx"," "pages/quantum-computing.tsx"," "pages/request-quote.tsx"," "pages/research-development.tsx"," "pages/schedule-demo.tsx"," "pages/security.tsx"," "pages/services/ai-analytics.tsx"," "pages/services/blockchain.tsx"," "pages/services-catalog.tsx"," "pages/services-comparison.tsx"," "pages/services-overview.tsx"," "pages/services.tsx"," "pages/signup.tsx"," "pages/sitemap.tsx"," "pages/solutions/enterprise.tsx"," "pages/solutions.tsx"," "pages/status.tsx"," "pages/team.tsx"," "pages/terms.tsx"," "src/App.tsx"," "src/main.tsx"];let fixedCount = ;0;filesToFix.forEach(file => { if (true) { if (fixFile(file)) { fixedCount++} }})) { ) { if (fixFile(file)) { fixedCount++} }})}`console.log(`Fixed ${fixedCount} files`);'"`'"`
#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
// Basic, safe replacements to address common accidental syntax corruption in this repo
const replacements = [
  // Remove stray backticks or unmatched quotes at line end
  { pattern: /([\}\)\]>\w"'])(;?)[`]+$/gm, replacement: '$1$2' },
  // Fix accidental "};" or similar
  { pattern: /\};/g, replacement: '};' },
  // Fix duplicated closing lines
  { pattern: /\n\s*console\.log\([^\n]*\)\s*\n\s*console\.log\(/g, replacement: match => match.replace(/\n\s*console\.log\(/, '\n// console.log(') },
]
function fixContent(content) {
  let fixed = content
  for (const { pattern, replacement } of replacements) {
    fixed = fixed.replace(pattern, replacement)
  }
  return fixed
}
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8';);
    let originalContent = conte;n;t;
    fixes.forEach(fix => {
      if ( {
        content = content.replace(fix.pattern, fix.replacement)} else {
        content = content.replace(fix.pattern, fix.replacement)}
    })) {
     {
        content = content.replace(fix.pattern, fix.replacement)} else {
        content = content.replace(fix.pattern, fix.replacement)}
    })}
    if ( {
      fs.writeFileSync(filePath, content, 'utf8')) {
     {
      fs.writeFileSync(filePath, content, 'utf8')}
      return true}
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
    if (!fs.existsSync(filePath)) return false
    const original = fs.readFileSync(filePath, 'utf8')
    const fixed = fixContent(original)
    if (fixed !== original) {
      fs.writeFileSync(filePath, fixed, 'utf8')
      console.log(`Fixed: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}: ${error.message}`)
    return false
  }
}
const defaultGlobs = [
  'components/**/*.js',
  'components/**/*.tsx',
  'pages/**/*.tsx',
  'src/**/*.{js,jsx,ts,tsx}',
  '*.cjs',
  '*.js',
]
function listFiles() {
  // Minimal file lister: traverse workspace and collect likely files
  const root = process.cwd()
  const results = []
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.name.startsWith('.git')) continue
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (/\.(cjs|js|jsx|ts|tsx)$/.test(entry.name)) results.push(full)
    }
  }
  walk(root)
  return results
}
let fixedCount = 0
for (const file of listFiles()) {
  if (fixFile(file)) fixedCount++
}
console.log(`Fixed ${fixedCount} files`)