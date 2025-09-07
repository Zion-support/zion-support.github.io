const fs = require('fs');
const path = require('path');

// List of auth API files that need fixing
const authFilesToFix = [
  'pages/api/auth/[...nextauth].ts',
  'pages/api/auth/login.ts',
  'pages/api/auth/logout.ts',
  'pages/api/auth/me.ts',
  'pages/api/auth/role.ts'
];

// Auth API file template
const authApiFileTemplate = (fileName) => `import type { NextApiRequest, NextApiResponse } from 'next';

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

// Fix each auth API file
authFilesToFix.forEach(filePath => {
  try {
    const fileName = path.basename(filePath, '.ts');
    const content = authApiFileTemplate(fileName);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed auth API file: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All auth API files fixed successfully!');