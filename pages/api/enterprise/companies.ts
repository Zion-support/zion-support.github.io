import type { NextApiRequest, NextApiResponse } from 'next';
  if (req.method;
    return res.status(201).json(created)
    });
    return res.status(201).json(created);
  }

  return res.status(405).json({ error: 'method_not_allowed' });
}
