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
  if (req.method !== 'GET' && req.method !== 'PATCH' && req.method !== 'DELETE') {
    res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { projectId, milestoneId } = req.query;
    
    if (!projectId || typeof projectId !== 'string') {
      return res.status(400).json({ error: 'Project ID is required' });
    }

    if (!milestoneId || typeof milestoneId !== 'string') {
      return res.status(400).json({ error: 'Milestone ID is required' });
    }

    const milestone = milestones.find(m => m.id === milestoneId && m.projectId === projectId);
    if (!milestone) {
      return res.status(404).json({ error: 'Milestone not found' });
    }

    if (req.method === 'GET') {
      // Get milestone
      res.status(200).json(milestone);
    } else if (req.method === 'PATCH') {
      // Update milestone
      const { name, description, dueDate, status } = req.body;
      
      if (name) milestone.name = name;
      if (description) milestone.description = description;
      if (dueDate) milestone.dueDate = dueDate;
      if (status) milestone.status = status;
      milestone.updatedAt = new Date().toISOString();

      res.status(200).json(milestone);
    } else if (req.method === 'DELETE') {
      // Delete milestone
      const index = milestones.findIndex(m => m.id === milestoneId);
      if (index >= 0) {
        milestones.splice(index, 1);
      }
      res.status(200).json({ message: 'Milestone deleted successfully' });
    }
  } catch (error) {
    console.error('Milestone error:', error);
    res.status(500).json({ error: 'Failed to process milestone' });
  }
}