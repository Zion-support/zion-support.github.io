import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD:pages/api/did/get.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement get logic
    res.status(200).json({ message: 'get endpoint' });
  } catch (error) {
    console.error('Error in get:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
=======
;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {}

  if (!address) return res.status(400).json({ error: 'Missing address' });
  const data = store[String(address).toLowerCase()] || null;
  return res.status(200).json({ data })
}

}
  const data = store[String (address).toLowerCase ()] || null
  return res.status (200).json ({ data });
}

  const { address } = req.query as { address?: string }
  if (!address) return res.status(400).json({ error: 'Missing address' })
  const data = store[String(address).toLowerCase()] |null

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string },
  if (!address) return res.status(400).json({ error: 'Missing address' });

  return res.status(200).json({ data });
};
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
export default function handler(req: any, res: any) {};
  res.status(200).json({ store });'
import type { NextApiRequest, NextApiResponse } from 'next';

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {};
  const { address } = req.query as { address?: string };

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

}
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api/did/get.ts
}