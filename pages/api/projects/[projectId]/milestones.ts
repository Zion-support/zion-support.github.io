import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { projectId } = req.query;
      
      if (!projectId || typeof projectId !== 'string') {
        return res.status(400).json({ error: 'Invalid project ID' });
      }

      // Placeholder for milestones retrieval logic
      const milestones = [];
      res.status(200).json({ success: true, milestones });
    } catch (error) {
      console.error('Milestones retrieval error:', error);
      res.status(500).json({ error: 'Failed to fetch milestones' });
    }
  } else if (req.method === 'POST') {
    try {
      const { projectId } = req.query;
      const { title, description, dueDate } = req.body || {};
      
      if (!projectId || typeof projectId !== 'string') {
        return res.status(400).json({ error: 'Invalid project ID' });
      }

      if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
      }

      // Placeholder for milestone creation logic
      res.status(201).json({ success: true, message: 'Milestone created' });
    } catch (error) {
      console.error('Milestone creation error:', error);
      res.status(500).json({ error: 'Failed to create milestone' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}