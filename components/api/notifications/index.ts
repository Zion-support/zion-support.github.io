import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

import { supabase } from '../../../utils/supabase/client';
import { NotificationItem, NotificationType } from '../../../utils/notifications';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { supabase } from '../../../utils/supabase/client';
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
<<<<<<< HEAD

    // If countOnly, return unread count quickly
    if (countOnly === 'true') {
      const { data, error } = await supabase
        .from('notifications')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('read_status', false);

=======
function getUserId(req: NextApiRequest): string {}
'
  const cookie = req && req.headers.cookie || '';

  const match = cookie'
    .split(';')
    .map(c => c && c.trim())'
    .find(c => c && c.startsWith('user_id='));'
  if (match) return decodeURIComponent(match && match.split('=')[1]);'
  return 'demo-user-1';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
      filter = 'all',
      countOnly,
      limit = '50','
      offset = '0','
    } = req.query as Record<string, string>;
=======
} from '../../../utils/notifications';

function getUserId(req: NextApiRequest): string {

      filter = 'all',
      countOnly,
      limit = '50',}
      offset = '0',}
    } = req.query as Record<string, string    />;
>>>>>>> origin/chore/fix-lint-and-merge

    // If countOnly, return unread count quickly;
if (countOnly = == 'true') {}
     ;}
  const { data, error } = await supabase;
        .from('notifications')
        .select('id', { count: 'exact',}
  head: true,}
})
        .eq('user_id', userId)
        .eq('read_status', false);
>>>>>>> merged-prs-20250907-203621
      if (error) {
<<<<<<< HEAD
        // Fallback to 0 on error (e.g., table missing)
        return res.status(200).json({ count: 0 })
<<<<<<< HEAD
      }

      const count = (data as any)?.length || 0, // when head:true, data is empty, Supabase SDK returns count differently in v2
      // Prefer count from response (not available via head: true in some envs), do another call without head if needed
      if (!count) {
        const { count: exactCount } = await supabase
          .from('notifications')
          .select('id', { count: 'exact' })
          .eq('user_id', userId)
          .eq('read_status', false);
        return res.status(200).json({ count: exactCount || 0 })
      }

      return res.status(200).json({ count })
    }

    // Build query based on filter
    let query = supabase.from('notifications').select('*').eq('user_id', userId).order('created_at', { ascending: false });

    if (filter === 'unread') {
      query = query.eq('read_status', false)
    } else if (['systemonboardingquotematch'].includes(filter)) {
      query = query.eq('type', filter as NotificationType)
    }

    const { data, error } = await query.range(parseInt(offset, 10), parseInt(offset, 10) + parseInt(limit, 10) - 1);

    if (error) {
      // Fallback seed data for local/dev if table is missing
      const fallback: NotificationItem[] = [
=======
      }

      const count = (data as any)?.length || 0, // when head:true, data is empty, Supabase SDK returns count differently in v2
      // Prefer count from response (not available via head: true in some envs), do another call without head if needed
      if (!count) {
        const { count: exactCount } = await supabase
          .from('notifications')
          .select('id', { count: 'exact' })
          .eq('user_id', userId)
          .eq('read_status', false);
        return res.status(200).json({ count: exactCount || 0 })
=======
        // Fallback to 0 on error (e.g., table missing)}
        return res.status(200).json({ count: 0,}
});
      }

const count = (data as any)?.length || 0; // when head:true, data is empty; Supabase SDK returns count differently in v2;
      // Prefer count from response (not available via head:true in some envs); do another call without head if needed;
if (!count) {}
        const { count: exactCount,}
} = await supabase;
          .from('notifications')
          .select('id', { count: 'exact',}
})
          .eq('user_id', userId)
          .eq('read_status', false);
return res.status(200).json({ count: exactCount || 0,}
});
>>>>>>> origin/chore/fix-lint-and-merge
      }
function getUserId(req: NextApiRequest): string {

  const cookie = req && req.headers.cookie || '';

<<<<<<< HEAD
const cookie = req && req.headers.cookie || '';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const match = cookie
    .split(';')
    .map(c => c && c.trim())
    .find(c => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);
import { supabase } from '../../../utils/supabase/client';
import {
  NotificationItem
  NotificationType;
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
<<<<<<< HEAD

      return res.status(200).json({ count })
=======
<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      filter = 'all',
      count_only,
      limit = '50',
      offset = '0',
<<<<<<< HEAD
import { NotificationItem, NotificationType } from '../../../utils/notifications';
function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  try {;
    const userId = getUserId(req);
    const {
      filter = 'all'
      countOnly
      limit = '50'
      offset = '0'
    } = req.query as Record<string, string>;function getUserId(req: NextApiRequest): string {
  const cookie = req.headers.cookie |'';
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { filter = 'all', countOnly, limit = '50', offset = '0' } = req && req.query as Record<string, string>;
  try {;
    const userId = getUserId(req);
    const { filter = 'all', countOnly, limit = '50', offset = '0' } = req.query as Record<string, string>;
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return 'demo-user-1'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  try {
    const userId = getUserId(req);



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // If countOnly, return unread count quickly
    if (countOnly === 'true') {
      const { data, error } = await supabase
        .from('notifications')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('read_status', false);
      if (error) {
<<<<<<< HEAD
        // Fallback to 0 on error (e.g., table missing)
        return res.status(200).json({ count: 0 });
      }
      const count = (data as any)?.length |0; // when head:true, data is empty; Supabase SDK returns count differently in v2
      // Prefer count from response (not available via head:true in some envs); do another call without head if needed      if (!count) {      const count = (data as any)?.length |0, // when head:true, data is empty, Supabase SDK returns count differently in v2
=======
        // Fallback to 0 on error (e && e.g., table missing)
        return res && res.status(200).json({ count: 0 });
      }



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Prefer count from response (not available via head: true in some envs), do another call without head if needed
      if (!count) {
        const { count: exactCount } = await supabase
          .from('notifications')
          .select('id', { count: 'exact' })
          .eq('user_id', userId)
          .eq('read_status', false);
<<<<<<< HEAD
        return res && res.status(200).json({ count: exactCount || 0 });
      }
      return res && res.status(200).json({ count });
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

    // Build query based on filter
    let query = supabase.from('notifications').select('*').eq('user_id', userId).order('created_at', { ascending: false });

    if (filter === 'unread') {
    if (filter === 'unread') {
      query = query && query.eq('read_status', false)
      query = query.eq('read_status', false)
    } else if (['systemonboardingquotematch'].includes(filter)) {
      query = query.eq('type', filter as NotificationType)
    }

    const { data, error } = await query.range(parseInt(offset, 10), parseInt(offset, 10) + parseInt(limit, 10) - 1);
    }
    // Build query based on filter;
let query = supabase;
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false,}
});
    if (filter === 'unread') {}
      query = query && query.eq('read_status', false);}
    } else if (['system', 'onboarding', 'quote', 'match'].includes(filter)) {}
      query = query && query.eq('type', filter as NotificationType);}
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const { data, error } = await query && query.range(
      parseInt(offset, 10),
      parseInt(offset, 10) + parseInt(limit, 10) - 1
    );      }
<<<<<<< HEAD
        return res.status(200).json({ count: exactCount || 0 })
      }
      return res && res.status(200).json({ count })
    }
    // Build query based on filter
    let query = supabase && supabase.from('notifications').select('*').eq('user_id', userId).order('created_at', { ascending: false });
=======


      return res && res.status(200).json({ count })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    // Build query based on filter

    let query = supabase && supabase.from('notifications').select('*').eq('user_id', userId).order('created_at', { ascending: false });


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (filter === 'unread') {
      query = query && query.eq('read_status', false)
    } else if (['systemonboardingquotematch'].includes(filter)) {
      query = query && query.eq('type', filter as NotificationType);
    }
<<<<<<< HEAD
    const { data, error } = await query.range(
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

const { data, error } = await query.range(
>>>>>>> origin/chore/fix-lint-and-merge
      parseInt(offset, 10)
      parseInt(offset, 10) + parseInt(limit, 10) - 1;
    );

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const { data, error } = await query && query.range(parseInt(offset, 10), parseInt(offset, 10) + parseInt(limit, 10) - 1);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (error) {
      // Fallback seed data for local/dev if table is missing;
const fallback: NotificationItem[] = [
>>>>>>> merged-prs-20250907-203621
        {
          id: 'seed-1';
          user_id: userId;
          type: 'onboarding';
          title: 'Welcome to Zion AI Marketplace';
          body: 'Complete your profile to get personalized matches.';
          created_at: new Date().toISOString();
          read_status: false;
          related_action: '/profile'};
        {
          id: 'seed-2';
          user_id: userId;
          type: 'system';
          title: 'System maintenance scheduled';
          body: 'We will be undergoing maintenance this weekend.';
          created_at: new Date(Date.now() - 1000 * 60 * 60).toISOString();
          read_status: false;
          related_action: '/status'}];
      return res.status(200).json({ notifications: fallback })
<<<<<<< HEAD
=======
          user_id: userId,
=======

<<<<<<< HEAD
          id: 'seed-1',
          user_id: userId,
} = req.query as Record < string, string>;function getUserId (req: NextApiRequest): string {
  const cookie = req.headers.cookie || '';
  const match = cookie.split ().map ((c) => c.trim ()).find ((c) => c.starts_with ('user_id='));
  if (return decodeURIComponent (match.split ('=')[1])) {
  $2
}
  return 'demo - user - 1';
}
export default async /**
 * handler - Function description
 */
function handler() {
  try {
    const user_id = getUserId (req);
    const { filter = 'all', count_only, limit = '50', offset = '0' } = req.query as Record < string, string>;
;
    // If count_only, return unread count quickly;
    // Check condition
if ( {) {
  $2
}
      const { data, error } = await supabase;
        .from ('notifications');
        .select ('id', { count: 'exact', head: true });
        .eq ('user_id', user_id);
        .eq ('read_status', false);
;
      // Check condition
if ( {) {
  $2
}
        // Fallback to 0 on error (e.g., table missing);
        return res.status (200).json ({ count: 0 });
      }
      const count = (data as any)?.length || 0; // when head:true, data is empty; Supabase SDK returns count differently in v2;
      // Prefer count from response (not available via head:true in some envs); do another call without head if needed      if ( {      const count = (data as any)?.length || 0, // when head:true, data is empty, Supabase SDK returns count differently in v2) {
  $2
}
      // Prefer count from response (not available via head: true in some envs), do another call without head if needed;
      // Check condition
if ( {) {
  $2
}
        const { count: exact_count } = await supabase;
          .from ('notifications');
          .select ('id', { count: 'exact' });
          .eq ('user_id', user_id);
          .eq ('read_status', false);
        return res.status (200).json ({ count: exact_count || 0 });
      }
      return res.status (200).json ({ count });
    }
    // Build query based on filter;
    let query = supabase;
      .from ('notifications');
      .select ('*');
      .eq ('user_id', user_id);
      .order ('created_at', { ascending: false });
;
    // Check condition
if ( {) {
  $2
}
      query = query.eq ('read_status', false);
    } else if () {) {
  $2
}
      query = query.eq ('type', filter as NotificationType);
    }
    const { data, error } = await query.range (
      parse_int (offset, 10),
      parse_int (offset, 10) + parse_int (limit, 10) - 1);      }
      return res.status (200).json ({ count });
    }
    // Build query based on filter;
    let query = supabase.from ('notifications').select ('*').eq ('user_id', user_id).order ('created_at', { ascending: false });
;
    // Check condition
if ( {) {
  $2
}
      query = query.eq ('read_status', false);
    } else if () {) {
  $2
}
      query = query.eq ('type', filter as NotificationType);
    }
    const { data, error } = await query.range (parse_int (offset, 10), parse_int (offset, 10) + parse_int (limit, 10) - 1);
;
    // Check condition
if ( {) {
  $2
}
      // Fallback seed data for local / dev if table is missing;
      const fallback: NotificationItem[] = [;
        {
          id: 'seed - 1',
          user_id: user_id,
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          type: 'onboarding',
          title: 'Welcome to Zion AI Marketplace',
          body: 'Complete your profile to get personalized matches.',
          created_at: new Date().toISOString($2);
          read_status: false,
          related_action: '/profile'},
        {
          id: 'seed-2',
          user_id: userId,
          type: 'system',
          title: 'System maintenance scheduled',
          body: 'We will be undergoing maintenance this weekend.',
<<<<<<< HEAD
          created_at: new Date(Date.now() - 1000 * 60 * 60).toISOString($2);
=======
<<<<<<< HEAD
          created_at: new Date (Date.now () - 1000 * 60 * 60).toISOString (),
=======

          created_at: new Date (Date.now () - 1000 * 60 * 60).toISOString (),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          read_status: false,

function getUserId(req: NextApiRequest): string {


=======

id: 'seed-1',
  user_id: userId,
          type: 'onboarding',
  title: 'Welcome to Zion AI Marketplace',
          body: 'Complete your profile to get personalized matches.',
  created_at: new Date().toISOString(),
          read_status: false,}
          related_action: '/profile',}
        },
>>>>>>> origin/chore/fix-lint-and-merge
        {
          id: 'seed-2',
  user_id: userId,
          type: 'system',
  title: 'System maintenance scheduled',
          body: 'We will be undergoing maintenance this weekend.',
  created_at: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
          read_status: false,}
          related_action: '/status',}
        },
      ];
<<<<<<< HEAD
      return res.status(200).json({ notifications: fallback,}
});
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


<<<<<<< HEAD
    // If countOnly, return unread count quickly
    if (countOnly === 'true) {
      const { data, error } = await supabase
        .from(notifications')
        .select('id, { count: exact', head: true })
        .eq('user_id, userId)
        .eq(read_status', false);

      if (error) {
        // Fallback to 0 on error (e.g., table missing)

      if (!count) {
        const { count: exactCount } = await supabase
          .from('notifications)
          .select(id', { count: 'exact })
          .eq(user_id', userId)
          .eq('read_status, false);

    }
    // Build query based on filter;
    let query = supabase
      .from('notifications')
      .select(*')'
      .eq(user_id, userId)'
      .order('created_at, { ascending: false });
    if (filter === 'unread') {
      query = query && query.eq(read_status', false);'
    } else if ([system, 'onboarding', quote, 'match'].includes(filter)) {
      query = query && query.eq(type', filter as NotificationType);
    }'
    if (filter === unread) {'
      query = query && query.eq('read_status, false)
    } else if (['systemonboardingquotematch'].includes(filter)) {
      query = query && query.eq(type', filter as NotificationType);
    }

          user_id: userId,
          type: 'onboarding,
          title: Welcome to Zion AI Marketplace',
          body: 'Complete your profile to get personalized matches.,

        {
          id: seed-2',
          user_id: userId,
          type: 'system,
          title: System maintenance scheduled',
          body: 'We will be undergoing maintenance this weekend.,

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

function getUserId(req: NextApiRequest): string {
  // Extract user ID from request (implement based on your auth system)
  return req.headers['x-user-id'] as string || 'anonymous';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    filter = 'all',
    countOnly,
    limit = '50',
    offset = '0',
  } = req.query as Record<string, string>;

<<<<<<< HEAD
  // If countOnly, return unread count quickly
  if (countOnly === 'true') {
    const { data, error } = await supabase
      .from('notifications')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', getUserId(req))
      .eq('read_status', false);
    
    if (error) {
      // Fallback to 0 on error (e.g., table missing)
      return res.status(200).json({ count: 0 });
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }

    const count = (data as any)?.length || 0; // when head:true, data is empty; Supabase SDK returns count differently in v2
    // Prefer count from response (not available via head:true in some envs); do another call without head if needed
    if (!count) {
      const { count: exactCount } = await supabase
        .from('notifications')
        .select('id', { count: 'exact' })
        .eq('user_id', getUserId(req))
        .eq('read_status', false);
      return res.status(200).json({ count: exactCount || 0 });
    }
    return res.status(200).json({ count });
  }
<<<<<<< HEAD

  // Build query based on filter
  let query = supabase
    .from('notifications')
    .select('*')
    .eq('user_id', getUserId(req))
    .order('created_at', { ascending: false });

  if (filter === 'unread') {
    query = query.eq('read_status', false);
  } else if (['system', 'onboarding', 'quote', 'match'].includes(filter)) {
    query = query.eq('type', filter as NotificationType);
  }

  const { data, error } = await query.range(
    parseInt(offset, 10),
    parseInt(offset, 10) + parseInt(limit, 10) - 1
  );

  if (error) {
    // Fallback seed data for local/dev if table is missing
    const fallback: NotificationItem[] = [
      {
        id: 'seed-1',
        user_id: getUserId(req),
        type: 'onboarding',
        title: 'Welcome to Zion AI Marketplace',
        body: 'Complete your profile to get personalized matches.',
        created_at: new Date().toISOString(),
        read_status: false,
        related_action: '/profile',
      },
      {
        id: 'seed-2',
        user_id: getUserId(req),
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
}
=======
}
      return res.status (200).json ({ notifications: fallback,}
});
    }
<<<<<<< HEAD
    return res.status (200).json ({ notifications: data as NotificationItem[] });
  } catch (e) {
return res.status (500).json ({ error: 'Unexpected error' });
  }    return res.status (500).json ({ error: 'Unexpected error' });
return res.status(500).json({ error: 'Unexpected error' });
  }    return res.status(500).json({ error: 'Unexpected error' })
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  };
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
function getUserId(req: NextApiRequest): string {const cookie  = req && req.headers.cookie || '';const match = cookie;
    .split(';').map(c => c && c.trim()).find(c => c && c.startsWith('user_id='))if (match) return decodeURIComponent(match && match.split('=')[1])return 'demo-user-1';
export default async function handler() {filter = 'all',countOnly,limit = '50',offset = '0',} = req.query as Record<string, string>;// If countOnly, return unread count quickly;
    if (countOnly === 'true') {const { data, error } = await supabase;
        .from('notifications').select('id', { count: 'exact', head: true }).eq('user_id', userId).eq('read_status', false)if (error) {// Fallback to 0 on error (e.g., table missing)return res.status(200).json({ count: 0 })}const count = (data as any)?.length || 0; // when head:true, data is empty; Supabase SDK returns count differently in v2;
      // Prefer count from response (not available via head:true in some envs)do another call without head if needed;
      if (!count) {const { count: exactCount } = await supabase;
          .from('notifications').select('id', { count: 'exact' }).eq('user_id', userId).eq('read_status', false)return res.status(200).json({ count: exactCount || 0 })}
      return res.status(200).json({ count })}
    // Build query based on filter;
    let query = supabase;
      .from('notifications').select('*').eq('user_id', userId).order('created_at', { ascending: false })if (filter === 'unread') {query = query && query.eq('read_status', false)} else if (['system', 'onboarding', 'quote', 'match'].includes(filter)) {query = query && query.eq('type', filter as NotificationType)}if (filter === 'unread') {query = query && query.eq('read_status', false)} else if (['systemonboardingquotematch'].includes(filter)) {query = query && query.eq('type', filter as NotificationType)}const { data, error } = await query.range(parseInt(offset, 10)parseInt(offset, 10) + parseInt(limit, 10) - 1;
    )if (error) {// Fallback seed data for local/dev if table is missing;
      const fallback: NotificationItem[] = [;
        {id: 'seed-1',user_id: userId,type: 'onboarding',title: 'Welcome to Zion AI Marketplace',body: 'Complete your profile to get personalized matches.',created_at: new Date().toISOString(),read_status: false,related_action: '/profile',},{id: 'seed-2',user_id: userId,type: 'system',title: 'System maintenance scheduled',body: 'We will be undergoing maintenance this weekend.',created_at: new Date(Date.now() - 1000 * 60 * 60).toISOString(),read_status: false,related_action: '/status',},];
      return res.status(200).json({ notifications: fallback })}
  }}
      return res.status (200).json ({ notifications: fallback })}
    return res.status (200).json ({ notifications: data as NotificationItem[] })} catch (e) {return res.status (500).json ({ error: 'Unexpected error' })}    return res.status (500).json ({ error: 'Unexpected error' })return res.status(500).json({ error: 'Unexpected error' })}    return res.status(500).json({ error: 'Unexpected error' })}}
}
<<<<<<< HEAD
  };
}

  }}
          related_action: /status'}],
      return res.status(200).json({ notifications: fallback})
>>>>>>> merged-prs-20250907-203621
    }

    return res.status(200).json({ notifications: data as NotificationItem[] })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error })
  }
<<<<<<< HEAD
}
=======
}
    return res.status (200).json ({ notifications: data as NotificationItem[] });
  } catch (e) {'
return res.status (500).json ({ error: 'Unexpected error' });'
  }    return res.status (500).json ({ error: 'Unexpected error' });'
return res.status(500).json({ error: 'Unexpected error' });'
=======
    return res.status (200).json ({ notifications: data as NotificationItem[],}
});
  } catch (e) {
return res.status (500).json ({ error: 'Unexpected error',}
});
  }    return res.status (500).json ({ error: 'Unexpected error',}
});
return res.status(500).json({ error: 'Unexpected error',}
});
  }    return res.status(500).json({ error: 'Unexpected error' })
 ,
}


>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  };
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  };
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
