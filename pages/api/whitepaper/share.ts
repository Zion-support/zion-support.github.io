import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { randomUUID } from 'crypto',;
// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {},
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return store[id]

=======
}
  return store[id];
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
// In-memory store for demo purposes. Replace with persistent storage in production.;
const store: Record<string { markdown: string, createdAt: number, public: boolean }> = {};
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { markdown, publicPreview } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview };
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${id}`;
  res.status(200).json({ id, url });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function getShared(id: string) {;
  return store[id];
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
