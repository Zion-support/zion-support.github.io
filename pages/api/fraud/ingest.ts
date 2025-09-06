import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { heuristic, gpt } = req.body || {};
    
    let combinedLabel = gpt?.label || (heuristic?.flagged ? 'SUSPICIOUS' : 'SAFE');
    if (heuristic?.severity === 'high') combinedLabel = 'DANGEROUS';
    if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';
    
    res.status(200).json({ 
      message: 'Fraud ingest endpoint',
      combinedLabel 
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}