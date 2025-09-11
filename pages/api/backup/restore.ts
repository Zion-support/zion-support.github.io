
=======
    return res.status(500).json({ error: e?.message |'Restore failed' })
  }

}

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
  const { cid } = req.query as { cid?: string };
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
