#!/usr/bin/env node
const fs = require("$1");
const path = require("path")
class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd()
    this.fixedFiles = []
    this.errors = [],
}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`),
}

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false,
}

      let content = fs.readFileSync(filePath, "utf8")
      let originalContent = content
      let changes = 0
      // Fix merge conflicts
      const mergeConflictFixes = [
        // Remove merge conflict markers
        {
          pattern: /[\s\S]*?[\s\S]*?          replacement: "",
},
        {
          pattern: /[\s\S]*?          replacement: "",
},
        {
          pattern: /[\s\S]*?          replacement: "",
},
        {
          pattern: /\n/g,
          replacement: "",
},
        {
          pattern: /\n/g,
          replacement: "",
},
        {
          pattern: /          replacement: "",
}
      ]
      // Fix syntax errors
      const syntaxFixes = [
        // Fix semicolons in object literals
        {
          pattern: /(\w+):\s*([^,}]+);\s*([,}])/g,
          replacement: "$1: $2$3",
},
        // Fix semicolons in arrays
        {
          pattern: /(\w+)\s*;\s*([,}\]])/g,
          replacement: "$1$2",
},
        // Fix broken template literals
        {
          pattern: /`([^`]*)\$\{([^}]*)\}([^`]*)`/g,
          replacement: "`$1${$2}$3`",
},
        // Fix broken console.log statements
        {
          pattern: /console\.log\(([^)]*)\$\{([^}]*)\}([^)]*)\);/g,
          replacement: "console.log(`$1${$2}$3`);",
},
        // Fix broken string concatenation
        {
          pattern: /"([^]*)\$\{([^}]*)\}([^]*)"/g,
          replacement: "`$1${$2}$3`",
},
        // Fix broken JSX attributes
        {
          pattern: /(\w+)="([^]*)\$\{([^}]*)\}([^]*)"/g,
          replacement: "$1={`$2${$3}$4`}",
},
        // Fix broken imports
        {
          pattern: /import\s+([^]+);\s*import/g,
          replacement: "import $1\nimport",
},
        // Fix broken function parameters
        {
          pattern: /(\w+)\s*;\s*\)/g,
          replacement: "$1)",
},
        // Fix broken object properties
        {
          pattern: /(\w+)\s*;\s*}/g,
          replacement: "$1}",
},
        // Fix broken array elements
        {
          pattern: /(\w+)\s*;\s*]/g,
          replacement: "$1]",
},
        // Fix broken string literals
        {
          pattern: /"([^]*)\$\{([^}]*)\}([^]*)";/g,
          replacement: "`$1${$2}$3`;",
},
        // Fix broken JSX
        {
          pattern: /<(\w+)\s+([^>]*)\$\{([^}]*)\}([^>]*)>/g,
          replacement: "<$1 $2${$3}$4>",
},
        // Fix broken comments
        {
          pattern: /\/\*([^*]*)\$\{([^}]*)\}([^*]*)\*\//g,
          replacement: "/*$1${$2}$3*/",
},
        // Fix broken regex
        {
          pattern: /\/([^/]*)\$\{([^}]*)\}([^/]*)\//g,
          replacement: "/$1${$2}$3/",
},
        // Fix broken numbers
        {
          pattern: /(\d+)\s*;\s*([,}])/g,
          replacement: "$1$2",
},
        // Fix broken booleans
        {
          pattern: /(true|false)\s*;\s*([,}])/g,
          replacement: "$1$2",
},
        // Fix broken null/undefined
        {
          pattern: /(null|undefined)\s*;\s*([,}])/g,
          replacement: "$1$2",
}
      ]
      // Apply merge conflict fixes
      mergeConflictFixes.forEach(fix => {
        const before = content
        content = content.replace(fix.pattern, fix.replacement)
        if (content !== before) {
          changes++,
}
      })
      // Apply syntax fixes
      syntaxFixes.forEach(fix => {
        const before = content
        content = content.replace(fix.pattern, fix.replacement)
        if (content !== before) {
          changes++,
}
      })
      // Additional specific fixes
      const specificFixes = [
        // Fix broken JSX in Layout.tsx
        {
          pattern: /<meta name="description content={description} \/>;/g,
          replacement: "",
},
        {
          pattern: /<meta: name="viewport" content=width=device-width, initial-scale=1 \/>";/g,
          replacement: "",
},
        // Fix broken MainLayout.tsx
        {
          pattern: /import React from "react"; import Header from "\.\/Header"; import Footer from "\.\/Footer"; import PerformanceOptimizer from "\.\.\/PerformanceOptimizer"; import AccessibilityEnhancer from "\.\.\/AccessibilityEnhancer"; import SEOEnhancer from "\.\.\/SEOEnhancer"; interface MainLayoutProps { children: React\.ReactNode; title\?: string; description\?: string; keywords\? string, } const MainLayout: React\.FC<MainLayoutProps> = \(\{ children, title = "Zion Tech Group", description = "Leading technology solutions and AI services", keywords = "technology, AI, software development, consulting" \}\) => \{ return \( <div className="min-h-screen flex flex-col> <SEOEnhancer title=\{title\} description="\{description\}" keywords=\{keywords\} \/> <PerformanceOptimizer \/> <AccessibilityEnhancer \/> <Header \/> <main className=flex-1> \{children\} <\/main> <Footer \/> <\/div> \); \}; export default MainLayout;/g,
          replacement: `import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import PerformanceOptimizer from "../PerformanceOptimizer"
import AccessibilityEnhancer from "../AccessibilityEnhancer"
import SEOEnhancer from "../SEOEnhancer"
interface MainLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  keywords?: string,
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions and AI services",
  keywords = "technology, AI, software development, consulting",
}) => {
  return (
    <div className=min-h-screen flex flex-col">
      <SEOEnhancer title={title} description={description} keywords={keywords} />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>),
}
export default MainLayout;`,
}
      ]
      specificFixes.forEach(fix => {
        const before = content
        content = content.replace(fix.pattern, fix.replacement)
        if (content !== before) {
          changes++,
}
      })
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, "utf8")
        this.fixedFiles.push({
          file: filePath,
          changes: changes,
})
        this.log(`✅ Fixed ${changes} issues in ${filePath}`)
        return true,
}

      return false,
} catch (error) {
      this.errors.push({
        file: filePath,
        error: error.message,
})
      this.log(`❌ Error fixing ${filePath}: ${error.message}`)
      return false,
}
  }

  async fixAllFiles() {
    this.log("Starting comprehensive syntax fixing...")
    const fileExtensions = [".tsx", ".ts", ".jsx", ".js", ".json"]
    const ignorePatterns = [
      "node_modules",
      ".next",
      "dist",
      "build",
      "out",
      ".git"]
    const files = this.getAllFiles(this.projectRoot, fileExtensions, ignorePatterns)
    this.log(`Found ${files.length} files to check`)
    let fixedCount = 0
    for (const file of files) {
      if (this.fixFile(file)) {
        fixedCount++,
}
    }

    this.log("\n=== COMPREHENSIVE SYNTAX FIX SUMMARY ===")
    this.log(`Total files processed: ${files.length}`)
    this.log(`Files fixed: ${fixedCount}`)
    this.log(`Errors encountered: ${this.errors.length}`)
    if (this.fixedFiles.length > 0) {
      this.log("\n✅ Fixed files:")
      this.fixedFiles.forEach(file => {
        this.log(`  - ${file.file} (${file.changes} changes)`),
}),
}

    if (this.errors.length > 0) {
      this.log("\n❌ Errors:")
      this.errors.forEach(error => {
        this.log(`  - ${error.file}: ${error.error}`),
}),
}

    // Save results
    const results = {
      timestamp: new Date().toISOString(),
      totalFiles: files.length,
      fixedFiles: fixedCount,
      errors: this.errors.length,
      details: {
        fixed: this.fixedFiles,
        errors: this.errors,
}
    }
    fs.writeFileSync("comprehensive-syntax-fix-results.json", JSON.stringify(results, null, 2))
    this.log("\nResults saved to comprehensive-syntax-fix-results.json"),
}

  getAllFiles(dir, extensions, ignorePatterns) {
    let files = []
    try {
      const items = fs.readdirSync(dir)
      for (const item of items) {
        const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)
        if (stat.isDirectory()) {
          if (!ignorePatterns.some(pattern => fullPath.includes(pattern))) {
            files = files.concat(this.getAllFiles(fullPath, extensions, ignorePatterns)),
}
        } else if (stat.isFile()) {
          const ext = path.extname(item)
          if (extensions.includes(ext)) {
            files.push(fullPath),
}
        }
      }
    } catch (error) {
      this.log(`Error reading directory ${dir}: ${error.message}`),
}
    
    return files,
}
}

// Run the fixer
const fixer = new ComprehensiveSyntaxFixer()
fixer.fixAllFiles().catch(error => {
  console.error("Fatal error: ", error)
  process.exit(1),
})