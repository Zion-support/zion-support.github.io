const fs = require('fs');
const path = require('path');

function fixApiFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file already looks good
    if (content.includes('export default function handler') || content.includes('export default async function handler')) {
      return;
    }
    
    // Common patterns to fix
    const patterns = [
      // Empty files with just closing braces
      /^[\s\n]*\}\s*$/,
      // Files with just a closing brace and newline
      /^[\s\n]*\}\n\s*$/,
      // Files with merge conflict markers
      /^[\s\n]*<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+\s*$/,
      // Files with incomplete syntax
      /^[\s\n]*\}[\s\n]*res\.setHeader[\s\S]*$/,
      // Files with just a return statement
      /^[\s\n]*return;[\s\S]*$/,
    ];
    
    let shouldReplace = false;
    for (const pattern of patterns) {
      if (pattern.test(content)) {
        shouldReplace = true;
        break;
      }
    }
    
    if (shouldReplace) {
      const newContent = `import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}`;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      fixApiFile(filePath);
    }
  }
}

// Start from the API directory
walkDir('/workspace/pages/api');
console.log('Syntax fixing complete!');