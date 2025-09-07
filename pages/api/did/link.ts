import { NextApiRequest, NextApiResponse } from 'next';

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
(global as any).__ZION_DID_STORE__ = store;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { payload, message, signature } = req.body || {};
  
  if (!payload || !message || !signature) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Placeholder for DID linking logic
  res.status(200).json({ success: true, message: 'DID linking not implemented' });
}