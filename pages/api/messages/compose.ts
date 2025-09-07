import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { requireUser } from '../../../utils/auth';
import { sendMessage } from '../../../utils/messaging/storage';
import { ConversationContext } from '../../../utils/messaging/types';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser($2);
  if (!user) return,
  if (req.method !== 'POST') return res.status(405).json($2);
  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {
    recipientId: string,
    body: string,
    linkUrl?: string,
    attachmentBase64?: string,
    attachmentName?: string,
    context?: ConversationContext
  },

  if (!recipientId || !body) return res.status(400).json($2);
  const { conversation, message } = sendMessage($2);
  res.status(200).json({ conversation, message })
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}