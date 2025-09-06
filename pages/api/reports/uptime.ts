import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD

const p = path.join(process.cwd(), 'data', 'ops', 'uptime-log.json');
=======
const p = path.join(process.cwd(), 'dataopsuptime-log.json');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const p = path.join(process.cwd(), 'dataopsuptime-log.json');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json([]);
    const arr = JSON.parse(fs.readFileSync(p, 'utf-8'));
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(200).json(arr);
=======
    res.status(200).json(arr)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' })
  }
<<<<<<< HEAD
=======
    res.status(200).json(arr)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
