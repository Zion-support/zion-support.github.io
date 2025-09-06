<<<<<<< HEAD:pages/api-disabled/api/talent-response-log.ts
<<<<<<< HEAD:pages/api/talent-response-log.ts
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import type { NextApiRequest, NextApiResponse } from 'next',
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler($2) {;
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/talent-response-log.ts
=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/talent-response-log.ts
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  const { talentId, action } = req.body |{}
  if (!talentId |!['AcceptDeclineNegotiate'].includes(action)) {;

    return res.status(400).json({ error: 'Invalid payload' })
  }
<<<<<<< HEAD:pages/api/talent-response-log.ts
  // Placeholder for persistence, echo the response for now
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  // Placeholder for persistence, echo the response for now;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/talent-response-log.ts

  const payload = { talentId, action, at: new Date().toISOString() }
;
  return res.status(200).json({ ok: true, data: payload })
<<<<<<< HEAD:pages/api-disabled/api/talent-response-log.ts
<<<<<<< HEAD
  const payload = { talentId, action, at: new Date().toISOString() },
  return res.status(200).json({ ok: true, data: payload });
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
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
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
}

=======

=======
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next',
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
<<<<<<< HEAD


=======
  const payload = { talent_id, action, at: new Date ().toISOString () },
  return res.status (200).json ({ ok: true, data: payload });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/talent-response-log.ts
