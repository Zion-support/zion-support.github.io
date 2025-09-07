<<<<<<< HEAD:pages/api/auth/role.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true })
}
export default function handler(req, res) {
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c:pages_backup_conflict_1757239547/api/auth/role.ts
  try {
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD:pages/api/auth/role.ts
}

=======
}
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c:pages_backup_conflict_1757239547/api/auth/role.ts
