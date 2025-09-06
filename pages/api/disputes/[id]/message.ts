import { NextApiRequest, NextApiResponse } from 'next';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin
} from '../../../../utils/auth';

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

    await ensureInvolvedOrAdmin(user.id, id);

    if (req.method === 'POST') {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      // Save message logic
      return res.status(200).json({ success: true, messageId: Date.now().toString() });
    }

    if (req.method === 'GET') {
      // Get messages logic
      return res.status(200).json({ messages: [] });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Dispute message error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}