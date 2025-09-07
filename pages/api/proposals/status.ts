import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id, status } = req.body || {};
    
    if (!id || !status) {
      return res.status(400).json({ error: 'ID and status are required' });
    }

    // Placeholder for proposal status update logic
    res.status(200).json({ success: true, message: 'Proposal status updated' });
  } catch (error) {
    console.error('Proposal status update error:', error);
    res.status(500).json({ error: 'Failed to update proposal status' });
  }
}