<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';'

  if (!requireSuperadminApi(req, res)) return;

return res.status(405).json({ "error": 'Method not allowed',;'
});
return res.status(200).json(offerings);
  }
return res.status(405).json({ "error": 'Method not allowed',;'
});
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  if (req.method === 'GET') {
    const offerings = readJsonFile($2);
    return res.status(200).json(offerings)
  }
  if (req.method = $2;
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token },
    writeJsonFile($2);
    return res.status(200).json(offerings)
  }
  return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}