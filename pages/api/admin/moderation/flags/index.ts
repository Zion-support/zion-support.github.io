import { NextApiRequest, NextApiResponse } from 'next';

async function parseUserFromRequest(req: NextApiRequest) {
  // Mock implementation
  return { id: 'admin', role: 'admin' };
}

async function ensureAdmin(user: any) {
  if (user.role !== 'admin') {
    throw new Error('Forbidden');
  }
}

async function readAllFlags() {
  // Mock implementation
  return [];
}

async function createFlag(data: any) {
  // Mock implementation
  return { id: '1', ...data };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await parseUserFromRequest(req);
  try {
    await ensureAdmin(user);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }

  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<
      string,
      string | undefined
    >;
    const flags = await readAllFlags();
    const filtered = flags.filter(
      f =>
        (!status || f.status === status) &&
        (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
        (!userEmail ||
          f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
        (!contentType || f.contentType === contentType)
    );
    return res.status(200).json({ flags: filtered });
  }

  if (req.method === 'POST') {
    const init = req.body || {};
    try {
      const flag = await createFlag(init);
      return res.status(201).json({ flag });
    } catch (e: any) {
      return res.status(400).json({ error: e.message || 'Invalid payload' });
    }
  }

  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');
}