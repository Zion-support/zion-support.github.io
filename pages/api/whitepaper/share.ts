<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { markdown, publicPreview } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview };
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${id}`;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next',;
import { randomUUID } from 'crypto',;
// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {},
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

import { randomUUID } from 'crypto';

// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { markdown, publicPreview } = req.body |{}
  if (!markdown) return res.status(400).json({ error: 'Missing markdown' })
  const id = randomUUID()
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview }
  const url = `${process.env.NEXT_PUBLIC_BASE_URL |''}/whitepaper/preview/${id}`

  res.status(200).json({ id, url })
}
export function getShared(id: string) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return store[id]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
}
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
}

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

}
  return store[id];
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
// In-memory store for demo purposes. Replace with persistent storage in production.;
const store: Record<string { markdown: string, createdAt: number, public: boolean }> = {};
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { markdown, publicPreview } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview };
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${id}`;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next',
import { randomUUID } from 'crypto',
// In - memory store for demo purposes. Replace with persistent storage in production.;
const store: Record < string, { markdown: string, created_at: number, public: boolean }> = {},
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const { markdown, public_preview } = req.body || {},
  if (return res.status (400).json ({ error: 'Missing markdown' }), ) {
  $2
}
  const id = randomUUID (),
  store[id] = { markdown, created_at: Date.now (), public: !!public_preview },
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper / preview/${id}`,
  res.status (200).json ({ id, url });
}
export /**
 * get_shared - Function description
 */
function get_shared() {
  return store[id];
<<<<<<< HEAD
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { randomUUID } from 'crypto',;
// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {},

import { randomUUID } from 'crypto';

// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { markdown, publicPreview } = req.body |{}
  if (!markdown) return res.status(400).json({ error: 'Missing markdown' })
  const id = randomUUID()
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview }
  const url = `${process.env.NEXT_PUBLIC_BASE_URL |''}/whitepaper/preview/${id}`

  res.status(200).json({ id, url })
}
export function getShared(id: string) {
  return store[id]
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
