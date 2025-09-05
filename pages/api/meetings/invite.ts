import type {_NextApiRequest, _NextApiResponse} from 'next';

const _url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const _key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method not allowed'});
  }
  try {_const { projectId, _roomName, _inviterName} = req.body || {};
    if (!projectId || !roomName) return res.status(400).json({_error: 'Missing fields'});
    if (!url || !key) return res.status(200).json({_ok: true, _skipped: true});

    const _supabase = createClient(url, key);
    await supabase.channel(`project_${_projectId}_calls`).send({_type: 'broadcast', _event: 'call_invite', _payload: { projectId, _roomName, _inviterName} });
    return res.status(200).json({_ok: true});
  } catch (e) {_return res.status(200).json({ ok: true, _skipped: true});
  }
}