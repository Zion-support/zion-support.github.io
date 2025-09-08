import type { NextApiRequest, NextApiResponse } from 'next';

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: message
  });
}

function canAccess(user: any, project: any) {
  return true; // Simplified access check
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const note = {
        id: 'temp-note-id',
        authorId: 'user-id',
        authorRole: 'user',
        content: 'Project note',
        createdAtIso: new Date().toISOString()
      };
      
      return res.json({
        ok: true,
        project: { notes: [note] }
      });
    }
    
    if (req.method === 'PUT') {
      const doc = {
        id: 'temp-doc-id',
        name: 'document.pdf',
        url: 'https://example.com/document.pdf',
        uploadedAtIso: new Date().toISOString()
      };
      
      return res.json({
        ok: true,
        project: { documents: [doc] }
      });
    }
    
    return bad(res, "Unknown action");
  } catch (error) {
    return bad(res, "Internal server error", 500);
  }
}