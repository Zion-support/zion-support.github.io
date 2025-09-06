<<<<<<< HEAD
const { cid } = req.query as { cid?: string };
  if (!cid) return res.status(400).json({ error: 'Missing cid' });
  try {
    const url = `https://${cid}.ipfs.w3s.link`;
    const r = await fetch(url);
    if (!r.ok) return res.status(404).json({ error: 'Not found' });
    const data = await r.json();
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string }
  if (!cid) return res.status(400).json({ error: 'Missing cid' })
  try {
    const url = `https://${cid}.ipfs.w3s.link`
    const r = await fetch(url)
    if (!r.ok) return res.status(404).json({ error: 'Not found' })
    const data = await r.json()

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    return res.status(200).json(data)
  } catch (e: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: e?.message |'Restore failed' })
<<<<<<< HEAD
  }
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
    const url = `https://${cid}.ipfs.w3s.link`,
    const r = await fetch (url),
    if (return res.status (404).json ({ error: 'Not found' }), ) {
  $2
}
    const data = await r.json (),
    return res.status (200).json (data);
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message || 'Restore failed' });
  }
}
;
=======
=======
=======
    return res.status(500).json({ error: e?.message || 'Restore failed' })
  };
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default async function handler(req, res) {
  try {
  const { cid } = req.query as { cid?: string };
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
=======
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
