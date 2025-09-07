const fs = require('fs');
const path = require('path');

const apiTemplate = `import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    res.status(200).json({ message: 'API endpoint working' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}`;

function replaceApiFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      replaceApiFiles(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.js')) {
      console.log(`Replacing: ${filePath}`);
      fs.writeFileSync(filePath, apiTemplate);
    }
  }
}

console.log('Replacing all API files...');
replaceApiFiles('./pages/api');
console.log('All API files replaced!');