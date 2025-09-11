

=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Conversation, Message } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
const FILE = "conversations && conversations.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
    return  }




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
      readBy: [{ participantId: String(sender.id), readAtIso: now }]};
    conversations[idx].messages.push(msg);
    conversations[idx].updatedAtIso = now;
    writeJsonFile<Conversation[]>(FILE, conversations);
=======
    res.status(201).json({ message: msg });
    return
  }



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req.method === "GET") {


  if (req.method === 'GET') {
    const { conversationId } = req.query;
    const conversations = readJsonFile<Conversation[]>(FILE, []);





=======    const conv = conversations.find((c) => c.id === String(conversationId));
    if (!conv) {
      res.status(404).json({ error: 'Conversation not found' });
      return
    }
    res.status(200).json({ conversation: conv });
    return
  }

  res && res.setHeader("AllowGET, POST");
  res && res.status(405).end("Method Not Allowed");
=======
}
