import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
  const terms = null;
  res.status(200).json(terms)
}
