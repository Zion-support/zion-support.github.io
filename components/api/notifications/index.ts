import type { NextApiRequest, NextApiResponse } from 'next';


} from '../../../utils/notifications';
function getUserId(req: NextApiRequest): string {

  const cookie = req && req.headers.cookie || '';

  const match = cookie
    .split(';')
    .map(c => c && c.trim())
    .find(c => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
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
          id: 'seed-1', user_id: userId,
          type: 'onboarding', title: 'Welcome to Zion AI Marketplace',
          body: 'Complete your profile to get personalized matches.', created_at: new Date().toISOString(),
          read_status: false,
          related_action: '/profile'};
        {
          id: 'seed-2', user_id: userId,
          type: 'system', title: 'System maintenance scheduled',
          body: 'We will be undergoing maintenance this weekend.', created_at: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
          read_status: false,
          related_action: '/status'}];
      return res.status(200).json({ notifications: fallback })
    }
    return res.status(200).json({ notifications: data as NotificationItem[] })
  } catch (e) {
return res.status(500).json({ error: 'Unexpected error' });
  }    return res.status(500).json({ error: 'Unexpected error' })

  };
}

