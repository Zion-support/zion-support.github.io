<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { v4 as uuidv4 } from 'uuid',
import { readJsonFile, writeJsonFile } from '../../utils/db',
import type { Conversation, Message } from '../../utils/types',
import { rateLimit } from '../../utils/rateLimit',
const FILE = 'conversations.json',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return,

  if (req.method === 'POST') {
    const { conversationId, sender, text, attachments } = req.body || {},
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {
      res.status(400).json({ error: 'Invalid message' }),
      return
    }

    const conversations = readJsonFile<Conversation[]>(FILE, []),
    const idx = conversations.findIndex((c) => c.id === String(conversationId)),
    if (idx === -1) {
      res.status(404).json({ error: 'Conversation not found' }),
      return
    }

    const now = new Date().toISOString(),
    const msg: Message = {
      id: uuidv4(),
      conversationId: String(conversationId),
      sender: { type: sender.type, id: String(sender.id) },
      text: text ? String(text) : undefined,
      attachments: Array.isArray(attachments) ? attachments : undefined,
      createdAtIso: now,
      readBy: [{ participantId: String(sender.id), readAtIso: now }]},
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_Conversation, _Message} from '../../utils/types';

const _FILE = 'conversations.json';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!rateLimit(req, _res)) return;

  if (req.method === 'POST') {
    const { conversationId, _sender, _text, _attachments} = req.body || {};
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {_res.status(400).json({ error: 'Invalid message'});
      return;
    }

    const _conversations = readJsonFile<Conversation[]>(FILE, []);
    const _idx = conversations.findIndex(_(c) => c.id === String(conversationId));
    if (idx === -1) {_res.status(404).json({ error: 'Conversation not found'});
      return;
    }

    const _now = new Date().toISOString();
    const msg: Message = {_id: uuidv4(), _conversationId: String(conversationId), _sender: { type: sender.type, _id: String(sender.id)},
      text: text ? String(text) : undefined,
      attachments: Array.isArray(attachments) ? attachments : undefined,
      createdAtIso: now,
      readBy: [{_participantId: String(sender.id), _readAtIso: now}]};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    conversations[idx].messages.push(msg),
    conversations[idx].updatedAtIso = now,
    writeJsonFile<Conversation[]>(FILE, conversations),

<<<<<<< HEAD
    res.status(201).json({ message: msg }),
    return
  }

  if (req.method === 'GET') {
    const { conversationId } = req.query,
    const conversations = readJsonFile<Conversation[]>(FILE, []),
    const conv = conversations.find((c) => c.id === String(conversationId)),
    if (!conv) {
      res.status(404).json({ error: 'Conversation not found' }),
      return
    }
    res.status(200).json({ conversation: conv }),
    return
=======
    res.status(201).json({_message: msg});
    return;
  }

  if (req.method === 'GET') {_const { conversationId} = req.query;
    const _conversations = readJsonFile<Conversation[]>(FILE, []);
    const _conv = conversations.find(_(c) => c.id === String(conversationId));
    if (!conv) {_res.status(404).json({ error: 'Conversation not found'});
      return;
    }
    res.status(200).json({_conversation: conv});
    return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed')
}