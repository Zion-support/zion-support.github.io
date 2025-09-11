  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const notesStore: Note[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })
  if (req.method === 'GET') {

  }
  if (req.method === 'POST') {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
