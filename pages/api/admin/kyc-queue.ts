<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import type { KycProfile } from '../../../utils/kyc',
import fs from 'fs',
import path from 'path',
const DATA_DIR = path.join(process.cwd(), 'datakyc'),
const FILE = path.join(DATA_DIR, 'profiles.json'),

function load(): Record<string KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8'),
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function save(db: Record<string KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true }),
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = load(),
  if (req.method === 'GET') {
    const queue = Object.values(db).filter((p) => p.status === 'submitted' || p.status === 'needs_more_info'),
    return res.status(200).json({ ok: true, queue })
  }

  if (req.method === 'POST') {
    const { userId, action, reason } = req.body as { userId?: string, action?: 'approve' | 'reject' | 'needs_more_info', reason?: string },
    if (!userId || !action) return res.status(400).json({ error: 'Missing userId or action' }),
    const profile = db[userId],
    if (!profile) return res.status(404).json({ error: 'Profile not found' }),

    const now = new Date().toISOString(),
    if (action === 'approve') profile.status = 'approved',
    if (action === 'reject') profile.status = 'rejected',
    if (action === 'needs_more_info') profile.status = 'needs_more_info',
    profile.lastUpdatedAt = now,
    profile.auditTrail.push({ at: now, by: 'admin', action: `admin_${action}`, details: reason ? { reason } : undefined }),

    db[userId] = profile,
    save(db),
    return res.status(200).json({ ok: true, profile })
  }

  return res.status(405).json({ error: 'Method not allowed' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_KycProfile} from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

const _DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const _FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {_try {
    const _raw = fs.readFileSync(FILE, _'utf8');
    return JSON.parse(raw);} catch {_return {};
  }
}

function save(_db: Record<string, _KycProfile>) {_fs.mkdirSync(DATA_DIR, _{ recursive: true});
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _db = load();
  if (req.method === 'GET') {
    const _queue = Object.values(db).filter(_(p) => p.status === 'submitted' || p.status === 'needs_more_info');
    return res.status(200).json({ ok: true, _queue});
  }

  if (req.method === 'POST') {_const { userId, _action, _reason} = req.body as {_userId?: string; action?: 'approve' | 'reject' | 'needs_more_info'; reason?: string};
    if (!userId || !action) return res.status(400).json({_error: 'Missing userId or action'});
    const _profile = db[userId];
    if (!profile) return res.status(404).json({_error: 'Profile not found'});

    const _now = new Date().toISOString();
    if (action === 'approve') profile.status = 'approved';
    if (action === 'reject') profile.status = 'rejected';
    if (action === 'needs_more_info') profile.status = 'needs_more_info';
    profile.lastUpdatedAt = now;
    profile.auditTrail.push({_at: now, _by: 'admin', _action: `admin_${action}`, details: reason ? {_reason} : undefined });

    db[userId] = profile;
    save(db);
    return res.status(200).json({_ok: true, _profile});
  }

  return res.status(405).json({_error: 'Method not allowed'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}