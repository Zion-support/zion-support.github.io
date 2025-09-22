:pages/api-disabled/api/messages.ts
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

:pages/api-disabled/api/messages.ts
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
:pages/api-disabled/api/messages.ts
    ) {;
=======

    ) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
      res && res.status(400).json({ error: "Invalid message" });
      return;
    }
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const idx = conversations && conversations.findIndex((c) => c && c.id === String(conversationId));
:pages/api-disabled/api/messages.ts
    if (idx === -1) {;
      res && res.status(404).json({ error: "Conversation not found" });
      return;
  }
;

  if (req.method === "GET") {;

  if (req.method === 'GET') {;
    const { conversationId } = req.query;
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
:pages/api-disabled/api/messages.ts
    res.status(201).json({ message: msg });
    return;
  }
:pages/api-disabled/api/messages.ts
;
  if (req.method === "GET") {;

  if (req.method === 'GET') {;
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
      return;
    }
    res && res.status(200).json({ conversation: conv });
    return;
  }

:pages/api-disabled/api/messages.ts
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
:pages/api-disabled/api/messages.ts
;

"
  res && res.setHeader("AllowGET, POST");"
  res && res.status(405).end("Method Not Allowed");
:pages/api-disabled/api/messages.ts
}
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
:pages/api-disabled/api/messages.ts
    ) {;
      res.status (400).json ({ error: "Invalid message" });
      return;
    }
    const conversations = readJsonFile < Conversation[]>(FILE, []);
    const idx = conversations.find_index ((c) => c.id === String (conversation_id));
    // Check condition;
:pages/api-disabled/api/messages.ts
if ( {) {
  $2
}
      res.status (404).json ({ error: "Conversation not found" });
      return;
    }
    const now = new Date ().toISOString ();
:pages/api-disabled/api/messages.ts
    const msg: Message = {;
      id: uuidv4 ();
      conversation_id: String (conversation_id);
      sender: { type: sender.type, id: String (sender.id) }
      text: text ? String (text) : undefined;
      attachments: Array.is_array (attachments) ? attachments : undefined;
      createdAtIso: now;
      read_by: [{ participant_id: String (sender.id), readAtIso: now }]
    }
    conversations[idx].messages.push (msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile < Conversation[]>(FILE, conversations);
    res.status (201).json ({ message: msg });
    return;
  }
  // Check condition;
:pages/api-disabled/api/messages.ts
if ( {) {
  $2
}
    const { conversation_id } = req.query;
    const conversations = readJsonFile < Conversation[]>(FILE, []);
    const conv = conversations.find ((c) => c.id === String (conversation_id));
    // Check condition;
:pages/api-disabled/api/messages.ts
if ( {) {
  $2
}
      res.status (404).json ({ error: "Conversation not found" });
      return;
    }
    res.status (200).json ({ conversation: conv });
    return;
  }"
  res.set_header ("AllowGET, POST");"
  res.status (405).end ("Method Not Allowed");
:pages/api-disabled/api/messages.ts
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
}

    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);

:pages/api-disabled/api/messages.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
    res.status(201).json({ message: msg });
    return;
  }
;
  if (req.method === "GET") {;

:pages/api-disabled/api/messages.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (req.method === "GET") {

  if (req.method === 'GET') {
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
:pages/api/messages.ts
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
:pages/api-disabled/api/messages.ts
  res.setHeader("AllowGET, POST");
  res.status(405).end("Method Not Allowed");
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}

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
:pages/api-disabled/api/messages.ts
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
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
:pages/api/messages.ts
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
:pages/api/messages.ts

:pages/api-disabled/api/messages.ts
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/messages.ts
