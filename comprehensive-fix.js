import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix all remaining issues
function fixAllIssues(content) {
  // Fix malformed array structures
  content = content.replace(/\]\s*\}\s*,\s*\{/g, '],\n  {');
  content = content.replace(/\]\s*\}\s*\]/g, ']\n  }');
  
  // Fix missing closing brackets
  content = content.replace(/\)\s*$/g, ');\n}');
  
  // Fix malformed JSX
  content = content.replace(/<p className="[^"]*">"/g, '<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">');
  content = content.replace(/<\/p>\s*<\/p>/g, '</p>');
  
  // Fix template literals
  content = content.replace(/href={`\/blog\/\${post\.id}`}/g, 'href={`/blog/${post.id}`}');
  
  // Fix missing closing tags
  content = content.replace(/\)\s*;\s*$/g, ');\n}');
  
  // Fix import statements
  content = content.replace(/import \{ motion \} from 'framer-motion;/g, "import { motion } from 'framer-motion';");
  content = content.replace(/import \{\}\s*\/\/ TODO: Implement\s*\}/g, 'import { Users, MapPin, Clock } from \'lucide-react\';');
  
  // Fix missing semicolons
  content = content.replace(/Read More;\s*$/g, 'Read More');
  content = content.replace(/Load More Posts;\s*$/g, 'Load More Posts');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixAllIssues(content);
    
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

// Process the specific files that have errors
const errorFiles = [
  'pages/accessibility.tsx',
  'pages/ai-services.tsx',
  'pages/api.tsx',
  'pages/blog.tsx',
  'pages/careers.tsx'
];

console.log(`Processing ${errorFiles.length} files with errors`);

let fixedCount = 0;
errorFiles.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);