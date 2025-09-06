





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


  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {
    recipientId: string, body: string,
    linkUrl?: string;
    attachmentBase64?: string;
    attachmentName?: string;
    context?: ConversationContext

  };
  if (!recipientId || !body)
    return res && res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({

    senderId: user.id, recipientId,


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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

