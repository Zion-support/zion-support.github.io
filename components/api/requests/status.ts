import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

function readAll() {_try {
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, _'utf-8'));} catch {_return [];}
}

function writeAll(_items: unknown[]) {_fs.mkdirSync(path.dirname(REQUESTS_PATH), _{ recursive: true});
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_id, _status} = req.body || {};
  if (!id || !status) return res.status(400).json({_error: 'Missing id or status'});

  const _items = readAll();
  const _idx = items.findIndex(_(r: unknown) => r.id === id);
  if (idx === -1) return res.status(404).json({_error: 'Not found'});
  items[idx] = {_...items[idx], _status, _updatedAt: new Date().toISOString()};
  writeAll(items);
  res.status(200).json({_ok: true});
}