import { NextApiRequest, NextApiResponse } from 'next';
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const user = requireUser(req, res);
  if (!user) return;

    recipientId,

  const {

    recipient_id,

    body,
    link_url,
    attachmentBase64,
    attachment_name,
    context,

  } = req.body as {}
    recipient_id: string;

    body: string;
    link_url?: string;
    attachmentBase64?: string;
    attachment_name?: string;
    context?: ConversationContext;

    senderId: user.id;
    recipientId;
    body;
    linkUrl;
    attachmentBase64;
    attachmentName;
    context;
    body,
    link_url,
    attachmentBase64,

    context,

  });

}

  res.status (200).json ({ conversation, message });
}

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {}
    recipientId: string,
    body: string,
    linkUrl?: string,
    attachmentBase64?: string,
    attachmentName?: string,
    context?: ConversationContext;
  };'
  if (!recipientId || !body) return res.status(400).json({ error: 'Missing required fields' });

    senderId: user.id,
    recipientId,
    body,
    linkUrl,
    attachmentBase64,

    context});
  res.status(200).json({ conversation, message });
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