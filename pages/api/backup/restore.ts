<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string }
  if (!cid) return res.status(400).json({ error: 'Missing cid' })
  try {
    const url = `https://${cid}.ipfs.w3s.link`
    const r = await fetch(url)
    if (!r.ok) return res.status(404).json({ error: 'Not found' })
    const data = await r.json()
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    return res.status(200).json(data)
  } catch (e: any) {
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return res.status(500).json({ error: e?.message |'Restore failed' })
  }

}

<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json(data)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
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
<<<<<<< HEAD
    const url = `https://${cid}.ipfs.w3s.link`,
    const r = await fetch (url),
    if (return res.status (404).json ({ error: 'Not found' }), ) {
  $2
}
    const data = await r.json (),
    return res.status (200).json (data);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |'Restore failed' })


<<<<<<< HEAD
    return res.status(500).json({ error: e?.message || 'Restore failed' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { cid } = req.query as { cid?: string };
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }
}
=======
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
