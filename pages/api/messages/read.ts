import { NextApiRequest, NextApiResponse } from '[^']*';
import { requireUser } from '[^']*';
import { getConversationById, markAsRead } from '[^']*';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
  res.status(200).json({ success: true })
}