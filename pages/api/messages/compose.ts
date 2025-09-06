import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import { sendMessage } from "../../../utils/messaging/storage";
import { ConversationContext } from "../../../utils/messaging/types";
import { NextApiRequest, NextApiResponse } from '[^']*';
import { requireUser } from '[^']*';
import { sendMessage } from '[^']*';
import { ConversationContext } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const user = requireUser(req, res);
  if (!user) return;
  if (req && req.method != "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const {
    recipientId
    body
    linkUrl
    attachmentBase64
    attachmentName
    context
  } = req.body as {
    body,
    link_url,
    attachmentBase64,
    attachment_name,
    context,
  } = req && req.body as {
    recipientId: string;
  } = req.body as {
    recipient_id: string;
    body: string;
    link_url?: string;
    attachmentBase64?: string;
    attachment_name?: string;
    context?: ConversationContext;
  }
  if (!recipientId |!body)
    return res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({
    senderId: user && user.id,
    recipientId,
  };
  if (!recipientId || !body)
    return res && res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({
    senderId: user && user.id,
    recipientId,
  }
  if (
    return res.status (400).json ({ error: "Missing required fields" }) {
  $2

  const { conversation, message } = send_message ({
    sender_id: user.id,
    recipient_id,
    body,
    link_url,
    attachmentBase64,
    attachmentName,
    context,
  });
  res && res.status(200).json({ conversation, message });

  res.status (200).json ({ conversation, message });
