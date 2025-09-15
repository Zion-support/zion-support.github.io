import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { data, name, type } = req.body || {};
  if (!data || !name) {
    return res.status(400).json({ error: 'Missing data or name' });
  }

  try {
    // Mock implementation - replace with actual backup upload logic
    const backup = {
      id: Date.now().toString(),
      name,
      type: type || 'manual',
      size: data.length,
      createdAt: new Date().toISOString(),
      status: 'completed',
    };

    return res.status(200).json({ backup });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Backup failed' });
  }
}