<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from '[^']*';
import { readJsonFile, writeJsonFile } from '[^']*';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '[^']*';
const FILE = null;
  res.status(405).end('Method Not Allowed')
}
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Conversation, Message } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
const FILE = "conversations.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;
  if (req.method === "POST") {
    const { conversationId, sender, text, attachments } = req.body |{}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

const FILE = 'conversations.json';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;

  if (req.method === 'POST') {
    const { conversationId, sender, text, attachments } = req.body || {};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    if (
      !conversationId |
      !sender |
      (!text && (!attachments |attachments.length === 0))
    ) {
      res.status(400).json({ error: "Invalid message" });
      return;
    }
<<<<<<< HEAD
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations.findIndex((c) => c.id === String(conversationId));
    if (idx === -1) {
      res.status(404).json({ error: "Conversation not found" });
=======

    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations.findIndex(c => c.id === String(conversationId));
    if (idx === -1) {
      res.status(404).json({ error: 'Conversation not found' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      return;
    }
    const now = new Date().toISOString();
    const msg: Message = {
<<<<<<< HEAD
      id: uuidv4()
      conversationId: String(conversationId)
      sender: { type: sender.type, id: String(sender.id) }
      text: text ? String(text) : undefined
      attachments: Array.isArray(attachments) ? attachments : undefined
      createdAtIso: now
      readBy: [{ participantId: String(sender.id), readAtIso: now }]
    }
=======
      id: uuidv4(),
      conversationId: String(conversationId),
      sender: { type: sender.type, id: String(sender.id) },
      text: text ? String(text) : undefined,
      attachments: Array.isArray(attachments) ? attachments : undefined,
      createdAtIso: now,
      readBy: [{ participantId: String(sender.id), readAtIso: now }],
    };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
    res.status(201).json({ message: msg });
    return;
  }
  if (req.method === "GET") {
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
<<<<<<< HEAD
    const conv = conversations.find((c) => c.id === String(conversationId));
=======
    const conv = conversations.find(c => c.id === String(conversationId));
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    if (!conv) {
      res.status(404).json({ error: "Conversation not found" });
      return;
    }
    res.status(200).json({ conversation: conv });
    return;
  }
<<<<<<< HEAD
  res.setHeader("AllowGET, POST");
  res.status(405).end("Method Not Allowed");
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
