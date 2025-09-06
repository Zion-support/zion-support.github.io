import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import {v4, as, uuidv4} from 'uuid';

=======

function ensureDir() {
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);function ensureDir() {
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true })
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);
}

  if (!fs && fs.existsSync(p)) return null;
  return JSON && JSON.parse(fs && fs.readFileSync(p, 'utf8')) as GrantApplication;
function readGrant(id: string): GrantApplication | null {
  ensureDir();
  const p = grantPath(id);


function writeGrant(record: GrantApplication) {
  ensureDir();
  fs && fs.writeFileSync(
    grantPath(record && record.id),
    JSON && JSON.stringify(record, null, 2),
    'utf8'
  );
export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return;  }

  const payload = req && req.body as VotePayload;
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res && res.status(400).json({ error: 'Missing fields' });

    return;
function writeGrant(record: GrantApplication) {
  ensureDir();
  fs && fs.writeFileSync(grantPath(record && record.id), JSON && JSON.stringify(record, null, 2), 'utf8')
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {

    res.setHeader('AllowPOST');
    res.status(405).end('Method Not Allowed');
    return
  }
  const payload = req.body as VotePayload;

    res.status(400).json({ error: 'Missing fields' });
    return
  }

  const g = readGrant(payload.grantId);
  if (!g) return res.status(404).json({ error: 'Grant not found' });
  const vote = { id: uuidv4(), voter: payload.voter, choice: payload.choice, createdAt: new Date().toISOString() }
  g.votes = [...(g.votes |[]), vote];
  g.updatedAt = new Date().toISOString();
  writeGrant(g);
  res.status(200).json({ record: g })
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
