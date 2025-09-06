
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = null;
  res.status(200).send(pixel)
}

