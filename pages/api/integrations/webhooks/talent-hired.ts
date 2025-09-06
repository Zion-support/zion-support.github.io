import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { talentId, jobId, companyId, hireDate, salary } = req.body;
    
    if (!talentId || !jobId || !companyId) {
      return res.status(400).json({ error: 'Talent ID, job ID, and company ID are required' });
    }

    // Mock webhook processing
    const result = {
      webhookId: Date.now().toString(),
      type: 'talent_hired',
      talentId,
      jobId,
      companyId,
      hireDate: hireDate || new Date().toISOString(),
      salary: salary || null,
      processedAt: new Date().toISOString(),
      status: 'success'
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Talent hired webhook error:', error);
    res.status(500).json({ error: 'Failed to process talent hired webhook' });
  }
}