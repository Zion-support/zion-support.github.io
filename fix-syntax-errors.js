import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix malformed export statements
function fixExportStatement(content) {
  // Fix malformed export statements like "export default function Wrapped\n(props) {"
  content = content.replace(
    /export default function Wrapped\s*\n\s*\(props\)\s*\{/g,
    'export default function Wrapped(props: any) {'
  );
  
  // Fix malformed JSX like "<\n {...props} />"
  content = content.replace(
    /<\s*\n\s*\{\.\.\.props\}\s*\/>/g,
    '<Page {...props} />'
  );
  
  // Fix malformed onClick handlers like "onClick={() = aria-label="Button"> function()}"
  content = content.replace(
    /onClick=\{\(\)\s*=\s*aria-label="[^"]*">\s*([^}]+)\}/g,
    (match, functionBody) => {
      const ariaLabel = match.match(/aria-label="([^"]*)"/);
      return `onClick={() => ${functionBody.trim()}}\n                aria-label="${ariaLabel ? ariaLabel[1] : 'Button'}"`;
    }
  );
  
  return content;
}

// Function to fix duplicate metadata exports
function fixDuplicateMetadata(content) {
  const lines = content.split('\n');
  const metadataLines = [];
  let inMetadata = false;
  let metadataCount = 0;
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('export const metadata')) {
      if (metadataCount === 0) {
        inMetadata = true;
        metadataLines.push(line);
        metadataCount++;
      } else {
        // Skip duplicate metadata
        continue;
      }
    } else if (inMetadata && line.includes('};')) {
      metadataLines.push(line);
      inMetadata = false;
      result.push(metadataLines.join('\n'));
      metadataLines.length = 0;
    } else if (inMetadata) {
      metadataLines.push(line);
    } else {
      result.push(line);
    }
  }
  
  return result.join('\n');
}

// Function to fix semicolon issues
function fixSemicolons(content) {
  // Remove standalone semicolons
  content = content.replace(/;\s*\n\s*;/g, ';\n');
  content = content.replace(/;\s*$/gm, '');
  
  // Fix missing semicolons after imports
  content = content.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  return content;
}

// Function to fix component names in export statements
function fixComponentNames(content, fileName) {
  // Extract component name from file path
  const componentName = path.basename(fileName, '.tsx');
  const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  
  // Replace generic Page with specific component name
  content = content.replace(/<Page \{\.\.\.props\} \/>/g, `<${capitalizedName} {...props} />`);
  
  return content;
}

// Main function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply fixes
    content = fixDuplicateMetadata(content);
    content = fixSemicolons(content);
    content = fixExportStatement(content);
    content = fixComponentNames(content, filePath);
    
    // Write back the fixed content
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Get all page.tsx files
  const files = await glob('app/**/page.tsx', { cwd: '/workspace' });

  console.log(`Found ${files.length} page files to fix`);

  let fixedCount = 0;
  files.forEach(file => {
    const fullPath = path.join('/workspace', file);
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} out of ${files.length} files`);
}

main().catch(console.error);