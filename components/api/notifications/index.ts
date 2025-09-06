import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '../../../utils/supabase/client';
import {


} from '../../../utils/notifications';
function getUserId(req: NextApiRequest): string {

  const cookie = req && req.headers.cookie || '';

  const match = cookie
    .split(';')
    .map(c => c && c.trim())
    .find(c => c && c.startsWith('user_id='));
  if (match) return decodeURIComponent(match && match.split('=')[1]);

  return 'demo-user-1'
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

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


  };
}
      return res.status (200).json ({ notifications: fallback });
    }
    return res.status (200).json ({ notifications: data as NotificationItem[] });
  } catch (e) {
return res.status (500).json ({ error: 'Unexpected error' });
  }    return res.status (500).json ({ error: 'Unexpected error' });

  }
}
  };
}


