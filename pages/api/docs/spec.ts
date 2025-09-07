import type { NextApiRequest, NextApiResponse } from 'next';

const v1 = {
  openapi: '3.0.0',
  info: {
    title: 'Zion Tech Group API',
    version: '1.0.0',
    description: 'API specification for Zion Tech Group services'
  },
  paths: {
    '/api/auth/login': {
      post: {
        summary: 'User login',
        description: 'Authenticate user and return session token'
      }
    }
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(v1);
}