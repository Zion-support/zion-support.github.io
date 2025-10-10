#!/usr/bin/env node
import fs from 'fs';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove all merge conflict markers and keep both versions where possible
  content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> cursor\/enhance-app-with-new-services-and-futuristic-design-228f/g, (match, headContent, cursorContent) => {
    // For simple property conflicts, merge both versions
    if (headContent.includes('description:') && cursorContent.includes('description:')) {
      const headDesc = headContent.match(/description:\s*'([^']+)'/)?.[1] || '';
      const cursorDesc = cursorContent.match(/description:\s*'([^']+)'/)?.[1] || '';
      const mergedDesc = headDesc && cursorDesc ? `${headDesc} ${cursorDesc}` : headDesc || cursorDesc;
      
      const headPrice = headContent.match(/price:\s*'([^']+)'/)?.[1] || '';
      const cursorPrice = cursorContent.match(/price:\s*'([^']+)'/)?.[1] || '';
      const finalPrice = headPrice || cursorPrice;
      
      const headMarketPrice = headContent.match(/marketPrice:\s*'([^']+)'/)?.[1] || '';
      const cursorMarketPrice = cursorContent.match(/marketPrice:\s*'([^']+)'/)?.[1] || '';
      const finalMarketPrice = headMarketPrice || cursorMarketPrice;
      
      // Extract features from both versions
      const headFeatures = headContent.match(/features:\s*\[([\s\S]*?)\]/)?.[1] || '';
      const cursorFeatures = cursorContent.match(/features:\s*\[([\s\S]*?)\]/)?.[1] || '';
      const mergedFeatures = [...new Set([...headFeatures.split(','), ...cursorFeatures.split(',')])]
        .map(f => f.trim().replace(/['"]/g, ''))
        .filter(f => f && f !== '')
        .map(f => `'${f}'`)
        .join(', ');
      
      // Extract benefits from both versions
      const headBenefits = headContent.match(/benefits:\s*\[([\s\S]*?)\]/)?.[1] || '';
      const cursorBenefits = cursorContent.match(/benefits:\s*\[([\s\S]*?)\]/)?.[1] || '';
      const mergedBenefits = [...new Set([...headBenefits.split(','), ...cursorBenefits.split(',')])]
        .map(b => b.trim().replace(/['"]/g, ''))
        .filter(b => b && b !== '')
        .map(b => `'${b}'`)
        .join(', ');
      
      return `description: '${mergedDesc}',
      price: '${finalPrice}',
      marketPrice: '${finalMarketPrice}',
      features: [${mergedFeatures}],
      benefits: [${mergedBenefits}],`;
    }
    
    // For other conflicts, prefer the HEAD version
    return headContent.trim();
  });
  
  // Clean up any remaining merge conflict markers
  content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> cursor\/enhance-app-with-new-services-and-futuristic-design-228f/g, '');
  content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> cursor\/enhance-app-with-new-services-and-futuristic-design-228f/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed merge conflicts in ${filePath}`);
}

// Fix merge conflicts in page.tsx
fixMergeConflicts('/workspace/app/page.tsx');

console.log('All merge conflicts fixed!');