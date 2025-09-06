import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

const p = path.join(process.cwd(), 'data', 'ops', 'uptime-log.json');
=======
const p = path.join(process.cwd(), 'dataopsuptime-log.json');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json([]);
    const arr = JSON.parse(fs.readFileSync(p, 'utf-8'));
<<<<<<< HEAD
    res.status(200).json(arr);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' });
  }
=======
    res.status(200).json(arr)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
