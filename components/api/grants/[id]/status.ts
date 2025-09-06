import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import type {
  GrantApplication,
  StatusUpdatePayload,;
} from '../../../../types/grants';

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
<<<<<<< HEAD
=======
=======
import type { GrantApplication, StatusUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import type { GrantApplication, StatusUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  const p = grantPath(id);
  if (!fs.existsSync(p)) return null;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;

function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs.writeFileSync(
    grantPath(record.id),
    JSON.stringify(record, null, 2),
    'utf8'
  );
<<<<<<< HEAD
function isAuthorized(req: NextApiRequest) {
  const header = req.headers.authorization || '';
  const token = header.replace('Bearer ', '');
=======
=======
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
}

function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
}

function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function isAuthorized(req: NextApiRequest) {
  const header = req.headers.authorization || '';
  const token = header.replace('Bearer ', '');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  return (
    token &&
    process.env.ZION_ADMIN_TOKEN &&
    token === process.env.ZION_ADMIN_TOKEN
  );
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;  }
=======
=======
  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) {
    res.status(401).json({ error: 'Unauthorized' });
<<<<<<< HEAD
<<<<<<< HEAD
    return;
=======
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const { id } = req.query as { id: string };
  if (!id) {
    res.status(400).json({ error: 'Missing id' });
<<<<<<< HEAD
    return;
=======
<<<<<<< HEAD
<<<<<<< HEAD
    return;
=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
<<<<<<< HEAD
    return;  }
=======
<<<<<<< HEAD
    return;
=======
    return
  }

  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    res.status(405).end('Method Not Allowed');
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const existing = readGrant(id);
  if (!existing) {
    res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD
    return;  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
    return;
=======
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const payload = req.body as StatusUpdatePayload;
  existing.status = payload.status;
  existing.updatedAt = new Date().toISOString();
  writeGrant(existing);
<<<<<<< HEAD
  res.status(200).json({ record: existing });
=======
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({ record: existing });
=======
  res.status(200).json({ record: existing })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.status(200).json({ record: existing })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
