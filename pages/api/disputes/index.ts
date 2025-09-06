import { NextApiRequest, NextApiResponse } from 'next';
import { parseUserFromRequest } from '../../../utils/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await parseUserFromRequest(req);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (req.method === 'GET') {
      const { status, page = 1, limit = 10 } = req.query;
      
      // Get disputes logic
      const disputes = [];
      const total = 0;
      
      return res.status(200).json({
        disputes,
        pagination: {
          page: parseInt(page as string),
          limit: parseInt(limit as string),
          total,
          pages: Math.ceil(total / parseInt(limit as string))
        }
      });
    }

    if (req.method === 'POST') {
      const { title, description, type, relatedId } = req.body;
      
      if (!title || !description || !type) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Create dispute logic
      const dispute = {
        id: Date.now().toString(),
        title,
        description,
        type,
        relatedId,
        createdBy: user.id,
        createdAt: new Date().toISOString(),
        status: 'open'
      };

      return res.status(201).json(dispute);
    }

    res.setHeader('Allow', 'GET,POST');
    return res.status(405).end('Method Not Allowed');
  } catch (error) {
    console.error('Disputes API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}