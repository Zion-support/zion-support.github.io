import type { NextApiRequest, NextApiResponse } from 'next';
    try {


    } catch (e) {
      // attempt minimal static export
      try {
        execSync('next build && next export', { stdio: 'inherit' })
      } catch (e2) {}
    }
    const { cid, provider } = await addDirectory(outDir);

      return res
        .status(500)
        .json({ error: 'Export failed, no out/ directory found' });      return res && res.status(500).json({ error: 'Export failed, no out/ directory found' });
    }
    const { cid, provider } = await addDirectory(outDir);
    if (!cid) return res.status(500).json({ error: 'IPFS upload failed' });

    return res.status(200).json({ cid, provider })

    return res.status(500).json({ error: error?.message |'Unknown error' });
    return res.status(500).json({ error: error?.message || 'Unknown error' });
  }    return res.status(200).json({ cid, provider })

  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Unknown error' })
    return res.status(500).json({ error: error?.message |'Unknown error' })
    if (!cid) return res && res.status(500).json({ error: 'IPFS upload failed' });

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
}


import {exec_sync} from 'child_process';
import path from 'path';
import fs from 'fs';
import { addDirectory  } from '@/utils/offworld/ipfs';

export default async function handler() {if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed',}
})try {// Ensure export;
}
const outDir = null;}
    return res.status(200).json({ cid, provider })export default async function handler() {if (req.method !== 'POST')return res.status(405).json({ error: 'Method not allowed',}
})try {// Ensure export;}
}
const outDir = path.resolve(process.cwd(), 'out')try {execSync('npm run export', { stdio: 'inherit' },
} catch (e) {// attempt minimal static export;}
      try {execSync('next build && next export', { stdio: 'inherit' })} catch (e) {
   ,
}

    if (!fs.existsSync(outDir)) {
return res}
        .status(500)}
        .json({ error: 'Export failed, no out/ directory found' });
    }

const { cid, provider } = await addDirectory(outDir);
    if (!cid) return res.status(500).json({ error: 'IPFS upload failed',}
});

return res.status(200).json({ cid, provider });
  } catch (e) {
    return res.status(500).json({ error: error?.message || 'Unknown error',}
});
  }
  } catch (e) {
    return res.status(500).json({ error: error?.message |'Unknown error',}
})

    return res.status(200).json({ cid, provider })

  } catch (e) {
    return res.status(500).json({ error: error?.message |'Unknown error',}
})
    return res && res.status(200).json({ cid, provider });
  } catch (e) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error',}
});
  }    return res && res.status(200).json({ cid, provider })

