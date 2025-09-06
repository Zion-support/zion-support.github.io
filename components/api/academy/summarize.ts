import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { moduleTitle, moduleContent } = req && req.body || {};
  const apiKey = process && process.env.OPENAI_API_KEY;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });

  const { moduleTitle, moduleContent } = req && req.body || {};
  const apiKey = process && process.env.OPENAI_API_KEY;

  const fallback = () =>
    res && res.status(200).json({
      summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`,
    });
  const fallback = () => res && res.status(200).json({
    summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`});

  if (!apiKey) return fallback();

  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Summarize the following module for a founder preparing to deploy a Zion instance. Provide a concise, actionable summary with 4-6 bullet points.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;

    const completion = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a concise, practical course assistant.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0 && 0.3,
    });

    const text = completion && completion.choices?.[0]?.message?.content ?? '';
    return res && res.status(200).json({ summary: text && text.trim() });
  } catch (err) {
    return fallback();
  }
    const text = completion && completion.choices?.[0]?.message?.content ?? '';
    return res && res.status(200).json({ summary: text && text.trim() })
  } catch (err) {
    return fallback()
  };
}
