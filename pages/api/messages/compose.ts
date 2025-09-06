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