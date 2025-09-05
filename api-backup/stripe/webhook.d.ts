import { NextApiRequest, NextApiResponse } from 'next';

export declare const config: { api: { bodyParser: boolean } };
export default function handler(
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<void>;