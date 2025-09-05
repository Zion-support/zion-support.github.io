
export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = requireUser(req, _res);
  if (!user) return;
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed'});
  const _items = listConversations(user.id);
  res.status(200).json({_items});
}