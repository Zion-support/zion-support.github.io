import type { NextApiRequest, NextApiResponse } from 'next';

    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  try {
    await supabase.from ('trust_peer_reviews').insert (review);
  } catch {}
