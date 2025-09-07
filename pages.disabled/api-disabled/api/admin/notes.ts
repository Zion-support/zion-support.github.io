import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';

type Note = {
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
  updatedAt: number;
};

const NOTES_FILE = 'dataadminnotes.json';

function loadNotes(): Note[] {
  try {
    const fs = require('fs');
    if (!fs.existsSync(NOTES_FILE)) return [];
    const data = fs.readFileSync(NOTES_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading notes:', error);
    return [];
  }
}

function saveNotes(notes: Note[]): void {
  try {
    const fs = require('fs');
    fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
  } catch (error) {
    console.error('Error saving notes:', error);
  }
}

export function getAllNotes(): Note[] {
  return loadNotes();
}

export function getNotesByTarget(targetType: string, targetId: string): Note[] {
  const notes = loadNotes();
  return notes.filter(note => note.targetType === targetType && note.targetId === targetId);
}

export function createNote(note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Note {
  const notes = loadNotes();
  const newNote: Note = {
    ...note,
    id: randomUUID(),
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  notes.push(newNote);
  saveNotes(notes);
  return newNote;
}

export function updateNote(id: string, updates: Partial<Pick<Note, 'text'>>): Note | null {
  const notes = loadNotes();
  const index = notes.findIndex(note => note.id === id);
  if (index === -1) return null;
  
  notes[index] = {
    ...notes[index],
    ...updates,
    updatedAt: Date.now()
  };
  saveNotes(notes);
  return notes[index];
}

export function deleteNote(id: string): boolean {
  const notes = loadNotes();
  const index = notes.findIndex(note => note.id === id);
  if (index === -1) return false;
  
  notes.splice(index, 1);
  saveNotes(notes);
  return true;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' });

  if (req.method === 'GET') {
    const { targetType, targetId } = req.query;
    
    if (targetType && targetId) {
      const notes = getNotesByTarget(targetType as string, targetId as string);
      return res.status(200).json({ notes });
    } else {
      const notes = getAllNotes();
      return res.status(200).json({ notes });
    }
  }

  if (req.method === 'POST') {
    const { targetType, targetId, text, authorId } = req.body;
    
    if (!targetType || !targetId || !text || !authorId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const note = createNote({ targetType, targetId, text, authorId });
    return res.status(201).json({ note });
  }

  if (req.method === 'PUT') {
    const { id, text } = req.body;
    
    if (!id || !text) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const note = updateNote(id, { text });
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    return res.status(200).json({ note });
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json({ error: 'Missing note ID' });
    }

    const deleted = deleteNote(id as string);
    if (!deleted) {
      return res.status(404).json({ error: 'Note not found' });
    }

    return res.status(200).json({ success: true });
  }

  res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
  return res.status(405).end('Method Not Allowed');
}