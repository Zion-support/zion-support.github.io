<<<<<<< HEAD
<<<<<<< HEAD
import { load, save } from '../../../utils/fsdb';
import { NextApiRequest, NextApiResponse } from 'next';
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = load();
  if (req.method === 'GET') {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    const queue = Object.values(db).filter((p) => p.status === 'submitted' || p.status === 'needs_more_info');
    return res.status(200).json({ ok: true, queue })
  }

  if (req.method === 'POST') {
    const { userId, action, reason } = req.body as { userId?: string, action?: 'approve' | 'reject' | 'needs_more_info', reason?: string };
    if (!userId || !action) return res.status(400).json({ error: 'Missing userId or action' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const queue = Object.values(db).filter((p) => p.status === 'submitted' || p.status === 'needs_more_info');
    return res.status(200).json({ ok: true, queue })
  }

  if (req.method === 'POST') {
    const { userId, action, reason } = req.body as { userId?: string, action?: 'approve' | 'reject' | 'needs_more_info', reason?: string };
    if (!userId || !action) return res.status(400).json({ error: 'Missing userId or action' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const profile = db[userId];
    if (!profile) return res.status(404).json({ error: 'Profile not found' });

    const now = new Date().toISOString();
    if (action === 'approve') profile.status = 'approved';
    if (action === 'reject') profile.status = 'rejected';
    if (action === 'needs_more_info') profile.status = 'needs_more_info';
    profile.lastUpdatedAt = now;
<<<<<<< HEAD
<<<<<<< HEAD
    profile.auditTrail.push({
      at: now,
      by: 'admin',
      action: `admin_${action}`,
      details: reason ? { reason } : undefined,
    });
=======
    profile.auditTrail.push({ at: now, by: 'admin', action: `admin_${action}`, details: reason ? { reason } : undefined });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    db[userId] = profile;
    save(db);
    return res.status(200).json({ ok: true, profile })
  }

<<<<<<< HEAD
  return res.status(405).json({ error: 'Method not allowed' });
=======
    profile.auditTrail.push({ at: now, by: 'admin', action: `admin_${action}`, details: reason ? { reason } : undefined });

    db[userId] = profile;
    save(db);
    return res.status(200).json({ ok: true, profile })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
