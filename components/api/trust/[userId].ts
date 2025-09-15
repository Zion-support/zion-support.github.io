import type { NextApiRequest, NextApiResponse } from 'next';
      }

      const breakdown = await computeTrustScore(inputs, { reasonSummary });
      const result: TrustScoreBreakdown = {
        ...breakdown,
  if (req.method === 'POST') {
    try {
      const body = req.body as Partial<TrustMetricInputs> | undefined;
      if (!body) return res.status(400).json({ error: 'Missing body' });

