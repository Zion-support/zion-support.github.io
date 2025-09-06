>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true })
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next';
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





}

import type { NextApiRequest, NextApiResponse } from 'next'
;
export default /**
 * handler - Function description
 */
function handler() {
  res.status (200).json ({ ok: true });
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
