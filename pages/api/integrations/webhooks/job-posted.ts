import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { jobId, title, company, location, description } = req.body;
    
    if (!jobId || !title || !company) {
      return res.status(400).json({ error: 'Job ID, title, and company are required' });
    }

    // Mock webhook processing
    const result = {
      webhookId: Date.now().toString(),
      type: 'job_posted',
      jobId,
      title,
      company,
      location: location || 'Remote',
      processedAt: new Date().toISOString(),
      status: 'success'
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Job posted webhook error:', error);
    res.status(500).json({ error: 'Failed to process job posted webhook' });
  }
}