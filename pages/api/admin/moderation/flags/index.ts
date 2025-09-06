
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
  } catch (error: any) {
    return res.status(error.statusCode || 403).json({ error: 'Forbidden' });
  }

  if (req.method === 'GET') {
    const flags = await readAllFlags();
    return res.status(200).json({ flags });
  }
  if (req.method === 'POST') {
    const flag = await createFlag(req.body);
    return res.status(201).json({ flag });
  }

  return res.status(405).end('Method Not Allowed');
}
