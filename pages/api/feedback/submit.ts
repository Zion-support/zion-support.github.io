import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).end();
  const { responseId, rating, comment, pagePath, aiModel } = req.body || {};
  if (!responseId || !rating || !['up', 'down'].includes(rating)) {
    return res.status(400).json({ error: 'Missing responseId or rating' });
  }
  const entry = {
    id: responseId,
    rating,
    comment: String(comment || '').slice(0, 2000),
    pagePath: String(pagePath || ''),
    aiModel: String(aiModel || ''),
    userAgent: req.headers['user-agent'] || '',
    ts: Date.now(),
  };
  const rows = readAll();
  rows.push(entry);
  writeAll(rows);
  return res.status(200).json({ ok: true });
