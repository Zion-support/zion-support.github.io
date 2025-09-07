import type { NextApiRequest, NextApiResponse } from 'next';'

  if (!requireSuperadminApi(req, res)) return;

  res.status(200).json(update);
  res.status(200).json(update)
}

