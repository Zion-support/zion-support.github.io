import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Mock DID store data
  const store: Record<string, any> = {
    'did:example:123': {
      id: 'did:example:123',
      publicKey: 'mock-public-key',
      service: 'zion-identity'
    }
  };

  res.status(200).json({ store });
}