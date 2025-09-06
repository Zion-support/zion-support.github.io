import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const db = load();
  if (req.method === 'GET') {
    const queue = Object.values(db).filter(
      p => p.status === 'submitted' || p.status === 'needs_more_info'
    );
    return res.status(200).json({ ok: true, queue });
  }

  if (req.method === 'POST') {
    const { userId, action, reason } = req.body as {
      userId?: string;
      action?: 'approve' | 'reject' | 'needs_more_info';
      reason?: string;
    };
    if (!userId || !action)
      return res.status(400).json({ error: 'Missing userId or action' });
    const profile = db[userId];
    if (!profile) return res.status(404).json({ error: 'Profile not found' });

    const now = new Date().toISOString();
    if (action === 'approve') profile.status = 'approved';
    if (action === 'reject') profile.status = 'rejected';
    if (action === 'needs_more_info') profile.status = 'needs_more_info';
    profile.lastUpdatedAt = now;
    profile.auditTrail.push({
      at: now,
      by: 'admin',
      action: `admin_${action}`,
      details: reason ? { reason } : undefined,
    });

    db[userId] = profile;
    save(db);
    return res.status(200).json({ ok: true, profile });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
=======
  res.status(200).json({ message: 'KYC Queue API' });
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
