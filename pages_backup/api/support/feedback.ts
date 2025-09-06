<<<<<<< HEAD
<<<<<<< HEAD:pages/api/support/feedback.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean },
  if (!articleId || helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' }),

  const feedback = readJson<any[]>('support/feedback.json', []),
  feedback.push({ articleId, helpful, ts: Date.now() }),
  writeJson('support/feedback.json', feedback),
<<<<<<< HEAD
  return res.status(200).json({ ok: true });
};
import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { readJson, writeJson } from '../../../utils/fsDb';
=======

;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb'
main
;

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/support/feedback.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean }
  if (!articleId |helpful === undefined) return res.status(400).json({ error: 'articleId and helpful required' })
  const feedback = readJson<any[]>('support/feedback.json', [])
  feedback.push({ articleId, helpful, ts: Date.now() })
  writeJson('support/feedback.json', feedback)
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/support/feedback.ts

<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/support/feedback.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { articleId, helpful } = req.body as { articleId: string, helpful: boolean },
  if (!articleId || helpful;
origin/cursor/automate-test-improve-and-merge-code-2533
  return res.status(200).json({ ok: true })
};
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/support/feedback.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/support/feedback.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
