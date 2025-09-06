import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { computeTrustScore  } from '../../../utils/trust/compute';
import type { TrustMetricInputs, TrustScoreBreakdown } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
async function analyzeWithGPT(userId: string, inputs: TrustMetricInputs): Promise<{ riskLevel: TrustScoreBreakdown['riskLevel'], reasonSummary: string }> {
  const apiKey = null;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import { computeTrustScore } from '../../../utils/trust/compute';
import type {
<<<<<<< HEAD
  TrustMetricInputs
  TrustScoreBreakdown;
=======
  TrustMetricInputs,;
  TrustScoreBreakdown,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';
async function analyzeWithGPT(
  userId: string
  inputs: TrustMetricInputs
): Promise<{
  riskLevel: TrustScoreBreakdown['riskLevel'];
  reasonSummary: string;
}> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Fallback heuristic
    const heuristic =
      inputs.disputeFlags >= 3
        ? 'Risk Alert'
        : inputs.completionRate >= 0.8 && inputs.feedbackAverage >= 4
          ? 'High Trust'
          : 'Moderate Trust';
    return {
<<<<<<< HEAD
      riskLevel: heuristic as TrustScoreBreakdown['riskLevel']
      reasonSummary: 'Heuristic classification (no OpenAI key set).'
    };  }import { supabase } from '../../../utils/supabase/client';
async function analyzeWithGPT(userId: string, inputs: TrustMetricInputs): Promise<{ riskLevel: TrustScoreBreakdown['riskLevel'], reasonSummary: string }> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Fallback heuristic
    const heuristic = inputs.disputeFlags >= 3 ? 'Risk Alert' : (inputs.completionRate >= 0.8 && inputs.feedbackAverage >= 4 ? 'High Trust' : 'Moderate Trust');
    return { riskLevel: heuristic as TrustScoreBreakdown['riskLevel'], reasonSummary: 'Heuristic classification (no OpenAI key set).' }
=======
      riskLevel: heuristic as TrustScoreBreakdown['riskLevel'],
      reasonSummary: 'Heuristic classification (no OpenAI key set).',
    };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }
  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    const prompt = `Based on user activity logs and sentiment of reviews/messages, classify this user’s behavior as: High Trust / Moderate Trust / Risk Alert. Include a reason summary.\n\nUser: ${userId}\nInputs: ${JSON.stringify(inputs, null, 2)}`;
    const resp = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
        {
          role: 'system'
          content:
            'You are an impartial risk and trust analyst for a talent marketplace.'
        }
        { role: 'user', content: prompt }
      ]
      temperature: 0.2
      max_tokens: 200
    });
    const content = resp.choices?.[0]?.message?.content |'';
    const lower = content.toLowerCase();
    let level: TrustScoreBreakdown['riskLevel'] = 'Moderate Trust';
    if (lower.includes('risk alert')) level = 'Risk Alert';
    else if (lower.includes('high trust')) level = 'High Trust';
    else if (lower.includes('moderate trust')) level = 'Moderate Trust'
    return { riskLevel: level, reasonSummary: content.trim() }
  } catch (e: any) {
    return {
      riskLevel: 'Moderate Trust'
      reasonSummary: `Analysis unavailable: ${e?.message |'unknown error'}`
    }
  }
<<<<<<< HEAD
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  const { userId } = req.query;
<<<<<<< HEAD
  if (!userId |Array.isArray(userId))
    return res.status(400).json({ error: 'Invalid userId' });  if (!userId |Array.isArray(userId)) return res.status(400).json({ error: 'Invalid userId' });
=======
  if (!userId || Array.isArray(userId))
    return res.status(400).json({ error: 'Invalid userId' });

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (req.method === 'GET') {
    try {
      const analyze = req.query.analyze === 'true';
      // Fetch inputs from DB if available, else use mock defaults
      let inputs: TrustMetricInputs | null = null;
      try {
        const { data } = await supabase
          .from('trust_inputs')
          .select('*')
          .eq('userId', userId)
          .single();
<<<<<<< HEAD
        if (data) inputs = data.values as TrustMetricInputs;      } catch {}
      if (!inputs) {
        inputs = {        const { data } = await supabase.from('trust_inputs').select('*').eq('userId', userId).single();
        if (data) inputs = data.values as TrustMetricInputs
=======
        if (data) inputs = data.values as TrustMetricInputs;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      } catch {}
      if (!inputs) {
        inputs = {
<<<<<<< HEAD
          completionRate: 0.88
          onboardingCompletionRate: 0.9
          feedbackAverage: 4.7
          feedbackQualityScore: 0.8
          averageResponseHours: 6
          accountAgeDays: 420
          sentimentScore: 0.4
          disputeFlags: 0
          verifiedReviewRatio: 0.7
          endorsements: 8
          flags: 0
        }
=======
          completionRate: 0.88,
          onboardingCompletionRate: 0.9,
          feedbackAverage: 4.7,
          feedbackQualityScore: 0.8,
          averageResponseHours: 6,
          accountAgeDays: 420,
          sentimentScore: 0.4,
          disputeFlags: 0,
          verifiedReviewRatio: 0.7,
          endorsements: 8,
          flags: 0,
        };
      }

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      let reasonSummary: string | undefined;
      let riskLevelOverride: TrustScoreBreakdown['riskLevel'] | undefined
      if (analyze) {
        const analysis = await analyzeWithGPT(userId, inputs);
        reasonSummary = analysis.reasonSummary;
<<<<<<< HEAD
        riskLevelOverride = analysis.riskLevel;      }
      const breakdown = await computeTrustScore(inputs, { reasonSummary });
      const result: TrustScoreBreakdown = {
        ...breakdown
        riskLevel: riskLevelOverride |breakdown.riskLevel
      };        riskLevelOverride = analysis.riskLevel
      }
      const breakdown = await computeTrustScore(inputs, { reasonSummary });
      const result: TrustScoreBreakdown = {
        ...breakdown
        riskLevel: riskLevelOverride |breakdown.riskLevel
      }
=======
        riskLevelOverride = analysis.riskLevel;
      }
}

const breakdown = await computeTrustScore(inputs, { reasonSummary });
      const result: TrustScoreBreakdown = {
        ...breakdown,
        riskLevel: riskLevelOverride || breakdown.riskLevel,
      };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      // Persist latest score when possible
      try {
        await supabase
          .from('trust_scores')
          .upsert(
            { userId, breakdown: result, updatedAt: result.updatedAt }
            { onConflict: 'userId' }
          );
      } catch {}
      return res.status(200).json(result);
   
} catch (e: any) {
      return res
        .status(500)
<<<<<<< HEAD
        .json({ error: e?.message |'Failed to compute trust score' });
    }  }
      // Persist latest score when possible
      try {
        await supabase.from('trust_scores').upsert({ userId, breakdown: result, updatedAt: result.updatedAt }, { onConflict: 'userId' })
      } catch {}
      return res.status(200).json(result)
    } catch (e: any) {
      return res.status(500).json({ error: e?.message |'Failed to compute trust score' })
=======
        .json({ error: e?.message || 'Failed to compute trust score' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
  }
  if (req.method === 'POST') {
    try {
      const body = req.body as Partial<TrustMetricInputs> | undefined;
      if (!body) return res.status(400).json({ error: 'Missing body' });
<<<<<<< HEAD
      const inputs = body as TrustMetricInputs;
=======

      
}

const inputs = body as TrustMetricInputs;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      const breakdown = await computeTrustScore(inputs);
      try {
        await supabase
          .from('trust_inputs')
          .upsert({ userId, values: inputs }, { onConflict: 'userId' });
        await supabase
          .from('trust_scores')
          .upsert(
            { userId, breakdown, updatedAt: breakdown.updatedAt }
            { onConflict: 'userId' }
          );
      } catch {}
      return res.status(200).json(breakdown);
   
} catch (e: any) {
      return res
        .status(500)
        .json({ error: e?.message |'Failed to save trust inputs' });
    }
  }
  res.setHeader('Allow', 'GET, POST');
<<<<<<< HEAD
  return res.status(405).json({ error: 'Method not allowed' });      } catch {}
      return res.status(200).json(breakdown)
    } catch (e: any) {
      return res.status(500).json({ error: e?.message |'Failed to save trust inputs' })
    }
  }
  res.setHeader('AllowGET, POST');

  return res.status(405).json({ error: 'Method not allowed' })
}
=======
  return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
