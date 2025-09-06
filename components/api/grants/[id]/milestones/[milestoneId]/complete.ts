import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import type { GrantApplication } from '../../../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants'),

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`)
}

function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync($2);
  const p = grantPath($2);
  if (!fs.existsSync(p)) return null,
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
}

function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync($2);
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}

function isAuthorized(req: NextApiRequest) {
  const header = $2;
  const token = header.replace($2);
  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) {
    res.status(401).json($2);
    return
  }

  const { id, milestoneId } = req.query as { id: string, milestoneId: string},
  if (!id || !milestoneId) {
    res.status(400).json($2);
    return
  }

  if (req.method !== 'POST') {
    res.setHeader($2);
    res.status(405).end($2);
    return
  }

  const existing = readGrant($2);
  if (!existing) return res.status(404).json($2);
  const ms = $2;
  const idx = $2;
  if (idx === -1) return res.status(404).json($2);
  ms[idx].completed = $2;
  ms[idx].completedAt = new Date().toISOString($2);
  const tranche = $2;
  existing.fundsReleased = $2;
  existing.milestones = $2;
  existing.updatedAt = new Date().toISOString($2);
  writeGrant($2);
  res.status(200).json({ record: existing})
}