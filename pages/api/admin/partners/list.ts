import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ partners: [
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
  }
}