<<<<<<< HEAD
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');



// Get automation interval from environment variable ("default": 15 minutes)
const JSX_TSX_FIX_INTERVAL = parseInt(process.env.JSX_TSX_FIX_INTERVAL) || 900000;

class JSXTSXSyntaxFixer {
  constructor() {
    this.fixesApplied = 0;
    this.fixHistory = []}

  async run() {
    try {
      .toISOString()}`);
      
      this.fixesApplied = 0;
      
      // 1. Fix JSX syntax errors
      await this.fixJSXSyntaxErrors();
      
      // 2. Fix TSX syntax errors
      await this.fixTSXSyntaxErrors();
      
      // 3. Fix React component syntax
      await this.fixReactComponentSyntax();
      
      // 4. Fix JSX attribute syntax
      await this.fixJSXAttributeSyntax();
      
      // 5. Fix JSX closing tags
      await this.fixJSXClosingTags();
      
      // 6. Fix JSX fragment syntax
      await this.fixJSXFragmentSyntax();
      
      // 7. Validate fixes
      await this.validateFixes();
      
      // 8. Generate report
      await this.generateReport();
      
      } catch (error) {
      console.error('❌ JSX/TSX syntax fixer "failed": ', error.message)}
  }

  async fixJSXSyntaxErrors() {
    
    
    const srcDir = path.join(process.cwd(), 'src');
    const files = this.getAllFiles(srcDir, ['.jsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix common JSX syntax errors
        
        // Fix className prop
        content = content.replace(/class\s*=/g, 'className=');
        
        // Fix htmlFor prop
        content = content.replace(/for\s*=/g, 'htmlFor=');
        
        // Fix self-closing tags
        content = content.replace(/<(\w+)\s*([^>]*)\s*\/\s*>/g, '<$1 $2 />');
        
        // Fix JSX comments
        content = content.replace(/<!--([^>]*)-->/g, '{/* $1 */}');
        
        // Fix JSX expressions
        content = content.replace(/\{\s*([^}]+)\s*\}/g, (match, expr) => {
          const trimmed = expr.trim();
          if (trimmed && !trimmed.includes('{') && !trimmed.includes('}')) {
            return `{${trimmed}}`}
          return match});
        
        // Fix JSX spread operator
        content = content.replace(/\.\.\.\s*([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '...$1');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          this.fixesApplied++;
          , '')}`)}
        
      } catch (error) {
        }
    }
  }

  async fixTSXSyntaxErrors() {
    
    
    const srcDir = path.join(process.cwd(), 'src');
    const files = this.getAllFiles(srcDir, ['.tsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix common TSX syntax errors
        
        // Fix TypeScript interfaces in JSX
        content = content.replace(/interface\s+(\w+)Props\s*{([^}]*)}/g, (match, componentName, props) => {
          const lines = props.split('\n');
          const fixedLines = lines.map(line => {
            const trimmed = line.trim();
            if (trimmed && !trimmed.includes(':')) {
              return `  ${trimmed}: any;`}
            return line});
          return `interface ${componentName}Props {\n${fixedLines.join('\n')}\n}`});
        
        // Fix React.FC type annotations
        content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\([^)]*\)\s*=>\s*{/g, 'const $"1": React.FC = (props: any) => {');
        
        // Fix event handler types
        content = content.replace(/onClick\s*=\s*\([^)]*\)\s*=>\s*{/g, 'onClick = ("e": React.MouseEvent) => {');
        content = content.replace(/onChange\s*=\s*\([^)]*\)\s*=>\s*{/g, 'onChange = ("e": React.ChangeEvent<HTMLInputElement>) => {');
        content = content.replace(/onSubmit\s*=\s*\([^)]*\)\s*=>\s*{/g, 'onSubmit = ("e": React.FormEvent) => {');
        
        // Fix useState type annotations
        content = content.replace(/useState\s*\(\s*([^)]+)\s*\)/g, (match, value) => {
          if (!value.includes('<')) {
            return `useState<any>(${value})`}
          return match});
        
        // Fix useEffect type annotations
        content = content.replace(/useEffect\s*\(\s*\(\)\s*=>\s*{/g, 'useEffect(() => {');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          this.fixesApplied++;
          , '')}`)}
        
      } catch (error) {
        }
    }
  }

  async fixReactComponentSyntax() {
    
    
    const srcDir = path.join(process.cwd(), 'src');
    const files = this.getAllFiles(srcDir, ['.jsx', '.tsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix React component syntax
        
        // Fix function component declarations
        content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*{/g, 'function $1("props": any) {');
        
        // Fix arrow function components
        content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g, 'const $1 = ("props": any) => {');
        
        // Fix JSX return statements
        content = content.replace(/return\s+\(([^)]+)\);/g, 'return ($1);');
        
        // Fix React.Fragment usage
        content = content.replace(/<React\.Fragment>/g, '<>');
        content = content.replace(/<\/React\.Fragment>/g, '</>');
        
        // Fix component export syntax
        content = content.replace(/export\s+default\s+(\w+);/g, 'export default $1;');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          this.fixesApplied++;
          , '')}`)}
        
      } catch (error) {
        }
    }
  }

  async fixJSXAttributeSyntax() {
    
    
    const srcDir = path.join(process.cwd(), 'src');
    const files = this.getAllFiles(srcDir, ['.jsx', '.tsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix JSX attribute syntax
        
        // Fix boolean attributes
        content = content.replace(/disabled\s*=\s*{true}/g, 'disabled');
        content = content.replace(/checked\s*=\s*{true}/g, 'checked');
        content = content.replace(/readOnly\s*=\s*{true}/g, 'readOnly');
        content = content.replace(/required\s*=\s*{true}/g, 'required');
        
        // Fix string attributes
        content = content.replace(/className\s*=\s*{['"]([^'"]+)['"]}/g, 'className="$1"');
        content = content.replace(/id\s*=\s*{['"]([^'"]+)['"]}/g, 'id="$1"');
        content = content.replace(/name\s*=\s*{['"]([^'"]+)['"]}/g, 'name="$1"');
        content = content.replace(/type\s*=\s*{['"]([^'"]+)['"]}/g, 'type="$1"');
        
        // Fix style attributes
        content = content.replace(/style\s*=\s*{([^}]+)}/g, (match, styleObj) => {
          // Convert object style to string style
          const stylePairs = styleObj.split(',').map(pair => {
            const [key, value] = pair.split(':').map(s => s.trim());
            if (key && value) {
              return `${key}: ${value}`}
            return null}).filter(Boolean);
          
          if (stylePairs.length > 0) {
            return `style="{{${stylePairs.join('; ')}}}"`}
          return match});
        
        // Fix event handler attributes
        content = content.replace(/onClick\s*=\s*{([^}]+)}/g, 'onClick={$1}');
        content = content.replace(/onChange\s*=\s*{([^}]+)}/g, 'onChange={$1}');
        content = content.replace(/onSubmit\s*=\s*{([^}]+)}/g, 'onSubmit={$1}');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          this.fixesApplied++;
          , '')}`)}
        
      } catch (error) {
        }
    }
  }

  async fixJSXClosingTags() {
    
    
    const srcDir = path.join(process.cwd(), 'src');
    const files = this.getAllFiles(srcDir, ['.jsx', '.tsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix JSX closing tags
        
        // Fix self-closing tags that should be closed
        content = content.replace(/<(\w+)\s*([^>]*)\s*\/\s*>/g, (match, tagName, attrs) => {
          const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr'];
          if (selfClosingTags.includes(tagName.toLowerCase())) {
            return `<${tagName} ${attrs} />`}
          return match});
        
        // Fix missing closing tags
        const lines = content.split('\n');
        const fixedLines = [];
        const openTags = [];
        
        for (const line of lines) {
          fixedLines.push(line);
          
          // Find opening tags
          const openMatches = line.match(/<(\w+)(?![^>]*\/>)/g);
          if (openMatches) {
            openMatches.forEach(match => {
              const tagName = match.replace(/[<>]/g, '');
              if (!['img', 'input', 'br', 'hr', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr'].includes(tagName.toLowerCase())) {
                openTags.push(tagName)}
            })}
          
          // Find closing tags
          const closeMatches = line.match(/<\/(\w+)>/g);
          if (closeMatches) {
            closeMatches.forEach(match => {
              const tagName = match.replace(/[<>\/]/g, '');
              const index = openTags.lastIndexOf(tagName);
              if (index !== -1) {
                openTags.splice(index, 1)}
            })}
        }
        
        // Add missing closing tags
        if (openTags.length > 0) {
          const missingCloses = openTags.reverse().map(tag => `</${tag}>`).join('\n');
          fixedLines.push(missingCloses)}
        
        const newContent = fixedLines.join('\n');
        if (newContent !== originalContent) {
          fs.writeFileSync(file, newContent);
          this.fixesApplied++;
          , '')}`)}
        
      } catch (error) {
        }
    }
  }

  async fixJSXFragmentSyntax() {
    
    
    const srcDir = path.join(process.cwd(), 'src');
    const files = this.getAllFiles(srcDir, ['.jsx', '.tsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix JSX fragment syntax
        
        // Replace React.Fragment with shorthand
        content = content.replace(/<React\.Fragment>/g, '<>');
        content = content.replace(/<\/React\.Fragment>/g, '</>');
        
        // Fix fragment imports
        if (content.includes('<>') || content.includes('</>')) {
          if (!content.includes("import React") && !content.includes("import { Fragment }")) {
            content = "import React from 'react';\n" + content}
        }
        
        // Fix fragment usage in return statements
        content = content.replace(/return\s*\(\s*<>\s*([^<]+)\s*<\/>\s*\);/g, 'return ($1);');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          this.fixesApplied++;
          , '')}`)}
        
      } catch (error) {
        }
    }
  }

  async validateFixes() {
    
    
    try {
      // Run TypeScript check for TSX files
      execSync('npm run type-check', { "stdio": 'pipe' });
      } catch (error) {
      }
  }

  async generateReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "fixesApplied": this.fixesApplied,
      "summary": 'JSX/TSX syntax fixer completed',
      "status": 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'jsx-tsx-syntax-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    
    
    // Add to fix history
    this.fixHistory.push({
      "timestamp": new Date().toISOString(),
      "fixesApplied": this.fixesApplied
    });
    
    // Keep only last 50 entries
    if (this.fixHistory.length > 50) {
      this.fixHistory = this.fixHistory.slice(-50)}
  }

  getAllFiles(dir, extensions) {
    const files = [];
    
    function traverse(currentDir) {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath)}
      }
    }
    
    traverse(dir);
    return files}
}

// Main execution
async function main() {
  const fixer = new JSXTSXSyntaxFixer();
  
  // Run initial fix
  await fixer.run();
  
  // Set up continuous fixing
  setInterval(async () => {
    await fixer.run()}, JSX_TSX_FIX_INTERVAL);
  
  }

// Handle graceful shutdown
process.on('SIGINT', () => {
  
  process.exit(0)});

process.on('SIGTERM', () => {
  
  process.exit(0)});

// Start the fixer
main().catch(error => {
  console.error('❌ JSX/TSX syntax fixer failed to "start": ', error.message);
  process.exit(1)});
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");"console.log(" Starting JSX/TSX syntax fixer.");/ Get automation interval from environment variable (default: 15 minutes)const JSX_TSX_FIX_INTERVAL = parseInt(process.env.JSX_TSX_FIX_INTERVAL) | 900000;class JSXTSXSyntaxFixer { constructor() { this.fixesApplied = 0; this.fixHistory = []} async run() { try { console.log(` Running JSX/TSX syntax fixer at ${new Date().toISOString()}`); this.fixesApplied = 0; / 1. Fix JSX syntax errors await this.fixJSXSyntaxErrors(); / 2. Fix TSX syntax errors await this.fixTSXSyntaxErrors(); / 3. Fix React component syntax await this.fixReactComponentSyntax(); / 4. Fix JSX attribute syntax await this.fixJSXAttributeSyntax(); / 5. Fix JSX closing tags await this.fixJSXClosingTags(); / 6. Fix JSX fragment syntax await this.fixJSXFragmentSyntax(); / 7. Validate fixes await this.validateFixes(); / 8. Generate report await this.generateReport();` console.log(` JSX/TSX syntax fixer completed. Applied ${this.fixesApplied} fixes.`)} catch (error) {"" console.error(" JSX/TSX syntax fixer failed: ", error.message)} } async fixJSXSyntaxErrors() {" console.log(" Fixing JSX syntax errors."); " const srcDir = path.join(process.cwd(), "src");" const files = this.getAllFiles(srcDir, [".jsx"]); for (const file of files) { try {" let content = fs.readFileSync(file, "utf8"); let originalContent = content; / Fix common JSX syntax errors / Fix className prop" content = content.replace(/class\s*=/g, "className="); / Fix htmlFor prop" content = content.replace(/for\s*=/g, "htmlFor="); / Fix self-closing tags" content = content.replace(/<(\w+)\s*([^>]*)\s*\/\s*>/g, "<$1 $2 />"); / Fix JSX comments" content = content.replace(/<!--([^>]*)-->/g, "{}"); / Fix JSX expressions content = content.replace(/\{\s*([^}]+)\s*\}/g, (match, expr) => { const trimmed = expr.trim();" if (trimmed && !trimmed.includes("{") && !trimmed.includes("}")) {` return `{${trimmed}}`} return match}); / Fix JSX spread operator" content = content.replace(/\.\.\.\s*([a-zA-Z_$][a-zA-Z0-9_$]*)/g, ".$1"); if (content !== originalContent) { fs.writeFileSync(file, content); this.fixesApplied++;"` console.log(` Fixed JSX syntax errors in ${file.replace(process.cwd(), "")}`)} } catch (error) {` console.log(` Failed to fix JSX syntax errors in ${file}: ${error.message}`)} } } async fixTSXSyntaxErrors() {" console.log(" Fixing TSX syntax errors."); " const srcDir = path.join(process.cwd(), "src");" const files = this.getAllFiles(srcDir, [".tsx"]); for (const file of files) { try {" let content = fs.readFileSync(file, "utf8"); let originalContent = content; / Fix common TSX syntax errors / Fix TypeScript interfaces in JSX content = content.replace(/interface\s+(\w+)Props\s*{([^}]*)}/g, (match, componentName, props) => {" const lines = props.split("\n"); const fixedLines = lines.map(line => { const trimmed = line.trim();" if (trimmed && !trimmed.includes(":")) {` return ` ${trimmed}: any;`} return line});"` return `interface ${componentName}Props {\n${fixedLines.join("\n")}\n}`}); / Fix React.FC type annotations"" content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\([^)]*\)\s*=>\s*{/g, "const $1: React.FC = (props: any) => {"); / Fix event handler types"" content = content.replace(/onClick\s*=\s*\([^)]*\)\s*=>\s*{/g, "onClick = (e: React.MouseEvent) => {");"" content = content.replace(/onChange\s*=\s*\([^)]*\)\s*=>\s*{/g, "onChange = (e: React.ChangeEvent<HTMLInputElement>) => {");"" content = content.replace(/onSubmit\s*=\s*\([^)]*\)\s*=>\s*{/g, "onSubmit = (e: React.FormEvent) => {"); / Fix useState type annotations content = content.replace(/useState\s*\(\s*([^)]+)\s*\)/g, (match, value) => {" if (!value.includes("<")) {` return `useState<any>(${value})`} return match}); / Fix useEffect type annotations" content = content.replace(/useEffect\s*\(\s*\(\)\s*=>\s*{/g, "useEffect(() => {"); if (content !== originalContent) { fs.writeFileSync(file, content); this.fixesApplied++;"` console.log(` Fixed TSX syntax errors in ${file.replace(process.cwd(), "")}`)} } catch (error) {` console.log(` Failed to fix TSX syntax errors in ${file}: ${error.message}`)} } } async fixReactComponentSyntax() {" console.log(" Fixing React component syntax."); " const srcDir = path.join(process.cwd(), "src");" const files = this.getAllFiles(srcDir, [".jsx", ".tsx"]); for (const file of files) { try {" let content = fs.readFileSync(file, "utf8"); let originalContent = content; / Fix React component syntax / Fix function component declarations"" content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*{/g, "function $1(props: any) {"); / Fix arrow function components"" content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g, "const $1 = (props: any) => {"); / Fix JSX return statements" content = content.replace(/return\s+\(([^)]+)\);/g, "return ($1);"); / Fix React.Fragment usage" content = content.replace(/<React\.Fragment>/g, "<>");" content = content.replace(/<\/React\.Fragment>/g, "</>"); / Fix component export syntax" content = content.replace(/export\s+default\s+(\w+);/g, "export default $1;"); if (content !== originalContent) { fs.writeFileSync(file, content); this.fixesApplied++;"` console.log(` Fixed React component syntax in ${file.replace(process.cwd(), "")}`)} } catch (error) {` console.log(` Failed to fix React component syntax in ${file}: ${error.message}`)} } } async fixJSXAttributeSyntax() {" console.log(" Fixing JSX attribute syntax."); " const srcDir = path.join(process.cwd(), "src");" const files = this.getAllFiles(srcDir, [".jsx", ".tsx"]); for (const file of files) { try {" let content = fs.readFileSync(file, "utf8"); let originalContent = content; / Fix JSX attribute syntax / Fix boolean attributes" content = content.replace(/disabled\s*=\s*{true}/g, "disabled");" content = content.replace(/checked\s*=\s*{true}/g, "checked");" content = content.replace(/readOnly\s*=\s*{true}/g, "readOnly");" content = content.replace(/required\s*=\s*{true}/g, "required"); / Fix string attributes"" content = content.replace(/className\s*=\s*{[""]([^""]+)[""]}/g, "className="$1"");"" content = content.replace(/id\s*=\s*{[""]([^""]+)[""]}/g, "id="$1"");"" content = content.replace(/name\s*=\s*{[""]([^""]+)[""]}/g, "name="$1"");"" content = content.replace(/type\s*=\s*{[""]([^""]+)[""]}/g, "type="$1""); / Fix style attributes content = content.replace(/style\s*=\s*{([^}]+)}/g, (match, styleObj) => { / Convert object style to string style" const stylePairs = styleObj.split(",").map(pair => {" const [key, value] = pair.split(":").map(s => s.trim()); if (key && value) {` return `${key}: ${value}`} return null}).filter(Boolean); if (stylePairs.length > 0) {""` return `style="{{${stylePairs.join("; ")}}}"`} return match}); / Fix event handler attributes" content = content.replace(/onClick\s*=\s*{([^}]+)}/g, "onClick={$1}");" content = content.replace(/onChange\s*=\s*{([^}]+)}/g, "onChange={$1}");" content = content.replace(/onSubmit\s*=\s*{([^}]+)}/g, "onSubmit={$1}"); if (content !== originalContent) { fs.writeFileSync(file, content); this.fixesApplied++;"` console.log(` Fixed JSX attribute syntax in ${file.replace(process.cwd(), "")}`)} } catch (error) {` console.log(` Failed to fix JSX attribute syntax in ${file}: ${error.message}`)} } } async fixJSXClosingTags() {" console.log(" Fixing JSX closing tags."); " const srcDir = path.join(process.cwd(), "src");" const files = this.getAllFiles(srcDir, [".jsx", ".tsx"]); for (const file of files) { try {" let content = fs.readFileSync(file, "utf8"); let originalContent = content; / Fix JSX closing tags / Fix self-closing tags that should be closed content = content.replace(/<(\w+)\s*([^>]*)\s*\/\s*>/g, (match, tagName, attrs) => {" const selfClosingTags = ["img", "input", "br", "hr", "meta", "link", "area", "base", "col", "embed", "source", "track", "wbr"]; if (selfClosingTags.includes(tagName.toLowerCase())) {` return `<${tagName} ${attrs} />`} return match}); / Fix missing closing tags" const lines = content.split("\n"); const fixedLines = []; const openTags = []; for (const line of lines) { fixedLines.push(line); / Find opening tags const openMatches = line.match(/<(\w+)(?![^>]*\/>)/g); if (openMatches) { openMatches.forEach(match => {" const tagName = match.replace(/[<>]/g, "");" if (!["img", "input", "br", "hr", "meta", "link", "area", "base", "col", "embed", "source", "track", "wbr"].includes(tagName.toLowerCase())) { openTags.push(tagName)} })} / Find closing tags const closeMatches = line.match(/<\/(\w+)>/g); if (closeMatches) { closeMatches.forEach(match => {" const tagName = match.replace(/[<>\/]/g, ""); const index = openTags.lastIndexOf(tagName); if (index !== -1) { openTags.splice(index, 1)} })} } / Add missing closing tags if (openTags.length > 0) {"` const missingCloses = openTags.reverse().map(tag => `</${tag}>`).join("\n"); fixedLines.push(missingCloses)} " const newContent = fixedLines.join("\n"); if (newContent !== originalContent) { fs.writeFileSync(file, newContent); this.fixesApplied++;"` console.log(` Fixed JSX closing tags in ${file.replace(process.cwd(), "")}`)} } catch (error) {` console.log(` Failed to fix JSX closing tags in ${file}: ${error.message}`)} } } async fixJSXFragmentSyntax() {" console.log(" Fixing JSX fragment syntax."); " const srcDir = path.join(process.cwd(), "src");" const files = this.getAllFiles(srcDir, [".jsx", ".tsx"]); for (const file of files) { try {" let content = fs.readFileSync(file, "utf8"); let originalContent = content; / Fix JSX fragment syntax / Replace React.Fragment with shorthand" content = content.replace(/<React\.Fragment>/g, "<>");" content = content.replace(/<\/React\.Fragment>/g, "</>"); / Fix fragment imports" if (content.includes("<>") | content.includes("</>")) {" if (!content.includes("import React") && !content.includes("import { Fragment }")) {"" content = "import React from "react";\n" + content} } / Fix fragment usage in return statements" content = content.replace(/return\s*\(\s*<>\s*([^<]+)\s*<\/>\s*\);/g, "return ($1);"); if (content !== originalContent) { fs.writeFileSync(file, content); this.fixesApplied++;"` console.log(` Fixed JSX fragment syntax in ${file.replace(process.cwd(), "")}`)} } catch (error) {` console.log(` Failed to fix JSX fragment syntax in ${file}: ${error.message}`)} } } async validateFixes() {" console.log(" Validating JSX/TSX syntax fixes."); try { / Run TypeScript check for TSX files"" execSync("npm run type-check", { stdio: "pipe" });" console.log(" JSX/TSX syntax validation successful")} catch (error) {" console.log(" JSX/TSX syntax validation had issues, but fixes were applied")} } async generateReport() { const report = {" timestamp: new Date().toISOString()," fixesApplied: this.fixesApplied,"" summary: "JSX/TSX syntax fixer completed","" status: "completed" }; " const reportPath = path.join(process.cwd(), "jsx-tsx-syntax-fixer-report.json"); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));` console.log(` JSX/TSX syntax fixer report saved to ${reportPath}`); / Add to fix history this.fixHistory.push({" timestamp: new Date().toISOString()," fixesApplied: this.fixesApplied }); / Keep only last 50 entries if (this.fixHistory.length > 50) { this.fixHistory = this.fixHistory.slice(-50)} } getAllFiles(dir, extensions) { const files = []; function traverse(currentDir) { const items = fs.readdirSync(currentDir); for (const item of items) { const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { traverse(fullPath)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } traverse(dir); return files}}/ Main executionasync function main() { const fixer = new JSXTSXSyntaxFixer(); / Run initial fix await fixer.run(); / Set up continuous fixing setInterval(async () => { await fixer.run()}, JSX_TSX_FIX_INTERVAL);` console.log(` JSX/TSX syntax fixer running with ${JSX_TSX_FIX_INTERVAL / 1000}s intervals`)}/ Handle graceful shutdown"process.on("SIGINT", () => {" console.log(" JSX/TSX syntax fixer shutting down."); process.exit(0)});"process.on("SIGTERM", () => {" console.log(" JSX/TSX syntax fixer shutting down."); process.exit(0)});/ Start the fixermain().catch(error => {"" console.error(" JSX/TSX syntax fixer failed to start: ", error.message); process.exit(1)});""`"`
=======
#!/usr/bin/env node;
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
console.log(' Starting JSX/TSX syntax fixer...')
      console.error(' JSX/TSX syntax fixer "failed")
        content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\([^)]*\)\s*=>\s*{/g, 'const $"1"}
        content = content.replace(/onClick\s*=\s*\([^)]*\)\s*=>\s*{/g, 'onClick = ("e"})
        content = content.replace(/onChange\s*=\s*\([^)]*\)\s*=>\s*{/g, 'onChange = ("e"})
        content = content.replace(/onSubmit\s*=\s*\([^)]*\)\s*=>\s*{/g, 'onSubmit = ("e"})
        content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*{/g, 'function $1("props"})
        content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g, 'const $1 = ("props"})
        content = content.replace(/className\s*=\s*{['"]([^'"]+)['"]}/g, 'className="$1"
        content = content.replace(/id\s*=\s*{['"]([^'"]+)['"]}/g, 'id="$1"
        content = content.replace(/name\s*=\s*{['"]([^'"]+)['"]}/g, 'name="$1"
        content = content.replace(/type\s*=\s*{['"]([^'"]+)['"]}/g, 'type="$1"
            return `style=``
            content = "
      execSync('npm run type-check', { "stdio"})
      "summary"
      "status"
  console.error(' JSX/TSX syntax fixer failed to "start")
>>>>>>> main
>>>>>>> main
