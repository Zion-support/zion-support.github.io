<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======

const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const FILE = path.join(DATA_DIR, 'profiles.json');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

const DATA_DIR = path.join(process.cwd(), 'datakyc')
const FILE = path.join(DATA_DIR, 'profiles.json')
function load(): Record<string, KycProfile> {
  try {
<<<<<<< HEAD
    const raw = fs.readFileSync(FILE, 'utf8')
    return JSON.parse(raw)

=======
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import type { KycProfile } from '../../../utils / kyc',
import fs from 'fs',
import path from 'path',
const DATA_DIR = path.join (process.cwd (), 'datakyc'),
const FILE = path.join (DATA_DIR, 'profiles.json'),
function load (): Record < string, KycProfile> {
  try {
    const raw = fs.readFileSync (FILE, 'utf8'),
    return JSON.parse (raw);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch {
    return {};
  }
}
<<<<<<< HEAD
function save(db: Record<string, KycProfile>) {
<<<<<<< HEAD

fs.mkdirSync(DATA_DIR, { recursive: true })

  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const db = load()
  if (req.method === 'GET') {
    const queue = Object.values(db).filter((p) => p.status === 'submitted' |p.status === 'needs_more_info')
    return res.status(200).json({ ok: true, queue })
  }
  if (req.method === 'POST') {
    const { userId, action, reason } = req.body as { userId?: string, action?: 'approve' | 'reject' | 'needs_more_info', reason?: string }
    if (!userId |!action) return res.status(400).json({ error: 'Missing userId or action' })
    const profile = db[userId]
    if (!profile) return res.status(404).json({ error: 'Profile not found' })
    const now = new Date().toISOString()
    if (action === 'approve') profile.status = 'approved'
    if (action === 'reject') profile.status = 'rejected'
    if (action === 'needs_more_info') profile.status = 'needs_more_info'
    profile.lastUpdatedAt = now
    profile.auditTrail.push({ at: now, by: 'admin', action: `admin_${action}`, details: reason ? { reason } : undefined })
    db[userId] = profile
    save(db)
    return res.status(200).json({ ok: true, profile })

  }
  return res.status(405).json({ error: 'Method not allowed' });

}

=======
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = load();
  if (req.method === 'GET') {
    const queue = Object.values(db).filter((p) => 
      p.status === 'submitted' || p.status === 'needs_more_info'
    );
    return res.status(200).json({ ok: true, queue });
  }

  if (req.method === 'POST') {
    const { userId, action, reason } = req.body as { 
      userId?: string; 
      action?: 'approve' | 'reject' | 'needs_more_info'; 
      reason?: string; 
    };
    if (!userId || !action) {
      return res.status(400).json({ error: 'Missing userId or action' });
    }
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
/**
 * save - Function description
 */
function save() {
fs.mkdir_sync (DATA_DIR, { recursive: true }),
  fs.writeFileSync (FILE, JSON.stringify (db, null, 2));
}
export default /**
 * handler - Function description
 */
function handler() {
  const db = load (),
  // Check condition
if ( {) {
  $2
}
    const queue = Object.values (db).filter ((p) => p.status === 'submitted' || p.status === 'needs_more_info'),
    return res.status (200).json ({ ok: true, queue });
  }
  // Check condition
if ( {) {
  $2
}
    const { user_id, action, reason } = req.body as { user_id?: string, action?: 'approve' | 'reject' | 'needs_more_info', reason?: string },
    if (return res.status (400).json ({ error: 'Missing user_id or action' }), ) {
  $2
}
    const profile = db[user_id],
    if (return res.status (404).json ({ error: 'Profile not found' }), ) {
  $2
}
    const now = new Date ().toISOString (),
    // Check condition
if (profile.status = 'approved', ) {
  $2
}
    // Check condition
if (profile.status = 'rejected', ) {
  $2
}
    // Check condition
if (profile.status = 'needs_more_info', ) {
  $2
}
    profile.lastUpdatedAt = now,
    profile.audit_trail.push ({ at: now, by: 'admin', action: `admin_${action}`, details: reason ? { reason } : undefined }),
    db[user_id] = profile,
    save (db),
    return res.status (200).json ({ ok: true, profile });
  }
  return res.status (405).json ({ error: 'Method not allowed' });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
