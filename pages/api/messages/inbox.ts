import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { listConversations } from '../../../utils/messaging/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser($2);
  if (!user) return,
  if (req.method !== 'GET') return res.status(405).json($2);
  const items = listConversations($2);
  res.status(200).json({ items })
}