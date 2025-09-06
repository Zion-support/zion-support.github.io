

<<<<<<< HEAD

import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
  getConversationById,
  getMessages,
  sendMessage,;
=======
import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  getConversationById,
  getMessages,
  sendMessage,;


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
    if (!id || typeof id !== 'string') return res.status(400).json({ error: 'Missing id' });

    const conversation = getConversationById(id);
    if (!conversation || !conversation && conversation.participants.includes(user && user.id)) {
      return res && res.status(404).json({ error: "Conversation not found" });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
    res && res.status(405).json({ error: "Method not allowed" });
  }

}

    res.status (200).json ({ conversation, message });
  } else {
    res.status (405).json ({ error: "Method not allowed" });
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
=======

  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
