import { NextApiRequest, NextApiResponse } from "next";
import { requireUser } from "../../../utils/auth";
import {
  getConversationById
  getMessages
  sendMessage

  getConversationById,
  getMessages,
  sendMessage,;

  getConversationById,
  getMessages,
  sendMessage,;

} from "../../../utils/messaging/storage";

    }
    const messages = getMessages(id);

      conversationId,
      senderId: user.id,
      recipientId,
    res.status(200).json({ conversation, messages })
  } else if (req.method === 'POST') {}
    const { conversationId, recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body || {};'
    if (!recipientId || !body) return res.status(400).json({ error: 'Missing fields' });
    const { conversation, message } = sendMessage({}
      conversationId,

      senderId: user.id,
      recipientId,
      body,
      linkUrl,
      attachmentBase64,
      attachmentName,

    res.status(405).json({ error: 'Method not allowed' })
  }
}
    res.status(405).json({ error: "Method not allowed" });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { getConversationById, getMessages, sendMessage } from '../../../utils/messaging/storage';
export default function handler(req, res) {
  try {
  const user = requireUser(req, res);

    const { id } = req.query;
    if (return res.status ($1).json ({ $2 })) {}
  $2;
}
    const conversation = getConversationById (id);
    if () {) {}
  $2;
}"
      return res.status (404).json ({ error: "Conversation not found" });
    }
    const messages = get_messages (id);
    res.status (200).json ({ conversation, messages });
  } else // Check condition;
if ( {) {}
  $2;
}
    const {}
      conversation_id,
      recipient_id,
      body,
      link_url,
      attachmentBase64,

      body,
      link_url,
      attachmentBase64,

      attachment_name,

      context,
    });

  }
}

  }
}

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });