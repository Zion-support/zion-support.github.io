const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in service pages
function fixServicePage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing braces in IndustryCard components
    content = content.replace(
      /features=\[([^\]]+)\]\s*\/>/g,
      (match, features) => {
        // Check if the features array is properly closed
        if (!features.includes(']')) {
          return match.replace(']', ']');
        }
        return match;
      }
    );

    // Fix duplicate metadata exports
    const metadataRegex = /export const metadata = \{[\s\S]*?\};/g;
    const metadataMatches = content.match(metadataRegex);
    if (metadataMatches && metadataMatches.length > 1) {
      // Keep only the first metadata export
      content = content.replace(metadataRegex, (match, index) => {
        return index === 0 ? match : '';
      });
      modified = true;
    }

    // Fix metadata in JSX
    content = content.replace(
      /\/\/ eslint-disable-next-line react-refresh\/only-export-components\nexport const metadata = \{[\s\S]*?\};\n/g,
      ''
    );

    // Fix missing closing tags
    content = content.replace(/(<IndustryCard[^>]*>)(?![\s\S]*?<\/IndustryCard>)/g, (match) => {
      return match + '</IndustryCard>';
    });

    // Fix duplicate description in metadata
    content = content.replace(
      /description: '[^']*',\s*description: '[^']*',/g,
      (match) => {
        const firstDesc = match.match(/description: '([^']*)'/)[1];
        return `description: '${firstDesc}',`;
      }
    );

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Find all service page files
const servicesDir = path.join(__dirname, 'app', 'services');
const serviceFiles = [];

function findServiceFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findServiceFiles(filePath);
    } else if (file === 'page.tsx') {
      serviceFiles.push(filePath);
    }
  });
}

findServiceFiles(servicesDir);

console.log(`Found ${serviceFiles.length} service page files`);

let fixedCount = 0;
serviceFiles.forEach(file => {
  if (fixServicePage(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);