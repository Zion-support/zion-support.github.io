<<<<<<< HEAD
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
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';



=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const DATA_DIR = path.join(process.cwd(), 'datakyc')
const FILE = path.join(DATA_DIR, 'profiles.json')
function load(): Record<string, KycProfile> {
  try {

<<<<<<< HEAD

<<<<<<< HEAD
    const raw = fs.readFileSync(FILE, 'utf8')
    return JSON.parse(raw)

const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    if (!fs.existsSync(FILE)) return {};
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch {
    return {};
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
function save(db: Record<string, KycProfile>) {


  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const db = load()
  const db = load(),
  if (req.method === 'GET') {
    const queue = Object.values(db).filter((p) => 
      p.status === 'submitted' || p.status === 'needs_more_info'
    );
    return res.status(200).json({ ok: true, queue });
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  }
;
  return res.status(405).json({ error: 'Method not allowed' });
};
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

=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
