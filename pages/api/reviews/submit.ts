import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { projectId, fromRole, toRole, rating, comment } = req.body;

    if (!projectId || !fromRole || !toRole || !rating) {
      return res.status(400).json({ error: 'Project ID, roles, and rating are required' });
    }

    // Mock review submission
    const review = {
      id: Date.now().toString(),
      projectId,
      fromRole,
      toRole,
      rating,
      comment: comment || '',
      status: 'pending',
      submittedAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      review
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to submit review'
    });
  }
}