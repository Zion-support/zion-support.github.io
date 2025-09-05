import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _LOG_DIR = path.join(process.cwd(), 'data', 'analytics');
const _LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl');

function ensureLogFile() {_if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, _{ recursive: true});
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '');
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed'});

  const {_name, _page = '', _userType = 'guest', _properties = {}, at } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({_error: 'Invalid event name'});

  const _nowIso = new Date().toISOString();
  const _event = {_name, _page, _userType, _properties, _at: at && typeof at === 'string' ? at : nowIso, _ua: req.headers['user-agent'] || '', _ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string};

  try {_ensureLogFile();
    fs.appendFileSync(LOG_FILE, _JSON.stringify(event) + '\n');} catch (e) {_// ignore file errors in serverless}

  res.status(200).json({_ok: true});
}