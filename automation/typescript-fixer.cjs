 HEAD
#!/usr/bin/env node;


const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class TypeScriptFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixes = [];
    this.errors = []}

  log(message, type = "INFO") {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`)}

  async createTypeDeclarations() {
    this.log('📝 Creating comprehensive type declarations...');
    
    const typeDeclarations = `// Global type declarations
declare module '*.svg' {
  const content: string;
  export default content}

declare module '*.png' {
  const content: string;
  export default content}

declare module '*.jpg' {
  const content: string;
  export default content}

declare module '*.jpeg' {
  const content: string;
  export default content}

declare module '*.gif' {
  const content: string;
  export default content}

declare module '*.webp' {
  const content: string;
  export default content}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content}

declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content}

declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content}

// Next.js specific types
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string}
}

// Global window extensions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void}
}

export {};`;

    const typesDir = path.join(this.projectRoot, 'types');
    if (!fs.existsSync(typesDir)) {
      fs.mkdirSync(typesDir { recursive: true })}
    
    const globalTypesPath = path.join(typesDir, 'global.d.ts');
    fs.writeFileSync(globalTypesPath, typeDeclarations);
    this.fixes.push('Created comprehensive type declarations');
    this.log('✅ Type declarations created')}

  async fixTsConfig() {
    this.log('⚙️  Fixing tsconfig.json...');
    
    const tsConfig = {
      compilerOptions: {
        target: 'ES2020',
        lib: ['dom', 'dom.iterable', 'es6'],
        allowJs: true,
        skipLibCheck: true,
        strict: true,
        forceConsistentCasingInFileNames: true,
        noEmit: true,
        esModuleInterop: true,
        module: 'esnext',
        moduleResolution: 'node',
        resolveJsonModule: true,
        isolatedModules: true,
        jsx: 'preserve',
        incremental: true,
        plugins: [
          {
            name: 'next'
          }
        ],
        baseUrl: '.',
        paths: {
          '@/*': ['./*'],
          '@/components/*': ['./components/*'],
          '@/utils/*': ['./utils/*'],
          '@/hooks/*': ['./hooks/*'],
          '@/types/*': ['./types/*']
        }
      },
      include: [
        'next-env.d.ts',
        '**/*.ts',
        '**/*.tsx',
        '.next/types/**/*.ts',
        'types/**/*.d.ts'
      ],
      exclude: [
        'node_modules'
      ]
    };
    
    const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
    fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
    this.fixes.push('Fixed tsconfig.json configuration');
    this.log('✅ tsconfig.json fixed')}

  async fixCommonTypeErrors() {
    this.log('🔧 Fixing common TypeScript errors...');
    
    const filesToFix = [
      'components',
      'pages',
      'utils',
      'hooks'
    ];
    
    for (const dir of filesToFix) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.fixFilesInDirectory(dirPath)}
    }
  }

  async fixTypeErrors() {
    this.log("🔍 Checking for TypeScript errors...");
    try {
      execSync("npx tsc --noEmit", {
        cwd: this.projectRoot,
        stdio: "pipe"
      });
      this.log("✅ No TypeScript errors found");
    } catch (error) {
      this.log(`⚠️ TypeScript errors found: ${error.message}`, "WARN");
      this.errors.push(`TypeScript errors: ${error.message}`);
    }
  }

  async fixImportStatements() {
    this.log("📦 Fixing import statements...");
    try {
      const files = this.getAllFiles(this.projectRoot, [".ts", ".tsx"]);
      let fixedFiles = 0;
      
      for (const file of files) {
        if (file.includes("node_modules")) continue;
        
        try {
          let content = fs.readFileSync(file, "utf8");
          let modified = false;
          
          // Fix React imports
          if (content.includes("import React from 'react'") && !content.includes("import * as React")) {
            content = content.replace(/import React from 'react'/g, "import * as React from 'react'");
            modified = true;
          }
          
          // Fix Next.js imports
          if (content.includes("import { useRouter } from 'next/router'")) {
            content = content.replace(/import { useRouter } from 'next\/router'/g, "import { useRouter } from 'next/navigation'");
            modified = true;
          }
          
          if (modified) {
            fs.writeFileSync(file, content);
            fixedFiles++;
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
      
      if (fixedFiles > 0) {
        this.fixes.push(`Fixed imports in ${fixedFiles} files`);
        this.log(`✅ Fixed imports in ${fixedFiles} files`);
      }
    } catch (error) {
      this.log(`❌ Failed to fix imports: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  getAllFiles(dir, extensions) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.fixFilesInDirectory(fullPath)} else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
        this.fixTypeScriptFile(fullPath)}
    }
  }

  fixTypeScriptFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common React import issues
      if (content.includes('import React from \'react\'')) {
        content = content.replace(
          /import React from 'react'/g,
          'import React from \'react\''
        );
        modified = true}
      
      // Add missing React import for JSX
      if (content.includes('<') && content.includes('>') && !content.includes('import React')) {
        if (!content.includes('import React')) {
          content = 'import React from \'react\';\\n' + content;
          modified = true}
      }
      
      // Fix any type issues
      if (content.includes(': any')) {
        content = content.replace(/: any/g, ': unknown');
        modified = true}
      
      // Remove unused imports (basic cleanup)
      const lines = content.split('\\n');
      const cleanedLines = lines.filter(line => {
        // Remove empty import statements
        if (line.trim().startsWith('import') && line.trim().endsWith(';') && line.includes('{}')) {
          return false}
        return true});
      
      if (cleanedLines.length !== lines.length) {
        content = cleanedLines.join('\\n');
        modified = true}
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixes.push(`Fixed TypeScript file: ${path.relative(this.projectRoot, filePath)}`)}
      
    } catch (error) {
      this.log(`⚠️  Could not fix file ${filePath}: ${error.message}`, 'WARN')}
  }

  async runTypeCheck() {
    this.log('🔍 Running TypeScript type check...');
    
    try {
      execSync('npx tsc --noEmit' { 
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      
      this.fixes.push('TypeScript type check passed');
      this.log('✅ TypeScript type check passed');
      return true} catch (error) {
      this.log(`❌ TypeScript type check failed: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
      return false}
  }

  async run() {
    this.log('🚀 Starting TypeScript Fixing Process...');
    this.log('===');
    
    try {
      await this.fixTypeScriptConfig();
      await this.fixImportStatements();
      await this.fixTypeErrors();
      
      this.log('\\n📊 TYPESCRIPT FIXING REPORT');
      this.log('======');
      this.log(`Fixes Applied: ${this.fixes.length}`);
      this.log(`Errors Found: ${this.errors.length}`);
      
      if (this.fixes.length > 0) {
        this.log("\n✅ Fixes Applied:");
        this.fixes.forEach((fix, index) => {
          this.log(`  ${index + 1}. ${fix}`)})}
      
      if (this.errors.length > 0) {
        this.log("\n❌ Errors:");
        this.errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error}`)})}
      
      this.log('\\n🎉 TypeScript fixing completed!')} catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, 'ERROR');
      process.exit(1)}
  }
}

const fixer = new TypeScriptFixer();
fixer.run().catch(console.error);
 31ef851138fd26c05f3cc955272d6690995f1d05
