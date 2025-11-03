const fs = require('fs');
const path = require('path');

// Function to convert path to title
function pathToTitle(filePath) {
  const parts = filePath.split('/');
  const routePart = parts[parts.length - 2]; // Get directory name before page.tsx
  
  // Convert kebab-case or snake_case to Title Case
  return routePart
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to check if file has default export
function hasDefaultExport(content) {
  return /export\s+default\s+/m.test(content);
}

// Function to extract metadata
function extractMetadata(content) {
  const metadataMatch = content.match(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\};/);
  return metadataMatch ? metadataMatch[0] : null;
}

// Function to generate page component
function generatePageComponent(filePath, metadata) {
  const title = pathToTitle(filePath);
  const route = filePath.replace('app/', '/').replace('/page.tsx', '');
  
  let component = `
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Advanced solutions powered by cutting-edge technology
          </p>
        </div>
      </div>
    </div>
  );
}
`;
  
  if (metadata) {
    return metadata + '\n' + component;
  } else {
    const defaultMetadata = `
export const metadata = {
  title: '${title} | Zion Tech Group',
  description: 'Advanced ${title.toLowerCase()} solutions and services',
};
`;
    return defaultMetadata + component;
  }
}

// Find all page.tsx files
function findPageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other build directories
      if (!['node_modules', 'dist', '.next', 'build'].includes(file)) {
        results = results.concat(findPageFiles(filePath));
      }
    } else if (file === 'page.tsx') {
      results.push(filePath);
    }
  });
  
  return results;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

let fixed = 0;
let skipped = 0;

pageFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has default export
    if (hasDefaultExport(content)) {
      skipped++;
      return;
    }
    
    // Skip if file is empty or whitespace only
    if (!content.trim() || content.trim().length < 10) {
      const metadata = null;
      const newContent = generatePageComponent(filePath, metadata);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✓ Fixed empty: ${filePath}`);
      fixed++;
      return;
    }
    
    // Extract existing metadata if present
    const metadata = extractMetadata(content);
    
    // Generate new content
    const newContent = generatePageComponent(filePath, metadata);
    
    // Write back to file
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✓ Fixed: ${filePath}`);
    fixed++;
    
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nSummary:`);
console.log(`Fixed: ${fixed} files`);
console.log(`Skipped (already valid): ${skipped} files`);
console.log(`Total processed: ${pageFiles.length} files`);

