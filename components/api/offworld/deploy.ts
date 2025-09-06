import type { NextApiRequest, NextApiResponse } from 'next';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { addDirectory } from '@/utils/offworld/ipfs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  try {
    // Ensure export
    const outDir = path.resolve(process.cwd(), 'out');
    try {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  try {
    // Ensure export
    const outDir = path.resolve(process.cwd(), 'out');
    try {
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      execSync('npm run export', { stdio: 'inherit' });
    } catch (e) {
      // attempt minimal static export
      try {
<<<<<<< HEAD
        execSync('next build && next export', { stdio: 'inherit' });      } catch (e2) {}
    }

    if (!fs.existsSync(outDir)) {
      return res
        .status(500)
        .json({ error: 'Export failed, no out/ directory found' });    }
=======
      execSync('npm run export', { stdio: 'inherit' })
    } catch (e) {
      // attempt minimal static export
      try {
        execSync('next build && next export', { stdio: 'inherit' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      } catch (e2) {}
    }

    if (!fs.existsSync(outDir)) {
<<<<<<< HEAD
      return res
        .status(500)
        .json({ error: 'Export failed, no out/ directory found' });
=======
      return res.status(500).json({ error: 'Export failed, no out/ directory found' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    const { cid, provider } = await addDirectory(outDir);
    if (!cid) return res.status(500).json({ error: 'IPFS upload failed' });

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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
