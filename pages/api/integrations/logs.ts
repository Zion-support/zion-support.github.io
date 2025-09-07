import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../lib/integrations/fileStore';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json($2);
  const { providerId } = req.query as { providerId?: string },
  const state = readState($2);
  const logs = $2;
  res.status(200).json({ logs })
}