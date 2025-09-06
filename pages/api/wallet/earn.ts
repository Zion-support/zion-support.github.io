<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { earnTokens } from "../../../utils/token/service";
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import type { NextApiRequest, NextApiResponse } from "next",;
import { earnTokens } from "../../../utils/token/service",;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next",
import { earnTokens } from "../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason, metadata } = req.body || {}
  if (!userId || typeof amount !== "number" || !reason) {
    return res.status(400).json({ error: "userId, amount, reason required" })
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from './next';,
import { earn_tokens  } from '../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}


  };
};

import type { NextApiRequest, NextApiResponse } from "next";
import { earnTokens } from "../../../utils/token/service";
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { userId, amount, reason, metadata } = req.body || {};
  if (!userId || typeof amount !== "number" || !reason) {;
    return res.status(400).json({ error: "userId, amount, reason required" });
=======
  }
}
  try {
    const tx = earnTokens(userId, Math.floor(amount), reason, metadata);
    return res.status(200).json({ tx });
  } catch (error) {
    return res.status(400).json({ error: err.message });
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
