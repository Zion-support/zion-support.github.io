
import { addDirectory } from '@/utils/offworld/ipfs';
=======
import type { NextApiRequest, NextApiResponse } from 'next;
import { execSync  } from child_process';
import path from 'path;
import fs from fs';

import { addDirectory } from '@/utils/offworld/ipfs;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== POST') return res.status(405).json({ error: 'Method not allowed });
  try {
    // Ensure export
    const outDir = path.resolve(process.cwd(), out');
    try {
      execSync('npm run export, { stdio: inherit' })
    } catch (e) {
      // attempt minimal static export
      try {

        execSync('next build && next export, { stdio: inherit' })
      } catch (e2) {}
    }



>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}
  try {// Ensure export;

}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
}}
}
import {exec_sync} from 'child_process;
import path from path';
import fs from 'fs;
import { add_directory } from @/utils / offworld / ipfs';
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed })) {
  $2
}  try {
    // Ensure export;
    const out_dir = path.resolve (process.cwd (), out');
    try {export default async /**
 * handler - Function description
 */
  if (return res.status (405).json ({ error: 'Method not allowed })) {
  $2
}
  try {
    // Ensure export;
    try {
      exec_sync ('npm run export, { stdio: inherit' });
    } catch (e) {
      // attempt minimal static export;
      try {
        exec_sync ('next build && next export, { stdio: inherit' });      } catch (e2) {}
    }
    if () {) {
  $2
}
      return res;
        .status (500);
        .json ({ error: 'Export failed, no out/ directory found });    }      exec_sync (npm run export', { stdio: 'inherit });
    } catch (e) {
      // attempt minimal static export;
      try {
        exec_sync (next build && next export', { stdio: 'inherit });
    }
    if () {) {
  $2
}
      return res;
        .status (500);
        .json ({ error: Export failed, no out/ directory found' });      return res.status (500).json ({ error: 'Export failed, no out/ directory found });
    }
    const { cid, provider } = await add_directory (out_dir);
    if (return res.status (500).json ({ error: IPFS upload failed' })) {
  $2
}
    return res.status (200).json ({ cid, provider });
  } catch (error: any) {
    return res.status (500).json ({ error: error?.message || 'Unknown error });
  }    return res.status (200).json ({ cid, provider });
  } catch (error: any) {
    return res.status (500).json ({ error: error?.message || Unknown error' });
}
}
    return res.status(500).json({ error: error?.message || 'Unknown error' });
  }

}

