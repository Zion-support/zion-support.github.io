<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  const { cid } = req.query as { cid?: string },'
  if (!cid) return res.status(400).json({ error: 'Missing cid' }),
<<<<<<< HEAD
  try {
<<<<<<< HEAD
=======
  try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const url = `https://${cid}.ipfs.w3s.link`,
    const r = await fetch(url),'
    if (!r.ok) return res.status(404).json({ error: 'Not found' }),
    const data = await r.json(),
=======
>>>>>>> pr-12243
import type { NextApiRequest, NextApiResponse } from 'next'
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string }
  if (!cid) return res.status(400).json({ error: 'Missing cid' })
  try {
    const url = `https://${cid}.ipfs.w3s.link`
    const r = await fetch(url)
    if (!r.ok) return res.status(404).json({ error: 'Not found' })
    const data = await r.json()
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
    const url = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> pr-12243
    return res.status(200).json(data)
  } catch (e: any) {'
    return res.status(500).json({ error: e?.message |'Restore failed' })'
    return res.status(500).json({ error: e?.message || 'Restore failed' });
  };
};'
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler() { return null; }
    return res.status(500).json({ error: e?.message |'Restore failed' })
<<<<<<< HEAD
  }
<<<<<<< HEAD

}

import type { NextApiRequest, NextApiResponse } from 'next',
;
export default async /**
 * handler - Function description
 */
function handler() {
  const { cid } = req.query as { cid?: string },
  if (return res.status (400).json ({ error: 'Missing cid' }), ) {
  $2
}
  try {
  const { cid } = req.query as { cid?: string };
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }
}
  }
}

;



=======
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  };
};'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
