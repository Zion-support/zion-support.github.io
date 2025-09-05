import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import type {_GrantApplication} from '../../../../types/grants';

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

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { id} = req.query as {_id: string};
  if (!id) return res.status(400).json({_error: 'Missing id'});

  const _existing = readGrant(id);
  if (!existing) return res.status(404).json({_error: 'Not found'});

  if (req.method === 'GET') {_return res.status(200).json({ updates: existing.updates || []});
  }

  if (req.method === 'POST') {_const { content} = req.body as {_content?: string};
    if (!content || !content.trim()) return res.status(400).json({_error: 'Missing content'});
    const _update = {_id: uuidv4(), _createdAt: new Date().toISOString(), _content: content.trim()};
    existing.updates = [...(existing.updates || []), update];
    existing.updatedAt = new Date().toISOString();
    writeGrant(existing);
    return res.status(201).json({_update});
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}