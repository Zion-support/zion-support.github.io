<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'conversations.json';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Conversation, Message } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
const FILE = "conversations && conversations.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;
<<<<<<< HEAD
<<<<<<< HEAD
  if (req.method === "POST") {
    const { conversationId, sender, text, attachments } = req.body |{}
    if (
      !conversationId |
      !sender |
      (!text && (!attachments |attachments.length === 0))
=======
  if (req && req.method === "POST") {
    const { conversationId, sender, text, attachments } = req && req.body || {};
    if (
      !conversationId ||
      !sender ||
      (!text && (!attachments || attachments && attachments.length === 0))
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ) {
      res && res.status(400).json({ error: "Invalid message" });
      return;
    }
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations && conversations.findIndex((c) => c && c.id === String(conversationId));
    if (idx === -1) {
      res && res.status(404).json({ error: "Conversation not found" });
      return;
<<<<<<< HEAD
=======
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
    conversations[idx].messages.push(msg);
=======
      id: uuidv4(),
      conversationId: String(conversationId),
      sender: { type: sender && sender.type, id: String(sender && sender.id) },
      text: text ? String(text) : undefined,
      attachments: Array && Array.isArray(attachments) ? attachments : undefined,
      createdAtIso: now,
      readBy: [{ participantId: String(sender && sender.id), readAtIso: now }],
    };
    conversations[idx].messages && messages.push(msg);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
    res && res.status(201).json({ message: msg });
    return;
  }
<<<<<<< HEAD
  if (req.method === "GET") {
    const { conversationId } = req.query;
=======

  if (req && req.method === "GET") {
    const { conversationId } = req && req.query;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations && conversations.find((c) => c && c.id === String(conversationId));
    if (!conv) {
      res && res.status(404).json({ error: "Conversation not found" });
      return;
    }
    res && res.status(200).json({ conversation: conv });
    return;
  }
<<<<<<< HEAD
  res.setHeader("AllowGET, POST");
  res.status(405).end("Method Not Allowed");
=======
=======

  if (req.method === 'POST') {
    const { conversationId, sender, text, attachments } = req.body || {};
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {
      res.status(400).json({ error: 'Invalid message' });
      return
    }

    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations.findIndex((c) => c.id === String(conversationId));
    if (idx === -1) {
      res.status(404).json({ error: 'Conversation not found' });
      return
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }

    const now = new Date().toISOString();
    const msg: Message = {
<<<<<<< HEAD
      id: uuidv4(),
      conversationId: String(conversationId),
      sender: { type: sender && sender.type, id: String(sender && sender.id) },
      text: text ? String(text) : undefined,
      attachments: Array && Array.isArray(attachments) ? attachments : undefined,
      createdAtIso: now,
      readBy: [{ participantId: String(sender && sender.id), readAtIso: now }],
    };
    conversations[idx].messages && messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
    res && res.status(201).json({ message: msg });
    return;
=======
      id: uuidv4(), conversationId: String(conversationId),
      sender: {
       type: sender.type, id: String(sender.id) 
    },
    text: text ? String(text) : undefined, attachments: Array.isArray(attachments) ? attachments : undefined,
      createdAtIso: now,
      readBy: [{ participantId: String(sender.id), readAtIso: now }]};

    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);

    res.status(201).json({ message: msg });
    return
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }

  if (req.method === 'GET') {
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
<<<<<<< HEAD
    const conv = conversations && conversations.find((c) => c && c.id === String(conversationId));
    if (!conv) {
      res && res.status(404).json({ error: "Conversation not found" });
      return;
    }
    res && res.status(200).json({ conversation: conv });
    return;
  }

  res && res.setHeader("AllowGET, POST");
  res && res.status(405).end("Method Not Allowed");
=======
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {
      res.status(404).json({ error: 'Conversation not found' });
      return
    }
    res.status(200).json({ conversation: conv });
    return
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  res && res.setHeader("AllowGET, POST");
  res && res.status(405).end("Method Not Allowed");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';
import { v4 as uuidv4  } from './uuid';
import { readJsonFile, writeJsonFile  } from '../../utils / db';
import type { Conversation, Message } from "../../utils / types";
import { rate_limit  } from '../../utils / rate_limit';
const FILE = "conversations.json";
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    const { conversation_id, sender, text, attachments } = req.body || {}
    if ()) {
  $2
}
    ) {
      res.status (400).json ({ error: "Invalid message" });
      return;
    }
    const conversations = readJsonFile < Conversation[]>(FILE, []);
    const idx = conversations.find_index ((c) => c.id === String (conversation_id));
    // Check condition
if ( {) {
  $2
}
      res.status (404).json ({ error: "Conversation not found" });
      return;
    }
    const now = new Date ().toISOString ();
    const msg: Message = {
      id: uuidv4 (),
      conversation_id: String (conversation_id),
      sender: { type: sender.type, id: String (sender.id) },
      text: text ? String (text) : undefined,
      attachments: Array.is_array (attachments) ? attachments : undefined,
      createdAtIso: now,
      read_by: [{ participant_id: String (sender.id), readAtIso: now }],
    }
    conversations[idx].messages.push (msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile < Conversation[]>(FILE, conversations);
    res.status (201).json ({ message: msg });
    return;
  }
  // Check condition
if ( {) {
  $2
}
    const { conversation_id } = req.query;
    const conversations = readJsonFile < Conversation[]>(FILE, []);
    const conv = conversations.find ((c) => c.id === String (conversation_id));
    // Check condition
if ( {) {
  $2
}
      res.status (404).json ({ error: "Conversation not found" });
      return;
    }
    res.status (200).json ({ conversation: conv });
    return;
  }
  res.set_header ("AllowGET, POST");
  res.status (405).end ("Method Not Allowed");
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
