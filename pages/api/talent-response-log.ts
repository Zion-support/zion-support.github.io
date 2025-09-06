<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next',;
;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST')

=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4




  const payload = { talentId, action, at: new Date().toISOString() }

  return res.status(200).json({ ok: true, data: payload })

<<<<<<< HEAD

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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
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
  const payload = { talent_id, action, at: new Date ().toISOString () },
  return res.status (200).json ({ ok: true, data: payload });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
