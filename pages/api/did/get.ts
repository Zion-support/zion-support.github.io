<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},
=======

const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string },
  if (!address) return res.status(400).json({ error: 'Missing address' });
<<<<<<< HEAD
  const data = null;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const { address } = req.query as { address?: string }
  if (!address) return res.status(400).json({ error: 'Missing address' })
  const data = store[String(address).toLowerCase()] |null

  return res.status(200).json({ data })
<<<<<<< HEAD
}
=======
  
}

const data = store[String(address).toLowerCase()] || null;
  return res.status(200).json({ data });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
  const { address } = req.query as { address?: string },
  if (!address) return res.status(400).json({ error: 'Missing address' }),
  const data = store[String(address).toLowerCase()] || null,
  return res.status(200).json({ data });
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
