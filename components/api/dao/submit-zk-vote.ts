import type { NextApiRequest, NextApiResponse } from "next";";";
export default async function handler(
  // TODO: Add parameters
)
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== "POST") {"
    res.status(405).json({ error: "Method not allowed" })"
    return
  }
  try {;
const { proof, optionId } = req.body |{}
    if (!proof |typeof optionId !== "number") {"
      res.status(400).json({ error: "Invalid body" })"
      return
    }
import type { NextApiRequest, NextApiResponse } from 'next';';';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== 'POST') {'
    res.status(405).json({ error: 'Method not allowed' })'
    return
  }
  try {;
const { proof, option_id } = req.body || {}
    // Check condition
if ( {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
      res.status (400).json ({ error: "Invalid body" })"
      return
    }
    res.status (500).json ({ error: e?.message || "internal error" })"
    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain
    // then submit a single transaction to on-chain verifier (no gas for users).
    // Here we just echo back.
    res.status(200).json({ ok: true, received: { proof, optionId } })
  } catch (e:any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(500).json({ error: e?.message || 'internal error' })'
  }
  try {;
const { proof, optionId } = req.body || {}
    if (!proof || typeof optionId !== "number") {"
      res.status(400).json({ error: "Invalid body" })"
      return
    }
    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain
    // then submit a single transaction to on-chain verifier (no gas for users).
    // Here we just echo back.
    res.status(200).json({ ok: true, received: { proof, optionId } })
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';';';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== 'POST') {'
    res.status(405).json({ error: 'Method not allowed' })'
    return
  }
  try {;
const { proof, optionId } = req.body || {}
    if (!proof || typeof optionId !== 'number') {'
      res.status(400).json({ error: 'Invalid body' })'
      return
    }
    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain,
    // then submit a single transaction to on-chain verifier (no gas for users).
    // Here we just echo back.
    res.status(200).json({ ok: true, received: { proof, optionId } })
  } catch (e:any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(500).json({ error: e?.message || 'internal error' })'
  }
}

}}