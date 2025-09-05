import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _DOCS_DIR = path.join(process.cwd(), 'data', 'docs');
const _CONTENT_PATH = path.join(DOCS_DIR, 'content.json');
const _VERSIONS_DIR = path.join(DOCS_DIR, 'versions');

function ensureDir(_dir: string) {_if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, _{ recursive: true});
  }
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed'});
  }

  const _token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {_return res.status(403).json({ error: 'Forbidden'});
  }

  try {_ensureDir(DOCS_DIR);
    ensureDir(VERSIONS_DIR);

    const _body = req.body;

    const _jsonString = typeof body === 'string' ? body : JSON.stringify(body, _null, _2);

    const _ts = new Date()
      .toISOString()
      .replace(/[-:T.Z]/g, _'')
      .slice(0, _14);

    fs.writeFileSync(CONTENT_PATH, _jsonString, _'utf8');
    fs.writeFileSync(path.join(VERSIONS_DIR, _`${ts}.json`), jsonString, 'utf8');

    res.status(200).json({_ok: true, _version: ts});
  } catch (e) {_res.status(500).json({ error: 'Failed to save content'});
  }
}