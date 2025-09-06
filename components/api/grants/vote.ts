import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import type { GrantApplication, VotePayload } from '../../../types/grants';
function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true })
}

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function readGrant(id: string): GrantApplication | null {
  ensureDir(),
  const p = grantPath(id),
  if (!fs.existsSync(p)) return null,


function writeGrant(record: GrantApplication) {
  ensureDir(),
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    res.status(405).end('Method Not Allowed'),

=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
  const payload = req.body as VotePayload,
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res.status(400).json({ error: 'Missing fields' }),

  }
  const g = readGrant(payload.grantId),
  if (!g) return res.status(404).json({ error: 'Grant not found' }),
  const vote = { id: uuidv4(), voter: payload.voter, choice: payload.choice, createdAt: new Date().toISOString() },
  g.votes = [...(g.votes || []), vote],
  g.updatedAt = new Date().toISOString(),
  writeGrant(g),

=======
  res.status(200).json({ record: g })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
