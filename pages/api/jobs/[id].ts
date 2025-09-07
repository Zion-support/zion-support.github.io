import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid job ID' });
      }

      // Placeholder for job retrieval logic
      const job = { id, title: 'Sample Job', description: 'Sample job description' };
      res.status(200).json({ success: true, job });
    } catch (error) {
      console.error('Job retrieval error:', error);
      res.status(500).json({ error: 'Failed to fetch job' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const { title, description } = req.body || {};
      
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid job ID' });
      }

      if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
      }

      // Placeholder for job update logic
      res.status(200).json({ success: true, message: 'Job updated' });
    } catch (error) {
      console.error('Job update error:', error);
      res.status(500).json({ error: 'Failed to update job' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid job ID' });
      }

      // Placeholder for job deletion logic
      res.status(200).json({ success: true, message: 'Job deleted' });
    } catch (error) {
      console.error('Job deletion error:', error);
      res.status(500).json({ error: 'Failed to delete job' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}