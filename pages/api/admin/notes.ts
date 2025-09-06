type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number
}
const notesStore: Note[] = []
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })
  if (req.method === 'GET') {
    const { targetType, targetId } = req.query;
    if (!targetType || Array.isArray(targetType)) {
      return res.status(400).json({ error: 'Invalid targetType' });
    }
    if (!targetId || Array.isArray(targetId)) {
      return res.status(400).json({ error: 'Invalid targetId' });
    }
    const notes = notesStore
      .filter((n) => n.targetType === targetType && n.targetId === targetId)
      .sort((a, b) => b.createdAt - a.createdAt);
    return res.status(200).json({ notes });
  }
let notesStore: Note[] = [];

export function getAllNotes(): Note[] {
  return notesStore;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const { targetType, targetId } = req.query;
      if (!targetType || Array.isArray(targetType)) return res.status(400).json({ error: 'Invalid targetType' });
      if (!targetId || Array.isArray(targetId)) return res.status(400).json({ error: 'Invalid targetId' });
      
      const notes = notesStore
        .filter((n) => n.targetType === targetType && n.targetId === targetId);
      res.json({ notes });
    } else if (req.method === 'POST') {
      const { targetType, targetId, content, author } = req.body;
      const note: Note = {
        id: Date.now().toString(),
        targetType,
        targetId,
        content,
        author,
        createdAt: new Date().toISOString()
      };
      notesStore.push(note);
      res.json({ note });
    } else {
      res.setHeader('Allow', 'GET, POST');
      res.status(405).end('Method Not Allowed');
    }
    const note: Note = {
      id: randomUUID(),
      targetType,
      targetId,
      text: String(text),
      authorId,
      createdAt: Date.now(),
    };
    notesStore.push(note);
    return res.status(200).json({ ok: true, note });
  }


