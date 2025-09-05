import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only'});
  return res.status(200).json({_notes: getAllNotes()});
}