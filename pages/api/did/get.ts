
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next';
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}

}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
