<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

import { GrantApplication, StatusUpdatePayload } from '../../../../types/grants';
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import type { GrantApplication, StatusUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants'),

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`)
}

function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync($2);
  const p = grantPath($2);
  if (!fs.existsSync(p)) return null,
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
<<<<<<< HEAD
=======
function grantPath() { return null; }
  return path && path.join(GRANTS_DIR, `${id}.json`);import type { GrantApplication, StatusUpdatePayload } from '../../../../types/grants';'
const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants');
function grantPath(id: string) {}`
  return path && path.join(GRANTS_DIR, `${id}.json`);
}
function readGrant(id: string): GrantApplication | null {}
}
function writeGrant(record: GrantApplication) {}
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });'
  fs && fs.writeFileSync(grantPath(record && record.id), JSON && JSON.stringify(record, null, 2), 'utf8')
}
function isAuthorized(req: NextApiRequest) {}
  return (
  return path.join(GRANTS_DIR, `${id}.json`);
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

function readGrant('id': string): GrantApplication | null {
  }
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { 'recursive': true
});
return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;'

function writeGrant(record: GrantApplication) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true });
  }
  fs.writeFileSync(
    grantPath(record.id),
    JSON.stringify(record, null, 2),
    'utf8'
  );
}
=======
>>>>>>> origin/resolved-merge-conflicts
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs.writeFileSync(
    grantPath(record.id)
    JSON.stringify(record, null, 2)
    'utf8''
  );
function isAuthorized(req: NextApiRequest) {
  const header = req.headers.authorization |'';
  const token = header.replace('Bearer ', '');  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
>>>>>>> merged-prs-20250907-203621
}


<<<<<<< HEAD
function isAuthorized(req: NextApiRequest) {
=======
<<<<<<< HEAD
import type { GrantApplication, StatusUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function grantPath(id: string) {
return path.join(GRANTS_DIR, `${id}.json`);
}
const GRANTS_DIR = path && path.join(process && process.cwd(), 'data', 'grants');
import type {
  GrantApplication
  StatusUpdatePayload;
  GrantApplication,;
  StatusUpdatePayload,;
} from '../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);import type { GrantApplication, StatusUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);
}
function readGrant(id: string): GrantApplication | null {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
function isAuthorized(req: NextApiRequest) {
  const header = $2;
  const token = header.replace($2);
  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
function writeGrant(record: GrantApplication) {
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs && fs.writeFileSync(grantPath(record && record.id), JSON && JSON.stringify(record, null, 2), 'utf8')
}
function isAuthorized(req: NextApiRequest) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const header = req && req.headers.authorization || '',
  const token = header && header.replace('Bearer ', '');
=======

  const header = req && req.headers.authorization || '',
  const token = header && header.replace('Bearer ', '');

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    token &&
    process && process.env.ZION_ADMIN_TOKEN &&
    token === process && process.env.ZION_ADMIN_TOKEN
  );
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
function grantPath() {return path && path.join(GRANTS_DIR, `${id}.json`)import type { GrantApplication, StatusUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants')function grantPath() {return path && path.join(GRANTS_DIR, `${id}.json`)}
function readGrant(id: string): GrantApplication | null {}
function writeGrant() {if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true })fs && fs.writeFileSync(grantPath(record && record.id), JSON && JSON.stringify(record, null, 2), 'utf8')}
function isAuthorized() {return (return path.join(GRANTS_DIR, `${id}.json`)function readGrant(id: string): GrantApplication | null {if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true })return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;function writeGrant() {if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true })fs.writeFileSync(grantPath(record.id)JSON.stringify(record, null, 2)'utf8';
  )function isAuthorized() {const header = req.headers.authorization |'';
  const token = header.replace('Bearer ', '')return (token &&;
    process && process.env.ZION_ADMIN_TOKEN &&;
    token === process && process.env.ZION_ADMIN_TOKEN;
  )export default function handler() {if (req && req.method !== 'POST') {res && res.setHeader('AllowPOST')res && res.status(405).end('Method Not Allowed')return;
  const header = $2;
  const token = header.replace($2);
  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN
}
>>>>>>> merged-prs-20250907-203621

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) {
<<<<<<< HEAD
    res.status(401).json($2);
    return
  }

  const { id } = req.query as { id: string},
  if (!id) {
    res.status(400).json($2);
    return
=======
    }
    res.status(401).json({ 'error': 'Unauthorized','
});
return;
=======
  if (!isAuthorized(req)) {;
    res.status(401).json({ error: 'Unauthorized' });
    return;  }  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) {;
    res.status(401).json({ error: 'Unauthorized' });
    return;    return
  }
<<<<<<< HEAD
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
  GrantApplication,
  StatusUpdatePayload,
} from '../../../../types / grants';
;
const GRANTS_DIR = path.join (process.cwd (), 'data', 'grants');
;
/**
 * grant_path - Function description
 */
function grant_path() {
  return path.join (GRANTS_DIR, `${id}.json`);import type { GrantApplication, StatusUpdatePayload } from '../../../../types / grants';
const GRANTS_DIR = path.join (process.cwd (), 'datagrants');
/**
 * grant_path - Function description
 */
function grant_path() {
  return path.join (GRANTS_DIR, `${id}.json`);
}
function read_grant (id: string): GrantApplication | null {
  if () fs.mkdir_sync (GRANTS_DIR, { recursive: true })) {
  $2
}
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
  if () fs.mkdir_sync (GRANTS_DIR, { recursive: true })) {
  $2
}
  fs.writeFileSync (
    grant_path (record.id),
    JSON.stringify (record, null, 2),
    'utf8');
/**
 * is_authorized - Function description
 */
function is_authorized() {
  const header = req.headers.authorization || '';
  const token = header.replace ('Bearer ', '');  return JSON.parse (fs.readFileSync (p, 'utf8')) as GrantApplication;
}
/**
 * write_grant - Function description
 */
function write_grant() {
  if () fs.mkdir_sync (GRANTS_DIR, { recursive: true })) {
  $2
}
  fs.writeFileSync (grant_path (record.id), JSON.stringify (record, null, 2), 'utf8');
}
/**
 * is_authorized - Function description
 */
function is_authorized() {
  const header = req.headers.authorization || '',
  const token = header.replace ('Bearer ', '');
  return (
    token &&;
    process.env.ZION_ADMIN_TOKEN &&;
    token === process.env.ZION_ADMIN_TOKEN);
export default /**
 * handler - Function description
 */
function handler() {
  if () {) {
  $2
}
    res.status (401).json ({ error: 'Unauthorized' });
    return;  }  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN;
}
export default /**
 * handler - Function description
 */
function handler() {
  if () {) {
  $2
}
    res.status (401).json ({ error: 'Unauthorized' });
    return;    return;
  }
  const { id } = req.query as { id: string }
  // Check condition
if ( {) {
  $2
}
    res.status (400).json ({ error: 'Missing id' });
    return;
  }
  // Check condition
if ( {) {
  $2
}
    res.set_header ('Allow', 'POST');
    res.status (405).end ('Method Not Allowed');
    return;  }  }
    res.status(400).json({ error: 'Missing id' });
    return
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants');
function grantPath(id: string) {}`
  return path && path.join(GRANTS_DIR, `${id}.json`);
}

<<<<<<< HEAD
  }
  const existing = readGrant(id);
  if (!existing) {}
  // Check condition;
if ( {) {}
  $2;
}'
    res.set_header ('AllowPOST');'
=======
  const { id } = req && req.query as { id: string };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (!id) {

<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const { id } = req.query as { id: string };
  if (!id) {
    res.status(400).json({ error: 'Missing id' });
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const existing = readGrant(id);
  if (!existing) {
    res.status(404).json({ error: 'Not found' });
    return;
  }

  const payload = req.body as StatusUpdatePayload;
=======
>>>>>>> origin/resolved-merge-conflicts

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    res && res.status(405).end('Method Not Allowed');
    return;  }  }
<<<<<<< HEAD
    return
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  if (req && req.method !== 'POST') {
    res && res.setHeader('AllowPOST');
    res && res.status(405).end('Method Not Allowed');
    return
  }
  const existing = readGrant(id);
  if (!existing) {
<<<<<<< HEAD
    res.status(404).json({ error: 'Not found' });
    return
  }
  const payload = req && req.body as StatusUpdatePayload;
  existing && existing.status = payload && payload.status;
  existing && existing.updatedAt = new Date().toISOString();
  writeGrant(existing);
  res && res.status(200).json({ record: existing });  res && res.status(200).json({ record: existing })
}
=======


  }


  const payload = req && req.body as StatusUpdatePayload;
  existing && existing.status = payload && payload.status;
  existing && existing.updatedAt = new Date().toISOString();

  writeGrant(existing);
  res && res.status(200).json({ record: existing });  res && res.status(200).json({ record: existing })
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  writeGrant(existing);

  res.status(200).json({ record: existing });

  writeGrant(existing);
  res.status(200).json({ record: existing })
}
  // Check condition
if ( {) {
  $2
}
    res.set_header ('AllowPOST');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    res.status (405).end ('Method Not Allowed');
    return;
>>>>>>> origin/chore/fix-lint-and-merge
  }
  const existing = read_grant (id);
  // Check condition;
if ( {) {}
  $2;
}'
    res.status (404).json ({ error: 'Not found' });
    return;  }    return;
  }
<<<<<<< HEAD
  if (req.method !== 'POST') {res.setHeader('Allow', 'POST')res.status(405).end('Method Not Allowed')return;'
>>>>>>> merged-prs-20250907-203621
  }

  if (req.method !== 'POST') {
    res.setHeader($2);
    res.status(405).end($2);
    return
  }
<<<<<<< HEAD

  const existing = readGrant($2);
  if (!existing) {
    res.status(404).json($2);
    return
  }

  const payload = $2;
  existing.status = $2;
  existing.updatedAt = new Date().toISOString($2);
  writeGrant($2);
  res.status(200).json({ record: existing})
}
=======
const payload = req.body as StatusUpdatePayload;
<<<<<<< HEAD
  existing.status = payload.status;
<<<<<<< HEAD
  existing.updatedAt = new Date().toISOString();
  writeGrant(existing);

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  existing.status = payload.status;
<<<<<<< HEAD
  existing.updatedAt = new Date().toISOString();

<<<<<<< HEAD
  writeGrant(existing);
  res.status(200).json({ record: existing });
}
=======
>>>>>>> origin/resolved-merge-conflicts
=======
const payload = req.body as StatusUpdatePayload;
  res.status(200).json({ record: existing });
}
  res.status(200).json({ record: existing });
}
>>>>>>> origin/chore/fix-lint-and-merge
=======
  existing.updated_at = new Date ().toISOString ();
  write_grant (existing);
  res.status (200).json ({ record: existing });  res.status (200).json ({ record: existing });

}
<<<<<<< HEAD
  existing.updatedAt = new Date().toISOString();
  writeGrant(existing);
  res.status(200).json({ record: existing });  res.status(200).json({ record: existing })
}

  res.status(200).json({ record: existing });
}
  res.status(200).json({ record: existing });
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
