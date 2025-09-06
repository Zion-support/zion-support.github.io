import type { NextApiRequest, NextApiResponse } from 'next';
import { execSync  } from 'child_process';
import path from 'path';
import fs from 'fs';
import { addDirectory } from '@/utils/offworld/ipfs';
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    // Ensure export
    const outDir = null;
    return res.status(200).json({ cid, provider })
=======
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST')
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });  try {
    // Ensure export
    const outDir = path.resolve(process.cwd(), 'out');
    try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  try {
    // Ensure
}

export
    const outDir = path.resolve(process.cwd(), 'out');
    try {
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
        .json({ error: 'Export failed, no out/ directory found' });    }      execSync('npm run export', { stdio: 'inherit' })
    } catch (e) {
      // attempt minimal static export
      try {
        execSync('next build && next export', { stdio: 'inherit' })
=======
        execSync('next build && next export', { stdio: 'inherit' });
      } catch (e2) {}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
    if (!fs.existsSync(outDir)) {
      return res
        .status(500)
<<<<<<< HEAD
        .json({ error: 'Export failed, no out/ directory found' });      return res.status(500).json({ error: 'Export failed, no out/ directory found' });
=======
        .json({ error: 'Export failed, no out/ directory found' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
    const { cid, provider } = await addDirectory(outDir);
    if (!cid) return res.status(500).json({ error: 'IPFS upload failed' });
<<<<<<< HEAD
    return res.status(200).json({ cid, provider });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message |'Unknown error' });
  }    return res.status(200).json({ cid, provider })
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  } catch (error: any) {
    return res.status(500).json({ error: error?.message |'Unknown error' })
}
}
=======

    return res.status(200).json({ cid, provider });
 
} catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Unknown error' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
