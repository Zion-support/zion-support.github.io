import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import type {_GrantApplication, _UpdateGrantPayload} from '../../../types/grants';

const _GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function ensureDir() {_if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, _{ recursive: true});
  }
}

function grantPath(_id: string) {_return path.join(GRANTS_DIR, _`${id}.json`);
}

function readGrant(_id: string): GrantApplication | null {_ensureDir();
  const _file = grantPath(id);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, _'utf8')) as GrantApplication;}

function writeGrant(_record: GrantApplication) {_ensureDir();
  fs.writeFileSync(grantPath(record.id), _JSON.stringify(record, _null, _2), _'utf8');}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { id} = req.query as {_id: string};
  if (!id) {_res.status(400).json({ error: 'Missing id'});
    return;
  }

  if (req.method === 'GET') {_const _g = readGrant(id);
    if (!g) {
      res.status(404).json({ error: 'Not found'});
      return;
    }
    res.status(200).json({_record: g});
    return;
  }

  if (req.method === 'PUT') {_const _existing = readGrant(id);
    if (!existing) {
      res.status(404).json({ error: 'Not found'});
      return;
    }
    const _payload = req.body as UpdateGrantPayload;
    const next: GrantApplication = {_...existing, _...payload, _status: payload.submit ? 'Submitted' : existing.status, _updatedAt: new Date().toISOString()} as GrantApplication;
    writeGrant(next);
    res.status(200).json({_record: next});
    return;
  }

  res.setHeader('Allow', 'GET, PUT');
  res.status(405).end('Method Not Allowed');
}