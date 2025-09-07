import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const filePath = path.join(process.cwd(), 'data', 'changelog.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const content = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, "utf8"))
        : { content: "" };
      res.status(200).json(content);
    } catch (e: any) {
      console.error('Error reading changelog:', e);
      res.status(500).json({ error: 'Failed to read changelog' });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const { content } = req.body || {};
      if (!content) {
        return res.status(400).json({ error: 'Missing content' });
      }

      // Ensure data directory exists
      const dataDir = path.dirname(filePath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      fs.writeFileSync(filePath, JSON.stringify({ content }, null, 2));
      res.status(200).json({ success: true });
    } catch (e: any) {
      console.error('Error writing changelog:', e);
      res.status(500).json({ error: 'Failed to write changelog' });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
