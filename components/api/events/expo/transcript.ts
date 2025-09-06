import type { NextApiRequest, NextApiResponse } from 'next';
import { agendaItems } from '../../../../data/expo/agenda';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id?: string },
  const item = agendaItems.find($2);
  if (!item) return res.status(404).send($2);
  const transcript = `Transcript for ${item.title} (Track: ${item.track}, Time: ${item.time})\n\n[00: 00] Intro...\n[05: 00] Key points...\n[15: 00] Q&A...`,
  res.setHeader($2);
  res.status(200).send(transcript)
}