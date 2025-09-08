import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  try {
    const { id } = req.query;
    const course = courses.find((,
    c: any) => c.id === id);
    if (!course) return res.status(404).json({,
    error: 'Course not found' });
    res.status(200).json({ course })
  } catch (,
    e: any) {
    res.status(500).json({,
    error: e?.message ?? 'Failed to load course' })
  }
}