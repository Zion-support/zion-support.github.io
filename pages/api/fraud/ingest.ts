import { NextApiRequest, NextApiResponse } from 'next';

type GptClassificationLabel = 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { data, heuristic, gpt } = req.body;
    
    let combinedLabel: GptClassificationLabel = gpt?.label || (heuristic.flagged ? 'SUSPICIOUS' : 'SAFE');
    if (heuristic.severity === 'high') combinedLabel = 'DANGEROUS';
    if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';
    
    res.status(200).json({ 
      classification: combinedLabel,
      processed: true 
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}