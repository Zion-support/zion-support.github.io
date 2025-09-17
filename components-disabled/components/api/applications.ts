import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { jobId, status } = req.query;
    const applications = [
      {
        id: '1',
        jobId: jobId as string || 'job1',
        candidateName: 'John Doe',
        email: 'john@example.com',
        status: status as string || 'pending',
        appliedAt: new Date().toISOString(),
      },
    ];

    return res.status(200).json({ applications });
  }

  if (req.method === 'POST') {
    const { jobId, candidateName, email, resume } = req.body || {};
    if (!jobId || !candidateName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const application = {
      id: Date.now().toString(),
      jobId,
      candidateName,
      email,
      resume,
      status: 'pending',
      appliedAt: new Date().toISOString(),
    };

    return res.status(201).json({ application });
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}