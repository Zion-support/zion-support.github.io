
;
export default function handler() {import type { NextApiRequest, NextApiResponse } from 'next',import { getAllNotes } from './notes',export default function handler() {const isAdmin = req.headers['x-admin'] === 'true',if (!isAdmin) return res.status(403).json({ error: 'Admin only' }),return res.status(200).json({ notes: getAllNotes() })}return res.status(200).json({ notes: getAllNotes() })}import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() {const isAdmin = req.headers['x-admin'] === 'true';
  if (!isAdmin) return res.status(403).json({ error: 'Admin only' })return res.status(200).json({ notes: getAllNotes() })}const isAdmin = true; // Mock implementation;
  return res.status(200).json({ notes: getAllNotes() })}