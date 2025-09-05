
export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  clearUserCookie(res);
  res.status(200).json({_success: true});
}