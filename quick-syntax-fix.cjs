#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class QuickSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixes = [];
  }

  log(message, type = 'INFO') {
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️'
    }[type] || 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`File not found: ${filePath}`, 'WARNING');
        return;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix specific patterns
      content = content.replace(/\/\s*$/gm, ''); // Remove trailing slashes
      content = content.replace(/\/\s*>/g, '>'); // Fix self-closing tags
      content = content.replace(/,\s*$/gm, ''); // Remove trailing commas
      content = content.replace(/\{\s*$/gm, '{'); // Fix object syntax
      content = content.replace(/\}\s*$/gm, '}'); // Fix object syntax
      
      // Fix specific file issues
      if (filePath.includes('about/page.tsx')) {
        // Fix JSX syntax
        content = content.replace(/href="\/contact" \//g, 'href="/contact"');
        content = content.replace(/<ArrowRightIcon className="ml-2 h-5 w-5" \/>\//g, '<ArrowRightIcon className="ml-2 h-5 w-5" />');
      }
      
      if (filePath.includes('learn/course.ts')) {
        // Fix object syntax
        content = content.replace(/\{\s*\.\.\.body\s*\n\s*id:/g, '{\n        ...body,\n        id:');
        content = content.replace(/createdAt: new Date\(\)\.toISOString\(\)\s*\n\s*updatedAt:/g, 'createdAt: new Date().toISOString(),\n        updatedAt:');
      }
      
      if (filePath.includes('moderation/flags/[id].ts')) {
        // Fix object syntax
        content = content.replace(/\{\s*ok: true\s*\n\s*flag:/g, '{\n      ok: true,\n      flag:');
        content = content.replace(/id\s*\n\s*status:/g, 'id,\n        status:');
        content = content.replace(/status\s*\n\s*resolvedAt:/g, 'status,\n        resolvedAt:');
      }
      
      if (filePath.includes('moderation/flags/index.ts')) {
        // Remove extra closing brace
        content = content.replace(/\}\s*\n\s*\}\s*$/g, '}');
      }
      
      if (filePath.includes('partners/fraud-flags.ts')) {
        // Fix duplicate imports and exports
        content = content.replace(/import type { NextApiRequest, NextApiResponse } from 'next';\s*\n\s*export default function handler\(req: NextApiRequest, res: NextApiResponse\)\s*\{\s*\n\s*import { getServerSupabase } from '\.\.\/\.\.\/\.\.\/\.\.\/utils\/supabase\/server';\s*\n\s*import type { NextApiRequest, NextApiResponse } from 'next';\s*\n\s*export default async function handler\(req: NextApiRequest, res: NextApiResponse\)\s*\{/g, 
          `import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {`);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixes.push(`Fixed syntax in ${filePath}`);
        this.log(`Fixed syntax in ${filePath}`, 'SUCCESS');
      } else {
        this.log(`No syntax issues found in ${filePath}`, 'INFO');
      }
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🔧 Starting quick syntax fix...');
    
    const filesToFix = [
      'app/about/page.tsx',
      'pages/api/admin/learn/course.ts',
      'pages/api/admin/moderation/flags/[id].ts',
      'pages/api/admin/moderation/flags/index.ts',
      'pages/api/admin/partners/fraud-flags.ts'
    ];
    
    for (const file of filesToFix) {
      const filePath = path.join(this.projectRoot, file);
      this.fixFile(filePath);
    }
    
    this.log(`\n✅ Fixed ${this.fixes.length} files`);
    this.fixes.forEach(fix => this.log(`  - ${fix}`));
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new QuickSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = QuickSyntaxFixer;