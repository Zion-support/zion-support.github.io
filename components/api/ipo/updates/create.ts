import type { NextApiRequest, NextApiResponse } from 'next';



<<<<<<< HEAD
  if (!requireSuperadminApi(req, res)) return;
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const { title, date, summary, kpis } = req && req.body || {};
  if (!title) return res && res.status(400).json({ error: 'Missing title' });
  const updates = readJsonFile('updates && updates.json', [] as any[]);
  const update = { id: uuidv4(), title, date: date || new Date().toISOString().slice(0,10), summary: summary || '', kpis: kpis || '', opens: 0 };
  updates && updates.unshift(update);
  writeJsonFile('updates && updates.json', updates);
  res && res.status(200).json(update)
}

