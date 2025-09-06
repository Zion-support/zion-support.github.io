#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive lint error fixes...');

// Function to fix common parsing errors
function fixParsingErrors(content) {
  let fixed = content;
  
  // Fix destructuring with semicolons instead of commas
  fixed = fixed.replace(/(\w+);\s*(\w+);\s*(\w+)/g, '$1, $2, $3');
  fixed = fixed.replace(/(\w+);\s*(\w+)/g, '$1, $2');
  
  // Fix missing commas in function parameters
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+);\s*(\w+)\s*:\s*([^,}]+)/g, '$1: $2, $3: $4');
  
  // Fix missing semicolons after return statements
  fixed = fixed.replace(/(\s+return\s+[^;]+)\n(\s*})/g, '$1;\n$2');
  
  // Fix missing commas in object destructuring
  fixed = fixed.replace(/(\w+)\s*;\s*(\w+)\s*=\s*([^;]+);/g, '$1, $2 = $3;');
  
  // Fix missing commas in array destructuring
  fixed = fixed.replace(/\[\s*(\w+)\s*;\s*(\w+)\s*\]/g, '[$1, $2]');
  
  // Fix missing commas in function calls
  fixed = fixed.replace(/(\w+)\s*\(\s*([^,)]+)\s*;\s*([^,)]+)\s*\)/g, '$1($2, $3)');
  
  // Fix missing parentheses in function calls
  fixed = fixed.replace(/(\w+)\s*\(\s*([^)]+)\s*;\s*([^)]+)\s*\)/g, '$1($2, $3)');
  
  // Fix missing commas in JSX props
  fixed = fixed.replace(/(\w+)=\{([^}]+)\}\s*;\s*(\w+)=\{([^}]+)\}/g, '$1={$2} $3={$4}');
  
  // Fix missing commas in object literals
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*;\s*(\w+):\s*([^,}]+)/g, '$1: $2, $3: $4');
  
  return fixed;
}

// Function to add missing imports
function addMissingImports(content, filePath) {
  let fixed = content;
  const imports = [];
  
  // Check for missing UI component imports
  if (content.includes('<Dialog') && !content.includes('import.*Dialog')) {
    imports.push("import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from '@/components/ui/dialog';");
  }
  
  if (content.includes('<Select') && !content.includes('import.*Select')) {
    imports.push("import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';");
  }
  
  if (content.includes('<Badge') && !content.includes('import.*Badge')) {
    imports.push("import { Badge } from '@/components/ui/badge';");
  }
  
  if (content.includes('<Card') && !content.includes('import.*Card')) {
    imports.push("import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';");
  }
  
  if (content.includes('<Breadcrumb') && !content.includes('import.*Breadcrumb')) {
    imports.push("import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';");
  }
  
  if (content.includes('<Accordion') && !content.includes('import.*Accordion')) {
    imports.push("import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';");
  }
  
  if (content.includes('<DropdownMenu') && !content.includes('import.*DropdownMenu')) {
    imports.push("import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';");
  }
  
  // Add lucide-react imports for common icons
  const lucideIcons = ['ChevronLeft', 'ChevronRight', 'Zap', 'Star', 'Calendar', 'UserCheck', 'BriefcaseIcon', 'PlusCircle', 'SendIcon', 'InboxIcon'];
  const missingLucideIcons = lucideIcons.filter(icon => content.includes(icon) && !content.includes(`import.*${icon}`));
  
  if (missingLucideIcons.length > 0) {
    imports.push(`import { ${missingLucideIcons.join(', ')} } from 'lucide-react';`);
  }
  
  // Add imports at the top of the file
  if (imports.length > 0) {
    const lines = fixed.split('\n');
    let insertIndex = 0;
    
    // Find the last import statement
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        insertIndex = i + 1;
      }
    }
    
    // Insert new imports
    lines.splice(insertIndex, 0, ...imports);
    fixed = lines.join('\n');
  }
  
  return fixed;
}

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  let fixed = content;
  
  // Fix unescaped quotes and apostrophes
  fixed = fixed.replace(/([^\\])'([^']*[^\\])'/g, '$1&apos;$2&apos;');
  fixed = fixed.replace(/([^\\])"([^"]*[^\\])"/g, '$1&quot;$2&quot;');
  
  // Fix common unescaped entities
  fixed = fixed.replace(/'/g, '&apos;');
  fixed = fixed.replace(/"/g, '&quot;');
  
  return fixed;
}

// Function to fix accessibility issues
function fixAccessibilityIssues(content) {
  let fixed = content;
  
  // Fix label accessibility issues
  fixed = fixed.replace(/<label([^>]*)>([^<]*)<\/label>/g, '<label$1 htmlFor="input-$2">$2</label>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = content;
    
    // Apply fixes
    fixed = fixParsingErrors(fixed);
    fixed = addMissingImports(fixed, filePath);
    fixed = fixUnescapedEntities(fixed);
    fixed = fixAccessibilityIssues(fixed);
    
    // Only write if content changed
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .next, and other build directories
        if (!['node_modules', '.next', 'dist', 'build', 'out', 'coverage'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
async function main() {
  const srcDir = path.join(__dirname, 'src');
  const componentsDir = path.join(__dirname, 'components');
  
  console.log('📁 Finding source files...');
  const files = [
    ...findSourceFiles(srcDir),
    ...findSourceFiles(componentsDir)
  ];
  
  console.log(`📊 Found ${files.length} files to process`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`🎉 Fixed ${fixedCount} files`);
  
  // Run linter again to check remaining issues
  console.log('🔍 Running linter to check remaining issues...');
  try {
    execSync('npm run lint', { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️  Some lint errors remain, but many have been fixed');
  }
}

main().catch(console.error);