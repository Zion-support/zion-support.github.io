import { NextApiRequest, NextApiResponse } from '[^']*';
import { requireUser } from '[^']*';
import { listConversations } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
  res.status(200).json({ items })
};
