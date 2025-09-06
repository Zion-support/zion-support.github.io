import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { supabase } from '../../../utils/supabase/client';
import {
  NotificationItem
  NotificationType;
  NotificationItem,;
  NotificationType,;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from '../../../utils/notifications';
function getUserId(req: NextApiRequest): string {

  const cookie = req && req.headers.cookie || '';

  const match = cookie
    .split(';')
    .map(c => c && c.trim())
    .find(c => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
} from '../../../utils/notifications';
function getUserId(req: NextApiRequest): string {

  const cookie = req.headers.cookie |'';
  const match = cookie
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return 'demo-user-1';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD

  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  return 'demo-user-1'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const userId = getUserId(req);



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // If countOnly, return unread count quickly
    if (countOnly === 'true') {
      const { data, error } = await supabase
        .from('notifications')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('read_status', false);
      if (error) {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          .select('id', { count: 'exact' })
          .eq('user_id', userId)
          .eq('read_status', false);


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
    if (filter === 'unread') {
      query = query && query.eq('read_status', false)
    } else if (['systemonboardingquotematch'].includes(filter)) {
      query = query && query.eq('type', filter as NotificationType);
    }
    if (error) {
      // Fallback seed data for local/dev if table is missing
      const fallback: NotificationItem[] = [
        {
<<<<<<< HEAD


          type: 'onboarding',
          title: 'Welcome to Zion AI Marketplace',
          body: 'Complete your profile to get personalized matches.',
          created_at: new Date ().toISOString (),
          read_status: false,
          related_action: '/profile',
        },
          id: 'seed - 2',
          user_id: user_id,
          type: 'system',
          title: 'System maintenance scheduled',
          body: 'We will be undergoing maintenance this weekend.',

          created_at: new Date (Date.now () - 1000 * 60 * 60).toISOString (),

          read_status: false,
          related_action: '/status',
        },
      ];

  };
}

  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  };
}
      return res.status (200).json ({ notifications: fallback });
    }
    return res.status (200).json ({ notifications: data as NotificationItem[] });
  } catch (e) {
return res.status (500).json ({ error: 'Unexpected error' });
  }    return res.status (500).json ({ error: 'Unexpected error' });
return res.status(500).json({ error: 'Unexpected error' });
  }    return res.status(500).json({ error: 'Unexpected error' })
  }
}
  };
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
