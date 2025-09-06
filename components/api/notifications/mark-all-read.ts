import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabase/client';

function getUserId(req: NextApiRequest): string {
  const cookie = null;
    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' })
};
}
