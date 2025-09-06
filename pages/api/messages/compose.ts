<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from '[^']*';
import { requireUser } from '[^']*';
import { sendMessage } from '[^']*';
import { ConversationContext } from '[^']*';
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======
import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import { sendMessage } from "../../../utils/messaging/storage";
import { ConversationContext } from "../../../utils/messaging/types";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const user = requireUser(req, res);
  if (!user) return;
<<<<<<< HEAD
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const {
    recipientId
    body
    linkUrl
    attachmentBase64
    attachmentName
    context
  } = req.body as {
    recipientId: string;
    body: string;
    linkUrl?: string;
    attachmentBase64?: string;
    attachmentName?: string;
    context?: ConversationContext;
  }
  if (!recipientId |!body)
    return res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({
    senderId: user.id
    recipientId
    body
    linkUrl
    attachmentBase64
    attachmentName
    context
  });
  res.status(200).json({ conversation, message });
}

=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
