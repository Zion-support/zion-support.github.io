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
  if (req.method === 'GET') {
    try {
      // Mock jobs list
      const jobs: Job[] = [
        {
          id: '1',
          title: 'Frontend Developer',
          description: 'Build responsive web applications',
          category: 'development',
          requiredSkills: ['React', 'TypeScript', 'CSS'],
          budgetMinUsd: 5000,
          budgetMaxUsd: 10000,
          status: 'open',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];

      res.status(200).json({
        success: true,
        jobs
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to retrieve jobs'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, description, category, requiredSkills, budgetMinUsd, budgetMaxUsd, deliveryDeadlineIso } = req.body;

      if (!title || !description || !category) {
        return res.status(400).json({ error: 'Title, description, and category are required' });
      }

      // Mock job creation
      const newJob: Job = {
        id: Date.now().toString(),
        title,
        description,
        category,
        requiredSkills: requiredSkills || [],
        budgetMinUsd,
        budgetMaxUsd,
        deliveryDeadlineIso,
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        job: newJob
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to create job'
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
  }
}