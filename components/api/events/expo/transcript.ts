import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { id} = req.query as {_id?: string};
  const _item = agendaItems.find(i => i.id === id);
  if (!item) return res.status(404).send('Not found');
  const _transcript = `Transcript for ${_item.title} (Track: ${_item.track}, Time: ${_item.time})\n\n[00:00] Intro...\n[05:00] Key points...\n[15:00] Q&A...`;
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(transcript);
}