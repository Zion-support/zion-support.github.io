import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix @/components/ErrorBoundary imports
    if (content.includes("")) {
      content = content.replace(
        "",
        ""
      );
      modified = true;
    }

    // Fix @/components/ErrorBoundary imports for nested pages
    if (filePath.includes('micro-saas-services/')) {
      if (content.includes("")) {
        content = content.replace(
          "",
          ""
        );
        modified = true;
      }
    }

    // Fix @/components/ErrorBoundary imports for it-services pages
    if (filePath.includes('it-services/')) {
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