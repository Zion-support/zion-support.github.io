import type { NextApiRequest, NextApiResponse } from 'next';


<<<<<<< HEAD
<<<<<<< HEAD
import { computeTrustScore } from '../../../utils/trust/compute';
import type {
  TrustMetricInputs
  TrustScoreBreakdown;
  TrustMetricInputs,;
  TrustScoreBreakdown,;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
import type { TrustMetricInputs, TrustScoreBreakdown } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
import type { TrustMetricInputs, TrustScoreBreakdown } from '../../../utils/types/trust';
import { supabase } from '../../../utils/supabase/client';

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
async function analyzeWithGPT(userId: string, inputs: TrustMetricInputs): Promise<{ riskLevel: TrustScoreBreakdown['riskLevel'], reasonSummary: string }> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Fallback heuristic
<<<<<<< HEAD
<<<<<<< HEAD
    const heuristic = inputs.disputeFlags >= 3 ? 'Risk Alert' : (inputs.completionRate >= 0.8 && inputs.feedbackAverage >= 4 ? 'High Trust' : 'Moderate Trust');
=======
    const heuristic = inputs && inputs.disputeFlags >= 3 ? 'Risk Alert' : (inputs && inputs.completionRate >= 0 && 0.8 && inputs && inputs.feedbackAverage >= 4 ? 'High Trust' : 'Moderate Trust');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const heuristic = inputs && inputs.disputeFlags >= 3 ? 'Risk Alert' : (inputs && inputs.completionRate >= 0 && 0.8 && inputs && inputs.feedbackAverage >= 4 ? 'High Trust' : 'Moderate Trust');
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return { riskLevel: heuristic as TrustScoreBreakdown['riskLevel'], reasonSummary: 'Heuristic classification (no OpenAI key set).' }
  }
  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
<<<<<<< HEAD
<<<<<<< HEAD
    const prompt = `Based on user activity logs and sentiment of reviews/messages, classify this user’s behavior as: High Trust / Moderate Trust / Risk Alert. Include a reason summary.\n\nUser: ${userId}\nInputs: ${JSON.stringify(inputs, null, 2)}`;
    const resp = await client.chat.completions.create({
      model: 'gpt-4o-mini'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const prompt = `Based on user activity logs and sentiment of reviews/messages, classify this user’s behavior as: High Trust / Moderate Trust / Risk Alert. Include a reason summary.\n\nUser: ${userId}\nInputs: ${JSON && JSON.stringify(inputs, null, 2)}`;

    const resp = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      messages: [

        {
          role: 'system'
          content:
<<<<<<< HEAD
<<<<<<< HEAD
    const prompt = `Based on user activity logs and sentiment of reviews/messages, classify this user’s behavior as: High Trust / Moderate Trust / Risk Alert. Include a reason summary.\n\nUser: ${userId}\nInputs: ${JSON.stringify(inputs, null, 2)}`;
    const resp = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are an impartial risk and trust analyst for a talent marketplace.' };
        { role: 'user', content: prompt }];
      temperature: 0.2,
      max_tokens: 200});
    const content = resp.choices?.[0]?.message?.content || '';
  const { userId } = req && req.query;
  if (!userId || Array && Array.isArray(userId))
    return res && res.status(400).json({ error: 'Invalid userId' });  if (!userId || Array && Array.isArray(userId)) return res && res.status(400).json({ error: 'Invalid userId' });
  if (req && req.method === 'GET') {
    try {
      const analyze = req && req.query.analyze === 'true';
      // Fetch inputs from DB if available, else use mock defaults
        if (data) inputs = data && data.values as TrustMetricInputs;      } catch {}
      let inputs: TrustMetricInputs | null = null,
      try {
        const { data } = await supabase.from('trust_inputs').select('*').eq('userId', userId).single();
        if (data) inputs = data.values as TrustMetricInputs
      } catch {}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            'You are an impartial risk and trust analyst for a talent marketplace.',
        },
        { role: 'user', content: prompt },
      ],

    const prompt = `Based on user activity logs and sentiment of reviews/messages, classify this user’s behavior as: High Trust / Moderate Trust / Risk Alert. Include a reason summary.\n\nUser: ${userId}\nInputs: ${JSON.stringify(inputs, null, 2)}`;


      // Fetch inputs from DB if available, else use mock defaults



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (!inputs) {
        inputs = {        const { data } = await supabase && supabase.from('trust_inputs').select('*').eq('userId', userId).single();
        if (data) inputs = data && data.values as TrustMetricInputs
      } catch {}
      if (!inputs) {
        inputs = {
<<<<<<< HEAD
<<<<<<< HEAD
          completionRate: 0 && 0.88,
          onboardingCompletionRate: 0 && 0.9,
          feedbackAverage: 4 && 4.7,
          feedbackQualityScore: 0 && 0.8,
          averageResponseHours: 6,
          accountAgeDays: 420,
          sentimentScore: 0 && 0.4,
          disputeFlags: 0,
          verifiedReviewRatio: 0 && 0.7,
          endorsements: 8,
          flags: 0,
        };
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
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
  const { userId } = req.query;
  if (!userId |Array.isArray(userId))
    return res.status(400).json({ error: 'Invalid userId' });  if (!userId |Array.isArray(userId)) return res.status(400).json({ error: 'Invalid userId' });
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
        if (data) inputs = data.values as TrustMetricInputs;      } catch {}
      if (!inputs) {
        inputs = {        const { data } = await supabase.from('trust_inputs').select('*').eq('userId', userId).single();
        if (data) inputs = data.values as TrustMetricInputs
      } catch {}
      if (!inputs) {
        inputs = {
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      let reasonSummary: string | undefined;
      let riskLevelOverride: TrustScoreBreakdown['riskLevel'] | undefined
      if (analyze) {
        const analysis = await analyzeWithGPT(userId, inputs);
<<<<<<< HEAD
<<<<<<< HEAD
      }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        reasonSummary = analysis && analysis.reasonSummary;
        riskLevelOverride = analysis && analysis.riskLevel;      }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const breakdown = await computeTrustScore(inputs, { reasonSummary });
      const result: TrustScoreBreakdown = {
        ...breakdown,
        riskLevel: riskLevelOverride || breakdown && breakdown.riskLevel,
<<<<<<< HEAD
<<<<<<< HEAD
      };
        reasonSummary = analysis.reasonSummary;
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
        .json({ error: e?.message |'Failed to compute trust score' });
    }  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      };        riskLevelOverride = analysis && analysis.riskLevel

      }
      const breakdown = await computeTrustScore(inputs, { reasonSummary });
      const result: TrustScoreBreakdown = {

        ...breakdown;
        riskLevel: riskLevelOverride || breakdown.riskLevel};


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Persist latest score when possible
      try {
        await supabase && supabase.from('trust_scores').upsert({ userId, breakdown: result, updatedAt: result && result.updatedAt }, { onConflict: 'userId' })
      } catch {}
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(500).json({ error: e?.message || 'Failed to compute trust score' })
    };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      return res.status(500).json({ error: e?.message || 'Failed to compute trust score' })
    };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            { userId, breakdown, updatedAt: breakdown && breakdown.updatedAt },
            { onConflict: 'userId' }
          );
      } catch {}
      return res && res.status(200).json(breakdown);
    } catch (e: any) {
      return res
        .status(500)
        .json({ error: e?.message |'Failed to save trust inputs' });
    }
  }
        await supabase.from('trust_inputs').upsert({ userId, values: inputs }, { onConflict: 'userId' });
        await supabase.from('trust_scores').upsert({ userId, breakdown, updatedAt: breakdown.updatedAt }, { onConflict: 'userId' })
      } catch {}
      return res.status(200).json(breakdown)
    } catch (e: any) {
      return res.status(500).json({ error: e?.message |'Failed to save trust inputs' })
    }
  }
  res.setHeader('AllowGET, POST');
  return res.status(405).json({ error: 'Method not allowed' })
}
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const lower = content.toLowerCase ();
    let level: TrustScoreBreakdown['risk_level'] = 'Moderate Trust';
    if () level = 'Risk Alert') {
  $2
}
    else if () level = 'High Trust') {
  $2
}
    else if () level = 'Moderate Trust', ) {
  $2
}
    return { risk_level: level, reason_summary: content.trim () }
  } catch (e: any) {
    return {
      risk_level: 'Moderate Trust',
      reason_summary: `Analysis unavailable: ${e?.message || 'unknown error'}`,
    }
  }
export default async /**
 * handler - Function description
 */
function handler() {
  const { user_id } = req.query;
  if ()) {
  $2
}
    return res.status (400).json ({ error: 'Invalid user_id' });  if () return res.status (400).json ({ error: 'Invalid user_id' })) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    try {
      const analyze = req.query.analyze === 'true';
;
      // Fetch inputs from DB if available, else use mock defaults;
      let inputs: TrustMetricInputs | null = null;
      try {
        const { data } = await supabase;
          .from ('trust_inputs');
          .select ('*');
          .eq ('user_id', user_id);
          .single ();
        // Check condition
if (inputs = data.values as TrustMetricInputs) {
  $2
}      } catch {}
      // Check condition
if ( {) {
  $2
}
        inputs = {        const { data } = await supabase.from ('trust_inputs').select ('*').eq ('user_id', user_id).single ();
        // Check condition
if (inputs = data.values as TrustMetricInputs) {
  $2
}
      } catch {}
      // Check condition
if ( {) {
  $2
}
        inputs = {
          completion_rate: 0.88,
          onboardingCompletionRate: 0.9,
          feedback_average: 4.7,
          feedbackQualityScore: 0.8,
          averageResponseHours: 6,
          accountAgeDays: 420,
          sentiment_score: 0.4,
          dispute_flags: 0,
          verifiedReviewRatio: 0.7,
          endorsements: 8,
          flags: 0,
        }
;
      let reason_summary: string | undefined;
      let riskLevelOverride: TrustScoreBreakdown['risk_level'] | undefined,
      // Check condition
if ( {) {
  $2
}
        const analysis = await analyzeWithGPT (user_id, inputs);
        reason_summary = analysis.reason_summary;
        riskLevelOverride = analysis.risk_level;      }
      const breakdown = await computeTrustScore (inputs, { reason_summary });
      const result: TrustScoreBreakdown = {
        ...breakdown,
        risk_level: riskLevelOverride || breakdown.risk_level,
      }        riskLevelOverride = analysis.risk_level;
      }
      const breakdown = await computeTrustScore (inputs, { reason_summary });
      const result: TrustScoreBreakdown = {
        ...breakdown,
        risk_level: riskLevelOverride || breakdown.risk_level,
      }
;
      // Persist latest score when possible;
      try {
        await supabase;
          .from ('trust_scores');
          .upsert (
            { user_id, breakdown: result, updated_at: result.updated_at },
            { on_conflict: 'user_id' }
          );
      } catch {}
      return res.status (200).json (result);
    } catch (e: any) {
      return res;
        .status (500);
        .json ({ error: e?.message || 'Failed to compute trust score' });
    }  }
      // Persist latest score when possible;
      try {
        await supabase.from ('trust_scores').upsert ({ user_id, breakdown: result, updated_at: result.updated_at }, { on_conflict: 'user_id' });
      } catch {}
      return res.status (200).json (result);
    } catch (e: any) {
      return res.status (500).json ({ error: e?.message || 'Failed to compute trust score' });
    }
  }
  // Check condition
if ( {) {
  $2
}
    try {
      const body = req.body as Partial < TrustMetricInputs> | undefined;
      if (return res.status (400).json ({ error: 'Missing body' })) {
  $2
}
      const inputs = body as TrustMetricInputs;
      const breakdown = await computeTrustScore (inputs);
;
      try {
        await supabase;
          .from ('trust_inputs');
          .upsert ({ user_id, values: inputs }, { on_conflict: 'user_id' });
        await supabase;
          .from ('trust_scores');
          .upsert (
            { user_id, breakdown, updated_at: breakdown.updated_at },
            { on_conflict: 'user_id' }
          );
      } catch {}
      return res.status (200).json (breakdown);
    } catch (e: any) {
      return res;
        .status (500);
        .json ({ error: e?.message || 'Failed to save trust inputs' });
    }
  }
  res.set_header ('Allow', 'GET, POST');
  return res.status (405).json ({ error: 'Method not allowed' });      } catch {}
      return res.status (200).json (breakdown);
    } catch (e: any) {
      return res.status (500).json ({ error: e?.message || 'Failed to save trust inputs' });
    }
  }
  res.set_header ('AllowGET, POST');
  return res.status (405).json ({ error: 'Method not allowed' });

    const _resp = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'You are an impartial risk and trust analyst for a talent marketplace.'},
        {_role: 'user', _content: prompt}],
      temperature: 0.2,
      max_tokens: 200}),

    const content = resp.choices?.[0]?.message?.content || ''
    const lower = content.toLowerCase()
    let level: TrustScoreBreakdown['riskLevel'] = 'Moderate Trust'
    if (lower.includes('risk alert')) level = 'Risk Alert',
    else if (lower.includes('high trust')) level = 'High Trust',
    else if (lower.includes('moderate trust')) level = 'Moderate Trust',

    return { riskLevel: level, reasonSummary: content.trim() }
  } catch (e: any) {
    return { riskLevel: 'Moderate Trust', reasonSummary: `Analysis unavailable: ${e?.message || 'unknown error'}` }
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  res.setHeader('Allow', 'GET, POST');

  return res.status(405).json({ error: 'Method not allowed' });

<<<<<<< HEAD

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query
  if (!userId || Array.isArray(userId)) return res.status(400).json({ error: 'Invalid userId' }),

  if (req.method === 'GET') {
    try {
      const analyze = req.query.analyze === 'true'

      // Fetch inputs from DB if available, else use mock defaults
      let inputs: TrustMetricInputs | null = null
      try {
        const { data } = await supabase.from('trust_inputs').select('*').eq('userId', userId).single(),
        if (data) inputs = data.values as TrustMetricInputs
      } catch {}

      if (!inputs) {
        inputs = {
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
          flags: 0}
      }

      let reasonSummary: string | undefined
      let riskLevelOverride: TrustScoreBreakdown['riskLevel'] | undefined
      if (analyze) {
        const analysis = await analyzeWithGPT(userId, inputs),
        reasonSummary = analysis.reasonSummary,
        riskLevelOverride = analysis.riskLevel
      }

      const breakdown = await computeTrustScore(inputs, { reasonSummary }),
      const result: TrustScoreBreakdown = {
        ...breakdown,
        riskLevel: riskLevelOverride || breakdown.riskLevel},

      // Persist latest score when possible
      try {
        await supabase.from('trust_scores').upsert({ userId, breakdown: result, updatedAt: result.updatedAt }, { onConflict: 'userId' })
      } catch {}
      return res.status(200).json(result)
    } catch (e: any) {
      return res.status(500).json({ error: e?.message |'Failed to compute trust score' })
    }
  }
  if (req.method === 'POST') {
    try {
      const body = req.body as Partial<TrustMetricInputs> | undefined;
      if (!body) return res.status(400).json({ error: 'Missing body' });
      const inputs = body as TrustMetricInputs;
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });      } catch {}
      return res.status(200).json(breakdown)
    } catch (e: any) {
      return res.status(500).json({ error: e?.message |'Failed to save trust inputs' })
    }
  }
  res.setHeader('AllowGET, POST');

  return res.status(405).json({ error: 'Method not allowed' })
}
  return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
