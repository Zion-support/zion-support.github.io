import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { resumeId, viewerId, viewerType, timestamp } = req.body;
    
    if (!resumeId || !viewerId) {
      return res.status(400).json({ error: 'Resume ID and viewer ID are required' });
    }

    // Mock webhook processing
    const result = {
      webhookId: Date.now().toString(),
      type: 'resume_viewed',
      resumeId,
      viewerId,
      viewerType: viewerType || 'recruiter',
      timestamp: timestamp || new Date().toISOString(),
      processedAt: new Date().toISOString(),
      status: 'success'
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Resume viewed webhook error:', error);
    res.status(500).json({ error: 'Failed to process resume viewed webhook' });
  }
}