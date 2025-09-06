import type { NextApiRequest, NextApiResponse } from 'next';
import { parseUserFromRequest } from '../../../../utils/auth';
import { readFile, writeFile } from '../../../../utils/fsdb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });

  if (req.method === 'POST') {
    const user = parseUserFromRequest(req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    let dispute = readFile(`disputes/${id}.json`, null);
    if (!dispute) return res.status(404).json({ error: 'Dispute not found' });

    try {
      // Check if user has access to this dispute
      if (user.role !== 'admin' && user.id !== dispute.clientUserId && user.id !== dispute.talentUserId) {
        return res.status(403).json({ error: 'Forbidden' });
      }
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
    }
    
    const { body } = req.body || {};
    if (!body || typeof body !== 'string') return res.status(400).json({ error: 'Message body required' });
    
    const now = new Date().toISOString();
    dispute.messages.push({
      id: `${Date.now()}`,
      authorUserId: user.id,
      authorRole: (user.role === 'admin' ? 'admin' : (user.id === dispute.clientUserId ? 'client' : 'talent')),
      body,
      createdAt: now
    });
    dispute.updatedAt = now;
    await writeFile(`disputes/${id}.json`, dispute);
    return res.status(201).json({ dispute });
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end('Method Not Allowed');
}