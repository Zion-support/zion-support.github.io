<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const DATA_DIR = path.join(process.cwd(), 'datakyc')
const FILE = path.join(DATA_DIR, 'profiles.json')
function load(): Record<string, KycProfile> {
  try {


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    const raw = fs.readFileSync(FILE, 'utf8')
    return JSON.parse(raw)

const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    if (!fs.existsSync(FILE)) return {};
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  } catch {
    return {};
  }
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true }),
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = load(),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (req.method === 'GET') {
<<<<<<< HEAD
    const queue = Object.values(db).filter((p) =>
      p.status === 'submitted' || p.status === 'needs_more_info'
    );
    return res.status(200).json({ ok: true, queue });
=======
    const queue = Object.values(db).filter((p) => p.status === 'submitted' || p.status === 'needs_more_info'),
    return res.status(200).json({ ok: true, queue })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  }

  if (req.method === 'POST') {
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  }

  return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
}

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
