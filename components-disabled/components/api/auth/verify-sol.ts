import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { address, signature, message } = req.body || {};
  if (!address || !signature || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Mock verification - replace with actual Solana signature verification
    const isValid = verifySolanaSignature(address, signature, message);
    
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid signature' });
    }

    return res.status(200).json({ 
      verified: true, 
      address,
      message: 'Solana signature verified successfully' 
    });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Verify failed' });
  }
}

function verifySolanaSignature(address: string, signature: string, message: string): boolean {
  // Mock implementation - replace with actual Solana signature verification
  return true;
}