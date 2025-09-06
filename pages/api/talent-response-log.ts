<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  const { talentId, action } = req.body |{}
  if (!talentId |!['AcceptDeclineNegotiate'].includes(action)) {

    return res.status(400).json({ error: 'Invalid payload' })
  }
  // Placeholder for persistence, echo the response for now
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const payload = { talentId, action, at: new Date().toISOString() }

  return res.status(200).json({ ok: true, data: payload })
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
