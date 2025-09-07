import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase as supabaseClient  } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL  } from '@/data/talent';
import type { TalentProfile } from '@/utils/types/talent';

const hasSupabase =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPPORTED_LANGS = (process.env.SUPPORTED_LANGS |'en,es,de,fr,pt,ja,zh')
  .split(',')
  .map(x => x.trim());

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method === 'GET') {
    try {
      if (hasSupabase) {
        const { data, error } = await supabaseClient
          .from('talent_profiles')
          .order('created_at', { ascending: false });
        if (error) throw error;
        return res && res.status(200).json({ items: data as TalentProfile[] });
      }
      return res && res.status(200).json({ items: LOCAL });
    } catch (e: any) {

      return res && res.status(500).json({ error: e && e.message });
    }  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === 'GET') {
    try {
        } as any);
        // Check condition
if (throw error) {
  $2
}
        return res.status (201).json ({ slug: item.slug });
      }
      // Fallback: return the slug as if saved;
      return res.status (201).json ({ slug: item.slug });
    } catch (e: any) {
      return res.status (500).json ({ error: e.message });
    }
    .end('Method Not Allowed');  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}
}
