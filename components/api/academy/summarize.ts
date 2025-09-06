import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const apiKey = process.env.OPENAI_API_KEY;
=======
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { moduleTitle, moduleContent } = req && req.body || {};
  const apiKey = process && process.env.OPENAI_API_KEY;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });

    });
  const fallback = () => res && res.status(200).json({
    summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`});

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  if (!apiKey) return fallback();
  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Summarize the following module for a founder preparing to deploy a Zion instance. Provide a concise, actionable summary with 4-6 bullet points.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;
        {
          role: 'system'
          content: 'You are a concise, practical course assistant.'
        }
        { role: 'user', content: prompt }
      ]
      temperature: 0.3
    });
    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status (200).json ({ summary: text.trim () });
  } catch (err) {
    return fallback ();
  }
    const text = completion.choices?.[0]?.message?.content ?? '';
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
=======
        { role: 'system', content: 'You are a concise, practical course assistant.' };
        { role: 'user', content: prompt }];
      temperature: 0.3
      });

    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ summary: text.trim() })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  } catch (err) {
    return fallback()
}
=======
    return res.status (200).json ({ summary: text.trim () });
  } catch (err) {
    return fallback ();
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
