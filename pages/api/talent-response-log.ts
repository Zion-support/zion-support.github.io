import type { NextApiRequest, NextApiResponse } from 'next',
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
import type { NextApiRequest, NextApiResponse } from 'next'
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
>>>>>>> main
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  const { talentId, action } = req.body |{}
  if (!talentId |!['AcceptDeclineNegotiate'].includes(action)) {
import type { NextApiRequest, NextApiResponse } from 'next';
res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { talentId, action } = req.body || {};
  if (!talentId || !['Accept', 'Decline', 'Negotiate'].includes(action)) {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  // Placeholder for persistence; echo the response for now
  const payload = { talentId, action, at: new Date().toISOString() };
  return res.status(200).json({ ok: true, data: payload });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

    return res.status(400).json({ error: 'Invalid payload' })
  }
  // Placeholder for persistence, echo the response for now

  const payload = { talentId, action, at: new Date().toISOString() }

  return res.status(200).json({ ok: true, data: payload })
};

  const payload = { talentId, action, at: new Date().toISOString() }

  const payload = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return res.status(200).json({ ok: true, data: payload })
  const payload = { talentId, action, at: new Date().toISOString() },
  return res.status(200).json({ ok: true, data: payload });
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
export default function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}

;
export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ('AllowPOST'),
    return res.status (405).json ({ error: 'Method Not Allowed' });
  }
  const { talent_id, action } = req.body || {},
  if () {) {
  $2
}
    return res.status (400).json ({ error: 'Invalid payload' });
  }
  // Placeholder for persistence, echo the response for now;


};
