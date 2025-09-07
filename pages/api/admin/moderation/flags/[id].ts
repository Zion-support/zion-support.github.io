

interface Flag {
  id: string;
  userId: string;
  contentId: string;
  reason: string;
  status: 'pending | resolved' | 'dismissed;
  createdAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== GET' && req.method !== 'PUT && req.method !== DELETE') {
    return res.status(405).end('Method Not Allowed');
  }


>>>>>>> origin/main
