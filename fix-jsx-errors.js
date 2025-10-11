#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common JSX fixes
const fixes = [
  // Fix missing closing tags
  {
    pattern: /<h1([^>]*)>([^<]*)<span([^>]*)>([^<]*)<\/span>([^<]*)$/gm,
    replacement: '<h1$1>$2<span$3>$4</span>$5</h1>'
  },
  {
    pattern: /<h2([^>]*)>([^<]*)<span([^>]*)>([^<]*)<\/span>([^<]*)$/gm,
    replacement: '<h2$1>$2<span$3>$4</span>$2</h2>'
  },
  {
    pattern: /<h3([^>]*)>([^<]*)<span([^>]*)>([^<]*)<\/span>([^<]*)$/gm,
    replacement: '<h3$1>$2<span$3>$4</span>$5</h3>'
  },
  // Fix malformed button nesting
  {
    pattern: /<button([^>]*)>([^<]*)<ArrowRight[^>]*\/>[\s]*<button([^>]*)>([^<]*)<\/button>[\s]*<\/button>/gm,
    replacement: '<button$1>$2<ArrowRight className="ml-2 h-5 w-5" />\n              </button>\n              <button$3>$4</button>'
  },
  // Fix duplicate closing tags
  {
    pattern: /<\/div><\/div><\/section>/gm,
    replacement: '</div>\n          </div>\n        </section>'
  },
  // Fix malformed JSX expressions
  {
    pattern: /}\s*\)\s*}\s*\)\s*<\/div><\/section>/gm,
    replacement: '}\n            </div>\n          </div>\n        </section>'
  },
  // Fix missing closing tags in lists
  {
    pattern: /<li([^>]*)>([^<]*)<CheckCircle[^>]*\/>[\s]*([^<]*)<\/li>/gm,
    replacement: '<li$1><CheckCircle className="w-4 h-4 text-green-400 mr-2" />$3</li>'
  },
  // Fix malformed component references
  {
    pattern: /<feature\.icon/gm,
    replacement: '<IconComponent'
  },
  {
    pattern: /<useCase\.icon/gm,
    replacement: '<IconComponent'
  },
  // Fix missing closing tags for main elements
  {
    pattern: /<\/main>[\s]*<\/ArrowRight>[\s]*<\/button>[\s]*<\/div>[\s]*<\/div>[\s]*<\/section>/gm,
    replacement: '</main>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TypeScript/JSX files
  const files = await glob('app/**/*.{tsx,ts}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);