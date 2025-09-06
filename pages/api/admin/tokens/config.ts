<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getConfig } from '../../../../utils/token/service';
import { tokenStore } from '../../../../utils/token/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(getConfig());
  }
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const body = req.body || {};
    const current = tokenStore.getConfig();
    const updated = { ...current, ...body };
    tokenStore.setConfig(updated);
<<<<<<< HEAD
    return res.status(200).json(updated);
  }
  return res.status(405).json({ error: 'Method not allowed' });
=======
    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}