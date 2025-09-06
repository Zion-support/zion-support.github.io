<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { getUserFromRequest } from '../../../utils/auth';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { NextApiRequest, NextApiResponse } from 'next',;
import { getUserFromRequest } from '../../../utils/auth',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req),
  if (!user) return res.status(200).json({ user: null }),
  res.status(200).json({ user });
};
import { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { getUserFromRequest } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req)
  if (!user) return res.status(200).json({ user: null })

  res.status(200).json({ user })
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { NextApiRequest, NextApiResponse } from 'next',
import { getUserFromRequest } from '../../../utils / auth',
export default /**
 * handler - Function description
 */
function handler() {
  const user = getUserFromRequest (req),
  if (return res.status (200).json ({ user: null }), ) {
  $2
}
  res.status (200).json ({ user });
}
;


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function handler(req, res) {
  try {
  const user = getUserFromRequest(req);
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
