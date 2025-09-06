import type { NextApiRequest, NextApiResponse } from 'next';
import { computeTrustScore } from '../../../utils/trust/compute';
import type { TrustMetricInputs, TrustScoreBreakdown } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
async function analyzeWithGPT(userId: string, inputs: TrustMetricInputs): Promise<{ riskLevel: TrustScoreBreakdown['riskLevel'], reasonSummary: string}> {
  const apiKey = $2;
  if (!apiKey) {
    // Fallback heuristic
    const heuristic = $2;
    return { riskLevel: heuristic as TrustScoreBreakdown['riskLevel'], reasonSummary: 'Heuristic classification (no OpenAI key set).' }
  }

  try {
    const { OpenAI } = await import($2);
    const client = new OpenAI($2);
    const prompt = `Based on user activity logs and sentiment of reviews/messages, classify this user’s behavior as: High Trust / Moderate Trust / Risk Alert. Include a reason summary.\n\nUser: ${userId}\nInputs: ${JSON.stringify(inputs, null, 2)}`,

    const resp = await client.chat.completions.create($2);
    const content = $2;
    const lower = content.toLowerCase($2);
    let level: TrustScoreBreakdown['riskLevel'] = 'Moderate Trust',
    if (lower.includes('risk alert')) level = $2;
    else if (lower.includes('high trust')) level = $2;
    else if (lower.includes('moderate trust')) level = $2;
    return { riskLevel: level, reasonSummary: content.trim() }
  } catch (e: any) {
    return { riskLevel: 'Moderate Trust', reasonSummary: `Analysis unavailable: ${e?.message || 'unknown error'}` }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query,
  if (!userId || Array.isArray(userId)) return res.status(400).json($2);
  if (req.method = $2;
      // Fetch inputs from DB if available, else use mock defaults
      let inputs: TrustMetricInputs | null = $2;
      try {
        const { data } = await supabase.from('trust_inputs').select('*').eq('userId', userId).single($2);
        if (data) inputs = $2;
          onboardingCompletionRate: 0.9,
          feedbackAverage: 4.7,
          feedbackQualityScore: 0.8,
          averageResponseHours: 6,
          accountAgeDays: 420,
          sentimentScore: 0.4,
          disputeFlags: 0,
          verifiedReviewRatio: 0.7,
          endorsements: 8,
          flags: 0}
      }

      let reasonSummary: string | undefined,
      let riskLevelOverride: TrustScoreBreakdown['riskLevel'] | undefined,
      if (analyze) {
        const analysis = await analyzeWithGPT($2);
        reasonSummary = $2;
        riskLevelOverride = analysis.riskLevel
      }

      const breakdown = await computeTrustScore($2);
      const result: TrustScoreBreakdown = $2;
        riskLevel: riskLevelOverride || breakdown.riskLevel},

      // Persist latest score when possible
      try {
        await supabase.from('trust_scores').upsert({ userId, breakdown: result, updatedAt: result.updatedAt }, { onConflict: 'userId' })
      } catch {}

      return res.status(200).json(result)
    } catch (e: any) {
      return res.status(500).json({ error: e ?.message || 'Failed to compute trust score' })
    }
  }

  if (req.method = $2;
      if (!body) return res.status(400).json($2);
      const inputs = $2;
      const breakdown = await computeTrustScore($2);
      try {
        await supabase.from('trust_inputs').upsert($2);
        await supabase.from('trust_scores').upsert({ userId, breakdown, updatedAt: breakdown.updatedAt }, { onConflict: 'userId' })
      } catch {}

      return res.status(200).json(breakdown)
    } catch (e: any) {
      return res.status(500).json({ error: e ?.message || 'Failed to save trust inputs' })
    }
  }

  res.setHeader($2);
  return res.status(405).json({ error: 'Method not allowed' })
}