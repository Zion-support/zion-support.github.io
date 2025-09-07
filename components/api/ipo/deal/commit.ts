
=======
import type { NextApiRequest, NextApiResponse } from 'next;
import { readJsonFile, writeJsonFile } from ../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6


<<<<<<< HEAD
  res.status(200).json(record)
}