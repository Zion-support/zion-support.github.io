<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/did/get.ts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/did/get.ts
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
main


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
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



import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {}

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
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';
;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {}

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/did/get.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/did/get.ts
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const { address } = req.query as { address?: string }
  if (!address) return res.status(400).json({ error: 'Missing address' })
  const data = store[String(address).toLowerCase()] |null

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string },
  if (!address) return res.status(400).json({ error: 'Missing address' });
  const data = store[String(address).toLowerCase()] || null;
return res.status(200).json({ data });
origin/cursor/automate-test-improve-and-merge-code-2533

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
<<<<<<< HEAD:pages_backup/api/did/get.ts
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/did/get.ts
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/did/get.ts
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/did/get.ts
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

}
}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/did/get.ts
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/did/get.ts
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
