import type { NextApiRequest, NextApiResponse } from 'next';

import { computeTrustScore  } from '../../../utils/trust/compute';
import type { TrustMetricInputs, TrustScoreBreakdown } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
async function analyzeWithGPT(userId: string, inputs: TrustMetricInputs): Promise<{ riskLevel: TrustScoreBreakdown['riskLevel'], reasonSummary: string }> {
  const apiKey = null;

  return res.status(405).json({ error: 'Method not allowed' })
}
