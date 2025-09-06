<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ messages: [] });
  } else if (req.method === 'POST') {
    res.status(201).json({ message: 'Message sent' });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
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
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'conversations.json';
export default function handler(req, res) {
  try {
  if (!rateLimit(req, res)) return,;
  if (req.method === 'GET') {
    const { conversationId, sender, text, attachments } = req.body || {};
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {;
      res.status(400).json({ error: 'Invalid message' });
      return;
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
;
    const conversations = readJsonFile<Conversation[]>(FILE, []),;
    const idx = conversations.findIndex((c) => c.id === String(conversationId));
    if (idx === -1) {;
      res.status(404).json({ error: 'Conversation not found' });
      return;
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
;
    const now = new Date().toISOString();
    const msg: Message = {;
      id: uuidv4();
      conversationId: String(conversationId);
      sender: { type: sender.type, id: String(sender.id) },;
      text: text ? String(text) : undefined,;
      attachments: Array.isArray(attachments) ? attachments : undefined,;
      createdAtIso: now,;
      readBy: [{ participantId: String(sender.id), readAtIso: now }]},;
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations),;
    res.status(201).json({ message: msg });
    return;
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
;
  if (req.method === 'GET') {
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []),;
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {;
      res.status(404).json({ error: 'Conversation not found' });
      return;
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
    res.status(200).json({ conversation: conv });
    return;
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
;
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed');
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
=======
import { NextApiRequest, NextApiResponse } from 'next';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { conversationId, content, senderId } = req.body;
    
    if (!conversationId || !content || !senderId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Rate limiting
    await rateLimit(req, res);

    const now = new Date().toISOString();
    const msg: Message = {
      id: Date.now().toString(),
      conversationId,
      content,
      senderId,
      timestamp: now,
      read: false
    };

    // In a real implementation, save to database
    console.log('Message created:', msg);

    res.status(201).json({ message: msg });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to send message' });
>>>>>>> main
  }
}