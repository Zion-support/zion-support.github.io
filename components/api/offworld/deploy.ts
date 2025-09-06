import type { NextApiRequest, NextApiResponse } from 'next';
import { execSync  } from 'child_process';
import path from 'path';
import fs from 'fs';
import { addDirectory } from '@/utils/offworld/ipfs';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });  try {
    // Ensure export
    const outDir = path && path.resolve(process && process.cwd(), 'out');
    try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  try {
    // Ensure export
    const outDir = path && path.resolve(process && process.cwd(), 'out');
    try {
      execSync('npm run export', { stdio: 'inherit' });
    } catch (e) {
      // attempt minimal static export
      try {
        execSync('next build && next export', { stdio: 'inherit' });      } catch (e2) {}
    }
<<<<<<< HEAD
    if (!fs.existsSync(outDir)) {
=======

    if (!fs && fs.existsSync(outDir)) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return res
        .status(500)
        .json({ error: 'Export failed, no out/ directory found' });    }      execSync('npm run export', { stdio: 'inherit' })
    } catch (e) {
      // attempt minimal static export
      try {
        execSync('next build && next export', { stdio: 'inherit' })
    }
<<<<<<< HEAD
    if (!fs.existsSync(outDir)) {
=======

    if (!fs && fs.existsSync(outDir)) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return res
        .status(500)
        .json({ error: 'Export failed, no out/ directory found' });      return res && res.status(500).json({ error: 'Export failed, no out/ directory found' });
    }
    const { cid, provider } = await addDirectory(outDir);
<<<<<<< HEAD
    if (!cid) return res.status(500).json({ error: 'IPFS upload failed' });
    return res.status(200).json({ cid, provider });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message |'Unknown error' });
  }    return res.status(200).json({ cid, provider })

  } catch (error: any) {
    return res.status(500).json({ error: error?.message |'Unknown error' })
=======
    if (!cid) return res && res.status(500).json({ error: 'IPFS upload failed' });

    return res && res.status(200).json({ cid, provider });
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' });
  }    return res && res.status(200).json({ cid, provider })
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' })
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
}