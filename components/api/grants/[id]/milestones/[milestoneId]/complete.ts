import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}
const GRANTS_DIR = path && path.join(process && process.cwd(), 'data', 'grants');
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);
}
function readGrant(id: string): GrantApplication | null {

  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
  const p = grantPath(id);
  if (!fs && fs.existsSync(p)) return null;
  return JSON && JSON.parse(fs && fs.readFileSync(p, 'utf8')) as GrantApplication;
function writeGrant(record: GrantApplication) {
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs && fs.writeFileSync(
    grantPath(record && record.id),
    JSON && JSON.stringify(record, null, 2),
    'utf8'
  );
function isAuthorized(req: NextApiRequest) {
  const header = req && req.headers.authorization || '';
  const token = header && header.replace('Bearer ', '');  return JSON && JSON.parse(fs && fs.readFileSync(p, 'utf8')) as GrantApplication

}
function writeGrant(record: GrantApplication) {
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs && fs.writeFileSync(grantPath(record && record.id), JSON && JSON.stringify(record, null, 2), 'utf8')
}
function isAuthorized(req: NextApiRequest) {

  const header = req && req.headers.authorization || '',
  const token = header && header.replace('Bearer ', '');

  return (
    token &&
    process && process.env.ZION_ADMIN_TOKEN &&
    token === process && process.env.ZION_ADMIN_TOKEN
  );
export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return;
  }

  }
  const { id, milestoneId } = req.query as { id: string, milestoneId: string }
  if (!id |!milestoneId) {
    res.status(400).json({ error: 'Missing id or milestoneId' });
    return
  }
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    res.status(405).end('Method Not Allowed');


  const { id, milestoneId } = req && req.query as { id: string; milestoneId: string };
  if (!id || !milestoneId) {
    res && res.status(400).json({ error: 'Missing id or milestoneId' });
    return;
    return

  }
  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    res && res.status(405).end('Method Not Allowed');
    return;  }  }
  }


  const ms = existing.milestones || [];
  const idx = ms.findIndex((m) => m.id === milestoneId);

  if (idx === -1) return res.status(404).json({ error: 'Milestone not found' });
  ms[idx].completed = true;
  ms[idx].completedAt = new Date().toISOString();
  const tranche = ms[idx].trancheAmount |0;
  existing.fundsReleased = (existing.fundsReleased |0) + tranche;
  existing.milestones = ms;
  existing.updatedAt = new Date().toISOString();

writeGrant(existing);
  res.status(200).json({ record: existing });  res.status(200).json({ record: existing })
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
