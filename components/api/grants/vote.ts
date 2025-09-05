import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import type {_GrantApplication, _VotePayload} from '../../../types/grants';

const _GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function ensureDir() {_if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, _{ recursive: true});
}

function grantPath(_id: string) {_return path.join(GRANTS_DIR, _`${id}.json`);
}

function readGrant(_id: string): GrantApplication | null {_ensureDir();
  const _p = grantPath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, _'utf8')) as GrantApplication;}

function writeGrant(_record: GrantApplication) {_ensureDir();
  fs.writeFileSync(grantPath(record.id), _JSON.stringify(record, _null, _2), _'utf8');}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    res.status(405).end('Method Not Allowed');
    return;}
  const _payload = req.body as VotePayload;
  if (!payload?.grantId || !payload?.voter || !payload?.choice) {_res.status(400).json({ error: 'Missing fields'});
    return;
  }
  const _g = readGrant(payload.grantId);
  if (!g) return res.status(404).json({_error: 'Grant not found'});
  const _vote = {_id: uuidv4(), _voter: payload.voter, _choice: payload.choice, _createdAt: new Date().toISOString()};
  g.votes = [...(g.votes || []), vote];
  g.updatedAt = new Date().toISOString();
  writeGrant(g);
  res.status(200).json({_record: g});
}