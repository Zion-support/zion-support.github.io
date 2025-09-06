<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


<<<<<<< HEAD
=======
  res.status(200).json({ success: true })
=======
import { NextApiRequest, NextApiResponse } from 'next',;
import { requireUser } from '../../../utils/auth',;
import { getConversationById, markAsRead } from '../../../utils/messaging/storage',;
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res),
  if (!user) return,
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { conversationId } = req.body || {},
  if (!conversationId) return res.status(400).json({ error: 'Missing conversationId' }),
  const conv = getConversationById(conversationId),
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json({ error: 'Conversation not found' }),
  markAsRead(conversationId, user.id),
  res.status(200).json({ success: true });
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { getConversationById, markAsRead } from '../../../utils/messaging/storage';
export default function handler(req, res) {
  try {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { conversationId } = req.body || {};
  if (!conversationId) return res.status(400).json({ error: 'Missing conversationId' });
  const conv = getConversationById(conversationId);
  if (!conv || !conv.participants.includes(user.id)) return res.status(404).json({ error: 'Conversation not found' });
  markAsRead(conversationId, user.id);
<<<<<<< HEAD
  res.status(200).json({ success: true })
=======
  res.status(200).json({ success: true });
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}


=======
import { NextApiRequest, NextApiResponse } from 'next',
import { require_user } from '../../../utils / auth',
import { getConversationById, markAsRead } from '../../../utils / messaging / storage',
;
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
  const { conversation_id } = req.body || {},
  if (return res.status (400).json ({ error: 'Missing conversation_id' }), ) {
  $2
}
  const conv = getConversationById (conversation_id),
  if () return res.status (404).json ({ error: 'Conversation not found' }), ) {
  $2
}
  markAsRead (conversation_id, user.id),
  res.status (200).json ({ success: true });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
