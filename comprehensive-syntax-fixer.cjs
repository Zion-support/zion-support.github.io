#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Files with critical syntax errors that need immediate fixing
const criticalFiles = [
  'src/components/Footer.tsx',
  'src/components/Header.tsx',
  'src/components/Layout.tsx',
  'src/components/layout/EnhancedFooter.tsx',
  'src/components/layout/EnhancedNavigation.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/layout/Header.tsx',
  'src/components/layout/MainLayout.tsx',
  'src/components/performance/LazyComponent.tsx',
  'src/components/performance/OptimizedImage.tsx',
  'src/components/ui/EnhancedMarketplaceCard.tsx',
  'src/components/ui/InteractiveNavigation.tsx',
  'src/components/ui/NotificationSystem.tsx',
  'src/hooks/useDebounce.ts',
  'src/hooks/useMessageChannelHandler.ts',
  'src/lib/utils.ts',
  'src/utils/messageChannelHandler.ts',
  'src/utils/next-link-shim.tsx',
  'src/utils/sanitizeHtml.ts',
  'src/utils/serviceFinder.ts',
  'src/utils/testing-system.tsx',
  'src/utils/validation.ts',
  'pages/about.tsx',
  'pages/ai-services.tsx',
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/index.tsx',
  'pages/it-services.tsx',
  'pages/micro-saas.tsx',
  'pages/services.tsx',
  'pages/talent.tsx'
];
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  return content
#!/usr/bin/env node;
  log(message) {
  const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);}

  async findProblematicFiles() {
  this.log("🔍 Finding files with syntax issues...");
    const problematicFiles = [];
    const extensions = [".tsx", ".ts", ".jsx", ".js"];
    const walkDir = (dir) => {
  const files = fs.readdirSync(dir);
      for (const file of files) {
  const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") {
  walkDir(filePath);} else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {
  try {
  const content = fs.readFileSync(filePath, "utf8");
            if (this.hasSyntaxIssues(content)) {
  problematicFiles.push(filePath);}
          } catch (error) {
  // File might be binary or have encoding issues;}
        }
      }
    }
    walkDir(this.projectRoot);
    return problematicFiles;}

  hasSyntaxIssues(content) {
  // Check for common syntax issues;
    const issues = [;
  /import \s*[^]+;/g,  // Malformed imports;
      /const: \s*[^=]+=/g,   // Malformed const declarations;
      /interface: \s*[^{]+{/g, // Malformed interface declarations;
      /from\s+"[^"]*";"/g,  // Double quotes in imports;
      /"[^]*,[^"]*"/g,    // Malformed strings;
      /;+/g,               // Multiple semicolons;
      /,+/g,               // Multiple commas;
      /:\s*[^=}]+:/g,      // Malformed type annotations;
    ];
    return issues.some(issue => issue.test(content));}

  fixSyntax(content) {
  let fixed = content;
    // Fix malformed imports;
    fixed = fixed.replace(/import \s*([^]+);/g, "import $1;");
    // Fix malformed const declarations;
    fixed = fixed.replace(/const: \s*([^:]+):\s*([^=]+)\s*=\s*\(\)\s*=>\s*,{/g, "const $1: $2 = () => {");
    fixed = fixed.replace(/const:\s*([^=]+)=/g, "const $1 =");
    // Fix malformed interface declarations;
    fixed = fixed.replace(/interface: \s*([^{]+){/g, "interface $1 {");
    // Fix malformed imports with double quotes;
    fixed = fixed.replace(/from\s+"([^"]*)";"/g, from "$1");
    // Fix malformed strings;
    fixed = fixed.replace(/"([^"]*),([^]*),/g, ""$1$2",");
    fixed = fixed.replace(/([^]*);([^"]*)";/g, "$1$2;");
    // Fix multiple semicolons and commas;
    fixed = fixed.replace(/;+/g, ";");
    fixed = fixed.replace(/,+/g, ",");
    // Fix malformed type annotations;
    fixed = fixed.replace(/:\s*([^=}]+):/g, ": $1");
    // Fix malformed function parameters;
    fixed = fixed.replace(/\(\)\s*=>\s*,{/g, "() => {");
    // Fix malformed array destructuring;
    fixed = fixed.replace(/const: \s*\[([^\]]+)\]/g, "const [$1]");
    // Fix malformed object properties;
    fixed = fixed.replace(/(\w+):\s*([^}]+),/g, "$1: $2,");
    // Fix malformed quotes in strings;
    fixed = fixed.replace(/"([^"]*)([^]*)"([^"]*)/g, "$1$2$3"");
    // Fix malformed React component declarations;
    fixed = fixed.replace(/const\s+(\w+):\s*(\w+):\s*=\s*\(\)\s*=>\s*,{/g, "const $1: $2 = () => {");
    // Fix malformed NextPage types;
    fixed = fixed.replace(/NextPage:\s*=/g, "NextPage =");
    // Fix malformed useState declarations;
    fixed = fixed.replace(/const: \s*\[([^\]]+)\]/g, "const [$1]");
    // Fix malformed string concatenation;
    fixed = fixed.replace(/"([^]*):([^]*)"/g, ""$1$2");
    // Fix malformed object keys;
    fixed = fixed.replace(/(\w+):\s*([^}]+);/g, "$1: $2,");
    // Fix malformed array elements;
    fixed = fixed.replace(/\[([^\]]+);/g, "[$1,");
    // Fix malformed function calls;
    fixed = fixed.replace(/\(([^)]+);/g, "($1,");
    // Fix malformed template literals;
    fixed = fixed.replace(/`([^`]*):([^`]*)`/g, "`$1$2`");
    // Fix malformed JSX attributes;
    fixed = fixed.replace(/className: \s*([^"]*)"/g, "className=$1");
    // Fix malformed export statements;
    fixed = fixed.replace(/export: \s*([^]+);/g, "export $1;");
    // Fix malformed default exports;
    fixed = fixed.replace(/export: \s*default\s*([^]+);/g, "export default $1;");
    // Clean up any remaining malformed syntax;
    fixed = fixed.replace(/;\s*;/g, ";");
    fixed = fixed.replace(/,\s*,/g, ",");
    fixed = fixed.replace(/\s+/g, " ");
    return fixed;}

  async fixFile(filePath) {
  this.log(`🔧 Fixing syntax in: ${filePath}`);
    try {
  const content = fs.readFileSync(filePath, "utf8");
      let fixedContent = content;
      let hasChanges = false;
      // Fix common syntax errors;
      const fixes = [;
  // Fix missing semicolons after import statements;
        {
  pattern: /^import\s+.*from\s+[""][^""]+["]\s*$/gm,;
          replacement: (match) => match.endsWith(";") ? match : match + ";";},;
        // Fix unterminated string literals;
        {
  pattern: /(["])([^""]*?)(\n|$)/g,;
          replacement: (match, quote, content, newline) => {
  if (content.includes("\\" + quote)) return match;
            return quote + content + quote + ";" + newline;}
        },;
        // Fix missing commas in object literals;
        {
  pattern: /(\w+):\s*([^}\n]+)(\n\s*[^}])/g,;
          replacement: "$1: $2,$3";},;
        // Fix missing semicolons after variable declarations;
        {
  pattern: /(const|let|var)\s+\w+\s*=\s*[^]+$/gm,;
          replacement: (match) => match.endsWith(";") ? match : match + ";";},;
        // Fix JSX syntax issues;
        {
  pattern: /<(\w+)([^>]*?)>/g,;
          replacement: (match, tag, attrs) => {
  if (attrs.includes("=") && !attrs.trim().endsWith("/")) {
  return match;}
            return match;}
        }
      ];

      for (const fix of fixes) {
  const newContent = fixedContent.replace(fix.pattern, fix.replacement);
        if (newContent !== fixedContent) {
  fixedContent = newContent;
          hasChanges = true;}
      }

      if (hasChanges) {
  fs.writeFileSync(filePath, fixedContent);}

  log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);}

  getAllFiles(dir, extensions = [".js", ".cjs", ".mjs"]) {
  let files = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {
  const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
  files = files.concat(this.getAllFiles(fullPath, extensions));} else if (extensions.some(ext => item.endsWith(ext))) {
  files.push(fullPath);}
    }