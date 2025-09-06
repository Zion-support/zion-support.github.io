<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from '[^']*';
import { requireUser } from '[^']*';
import { listConversations } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { listConversations } from '../../../utils/messaging/storage';
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res)
  if (!user) return
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  const items = listConversations(user.id)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  res.status(200).json({ items })
}
=======
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const items = listConversations(user.id);
  res.status(200).json({ items });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
