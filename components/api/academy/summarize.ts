import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
  const { moduleTitle, moduleContent } = req.body || {};
  const apiKey = process.env.OPENAI_API_KEY;

=======
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const { moduleTitle, moduleContent } = req.body || {};
  const apiKey = process.env.OPENAI_API_KEY;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const fallback = () =>
    res.status(200).json({
      summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`,
    });
<<<<<<< HEAD
=======
=======
  const fallback = () => res.status(200).json({
    summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`});
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const fallback = () => res.status(200).json({
    summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`});
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (!apiKey) return fallback();

  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Summarize the following module for a founder preparing to deploy a Zion instance. Provide a concise, actionable summary with 4-6 bullet points.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {
          role: 'system',
          content: 'You are a concise, practical course assistant.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
    });
<<<<<<< HEAD
=======
=======
        { role: 'system', content: 'You are a concise, practical course assistant.' };
        { role: 'user', content: prompt }];
      temperature: 0.3});
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ summary: text.trim() });
  } catch (err) {
<<<<<<< HEAD
    return fallback();
  }
=======
<<<<<<< HEAD
    return fallback();
  }
=======
        { role: 'system', content: 'You are a concise, practical course assistant.' };
        { role: 'user', content: prompt }];
      temperature: 0.3
      });

    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ summary: text.trim() })
  } catch (err) {
    return fallback()
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return fallback()
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
