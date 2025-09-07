import type { NextApiRequest, NextApiResponse } from 'next;
import { readJsonFile, writeJsonFile } from ../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {



<<<<<<< HEAD
  res.status(200).json(record)
}