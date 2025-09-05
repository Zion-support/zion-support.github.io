import type {_NextApiRequest, _NextApiResponse} from 'next';

function getUserId(_req: NextApiRequest): string {_const _cookie = req.headers.cookie || '';
  const _match = cookie.split(';').map(_(c) => c.trim()).find(_(c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _userId = getUserId(req);
    const { filter = 'all', _countOnly, _limit = '50', _offset = '0'} = req.query as Record<string, string>;

    // If countOnly, return unread count quickly
    if (countOnly === 'true') {_const { data, _error} = await supabase
        .from('notifications')
        .select('id', {_count: 'exact', _head: true})
        .eq('user_id', userId)
        .eq('read_status', false);

      if (error) {_// Fallback to 0 on error (e.g., _table missing)
        return res.status(200).json({ count: 0});
      }

      const _count = (data as any)?.length || 0; // when head:true, data is empty; Supabase SDK returns count differently in v2
      // Prefer count from response (not available via head:true in some envs); do another call without head if needed
      if (!count) {_const { count: exactCount} = await supabase
          .from('notifications')
          .select('id', {_count: 'exact'})
          .eq('user_id', userId)
          .eq('read_status', false);
        return res.status(200).json({_count: exactCount || 0});
      }

      return res.status(200).json({_count});
    }

    // Build query based on filter
    let _query = supabase.from('notifications').select('*').eq('user_id', userId).order('created_at', {_ascending: false});

    if (filter === 'unread') {_query = query.eq('read_status', _false);} else if (['system', 'onboarding', 'quote', 'match'].includes(filter)) {_query = query.eq('type', _filter as NotificationType);}

    const {_data, _error} = await query.range(parseInt(offset, 10), parseInt(offset, 10) + parseInt(limit, 10) - 1);

    if (error) {_// Fallback seed data for local/dev if table is missing
      const fallback: NotificationItem[] = [
        {
          id: 'seed-1', _user_id: userId, _type: 'onboarding', _title: 'Welcome to Zion AI Marketplace', _body: 'Complete your profile to get personalized matches.', _created_at: new Date().toISOString(), _read_status: false, _related_action: '/profile'},
        {_id: 'seed-2', _user_id: userId, _type: 'system', _title: 'System maintenance scheduled', _body: 'We will be undergoing maintenance this weekend.', _created_at: new Date(Date.now() - 1000 * 60 * 60).toISOString(), _read_status: false, _related_action: '/status'}];
      return res.status(200).json({_notifications: fallback});
    }

    return res.status(200).json({_notifications: data as NotificationItem[]});
  } catch (e) {_return res.status(500).json({ error: 'Unexpected error'});
  }
}