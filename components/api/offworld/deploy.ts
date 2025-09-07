import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { execSync  } from 'child_process';
=======
  try {// Ensure export;
    const outDir = path && path.resolve(process && process.cwd(), 'out')try {} catch (e) {// attempt minimal static export;
      try {execSync('next build && next export', { stdio: 'inherit' })}
      return res;
        .status(500).json({ error: 'Export failed, no out/ directory found' })return res && res.status(500).json({ error: 'Export failed, no out/ directory found' })}
    const { cid, provider } = await addDirectory(outDir)return res.status(500).json({ error: error?.message |'Unknown error' })return res.status(500).json({ error: error?.message || 'Unknown error' })}    return res.status(200).json({ cid, provider })import { execSync   } from 'child_process';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
import path from 'path';
import fs from 'fs';
import { addDirectory  } from '@/utils/offworld/ipfs';
export default async function handler() {if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })try {// Ensure export;
    const outDir = null;
    return res.status(200).json({ cid, provider })export default async function handler() {if (req.method !== 'POST')return res.status(405).json({ error: 'Method not allowed' })try {// Ensure export;
    const outDir = path.resolve(process.cwd(), 'out')try {execSync('npm run export', { stdio: 'inherit' })} catch (e) {// attempt minimal static export;
      try {execSync('next build && next export', { stdio: 'inherit' })} catch (e2) {}
    }
<<<<<<< HEAD
    if (!fs.existsSync(outDir)) {
return res
        .status(500)
        .json({ error: 'Export failed, no out/ directory found' });
    }
    const { cid, provider } = await addDirectory(outDir);
    if (!cid) return res.status(500).json({ error: 'IPFS upload failed' });

return res.status(200).json({ cid, provider });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Unknown error' });
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (error: any) {
    return res.status(500).json({ error: error?.message |'Unknown error' })

    return res.status(200).json({ cid, provider })

  } catch (error: any) {
    return res.status(500).json({ error: error?.message |'Unknown error' })
    return res && res.status(200).json({ cid, provider });
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' });
  }    return res && res.status(200).json({ cid, provider })
  } catch (error: any) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' })
  };
=======
    if (!fs.existsSync(outDir)) {return res;
        .status(500).json({ error: 'Export failed, no out/ directory found' })}
    const { cid, provider } = await addDirectory(outDir)if (!cid) return res.status(500).json({ error: 'IPFS upload failed' })return res.status(200).json({ cid, provider })} catch (error: any) {return res.status(500).json({ error: error?.message || 'Unknown error' })}} catch (error: any) {return res.status(500).json({ error: error?.message |'Unknown error' })return res.status(200).json({ cid, provider })} catch (error: any) {return res.status(500).json({ error: error?.message |'Unknown error' })return res && res.status(200).json({ cid, provider })} catch (error: any) {return res && res.status(500).json({ error: error?.message || 'Unknown error' })}    return res && res.status(200).json({ cid, provider })} catch (error: any) {return res && res.status(500).json({ error: error?.message || 'Unknown error' })}}
import { exec_sync } from 'child_process';
import { add_directory   } from '@/utils / offworld / ipfs';export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: 'Method not allowed' })) {$2;
}  try {// Ensure export;
    const out_dir = path.resolve (process.cwd (), 'out')try {export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: 'Method not allowed' })) {$2;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}
  try {// Ensure export;
    const out_dir = path.resolve (process.cwd (), 'out')try {exec_sync ('npm run export', { stdio: 'inherit' })} catch (e) {// attempt minimal static export;
      try {exec_sync ('next build && next export', { stdio: 'inherit' })} catch (e2) {}
    }
    if () {) {$2;
}
      return res;
        .status (500).json ({ error: 'Export failed, no out/ directory found' })}      exec_sync ('npm run export', { stdio: 'inherit' })} catch (e) {// attempt minimal static export;
      try {exec_sync ('next build && next export', { stdio: 'inherit' })}
    if () {) {$2;
}
      return res;
        .status (500).json ({ error: 'Export failed, no out/ directory found' })return res.status (500).json ({ error: 'Export failed, no out/ directory found' })}
    const { cid, provider } = await add_directory (out_dir)if (return res.status (500).json ({ error: 'IPFS upload failed' })) {$2;
}
    return res.status (200).json ({ cid, provider })} catch (error: any) {return res.status (500).json ({ error: error?.message || 'Unknown error' })}    return res.status (200).json ({ cid, provider })} catch (error: any) {return res.status (500).json ({ error: error?.message || 'Unknown error' })}
}
    return res.status(500).json({ error: error?.message || 'Unknown error' })}}
}
  }
<<<<<<< HEAD
}
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
}}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
