<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type AnalyzeRequestBody = any;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
const user = [ `Operator Prompt: $ {
  operatorPrompt
}`;
context ? `Context: $ {
  JSON.stringify (context)
}` : undefined] .filter (Boolean) .join ('\n');
const completion = await client.chat.completions.create ({
  model: 'gpt-4o-mini', messages: [ {
<<<<<<< HEAD
  role: 'system', content: system
<<<<<<< HEAD
}
export type AnalyzeResponse = {
  analysis: string;};import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type AnalyzeRequestBody = {
  operatorPrompt: string
  context?: Record<string, unknown>
}
export type AnalyzeResponse = {
  analysis: string
}
=======
<<<<<<< HEAD
=======
  role: 'system', content: system 
};

export type AnalyzeResponse = {;
  analysis: string;};import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type AnalyzeRequestBody = {
  operatorPrompt: string,
  context?: Record<string, unknown>;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
};

export type AnalyzeResponse = {
  analysis: string;
};
<<<<<<< HEAD
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<AnalyzeResponse | { error: string }>
) {
<<<<<<< HEAD
  if (req.method !== 'POST') {
<<<<<<< HEAD
=======
  if (req.method !== 'POST') {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    return res.status(405).json({ error: 'Method not allowed' });  }
  const { operatorPrompt, context } = (req.body |{}) as AnalyzeRequestBody;
  if (!operatorPrompt |typeof operatorPrompt !== 'string') {
    return res.status(400).json({ error: 'operatorPrompt is required' });  }    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { operatorPrompt, context } = (req.body |{}) as AnalyzeRequestBody;
  if (!operatorPrompt |typeof operatorPrompt !== 'string') {
    return res.status(400).json({ error: 'operatorPrompt is required' });    return res.status(400).json({ error: 'operatorPrompt is required' })
  }
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    const fallback = `Analysis (fallback): Based on the provided prompt, doubling staking rewards for 6 months with a weekly emission cap may temporarily increase user participation and token velocity while moderately increasing inflation risk. Monitor treasury inflows from taxes/burns to offset emissions and adjust the cap if net inflation exceeds target bands.`;
    return res.status(200).json({ analysis: fallback });  }    return res.status(200).json({ analysis: fallback })
  }
=======
    return res.status(405).json({ error: 'Method not allowed' });
 
}

  const { operatorPrompt, context } = (req.body || {}) as AnalyzeRequestBody;
  if (!operatorPrompt || typeof operatorPrompt !== 'string') {
    return res.status(400).json({ error: 'operatorPrompt is required' });
 
}

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    const fallback = `Analysis (fallback): Based on the provided prompt, doubling staking rewards for 6 months with a weekly emission cap may temporarily increase user participation and token velocity while moderately increasing inflation risk. Monitor treasury inflows from taxes/burns to offset emissions and adjust the cap if net inflation exceeds target bands.`;
    return res.status(200).json({ analysis: fallback });
 
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  try {
    const client = new OpenAI({ apiKey });
    const system =
      'You analyze ZION$ token economics changes. Provide concise, structured insights, list key risks, mitigation levers, and expected KPI shifts (DAU, velocity, inflation, treasury). Keep under 180 words.';
    const user = [
<<<<<<< HEAD
      `Operator Prompt: ${operatorPrompt}`
      context ? `Context: ${JSON.stringify(context)}` : undefined
    ]      .filter(Boolean)      `Operator Prompt: ${operatorPrompt}`;
      context ? `Context: ${JSON.stringify(context)}` : undefined]
=======
      `Operator Prompt: ${operatorPrompt}`,
      context ? `Context: ${JSON.stringify(context)}` : undefined,
    ]
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      .filter(Boolean)
      .join('\n');
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
<<<<<<< HEAD
        { role: 'system', content: system }
        { role: 'user', content: user }
      ]
      temperature: 0.3
      max_tokens: 300
=======
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      temperature: 0.3,
      max_tokens: 300,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    });
    const analysis =
      completion.choices?.[0]?.message?.content?.trim() |
      'No analysis generated.';
    return res.status(200).json({ analysis });
<<<<<<< HEAD
  } catch (error: any) {
    console.error('Analyze API error', error?.message |error);
    return res.status(500).json({ error: 'Failed to generate analysis' });
<<<<<<< HEAD
  }
    const analysis = completion.choices?.[0]?.message?.content?.trim() |'No analysis generated.';
    return res.status(200).json({ analysis })
  } catch (error: any) {
    console.error('Analyze API error', error?.message |error);

    return res.status(500).json({ error: 'Failed to generate analysis' })
}
<<<<<<< HEAD
}
=======
 
} catch (error: any) {
    console.error('Analyze API error', error?.message || error);
    return res.status(500).json({ error: 'Failed to generate analysis' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
