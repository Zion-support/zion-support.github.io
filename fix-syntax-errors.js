<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Common fixes for syntax errors
const fixes = [
  // Fix unescaped entities
  {
    pattern: /'/g,
    replacement: '&apos;',
    description: 'Fix unescaped apostrophes'
  },
  // Fix merge conflict markers
  {
    pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g,
    replacement: '',
    description: 'Remove merge conflict markers'
  },
  // Fix common JSX syntax issues
  {
    pattern: /(\w+)\s*=\s*{([^}]*?)}\s*>/g,
    replacement: '$1={$2}>',
    description: 'Fix JSX attribute spacing'
  },
  // Fix missing semicolons in imports
  {
    pattern: /import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*(?!;)/g,
    replacement: 'import $1 from \'$2\';',
    description: 'Add missing semicolons to imports'
  },
  // Fix common parsing errors
  {
    pattern: /(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g,
    replacement: '$1 = () => {',
    description: 'Fix arrow function syntax'
  }
];

function fixFile(filePath) {
=======
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  const fullPath = path.join(__dirname, filePath);
>>>>>>> origin/main
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    
<<<<<<< HEAD
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`Applied fix: ${fix.description} to ${filePath}`);
      }
    });
    
    // Additional specific fixes
    // Fix common JSX closing tag issues
    if (content.includes('</div>') && !content.includes('<div')) {
      content = content.replace(/<\/div>/g, '');
    }
    
    // Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
=======
    // Fix common syntax errors
    content = content.replace(/,\s*\]\s*;\s*\]\s*;\s*\]\s*;/g, '];');
    content = content.replace(/,\s*\)\s*;\s*\)\s*;\s*\)\s*;/g, ');');
    content = content.replace(/,\s*\}\s*;\s*\}\s*;\s*\}\s*;/g, '};');
    
    // Fix malformed object literals
    content = content.replace(/example:\s*\{,\s*request:\s*\{,/g, 'example: {\n    request: {');
    content = content.replace(/copyToClipboard\s*=\s*\([^)]*\)\s*=>\s*\{,/g, 'copyToClipboard = (code, id) => {\n    ');
    content = content.replace(/setCopiedCode\(id\),\s*setTimeout/g, 'setCopiedCode(id);\n    setTimeout');
    content = content.replace(/setTimeout\(\(\)\s*=>\s*setCopiedCode\(null\),\s*2000\)\}\s*const/g, 'setTimeout(() => setCopiedCode(null), 2000);\n  };\n\n  const');
    
    // Fix missing closing tags
    content = content.replace(/<\/Helmet>\s*$/gm, '</Helmet>');
    
    // Fix malformed JSX
    content = content.replace(/<Helmet>\s*<title[^>]*><\/title>\s*<meta[^>]*><\/meta>\s*<meta[^>]*><\/meta>\s*<\/Helmet>/g, (match) => {
      return match.replace(/<\/Helmet>/, '</Helmet>');
    });
    
    // Fix missing semicolons and commas
    content = content.replace(/([^;}])\s*const\s/g, '$1;\n  const ');
    content = content.replace(/([^;}])\s*function\s/g, '$1;\n  function ');
    content = content.replace(/([^;}])\s*export\s/g, '$1;\n  export ');
    
    // Fix missing imports
    if (content.includes('useState') && !content.includes("import { useState }")) {
      content = content.replace(/import React[^;]*;/g, (match) => {
        if (match.includes('useState')) return match;
        return match.replace('import React', 'import React, { useState }');
      });
    }
    
    // Fix missing Helmet import
    if (content.includes('<Helmet>') && !content.includes("import { Helmet }")) {
      content = content.replace(/import React[^;]*;/g, (match) => {
        return match + '\nimport { Helmet } from \'react-helmet-async\';';
      });
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed syntax errors in: ${filePath}`);
>>>>>>> origin/main
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

<<<<<<< HEAD
function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fixFile(filePath);
    }
  });
}

console.log('Starting syntax error fixes...');
walkDirectory('./app');
walkDirectory('./src');
console.log('Syntax error fixes completed!');
=======
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix "use client" directive - add semicolon if missing
  fixed = fixed.replace(/"use client",\n/g, '"use client";\n');
  fixed = fixed.replace(/'use client',\n/g, "'use client";\n');

  // Fix interface definitions - add missing closing braces
  fixed = fixed.replace(/interface\s+(\w+)\s*\{([^}]*?)(\n\s*const|\n\s*function|\n\s*export|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, (match, name, body, next) => {
    if (!body.trim().endsWith('}')) {
      return `interface ${name} {${body}\n}\n${next}`;
    }
    return match;
  });

  // Fix class definitions - add missing closing braces
  fixed = fixed.replace(/class\s+(\w+)[^{]*\{([^}]*?)(\n\s*const|\n\s*function|\n\s*export|\n\s*class|\n\s*interface|\n\s*type|\n\s*$)/g, (match, name, body, next) => {
    if (!body.trim().endsWith('}')) {
      return `class ${name} {${body}\n}\n${next}`;
    }
    return match;
  });

  // Fix extra commas in interface properties
  fixed = fixed.replace(/(\w+):\s*([^;,\n]+),(\s*\n\s*[a-zA-Z_])/g, '$1: $2;\n$3');
  fixed = fixed.replace(/(\w+):\s*([^;,\n]+),(\s*\n\s*})/g, '$1: $2;\n$3');

  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(\w+):\s*([^;,\n]+)(\s*\n\s*[a-zA-Z_])/g, '$1: $2;\n$3');
  fixed = fixed.replace(/(\w+):\s*([^;,\n]+)(\s*\n\s*})/g, '$1: $2;\n$3');

  // Fix unterminated string literals
  fixed = fixed.replace(/(\w+):\s*"([^"]*?)(\n\s*[a-zA-Z_])/g, '$1: "$2";\n$3');
  fixed = fixed.replace(/(\w+):\s*'([^']*?)(\n\s*[a-zA-Z_])/g, "$1: '$2';\n$3");

  // Fix JSX closing tag issues
  fixed = fixed.replace(/<(\w+)([^>]*?)>([^<]*?)<\/\1>/g, '<$1$2>$3</$1>');

  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/(\w+)\s*\(([^)]*?)(\n\s*[a-zA-Z_])/g, '$1($2);\n$3');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process TypeScript/TSX files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
>>>>>>> cursor/fix-errors-and-merge-to-main-75df
=======
// List of files with syntax errors
const filesWithSyntaxErrors = [
  'app/analytics-tools/page.tsx',
  'app/api-development/page.tsx',
  'app/api-docs/page.tsx',
  'app/api/page.tsx',
  'app/ar-vr-platform/page.tsx',
  'app/ar-vr-solutions/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/business-apps/page.tsx',
  'app/cloud-infrastructure-manager/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page-backup.tsx',
  'app/compliance/page-fixed.tsx',
  'app/contact/page-broken2.tsx',
  'app/crm-lite/page.tsx',
  'app/custom-development/page.tsx',
  'app/custom-software/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/cybersecurity-suite/page.tsx',
  'app/data-analytics/page.tsx',
  'app/data-analytics-bi/page.tsx',
  'app/data-center/page.tsx',
  'app/data-protection/page.tsx',
  'app/database-management/page.tsx',
  'app/database-services/page.tsx',
  'app/developer-tools/page.tsx',
  'app/devops-cicd/page.tsx',
  'app/digital-transformation/page.tsx',
  'app/digital-twin-platform/page.tsx',
  'app/docs/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/edge-computing/page.tsx',
  'app/email-marketing-automation/page.tsx',
  'app/email-optimizer/page.tsx',
  'app/enterprise/page.tsx',
  'app/enterprise-security/page.tsx',
  'app/error.tsx',
  'app/expense-tracker/page.tsx',
  'app/faq/page.tsx',
  'app/financial-it/page.tsx',
  'app/health/page.tsx',
  'app/healthcare-it/page.tsx',
  'app/innovation-labs/page.tsx',
  'app/intelligent-database-migration/page.tsx',
  'app/intelligent-email-infrastructure/page.tsx',
  'app/investors/page.tsx',
  'app/iot/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-platform/page.tsx',
  'app/it-asset-management/page.tsx',
  'app/it-consulting/page.tsx',
  'app/it-infrastructure-solutions/page.tsx',
  'app/it-performance/page.tsx',
  'app/it-support/page.tsx',
  'app/it-training/page.tsx',
  'app/landing-page-builder/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/loading.tsx',
  'app/managed-it/page.tsx',
  'app/marketing-tools/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/micro-saas/ai-content-writer/page.tsx',
  'app/micro-saas/analytics-dashboard/page.tsx',
  'app/micro-saas/appointment-scheduler/page.tsx',
  'app/micro-saas/chat-analytics/page.tsx',
  'app/micro-saas/content-generator/page.tsx',
  'app/micro-saas/document-processor/page.tsx',
  'app/micro-saas/email-marketing/page.tsx',
  'app/micro-saas/expense-tracker/page.tsx',
  'app/micro-saas/inventory-management/page.tsx',
  'app/micro-saas/lead-scoring/page.tsx',
  'app/micro-saas/seo-optimizer/page.tsx',
  'app/micro-saas/social-manager/page.tsx',
  'app/micro-saas/support-bot/page.tsx',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/network-design/page.tsx',
  'app/network-infrastructure/page.tsx',
  'app/network-security/page.tsx',
  'app/network-solutions/page.tsx',
  'app/news/page.tsx',
  'app/not-found.tsx',
  'app/online-learning-platform/page.tsx',
  'app/page-backup.tsx',
  'app/page-optimized.tsx',
  'app/page-original.tsx',
  'app/partners/page.tsx',
  'app/penetration-testing/page.tsx',
  'app/process-automation/page.tsx',
  'app/productivity/page.tsx',
  'app/project-management-pro/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/quantum-ai/page.tsx',
  'app/robotics-integration/page.tsx',
  'app/security-monitoring/page.tsx',
  'app/security-monitoring-suite/page.tsx',
  'app/seo-optimizer/page.tsx',
  'app/sla/page.tsx',
  'app/smart-analytics/page.tsx',
  'app/smart-cities/page.tsx',
  'app/smart-city-infrastructure/page.tsx',
  'app/smart-contract-security-audit/page.tsx',
  'app/specialized-services/page.tsx',
  'app/status/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/system-status/page.tsx',
  'app/task-manager-pro/page.tsx',
  'app/utils/testRunner.tsx',
  'app/web-development/page.tsx'
];

// Main function
function fixAllSyntaxErrors() {
  console.log('Starting to fix syntax errors...');
  
  filesWithSyntaxErrors.forEach(fixSyntaxErrors);
  
  console.log('Finished fixing syntax errors!');
}

// Run the fix
fixAllSyntaxErrors();
>>>>>>> origin/main
