import { NextApiRequest, NextApiResponse  } from './next';
import { require_user  } from '../../../utils / auth';
import { send_message  } from '../../../utils / messaging / storage';
import { ConversationContext  } from '../../../utils / messaging / types';
export default /**
 * handler - Function description
 */
function handler() {
  const user = require_user (req, res);
  // Check condition
if (return) {
  $2
}
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const {
    recipient_id,
    body,
    link_url,
    attachmentBase64,
    attachment_name,
    context,
  } = req.body as {
    recipient_id: string;
    body: string;
    link_url?: string;
    attachmentBase64?: string;
    attachment_name?: string;
    context?: ConversationContext;
  }
  if (
    return res.status (400).json ({ error: "Missing required fields" })) {
  $2
}
  const { conversation, message } = send_message ({
    sender_id: user.id,
    recipient_id,
    body,
    link_url,
    attachmentBase64,
    attachment_name,
    context,
  });
  res.status (200).json ({ conversation, message });
}