import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_clearSessionCookie(res);
  res.status(200).json({ ok: true});
}