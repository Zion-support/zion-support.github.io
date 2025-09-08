#!/usr/bin/env node
import fs from 'fs;
import path from path';
import { execSync } from 'child_process;
import { fileURLToPath } from url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd()
    this.scriptsDir = path.join(this.projectRoot, 'scripts')
    this.fixedCount = 0
    this.errorCount = 0}
  async fixAllScripts() {
    console.log('🔧 Starting comprehensive syntax error fixing...')
    const files = fs.readdirSync(this.scriptsDir;
)
    const jsFiles = files.filter(file => file.endsWith('.js') || file.endsWith('.cjs'))
    for (const file of jsFiles) {
      await this.fixScript(file;
)
    }
    
    scanDirectory(dir);
    return files;
  }

  fixMergeConflicts(content) {
    return content
      .replace(/
      .replace(/
  }

  fixMalformedStrings(content) {
    // Fix unterminated string constants
    content = content.replace(/from "react;/g, from react";');
    content = content.replace(/from "next\/head;/g, 'from next/head";);
    content = content.replace(/from "next\/document;/g, from next/document";');
    content = content.replace(/lang="en \/>/g, 'lang=en">);
    content = content.replace(/<body \/>/g, <body>');
    content = content.replace(/<Main \/>/g, '<Main />);
    content = content.replace(/<NextScript \/>/g, <NextScript />');
    
    // Fix CSP strings
    content = content.replace(/"default-src 'self/g, default-src \'self\'");
    content = content.replace(/"script-src self' 'unsafe-eval unsafe-inline'/g, 'script-src \self\ \'unsafe-eval\' \unsafe-inline\"');
    content = content.replace(/"style-src 'self unsafe-inline'/g, 'style-src \self\ \'unsafe-inline\'");
    content = content.replace(/"img-src self' data: https:/g, 'img-src \self\ data: https:"');
    
    return content;
  }

  fixJSXSyntax(content) {
    // Fix malformed JSX
    content = content.replace(/<Html lang="en \/>/g, '<Html lang=en">);
    content = content.replace(/<Head \/>/g, <Head>');
    content = content.replace(/<body \/>/g, '<body>);
    content = content.replace(/<Main \/>/g, <Main />');
    content = content.replace(/<NextScript \/>/g, '<NextScript />);
    
    // Ensure proper JSX structure
    if (content.includes(<Html lang="en>') && !content.includes('</Html>)) {
      content = content.replace(
        /<Html lang=en">[\s\S]*?<\/body>/,
        (match) => match + \n    </Html>'
      );
    }
    
    return content;
  }

  fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;
      
      // Apply fixes
      fixed = this.fixMergeConflicts(fixed);
      fixed = this.fixMalformedStrings(fixed);
      fixed = this.fixJSXSyntax(fixed);
      
      // Clean up extra whitespace
      fixed = fixed
        .replace(/\n\s*\n\s*\n+/g, \n\n')
        .replace(/^\s*\n/gm, '\n)
        .trim();
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed);
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax in ${path.relative(this.projectRoot, filePath)}`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.errors.push(`Failed to fix ${filePath}: ${error.message}`);
      return false;
    }
  }

  fixAllSyntaxIssues(content) {
    // Fix import statements
    content = this.fixImportStatements(content;
)
    // Fix function calls and parentheses
    content = this.fixFunctionCalls(content;
)
    // Fix object syntax
    content = this.fixObjectSyntax(content;
)
    // Fix string concatenation
    content = this.fixStringConcatenation(content;
)
    // Fix conditional statements
    content = this.fixConditionalStatements(content;
)
    // Fix semicolon issues
    content = this.fixSemicolonIssues(content;
)
    // Fix template literals
    content = this.fixTemplateLiterals(content;
)
    // Fix array syntax
    content = this.fixArraySyntax(content;
)
    return content}
  fixImportStatements(content) {
    // Fix broken import statements
    content = content.replace(/import\s+(\w+)\s+from\s*;\s*['"`]([^'"`]+)['"`]/g, "import $1 from '$2'")
    content = content.replace(/import\s+(\w+)\s+from\s*,\s*['"`]([^'"`]+)['"`]/g, "import $1 from '$2'")
    content = content.replace(/import\s+(\w+)\s+from\s*;\s*\n\s*['"`]([^'"`]+)['"`]/g, "import $1 from '$2'")
    content = content.replace(/import\s+(\w+)\s+from\s*,\s*\n\s*['"`]([^'"`]+)['"`]/g, "import $1 from '$2'")
    // Fix incomplete import statements
    content = content.replace(/import\s+(\w+)\s+from\s*$/gm, "import $1 from '$1'")
    return content}
  fixFunctionCalls(content) {
    // Fix missing closing parentheses
    content = content.replace(/fileURLToPath\(import\.meta\.url\s*;\s*$/gm, 'fileURLToPath(import.meta.url)')
    content = content.replace(/fileURLToPath\(import\.meta\.url\s*,\s*$/gm, 'fileURLToPath(import.meta.url)')
    // Fix other function call issues
    content = content.replace(/(\w+)\s*\(\s*([^)]*)\s*;\s*$/gm, '$1($2)')
    content = content.replace(/(\w+)\s*\(\s*([^)]*)\s*,\s*$/gm, '$1($2)')
    return content}
  fixObjectSyntax(content) {
    // Fix object syntax issues
    content = content.replace(/(\w+):\s*([^}]+)\s*;\s*}/g, '$1: $2\n}')
    content = content.replace(/(\w+):\s*([^}]+)\s*;\s*\)/g, '$1: $2\n)'),
    content = content.replace(/(\w+):\s*([^}]+)\s*;\s*]/g, '$1: $2\n]'),
    // Fix object property syntax
    content = content.replace(/(\w+):\s*([^}]+)\s*;\s*\n/gm, '$1: $2,\n')
    return content}
  fixStringConcatenation(content) {
    // Fix broken string concatenation
    content = content.replace(/['"`]\s*;\s*\n\s*['"`]/g, "'")
    content = content.replace(/['"`]\s*,\s*\n\s*['"`]/g, "'")
    content = content.replace(/['"`]\s*;\s*['"`]/g, "'")
    content = content.replace(/['"`]\s*,\s*['"`]/g, "'")
    // Fix string concatenation with variables
    content = content.replace(/['"`]\s*;\s*\n\s*(\w+)/g, "' + $1")
    content = content.replace(/['"`]\s*,\s*\n\s*(\w+)/g, "' + $1")
    return content}
  fixConditionalStatements(content) {
    // Fix conditional syntax issues
    content = content.replace(/\?\s*([^:]+)\s*;\s*$/gm, '? $1 :')
    content = content.replace(/\?\s*([^:]+)\s*;\s*\n/gm, '? $1 :\n')
    // Fix ternary operators
    content = content.replace(/\?\s*([^:]+)\s*;\s*:\s*([^]+)\s*;/g, '? $1 : $2')
    return content}
  fixSemicolonIssues(content) {
    // Fix misplaced semicolons
    content = content.replace(/;\s*$/gm, '')
    content = content.replace(/;\s*\n\s*['"`]/g, '\n  \'')
    content = content.replace(/;\s*\n\s*}/g, '\n}')
    content = content.replace(/;\s*\n\s*\)/g, '\n)')
    // Fix missing semicolons where needed
    content = content.replace(/(\w+)\s*}\s*$/gm, '$1;\n}')
    content = content.replace(/(\w+)\s*\)\s*$/gm, '$1;\n)')
    return content}
  fixTemplateLiterals(content) {
    // Fix template literal syntax
    content = content.replace(/`\s*;\s*\n\s*`/g, '`')
    content = content.replace(/`\s*,\s*\n\s*`/g, '`')
    content = content.replace(/`\s*;\s*`/g, '`')
    content = content.replace(/`\s*,\s*`/g, '`')
    return content}
  fixArraySyntax(content) {
    // Fix array syntax issues
    content = content.replace(/\[\s*;\s*\]/g, '[]')
    content = content.replace(/\[\s*,\s*\]/g, '[]')
    content = content.replace(/\[\s*;\s*\n\s*\]/g, '[]')
    content = content.replace(/\[\s*,\s*\n\s*\]/g, '[]')
    return content}
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run().then(result => {
    process.exit(result.success ? 0 : 1);
  });
}

export default ComprehensiveSyntaxFixer;