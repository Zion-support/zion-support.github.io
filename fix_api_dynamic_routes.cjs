const fs = require('fs');
const path = require('path');

// Find all dynamic route API files
const apiDir = 'pages/api';
const dynamicApiFiles = [];

function findDynamicApiFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        findDynamicApiFiles(filePath);
      } else if (file.endsWith('.ts') || file.endsWith('.js')) {
        // Check if it's a dynamic route (contains [])
        if (file.includes('[') && file.includes(']')) {
          dynamicApiFiles.push(filePath);
        }
      }
    });
  } catch (error) {
    // Directory doesn't exist or can't be read
  }
}

findDynamicApiFiles(apiDir);

// API file template
const apiFileTemplate = (fileName) => `import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement ${fileName} logic
    res.status(200).json({ message: '${fileName} endpoint' });
  } catch (error) {
    console.error('Error in ${fileName}:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}`;

// Fix each dynamic API file
let fixedCount = 0;
dynamicApiFiles.forEach(filePath => {
  try {
    const fileName = path.basename(filePath, path.extname(filePath));
    // Clean up the filename for function names
    const cleanFileName = fileName.replace(/[^a-zA-Z0-9]/g, '');
    const content = apiFileTemplate(cleanFileName);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed dynamic API file: ${filePath}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} dynamic API files successfully!`);