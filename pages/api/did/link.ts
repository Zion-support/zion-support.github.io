import type { NextApiRequest, NextApiResponse } from 'next';

// In-memory demo store per process
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
(global as any).ZION_DID_STORE = store;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { did, link } = req.body;
    
    if (!did || !link) {
      return res.status(400).json({ error: 'DID and link are required' });
    }

    store[did] = { ...store[did], link };
    
    res.status(200).json({ success: true, did, link });
  } catch (error) {
    console.error('DID link error:', error);
    res.status(500).json({ error: 'Failed to link DID' });
  }
}