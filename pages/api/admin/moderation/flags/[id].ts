<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
<<<<<<< HEAD
>>>>>>> origin/main

interface Flag {
  id: string;
  userId: string;
  contentId: string;
  reason: string;
  status: 'pending' | 'resolved' | 'dismissed';
  createdAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'PUT' && req.method !== 'DELETE') {
    return res.status(405).end('Method Not Allowed');
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid flag ID' });
  }
  if (req.method === 'GET') {
    // Get flag details
    return res.status(200).json({
      ok: true,
      flag: {
        id,
        status: 'pending'
        createdAt: new Date().toISOString()
      }
    });
  }
  if (req.method === 'PUT') {
    // Update flag status
    const { status, resolvedBy } = req.body;
    
    if (!status || !['pending', 'resolved', 'dismissed'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    return res.status(200).json({
      ok: true,
      flag: {
        id
        status,
        resolvedAt: new Date().toISOString()
        resolvedBy: resolvedBy || 'admin'
      }
    });
  }
  if (req.method === 'DELETE') {
    // Delete flag
    return res.status(200).json({ ok: true, deleted: true });
  }
}
=======
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Flag details endpoint' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
