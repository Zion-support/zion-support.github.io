import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'docs', 'changelog.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const content = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
        : { content: '' };
      res.status(200).json(content);
    } catch (e: any) {
      console.error('Error reading changelog:', e);
      res.status(500).json({ error: 'Failed to read changelog' });
    }
  } else if (req.method === 'POST') {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify({ content }, null, 2));
      res.status(200).json({ success: true });
    } catch (e: any) {
      console.error('Error writing changelog:', e);
      res.status(500).json({ error: 'Failed to write changelog' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}