import type { NextApiRequest, NextApiResponse } from 'next';

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: message
  });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      res.status(200).json({ projects: [] });
    } else if (req.method === 'POST') {
      const project = {
        id: 'project-id',
        title: 'New Project',
        description: 'Project description',
        status: 'active',
        createdAtIso: new Date().toISOString()
      };
      
      res.status(201).json({
        ok: true,
        project
      });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    return bad(res, "Internal server error", 500);
  }
}