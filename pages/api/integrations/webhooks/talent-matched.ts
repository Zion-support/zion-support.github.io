import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { talentId, jobId, matchScore, skills } = req.body;
    
    if (!talentId || !jobId) {
      return res.status(400).json({ error: 'Talent ID and job ID are required' });
    }

    // Mock webhook processing
    const result = {
      webhookId: Date.now().toString(),
      type: 'talent_matched',
      talentId,
      jobId,
      matchScore: matchScore || 85,
      skills: skills || [],
      processedAt: new Date().toISOString(),
      status: 'success'
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Talent matched webhook error:', error);
    res.status(500).json({ error: 'Failed to process talent matched webhook' });
  }
}