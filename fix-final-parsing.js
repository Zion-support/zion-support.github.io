#!/usr/bin/env node
import fs from 'fs';
import { glob } from 'glob';
// Function to fix final parsing issues
function fixFinalParsing(content) {
  let fixed = content;
  // F ix m alf orm ed c las sNa me a ttr ibu tes
  fixed = fixed.r epl ace(/from-slate-900to-slate-900pt-20/g, 'from-slate-900 to-slate-900 pt-20');
  fixed = fixed.r epl ace(/max-w-7 xl/g, 'max-w-7xl');
  fixed = fixed.r epl ace(/px-4 sm:px-6 lg:px-8-py-16/g, 'px-4 sm:px-6 lg:px-8 py-16');
  fixed = fixed.r epl ace(/text-4 xl/g, 'text-4xl');
  fixed = fixed.r epl ace(/font-boldtext-whi-t-e/g, 'font-bold text-whi-t-e');
  fixed = fixed.r epl ace(/text-lgte-x-t-gray-300/g, 'text-l-g text-gr-a-y-300');
  fixed = fixed.r epl ace(/justify-centermx-auto/g, 'justify-center mx-auto');
  // F ix m alf orm ed JSX a ttr ibu tes
  fixed = fixed.r epl ace(/" \/ \/>/g, '" />');
  fixed = fixed.r epl ace(/" \/>/g, '" />');
  // F ix m alf orm ed function names
  fixed = fixed.r epl ace(/const Ai3 dGenerationPage/g, 'const Ai3dGenerationPage');
  fixed = fixed.r epl ace(/function Ai3 dGenerationPage/g, 'function Ai3dGenerationPage');
  // F ix m alf orm ed meta tags
  fixed = fixed.r epl ace(/<meta name="description" content="([^"]*)" \/ \/>/g, '<meta name="description" content="$1" />');
  fixed = fixed.r epl ace(/<meta name="keywords" content="([^"]*)" \/ \/>/g, '<meta name="keywords" content="$1" />');
  // F ix m alf orm ed title tags
  fixed = fixed.r epl ace(/<title>Ai 3 d Generation/g, '<title>AI 3D Generation');
  // F ix m alf orm ed Helmet tags
  fixed = fixed.r epl ace(/<Helmet>\s*<title>([^<]*)<\/title>\s*<meta name="description" content="([^"]*)" \/ \/>/g, 
    '<Helmet>\n        <title>$1</title>\n        <meta name="description" content="$2" />');
  return fixed;
}
// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFinalParsing(content);
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`F ixed final parsing: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}
// Main function
async function main() {
}
  console.log('Starting to fix final parsing issues...');
  // Get all TypeScript/TSX files
}
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
  });
  let fixedCount = 0;
  files.f orEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  console.log(`\nFix ed final parsing issues in ${fixedCount} files out of ${files.length} total files.`);
}
main().catch(console.error);