<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next',;
import { requireUser } from '../../../utils/auth',;
import { sendMessage } from '../../../utils/messaging/storage',;
import { ConversationContext } from '../../../utils/messaging/types',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const user = requireUser(req, res),;
  if (!user) return,;
  if (req.method !== 'POST') return res.status(405).json({ error:'Method not allowed' }),;
;
  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {;
    recipientId:string,;
    body:string,;
    linkUrl?:string,;
    attachmentBase64?:string,;
    attachmentName?:string,;
    context?:ConversationContext;
  },;
;
  if (!recipientId || !body) return res.status(400).json({ error:'Missing fields' }),;
;
  const { conversation, message } = sendMessage({;
    senderId:user.id,;
    recipientId,;
    body,;
    linkUrl,;
    attachmentBase64,;
    attachmentName,;
    context}),;
;
  res.status(200).json({ conversation, message }),;
}
=======
import { NextApiRequest, NextApiResponse } from 'next',
import { requireUser } from '../../../utils/auth',
import { sendMessage } from '../../../utils/messaging/storage',
import { ConversationContext } from '../../../utils/messaging/types',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = requireUser(req, res),
  if (!user) return,
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),

  const { recipientId, body, linkUrl, attachmentBase64, attachmentName, context } = req.body as {
    recipientId: string,
    body: string,
    linkUrl?: string,
    attachmentBase64?: string,
    attachmentName?: string,
    context?: ConversationContext
  },

  if (!recipientId || !body) return res.status(400).json({ error: 'Missing fields' }),

  const { conversation, message } = sendMessage({
    senderId: user.id,
    recipientId,
    body,
    linkUrl,
    attachmentBase64,
    attachmentName,
    context}),

  res.status(200).json({ conversation, message })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
