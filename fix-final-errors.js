import fs from 'fs';
import { glob } from 'glob';

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix ErrorBoundary import - use default import
    if (content.includes("import { ErrorBoundary } from")) {
      content = content.replace(
        /import \{ ErrorBoundary \} from ['"][^'"]+['"]/g,
        "import ErrorBoundary from '@/components/ErrorBoundary'"
      );
      modified = true;
    }
    
    // Fix duplicate metadata declarations - keep only the first one
    const lines = content.split('\n');
    const newLines = [];
    let metadataCount = 0;
    let skipUntilNextImport = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('export const metadata = {')) {
        metadataCount++;
        if (metadataCount === 1) {
          // Keep the first metadata declaration
          newLines.push(line);
          // Find the closing brace
          let braceCount = 1;
          let j = i + 1;
          while (j < lines.length && braceCount > 0) {
            newLines.push(lines[j]);
            if (lines[j].includes('{')) braceCount++;
            if (lines[j].includes('}')) braceCount--;
            j++;
          }
          i = j - 1; // Skip the processed lines
        } else {
          // Skip duplicate metadata declarations
          skipUntilNextImport = true;
        }
      } else if (skipUntilNextImport && (line.startsWith('import ') || line.startsWith('function ') || line.startsWith('export '))) {
        skipUntilNextImport = false;
        newLines.push(line);
      } else if (!skipUntilNextImport) {
        newLines.push(line);
      }
    }
    
    if (metadataCount > 1) {
      content = newLines.join('\n');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page.tsx files
async function fixAllFiles() {
  try {
    const files = await glob('app/**/page.tsx');
    files.forEach(fixFile);
    console.log('All files processed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixAllFiles();