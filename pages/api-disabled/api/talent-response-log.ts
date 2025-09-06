:pages/api/talent-response-log.ts

import type { NextApiRequest, NextApiResponse } from 'next',
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST');
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/talent-response-log.ts
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  const { talentId, action } = req.body |{}
  if (!talentId |!['AcceptDeclineNegotiate'].includes(action)) {;

    return res.status(400).json({ error: 'Invalid payload' })
  }
:pages/api/talent-response-log.ts
  // Placeholder for persistence, echo the response for now

  // Placeholder for persistence, echo the response for now;

  const payload = { talentId, action, at: new Date().toISOString() }
;
  return res.status(200).json({ ok: true, data: payload })
};
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/talent-response-log.ts
