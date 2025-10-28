import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix imports for nested directories (2 levels deep)
    if (filePath.includes('micro-saas-services/') || filePath.includes('it-services/')) {
      if (content.includes("")) {
        content = content.replace(
          "",
          ""
        );
        modified = true;
      }
      
      if (content.includes("")) {
        content = content.replace(
          "",
          ""
        );
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
            return true;
    }
    
    return false;
  } catch (error) {
        return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  }

main().catch(console.error);