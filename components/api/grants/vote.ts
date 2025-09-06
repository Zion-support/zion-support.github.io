import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import {v4, as, uuidv4} from 'uuid';
import type { GrantApplication, VotePayload } from '../../../types/grants';
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');
function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
function grantPath(id: string) {
<<<<<<< HEAD
  return path.join(GRANTS_DIR, `${id}.json`);function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true })
}
function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}
=======
  return path.join(GRANTS_DIR, `${id}.json`);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function readGrant(id: string): GrantApplication | null {
  ensureDir();

  const p = grantPath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;
function writeGrant(record: GrantApplication) {
  ensureDir();
  fs.writeFileSync(
    grantPath(record.id)
    JSON.stringify(record, null, 2)
    'utf8'
  );
<<<<<<< HEAD
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;  }
  const payload = req.body as VotePayload;
  if (!payload?.grantId |!payload?.voter |!payload?.choice) {
    res.status(400).json({ error: 'Missing fields' });
    return;
<<<<<<< HEAD
function writeGrant(record: GrantApplication) {
  ensureDir();
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST');
    res.status(405).end('Method Not Allowed');
    return
  }
  const payload = req.body as VotePayload;
<<<<<<< HEAD
<<<<<<< HEAD
  if (!payload?.grantId |!payload?.voter |!payload?.choice) {
=======
<<<<<<< HEAD
  }
}

const payload = req.body as VotePayload;
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    res.status(400).json({ error: 'Missing fields' });
    return;
  }
  const g = readGrant(payload.grantId);
  if (!g) return res.status(404).json({ error: 'Grant not found' });
<<<<<<< HEAD
  const vote = {
    id: uuidv4()
    voter: payload.voter
    choice: payload.choice
    createdAt: new Date().toISOString()
  }
  g.votes = [...(g.votes |[]), vote];
  g.updatedAt = new Date().toISOString();
  writeGrant(g);
  res.status(200).json({ record: g });  }
  const g = readGrant(payload.grantId);
  if (!g) return res.status(404).json({ error: 'Grant not found' });
  const vote = { id: uuidv4(), voter: payload.voter, choice: payload.choice, createdAt: new Date().toISOString() }
  g.votes = [...(g.votes |[]), vote];
  g.updatedAt = new Date().toISOString();
  writeGrant(g);

  res.status(200).json({ record: g })
}
<<<<<<< HEAD
=======
  
}

const vote = {
    id: uuidv4(),
    voter: payload.voter,
    choice: payload.choice,
    createdAt: new Date().toISOString(),
  };
  g.votes = [...(g.votes || []), vote];
  g.updatedAt = new Date().toISOString();
  writeGrant(g);
  res.status(200).json({ record: g });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res.status(400).json({ error: 'Missing fields' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
}
}
}
}
=======
    res.status(400).json({ error: 'Missing fields' });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
