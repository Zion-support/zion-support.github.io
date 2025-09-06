import type { NextApiRequest, NextApiResponse } from 'next';
import { agendaItems } from '../../../../data/expo/agenda';
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id?: string };
  const item = null;
=======
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id } = req.query as { id?: string }
  const item = agendaItems.find(i => i.id === id);
  if (!item) return res.status(404).send('Not found');
  const transcript = `Transcript for ${item.title} (Track: ${item.track}, Time: ${item.time})\n\n[00:00] Intro...\n[05:00] Key points...\n[15:00] Q&A...`;
  res.setHeader('Content-Type', 'text/plain');
<<<<<<< HEAD
  res.status(200).send(transcript);export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id?: string }
  const item = agendaItems.find(i => i.id === id);
  if (!item) return res.status(404).send('Not found');
  const transcript = `Transcript for ${item.title} (Track: ${item.track}, Time: ${item.time})\n\n[00: 00] Intro...\n[05:00] Key points...\n[15:00] Q&A...`;
  res.setHeader('Content-Typetext/plain')
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  res.status(200).send(transcript)
}
=======
  res.status(200).send(transcript);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
