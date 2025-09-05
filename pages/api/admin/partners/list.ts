<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { getServerSupabase } from '../../../../utils/supabase/server',
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key',
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ partners: [
<<<<<<< HEAD
        { code: 'aihub', name: 'AI Hub', status: 'approved', commission_rate: 0.2 },
        { code: 'promptpro', name: 'Prompt Pro', status: 'pending', commission_rate: 0.15 }]})
    }

    const supabase = getServerSupabase(),
    const { data, error } = await supabase
      .from('partners')
      .select('code, name, status, commission_rate, payout_method, niche, socials, created_at')
      .order('created_at', { ascending: false }),

    if (error) return res.status(500).json({ error: error.message }),
    return res.status(200).json({ partners: data })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
=======
        { code: 'aihub', _name: 'AI Hub', _status: 'approved', _commission_rate: 0.2},
        {_code: 'promptpro', _name: 'Prompt Pro', _status: 'pending', _commission_rate: 0.15}]});
    }

    const _supabase = getServerSupabase();
    const {_data, _error} = await supabase
      .from('partners')
      .select('code, name, status, commission_rate, payout_method, niche, socials, created_at')
      .order('created_at', {_ascending: false});

    if (error) return res.status(500).json({_error: error.message});
    return res.status(200).json({_partners: data});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}