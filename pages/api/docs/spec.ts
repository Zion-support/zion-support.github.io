<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
export default function handler(req, res) {
  try {
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
import { NextApiRequest, NextApiResponse } from 'next';

const v1 = {
  version: '1.0.0',
  endpoints: [
    {
      path: '/api/health',
      method: 'GET',
      description: 'Health check endpoint'
    }
  ]
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(v1);
    return;
  }

  res.setHeader('Allow', 'GET');
  res.status(405).end('Method Not Allowed');
>>>>>>> main
}