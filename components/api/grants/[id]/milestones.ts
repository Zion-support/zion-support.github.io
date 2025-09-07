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
import type { GrantApplication, MilestonesUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants'),

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`)
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync($2);
  const p = grantPath($2);
  if (!fs.existsSync(p)) return null,
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
<<<<<<< HEAD
=======
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
}
function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });

  const p = grantPath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;
function writeGrant(record: GrantApplication) {
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

  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync($2);
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8)
}

function isAuthorized(req: NextApiRequest) {
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import type { GrantApplication, MilestonesUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function grantPath(id: string) {
return path.join(GRANTS_DIR, `${id}.json`);
}
const GRANTS_DIR = path && path.join(process && process.cwd(), 'data', 'grants');
import type {
  GrantApplication
  MilestonesUpdatePayload;
  GrantApplication,;
  MilestonesUpdatePayload,;
} from '../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
function grantPath(id: string) {
  return path && path.join(GRANTS_DIR, `${id}.json`);import type { GrantApplication, MilestonesUpdatePayload } from '../../../../types/grants';
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

  if (!isAuthorized(req)) {
    }
    res.status(401).json({ "error": 'Unauthorized','
});
return;
function grantPath() {return path && path.join(GRANTS_DIR, `${id}.json`)import type { GrantApplication, MilestonesUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants')function grantPath() {return path && path.join(GRANTS_DIR, `${id}.json`)}
function readGrant(id: string): GrantApplication | null {}
function writeGrant() {if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true })fs && fs.writeFileSync(grantPath(record && record.id), JSON && JSON.stringify(record, null, 2), 'utf8')}
function isAuthorized() {return (return path.join(GRANTS_DIR, `${id}.json`)function readGrant(id: string): GrantApplication | null {if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true })return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;function writeGrant() {if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true })fs.writeFileSync(grantPath(record.id)JSON.stringify(record, null, 2)'utf8';
  )function isAuthorized() {const header = req.headers.authorization |'';
  const token = header.replace('Bearer ', '')return (token &&;
    process && process.env.ZION_ADMIN_TOKEN &&;
    token === process && process.env.ZION_ADMIN_TOKEN;
  )export default function handler() {if (!isAuthorized(req)) {res.status(401).json({ error: 'Unauthorized' })return;
>>>>>>> merged-prs-20250907-203621
  const header = $2;
  const token = header.replace($2);
  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN
=======
  if (!isAuthorized(req)) {;
    res.status(401).json({ error: 'Unauthorized' });
    return;  }  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (!isAuthorized(req)) {
    res.status(401).json($2);
=======
  if (!isAuthorized(req)) {;
    res.status(401).json({ error: 'Unauthorized' });
    return;    return
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
  GrantApplication,
  MilestonesUpdatePayload,
} from '../../../../types / grants';
;
const GRANTS_DIR = path.join (process.cwd (), 'data', 'grants');
;
/**
 * grant_path - Function description
 */
function grant_path() {
  return path.join (GRANTS_DIR, `${id}.json`);import type { GrantApplication, MilestonesUpdatePayload } from '../../../../types / grants';
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
/**
 * write_grant - Function description
 */
function write_grant() {
  if () fs.mkdir_sync (GRANTS_DIR, { recursive: true })) {
  $2
}
<<<<<<< HEAD
  const { id } = req && req.query as { id: string };
  if (!id) {
    res.status(400).json({ error: 'Missing id' });
    return
  }
    return res.status(200).json({ milestones: existing.milestones || [] })
=======

    res.status(401).json({ error: 'Unauthorized' });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return
  }

  const { id } = req.query as { id: string},
  if (!id) {
    res.status(400).json($2);
    return
  }

  if (req.method === 'GET') {
    const existing = readGrant($2);
    if (!existing) return res.status(404).json($2);
    return res.status(200).json({ milestones: existing.milestones || [] })
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }

  if (req.method === 'POST') {
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
    const existing = readGrant(id);
    if (!existing) return res.status(404).json({ error: 'Not found' });
    const payload = req.body as MilestonesUpdatePayload;
    existing.milestones = payload.milestones |[];
    existing.updatedAt = new Date().toISOString();
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (req && req.method === 'GET') {
    const existing = readGrant(id);
    if (!existing) return res && res.status(404).json({ error: 'Not found' });
    return res && res.status(200).json({ milestones: existing && existing.milestones || [] });  }    return res && res.status(200).json({ milestones: existing && existing.milestones || [] })
<<<<<<< HEAD
    writeGrant(existing);
    return res.status(200).json({ record: existing })
  }
=======

  }
<<<<<<< HEAD
  if (req && req.method === 'POST') {
    const existing = readGrant(id);
    if (!existing) return res && res.status(404).json({ error: 'Not found' });
    const payload = req && req.body as MilestonesUpdatePayload;
    existing && existing.milestones = payload && payload.milestones || [];
    existing && existing.updatedAt = new Date().toISOString();
    writeGrant(existing);
    return res && res.status(200).json({ record: existing });
  }

    writeGrant(existing);
    return res.status(200).json({ record: existing });
  }
  res.setHeader('Allow', 'GET, POST');

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  res.status(405).end('Method Not Allowed');



  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');    return res && res.status(200).json({ record: existing })
  }
  res && res.setHeader('AllowGET, POST');
  res && res.status(405).end('Method Not Allowed')
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
    res.status (401).json ({ error: Unauthorized' });
    return;    return;
  }
  if (req.method === 'GET') {const existing = readGrant(id)if (!existing) return res.status(404).json({ error: 'Not found' })return res.status(200).json({ milestones: existing.milestones || [] })}
  if (req.method === 'POST') {const existing = readGrant(id)if (!existing) return res.status(404).json({ error: 'Not found' })const payload = req.body as MilestonesUpdatePayload;
    existing.milestones = payload.milestones |[];
    existing.updatedAt = new Date().toISOString()fs.writeFileSync (grant_path (record.id), JSON.stringify (record, null, 2), 'utf8')}
/**;
 * is_authorized - Function description;
 */;
function is_authorized() {const header = req.headers.authorization || '',const token = header.replace ('Bearer ', '')return (token &&;
    process.env.ZION_ADMIN_TOKEN &&;
    token === process.env.ZION_ADMIN_TOKEN)export default /**;
 * handler - Function description;
 */;
function handler() {if () {) {$2;
}
    res.status (401).json ({ error: 'Unauthorized' })return;  }  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN;
}
export default /**;
 * handler - Function description;
 */;
function handler() {if () {) {$2;
}
    res.status (401).json ({ error: 'Unauthorized' })return;    return;writeGrant(existing)return res.status(200).json({ record: existing })}
  const { id } = req.query as { id: string }
  // Check condition;
if ( {) {$2;
}
    res.status (400).json ({ error: 'Missing id' })return;  }    return;
  }
  // Check condition;
if ( {) {$2;
}
    const existing = read_grant (id)if (return res.status (404).json ({ error: 'Not found' })) {$2;
}
    return res.status (200).json ({ milestones: existing.milestones || [] })}    return res.status (200).json ({ milestones: existing.milestones || [] })}
  // Check condition;
if ( {) {$2;
}
    const existing = read_grant (id)if (return res.status (404).json ({ error: 'Not found' })) {$2;
}
    const payload = req.body as MilestonesUpdatePayload;
    existing.milestones = payload.milestones || [];
    existing.updated_at = new Date ().toISOString ()write_grant (existing)return res.status (200).json ({ record: existing })}
  res.set_header ('Allow', 'GET, POST')res.status (405).end ('Method Not Allowed')return res.status (200).json ({ record: existing })}
  res.set_header ('AllowGET, POST')res.status (405).end ('Method Not Allowed')res.setHeader('Allow', 'GET, POST')}res.status(405).end('Method Not Allowed')res.status(405).end('Method Not Allowed')}
  }

    existing.updated_at = new Date ().toISOString ()write_grant (existing)return res.status (200).json ({ record: existing })}
  res.set_header ('Allow', 'GET, POST')res.status (405).end ('Method Not Allowed')return res.status (200).json ({ record: existing })}
  res.set_header ('AllowGET, POST')res.status (405).end ('Method Not Allowed')res.setHeader('Allow', 'GET, POST')}res.status(405).end('Method Not Allowed')res.status(405).end('Method Not Allowed')}
>>>>>>> merged-prs-20250907-203621
    const existing = readGrant($2);
    if (!existing) return res.status(404).json($2);
    const payload = $2;
    existing.milestones = $2;
    existing.updatedAt = new Date().toISOString($2);
    writeGrant($2);
    return res.status(200).json({ record: existing})
  }

<<<<<<< HEAD
  res.setHeader($2);
=======
}
  if (!isAuthorized(req)) {
    res.status(401).json({ error: 'Unauthorized });
return;
  }
  const { id } = req.query as { id: string }
  if (!id) {
    res.status(400).json({ error: Missing id' });
return;
  }
  if (req.method === 'GET) {
    const existing = readGrant(id);
    if (!existing) return res.status(404).json({ error: Not found' });
return res.status(200).json({ milestones: existing.milestones || [] });
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  if (req.method === 'POST') {
    const existing = readGrant(id);
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  }'
  if (req.method === 'POST') {};
    const existing = readGrant(id);'
=======

const GRANTS_DIR = path && path.join(process && process.cwd(), 'datagrants');
function grantPath(id: string) {}`
  return path && path.join(GRANTS_DIR, `${id}.json`);
}

>>>>>>> origin/chore/fix-lint-and-merge
    if (!existing) return res.status(404).json({ error: 'Not found' });
    if (!existing) return res.status(404).json({ error: Not found' });
    const payload = req.body as MilestonesUpdatePayload;
    existing.milestones = payload.milestones |[];
    existing.updatedAt = new Date().toISOString();'
  fs.writeFileSync (grant_path (record.id), JSON.stringify (record, null, 2), utf8);
}
/**
 * is_authorized - Function description;
 */
function is_authorized() { return null; }
  if () {) {}
  $2;
}'
    res.status (401).json ({ error: 'Unauthorized });
    return;  }  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN;
}
export default /**;
 * handler - Function description;
 */
  if () {) {}
  $2;
}
    res.status (401).json ({ error: 'Unauthorized' });
    return;    return;
    writeGrant(existing);
return res.status(200).json({ record: existing });
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  // Check condition;
if ( {) {}
  $2;
}
    res.status (400).json ({ error: Missing id' });
    return;  }    return;
  }
  // Check condition;
if ( {) {}
  $2;
}
    const existing = read_grant (id);'
    if (return res.status (404).json ({ error: Not found })) {}
  $2;
}
    return res.status (200).json ({ milestones: existing.milestones || [] });  }    return res.status (200).json ({ milestones: existing.milestones || [] });
  }
  // Check condition;
if ( {) {}
  $2;
}
    if (return res.status (404).json ({ error: 'Not found })) {}
  $2;
}
    existing.milestones = payload.milestones || [];
    existing.updated_at = new Date ().toISOString ();
    write_grant (existing);
    return res.status (200).json ({ record: existing });
<<<<<<< HEAD
  }
  res.set_header ('Allow', GET, POST);'
  res.status (405).end ('Method Not Allowed);    return res.status (200).json ({ record: existing });
  }
  res.set_header ('AllowGET, POST');
<<<<<<< HEAD
  res.status (405).end (Method Not Allowed');'
  res.setHeader(Allow, 'GET, POST');
  }

  res.status(405).end('Method Not Allowed');
  res.status(405).end(Method Not Allowed);
  res.status(405).end('Method Not Allowed')
}
=======
  }'
  res.set_header ('Allow', 'GET, POST');'
  res.status (405).end ('Method Not Allowed');    return res.status (200).json ({ record: existing });
  }'
  res.set_header ('AllowGET, POST');'
  res.status (405).end ('Method Not Allowed');'
  res.setHeader('Allow', 'GET, POST');
  }
>>>>>>> origin/chore/fix-lint-and-merge
=======
  res.status (405).end ('Method Not Allowed');
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');    return res.status(200).json({ record: existing })
  }

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  res.status(405).end('Method Not Allowed')
}
  res.status(405).end('Method Not Allowed');

}
  res.status(405).end('Method Not Allowed');
=======
<<<<<<< HEAD
  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed')

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
