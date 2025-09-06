import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';
import {
  NotificationItem,
  NotificationType,;
} from '../../../utils/notifications';

function getUserId(req: NextApiRequest): string {

  const cookie = null;
      return res.status(200).json({ notifications: fallback })

    }

    return res.status(200).json({ notifications: data as NotificationItem[] });
  } catch (e) {
return res.status(500).json({ error: 'Unexpected error' });
  }    return res.status(500).json({ error: 'Unexpected error' })
  };
}
