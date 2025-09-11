<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from '[^']*';
import { requireUser } from '[^']*';
import { sendMessage } from '[^']*';
import { ConversationContext } from '[^']*';
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import { sendMessage } from "../../../utils/messaging/storage";
import { ConversationContext } from "../../../utils/messaging/types";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const {
<<<<<<< HEAD
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const user = requireUser(req, res);
  if (!user) return;

    recipientId,
<<<<<<< HEAD
recipientId,
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    recipient_id,

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    body,
    link_url,
    attachmentBase64,
    attachment_name,
    context,
<<<<<<< HEAD
<<<<<<< HEAD
  } = req.body as {
    recipient_id: string;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  } = req.body as {
    recipient_id: string;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    body: string;
    link_url?: string;
    attachmentBase64?: string;
    attachment_name?: string;
    context?: ConversationContext;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

    senderId: user.id
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    senderId: user.id
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    recipientId
    body
    linkUrl
    attachmentBase64
    attachmentName
    context
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
<<<<<<< HEAD
  } = req.body as {
    recipientId: string;
    body: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======

  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {
    recipientId: string, body: string,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    linkUrl?: string;
    attachmentBase64?: string;
    attachmentName?: string;
    context?: ConversationContext
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
  if (!recipientId || !body)
    return res && res.status(400).json({ error: "Missing required fields" });
  const { conversation, message } = sendMessage({
<<<<<<< HEAD
<<<<<<< HEAD
    senderId: user.id, recipientId,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    senderId: user.id, recipientId,

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  if (
    return res.status (400).json ({ error: "Missing required fields" })) {
  $2
}
  const { conversation, message } = send_message ({
    sender_id: user.id,
    recipient_id,
<<<<<<< HEAD
<<<<<<< HEAD
    body,
    link_url,
    attachmentBase64,
    attachment_name,
    context,
  });
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    body,
    link_url,
    attachmentBase64,


    context,
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  });

}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    context});
  res.status(200).json({ conversation, message })

}
  res.status (200).json ({ conversation, message });

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
