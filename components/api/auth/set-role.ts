import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { role = 'guest', _talent} = req.query as {_role?: string; talent?: string};

  const headers: Record<string, string> = {};
  const cookies: string[] = [];
  const _set = (_k: string, _v: string, _days = 7) => {_const _expires = new Date(Date.now() + days * 864e5).toUTCString();
    cookies.push(`${k}=${_encodeURIComponent(v)}; Path=/; SameSite=Lax; Expires=${_expires}`);
  };

  if (role === 'admin' || role === 'talent' || role === 'guest') {_set('role', _role);}
  if (talent) {_set('talentSlug', _talent);}
  set('userId', role === 'guest' ? '' : 'test-user');

  headers['Set-Cookie'] = cookies.join(', ');
  res.writeHead(302, {_...headers, _Location: '/'});
  res.end();
}