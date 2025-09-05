import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_TrustMetricInputs, _TrustScoreBreakdown} from '../../../utils/types/trust';

async function analyzeWithGPT(_userId: string, _inputs: TrustMetricInputs): Promise<{_riskLevel: TrustScoreBreakdown['riskLevel']; reasonSummary: string}> {_const _apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Fallback heuristic
    const _heuristic = inputs.disputeFlags >= 3 ? 'Risk Alert' : (inputs.completionRate >= 0.8 && inputs.feedbackAverage >= 4 ? 'High Trust' : 'Moderate Trust');
    return { riskLevel: heuristic as TrustScoreBreakdown['riskLevel'], _reasonSummary: 'Heuristic classification (no OpenAI key set).'};
  }

  try {_const { OpenAI} = await import('openai');
    const _client = new OpenAI({_apiKey});
    const _prompt = `Based on user activity logs and sentiment of reviews/messages, classify this user’s behavior as: High Trust / Moderate Trust / Risk Alert. Include a reason summary.\n\nUser: ${_userId}\nInputs: ${_JSON.stringify(inputs, _null, _2)}`;

    const _resp = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'You are an impartial risk and trust analyst for a talent marketplace.'},
        {_role: 'user', _content: prompt}],
      temperature: 0.2,
      max_tokens: 200});

    const _content = resp.choices?.[0]?.message?.content || '';
    const _lower = content.toLowerCase();
    let level: TrustScoreBreakdown['riskLevel'] = 'Moderate Trust';
    if (lower.includes('risk alert')) level = 'Risk Alert';
    else if (lower.includes('high trust')) level = 'High Trust';
    else if (lower.includes('moderate trust')) level = 'Moderate Trust';

    return {_riskLevel: level, _reasonSummary: content.trim()};
  } catch (e: unknown) {_return { riskLevel: 'Moderate Trust', _reasonSummary: `Analysis unavailable: ${e?.message || 'unknown error'}` };
  }
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { userId} = req.query;
  if (!userId || Array.isArray(userId)) return res.status(400).json({_error: 'Invalid userId'});

  if (req.method === 'GET') {_try {
      const _analyze = req.query.analyze === 'true';

      // Fetch inputs from DB if available, _else use mock defaults
      let inputs: TrustMetricInputs | null = null;
      try {
        const { data} = await supabase.from('trust_inputs').select('*').eq('userId', userId).single();
        if (data) inputs = data.values as TrustMetricInputs;
      } catch {}

      if (!inputs) {_inputs = {
          completionRate: 0.88, _onboardingCompletionRate: 0.9, _feedbackAverage: 4.7, _feedbackQualityScore: 0.8, _averageResponseHours: 6, _accountAgeDays: 420, _sentimentScore: 0.4, _disputeFlags: 0, _verifiedReviewRatio: 0.7, _endorsements: 8, _flags: 0};
      }

      let reasonSummary: string | undefined;
      let riskLevelOverride: TrustScoreBreakdown['riskLevel'] | undefined;
      if (analyze) {_const _analysis = await analyzeWithGPT(userId, _inputs);
        reasonSummary = analysis.reasonSummary;
        riskLevelOverride = analysis.riskLevel;}

      const _breakdown = await computeTrustScore(inputs, {_reasonSummary});
      const result: TrustScoreBreakdown = {_...breakdown, _riskLevel: riskLevelOverride || breakdown.riskLevel};

      // Persist latest score when possible
      try {_await supabase.from('trust_scores').upsert({ userId, _breakdown: result, _updatedAt: result.updatedAt}, {_onConflict: 'userId'});
      } catch {}

      return res.status(200).json(result);
    } catch (e: unknown) {_return res.status(500).json({ error: e?.message || 'Failed to compute trust score'});
    }
  }

  if (req.method === 'POST') {_try {
      const _body = req.body as Partial<TrustMetricInputs> | undefined;
      if (!body) return res.status(400).json({ error: 'Missing body'});

      const _inputs = body as TrustMetricInputs;
      const _breakdown = await computeTrustScore(inputs);

      try {_await supabase.from('trust_inputs').upsert({ userId, _values: inputs}, {_onConflict: 'userId'});
        await supabase.from('trust_scores').upsert({_userId, _breakdown, _updatedAt: breakdown.updatedAt}, {_onConflict: 'userId'});
      } catch {}

      return res.status(200).json(breakdown);
    } catch (e: unknown) {_return res.status(500).json({ error: e?.message || 'Failed to save trust inputs'});
    }
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({_error: 'Method not allowed'});
}