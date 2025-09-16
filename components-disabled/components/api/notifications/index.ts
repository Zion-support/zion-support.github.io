import type { NextApiRequest, NextApiResponse } from 'next';
      if (!count) {
        const { count: exactCount } = await supabase
          .from('notifications')
          .select('id', { count: 'exact' })
          .eq('user_id', userId)
          .eq('read_status', false);
    if (error) {
      // Fallback seed data for local/dev if table is missing
      const fallback: NotificationItem[] = [
        {
