<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


import { randomUUID } from 'crypto';

// In-memory store for demo purposes. Replace with persistent storage in production.;
const store: Record<string { markdown: string, createdAt: number, public: boolean }> = {};
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
=======
// In-memory store for demo purposes. Replace with persistent storage in production.
const store: Record<string, { markdown: string, createdAt: number, public: boolean }> = {};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { markdown, publicPreview } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  store[id] = { markdown, createdAt: Date.now(), public: !!publicPreview };
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/whitepaper/preview/${id}`;
<<<<<<< HEAD
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

=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  res.status(200).json({ id, url })
}
export function getShared(id: string) {
  return store[id]
<<<<<<< HEAD

=======
}

=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
