
export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = getUserFromRequest(req);
  if (!user) return res.status(200).json({ user: null});
  res.status(200).json({_user});
}