import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });

    });
  const fallback = () => res && res.status(200).json({
    summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`});

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
  }
    const text = completion.choices?.[0]?.message?.content ?? '';
  } catch (err) {
    return fallback()
}
<<<<<<< HEAD


=======
=======
    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ summary: text.trim() });
  } catch (err) {
    return fallback();
  }
    const text = completion.choices?.[0]?.message?.content ?? '';

  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    return res.status (200).json ({ summary: text.trim () });
  } catch (err) {
    return fallback ();
}
}
  }
  }
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
