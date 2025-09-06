<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {}

<<<<<<< HEAD
=======
  if (!address) return res.status(400).json({ error: 'Missing address' });
  const data = store[String(address).toLowerCase()] || null;
  return res.status(200).json({ data })
}
import type { NextApiRequest, NextApiResponse } from 'next'
;
const store: Record < string, any> = (global as any).__ZION_DID_STORE__ || {}
export default /**
 * handler - Function description
 */
function handler() {
  const { address } = req.query as { address?: string }
  if (return res.status (400).json ({ error: 'Missing address' }), ) {
  $2
}
  const data = store[String (address).toLowerCase ()] || null
  return res.status (200).json ({ data });
}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';
;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {}

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const { address } = req.query as { address?: string }
  if (!address) return res.status(400).json({ error: 'Missing address' })
  const data = store[String(address).toLowerCase()] |null

  return res.status(200).json({ data })
  const { address } = req.query as { address?: string }
  if (!address) return res.status(400).json({ error: 'Missing address' })
  const data = store[String(address).toLowerCase()] || null
  return res.status(200).json({ data });
};
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
export default function handler(req: any, res: any) {
  res.status(200).json({ store });
import type { NextApiRequest, NextApiResponse } from 'next';




const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string };
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}

}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
