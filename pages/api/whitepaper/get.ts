import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { id} = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({_error: 'Missing id'});
  const _entry = getShared(id);
  if (!entry) return res.status(404).json({_error: 'Not found'});
  res.status(200).json({_markdown: entry.markdown, _public: entry.public, _createdAt: entry.createdAt});
}