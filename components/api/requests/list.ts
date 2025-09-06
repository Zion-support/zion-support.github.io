import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  try {
    const raw = fs.readFileSync(REQUESTS_PATH, 'utf-8');
    const items = JSON.parse(raw);
    res.status(200).json({ items });
  } catch {
    res.status(200).json({ items: [] });
  }
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
