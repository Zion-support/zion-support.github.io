<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
>>>>>>> pr-12243


import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======







import type { NextApiRequest, NextApiResponse } from 'next',;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  const { address } = req.query as { address?: string };
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (!address) return res.status(400).json({ error: 'Missing address' });
  const data = store[String(address).toLowerCase()] || null;
  return res.status(200).json({ data })
}
<<<<<<< HEAD
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
=======





'
import type { NextApiRequest, NextApiResponse } from 'next',;
;
const store: Record < string, any> = (global as any).__ZION_DID_STORE__ || {},
export default /**;
 * handler - Function description;
 */
function handler() {}
  const { address } = req.query as { address?: string },'
  if (return res.status (400).json ({ error: 'Missing address' }), ) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
  const data = store[String (address).toLowerCase ()] || null
  return res.status (200).json ({ data });
}
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';
;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {}

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
  const { address } = req.query as { address?: string }
  if (!address) return res.status(400).json({ error: 'Missing address' })
  const data = store[String(address).toLowerCase()] |null
=======

=======

import type { NextApiRequest, NextApiResponse } from 'next';


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string },
  if (!address) return res.status(400).json({ error: 'Missing address' });
<<<<<<< HEAD
  const data = store[String(address).toLowerCase()] || null;
return res.status(200).json({ data });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

  return res.status(200).json({ data })
  const { address } = req.query as { address?: string }
  if (!address) return res.status(400).json({ error: 'Missing address' })
  const data = store[String(address).toLowerCase()] || null
=======

  const { address } = req.query as { address?: string }'
  if (!address) return res.status(400).json({ error: 'Missing address' })
  const data = store[String(address).toLowerCase()] |null;
  return res.status(200).json({ data })
  const { address } = req.query as { address?: string },'
  if (!address) return res.status(400).json({ error: 'Missing address' }),
  const data = store[String(address).toLowerCase()] || null,
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return res.status(200).json({ data });
};
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
export default function handler(req: any, res: any) {};
  res.status(200).json({ store });'
import type { NextApiRequest, NextApiResponse } from 'next';




const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  const { address } = req.query as { address?: string };
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> pr-12243
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> pr-12243
}

}
}
<<<<<<< HEAD
=======
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
>>>>>>> pr-12243
=======






  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }


}









'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  const data = null;
  return res.status(200).json({ data })
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
