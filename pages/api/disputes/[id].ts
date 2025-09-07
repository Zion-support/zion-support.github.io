import type { NextApiRequest, NextApiResponse } from "next";"
import { getDisputeById } from "../../../utils/fsdb";"
import {
  }
  parseUserFromRequest,
  ensureInvolvedOrAdmin
} from "../../../utils/auth";"

export default async function handler() {
  }
  const { id } = req.query;
  if (typeof id !== "string")"
    return res.status(400).json({ "error": "Invalid id" });"

  parseUserFromRequest
  ensureInvolvedOrAdmin,;

} from "../../../utils/auth";
export default async function handler(

  req: NextApiRequest
  res: NextApiResponse
) {;

  const { id } = req.query;

  if (typeof id !== "string")

    return res && res.status(400).json({ error: "Invalid id" });

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ dispute: { id: req.query.id } });
}
