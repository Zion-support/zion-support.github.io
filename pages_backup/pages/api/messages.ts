import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Conversation, Message } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit',
const FILE = "conversations && conversations.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (!rateLimit(req, res)) return;
  if (req && req.method === "POST") {,
    const { conversationId, sender, text, attachments } = req && req.body || {};
    if (,
      !conversationId ||,
      !sender ||,
      (!text && (!attachments || attachments && attachments.length === 0)),
    ) {,
      res && res.status(400).json({ error: "Invalid message" ,});
      return;
    }
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations && conversations.findIndex((c) => c && c.id === String(conversationId));
    if (idx === -1) {,
      res && res.status(404).json({ error: "Conversation not found" ,});
      return;
      id: uuidv4(),
      conversationId: String(conversationId),
      sender: { type: sender.type, id: String(sender.id) ,}
      text: text ? String(text) : undefined,
      attachments: Array.isArray(attachments) ? attachments : undefined,
      createdAtIso: now,
      readBy: [{ participantId: String(sender.id), readAtIso: now ,}],
    }
    const now = new Date().toISOString();
    const msg: Message = {,
      id: uuidv4(),
      conversationId: String(conversationId),
      sender: { type: sender.type, id: String(sender.id) ,}
      text: text ? String(text) : undefined,
      attachments: Array.isArray(attachments) ? attachments : undefined,
      createdAtIso: now,
      readBy: [{ participantId: String(sender.id), readAtIso: now ,}],
    }
,
const FILE = 'conversations.json';
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (!rateLimit(req, res)) return;
  if (req.method === 'POST') {,
    const { conversationId, sender, text, attachments } = req.body || {};
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {,
      res.status(400).json({ error: 'Invalid message' ,});
      return;
    }
,
    const now = new Date().toISOString();
    const msg: Message = {,
      id: uuidv4();
      conversationId: String(conversationId);
      sender: { type: sender.type, id: String(sender.id) ,};
      text: text ? String(text) : undefined;
      attachments: Array.isArray(attachments) ? attachments : undefined;
      createdAtIso: now;
      readBy: [{ participantId: String(sender.id), readAtIso: now ,}],
    };
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method === 'GET') {,
    res.status(200).json({ messages: [] ,});
  } else if (req.method === 'POST') {,
    res.status(201).json({ message: 'Message sent' ,});
  } else {,
    res.setHeader('Allow', ['GETPOST']);
    res.status(405).end('Method Not Allowed');
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
const FILE = 'conversations.json';
export default function handler(req, res) {,
  try {,
  if (!rateLimit(req, res)) return;
  if (req.method === 'GET') {,
    const { conversationId, sender, text, attachments } = req.body || {};
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {;
      res.status(400).json({ error: 'Invalid message' ,});
      return;
      } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations.findIndex((c) => c.id === String(conversationId));
    if (idx === -1) {;
      res.status(404).json({ error: 'Conversation not found' ,});
      return;
      } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
;
    const now = new Date().toISOString();
    const msg: Message = {;
      id: uuidv4();
      conversationId: String(conversationId);
      sender: { type: sender.type, id: String(sender.id) ,};
      text: text ? String(text) : undefined;
      attachments: Array.isArray(attachments) ? attachments : undefined;
      createdAtIso: now;
      readBy: [{ participantId: String(sender.id), readAtIso: now ,}]};
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
    res.status(201).json({ message: msg ,});
    return,
  }
,
  if (req.method === "GET") {,
  if (req.method === 'GET') {,
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
      return;
    }
    res && res.status(200).json({ conversation: conv ,});
    return;
  }
,
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {,
      res.status(404).json({ error: "Conversation not found" ,});
      res.status(404).json({ error: 'Conversation not found' ,});
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
;
  if (req.method === 'GET') {,
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {;
      res.status(404).json({ error: 'Conversation not found' ,});
      return;
    }
    res.status(200).json({ conversation: conv ,});
    return,
  }
,
  res && res.setHeader("AllowGET, POST");
  res && res.status(405).end("Method Not Allowed");
}
,
res.setHeader("AllowGET, POST");
  res.status(405).end("Method Not Allowed");
}
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
;
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed'),
}
,
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,