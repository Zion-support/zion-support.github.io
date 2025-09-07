import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      return res.status(405).end('Method Not Allowed');
    }
    
    res.status(200).json({ export: 'available' });
  } catch (e: unknown) {
    res.status(500).json({
      error: (e as Error)?.message || 'Export failed'
    });
  }
}