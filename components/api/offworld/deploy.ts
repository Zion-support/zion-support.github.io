import type { NextApiRequest, NextApiResponse } from 'next';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { addDirectory } from '@/utils/offworld/ipfs';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  try {
    // Ensure export
    const outDir = path.resolve(process.cwd(), 'out');
    try {
<<<<<<< HEAD
      execSync('npm run export', { stdio: 'inherit' });
    } catch (e) {
      // attempt minimal static export
      try {
        execSync('next build && next export', { stdio: 'inherit' });
=======
      execSync('npm run export', { stdio: 'inherit' })
    } catch (e) {
      // attempt minimal static export
      try {
        execSync('next build && next export', { stdio: 'inherit' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      } catch (e2) {}
    }

    if (!fs.existsSync(outDir)) {
<<<<<<< HEAD
      return res
        .status(500)
        .json({ error: 'Export failed, no out/ directory found' });
=======
      return res.status(500).json({ error: 'Export failed, no out/ directory found' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }

    const { cid, provider } = await addDirectory(outDir);
    if (!cid) return res.status(500).json({ error: 'IPFS upload failed' });

<<<<<<< HEAD
    return res.status(200).json({ cid, provider });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Unknown error' });
  }
=======
    return res.status(200).json({ cid, provider })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Unknown error' })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
