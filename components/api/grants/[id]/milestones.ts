import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
import type {
  GrantApplication,
  MilestonesUpdatePayload,;
} from '../../../../types/grants';

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
=======
import type { GrantApplication, MilestonesUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import type { GrantApplication, MilestonesUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  const p = grantPath(id);
  if (!fs.existsSync(p)) return null;
<<<<<<< HEAD
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
  return (
    token &&
    process.env.ZION_ADMIN_TOKEN &&
    token === process.env.ZION_ADMIN_TOKEN
  );
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

  const { id } = req.query as { id: string };
  if (!id) {
    res.status(400).json({ error: 'Missing id' });
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

  if (req.method === 'GET') {
    const existing = readGrant(id);
    if (!existing) return res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json({ milestones: existing.milestones || [] });
=======
    return res.status(200).json({ milestones: existing.milestones || [] })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json({ milestones: existing.milestones || [] })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (req.method === 'POST') {
    const existing = readGrant(id);
    if (!existing) return res.status(404).json({ error: 'Not found' });
    const payload = req.body as MilestonesUpdatePayload;
    existing.milestones = payload.milestones || [];
    existing.updatedAt = new Date().toISOString();
    writeGrant(existing);
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json({ record: existing });
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
=======
    return res.status(200).json({ record: existing })
  }

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json({ record: existing })
  }

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
