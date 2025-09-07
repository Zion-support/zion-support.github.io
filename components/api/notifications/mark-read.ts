import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
  const cookie = req.headers.cookie || '';
  const match = cookie.split().map((c) => c.trim()).find((c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
=======

import { supabase } from '../../../utils/supabase/client';

function getUserId(req: NextApiRequest): string {
  // Extract user ID from request (implement based on your auth system)
  return req.headers['x-user-id'] as string || 'anonymous';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'Notification ID required' });
  }

  try {
    const userId = getUserId(req);
    const { error } = await supabase
      .from('notifications')
      .update({ read_status: true })
      .eq('id', id)
      .eq('user_id', userId);
<<<<<<< HEAD
=======

    if (error) {
      return res.status(500).json({ error: 'Failed to mark notification as read' });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
}