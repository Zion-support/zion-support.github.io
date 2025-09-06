<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string }
  if (!cid) return res.status(400).json({ error: 'Missing cid' })
  try {
    const url = `https://${cid}.ipfs.w3s.link`
    const r = await fetch(url)
    if (!r.ok) return res.status(404).json({ error: 'Not found' })
    const data = await r.json()
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    return res.status(200).json(data)
  } catch (e: any) {
<<<<<<< HEAD

export default async function handler(req, res) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string }
  if (!cid) return res.status(400).json({ error: 'Missing cid' })
  try {
    const url = `https://${cid}.ipfs.w3s.link`
    const r = await fetch(url)
    if (!r.ok) return res.status(404).json({ error: 'Not found' })
    const data = await r.json()

    return res.status(200).json(data)
  } catch (e: any) {
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return res.status(500).json({ error: e?.message |'Restore failed' })
    return res.status(500).json({ error: e?.message || 'Restore failed' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  try {
=======
    return res.status(500).json({ error: e?.message |'Restore failed' })
  }

}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
    return res.status(200).json(data)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |'Restore failed' })


<<<<<<< HEAD
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    return res.status(500).json({ error: e?.message || 'Restore failed' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  }
}
  }
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message || 'Restore failed' });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

;



<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
