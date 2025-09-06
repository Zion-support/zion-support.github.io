import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { text, targets } = req.body as { text: string; targets: string[] };
  if (!text || !Array.isArray(targets) || targets.length === 0) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  try {
    const system =
      'You are a professional localization specialist. Maintain meaning, tone, and formatting. Output only the translated text.';
    const results: Record<string, string> = {};

    ,
          {
            role: 'user',
            content: `Translate this into ${langName} in a business-appropriate tone.\n\n${text}`,
          },
        ],
        temperature: 0.2,
      });
      const translated =
        completion.choices?.[0]?.message?.content?.trim() || '';
      results[lng] = translated;
    }

    return res.status(200).json(results);
  } catch (err: any) {
    console.error('Translation error', err);
    return res.status(500).json({ error: 'Translation failed' });
  }
