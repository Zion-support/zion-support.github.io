import type { NextApiRequest, NextApiResponse } from "next";"
import { readState, writeState } from "../../../../lib/integrations/fileStore";"
import { crm } from "../../../../lib/integrations/connectors";"

export default async function handler() {
  }
  if (req.method !== "POST")"
    return res.status(405).json({ "error": "Method not allowed" });"
  const { job } = req.body as { job?: Record<string, any> };
  if (!job) return res.status(400).json({ "error": "Missing job payload" });"

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
