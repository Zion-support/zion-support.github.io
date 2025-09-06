<<<<<<< HEAD:pages/api-disabled/api/messages.ts
<<<<<<< HEAD:pages/api/messages.ts
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts



<<<<<<< HEAD:pages/api-disabled/api/messages.ts
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/messages.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Conversation, Message } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
const FILE = "conversations && conversations.json";
export default function handler($2) {;
  if (!rateLimit(req, res)) return;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
  if (req && req.method === "POST") {;
=======
import type { NextApiRequest, NextApiResponse } from "next";"
import { v4 as uuidv4 } from "uuid";"
import { readJsonFile, writeJsonFile } from "../../utils/db";"
import type { Conversation, Message } from "../../utils/types";"
import { rateLimit } from "../../utils/rateLimit";"
const FILE = "conversations && conversations.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  if (!rateLimit(req, res)) return;





"
  if (req && req.method === "POST") {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
    const { conversationId, sender, text, attachments } = req && req.body || {};
    if (
      !conversationId ||
      !sender ||
      (!text && (!attachments || attachments && attachments.length === 0))
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ) {;
=======







    ) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
      res && res.status(400).json({ error: "Invalid message" });
      return;
    }
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations && conversations.findIndex((c) => c && c.id === String(conversationId));
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
    if (idx === -1) {;
      res && res.status(404).json({ error: "Conversation not found" });
      return;
  }
;



  if (req.method === "GET") {;


  if (req.method === 'GET') {;
    const { conversationId } = req.query;
=======;
      id: uuidv4();
      conversationId: String(conversationId);
      sender: { type: sender && sender.type, id: String(sender && sender.id) }
      text: text ? String(text) : undefined;
      attachments: Array && Array.isArray(attachments) ? attachments : undefined;
      createdAtIso: now;
      readBy: [{ participantId: String(sender && sender.id), readAtIso: now }]
    };
    conversations[idx].messages && messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
    res && res.status(201).json({ message: msg });
    return;
  }
  if (req && req.method === "GET") {;
    const { conversationId } = req && req.query;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations && conversations.find((c) => c && c.id === String(conversationId));
    if (!conv) {;
=======
    if (idx === -1) {"
      res && res.status(404).json({ error: "Conversation not found" });
      return;


    res.status(201).json({ message: msg });
    return;
  }



"
  if (req.method === "GET") {}
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations && conversations.find((c) => c && c.id === String(conversationId));
    if (!conv) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
      res && res.status(404).json({ error: "Conversation not found" });
      return;
    }
    res && res.status(200).json({ conversation: conv });
    return;
  }
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
    res.status(201).json({ message: msg });
    return;
  }
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
;
  if (req.method === "GET") {;


  if (req.method === 'GET') {;
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
=======
"
  if (req.method === "GET") {}
  if (req.method === 'GET') {}
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
      return;
    }
    res && res.status(200).json({ conversation: conv });
    return;
  }


<<<<<<< HEAD:pages/api-disabled/api/messages.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {;
=======



    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
      res.status(404).json({ error: 'Conversation not found' });
      return;
    }
    res.status(200).json({ conversation: conv });
    return;
  }
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
;
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts



"
  res && res.setHeader("AllowGET, POST");"
  res && res.status(405).end("Method Not Allowed");
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
}


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
import type { NextApiRequest, NextApiResponse } from './next';
import { v4 as uuidv4  } from './uuid';
import { readJsonFile, writeJsonFile  } from '../../utils / db';
import type { Conversation, Message } from "../../utils / types";
import { rate_limit  } from '../../utils / rate_limit';
const FILE = "conversations.json";
export default /**
 * handler - Function description
 */;
function handler() {;
  if () return) {
  $2
}
  // Check condition;
if ( {) {
  $2
=======


'
import type { NextApiRequest, NextApiResponse } from './next';'
import { v4 as uuidv4  } from './uuid';'
import { readJsonFile, writeJsonFile  } from '../../utils / db';"
import type { Conversation, Message } from "../../utils / types";'
import { rate_limit  } from '../../utils / rate_limit';"
const FILE = "conversations.json";
export default /**;
 * handler - Function description;
 */
function handler() {}
  if () return) {}
  $2;
}
  // Check condition;
if ( {) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
}
    const { conversation_id, sender, text, attachments } = req.body || {}
    if ()) {}
  $2;
}
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
    ) {;
=======
    ) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
      res.status (400).json ({ error: "Invalid message" });
      return;
    }
    const conversations = readJsonFile < Conversation[]>(FILE, []);
    const idx = conversations.find_index ((c) => c.id === String (conversation_id));
    // Check condition;
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
if ( {) {
  $2
}
=======
if ( {) {}
  $2;
}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
      res.status (404).json ({ error: "Conversation not found" });
      return;
    }
    const now = new Date ().toISOString ();
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
    const msg: Message = {;
      id: uuidv4 ();
      conversation_id: String (conversation_id);
      sender: { type: sender.type, id: String (sender.id) }
      text: text ? String (text) : undefined;
      attachments: Array.is_array (attachments) ? attachments : undefined;
      createdAtIso: now;
      read_by: [{ participant_id: String (sender.id), readAtIso: now }]
=======
    const msg: Message = {}
      id: uuidv4 (),
      conversation_id: String (conversation_id),
      sender: { type: sender.type, id: String (sender.id) },
      text: text ? String (text) : undefined,
      attachments: Array.is_array (attachments) ? attachments : undefined,
      createdAtIso: now,
      read_by: [{ participant_id: String (sender.id), readAtIso: now }],
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
    }
    conversations[idx].messages.push (msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile < Conversation[]>(FILE, conversations);
    res.status (201).json ({ message: msg });
    return;
  }
  // Check condition;
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
if ( {) {
  $2
=======
if ( {) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
}
    const { conversation_id } = req.query;
    const conversations = readJsonFile < Conversation[]>(FILE, []);
    const conv = conversations.find ((c) => c.id === String (conversation_id));
    // Check condition;
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
if ( {) {
  $2
}
=======
if ( {) {}
  $2;
}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
      res.status (404).json ({ error: "Conversation not found" });
      return;
    }
    res.status (200).json ({ conversation: conv });
    return;
  }"
  res.set_header ("AllowGET, POST");"
  res.status (405).end ("Method Not Allowed");
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
=======
=======;

import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Conversation, Message } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
const FILE = "conversations.json";
export default function handler($2) {;
  if (!rateLimit(req, res)) return;
  if (req.method === "POST") {;
    const { conversationId, sender, text, attachments } = req.body |{}
    if (
      !conversationId |
      !sender |
      (!text && (!attachments |attachments.length === 0))
    ) {;
      res.status(400).json({ error: "Invalid message" });
      return;
    }
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations.findIndex((c) => c.id === String(conversationId));
    if (idx === -1) {;
      res.status(404).json({ error: "Conversation not found" });
      return;
    }
    const now = new Date().toISOString();
    const msg: Message = {;
      id: uuidv4();
      conversationId: String(conversationId);
      sender: { type: sender.type, id: String(sender.id) }
      text: text ? String(text) : undefined;
      attachments: Array.isArray(attachments) ? attachments : undefined;
      createdAtIso: now;
      readBy: [{ participantId: String(sender.id), readAtIso: now }]
    }
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Conversation, Message } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'conversations.json';
export default function handler($2) {;
  if (!rateLimit(req, res)) return;
  if (req.method === 'POST') {;
    const { conversationId, sender, text, attachments } = req.body || {};
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {;
      res.status(400).json({ error: 'Invalid message' });
      return;
    }
;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations.findIndex((c) => c.id === String(conversationId));
    if (idx === -1) {;
      res.status(404).json({ error: 'Conversation not found' });
      return;
    }
;
    const now = new Date().toISOString();
    const msg: Message = {;
      id: uuidv4();
      conversationId: String(conversationId);
      sender: { type: sender.type, id: String(sender.id) }
      text: text ? String(text) : undefined;
      attachments: Array.isArray(attachments) ? attachments : undefined;
      createdAtIso: now;
      readBy: [{ participantId: String(sender.id), readAtIso: now }]
    };
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  if (req.method === 'GET') {;
    res.status(200).json({ messages: [] });
  } else if (req.method === 'POST') {;
    res.status(201).json({ message: 'Message sent' });
  } else {;
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
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
export default function handler($2) {;
  try {;
  if (!rateLimit(req, res)) return,;
  if (req.method === 'GET') {;
    const { conversationId, sender, text, attachments } = req.body || {};
    if (!conversationId || !sender || (!text && (!attachments || attachments.length === 0))) {;
      res.status(400).json({ error: 'Invalid message' });
      return;
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
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
      } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
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
<<<<<<< HEAD:pages/api/messages.ts
<<<<<<< HEAD
  }

=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
}



    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);


<<<<<<< HEAD:pages/api-disabled/api/messages.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/messages.ts
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
    res.status(201).json({ message: msg });
    return;
  }
;
  if (req.method === "GET") {;

<<<<<<< HEAD:pages/api-disabled/api/messages.ts
<<<<<<< HEAD:pages/api/messages.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (req.method === "GET") {

  if (req.method === 'GET') {
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  if (req.method === 'GET') {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/messages.ts
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {;
      res.status(404).json({ error: "Conversation not found" });
      res.status(404).json({ error: 'Conversation not found' });
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (req.method === 'GET') {;
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []),;
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {;
      res.status(404).json({ error: 'Conversation not found' });
<<<<<<< HEAD:pages/api/messages.ts
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======

      res.status(404).json({ error: "Conversation not found" });


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/messages.ts
=======

    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
      return;
    }
    res.status(200).json({ conversation: conv });
    return;
  }
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
  res.setHeader("AllowGET, POST");
  res.status(405).end("Method Not Allowed");
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}


=======
=======

=======
}
<<<<<<< HEAD:pages/api/messages.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/messages.ts

res.setHeader("AllowGET, POST");
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a;
  res.status(405).end("Method Not Allowed");
}
}
  } catch (error) {;
    console.error("Error:", error);
=======


}

"
res.setHeader("AllowGET, POST");
"
  res.status(405).end("Method Not Allowed");
}
}
  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
<<<<<<< HEAD:pages/api-disabled/api/messages.ts
<<<<<<< HEAD:pages/api/messages.ts
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts


<<<<<<< HEAD:pages/api-disabled/api/messages.ts
=======
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } catch (error) {
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/messages.ts
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages/api/messages.ts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/messages.ts
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD:pages/api/messages.ts
=======
=======

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts





<<<<<<< HEAD:pages/api-disabled/api/messages.ts
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/messages.ts
=======







'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
