
<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
  getConversationById
  getMessages
  sendMessage
import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
  getConversationById,
  getMessages,
  sendMessage,;
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {

  getConversationById,
  getMessages,
  sendMessage,;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "../../../utils/messaging/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const user = requireUser(req, res);
  if (!user) return;
<<<<<<< HEAD

<<<<<<< HEAD

import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {

  getConversationById,
  getMessages,
  sendMessage,;


} from "../../../utils/messaging/storage";
=======
  if (req.method === "GET") {
    const { id } = req.query;
    if (!id |typeof id !== "string") return res.status($1).json({ $2 });
    const conversation = getConversationById(id);
    if (!conversation |!conversation.participants.includes(user.id)) {
      return res.status(404).json({ error: "Conversation not found" });
    }
    const messages = getMessages(id);
    res.status(200).json({ conversation, messages });
  } else if (req.method === "POST") {
    const {
      conversationId
      recipientId
      body
      linkUrl
      attachmentBase64
      attachmentName
      context
    } = req.body |{}
    if (!recipientId |!body)
      return res.status(400).json({ error: "Missing required fields" });
    const { conversation, message } = sendMessage({
      conversationId
      senderId: user.id
      recipientId
      body
      linkUrl
      attachmentBase64
      attachmentName
      context
    });
    res.status(200).json({ conversation, message });

  } else {
    res.status(405).json({ error: "Method not allowed" });
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { getConversationById, getMessages, sendMessage } from '../../../utils/messaging/storage';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (req && req.method === "GET") {
    const { id } = req && req.query;
    if (!id || typeof id !== "string") return res && res.status($1).json({ $2 });
=======
  if (req && req.method === "GET") {
    const { id } = req && req.query;
    if (!id || typeof id !== "string") return res && res.status($1).json({ $2 });
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!id || typeof id !== 'string') return res.status(400).json({ error: 'Missing id' });

    const conversation = getConversationById(id);
    if (!conversation || !conversation && conversation.participants.includes(user && user.id)) {
      return res && res.status(404).json({ error: "Conversation not found" });
<<<<<<< HEAD
    }
    const messages = getMessages(id);

<<<<<<< HEAD
  if (req && req.method === "GET") {
    const { id } = req && req.query;
    if (!id || typeof id !== "string") return res && res.status($1).json({ $2 });
    if (!id || typeof id !== 'string') return res.status(400).json({ error: 'Missing id' });
    const conversation = getConversationById(id);
    if (!conversation || !conversation && conversation.participants.includes(user && user.id)) {
      return res && res.status(404).json({ error: "Conversation not found" });
    }
    const messages = getMessages(id);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      conversationId,
      recipientId,
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    const messages = getMessages(id);

      conversationId,
      recipientId,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    res.status(200).json({ conversation, messages })
  } else if (req.method === 'POST') {
    const { conversationId, recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body || {};
    if (!recipientId || !body) return res.status(400).json({ error: 'Missing fields' });
    const { conversation, message } = sendMessage({
      conversationId,

<<<<<<< HEAD
<<<<<<< HEAD
      senderId: user.id, recipientId,
import { NextApiRequest, NextApiResponse  } from './next';
import { require_user  } from '../../../utils / auth';
import {
  getConversationById,
  get_messages,
  send_message,
} from '../../../utils / messaging / storage';
export default /**
 * handler - Function description
 */
function handler() {
  const user = require_user (req, res);
  // Check condition
if (return) {
  $2
}
  // Check condition
if ( {) {
  $2
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      body,
      link_url,
      attachmentBase64,
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      body,
      link_url,
      attachmentBase64,

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      attachment_name,
      context,
    } = req.body || {}
    if (
      return res.status (400).json ({ error: "Missing required fields" })) {
  $2
}
    const { conversation, message } = send_message ({
      conversation_id,
      sender_id: user.id,
      recipient_id,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      body,
      link_url,
      attachmentBase64,

      attachment_name,

      context,
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      context});
    res.status(200).json({ conversation, message })
  } else {
    res.status (200).json ({ conversation, message });
  } else {
    res.status (405).json ({ error: "Method not allowed" });
  }
<<<<<<< HEAD
}

}
    res.status (200).json ({ conversation, message });
  } else {
    res.status (405).json ({ error: "Method not allowed" });

    res.status(405).json({ error: "Method not allowed" });
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { getConversationById, getMessages, sendMessage } from '../../../utils/messaging/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;
  if (req.method === 'GET') {
    const { id } = req.query;
    if (!id || typeof id !== 'string') return res.status($1).json({$2});
    const conversation = getConversationById(id);
    if (!conversation || !conversation.participants.includes(user.id)) {
      return res.status(404).json({ error: 'Conversation not found' })
    }
    const messages = getMessages(id);
    res.status(200).json({ conversation, messages })
  } else if (req.method === 'POST') {
    const { conversationId, recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body || {};
    if (!recipientId || !body) return res.status(400).json({ error: 'Missing required fields' });
    const { conversation, message } = sendMessage({
      conversationId,
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
  if (!user) return,;
  if (req.method === 'GET') {
    const { id } = req.query;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
    const messages = getMessages(id);
    res.status(200).json({ conversation, messages });
  } else if (req.method === 'GET') {
    const { conversationId, recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body || {};
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const { conversation, message } = sendMessage({;
      conversationId;
      senderId: user.id,;
      recipientId,;
      body,;
      linkUrl,;
      attachmentBase64,;
      attachmentName;
      context});
    res.status(200).json({ conversation, message });
  } else {;
    res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
=======


=======
      context});
    res.status(200).json({ conversation, message })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  } else {
    res && res.status(405).json({ error: "Method not allowed" });
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}

=======
    res.status (200).json ({ conversation, message });
  } else {
    res.status (405).json ({ error: "Method not allowed" });
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  }
}
  }
}
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
