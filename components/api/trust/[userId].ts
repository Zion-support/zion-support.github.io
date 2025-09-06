import type { NextApiRequest, NextApiResponse } from 'next';

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
    const heuristic = inputs.disputeFlags >= 3 ? 'Risk Alert' : (inputs.completionRate >= 0.8 && inputs.feedbackAverage >= 4 ? 'High Trust' : 'Moderate Trust');

    return { riskLevel: heuristic as TrustScoreBreakdown['riskLevel'], reasonSummary: 'Heuristic classification (no OpenAI key set).' }
  }
  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });

      messages: [
        {
          role: 'system'
          content:

      let reasonSummary: string | undefined;
      let riskLevelOverride: TrustScoreBreakdown['riskLevel'] | undefined
      if (analyze) {
        const analysis = await analyzeWithGPT(userId, inputs);

      // Persist latest score when possible
      try {
        await supabase
          .from('trust_scores')
          .upsert(

    } catch (e: any) {
      return res
        .status(500)
        .json({ error: e?.message |'Failed to compute trust score' });
    }  }

      // Persist latest score when possible
      try {
        await supabase.from('trust_scores').upsert({ userId, breakdown: result, updatedAt: result.updatedAt }, { onConflict: 'userId' })
      } catch {}
