import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const p = path.join(process.cwd(), 'data', 'ops', 'uptime-log.json');
const p = path.join(process.cwd(), 'dataopsuptime-log.json');
const p = path.join(process.cwd(), 'dataopsuptime-log.json');
ursor/integrate-build-improve-and-re-verify-b76c

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json([]);
    const arr = JSON.parse(fs.readFileSync(p, 'utf-8'));
    res.status(200).json(arr);
    res.status(200).json(arr)
ursor/integrate-build-improve-and-re-verify-b76c
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' })
  }
    res.status(200).json(arr)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' })
  }
}
}
ursor/integrate-build-improve-and-re-verify-b76c
