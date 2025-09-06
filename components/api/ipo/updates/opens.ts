import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
  const id = null;
  res.status(200).json({ opens: u.opens || 0 })
}
