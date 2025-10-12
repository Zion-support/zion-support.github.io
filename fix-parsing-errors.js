#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Function to fix common parsing errors
function fixFileContent(content) {
  let fixed = content;
  // Fix invalid escape sequences in import statements
  fixed = fixed.replace(/import\s+([^']+)from\s+\'([^']+)\'/g, "import $1 from '$2'");
  // Fix c las sNa me s pac ing i ssu es (m issing s paces b etw een c lasses)
  fixed = fixed.replace(/(\w+)([A-Z][a-z]+)(\w+)/g, (match, p1, p2, p3) => {
    // O nly fix if it l ooks l ike a c las sNa me i ssue (cont ains common T ail wind patt erns)
    if (match.includes('from-') || match.includes('to-') || match.includes('bg-') || 
        match.includes('text-') || match.includes('border-') || match.includes('px-') || 
        match.includes('py-') || match.includes('mb-') || match.includes('mt-') ||
        match.includes('ml-') || match.includes('mr-') || match.includes('mx-') ||
        match.includes('pt-') || match.includes('pb-') || match.includes('pl-') ||
        match.includes('pr-') || match.includes('gap-') || match.includes('col-') ||
        match.includes('md:') || match.includes('lg:') || match.includes('sm:') ||
        match.includes('xl:') || match.includes('2xl:')) {
      return p1 + ' ' + p2 + p3;
    }
    return match;
  });
  // Fix specific common patt erns
  fixed = fixed.replace(/from-slate-900pt-20/g, 'from-slate-900 pt-20');
  fixed = fixed.replace(/text-white-m-b-6/g, 'text-whi-t-e mb-6');
  fixed = fixed.replace(/text-gr-a-y-300mb-8/g, 'text-gr-a-y-300 mb-8');
  fixed = fixed.replace(/mx-autow-fit/g, 'mx-auto w-fit');
  fixed = fixed.replace(/w-5 h-5ml-2/g, 'w-5 h-5 ml-2');
  fixed = fixed.replace(/border-tborder-slate-800/g, 'border-t border-slate-800');
  fixed = fixed.replace(/px-4 sm:px-6 lg:px-8-py-12/g, 'px-4 sm:px-6 lg:px-8 py-12');
  fixed = fixed.replace(/grid-cols-1 md:grid-cols-4gap-8/g, 'grid-cols-1 md:grid-cols-4 gap-8');
  fixed = fixed.replace(/col-s pan-1md:col-s pan-2/g, 'col-s pan-1 md:col-s pan-2');
  // Fix malformed JSX - add m issing open ing t ags
  fixed = fixed.replace(/<d iv c las sNa me="[^"]*" \/>/g, (match) => {
    const c las sNa me = match.match(/c las sNa me="([^"]*)"/)[1];
    return `<d iv c las sNa me="${c l ass Name}">`;
  });
  // Fix s elf-closing d ivs that should be open ing t ags
  fixed = fixed.replace(/<d iv c las sNa me="([^"]*)" \/>\s*<([^>]+)>/g, '<d iv c las sNa me="$1">\n        <$2>');
  // R emo ve invalid 'use client' directive (this is a Vite project, not Next.js)
  fixed = fixed.replace(/'use client';\s*\n/g, '');
  // Fix JSX expressions that need parent elements
  fixed = fixed.replace(/<Helmet \/>\s*<title>/g, '<Helmet>\n        <title>');
  fixed = fixed.replace(/<\/title>\s*<meta/g, '</title>\n        <meta');
  fixed = fixed.replace(/<\/meta>\s*<\/Helmet>/g, '</meta>\n      </Helmet>');
  return fixed;
}
// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFileContent(content);
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
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
  console.log('Starting to fix parsing errors...');
  // Get all TypeScript/TSX files
}
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
  });
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  console.log(`\nFixed ${fixedCount} files out of ${files.length} total files.`);
}
main().catch(console.error);
export { fixFileContent, processFile };