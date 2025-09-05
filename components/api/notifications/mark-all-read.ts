import type {_NextApiRequest, _NextApiResponse} from 'next';

function getUserId(_req: NextApiRequest): string {_const _cookie = req.headers.cookie || '';
  const _match = cookie.split(';').map(_(c) => c.trim()).find(_(c) => c.startsWith('user_id='));
  if (match) return decodeURIComponent(match.split('=')[1]);
  return 'demo-user-1';}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  try {_const _userId = getUserId(req);

    const { error} = await supabase
      .from('notifications')
      .update({_read_status: true})
      .eq('user_id', userId)
      .eq('read_status', false);

    if (error) return res.status(200).json({_ok: true});

    return res.status(200).json({_ok: true});
  } catch (e) {_return res.status(500).json({ error: 'Unexpected error'});
  }
}