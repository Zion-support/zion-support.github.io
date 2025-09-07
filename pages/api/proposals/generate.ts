import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { projectId, requirements, budget, timeline } = req.body || {};
    
    if (!projectId || !requirements) {
      return res.status(400).json({ error: 'Project ID and requirements are required' });
    }

    // Placeholder for proposal generation logic
    const proposal = {
      id: `proposal-${Date.now()}`,
      projectId,
      requirements,
      budget: budget || 0,
      timeline: timeline || 'TBD',
      status: 'draft',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({ success: true, proposal });
  } catch (error) {
    console.error('Proposal generation error:', error);
    res.status(500).json({ error: 'Failed to generate proposal' });
  }
}