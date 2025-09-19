import type { NextApiRequest, NextApiResponse } from 'next',
;
// In-memory demo store per process,
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
(global as any).__ZION_DID_STORE__ = store;
  if (req.method !== 'POST') return res.status(405).end(),
  const { payload, message, signature } = req.body |{}
  if (!payload |!payload.address) return res.status(400).json({ error: 'Missing payload' ,}),
  const key = `${payload.address}`,
  store[key] = { payload, message, signature, updatedAt: Date.now() ,}
,
  return res.status(200).json({ ok: true ,}),
  if (req.method !== 'POST') return res.status(405).end();
  const { payload, message, signature } = req.body || {};
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' ,});
  const key = `${payload.address}`;
  store[key] = { payload, message, signature, updatedAt: Date.now() ,};
  return res.status(200).json({ ok: true ,});
};
// In-memory demo store per process;
const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
export default function handler(req: any, res: any) {,
  res.status(200).json({ store ,});
// In-memory demo store per process;
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {};
(global as any).__ZION_DID_STORE__ = store;
export default function handler(req, res) {,
  try {,
  if (req.method !== 'POST') return res.status(405).end();
  const { payload, message, signature } = req.body || {};
  if (!payload || !payload.address) return res.status(400).json({ error: 'Missing payload' ,});
  const key = `${payload.address}`;
  store[key] = { payload, message, signature, updatedAt: Date.now() ,};
  return res.status(200).json({ ok: true ,});
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
,
}
,
}
,