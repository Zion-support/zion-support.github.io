<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

}

}

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean };
  if (!articleId || helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' });
  const feedback = readJson<any[]>('support/feedback.json', []);
  feedback.push({ articleId, helpful, ts: Date.now() });
  writeJson('support/feedback.json', feedback);
  return res.status(200).json({ ok: true })
}
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
}

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',;
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean },
  if (!articleId || helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' }),

  const feedback = readJson<any[]>('support/feedback.json', []),
  feedback.push({ articleId, helpful, ts: Date.now() }),
  writeJson('support/feedback.json', feedback),
  return res.status(200).json({ ok: true });
};
import type { NextApiRequest, NextApiResponse } from 'next';

import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean }
  if (!articleId |helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' })
  const feedback = readJson<any[]>('support/feedback.json', [])
  feedback.push({ articleId, helpful, ts: Date.now() })
  writeJson('support/feedback.json', feedback)

  return res.status(200).json({ ok: true })
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const feedback = readJson<any[]>('support/feedback.json', []),;
  feedback.push({ articleId, helpful, ts: Date.now() });
  writeJson('support/feedback.json', feedback);
  return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
