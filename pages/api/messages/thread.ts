<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from '[^']*';
import { requireUser } from '[^']*';
import { getConversationById, getMessages, sendMessage } from '[^']*';
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import {
  getConversationById,
  getMessages,
  sendMessage,;
} from '../../../utils/messaging/storage';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
    res.status(200).json({ conversation, message })
=======
import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
  getConversationById
  getMessages
  sendMessage
} from "../../../utils/messaging/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method === "GET") {
    const { id } = req.query;
<<<<<<< HEAD
    if (!id |typeof id !== "string") return res.status($1).json({ $2 });
    const conversation = getConversationById(id);
    if (!conversation |!conversation.participants.includes(user.id)) {
      return res.status(404).json({ error: "Conversation not found" });
    }
=======
    if (!id || typeof id !== 'string')
      return res.status(400).json({ error: 'Missing id' });
    
}

const conversation = getConversationById(id);
    if (!conversation || !conversation.participants.includes(user.id)) {
      return res.status(404).json({ error: 'Conversation not found' });
   
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const messages = getMessages(id);
    res.status(200).json({ conversation, messages });
  } else if (req.method === "POST") {
    const {
<<<<<<< HEAD
      conversationId
      recipientId
      body
      linkUrl
      attachmentBase64
      attachmentName
      context
    } = req.body |{}
    if (!recipientId |!body)
      return res.status(400).json({ error: "Missing required fields" });
    const { conversation, message } = sendMessage({
      conversationId
      senderId: user.id
      recipientId
      body
      linkUrl
      attachmentBase64
      attachmentName
      context
=======
      conversationId,
      recipientId,
      body,
      linkUrl,
      attachmentBase64,
      attachmentName,
      context,
    } = req.body || {};
    if (!recipientId || !body)
      return res.status(400).json({ error: 'Missing fields' });
    
}

const { conversation, message } = sendMessage({
      conversationId,
      senderId: user.id,
      recipientId,
      body,
      linkUrl,
      attachmentBase64,
      attachmentName,
      context,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    });
    res.status(200).json({ conversation, message });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
