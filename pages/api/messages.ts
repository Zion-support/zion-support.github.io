

<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Conversation, Message } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
const FILE = "conversations && conversations.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req && req.method === "POST") {
    const { conversationId, sender, text, attachments } = req && req.body || {};
    if (
      !conversationId ||
      !sender ||
      (!text && (!attachments || attachments && attachments.length === 0))
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ) {
      res && res.status(400).json({ error: "Invalid message" });
      return;
    }
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations && conversations.findIndex((c) => c && c.id === String(conversationId));
    if (idx === -1) {
      res && res.status(404).json({ error: "Conversation not found" });
      return;

    }
    const now = new Date().toISOString();
    const msg: Message = {
<<<<<<< HEAD
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
  }
  if (req && req.method === "GET") {
    const { conversationId } = req && req.query;
=======

    res.status(201).json({ message: msg });
    return
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }




  if (req.method === "GET") {
=======


  if (req.method === 'GET') {
    const { conversationId } = req.query;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
      id: uuidv4()
      conversationId: String(conversationId)
      sender: { type: sender.type, id: String(sender.id) }
      text: text ? String(text) : undefined
      attachments: Array.isArray(attachments) ? attachments : undefined
      createdAtIso: now
      readBy: [{ participantId: String(sender.id), readAtIso: now }]
    }
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'conversations.json';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req.method === 'POST') {
    const { conversationId, sender, text, attachments } = req.body || {};
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {
      res.status(400).json({ error: 'Invalid message' });
      return;
    }
<<<<<<< HEAD
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

      readBy: [{ participantId: String(sender.id), readAtIso: now }]};
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    res.status(201).json({ message: msg });
    return
  }



<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req.method === "GET") {


  if (req.method === 'GET') {
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);




<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return;
    }
    res && res.status(200).json({ conversation: conv });
    return;
  }


<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {
      res.status(404).json({ error: 'Conversation not found' });
      return
    }
    res.status(200).json({ conversation: conv });
    return
  }
<<<<<<< HEAD
<<<<<<< HEAD
  res && res.setHeader("AllowGET, POST");
  res && res.status(405).end("Method Not Allowed");
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  res && res.setHeader("AllowGET, POST");
  res && res.status(405).end("Method Not Allowed");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    res.status(201).json({ message: msg }),
    return
  }

  if (req.method === 'GET') {
    const { conversationId } = req.query
    const conversations = readJsonFile<Conversation[]>(FILE, []),
    const conv = conversations.find((c) => c.id === String(conversationId))
    if (!conv) {
      res.status(404).json({ error: 'Conversation not found' }),
      return
    }
    res.status(200).json({ conversation: conv }),
    return
  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed')

}
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Conversation, Message } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
const FILE = "conversations.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
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
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
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
  }

  if (req.method === "GET") {

  if (req.method === 'GET') {
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {
      res.status(404).json({ error: "Conversation not found" });
      res.status(404).json({ error: 'Conversation not found' });
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
    }
    res.status(200).json({ conversation: conv });
    return;
  }
  res.setHeader("AllowGET, POST");
  res.status(405).end("Method Not Allowed");
}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD
  res.setHeader("AllowGET, POST");
=======
res.setHeader("AllowGET, POST");
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======

res.setHeader("AllowGET, POST");
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  res.status(405).end("Method Not Allowed");
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
<<<<<<< HEAD
<<<<<<< HEAD
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
