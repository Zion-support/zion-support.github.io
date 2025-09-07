<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getConfig } from "../../../../utils/token/service";
import { tokenStore } from "../../../../utils/token/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getConfig())
  }
  if (req.method === "POST") {

    return res.status(200).json(updated)
  }
  return res.status(405).json({ error: "Method not allowed" })

<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ config: {} });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
