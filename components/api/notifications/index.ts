import type { NextApiRequest, NextApiResponse } from 'next';


} from '../../../utils/notifications';
function getUserId(req: NextApiRequest): string {

  const cookie = req && req.headers.cookie || '';

  const match = cookie
    .split(';')
    .map(c => c && c.trim())
    .find(c => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
=======
import { supabase } from '../../../utils/supabase/client';
import {
  NotificationItem,;
  NotificationType,;
} from '../../../utils/notifications';
function getUserId(req: NextApiRequest): string {

  const cookie = req.headers.cookie |'';
  const match = cookie
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
return res.status(500).json({ error: 'Unexpected error' });
  }    return res.status(500).json({ error: 'Unexpected error' })
