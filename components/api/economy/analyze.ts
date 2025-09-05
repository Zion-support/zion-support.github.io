import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

export type AnalyzeRequestBody = {_operatorPrompt: string;
  context?: Record<string, _unknown>;};

export type AnalyzeResponse = {_analysis: string;};

export default async function handler(_req: NextApiRequest, _res: NextApiResponse<AnalyzeResponse | {_error: string}>) {_if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed'});
  }

  const {_operatorPrompt, _context} = (req.body || {}) as AnalyzeRequestBody;
  if (!operatorPrompt || typeof operatorPrompt !== 'string') {_return res.status(400).json({ error: 'operatorPrompt is required'});
  }

  const _apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {_const _fallback = `Analysis (fallback): Based on the provided prompt, _doubling staking rewards for 6 months with a weekly emission cap may temporarily increase user participation and token velocity while moderately increasing inflation risk. Monitor treasury inflows from taxes/burns to offset emissions and adjust the cap if net inflation exceeds target bands.`;
    return res.status(200).json({ analysis: fallback});
  }

  try {_const _client = new OpenAI({ apiKey});
    const _system =
      'You analyze ZION$ token economics changes. Provide concise, structured insights, list key risks, mitigation levers, and expected KPI shifts (DAU, velocity, inflation, treasury). Keep under 180 words.';

    const _user = [
      `Operator Prompt: ${_operatorPrompt}`,
      context ? `Context: ${_JSON.stringify(context)}` : undefined]
      .filter(Boolean)
      .join('\n');

    const _completion = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: system},
        {_role: 'user', _content: user}],
      temperature: 0.3,
      max_tokens: 300});

    const _analysis = completion.choices?.[0]?.message?.content?.trim() || 'No analysis generated.';
    return res.status(200).json({_analysis});
  } catch (error: unknown) {_return res.status(500).json({ error: 'Failed to generate analysis'});
  }
}