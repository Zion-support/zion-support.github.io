<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
  getConversationById
  getMessages
  sendMessage
import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
  getConversationById
  getMessages
  sendMessage
=======


<<<<<<< HEAD

import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
  getConversationById,
  getMessages,
  sendMessage,;
<<<<<<< HEAD
=======
=======
import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  getConversationById,
  getMessages,
  sendMessage,;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

} from "../../../utils/messaging/storage";
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const user = requireUser(req, res);
  if (!user) return;

  if (req && req.method === "GET") {
    const { id } = req && req.query;
    if (!id || typeof id !== "string") return res && res.status($1).json({ $2 });
<<<<<<< HEAD
=======
    if (!id || typeof id !== 'string') return res.status(400).json({ error: 'Missing id' });

    const conversation = getConversationById(id);
    if (!conversation || !conversation && conversation.participants.includes(user && user.id)) {
      return res && res.status(404).json({ error: "Conversation not found" });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    const messages = getMessages(id);

      conversationId,
      senderId: user.id,
      recipientId,
    res.status(200).json({ conversation, messages })
  } else if (req.method === 'POST') {
    const { conversationId, recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body || {};
    if (!recipientId || !body) return res.status(400).json({ error: 'Missing fields' });
    const { conversation, message } = sendMessage({
      conversationId,
<<<<<<< HEAD
      senderId: user.id,
      recipientId,
      body,
      linkUrl,
      attachmentBase64,
      attachmentName,
      context
    });
    res.status(200).json({ conversation, message })
  } else {
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    res.status(405).json({ error: 'Method not allowed' })
  }
}
    res.status(405).json({ error: "Method not allowed" });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { getConversationById, getMessages, sendMessage } from '../../../utils/messaging/storage';
export default function handler(req, res) {
  try {
  const user = requireUser(req, res);
<<<<<<< HEAD
  if (!user) return,;
  if (req.method === 'GET') {
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const { id } = req.query;
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    const conversation = getConversationById (id);
    if () {) {
  $2
}
      return res.status (404).json ({ error: "Conversation not found" });
    }
    const messages = get_messages (id);
    res.status (200).json ({ conversation, messages });
  } else // Check condition
if ( {) {
  $2
}
    const {
      conversation_id,
      recipient_id,
      body,
      link_url,
      attachmentBase64,
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      body,
      link_url,
      attachmentBase64,

      attachment_name,

      context,
    });
<<<<<<< HEAD
  } else {
=======
    res && res.status(405).json({ error: "Method not allowed" });
  }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  }
}

<<<<<<< HEAD
  }
}
=======
    res.status (200).json ({ conversation, message });
  } else {
    res.status (405).json ({ error: "Method not allowed" });
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
<<<<<<< HEAD
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======

  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
