import type { NextApiRequest, NextApiResponse } from 'next';

interface Milestone {
  id: string;
  projectId: string;
  name: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in_progress' | 'completed' | 'overdue';
  createdAt: string;
  updatedAt: string;
}

const milestones: Milestone[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { projectId } = req.query;
    
    if (!projectId || typeof projectId !== 'string') {
      return res.status(400).json({ error: 'Project ID is required' });
    }

    if (req.method === 'GET') {
      // Get milestones for project
      const projectMilestones = milestones.filter(m => m.projectId === projectId);
      res.status(200).json(projectMilestones);
    } else if (req.method === 'POST') {
      // Create milestone
      const { name, description, dueDate } = req.body;
      
      if (!name || !description || !dueDate) {
        return res.status(400).json({ error: 'Name, description, and due date are required' });
      }

      const milestone: Milestone = {
        id: Date.now().toString(),
        projectId,
        name,
        description,
        dueDate,
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      milestones.push(milestone);
      res.status(201).json(milestone);
    }
  } catch (error) {
    console.error('Project milestones error:', error);
    res.status(500).json({ error: 'Failed to process milestones' });
  }
}