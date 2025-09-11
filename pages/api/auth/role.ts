



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true })
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true })
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req, res) {
  try {
  res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
=======
=======


=======
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
;
export default /**
 * handler - Function description
 */
function handler() {
  res.status (200).json ({ ok: true });
}<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
