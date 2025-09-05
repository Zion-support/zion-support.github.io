import type {_NextApiRequest, _NextApiResponse} from 'next'

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed'})
    return
  }
  try {_const { proof, _optionId} = req.body || {}
    if (!proof || typeof optionId !== 'number') {_res.status(400).json({ error: 'Invalid body'})
      return
    }

    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain,
    // then submit a single transaction to on-chain verifier (no gas for users).
    // Here we just echo back.

    res.status(200).json({_ok: true, _received: { proof, _optionId} })
  } catch (e: unknown) {_res.status(500).json({ error: e?.message || 'internal error'})
  }
}