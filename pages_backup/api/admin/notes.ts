<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next',;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/notes.ts
import { randomUUID } from 'crypto',;
type Note = {
  id: string,
  targetType: string,
  targetId: string,
  text: string,
  authorId: string,
  createdAt: number
:pages/api/admin/notes.ts
<<<<<<< HEAD
}
const notesStore: Note[] = []
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
type Note = {
origin/cursor/automate-test-improve-and-merge-code-2533
id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};

const notesStore: Note[] = [];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true'
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })
  if (req.method === 'GET') {
}
  if (req.method === 'POST') {
    const authorId = String(req.headers['x-admin-user'] |'admin')
    const { targetType, targetId, text } = req.body |{}
    if (!targetType |!targetId |!text?.trim()) return res.status(400).json({ error: 'Missing fields' })
    const note: Note = { id: randomUUID(), targetType, targetId, text: String(text), authorId, createdAt: Date.now() }
    notesStore.push(note)
    return res.status(200).json({ ok: true, note })
  }
  return res.status(405).json({ error: 'Method not allowed' })
}
export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt)
}
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt);
};
import type { NextApiRequest, NextApiResponse } from 'next';

interface Note {
  id: string;
  targetType: string;
  targetId: string;
  content: string;
  author: string;
  createdAt: string;
}

let notesStore: Note[] = [];

export function getAllNotes(): Note[] {
  return notesStore;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const { targetType, targetId } = req.query;
      if (!targetType || Array.isArray(targetType)) return res.status(400).json({ error: 'Invalid targetType' });
      if (!targetId || Array.isArray(targetId)) return res.status(400).json({ error: 'Invalid targetId' });

      const notes = notesStore
        .filter((n) => n.targetType === targetType && n.targetId === targetId);
      res.json({ notes });
    } else if (req.method === 'POST') {
      const { targetType, targetId, content, author } = req.body;
      const note: Note = {
        id: Date.now().toString(),
        targetType,
        targetId,
        content,
        author,
        createdAt: new Date().toISOString()
      };
      notesStore.push(note);
      res.json({ note });
    } else {
      res.setHeader('Allow', 'GET, POST');
      res.status(405).end('Method Not Allowed');

    const authorId = String(req.headers['x-admin-user'] || 'admin');
    const { targetType, targetId, text } = req.body || {};
    if (!targetType || !targetId || !text?.trim()) {
      return res.status(400).json({ error: 'Missing fields' });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    const note: Note = {
      id: randomUUID(),
      targetType,
      targetId,
      text: String(text),
      authorId,
      createdAt: Date.now(),
    };
    notesStore.push(note);
    return res.status(200).json({ ok: true, note });
  }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function getAllNotes(): Note[] {

interface Note {
  id: string;
  targetType: string;
  targetId: string;
  content: string;
  author: string;
  createdAt: string;
}

let notesStore: Note[] = [];

export function getAllNotes(): Note[] {
  return notesStore;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const { targetType, targetId } = req.query;
      if (!targetType || Array.isArray(targetType)) return res.status(400).json({ error: 'Invalid targetType' });
      if (!targetId || Array.isArray(targetId)) return res.status(400).json({ error: 'Invalid targetId' });

      const notes = notesStore
        .filter((n) => n.targetType === targetType && n.targetId === targetId);
      res.json({ notes });
    } else if (req.method === 'POST') {
      const { targetType, targetId, content, author } = req.body;
      const note: Note = {
        id: Date.now().toString(),
        targetType,
        targetId,
        content,
        author,
        createdAt: new Date().toISOString()
      };
      notesStore.push(note);
      res.json({ note });
    } else {
      res.setHeader('Allow', 'GET, POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  if (req.method === 'POST') {
    const authorId = String(req.headers['x-admin-user'] || 'admin'),
    const { targetType, targetId, text } = req.body || {},
    if (!targetType || !targetId || !text?.trim()) return res.status(400).json({ error: 'Missing fields' }),
    const note: Note = { id: randomUUID(), targetType, targetId, text: String(text), authorId, createdAt: Date.now() },
    notesStore.push(note),
    return res.status(200).json({ ok: true, note })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}

export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt)
};
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/notes.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });

  if (req.method === 'GET') {
    const { targetType, targetId } = req.query;
    if (!targetType || Array.isArray(targetType))
      return res.status(400).json({ error: 'Invalid targetType' });
    if (!targetId || Array.isArray(targetId))
      return res.status(400).json({ error: 'Invalid targetId' });
    const notes = notesStore
      .filter(n => n.targetType === targetType && n.targetId === targetId)
      .sort((a, b) => b.createdAt - a.createdAt);
    return res.status(200).json({ notes });
  }

  if (req.method === 'POST') {
    const authorId = String(req.headers['x-admin-user'] || 'admin');
    const { targetType, targetId, text } = req.body || {};
    if (!targetType || !targetId || !text?.trim())
      return res.status(400).json({ error: 'Missing fields' });
    const note: Note = {
      id: randomUUID(),
      content: req.body.content || '',
      createdAt: new Date().toISOString()
    };
    return res.status(200).json({ ok: true, note });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

export function getAllNotes(): Note[] {
  return [...notesStore].sort((a, b) => b.createdAt - a.createdAt);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
