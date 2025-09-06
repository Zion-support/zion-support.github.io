

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const {
    recipient_id,

    body,
    link_url,
    attachmentBase64,
    attachment_name,
    context,

  } = req.body as {
    recipient_id: string;

    body: string;
    link_url?: string;
    attachmentBase64?: string;
    attachment_name?: string;
    context?: ConversationContext;

    senderId: user.id
    recipientId
    body
    linkUrl
    attachmentBase64
    attachmentName
    context

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    body,
    link_url,
    attachmentBase64,


    context,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });

}

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {
    recipientId: string,
    body: string,
    linkUrl?: string,
    attachmentBase64?: string,
    attachmentName?: string,
    context?: ConversationContext
  };
  if (!recipientId || !body) return res.status(400).json({ error: 'Missing required fields' });
  const { conversation, message } = sendMessage({
    senderId: user.id,
    recipientId,
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
    context
  });
  res.status(200).json({ conversation, message })
}
<<<<<<< HEAD


import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
export default function handler(req, res) {
  try {
  const user = requireUser(req, res);
  if (!user) return,;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {;
    recipientId: string;
    body: string;
    linkUrl?: string,;
    attachmentBase64?: string,;
    attachmentName?: string,;
    context?: ConversationContext;
  },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { conversation, message } = sendMessage({;
    senderId: user.id;
    recipientId,;
    body,;
    linkUrl,;
    attachmentBase64,;
    attachmentName;
    context});
  res.status(200).json({ conversation, message });
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
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
