import type {_NextApiRequest, _NextApiResponse} from 'next';

type Note = {_id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;};

const notesStore: Note[] = [];

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only'});

  if (req.method === 'GET') {_const { targetType, _targetId} = req.query;
    if (!targetType || Array.isArray(targetType)) return res.status(400).json({_error: 'Invalid targetType'});
    if (!targetId || Array.isArray(targetId)) return res.status(400).json({_error: 'Invalid targetId'});
    const _notes = notesStore
      .filter(_(n) => n.targetType === targetType && n.targetId === targetId)
      .sort(_(a, _b) => b.createdAt - a.createdAt);
    return res.status(200).json({_notes});
  }

  if (req.method === 'POST') {_const _authorId = String(req.headers['x-admin-user'] || 'admin');
    const { targetType, _targetId, _text} = req.body || {};
    if (!targetType || !targetId || !text?.trim()) return res.status(400).json({_error: 'Missing fields'});
    const note: Note = {_id: randomUUID(), _targetType, _targetId, _text: String(text), _authorId, _createdAt: Date.now()};
    notesStore.push(note);
    return res.status(200).json({_ok: true, _note});
  }

  return res.status(405).json({_error: 'Method not allowed'});
}

export function getAllNotes(): Note[] {_return [...notesStore].sort(_(a, _b) => b.createdAt - a.createdAt);}