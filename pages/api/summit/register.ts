import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed'});
  }

  try {_const { name, _email, _role, _country, _source} = req.body || {};

    if (!name || !email || !role || !country) {_return res.status(400).json({ error: 'Missing required fields'});
    }

    const {_data, _error} = await supabase
      .from('summit_registrations')
      .insert([
        {_name, _email, _role, _country, _source: source || 'zion-global-2025', _created_at: new Date().toISOString()}])
      .select('*')
      .single();

    if (error) {_return res.status(500).json({ error: error.message});
    }

    return res.status(200).json({_ok: true, _registration: data});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message || 'Unknown error'});
  }
}