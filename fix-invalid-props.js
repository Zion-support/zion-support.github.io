import fs from 'fs';

// Files to fix
const filesToFix = [
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/page.tsx'
];

function fixInvalidProps(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove invalid properties from FuturisticCardEnhanced
    const cardPropsToRemove = [
      'glowColor',
      'hoverEffect', 
      'animated',
      'neon'
    ];

    cardPropsToRemove.forEach(prop => {
      const regex = new RegExp(`\\s*${prop}=[^\\s>]+`, 'g');
      if (content.includes(prop)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });

    // Remove invalid properties from FuturisticButtonEnhanced
    const buttonPropsToRemove = [
      'glowColor',
      'neon',
      'animated'
    ];

    buttonPropsToRemove.forEach(prop => {
      const regex = new RegExp(`\\s*${prop}=[^\\s>]+`, 'g');
      if (content.includes(prop)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });

    // Clean up extra spaces and empty lines
    content = content.replace(/\s+>/g, '>');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed invalid props in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixInvalidProps);
console.log('Invalid properties fixed!');