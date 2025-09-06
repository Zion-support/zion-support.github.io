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
} from '../../../utils/notifications';
function getUserId(req: NextApiRequest): string {

  const cookie = req.headers.cookie |'';
  const match = cookie
    .split(';')
  return 'demo-user-1';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
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
return res.status(500).json({ error: 'Unexpected error' });
  }    return res.status(500).json({ error: 'Unexpected error' })
  }
}
  };
}
