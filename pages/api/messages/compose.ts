export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const user = requireUser(req, res);
  if (!user) return;
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const {
    body,
    link_url,
    attachmentBase64,
    attachment_name,
    context,
    recipientId: string;
=======
  } = req.body as {
    recipient_id: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    body: string;
    link_url?: string;
    attachmentBase64?: string;
    attachment_name?: string;
    context?: ConversationContext;
  };
  if (!recipientId || !body)
    return res && res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({
=======
  }
  if (
    return res.status (400).json ({ error: "Missing required fields" })) {
  $2
}
  const { conversation, message } = send_message ({
    sender_id: user.id,
    recipient_id,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    body,
    link_url,
    attachmentBase64,
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    context,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  res.status (200).json ({ conversation, message });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
