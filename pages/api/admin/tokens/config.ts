<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getConfig } from '../../../../utils/token/service';
import { tokenStore } from '../../../../utils/token/storage';

=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getConfig())
  }
<<<<<<< HEAD
  if (req.method === 'POST') {
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getConfig())
  }
  if (req.method === "POST") {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  if (req.method === "POST") {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const body = req.body || {};
    const current = tokenStore.getConfig();
    const updated = { ...current, ...body };
    tokenStore.setConfig(updated);
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json(updated);
  }
  return res.status(405).json({ error: 'Method not allowed' });
=======
    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
