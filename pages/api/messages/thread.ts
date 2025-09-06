
import { NextApiRequest, NextApiResponse } from '[^']*';
import { requireUser } from '[^']*';
import { getConversationById, getMessages, sendMessage } from '[^']*';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
    res.status(200).json({ conversation, message })

  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
