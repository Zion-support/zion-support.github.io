const fs = require('fs');
const path = require('path');

// Function to fix corrupted TypeScript content
function fixCorruptedContent(content) {
  return content
    // Fix export statements
    .replace(/export,\s*interface,\s*/g, 'export interface ')
    .replace(/export,\s*type,\s*/g, 'export type ')
    .replace(/export,\s*const,\s*/g, 'export const ')
    .replace(/export,\s*function,\s*/g, 'export function ')
    
    // Fix type declarations
    .replace(/stri,\s*n,\s*g/g, 'string')
    .replace(/boole,\s*a,\s*n/g, 'boolean')
    .replace(/numb,\s*e,\s*r/g, 'number')
    .replace(/objec,\s*t/g, 'object')
    .replace(/an,\s*y/g, 'any')
    .replace(/voi,\s*d/g, 'void')
    
    // Fix array types
    .replace(/stri,\s*n,\s*g\[\]/g, 'string[]')
    .replace(/boole,\s*a,\s*n\[\]/g, 'boolean[]')
    .replace(/numb,\s*e,\s*r\[\]/g, 'number[]')
    
    // Fix property names
    .replace(/sl,\s*u,\s*g/g, 'slug')
    .replace(/tit,\s*l,\s*e/g, 'title')
    .replace(/descripti,\s*o,\s*n/g, 'description')
    .replace(/catego,\s*r,\s*y/g, 'category')
    .replace(/da,\s*t,\s*e/g, 'date')
    .replace(/readTi,\s*m,\s*e/g, 'readTime')
    .replace(/ta,\s*g,\s*s/g, 'tags')
    .replace(/featur,\s*e,\s*d/g, 'featured')
    .replace(/valuePropositi,\s*o,\s*n/g, 'valueProposition')
    .replace(/keyInsigh,\s*t,\s*s/g, 'keyInsights')
    .replace(/targetAudienc,\s*e/g, 'targetAudience')
    .replace(/businessImpac,\s*t/g, 'businessImpact')
    .replace(/technicalDep,\s*t,\s*h/g, 'technicalDepth')
    .replace(/industryFocu,\s*s/g, 'industryFocus')
    .replace(/relatedPost,\s*s/g, 'relatedPosts')
    .replace(/auth,\s*o,\s*r/g, 'author')
    .replace(/lastUpdate,\s*d/g, 'lastUpdated')
    .replace(/seoKeyword,\s*s/g, 'seoKeywords')
    .replace(/socialMediaExcerp,\s*t/g, 'socialMediaExcerpt')
    .replace(/callToActio,\s*n/g, 'callToAction')
    .replace(/compa,\s*n,\s*y/g, 'company')
    .replace(/indust,\s*r,\s*y/g, 'industry')
    .replace(/challen,\s*g,\s*e/g, 'challenge')
    .replace(/soluti,\s*o,\s*n/g, 'solution')
    .replace(/resul,\s*t,\s*s/g, 'results')
    .replace(/technologi,\s*e,\s*s/g, 'technologies')
    .replace(/durati,\s*o,\s*n/g, 'duration')
    .replace(/imageU,\s*r,\s*l/g, 'imageUrl')
    .replace(/excer,\s*p,\s*t/g, 'excerpt')
    .replace(/ima,\s*g,\s*e/g, 'image')
    .replace(/id,\s*:\s*stri,\s*n,\s*g/g, 'id: string')
    .replace(/id,\s*:\s*stri,\s*n,\s*g\[\]/g, 'id: string[]')
    
    // Fix comments
    .replace(/\/\*\*[\s\S]*?\*\//g, (match) => {
      return match.replace(/,\s*/g, ' ');
    })
    
    // Fix string literals in comments
    .replace(/\/\/[^\n]*/g, (match) => {
      return match.replace(/,\s*/g, ' ');
    });
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixCorruptedContent(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find TypeScript files
function findTsFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsFiles(fullPath));
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const tsFiles = findTsFiles(srcDir);

console.log(`Found ${tsFiles.length} TypeScript files to check...`);

let fixedCount = 0;
for (const file of tsFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);
console.log('Done!');
