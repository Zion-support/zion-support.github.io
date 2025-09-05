import type {_NextApiRequest, _NextApiResponse} from 'next';
import path from 'path';
import fs from 'fs';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  try {_// Ensure export
    const _outDir = path.resolve(process.cwd(), _'out');
    try {
      execSync('npm run export', _{ stdio: 'inherit'});
    } catch (e) {_// attempt minimal static export
      try {
        execSync('next build && next export', _{ stdio: 'inherit'});
      } catch (e2) {}
    }

    if (!fs.existsSync(outDir)) {_return res.status(500).json({ error: 'Export failed, _no out/ directory found'});
    }

    const {_cid, _provider} = await addDirectory(outDir);
    if (!cid) return res.status(500).json({_error: 'IPFS upload failed'});

    return res.status(200).json({_cid, _provider});
  } catch (error: unknown) {_return res.status(500).json({ error: error?.message || 'Unknown error'});
  }
}