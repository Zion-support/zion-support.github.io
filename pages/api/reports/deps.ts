import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const p = path.join(
  process.cwd(),
  'data',
  'reports',
  'deps',
  'weekly-dependencies.json'
);
<<<<<<< HEAD
=======
const p = path.join(process.cwd(), 'datareportsdepsweekly-dependencies.json');
const p = path.join(process.cwd(), 'datareportsdepsweekly-dependencies.json');
ursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
<<<<<<< HEAD
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps report' });
  }
=======
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
ursor/integrate-build-improve-and-re-verify-b76c
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps report' })
  }
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps report' })
  }
}
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
