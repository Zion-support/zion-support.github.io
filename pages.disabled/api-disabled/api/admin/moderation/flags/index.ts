import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }

  if (req.method === 'GET') {
    try {
      const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>;
      const allFlags = await readAllFlags();
      
      const filtered = allFlags.filter(f =>
        (!status || f.status === status) &&
        (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
        (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
        (!contentType || f.contentType === contentType)
      );
      
      return res.status(200).json({ flags: filtered });
    } catch (error) {
      console.error('Error fetching flags:', error);
      return res.status(500).json({ error: 'Failed to fetch flags' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { reason, userEmail, contentType, contentId, details } = req.body;
      
      if (!reason || !userEmail || !contentType || !contentId) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const flag = await createFlag({
        reason,
        userEmail,
        contentType,
        contentId,
        details: details || '',
        status: 'pending',
        createdAt: new Date().toISOString()
      });

      return res.status(201).json({ flag });
    } catch (error) {
      console.error('Error creating flag:', error);
      return res.status(500).json({ error: 'Failed to create flag' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end('Method Not Allowed');
}