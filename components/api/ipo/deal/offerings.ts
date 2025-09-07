import type { NextApiRequest, NextApiResponse } from 'next';

  if (!requireSuperadminApi(req, res)) return;

  return res.status(405).json({ error: 'Method not allowed',}
});
    return res.status(200).json({ ok: true });
  }
return res.status(405).json({ error: 'Method not allowed',}
});
}

