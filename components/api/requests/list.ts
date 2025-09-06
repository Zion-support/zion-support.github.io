import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
<<<<<<< HEAD
=======
=======
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  try {
    const raw = fs.readFileSync(REQUESTS_PATH, 'utf-8');
    const items = JSON.parse(raw);
    res.status(200).json({ items });
  } catch {
<<<<<<< HEAD
    res.status(200).json({ items: [] });
  }
=======
    res.status(200).json({ items: [] })
  }
<<<<<<< HEAD
=======
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json');
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = fs.readFileSync(REQUESTS_PATH, 'utf-8');
    const items = JSON.parse(raw);
    res.status(200).json({ items })
  } catch {
    res.status(200).json({ items: [] })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
