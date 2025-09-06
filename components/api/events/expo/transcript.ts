import type { NextApiRequest, NextApiResponse } from 'next';
import { agendaItems } from '../../../../data/expo/agenda';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
  const { id } = req && req.query as { id?: string };
  const item = agendaItems && agendaItems.find(i => i && i.id === id);
  if (!item) return res && res.status(404).send('Not found');
  const transcript = `Transcript for ${item && item.title} (Track: ${item && item.track}, Time: ${item && item.time})\n\n[00:00] Intro...\n[05:00] Key points...\n[15:00] Q&A...`;
  res && res.setHeader('Content-Type', 'text/plain');
  res && res.status(200).send(transcript);export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const { id } = req && req.query as { id?: string };
  const item = agendaItems && agendaItems.find(i => i && i.id === id);
  if (!item) return res && res.status(404).send('Not found');
  const transcript = `Transcript for ${item && item.title} (Track: ${item && item.track}, Time: ${item && item.time})\n\n[00: 00] Intro...\n[05:00] Key points...\n[15:00] Q&A...`;
  res && res.setHeader('Content-Typetext/plain'),
  res && res.status(200).send(transcript)
}
