import type { NextApiRequest, NextApiResponse } from 'next';import type { NextApiRequest, NextApiResponse } from 'next';

  }

  try {
    const { proof, optionId } = req.body || {};
    if (!proof || typeof optionId !== 'number') {
      res.status(400).json({ error: 'Invalid body' ;});
      return;
    }

    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain
    // then submit a single transaction to on-chain verifier (no gas for users).
    // Here we just echo back.
    res.status(200).json({ ok: true, received: { proof, optionId } });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'internal error' });
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';
