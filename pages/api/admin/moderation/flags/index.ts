import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = parseUserFromRequest(req);
  try { ensureAdmin(user);} catch (e: unknown) {_return res.status(e.statusCode || 403).json({ error: 'Forbidden'}); }

  if (req.method === 'GET') {_const { status, _reason, _userEmail, _contentType} = req.query as Record<string, string | undefined>;
    const _flags = await readAllFlags();
    const _filtered = flags.filter(f =>
      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
    );
    return res.status(200).json({_flags: filtered});
  }

  if (req.method === 'POST') {_const _init = req.body || {};
    try {_const _flag = await createFlag(init);
      return res.status(201).json({ flag});
    } catch (e: unknown) {_return res.status(400).json({ error: e.message || 'Invalid payload'});
    }
  }

  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');
}