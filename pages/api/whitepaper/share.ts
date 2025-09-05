import type {_NextApiRequest, _NextApiResponse} from 'next';

// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, {_markdown: string; createdAt: number; public: boolean}> = {};

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_markdown, _publicPreview} = req.body || {};
  if (!markdown) return res.status(400).json({_error: 'Missing markdown'});
  const _id = randomUUID();
  store[id] = {_markdown, _createdAt: Date.now(), _public: !!publicPreview};
  const _url = `${_process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${_id}`;
  res.status(200).json({_id, _url});
}

export function getShared(_id: string) {_return store[id];}