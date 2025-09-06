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
  UpdateGrantPayload,;
} from '../../../types/grants';

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

<<<<<<< HEAD
=======
=======
import type { GrantApplication, UpdateGrantPayload } from '../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true });
  }

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import type { GrantApplication, UpdateGrantPayload } from '../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true })
  }
}

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function readGrant(id: string): GrantApplication | null {
  ensureDir();
  const file = grantPath(id);
  if (!fs.existsSync(file)) return null;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  return JSON.parse(fs.readFileSync(file, 'utf8')) as GrantApplication;

function writeGrant(record: GrantApplication) {
  ensureDir();
  fs.writeFileSync(
    grantPath(record.id),
    JSON.stringify(record, null, 2),
    'utf8'
  );
<<<<<<< HEAD
=======
=======
  return JSON.parse(fs.readFileSync(file, 'utf8')) as GrantApplication
}

function writeGrant(record: GrantApplication) {
  ensureDir();
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return JSON.parse(fs.readFileSync(file, 'utf8')) as GrantApplication
}

function writeGrant(record: GrantApplication) {
  ensureDir();
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string };
  if (!id) {
    res.status(400).json({ error: 'Missing id' });
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

  if (req.method === 'GET') {
    const g = readGrant(id);
    if (!g) {
      res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD
      return;
    }
    res.status(200).json({ record: g });
    return;  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      return;
    }
    res.status(200).json({ record: g });
    return;
=======
      return
    }
    res.status(200).json({ record: g });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return
    }
    res.status(200).json({ record: g });
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  if (req.method === 'PUT') {
    const existing = readGrant(id);
    if (!existing) {
      res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD
      return;
    }
    const payload = req.body as UpdateGrantPayload;
    const next: GrantApplication = {
      ...existing,
      ...payload,
=======
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
    const payload = req.body as UpdateGrantPayload;
    const next: GrantApplication = {
      ...existing;
      ...payload;
      status: payload.submit ? 'Submitted' : existing.status;
      updatedAt: new Date().toISOString()} as GrantApplication;
    writeGrant(next);
    res.status(200).json({ record: next });
    return
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'GET, PUT');
  res.status(405).end('Method Not Allowed');
=======
      return
    }
    const payload = req.body as UpdateGrantPayload;
    const next: GrantApplication = {
      ...existing;
      ...payload;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      status: payload.submit ? 'Submitted' : existing.status,
      updatedAt: new Date().toISOString(),
    } as GrantApplication;
    writeGrant(next);
    res.status(200).json({ record: next });
    return;
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'GET, PUT');
  res.status(405).end('Method Not Allowed');
=======
  res.setHeader('AllowGET, PUT');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.setHeader('AllowGET, PUT');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
