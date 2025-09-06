import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD

const p = path.join(
  process.cwd(),
  'data',
  'reports',
  'deps',
  'weekly-dependencies.json'
);
=======
const p = path.join(process.cwd(), 'datareportsdepsweekly-dependencies.json');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const p = path.join(process.cwd(), 'datareportsdepsweekly-dependencies.json');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
=======
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps report' })
  }
<<<<<<< HEAD
=======
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps report' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
