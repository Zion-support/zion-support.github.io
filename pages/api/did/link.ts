import type { NextApiRequest, NextApiResponse } from 'next';

// In-memory demo store per process
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
(global as any).ZION_DID_STORE = store;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { did, data } = req.body;

    if (!did || !data) {
      return res.status(400).json({ error: 'DID and data are required' });
    }

    store[did] = data;

    res.status(200).json({
      success: true,
      did,
      message: 'DID linked successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to link DID'
    });
  }
}