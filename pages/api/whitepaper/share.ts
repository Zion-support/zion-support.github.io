import { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';

// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { markdown, publicPreview } = req.body || {};
    
    if (!markdown) {
      return res.status(400).json({ error: 'Missing markdown' });
    }

    const id = randomUUID();
    store[id] = {
      markdown,
      createdAt: Date.now(),
      public: publicPreview || false
    };

    res.status(200).json({ success: true, id });
  } catch (error) {
    console.error('Whitepaper share error:', error);
    res.status(500).json({ error: 'Failed to share whitepaper' });
  }
}