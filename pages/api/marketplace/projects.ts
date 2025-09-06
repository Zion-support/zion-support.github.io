import type { NextApiRequest, NextApiResponse } from 'next';

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: message
  });
}

function canAccess(user: any, project: any) {
  return true; // Placeholder implementation
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { action, content, name, url, timeline } = req.body || {};
    
    if (req.method === 'POST') {
      const note = {
        id: Date.now().toString(),
        authorId: 'user-id',
        authorRole: 'user',
        content: content || '',
        createdAtIso: new Date().toISOString()
      };
      
      return res.json({
        ok: true,
        project: { notes: [note] }
      });
    }
    
    if (req.method === 'PATCH') {
      if (action === 'add-document') {
        const doc = {
          id: Date.now().toString(),
          name: name || '',
          url: url || '',
          uploadedAtIso: new Date().toISOString()
        };
        
        return res.json({
          ok: true,
          project: { documents: [doc] }
        });
      }
      
      if (action === 'update-timeline') {
        return res.json({
          ok: true,
          project: { timeline: timeline || [] }
        });
      }
      
      return res.json({
        ok: true,
        project: {}
      });
    }
    
    return bad(res, 'Unknown action');
  } catch (error) {
    return bad(res, 'Internal server error', 500);
  }
}