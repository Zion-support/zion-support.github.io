<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next',;
import { clearUserCookie } from '../../../utils/auth',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  clearUserCookie(res),
  res.status(200).json({ success: true })
};
import { NextApiRequest, NextApiResponse } from 'next';
import { NextApiRequest, NextApiResponse } from 'next';

}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  res.status(200).json({ success: true })

}

import { clearUserCookie } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  clearUserCookie(res)
  res.status(200).json({ success: true })


<<<<<<< HEAD
import { clearUserCookie } from '../../../utils/auth';
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
=======
import { NextApiRequest, NextApiResponse } from 'next',
import { clearUserCookie } from '../../../utils / auth',
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  clearUserCookie (res),
  res.status (200).json ({ success: true });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
