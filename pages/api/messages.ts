import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (!rateLimit(req, res)) return;
  if (req.method === 'POST') {
    const { conversationId, sender, text, attachments } = req.body || {};
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {
      res.status(400).json({,
    error: 'Invalid message' });
      return
    }

    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations.findIndex((c) => c.id === String(conversationId));
    if (idx === -1) {
      res.status(404).json({,
    error: 'Conversation not found' });
      return
    }

    const now = new Date().toISOString();
    const,
    msg: Message = {,
    id: uuidv4();,
    conversationId: String(conversationId),
      s,
    ender: {,
    type: sender.type, i,
    d: String(sender.id) },
      t,
    ext: text ? String(text) : undefined,
      a,
    ttachments: Array.isArray(attachments) ? attachments : undefined,
      c,
    reatedAtIso: now,
      r,
    eadBy: [{,
    participantId: String(sender.id), r,
    eadAtIso: now }]},
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
    res.status(201).json({,
    message: msg });
    return
  }

  if (req.method === 'GET') {
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {
      res.status(404).json({,
    error: 'Conversation not found' });
      return
    }
    res.status(200).json({,
    conversation: conv });
    return
  }
}