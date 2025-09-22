import { NextApiRequest, NextApiResponse } from 'next',;
import { requireUser } from '../../../utils/auth',;
import { listConversations } from '../../../utils/messaging/storage',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  const user = requireUser(req, res),
  if (!user) return,'
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' }),
  const items = listConversations(user.id),

import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { listConversations } from '../../../utils/messaging/storage';
export default function handler(req, res) {
  try {

  const user = requireUser(req, res);
  if (!user) return,;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  const items = listConversations(user.id);
  res.status(200).json({ items });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> pr-12243
  res.status(200).json({ items })
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  res.status(200).json({ items });
};'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
