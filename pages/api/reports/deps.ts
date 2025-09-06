import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const depsPath = path.join(process.cwd(), 'package.json');
    
    if (!fs.existsSync(depsPath)) {
      return res.status(404).json({ error: 'Dependencies not found' });
    }
    
    const packageJson = JSON.parse(fs.readFileSync(depsPath, 'utf8'));
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};
    
    res.status(200).json({ 
      dependencies, 
      devDependencies,
      totalDeps: Object.keys(dependencies).length + Object.keys(devDependencies).length
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps report' });
  }
}