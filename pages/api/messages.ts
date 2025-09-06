

import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Conversation, Message } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
const FILE = "conversations && conversations.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;

  if (req && req.method === "POST") {
    const { conversationId, sender, text, attachments } = req && req.body || {};
    if (
      !conversationId ||
      !sender ||
      (!text && (!attachments || attachments && attachments.length === 0))

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

    res.status(201).json({ message: msg });
    return
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }




  if (req.method === "GET") {

      return;
    }
    res && res.status(200).json({ conversation: conv });
    return;
  }


    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {
      res.status(404).json({ error: 'Conversation not found' });
      return
    }
    res.status(200).json({ conversation: conv });
    return
  }


  res && res.setHeader("AllowGET, POST");
  res && res.status(405).end("Method Not Allowed");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}



    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    res.status(201).json({ message: msg });
    return;
  }


    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);
    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {

      res.status(404).json({ error: "Conversation not found" });


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      return;
    }
    res.status(200).json({ conversation: conv });
    return;
  }




>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
