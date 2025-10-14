import fs from 'fs';
import { glob } from 'glob';

// Function to fix missing JSX fragment closing tags
function fixJSXFragments(content) {
  let fixed = content;
  
  // Count opening and closing fragment tags
  const openFragments = (fixed.match(/<>/g) || []).length;
  const closeFragments = (fixed.match(/<\/>/g) || []).length;
  
  if (openFragments > closeFragments) {
    const missingFragments = openFragments - closeFragments;
    
    // Find the last closing tag before export
    const lines = fixed.split('\n');
    let insertIndex = lines.length - 1;
    
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].includes('export default') || lines[i].includes('}')) {
        insertIndex = i;
        break;
      }
    }
    
    // Insert missing closing fragment tags with proper indentation
    for (let i = 0; i < missingFragments; i++) {
      lines.splice(insertIndex, 0, '    </>');
    }
    
    fixed = lines.join('\n');
  }
  
  return fixed;
}

// Function to fix missing div closing tags
function fixMissingDivTags(content) {
  let fixed = content;
  
  // Count opening and closing div tags
  const openDivs = (fixed.match(/<div[^>]*>/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  
  if (openDivs > closeDivs) {
    const missingDivs = openDivs - closeDivs;
    
    // Find the last closing tag before export
    const lines = fixed.split('\n');
    let insertIndex = lines.length - 1;
    
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].includes('export default') || lines[i].includes('}')) {
        insertIndex = i;
        break;
      }
    }
    
    // Insert missing closing div tags with proper indentation
    for (let i = 0; i < missingDivs; i++) {
      lines.splice(insertIndex, 0, '      </div>');
    }
    
    fixed = lines.join('\n');
  }
  
  return fixed;
}

// Function to fix specific structural issues
function fixStructuralIssues(content) {
  let fixed = content;
  
  // Fix malformed p tags
  fixed = fixed.replace(/<p className="([^"]*)"><\/p>\s*([^<]+)\s*<\/p>/g, '<p className="$1">$2</p>');
  
  // Fix specific pattern in 404 page
  fixed = fixed.replace(
    /<p className="text-xl text-gray-300 mb-8"><\/p>\s*Professional 404 solutions and services\s*<\/p>/g,
    '<p className="text-xl text-gray-300 mb-8">\n              Professional 404 solutions and services\n            </p>'
  );
  
  // Fix malformed object properties with &apos;
  fixed = fixed.replace(/title: &apos;([^&]+)&apos;/g, "title: '$1'");
  fixed = fixed.replace(/description: &apos;([^&]+)&apos;/g, "description: '$1'");
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFiles(filePath, content) {
  let fixed = content;
  
  // Fix 404 page
  if (filePath.includes('404/page.tsx')) {
    fixed = fixed.replace(
      /<p className="text-xl text-gray-300 mb-8"><\/p>\s*Professional 404 solutions and services\s*<\/p>/g,
      '<p className="text-xl text-gray-300 mb-8">\n              Professional 404 solutions and services\n            </p>'
    );
  }
  
  // Fix 5G consulting page
  if (filePath.includes('5g-consulting/page.tsx')) {
    fixed = fixed.replace(/title: &apos;([^&]+)&apos;/g, "title: '$1'");
    fixed = fixed.replace(/description: &apos;([^&]+)&apos;/g, "description: '$1'");
  }
  
  // Fix 5G data analytics page
  if (filePath.includes('5g-data-analytics/page.tsx')) {
    fixed = fixed.replace(/title: &apos;([^&]+)&apos;/g, "title: '$1'");
    fixed = fixed.replace(/description: &apos;([^&]+)&apos;/g, "description: '$1'");
  }
  
  // Fix 5G deployment page
  if (filePath.includes('5g-deployment/page.tsx')) {
    fixed = fixed.replace(/title: &apos;([^&]+)&apos;/g, "title: '$1'");
    fixed = fixed.replace(/description: &apos;([^&]+)&apos;/g, "description: '$1'");
  }
  
  // Fix 5G integration page
  if (filePath.includes('5g-integration/page.tsx')) {
    fixed = fixed.replace(/title: &apos;([^&]+)&apos;/g, "title: '$1'");
    fixed = fixed.replace(/description: &apos;([^&]+)&apos;/g, "description: '$1'");
  }
  
  // Fix 5G maintenance page
  if (filePath.includes('5g-maintenance/page.tsx')) {
    fixed = fixed.replace(/title: &apos;([^&]+)&apos;/g, "title: '$1'");
    fixed = fixed.replace(/description: &apos;([^&]+)&apos;/g, "description: '$1'");
  }
  
  // Fix 5G migration page
  if (filePath.includes('5g-migration/page.tsx')) {
    fixed = fixed.replace(/title: &apos;([^&]+)&apos;/g, "title: '$1'");
    fixed = fixed.replace(/description: &apos;([^&]+)&apos;/g, "description: '$1'");
  }
  
  // Fix 5G modernization page
  if (filePath.includes('5g-modernization/page.tsx')) {
    fixed = fixed.replace(/title: &apos;([^&]+)&apos;/g, "title: '$1'");
    fixed = fixed.replace(/description: &apos;([^&]+)&apos;/g, "description: '$1'");
  }
  
  // Fix 5G monitoring page
  if (filePath.includes('5g-monitoring/page.tsx')) {
    fixed = fixed.replace(/title: &apos;([^&]+)&apos;/g, "title: '$1'");
    fixed = fixed.replace(/description: &apos;([^&]+)&apos;/g, "description: '$1'");
  }
  
  return fixed;
}

// Main function to process all files
async function processFiles() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process`);
  
  let fixedCount = 0;
  
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;
      
      // Apply all fixes
      fixed = fixJSXFragments(fixed);
      fixed = fixMissingDivTags(fixed);
      fixed = fixStructuralIssues(fixed);
      fixed = fixSpecificFiles(filePath, fixed);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

// Run the fix
processFiles().catch(console.error);