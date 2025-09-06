import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======
const p = path.join(process.cwd(), 'dataopsuptime-log.json'),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json([]),
    const arr = JSON.parse(fs.readFileSync(p, 'utf-8')),

  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' })
  }

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
