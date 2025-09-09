import { randomUUID } from 'crypto';

type Note = {
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};

const notesStore: Note[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ notes: notesStore });
  }

  if (req.method === 'POST') {
    const note: Note = {
      id: randomUUID(),
      targetType: req.body.targetType,
      targetId: req.body.targetId,
      text: req.body.text,
      authorId: req.body.authorId,
      createdAt: Date.now(),
    };
    
    notesStore.push(note);
    return res.status(201).json({ note });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end('Method Not Allowed');
}