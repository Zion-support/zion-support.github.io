}
=======
  res.status(200).json({ success: true })

}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { clearUserCookie } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  clearUserCookie(res)

  res.status(200).json({ success: true })

=======
}
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
}>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
