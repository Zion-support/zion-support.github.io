import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import type { GrantApplication } from '../../../../../../types/grants';
<<<<<<< HEAD

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
=======
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  const p = grantPath(id);
  if (!fs.existsSync(p)) return null;
<<<<<<< HEAD
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;

function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs.writeFileSync(
    grantPath(record.id),
    JSON.stringify(record, null, 2),
    'utf8'
  );
=======
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
}

function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

function isAuthorized(req: NextApiRequest) {
  const header = req.headers.authorization || '';
  const token = header.replace('Bearer ', '');
<<<<<<< HEAD
  return (
    token &&
    process.env.ZION_ADMIN_TOKEN &&
    token === process.env.ZION_ADMIN_TOKEN
  );
=======
  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) {
    res.status(401).json({ error: 'Unauthorized' });
<<<<<<< HEAD
    return;
  }

  const { id, milestoneId } = req.query as { id: string; milestoneId: string };
  if (!id || !milestoneId) {
    res.status(400).json({ error: 'Missing id or milestoneId' });
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
=======
    return
  }

  const { id, milestoneId } = req.query as { id: string, milestoneId: string };
  if (!id || !milestoneId) {
    res.status(400).json({ error: 'Missing id or milestoneId' });
    return
  }

  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    res.status(405).end('Method Not Allowed');
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  const existing = readGrant(id);
  if (!existing) return res.status(404).json({ error: 'Not found' });

  const ms = existing.milestones || [];
<<<<<<< HEAD
  const idx = ms.findIndex(m => m.id === milestoneId);
=======
  const idx = ms.findIndex((m) => m.id === milestoneId);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  if (idx === -1) return res.status(404).json({ error: 'Milestone not found' });

  ms[idx].completed = true;
  ms[idx].completedAt = new Date().toISOString();

  const tranche = ms[idx].trancheAmount || 0;
  existing.fundsReleased = (existing.fundsReleased || 0) + tranche;
  existing.milestones = ms;
  existing.updatedAt = new Date().toISOString();

  writeGrant(existing);
<<<<<<< HEAD
  res.status(200).json({ record: existing });
=======
  res.status(200).json({ record: existing })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
