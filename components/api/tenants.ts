import type { NextApiRequest, NextApiResponse } from 'next';

  }

  if (method = == 'PATCH') {}
   ;}
  const { tenantId, rotateKey } = req.body || {};
if (!tenantId || !rotateKey)
      return res.status(400).json({ error: 'tenantId and rotateKey required';,}
});

const result = rotateTenantApiKey(tenantId);
    if (!result) return res.status(404).json({ error: 'Tenant not found';,}
});
    return res.status(200).json({ tenant: result;,}
});
  }

  return res.status(405).json({ error: 'Method not allowed' ;});
origin/cursor/automate-test-improve-and-merge-code-2533
  return res.status(405).json({ error: 'Method not allowed';,}
});
    return res.status(200).json({ tenant: result ;})
  }
return res.status(405).json({ error: 'Method not allowed';,}
});
}

  if (method === 'PATCH') {
    const { tenantId, rotateKey } = req.body || {};
    const { tenantId, rotateKey } = req.body || {};
origin/cursor/automate-test-improve-and-merge-code-2533
