import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc',
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc'),
const FILE = path.join($2);
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync($2);
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync($2);
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = load($2);
  if (req.method = $2;
    return res.status(200).json({ ok: true, queue })
  }

  if (req.method === 'POST') {
    const { userId, action, reason } = req.body as { userId?: string, action?: 'approve' | 'reject' | 'needs_more_info', reason?: string },
    if (!userId || !action) return res.status(400).json($2);
    const profile = $2;
    if (!profile) return res.status(404).json($2);
    const now = new Date().toISOString($2);
    if (action = $2;
    if (action = $2;
    if (action = $2;
    profile.lastUpdatedAt = $2;
    profile.auditTrail.push($2);
    db[userId] = profile,
    save($2);
    return res.status(200).json({ ok: true, profile })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}