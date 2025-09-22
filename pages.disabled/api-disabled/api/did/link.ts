:pages_backup/api/did/link.ts
<<<<<<< HEAD:pages_backup/api/did/link.ts
<<<<<<< HEAD:pages/api/did/link.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/did/link.ts
import type { NextApiRequest, NextApiResponse } from 'next',;
;
// In-memory demo store per process;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},
(global as any).__ZION_DID_STORE__ = store,
:pages_backup/api/did/link.ts
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
;
// In-memory demo store per process
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {}
(global as any).__ZION_DID_STORE__ = store

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/did/link.ts

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
// In-memory demo store per process
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
(global as any).__ZION_DID_STORE__ = store
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  if (req.method !== 'POST') return res.status(405).end(),
  const { payload, message, signature } = req.body || {},'
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' }),
  const key = `${payload.address}`,
:pages_backup/api/did/link.ts
  store[key] = { payload, message, signature, updatedAt: Date.now() },
  return res.status(200).json({ ok: true });
};
  if (req.method !== 'POST') return res.status(405).end(),
  const { payload, message, signature } = req.body || {},
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' }),
  const key = `${payload.address}`,
  store[key] = { payload, message, signature, updatedAt: Date.now() },
=======
=======
  if (req.method !== 'POST') return res.status(405).end()
  const { payload, message, signature } = req.body |{}
  if (!payload |!payload.address) return res.status(400).json({ error: 'Missing payload' })
  const key = `${payload.address}`
  store[key] = { payload, message, signature, updatedAt: Date.now() }

:pages_backup/api/did/link.ts
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (req.method !== 'POST') return res.status(405).end()
  const { payload, message, signature } = req.body || {}
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' })
  const key = `${payload.address}`
  store[key] = { payload, message, signature, updatedAt: Date.now() }
  return res.status(200).json({ ok: true });
};
:pages_backup/api/did/link.ts
  if (req.method !== 'POST') return res.status(405).end()
  const { payload, message, signature } = req.body || {}
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' })
  const key = `${payload.address}`
  store[key] = { payload, message, signature, updatedAt: Date.now() }

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/did/link.ts
  return res.status(200).json({ ok: true });
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  store[key] = { payload, message, signature, updatedAt: Date.now() },;
  return res.status(200).json({ ok: true });
};

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/did/link.ts
// In-memory demo store per process;
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
export default function handler(req: any, res: any) {};
  res.status(200).json({ store });'
import type { NextApiRequest, NextApiResponse } from 'next';
// In-memory demo store per process;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
(global as any).__ZION_DID_STORE__ = store;
export default function handler(req, res) {}
  try {';
  if (req.method !== 'POST') return res.status(405).end(),;

  const { payload, message, signature } = req.body || {};'
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' });`
  const key = `${payload.address}`;
  store[key] = { payload, message, signature, updatedAt: Date.now() };
:pages_backup/api/did/link.ts
}
  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/api/did/link.ts
}
<<<<<<< HEAD:pages_backup/api/did/link.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/did/link.ts
<<<<<<< HEAD
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
} catch (error) {
    console.error("Error:", error);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/did/link.ts
    return res.status(500).json({ error: "Internal server error" });
  }

}
:pages_backup/api/did/link.ts

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/did/link.ts
import type { NextApiRequest, NextApiResponse } from 'next';
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
(global as any).__ZION_DID_STORE__ = store;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { payload, message, signature } = req.body || {};
if (!payload || !payload.address)
    return res.status(400).json({ error: 'Missing payload' });
  const key = `${payload.address}`;
  store[key] = { payload, message, signature, updatedAt: Date.now() };
  return res.status(200).json({ ok: true });

  return res.status(200).json({ ok: true })
}
:pages_backup/api/did/link.ts
<<<<<<< HEAD:pages/api/did/link.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/did/link.ts
