<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

import { v4 as uuidv4 } from 'uuid';
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
import type { GrantApplication, VotePayload } from '../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants'),

function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true})
}

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`)
}

function readGrant(id: string): GrantApplication | null {
  ensureDir($2);
  const p = grantPath($2);
  if (!fs.existsSync(p)) return null,
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
}

function writeGrant(record: GrantApplication) {
  ensureDir($2);
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    res.status(405).end($2);
    return
  }
  const payload = $2;
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res.status(400).json($2);
    return
  }
  const g = readGrant($2);
  if (!g) return res.status(404).json($2);
  const vote = { id: uuidv4(), voter: payload.voter, choice: payload.choice, createdAt: new Date().toISOString() },
  g.votes = [...(g.votes || []), vote],
  g.updatedAt = new Date().toISOString($2);
  writeGrant($2);
  res.status(200).json({ record: g})
}
=======
  return path.join(GRANTS_DIR, `${id}.json`)
}

function readGrant(id: string): GrantApplication | null {
  ensureDir($2);
  const p = grantPath($2);
  if (!fs.existsSync(p)) return null,
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
}

import {v4, as, uuidv4} from 'uuid';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { GrantApplication, VotePayload } from '../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');
function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true })
=======


function ensureDir() {
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);function ensureDir() {
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true })
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);
}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
function writeGrant(record: GrantApplication) {
function writeGrant(record: GrantApplication) {}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
import {v4, as, uuidv4} from 'uuid';
}
function grantPath(id: string) {}
  return path && path.join(GRANTS_DIR, `${id}.json`);
}

import type { GrantApplication, VotePayload } from '../../../types/grants';

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');
function ensureDir() {}
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true,}
});
function grantPath(id: string) {}
  return path.join(GRANTS_DIR, `${id}.json`);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (!fs && fs.existsSync(p)) return null;
  return JSON && JSON.parse(fs && fs.readFileSync(p, 'utf8')) as GrantApplication;
function readGrant(id: string): GrantApplication | null {
  ensureDir();
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
  ensureDir();
  fs && fs.writeFileSync(
    grantPath(record && record.id),
    JSON && JSON.stringify(record, null, 2),'
    'utf8'
  );
<<<<<<< HEAD
=======
  const p = grantPath(id);
<<<<<<< HEAD
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
function writeGrant(record: GrantApplication) {
  ensureDir();
  fs && fs.writeFileSync(
    grantPath(record && record.id),
    JSON && JSON.stringify(record, null, 2),
    'utf8'
  );
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;  }
  const payload = req && req.body as VotePayload;
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res && res.status(400).json({ error: 'Missing fields' });
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

}
<<<<<<< HEAD
=======
<<<<<<< HEAD

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}

function readGrant(id: string): GrantApplication | null {
  ensureDir();
  const p = grantPath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;
}

function writeGrant(record: GrantApplication) {
  ensureDir();
  fs.writeFileSync(
    grantPath(record.id),
    JSON.stringify(record, null, 2),
    'utf8'
  );
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const payload = req.body as VotePayload;
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res.status(400).json({ error: 'Missing fields' });
    return;
  }

  const g = readGrant(payload.grantId);
  if (!g) {
    return res.status(404).json({ error: 'Grant not found' });
  }

  const vote = {
    id: uuidv4(),
    voter: payload.voter,
    choice: payload.choice,
    createdAt: new Date().toISOString()
  };

  g.votes = [...(g.votes || []), vote];
  g.updatedAt = new Date().toISOString();
  writeGrant(g);
  res.status(200).json({ record: g });
}
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
function grantPath() {return path && path.join(GRANTS_DIR, `${id}.json`)}import type { GrantApplication, VotePayload } from '../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), data, 'grants')function ensureDir() {if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true })function grantPath() {return path.join(GRANTS_DIR, `${id}.json`)function readGrant(id: string): GrantApplication | null {ensureDir()return JSON.parse(fs.readFileSync(p, utf8)) as GrantApplication;function writeGrant() {ensureDir()fs && fs.writeFileSync(grantPath(record && record.id),JSON && JSON.stringify(record, null, 2),'utf8';
  )export default function handler() {return;function writeGrant() {ensureDir()fs && fs.writeFileSync(grantPath(record && record.id), JSON && JSON.stringify(record, null, 2), utf8)}
export default function handler() {if (!payload?.grantId || !payload?.voter || !payload?.choice) {res.status(400).json({ error: 'Missing fields' })return;
  }const g = readGrant(payload.grantId)if (!g) return res.status(404).json({ error: Grant not found })const vote = { id: uuidv4(), voter: payload.voter, choice: payload.choice, createdAt: new Date().toISOString() }
  g.votes = [...(g.votes |[]), vote];
  g.updatedAt = new Date().toISOString()writeGrant(g)id: uuidv4(),voter: payload && payload.voter,choice: payload && payload.choice,createdAt: new Date().toISOString()}g && g.votes = [...(g && g.votes || []), vote];
  g && g.updatedAt = new Date().toISOString()writeGrant(g)res && res.status(200).json({ record: g })}
  const g = readGrant(payload && payload.grantId)if (!g) return res && res.status(404).json({ error: 'Grant not found' })const vote = { id: uuidv4(), voter: payload && payload.voter, choice: payload && payload.choice, createdAt: new Date().toISOString() }g && g.votes = [...(g && g.votes || []), vote];
  g && g.updatedAt = new Date().toISOString()writeGrant(g)res && res.status(200).json({ record: g })}// Check condition;
if ( {) {$2;
export default function handler(req: NextApiRequest, res: NextApiResponse) {};
=======
/**
 * grant_path - Function description
 */
function grant_path() {
  return path.join (GRANTS_DIR, `${id}.json`);/**
 * ensure_dir - Function description
 */
function ensure_dir() {
  if () fs.mkdir_sync (GRANTS_DIR, { recursive: true })) {
  $2
}
}
/**
 * grant_path - Function description
 */
function grant_path() {
  return path.join (GRANTS_DIR, `${id}.json`);
}
function read_grant (id: string): GrantApplication | null {
  ensure_dir ();
  const p = grant_path (id);
  if () return null) {
  $2
}
  return JSON.parse (fs.readFileSync (p, 'utf8')) as GrantApplication;
;
/**
 * write_grant - Function description
 */
function write_grant() {
  ensure_dir ();
  fs.writeFileSync (
    grant_path (record.id),
    JSON.stringify (record, null, 2),
    'utf8');
;
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ('Allow', 'POST');
    res.status (405).end ('Method Not Allowed');

    return;  }

  const payload = req && req.body as VotePayload;
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res && res.status(400).json({ error: 'Missing fields' });

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return;
function writeGrant(record: GrantApplication) {}
  ensureDir();'
  fs && fs.writeFileSync(grantPath(record && record.id), JSON && JSON.stringify(record, null, 2), 'utf8')
}
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {';
    res.status(400).json({ error: 'Missing fields' });
    return;
  }

  const g = readGrant(payload.grantId);'
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const payload = req && req.body as VotePayload;
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res && res.status(400).json({ error: 'Missing fields' });
=======
<<<<<<< HEAD
  if (req && req.method !== 'POST') {
    res && res.setHeader('AllowPOST');
    res && res.status(405).end('Method Not Allowed');
    return
  }

  const payload = req && req.body as VotePayload;
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res && res.status(400).json({ error: 'Missing fields' });

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return;
  }
  const g = readGrant(payload && payload.grantId);
  if (!g) return res && res.status(404).json({ error: 'Grant not found' });
  const vote = {
<<<<<<< HEAD
  if (req.method !== 'POST') {
  if (req.method !== 'POST') {;
=======

  if (req.method !== 'POST') {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    res.setHeader('AllowPOST');
    res.status(405).end('Method Not Allowed');
    return
  }
  const payload = req.body as VotePayload;
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res.status(400).json({ error: 'Missing fields' });
    return
  }

<<<<<<< HEAD
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
  if (!payload?.grantId |!payload?.voter |!payload?.choice) {
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res.status(400).json({ error: 'Missing fields' });
    return
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const g = readGrant(payload.grantId);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  if (!g) return res.status(404).json({ error: 'Grant not found' });
  const vote = { id: uuidv4(), voter: payload.voter, choice: payload.choice, createdAt: new Date().toISOString() }
  g.votes = [...(g.votes |[]), vote];
  g.updatedAt = new Date().toISOString();
  writeGrant(g);
<<<<<<< HEAD

=======
  res.status(200).json({ record: g })
}

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    id: uuidv4(),
    voter: payload && payload.voter,
    choice: payload && payload.choice,
    createdAt: new Date().toISOString(),
  };
  g && g.votes = [...(g && g.votes || []), vote];
  g && g.updatedAt = new Date().toISOString();
  writeGrant(g);
  res && res.status(200).json({ record: g });  }
  const g = readGrant(payload && payload.grantId);'
  if (!g) return res && res.status(404).json({ error: 'Grant not found' });
  const vote = { id: uuidv4(), voter: payload && payload.voter, choice: payload && payload.choice, createdAt: new Date().toISOString() };
  g && g.votes = [...(g && g.votes || []), vote];
  g && g.updatedAt = new Date().toISOString();
  writeGrant(g);
  res && res.status(200).json({ record: g })
}

<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}'
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    res.status (400).json ({ error: 'Missing fields' });
    return;
/**
 * write_grant - Function description;
 */
function write_grant() {}
  ensure_dir ();'
  fs.writeFileSync (grant_path (record.id), JSON.stringify (record, null, 2), 'utf8');
}
export default /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}'
    res.set_header ('AllowPOST');'
    res.status (405).end ('Method Not Allowed');
    return;
  }
  const payload = req.body as VotePayload;
  // Check condition;
if ( {) {}
  $2;
}'
    res.status (400).json ({ error: 'Missing fields' });
    return;
  }
  const g = read_grant (payload.grant_id);'
  if (return res.status (404).json ({ error: 'Grant not found' })) {}
  $2;
}
  const vote = {}
    id: uuidv4 (),
    voter: payload.voter,
    choice: payload.choice,
    created_at: new Date ().toISOString (),
  }
  g.votes = [...(g.votes || []), vote];
  g.updated_at = new Date ().toISOString ();
  write_grant (g);
  res.status (200).json ({ record: g });  }
  const g = read_grant (payload.grant_id);'
  if (return res.status (404).json ({ error: 'Grant not found' })) {}
  $2;
}
  const vote = { id: uuidv4 (), voter: payload.voter, choice: payload.choice, created_at: new Date ().toISOString () }
  g.votes = [...(g.votes || []), vote];
  g.updated_at = new Date ().toISOString ();
  write_grant (g);
  res.status (200).json ({ record: g });

<<<<<<< HEAD
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {}
}
}
}
}
}'
    res.status(400).json({ error: 'Missing fields' });

  res.status(200).json({ record: g })
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
=======
}
<<<<<<< HEAD

  if (!payload?.grantId || !payload?.voter || !payload?.choice) {

  if (!payload?.grantId || !payload?.voter || !payload?.choice) {
    res.status(400).json({ error: 'Missing fields' });

}
}
}
}
}
    res.status(400).json({ error: 'Missing fields' });
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  if (!payload?.grantId || !payload?.voter || !payload?.choice) {

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
