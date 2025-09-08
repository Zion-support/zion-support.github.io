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
  createdAt: string;
  updatedAt: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Job ID is required' });
  }

  if (req.method === 'GET') {
    try {
      // Mock job retrieval
      const job: Job = {
        id,
        title: 'Frontend Developer',
        description: 'Build responsive web applications',
        category: 'development',
        requiredSkills: ['React', 'TypeScript', 'CSS'],
        budgetMinUsd: 5000,
        budgetMaxUsd: 10000,
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        job
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to retrieve job'
      });
    }
  } else if (req.method === 'PATCH') {
    try {
      const { title, description, category, requiredSkills, budgetMinUsd, budgetMaxUsd, deliveryDeadlineIso, status } = req.body;

      // Mock job update
      const updatedJob: Job = {
        id,
        title: title || 'Updated Job Title',
        description: description || 'Updated job description',
        category: category || 'development',
        requiredSkills: requiredSkills || [],
        budgetMinUsd,
        budgetMaxUsd,
        deliveryDeadlineIso,
        status: status || 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        job: updatedJob
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to update job'
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PATCH']);
    res.status(405).end('Method Not Allowed');
  }
}