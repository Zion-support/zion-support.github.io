import type { NextApiRequest, NextApiResponse } from 'next';
import { agendaItems } from '../../../../data/expo/agenda';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD
) {
  const { id } = req.query as { id?: string }
=======
) {;
  const { id } = req.query as { id?: string };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const item = agendaItems.find(i => i.id === id);
  if (!item) return res.status(404).send('Not found');
  const transcript = `Transcript for ${item.title} (Track: ${item.track}, Time: ${item.time})\n\n[00:00] Intro...\n[05:00] Key points...\n[15:00] Q&A...`;
  res.setHeader('Content-Type', 'text/plain');
<<<<<<< HEAD
  res.status(200).send(transcript);export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id?: string }
=======
  res.status(200).send(transcript);export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { id } = req.query as { id?: string };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const item = agendaItems.find(i => i.id === id);
  if (!item) return res.status(404).send('Not found');
  const transcript = `Transcript for ${item.title} (Track: ${item.track}, Time: ${item.time})\n\n[00: 00] Intro...\n[05:00] Key points...\n[15:00] Q&A...`;
  res.setHeader('Content-Typetext/plain')

  res.status(200).send(transcript)
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
