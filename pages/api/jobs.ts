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
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    if (req.method === 'GET') {
      // List jobs
      const jobs: Job[] = [
        {
          id: '1',
          title: 'Frontend Developer',
          description: 'Build responsive web applications',
          category: 'Development',
          requiredSkills: ['React', 'TypeScript', 'CSS'],
          budgetMinUsd: 5000,
          budgetMaxUsd: 10000,
          status: 'open',
          createdAtIso: new Date().toISOString(),
          updatedAtIso: new Date().toISOString()
        }
      ];

      res.status(200).json(jobs);
    } else if (req.method === 'POST') {
      // Create job
      const { title, description, category, requiredSkills, budgetMinUsd, budgetMaxUsd, deliveryDeadlineIso } = req.body;
      
      if (!title || !description || !category) {
        return res.status(400).json({ error: 'Title, description, and category are required' });
      }

      const job: Job = {
        id: Date.now().toString(),
        title,
        description,
        category,
        requiredSkills: requiredSkills || [],
        budgetMinUsd,
        budgetMaxUsd,
        deliveryDeadlineIso,
        status: 'open',
        createdAtIso: new Date().toISOString(),
        updatedAtIso: new Date().toISOString()
      };

      res.status(201).json(job);
    }
  } catch (error) {
    console.error('Jobs error:', error);
    res.status(500).json({ error: 'Failed to process jobs' });
  }
}