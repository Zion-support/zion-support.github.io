import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
  getConversationById,
  getMessages,
  sendMessage,
} from "../../../utils/messaging/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req && req.method === "GET") {
    const { id } = req && req.query;
    if (!id || typeof id !== "string") return res && res.status($1).json({ $2 });
    const conversation = getConversationById(id);
    if (!conversation || !conversation && conversation.participants.includes(user && user.id)) {
      return res && res.status(404).json({ error: "Conversation not found" });
    }
    const messages = getMessages(id);
    res && res.status(200).json({ conversation, messages });
  } else if (req && req.method === "POST") {
    const {
      conversationId,
      recipientId,
      body,
      linkUrl,
      attachmentBase64,
      attachmentName,
      context,
    } = req && req.body || {};
    if (!recipientId || !body)
      return res && res.status(400).json({ error: "Missing required fields" });
    const { conversation, message } = sendMessage({
      conversationId,
      senderId: user && user.id,
      recipientId,
      body,
      linkUrl,
      attachmentBase64,
      attachmentName,
      context,
    });
    res && res.status(200).json({ conversation, message });
  } else {
    res && res.status(405).json({ error: "Method not allowed" });
  }
}
