import { NextApiRequest, NextApiResponse } from 'next';
import { getDemoUser } from '../../../utils/marketplace/auth';
import { Project, ProjectDocument, ProjectNote } from '../../../utils/marketplace/types';

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message });
}

function isValidProject(project: any): project is Project {
  return project && typeof project.title === 'string' && typeof project.description === 'string';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = getDemoUser(req);
    const { id } = (req.method === 'GET' ? req.query : req.body) as { id?: string };
    
    if (req.method === 'GET') {
      if (!id) {
        return bad(res, 'Project ID is required');
      }
      
      // Mock project data
      const project = {
        id,
        title: 'Sample Project',
        description: 'A sample project description',
        clientId: user.id,
        status: 'active',
        createdAt: new Date().toISOString()
      };
      
      return res.status(200).json({ project });
    }
    
    if (req.method === 'POST') {
      const { title, description } = req.body;
      if (!title || !description) {
        return bad(res, 'Title and description are required');
      }
      
      const project: Project = {
        id: Date.now().toString(),
        title,
        description,
        clientId: user.id,
        status: 'active',
        createdAt: new Date().toISOString()
      };
      
      return res.status(201).json({ project });
    }
    
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Server error' });
  }
}