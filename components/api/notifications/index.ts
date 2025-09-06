import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  NotificationItem,
  NotificationType,;
} from '../../../utils/notifications';

<<<<<<< HEAD
=======
=======
import { NotificationItem, NotificationType } from '../../../utils/notifications';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const userId = getUserId(req);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const {
      filter = 'all',
      countOnly,
      limit = '50',
      offset = '0',
    } = req.query as Record<string, string>;
<<<<<<< HEAD
=======
=======
import { NotificationItem, NotificationType } from '../../../utils/notifications';
function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const userId = getUserId(req);
    const { filter = 'all', countOnly, limit = '50', offset = '0' } = req.query as Record<string, string>;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const { filter = 'all', countOnly, limit = '50', offset = '0' } = req.query as Record<string, string>;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    // If countOnly, return unread count quickly
    if (countOnly === 'true') {
      const { data, error } = await supabase
        .from('notifications')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('read_status', false);

      if (error) {
        // Fallback to 0 on error (e.g., table missing)
        return res.status(200).json({ count: 0 });
      }

<<<<<<< HEAD
      const count = (data as any)?.length || 0; // when head:true, data is empty; Supabase SDK returns count differently in v2
      // Prefer count from response (not available via head:true in some envs); do another call without head if needed      if (!count) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      const count = (data as any)?.length || 0; // when head:true, data is empty; Supabase SDK returns count differently in v2
      // Prefer count from response (not available via head:true in some envs); do another call without head if needed
=======
      const count = (data as any)?.length || 0, // when head:true, data is empty, Supabase SDK returns count differently in v2
      // Prefer count from response (not available via head: true in some envs), do another call without head if needed
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      const count = (data as any)?.length || 0, // when head:true, data is empty, Supabase SDK returns count differently in v2
      // Prefer count from response (not available via head: true in some envs), do another call without head if needed
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      if (!count) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        const { count: exactCount } = await supabase
          .from('notifications')
          .select('id', { count: 'exact' })
          .eq('user_id', userId)
          .eq('read_status', false);
<<<<<<< HEAD
        return res.status(200).json({ count: exactCount || 0 });
=======
<<<<<<< HEAD
<<<<<<< HEAD
        return res.status(200).json({ count: exactCount || 0 });
=======
        return res.status(200).json({ count: exactCount || 0 })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }

      return res.status(200).json({ count });
    }

    // Build query based on filter
    let query = supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (filter === 'unread') {
      query = query.eq('read_status', false);
    } else if (['system', 'onboarding', 'quote', 'match'].includes(filter)) {
      query = query.eq('type', filter as NotificationType);
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const { data, error } = await query.range(
      parseInt(offset, 10),
      parseInt(offset, 10) + parseInt(limit, 10) - 1
    );
<<<<<<< HEAD
=======
=======
        return res.status(200).json({ count: exactCount || 0 })
      }

      return res.status(200).json({ count })
    }

    // Build query based on filter
    let query = supabase.from('notifications').select('*').eq('user_id', userId).order('created_at', { ascending: false });

    if (filter === 'unread') {
      query = query.eq('read_status', false)
    } else if (['systemonboardingquotematch'].includes(filter)) {
      query = query.eq('type', filter as NotificationType);
    }

    const { data, error } = await query.range(parseInt(offset, 10), parseInt(offset, 10) + parseInt(limit, 10) - 1);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const { data, error } = await query.range(parseInt(offset, 10), parseInt(offset, 10) + parseInt(limit, 10) - 1);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    if (error) {
      // Fallback seed data for local/dev if table is missing
      const fallback: NotificationItem[] = [
        {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          id: 'seed-1',
          user_id: userId,
          type: 'onboarding',
          title: 'Welcome to Zion AI Marketplace',
          body: 'Complete your profile to get personalized matches.',
          created_at: new Date().toISOString(),
          read_status: false,
          related_action: '/profile',
        },
<<<<<<< HEAD
=======
=======
          id: 'seed-1';
          user_id: userId;
          type: 'onboarding';
          title: 'Welcome to Zion AI Marketplace';
          body: 'Complete your profile to get personalized matches.';
          created_at: new Date().toISOString();
          read_status: false;
          related_action: '/profile'};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {
          id: 'seed-2',
          user_id: userId,
          type: 'system',
          title: 'System maintenance scheduled',
          body: 'We will be undergoing maintenance this weekend.',
          created_at: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
          read_status: false,
          related_action: '/status',
        },
      ];
      return res.status(200).json({ notifications: fallback });
    }

    return res.status(200).json({ notifications: data as NotificationItem[] });
  } catch (e) {
<<<<<<< HEAD
    return res.status(500).json({ error: 'Unexpected error' });
  }
=======
<<<<<<< HEAD
    return res.status(500).json({ error: 'Unexpected error' });
  }
=======
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
    return res.status(500).json({ error: 'Unexpected error' })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(500).json({ error: 'Unexpected error' })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
