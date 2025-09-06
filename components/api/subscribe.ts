import type { NextApiRequest, NextApiResponse } from 'next';
  try {
    // Basic validation
      .select('*')
      .single();

    if (error) {
  }      }
      return res.status (500).send (error.message || 'Database error');
    }
    return res.status (200).json ({ ok: true, data });
  } catch (e: any) {
    return res.status (500).send (e?.message || 'Unexpected error');
}
}
    return res.status(500).send(e?.message || 'Unexpected error');
