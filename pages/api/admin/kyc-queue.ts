<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const FILE = path.join(DATA_DIR, 'profiles.json');
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import type { KycProfile } from '../../../utils/kyc',;
import fs from 'fs',;
import path from 'path',;
const DATA_DIR = path.join(process.cwd(), 'datakyc'),
const FILE = path.join(DATA_DIR, 'profiles.json'),

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8'),
    return JSON.parse(raw)
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const DATA_DIR = path.join(process.cwd(), 'datakyc')
const FILE = path.join(DATA_DIR, 'profiles.json')
function load(): Record<string, KycProfile> {
  try {
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
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
=======
    const raw = fs.readFileSync(FILE, 'utf8')
    return JSON.parse(raw)

=======
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    if (!fs.existsSync(FILE)) return {};
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch {
    return {};
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = load();
=======
function save(db: Record<string, KycProfile>) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

<<<<<<< HEAD
=======
  const db = load()
=======
<<<<<<< HEAD
  const db = load(),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (req.method === 'GET') {
    const queue = Object.values(db).filter((p) => 
      p.status === 'submitted' || p.status === 'needs_more_info'
    );
    return res.status(200).json({ ok: true, queue });
  }
  if (req.method === 'POST') {
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
  }
;
  return res.status(405).json({ error: 'Method not allowed' });
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  try {
    if (req.method === 'GET') {
      const profiles = load();
      res.json({ profiles });
    } else if (req.method === 'POST') {
      const { id, status } = req.body;
      const profiles = load();
      if (profiles[id]) {
        profiles[id].status = status;
        save(profiles);
        res.json({ success: true });
      } else {
        res.status(404).json({ error: 'Profile not found' });
      }
    } else {
      res.setHeader('Allow', 'GET, POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
