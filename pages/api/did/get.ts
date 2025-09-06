<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
export default function handler(req: NextApiRequest, res: NextApiResponse) {

const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
export default function handler(req: any, res: any) {
  res.status(200).json({ store });
import type { NextApiRequest, NextApiResponse } from 'next';
=======

import type { NextApiRequest, NextApiResponse } from 'next',;
;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};

=======
<<<<<<< HEAD
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string };
<<<<<<< HEAD
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
  if (!address) return res.status(400).json({ error: 'Missing address' });
  const data = store[String(address).toLowerCase()] || null;
  return res.status(200).json({ data })
}
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next',
;
const store: Record < string, any> = (global as any).__ZION_DID_STORE__ || {},
export default /**
 * handler - Function description
 */
function handler() {
  const { address } = req.query as { address?: string },
  if (return res.status (400).json ({ error: 'Missing address' }), ) {
  $2
}
  const data = store[String (address).toLowerCase ()] || null,
  return res.status (200).json ({ data });
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next',;
;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string }
  if (!address) return res.status(400).json({ error: 'Missing address' })
  const data = store[String(address).toLowerCase()] |null

  return res.status(200).json({ data })
  const { address } = req.query as { address?: string },
  if (!address) return res.status(400).json({ error: 'Missing address' }),
  const data = store[String(address).toLowerCase()] || null,
  return res.status(200).json({ data });
};
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
export default function handler(req: any, res: any) {
  res.status(200).json({ store });
import type { NextApiRequest, NextApiResponse } from 'next';
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
export default function handler(req, res) {
  try {
  const { address } = req.query as { address?: string };
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
