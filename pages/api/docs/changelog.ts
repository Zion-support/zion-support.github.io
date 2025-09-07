

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'changelog.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const content = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, "utf8"))
        : { content: "" };
      res.status(200).json(content);
    } catch (e: any) {
      res.status(500).json({ error: 'Failed to read changelog' });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }
      
      // Ensure data directory exists
      const dataDir = path.dirname(filePath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, JSON.stringify({ content }, null, 2));
      res.status(200).json({ success: true });
    } catch (e: any) {
      res.status(500).json({ error: 'Failed to save changelog' });
    }
    return;
  }
  
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
