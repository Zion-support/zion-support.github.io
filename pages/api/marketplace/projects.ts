import type { NextApiRequest, NextApiResponse } from 'next';

interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  status: 'draft' | 'published' | 'in-progress' | 'completed';
  createdAt: string;
  updatedAt: string;
}

function getDemoUser() {
  return {
    id: 'demo-user-id',
    role: 'client',
    email: 'demo@example.com'
  };
}

function getProjectById(id: string): Project | null {
  // TODO: Implement actual project fetching
  return {
    id,
    title: 'Sample Project',
    description: 'A sample project description',
    clientId: 'demo-client-id',
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

function canAccess(user: ReturnType<typeof getDemoUser>, project: Project) {
  if (user.role === 'admin') return true;
  if (user.role === 'client' && user.id === project.clientId) return true;
  return false;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = getDemoUser();
    const { id } = req.query as { id?: string };
    
    if (!id) {
      return res.status(400).json({ error: 'Project ID required' });
    }

    const project = getProjectById(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    if (!canAccess(user, project)) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    if (req.method === 'GET') {
      return res.status(200).json({ project });
    }

    if (req.method === 'PUT') {
      const { title, description, status } = req.body || {};
      const updatedProject = {
        ...project,
        title: title || project.title,
        description: description || project.description,
        status: status || project.status,
        updatedAt: new Date().toISOString()
      };
      return res.status(200).json({ project: updatedProject });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error handling project request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}