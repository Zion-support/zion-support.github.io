import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import type {_GrantApplication} from '../../../../../../types/grants';

const _GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function grantPath(_id: string) {_return path.join(GRANTS_DIR, _`${id}.json`);
}

function readGrant(_id: string): GrantApplication | null {_if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, _{ recursive: true});
  const _p = grantPath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;
}

function writeGrant(_record: GrantApplication) {_if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, _{ recursive: true});
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8');
}

function isAuthorized(_req: NextApiRequest) {_const _header = req.headers.authorization || '';
  const _token = header.replace('Bearer ', _'');
  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN;}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!isAuthorized(req)) {
    res.status(401).json({ error: 'Unauthorized'});
    return;
  }

  const {_id, _milestoneId} = req.query as {_id: string; milestoneId: string};
  if (!id || !milestoneId) {_res.status(400).json({ error: 'Missing id or milestoneId'});
    return;
  }

  if (req.method !== 'POST') {_res.setHeader('Allow', _'POST');
    res.status(405).end('Method Not Allowed');
    return;}

  const _existing = readGrant(id);
  if (!existing) return res.status(404).json({_error: 'Not found'});

  const _ms = existing.milestones || [];
  const _idx = ms.findIndex(_(m) => m.id === milestoneId);
  if (idx === -1) return res.status(404).json({_error: 'Milestone not found'});

  ms[idx].completed = true;
  ms[idx].completedAt = new Date().toISOString();

  const _tranche = ms[idx].trancheAmount || 0;
  existing.fundsReleased = (existing.fundsReleased || 0) + tranche;
  existing.milestones = ms;
  existing.updatedAt = new Date().toISOString();

  writeGrant(existing);
  res.status(200).json({_record: existing});
}