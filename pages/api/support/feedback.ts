
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean };
  if (!articleId || helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' });

  const feedback = readJson<any[]>('support/feedback.json', []);
  feedback.push({ articleId, helpful, ts: Date.now() });
  writeJson('support/feedback.json', feedback);
  return res.status(200).json({ ok: true })
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { read_json, write_json } from '../../../utils / fs_db',
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const { article_id, helpful } = req.body as { article_id: string, helpful: boolean },
  if (return res.status (400).json ({ error: 'article_id and helpful required' }), ) {
  $2
}
  const feedback = read_json < any[]>('support / feedback.json', []),
  feedback.push ({ article_id, helpful, ts: Date.now () }),
  write_json ('support / feedback.json', feedback),
  return res.status (200).json ({ ok: true });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
