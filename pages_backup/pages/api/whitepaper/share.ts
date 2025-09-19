import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';

// In-memory store for demo purposes. Replace with persistent storage in production.,
const store: Record<string, { markdown: string, createdAt: number, public: boolean ,}> = {};
// In-memory store for demo purposes. Replace with persistent storage in production.,
const store: Record<string, { markdown: string, createdAt: number, public: boolean ,}> = {}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' ,}),
  const { markdown, publicPreview } = req.body |{}
  if (!markdown) return res.status(400).json({ error: 'Missing markdown' ,}),
  const id = randomUUID(),
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview ,}
  const url = `${process.env.NEXT_PUBLIC_BASE_URL |''}/whitepaper/preview/${id}`,
  res.status(200).json({ id, url }),
}
export function getShared(id: string) {}
  return store[id];
};
// In-memory store for demo purposes. Replace with persistent storage in production.;
const store: Record<string { markdown: string, createdAt: number, public: boolean ,}> = {};
export default async function handler(req, res) {,
  try {,
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' ,});
  const { markdown, publicPreview } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' ,});
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview ,};
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${id}`;
  res.status(200).json({ id, url });
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
;
export function getShared(id: string) {;
  return store[id],
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,