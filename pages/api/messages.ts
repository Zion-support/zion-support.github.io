<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Conversation, Message } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
const FILE = "conversations && conversations.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;
  if (req.method === "POST") {
    const { conversationId, sender, text, attachments } = req.body |{}
    if (
      !conversationId |
      !sender |
      (!text && (!attachments |attachments.length === 0))
    ) {
      res && res.status(400).json({ error: "Invalid message" });
      return;
    }
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations && conversations.findIndex((c) => c && c.id === String(conversationId));
    if (idx === -1) {
      res && res.status(404).json({ error: "Conversation not found" });
      return;
      id: uuidv4()
      conversationId: String(conversationId)
      sender: { type: sender.type, id: String(sender.id) }
      text: text ? String(text) : undefined
      attachments: Array.isArray(attachments) ? attachments : undefined
      createdAtIso: now
      readBy: [{ participantId: String(sender.id), readAtIso: now }]
    }
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
    res && res.status(201).json({ message: msg });
    return;
  }
  if (req.method === "GET") {
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations && conversations.find((c) => c && c.id === String(conversationId));
    if (!conv) {
      res && res.status(404).json({ error: "Conversation not found" });
      return;
    }
    res && res.status(200).json({ conversation: conv });
    return;
  }
  res.setHeader("AllowGET, POST");
  res.status(405).end("Method Not Allowed");
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    res.status(201).json({ message: msg });
    return
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
  if (req.method === 'GET') {
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations && conversations.find((c) => c && c.id === String(conversationId));
    if (!conv) {
      res && res.status(404).json({ error: "Conversation not found" });
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method === "GET") {
=======


  if (req.method === 'GET') {
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {
<<<<<<< HEAD
      res.status(404).json({ error: "Conversation not found" });
=======
<<<<<<< HEAD
      res.status(404).json({ error: 'Conversation not found' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      return;
    }
    res && res.status(200).json({ conversation: conv });
    return;
  }
<<<<<<< HEAD

  res && res.setHeader("AllowGET, POST");
  res && res.status(405).end("Method Not Allowed");

  res && res.setHeader("AllowGET, POST");
  res && res.status(405).end("Method Not Allowed");
=======
<<<<<<< HEAD
<<<<<<< HEAD
  res.setHeader("AllowGET, POST");
  res.status(405).end("Method Not Allowed");
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======

res.setHeader("AllowGET, POST");
  res.status(405).end("Method Not Allowed");
}
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
