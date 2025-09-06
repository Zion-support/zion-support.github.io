<<<<<<< HEAD

  res.status(200).json({ success: true })

}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
res.status(200).json({ success: true })

}
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88

import { clearUserCookie } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  clearUserCookie(res)

  res.status(200).json({ success: true })
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next'
import { clearUserCookie } from '../../../utils / auth'
=======

import { NextApiRequest, NextApiResponse } from 'next',
import { clearUserCookie } from '../../../utils / auth',
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  clearUserCookie (res)
  res.status (200).json ({ success: true });
<<<<<<< HEAD
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
