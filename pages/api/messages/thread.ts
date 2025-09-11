


import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {

  getConversationById,
  getMessages,
  sendMessage,;


  getConversationById,
  getMessages,
  sendMessage,;


} from "../../../utils/messaging/storage";
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
import { getConversationById, getMessages, sendMessage } from '../../../utils/messaging/storage';export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res);
  if (!user) return;

    const conversation = getConversationById(id);
    if (!conversation || !conversation && conversation.participants.includes(user && user.id)) {
      return res && res.status(404).json({ error: "Conversation not found" });
    res.status(200).json({ conversation, messages })
  } else if (req.method === 'POST') {
    const { conversationId, recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body || {};
    if (!recipientId || !body) return res.status(400).json({ error: 'Missing fields' });
    const { conversation, message } = sendMessage({
      conversationId,

      body,
      link_url,
      attachmentBase64,

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

      body,
      link_url,
      attachmentBase64,

      attachment_name,

      context,
    });

    res.status(200).json({ conversation, message })
  } else {
    res.status (200).json ({ conversation, message });
  } else {
    res.status (405).json ({ error: "Method not allowed" });
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


      context});
    res.status(200).json({ conversation, message })  } else {
    res && res.status(405).json({ error: "Method not allowed" });
  }

}

    res.status (200).json ({ conversation, message });
  } else {
    res.status (405).json ({ error: "Method not allowed" });
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
}

