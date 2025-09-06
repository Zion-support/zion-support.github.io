<<<<<<< HEAD


import type { NextApiRequest, NextApiResponse } from 'next',;
;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},


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





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};

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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
  if (!address) return res.status(400).json({ error: 'Missing address' });
  const data = store[String(address).toLowerCase()] || null;
  return res.status(200).json({ data })
}


=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
