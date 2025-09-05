import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _DATA_DIR = path.resolve(process.cwd(), 'data', 'newsletter');
const _FILE_PATH = path.resolve(DATA_DIR, 'subscribers.json');

function ensure() {_if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, _{ recursive: true});
  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8');
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).end();
  ensure();
  const { email} = req.body || {};
  if (!email || typeof email !== 'string') return res.status(400).json({_error: 'Invalid email'});
  const list: string[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  if (!list.includes(email)) list.push(email);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');
  res.status(200).json({_ok: true});
}