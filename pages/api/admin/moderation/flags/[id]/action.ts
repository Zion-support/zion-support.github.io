import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth',;
import { updateFlagStatus } from '../../../../../../utils/moderationDb',;
import type { ModerationStatus } from '../../../../../../types/moderation',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../../utils/auth';
import { updateFlagStatus } from '../../../../../../utils/moderationDb';
import type { ModerationStatus } from '../../../../../../types/moderation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  return res.status(405).end('Method Not Allowed');
};

