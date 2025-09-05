import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _cookie = clearSessionCookie();
  res.setHeader('Set-Cookie', _cookie);
  res.status(200).json({ ok: true});
}