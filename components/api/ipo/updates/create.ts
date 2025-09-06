import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile  } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
import { v4 as uuidv4 } from 'uuid';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  res.status(200).json(update);
  res.status(200).json(update)
}
