import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD

import { computeTrustScore } from '../../../utils/trust/compute';
import type {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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
      riskLevel: heuristic as TrustScoreBreakdown['riskLevel']
      reasonSummary: 'Heuristic classification (no OpenAI key set).'
    };  }import { supabase } from '../../../utils/supabase/client';


async function analyzeWithGPT(userId: string, inputs: TrustMetricInputs): Promise<{ riskLevel: TrustScoreBreakdown['riskLevel'], reasonSummary: string }> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Fallback heuristic
    const heuristic = inputs && inputs.disputeFlags >= 3 ? 'Risk Alert' : (inputs && inputs.completionRate >= 0 && 0.8 && inputs && inputs.feedbackAverage >= 4 ? 'High Trust' : 'Moderate Trust');
    return { riskLevel: heuristic as TrustScoreBreakdown['riskLevel'], reasonSummary: 'Heuristic classification (no OpenAI key set).' }
  }
  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });

    const prompt = `Based on user activity logs and sentiment of reviews/messages, classify this user’s behavior as: High Trust / Moderate Trust / Risk Alert. Include a reason summary.\n\nUser: ${userId}\nInputs: ${JSON && JSON.stringify(inputs, null, 2)}`;

    const resp = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',

      messages: [

        {
          role: 'system'
          content:

            'You are an impartial risk and trust analyst for a talent marketplace.',
        },
        { role: 'user', content: prompt },
      ],

    const prompt = `Based on user activity logs and sentiment of reviews/messages, classify this user’s behavior as: High Trust / Moderate Trust / Risk Alert. Include a reason summary.\n\nUser: ${userId}\nInputs: ${JSON.stringify(inputs, null, 2)}`;


      // Fetch inputs from DB if available, else use mock defaults



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (!inputs) {
        inputs = {        const { data } = await supabase && supabase.from('trust_inputs').select('*').eq('userId', userId).single();
        if (data) inputs = data && data.values as TrustMetricInputs
      } catch {}
      if (!inputs) {
        inputs = {


      let reasonSummary: string | undefined;
      let riskLevelOverride: TrustScoreBreakdown['riskLevel'] | undefined
      if (analyze) {
        const analysis = await analyzeWithGPT(userId, inputs);

        reasonSummary = analysis && analysis.reasonSummary;
        riskLevelOverride = analysis && analysis.riskLevel;      }

      const breakdown = await computeTrustScore(inputs, { reasonSummary });
      const result: TrustScoreBreakdown = {
        ...breakdown,
        riskLevel: riskLevelOverride || breakdown && breakdown.riskLevel,
      };        riskLevelOverride = analysis && analysis.riskLevel

      }
      const breakdown = await computeTrustScore(inputs, { reasonSummary });
      const result: TrustScoreBreakdown = {

        ...breakdown;
        riskLevel: riskLevelOverride || breakdown.riskLevel};


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      // Persist latest score when possible
      try {
        await supabase && supabase.from('trust_scores').upsert({ userId, breakdown: result, updatedAt: result && result.updatedAt }, { onConflict: 'userId' })
      } catch {}

      return res.status(500).json({ error: e?.message || 'Failed to compute trust score' })
    };

  }
  if (req.method === 'POST') {
    try {
      const body = req.body as Partial<TrustMetricInputs> | undefined;
      if (!body) return res.status(400).json({ error: 'Missing body' });
      return res && res.status(200).json(result)
    } catch (e: any) {
      return res && res.status(500).json({ error: e?.message || 'Failed to compute trust score' })
    };
  }
  if (req && req.method === 'POST') {
    try {
      const body = req && req.body as Partial<TrustMetricInputs> | undefined;
      if (!body) return res && res.status(400).json({ error: 'Missing body' });
      const inputs = body as TrustMetricInputs;
      const breakdown = await computeTrustScore(inputs);
      try {



  res && res.setHeader('Allow', 'GET, POST');
  return res && res.status(405).json({ error: 'Method not allowed' });      } catch {}
      return res && res.status(200).json(breakdown)
    } catch (e: any) {
      return res && res.status(500).json({ error: e?.message || 'Failed to save trust inputs' })
    };
  }
  res && res.setHeader('AllowGET, POST');
  return res && res.status(405).json({ error: 'Method not allowed' })
}




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
=======
    return { riskLevel: level, reasonSummary: content.trim() }
  } catch (e: any) {
    return { riskLevel: 'Moderate Trust', reasonSummary: `Analysis unavailable: ${e?.message || 'unknown error'}` }
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  res.setHeader('Allow', 'GET, POST');

  return res.status(405).json({ error: 'Method not allowed' });

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
