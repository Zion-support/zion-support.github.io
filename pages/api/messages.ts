<<<<<<< HEAD

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
    if (
      !conversationId |
      !sender |
      (!text && (!attachments |attachments.length === 0))
    ) {
      res.status(400).json({ error: "Invalid message" });
      return;
    }
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations.findIndex((c) => c.id === String(conversationId));
    if (idx === -1) {
      res.status(404).json({ error: "Conversation not found" });
      return;
    }
    const now = new Date().toISOString();
    const msg: Message = {
      id: uuidv4()
      conversationId: String(conversationId)
      sender: { type: sender.type, id: String(sender.id) }
      text: text ? String(text) : undefined
      attachments: Array.isArray(attachments) ? attachments : undefined
      createdAtIso: now
      readBy: [{ participantId: String(sender.id), readAtIso: now }]
    }
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'conversations.json';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;
  if (req.method === 'POST') {
    const { conversationId, sender, text, attachments } = req.body || {};
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {
      res.status(400).json({ error: 'Invalid message' });
      return;
    }

    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations.findIndex((c) => c.id === String(conversationId));
    if (idx === -1) {
      res.status(404).json({ error: 'Conversation not found' });
      return;
    }

    const now = new Date().toISOString();
    const msg: Message = {
      id: uuidv4(),
      conversationId: String(conversationId),
      sender: { type: sender.type, id: String(sender.id) },
      text: text ? String(text) : undefined,
      attachments: Array.isArray(attachments) ? attachments : undefined,
      createdAtIso: now,
      readBy: [{ participantId: String(sender.id), readAtIso: now }]
    };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
    res.status(201).json({ message: msg });
    return;
  }
<<<<<<< HEAD
  if (req.method === "GET") {
=======

  if (req.method === 'GET') {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {
<<<<<<< HEAD
      res.status(404).json({ error: "Conversation not found" });
=======
      res.status(404).json({ error: 'Conversation not found' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return;
    }
    res.status(200).json({ conversation: conv });
    return;
  }
<<<<<<< HEAD
  res.setHeader("AllowGET, POST");
  res.status(405).end("Method Not Allowed");
}

=======

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
