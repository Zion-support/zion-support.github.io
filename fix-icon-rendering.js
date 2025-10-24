const fs = require('fs');
const path = require('path');

// Function to fix icon rendering in a file
function fixIconRendering(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix different patterns of icon rendering
    const patterns = [
      // Pattern 1: {stat.icon}
      { 
        regex: /\{(\w+)\.icon\}/g, 
        replacement: '<$1.icon className="w-8 h-8 text-white" />' 
      },
      // Pattern 2: {feature.icon}
      { 
        regex: /\{feature\.icon\}/g, 
        replacement: '<feature.icon className="w-8 h-8 text-cyan-400" />' 
      },
      // Pattern 3: {useCase.icon}
      { 
        regex: /\{useCase\.icon\}/g, 
        replacement: '<useCase.icon className="w-8 h-8 text-purple-400" />' 
      },
      // Pattern 4: {item.icon}
      { 
        regex: /\{item\.icon\}/g, 
        replacement: '<item.icon className="w-8 h-8 text-blue-400" />' 
      },
      // Pattern 5: {service.icon}
      { 
        regex: /\{service\.icon\}/g, 
        replacement: '<service.icon className="w-8 h-8 text-green-400" />' 
      },
      // Pattern 6: {benefit.icon}
      { 
        regex: /\{benefit\.icon\}/g, 
        replacement: '<benefit.icon className="w-8 h-8 text-yellow-400" />' 
      },
      // Pattern 7: {plan.icon}
      { 
        regex: /\{plan\.icon\}/g, 
        replacement: '<plan.icon className="w-8 h-8 text-indigo-400" />' 
      },
      // Pattern 8: {testimonial.icon}
      { 
        regex: /\{testimonial\.icon\}/g, 
        replacement: '<testimonial.icon className="w-8 h-8 text-pink-400" />' 
      }
    ];
    
    let modified = false;
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed icon rendering in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all files that need fixing
const filesToFix = [
  'app/blockchain/page.tsx',
  'app/cloud-migration-pro/page.tsx',
  'app/api/page.tsx',
  'app/analytics/page.tsx',
  'app/automation/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-email-automation/page.tsx',
  'app/ai-financial-analytics-pro/page.tsx',
  'app/ai-ecommerce-optimizer-pro/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-content-generator/page.tsx',
  'app/services/page.tsx',
  'app/demo/page.tsx'
];

let fixedCount = 0;
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (fixIconRendering(fullPath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} files with icon rendering issues.`);