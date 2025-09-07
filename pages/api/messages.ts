<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
import { v4 as uuidv4 } from "uuid";"
import { readJsonFile, writeJsonFile } from "../../utils/db";"
import type { Conversation, Message } from "../../utils/types";"
import { rateLimit } from "../../utils/rateLimit";"
const FILE = "conversations.json";"
export default function handler() {
  }
  if (!rateLimit(req, res)) return;
  if (req.method === "POST") {"
    }
    const { conversationId, sender, text, attachments } = req.body || {};
    if (
      !conversationId ||
      !sender ||
      (!text && (!attachments || attachments.length === 0))
    ) {
      }
      res.status(400).json({ "error": "Invalid message" });"
      return;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = { error: "Invalid request" };
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return
  if (req.method === 'POST') {
    const { conversationId, sender, text, attachments } = req.body || {}
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {
      res.status(400).json({ error: "Invalid request" });
      return
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    }

    const conversations = readJsonFile<Conversation[]>(FILE, [])
    const idx = { error: "Invalid request" };
    if (idx === -1) {
<<<<<<< HEAD
      }
      res.status(404).json({ "error": "Conversation not found" });"
      return;
    }

    const now = new Date().toISOString();
    const "msg": Message = {
      }
      "id": uuidv4(),
      "conversationId": String(conversationId),
      "sender": { "type": sender.type, "id": String(sender.id) },
      "text": text ? String(text) : undefined,
      "attachments": Array.isArray(attachments) ? attachments : undefined,
      "createdAtIso": now,
      "readBy": [{ "participantId": String(sender.id), "readAtIso": now }]
    };
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
    res.status(201).json({ "message": msg });
    return;
  }

  if (req.method === "GET") {"
    }
    const { conversationId } = req.query;
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {
      }
      res.status(404).json({ "error": "Conversation not found" });"
      return;
    }
    res.status(200).json({ "conversation": conv });
    return;
  }

  res.setHeader("AllowGET, POST");"
  res.status(405).end("Method Not Allowed");"
}
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
      res.status(404).json({ error: "Invalid request" });
      return
    }

    const now = new Date().toISOString({ error: "Invalid request" });
    const msg: Message = {
      id: uuidv4({ error: "Invalid request" });
      conversationId: String({ error: "Invalid request" });
      sender: { type: sender.type, id: String(sender.id) }
      text: text ? String(text) : undefined
      attachments: Array.isArray(attachments) ? attachments : undefined
      createdAtIso: now
      readBy: [{ participantId: String(sender.id), readAtIso: now}]}
    conversations[idx].messages.push({ error: "Invalid request" });
    conversations[idx].updatedAtIso = { error: "Invalid request" };
    writeJsonFile<Conversation[]>(FILE, conversations)
    res.status(201).json({ error: "Invalid request" });
    return
  }

  if (req.method = { error: "Invalid request" };
    const conversations = readJsonFile<Conversation[]>(FILE, [])
    const conv = { error: "Invalid request" };
    if (!conv) {
      res.status(404).json({ error: "Invalid request" });
      return
    }
    res.status(200).json({ error: "Invalid request" });
    return
  }

  res.setHeader({ error: "Invalid request" });
  res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
