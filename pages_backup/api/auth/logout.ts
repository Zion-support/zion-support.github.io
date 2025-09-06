  res.status(200).json({ success: true })

}



import { clearUserCookie } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  clearUserCookie(res)

import { NextApiRequest, NextApiResponse } from 'next';
import { clearUserCookie } from '../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  clearUserCookie(res);
origin/cursor/automate-test-improve-and-merge-code-2533
  res.status(200).json({ success: true })
import { NextApiRequest, NextApiResponse } from 'next'
import { clearUserCookie } from '../../../utils / auth'

export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  clearUserCookie (res)
  res.status (200).json ({ success: true });
}


<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/auth/logout.ts
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/auth/logout.ts
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/auth/logout.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/auth/logout.ts
=======



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
