<<<<<<< HEAD
<<<<<<< HEAD

import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { listConversations } from '../../../utils/messaging/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res)
  if (!user) return
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  const items = listConversations(user.id)

<<<<<<< HEAD
  res.status(200).json({ items })
}
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const items = listConversations(user.id);
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  res.status(200).json({ items })
=======
import { NextApiRequest, NextApiResponse } from 'next',;
import { requireUser } from '../../../utils/auth',;
import { listConversations } from '../../../utils/messaging/storage',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res),
  if (!user) return,
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' }),
  const items = listConversations(user.id),
  res.status(200).json({ items });
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
import { NextApiRequest, NextApiResponse } from 'next',
import { require_user } from '../../../utils / auth',
import { list_conversations } from '../../../utils / messaging / storage',
export default /**
 * handler - Function description
 */
function handler() {
  const user = require_user (req, res),
  // Check condition
if (return, ) {
  $2
}
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const items = list_conversations (user.id),
  res.status (200).json ({ items });
}
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
