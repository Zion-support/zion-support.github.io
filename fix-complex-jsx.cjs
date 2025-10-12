const fs = require('fs');
const path = require('path');

// Fix complex JSX files with array syntax errors
function fixComplexFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix array syntax errors - missing opening braces
    const arrayFixes = [
      {
        pattern: /const features = \[\s*icon:/g,
        replacement: 'const features = [\n    {\n      icon:'
      },
      {
        pattern: /const chatbotFeatures = \[\s*category:/g,
        replacement: 'const chatbotFeatures = [\n    {\n      category:'
      },
      {
        pattern: /const pricingPlans = \[\s*name:/g,
        replacement: 'const pricingPlans = [\n    {\n      name:'
      },
      {
        pattern: /const testimonials = \[\s*name:/g,
        replacement: 'const testimonials = [\n    {\n      name:'
      }
    ];

    arrayFixes.forEach(fix => {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    });

    // Fix missing closing braces in arrays
    content = content.replace(/(\s+description: '[^']+')\s*\]/g, '$1\n    }\n  ]');
    content = content.replace(/(\s+popular: (true|false))\s*\]/g, '$1\n    }\n  ]');
    content = content.replace(/(\s+rating: \d+)\s*\]/g, '$1\n    }\n  ]');

    // Fix missing opening braces for array items
    content = content.replace(/(\s+)\s*icon:/g, '$1    {\n      icon:');
    content = content.replace(/(\s+)\s*title:/g, '$1      title:');
    content = content.replace(/(\s+)\s*description:/g, '$1      description:');
    content = content.replace(/(\s+)\s*name:/g, '$1      name:');
    content = content.replace(/(\s+)\s*price:/g, '$1      price:');
    content = content.replace(/(\s+)\s*period:/g, '$1      period:');
    content = content.replace(/(\s+)\s*company:/g, '$1      company:');
    content = content.replace(/(\s+)\s*content:/g, '$1      content:');
    content = content.replace(/(\s+)\s*category:/g, '$1      category:');
    content = content.replace(/(\s+)\s*items:/g, '$1      items:');
    content = content.replace(/(\s+)\s*features:/g, '$1      features:');
    content = content.replace(/(\s+)\s*popular:/g, '$1      popular:');

    // Fix duplicate function declarations
    if (content.includes('export default function AiCustomerSupportChatbot()') && 
        content.includes('export default function AICustomerSupportChatbot()')) {
      // Remove the duplicate function
      const lines = content.split('\n');
      const filteredLines = [];
      let skipDuplicate = false;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('export default function AiCustomerSupportChatbot()') && 
            i > 0 && lines[i-1].includes('export default function AICustomerSupportChatbot()')) {
          skipDuplicate = true;
          continue;
        }
        if (skipDuplicate && lines[i].includes('}')) {
          skipDuplicate = false;
          continue;
        }
        if (!skipDuplicate) {
          filteredLines.push(lines[i]);
        }
      }
      
      content = filteredLines.join('\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed complex file: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing complex file ${filePath}:`, error.message);
  }
  return false;
}

// Find and fix complex files
const complexFiles = [
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-email-assistant/page.tsx',
  'app/ai-financial-analytics-pro/page.tsx',
  'app/ai-expense-tracker/page.tsx'
];

let fixedCount = 0;
complexFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixComplexFile(file)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed ${fixedCount} complex files`);
