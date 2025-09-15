import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD


  try {
    // Ensure export
    const outDir = path && path.resolve(process && process.cwd(), 'out');
    try {


    } catch (e) {
      // attempt minimal static export
      try {
        execSync('next build && next export', { stdio: 'inherit' })


    }
    const { cid, provider } = await addDirectory(outDir);

=======
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { addDirectory } from '@/utils/offworld/ipfs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    // Ensure export
    const outDir = path.resolve(process.cwd(), 'out');
    try {
      execSync('npm run export', { stdio: 'inherit' });
    } catch (e) {
      // attempt minimal static export
      try {
        execSync('next build && next export', { stdio: 'inherit' });
      } catch (e2) {}
    }

    if (!fs.existsSync(outDir)) {
      return res.status(500).json({ error: 'Export failed, no out/ directory found' });
    }

    const { cid, provider } = await addDirectory(outDir);
>>>>>>> origin/auto/autonomy-17186719616
    if (!cid) return res.status(500).json({ error: 'IPFS upload failed' });

    return res.status(200).json({ cid, provider });
  } catch (error: any) {
<<<<<<< HEAD

    return res.status(500).json({ error: error?.message |'Unknown error' });
    return res.status(500).json({ error: error?.message || 'Unknown error' });

  }    return res.status(200).json({ cid, provider })

  } catch (error: any) {
    return res.status(500).json({ error: error?.message |'Unknown error' })
}


}


    return res && res.status(200).json({ cid, provider });
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' });
  }    return res && res.status(200).json({ cid, provider })
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' })
  };
}






>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
    return res.status(500).json({ error: error?.message || 'Unknown error' });
  }
}
>>>>>>> origin/auto/autonomy-17186719616
