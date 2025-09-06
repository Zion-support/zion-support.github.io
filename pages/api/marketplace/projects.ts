import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

interface Project {
  id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  timeline: Array<{
    id: string;
    name: string;
    dueDate: string;
    completed: boolean;
  }>;
  notes: ProjectNote[];
  documents: ProjectDocument[];
}

interface ProjectNote {
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}

interface ProjectDocument {
  id: string;
  name: string;
  url: string;
  uploadedAtIso: string;
}

const projects: Project[] = [];

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: message
  });
}

function saveProject(project: Project) {
  const index = projects.findIndex(p => p.id === project.id);
  if (index >= 0) {
    projects[index] = project;
  } else {
    projects.push(project);
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      // Create project
      const { title, summary, clientId, talentSlug, startDateIso, timeline } = req.body;
      
      if (!title || !summary || !clientId || !talentSlug || !startDateIso) {
        return bad(res, 'Missing required fields');
      }

      const project: Project = {
        id: uuidv4(),
        title,
        summary,
        clientId,
        talentSlug,
        startDateIso,
        status: 'ACTIVE',
        timeline: timeline || [],
        notes: [],
        documents: []
      };

      saveProject(project);
      return res.status(201).json({
        ok: true,
        project
      });
    } else if (req.method === 'PATCH') {
      // Update project
      const { id, action, content, name, url, timeline } = req.body;
      
      if (!id || !action) {
        return bad(res, 'Project ID and action are required');
      }

      const project = projects.find(p => p.id === id);
      if (!project) {
        return bad(res, 'Project not found', 404);
      }

      if (action === 'add_note') {
        const note: ProjectNote = {
          id: uuidv4(),
          authorId: 'user123',
          authorRole: 'client',
          content,
          createdAtIso: new Date().toISOString()
        };
        project.notes.push(note);
        saveProject(project);
        return res.json({
          ok: true,
          project
        });
      } else if (action === 'add_document') {
        const doc: ProjectDocument = {
          id: uuidv4(),
          name,
          url,
          uploadedAtIso: new Date().toISOString()
        };
        project.documents.push(doc);
        saveProject(project);
        return res.json({
          ok: true,
          project
        });
      } else if (action === 'update_timeline') {
        project.timeline = Array.isArray(timeline) ? timeline : project.timeline;
        saveProject(project);
        return res.json({
          ok: true,
          project
        });
      }

      return bad(res, 'Unknown action');
    } else if (req.method === 'GET') {
      // List projects
      return res.json({
        ok: true,
        projects
      });
    } else {
      res.setHeader('Allow', ['GET', 'POST', 'PATCH']);
      return res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error('Projects error:', error);
    return bad(res, 'Internal server error', 500);
  }
}