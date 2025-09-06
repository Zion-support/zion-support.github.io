import type { NextApiRequest, NextApiResponse } from 'next';

interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  requiredSkills: string[];
  budgetMinUsd?: number;
  budgetMaxUsd?: number;
  deliveryDeadlineIso?: string;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  createdAtIso: string;
  updatedAtIso: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'PATCH') {
    res.setHeader('Allow', ['GET', 'PATCH']);
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { id } = req.query;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Job ID is required' });
    }

    if (req.method === 'GET') {
      // Get job by ID
      const job: Job = {
        id,
        title: 'Sample Job',
        description: 'Sample job description',
        category: 'Development',
        requiredSkills: ['React', 'TypeScript'],
        budgetMinUsd: 5000,
        budgetMaxUsd: 10000,
        status: 'open',
        createdAtIso: new Date().toISOString(),
        updatedAtIso: new Date().toISOString()
      };

      res.status(200).json(job);
    } else if (req.method === 'PATCH') {
      // Update job
      const { title, description, category, requiredSkills, budgetMinUsd, budgetMaxUsd, deliveryDeadlineIso, status } = req.body;
      
      const job: Job = {
        id,
        title: title || 'Updated Job',
        description: description || 'Updated description',
        category: category || 'Development',
        requiredSkills: requiredSkills || [],
        budgetMinUsd,
        budgetMaxUsd,
        deliveryDeadlineIso,
        status: status || 'open',
        createdAtIso: new Date().toISOString(),
        updatedAtIso: new Date().toISOString()
      };

      res.status(200).json(job);
    }
  } catch (error) {
    console.error('Job error:', error);
    res.status(500).json({ error: 'Failed to process job' });
  }
}