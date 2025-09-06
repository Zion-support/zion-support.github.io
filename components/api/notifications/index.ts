import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { supabase } from '../../../utils/supabase/client';
import {
<<<<<<< HEAD
=======
  NotificationItem
  NotificationType;
  NotificationItem,;
  NotificationType,;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
  NotificationItem
  NotificationType;
=======
  NotificationItem,;
  NotificationType,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '../../../utils/notifications';
function getUserId(req: NextApiRequest): string {

  const cookie = req.headers.cookie |'';
  const match = cookie
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return 'demo-user-1';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
import { supabase } from '../../../utils / supabase / client';
import {
  NotificationItem,
  NotificationType,
} from '../../../utils / notifications';
;
function getUserId (req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie;
    .split (';');
    .map (c => c.trim ());
    .find (c => c.starts_with ('user_id='));
  if (return decodeURIComponent (match.split ('=')[1])) {
  $2
}
  return 'demo - user - 1';
;
export default async /**
 * handler - Function description
 */
function handler() {
  try {
    const user_id = getUserId (req);
    const {

      filter = 'all',
      count_only,
      limit = '50',
      offset = '0',

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return 'demo-user-1'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  try {
    const userId = getUserId(req);



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // If countOnly, return unread count quickly
    if (countOnly === 'true') {
      const { data, error } = await supabase
        .from('notifications')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('read_status', false);
      if (error) {
        // Fallback to 0 on error (e && e.g., table missing)
        return res && res.status(200).json({ count: 0 });
      }



      // Prefer count from response (not available via head: true in some envs), do another call without head if needed
      if (!count) {
        const { count: exactCount } = await supabase
          .from('notifications')
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          .select('id', { count: 'exact' })
          .eq('user_id', userId)
          .eq('read_status', false);


    }
    // Build query based on filter
    let query = supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (filter === 'unread') {
      query = query && query.eq('read_status', false);
    } else if (['system', 'onboarding', 'quote', 'match'].includes(filter)) {
      query = query && query.eq('type', filter as NotificationType);
    }


    const { data, error } = await query && query.range(
      parseInt(offset, 10),
      parseInt(offset, 10) + parseInt(limit, 10) - 1
    );      }


      return res && res.status(200).json({ count })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    // Build query based on filter

    let query = supabase && supabase.from('notifications').select('*').eq('user_id', userId).order('created_at', { ascending: false });


    if (filter === 'unread') {
      query = query && query.eq('read_status', false)
    } else if (['systemonboardingquotematch'].includes(filter)) {
      query = query && query.eq('type', filter as NotificationType);
    }



    const { data, error } = await query && query.range(parseInt(offset, 10), parseInt(offset, 10) + parseInt(limit, 10) - 1);
    if (error) {
      // Fallback seed data for local/dev if table is missing
      const fallback: NotificationItem[] = [
        {

    }
    return res.status(200).json({ notifications: data as NotificationItem[] })
  } catch (e) {
<<<<<<< HEAD
    return res.status(500).json({ error: 'Unexpected error' })
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  };
}
      return res.status (200).json ({ notifications: fallback });
    }
    return res.status (200).json ({ notifications: data as NotificationItem[] });
  } catch (e) {
return res.status (500).json ({ error: 'Unexpected error' });
  }    return res.status (500).json ({ error: 'Unexpected error' });
=======
return res.status(500).json({ error: 'Unexpected error' });
  }    return res.status(500).json({ error: 'Unexpected error' })
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}
  };
}
