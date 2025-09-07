<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { moduleTitle, moduleContent } = req.body || {},
  const apiKey = $2;
  const fallback = () => res.status(200).json({
    summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`}),

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
=======
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' })
    })
  const fallback = () => res && res.status(200).json({}
    summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`})
export default async function handler(
  req: NextApiRequest
res: NextApiResponse
) {
  if (req.method !== 'POST')}
    return res.status(405).json({ error: 'Method not allowed',}
})
const { moduleTitle, moduleContent } = req.body ||
  const apiKey = null
    res.status(200).json({}
      summary: `Summary for ${moduleTitl,}
}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`
    })
    const text = completion.choices?.[0]?.message?.content ?? ''
    return res.status (200).json ({ summary: text.trim () })
  } catch (err) {}
  }'
    const text = completion.choices?.[0]?.message?.content ?? ''
  } catch (err) {}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    return fallback()
}
    return res.status (200).json ({ summary: text.trim () });
  } catch (err) {
    return fallback ();
}
}
  }
  }
  }
}
export default async function handler() {if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' })})const fallback = () => res && res.status(200).json({summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`})export default async function handler() {if (req.method !== 'POST')return res.status(405).json({ error: 'Method not allowed' })const { moduleTitle, moduleContent } = req.body || {},const apiKey = null;
    res.status(200).json({summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`;
    })if (!apiKey) return fallback()try {const client = new OpenAI({ apiKey })const prompt  = `Summarize the following module for a founder preparing to deploy a Zion instance. Provide a concise, actionable summary with 4-6 bullet points.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;{role: 'system';
          content: 'You are a concise, practical course assistant.';
        }
        { role: 'user', content: prompt }
      ];
      temperature: 0.3;
    const completion = await client.chat.completions.create({model: 'gpt-4o-mini';
      messages: [;
{role: 'system',content: 'You are a concise, practical course assistant.',},{ role: 'user', content: prompt },],temperature: 0.3,})const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status (200).json ({ summary: text.trim () })} catch (err) {}const text = completion.choices?.[0]?.message?.content ?? '';
  } catch (err) {return fallback()}
    return res.status (200).json ({ summary: text.trim () })} catch (err) {return fallback ()}
}
  }
  }
  }return res.status(200).json({ summary: text.trim() })} catch (err) {return fallback()}}
  if (!apiKey) return fallback($2);
  try {
    const client = new OpenAI($2);
    const prompt = `Summarize the following module for a founder preparing to deploy a Zion instance. Provide a concise, actionable summary with 4-6 bullet points.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`,

    const completion = await client.chat.completions.create($2);
    const text = $2;
    return res.status(200).json({ summary: text.trim() })
  } catch (err) {
    return fallback()
  }
}
