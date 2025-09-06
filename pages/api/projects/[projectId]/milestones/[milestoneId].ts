import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'PATCH') {
    res.setHeader('Allow', 'GET, PATCH');
    res.status(405).end('Method Not Allowed');
  }

  try {
    const { projectId, milestoneId } = req.query;
    
    if (!projectId || typeof projectId !== 'string') {
      return res.status(400).json({ error: 'Project ID required' });
    }

    if (!milestoneId || typeof milestoneId !== 'string') {
      return res.status(400).json({ error: 'Milestone ID required' });
    }

    if (req.method === 'GET') {
      // Return milestone details
      const milestone = {
        id: milestoneId,
        projectId,
        title: 'Sample Milestone',
        description: 'This is a sample milestone',
        status: 'in_progress',
        progress: 60,
        dueDate: '2024-02-15',
        createdAt: '2024-01-01',
        updatedAt: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        milestone
      });
    } else if (req.method === 'PATCH') {
      // Update milestone
      const updates = req.body;
      
      const milestone = {
        id: milestoneId,
        projectId,
        ...updates,
        updatedAt: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        milestone
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}