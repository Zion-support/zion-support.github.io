import type { NextApiRequest, NextApiResponse } from 'next';

const store: Record<string, any> = (global as any).ZION_DID_STORE || {};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

}