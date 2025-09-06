import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { markdown } = req.body || {};
    
    // Placeholder implementation for proposal export
    const lines = markdown?.replace(/\r\n/g, '\n').split('\n') || [];
    const wrapped = lines.length ? lines : [' '];
    
    res.status(200).json({ 
      message: 'Proposal exported',
      lines: wrapped
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}