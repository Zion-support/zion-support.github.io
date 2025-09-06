<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from '[^']*';
import { requireUser } from '[^']*';
import { sendMessage } from '[^']*';
import { ConversationContext } from '[^']*';
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function handler(req: NextApiRequest, res: NextApiResponse) {

import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import { sendMessage } from "../../../utils/messaging/storage";
import { ConversationContext } from "../../../utils/messaging/types";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
<<<<<<< HEAD

  const user = requireUser(req, res);
  if (!user) return;

=======
  const user = requireUser(req, res);
  if (!user) return;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const user = requireUser(req, res);
  if (!user) return;

    recipientId,
=======
=======
recipientId,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { NextApiRequest, NextApiResponse  } from './next';
import { require_user  } from '../../../utils / auth';
import { send_message  } from '../../../utils / messaging / storage';
import { ConversationContext  } from '../../../utils / messaging / types';
export default /**
 * handler - Function description
 */
function handler() {
  const user = require_user (req, res);
  // Check condition
if (return) {
  $2
}
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const {
    recipient_id,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    body,
    link_url,
    attachmentBase64,
    attachment_name,
    context,
<<<<<<< HEAD

  } = req.body as {
    recipient_id: string;

=======
  } = req.body as {
    recipient_id: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    body: string;
    link_url?: string;
    attachmentBase64?: string;
    attachment_name?: string;
    context?: ConversationContext;
<<<<<<< HEAD

    senderId: user.id
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {
    recipientId: string, body: string,
export default function handler(req: NextApiRequest, res: NextApiResponse) {

import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import { sendMessage } from "../../../utils/messaging/storage";
import { ConversationContext } from "../../../utils/messaging/types";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;

  const user = requireUser(req, res);
  if (!user) return;
if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    recipientId
    body
    linkUrl
    attachmentBase64
    attachmentName
    context
<<<<<<< HEAD
=======
=======
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
=======
  } = req.body as {
    recipientId: string;
    body: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

    linkUrl?: string;
    attachmentBase64?: string;
    attachmentName?: string;
    context?: ConversationContext
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  };
  if (!recipientId || !body)
    return res && res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({
<<<<<<< HEAD

    senderId: user.id, recipientId,

=======
=======
    senderId: user.id, recipientId,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  if (
    return res.status (400).json ({ error: "Missing required fields" })) {
  $2
}
  const { conversation, message } = send_message ({
    sender_id: user.id,
    recipient_id,
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    body,
    link_url,
    attachmentBase64,


=======
    body,
    link_url,
    attachmentBase64,
    attachment_name,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    context,
  });
<<<<<<< HEAD

}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    context});
  res.status(200).json({ conversation, message })

}
  res.status (200).json ({ conversation, message });

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  });
  res.status(200).json({ conversation, message })
}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
