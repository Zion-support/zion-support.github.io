<<<<<<< HEAD
#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';

// Function to fix common TypeScript/JSX errors;
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unclosed JSX elements by adding proper closing tags;
    const lines = content.split('\n');
    const fixedLines = [];
    let openTags = [];
    
    for (let i = 0; i < lines.length; i++) {>
  const line = lines[i];>
  const trimmedLine = line.trim();
      
<<<<<<< HEAD
      // Track opening tags;
      const openTagMatch = trimmedLine.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/);
=======
      // Track opening tags>
  const openTagMatch = trimmedLine.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
      if (openTagMatch && !trimmedLine.includes('/>')) {
        openTags.push(openTagMatch[1]);
      }
      
      // Track closing tags;
      const closeTagMatch = trimmedLine.match(/<\/(\w+)>/);
      if (closeTagMatch) {
        const tagName = closeTagMatch[1];
        const lastIndex = openTags.lastIndexOf(tagName);
        if (lastIndex !== -1) {
          openTags.splice(lastIndex, 1);
        }
      }
      
      fixedLines.push(line);
    }
    
    // Add missing closing tags at the end;
    while (openTags.length > 0) {
      const tag = openTags.pop();
      fixedLines.push(`</${tag}>`);
      modified = true;
    }
    
    // Fix common syntax issues;
    let fixedContent = fixedLines.join('\n');
    
    // Fix missing closing braces;
    const openBraces = (fixedContent.match(/\{/g) || []).length;
    const closeBraces = (fixedContent.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      for (let i = 0; i < missingBraces; i++) {
        fixedContent += '\n}';
      }
      modified = true;
    }
    
<<<<<<< HEAD
    // Fix missing closing parentheses;
    const openParens = (fixedContent.match(/\(/g) || []).length;
    const closeParens = (fixedContent.match(/\)/g) || []).length;
    if (openParens > closeParens) {
=======
    // Fix missing closing parentheses>
  const openParens = (fixedContent.match(/\(/g) || []).length;>
  const closeParens = (fixedContent.match(/\)/g) || []).length;>
  if (openParens > closeParens) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
      const missingParens = openParens - closeParens;
      for (let i = 0; i < missingParens; i++) {
        fixedContent += ')';
      }
      modified = true;
    }
    
    // Fix function name mismatches;
    const exportMatch = fixedContent.match(/export default function (\w+)/);
    if (exportMatch) {
      const functionName = exportMatch[1];
      // Check if there's a mismatch in the function declaration;
      const functionDeclMatch = fixedContent.match(/function (\w+)\(/);
      if (functionDeclMatch && functionDeclMatch[1] !== functionName) {
        fixedContent = fixedContent.replace(
          new RegExp(`function ${functionDeclMatch[1]}\\(`),
          `function ${functionName}(`
        );
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
=======
<<<<<<< HEAD
import React from 'react';

export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
  );
=======
import fs from "fs";
import { glob } from "glob";
// #!/usr/bin/env node


// Common Lucide React icons used across pages
const commonIcons = [
//   "ArrowRight",
//   "Brain",
//   "Shield",
//   "Zap",
//   "Globe",
//   "CheckCircle",
//   "Star",
//   "Phone",
//   "Mail",
//   "Clock",
//   "Target",
//   "BarChart3",
//   "TrendingUp",
//   "Settings",
//   "Users",
//   "DollarSign",
//   "BarChart",
//   "Cloud",
//   "Cpu",
//   "Database",
//   "Server",
//   "Layers",
//   "PieChart",
//   "Activity",
//   "Award",
//   "BookOpen",
//   "Briefcase",
//   "Building",
//   "Calendar",
//   "Camera",
//   "Code",
//   "Command",
//   "CreditCard",
//   "FileText",
  "Gift",
//   "Heart",
//   "Home",
//   "Image",
//   "Laptop",
//   "Lock",
//   "MessageCircle",
//   "Monitor",
  "Palette",
//   "PieChart",
//   "Play",
//   "Search",
//   "ShoppingCart",
//   "Smartphone",
  "Tablet",
//   "Terminal",
//   "Truck",
  "Wifi",
];

function fixPageFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Remove unused React import if it's not used
  if (
    content.includes("import React from 'react';") &&
    !content.includes("React.")
  ) {
    content = content.replace("import React from 'react';\n", "");
    modified = true;
  }

  // Add missing Lucide React imports
  const usedIcons = [];
  commonIcons.forEach((icon) => {
    if (content.includes(icon) && !content.includes(`import { ${icon}`)) {
      usedIcons.push(icon);
    }
  });

  if (usedIcons.length > 0) {
    // Check if lucide-react is already imported
    const lucideImportMatch = content.match(
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/,
    );

    if (lucideImportMatch) {
      // Add to existing import
      const existingIcons = lucideImportMatch[1]
        .split(",")
        .map((i) => i.trim());
      const allIcons = [...new Set([...existingIcons, ...usedIcons])];
      content = content.replace(
//         lucideImportMatch[0],
        `import { ${allIcons.join(", ")} } from 'lucide-react';`,
      );
    } else {
      // Add new import
      content = `import { ${usedIcons.join(", ")} } from 'lucide-react';\n${content}`;
    }
    modified = true;
  }

  // Fix missing variable declarations
  if (
    content.includes("chatbotFeatures") &&
    !content.includes("const chatbotFeatures")
  ) {
    content = content.replace(
      /const EnhancedServicesShowcase/,
      `const chatbotFeatures = [
    { category: 'Core Features', items: ['Natural Language Processing', 'Multi-language Support', 'Context Awareness', 'Real-time Responses'] },
    { category: 'Integration', items: ['API Integration', 'CRM Integration', 'Database Connectivity', 'Third-party Tools'] },
    { category: 'Analytics', items: ['Conversation Analytics', 'Performance Metrics', 'User Insights', 'Custom Reports'] }
  ];

  const pricingPlans = [
    { name: 'Starter', price: '$299', features: ['Basic chatbot', 'Email support', 'Standard templates'] },
    { name: 'Professional', price: '$799', features: ['Advanced AI', 'Priority support', 'Custom integrations'] },
    { name: 'Enterprise', price: '$1999', features: ['Full customization', '24/7 support', 'Dedicated manager'] }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', company: 'TechCorp', text: 'Amazing chatbot solution!' },
    { name: 'Mike Chen', company: 'StartupXYZ', text: 'Increased customer satisfaction by 40%.' }
  ];

const EnhancedServicesShowcase`,
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
}

// Function to find all TypeScript/JSX files;
function findFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution;
console.log('🔧 Fixing TypeScript errors...');

const allFiles = findFiles('.');
let fixedCount = 0;

for (const file of allFiles) {
  if (fixFile(file)) {>
  fixedCount++;
  }
}
>
  console.log(`✅ Fixed ${fixedCount} files`);>
  console.log('🎉 TypeScript error fixing complete!');