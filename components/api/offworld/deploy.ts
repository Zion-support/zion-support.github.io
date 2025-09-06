import type { NextApiRequest, NextApiResponse } from 'next';
import { execSync  } from 'child_process';
import path from 'path';
import fs from 'fs';
import { addDirectory } from '@/utils/offworld/ipfs';
<<<<<<< HEAD
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
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== 'POST')
<<<<<<< HEAD
=======
  if (req.method !== 'POST');
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    return res.status(405).json({ error: 'Method not allowed' });  try {
    // Ensure export
    const outDir = path.resolve(process.cwd(), 'out');
    try {export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
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
<<<<<<< HEAD
      // attempt minimal static export
      try {
<<<<<<< HEAD
=======
      // attempt minimal static export try {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
        execSync('next build && next export', { stdio: 'inherit' });      } catch (e2) {}
    }
    if (!fs.existsSync(outDir)) {
      return res
        .status(500)
        .json({ error: 'Export failed, no out/ directory found' });    }      execSync('npm run export', { stdio: 'inherit' })
    } catch (e) {
      // attempt minimal static export try {
        execSync('next build && next export', { stdio: 'inherit' })
=======
        execSync('next build && next export', { stdio: 'inherit' });
      } catch (e2) {}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
    if (!fs.existsSync(outDir)) {
      return res
<<<<<<< HEAD
        .status(500)
<<<<<<< HEAD
=======
        .status(500);
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(500).json({ error: error?.message |'Unknown error' });
=======
    return res.status(500).json({ error: error?.message || 'Unknown error' });
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }    return res.status(200).json({ cid, provider })

  } catch (error: any) {
    return res.status(500).json({ error: error?.message |'Unknown error' })
}
<<<<<<< HEAD
}
=======

    return res.status(200).json({ cid, provider });
 
} catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Unknown error' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
    return res.status(500).json({ error: error?.message || 'Unknown error' });
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
}
=======
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
