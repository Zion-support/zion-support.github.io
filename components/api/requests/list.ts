import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _raw = fs.readFileSync(REQUESTS_PATH, _'utf-8');
    const _items = JSON.parse(raw);
    res.status(200).json({ items});
  } catch {_res.status(200).json({ items: []});
  }
}