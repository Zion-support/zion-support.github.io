import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import { sendMessage } from "../../../utils/messaging/storage";
import { ConversationContext } from "../../../utils/messaging/types";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const {
    recipientId,
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
    context,
  } = req && req.body as {
    recipientId: string;
    body: string;
    linkUrl?: string;
    attachmentBase64?: string;
    attachmentName?: string;
    context?: ConversationContext;
  };
  if (!recipientId || !body)
    return res && res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({
    senderId: user && user.id,
    recipientId,
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
    context,
  });
  res && res.status(200).json({ conversation, message });
}
