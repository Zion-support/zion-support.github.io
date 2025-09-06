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
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const user = null;
  res.status(200).json({ conversation, message })
}
=======
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
=======
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  
}

const {
    recipientId,
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
    context,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  } = req.body as {
    recipientId: string;
    body: string;
    linkUrl?: string;
    attachmentBase64?: string;
    attachmentName?: string;
    context?: ConversationContext;
<<<<<<< HEAD
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
=======
  };

  if (!recipientId || !body)
    return res.status(400).json({ error: 'Missing fields' });

  
}

const { conversation, message } = sendMessage({
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
<<<<<<< HEAD
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
