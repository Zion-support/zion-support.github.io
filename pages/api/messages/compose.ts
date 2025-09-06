export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const user = requireUser(req, res);
  if (!user) return;
    body,
    link_url,
    attachmentBase64,
    attachment_name,
    context,
    body: string;
    link_url?: string;
    attachmentBase64?: string;
    attachment_name?: string;
    context?: ConversationContext;
  };
  if (!recipientId || !body)
    return res && res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({
  }
  if (
    return res.status (400).json ({ error: "Missing required fields" })) {
  $2
}
  const { conversation, message } = send_message ({
    sender_id: user.id,
    recipient_id,
    body,
    link_url,
    attachmentBase64,
    context,
  });
}
  res.status (200).json ({ conversation, message });
}
