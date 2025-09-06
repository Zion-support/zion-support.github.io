import { NextApiRequest, NextApiResponse } from 'next';
import { parseUserFromRequest } from '../../../../utils/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const user = await parseUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.query;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: 'Invalid dispute ID' });
    }

    if (req.method === 'POST') {
      const { resolution, notes } = req.body;
      if (!resolution) {
        return res.status(400).json({ error: 'Resolution is required' });
      }

      // Resolve dispute logic
      return res.status(200).json({ 
        success: true, 
        disputeId: id,
        resolution,
        resolvedBy: user.id,
        resolvedAt: new Date().toISOString()
      });
    }

    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  } catch (error) {
    console.error('Dispute resolve error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}