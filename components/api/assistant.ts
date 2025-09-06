import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
=======
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const SYSTEM_PROMPT = `You are the Zion Assistant for the Zion AI Marketplace. Your job is to:
- Greet users warmly and concisely
- Answer FAQs accurately
- Guide users through discovering features and how to get started
- Ask brief clarifying questions when needed but minimize back-and-forth
- Keep answers succinct, scannable, and actionable
Context about Zion AI Marketplace:
- Zion is a marketplace to discover, evaluate, and integrate AI models, agents, and services
- Users can browse categories, view product pages, compare features, and connect via APIs
- Vendors can list their AI models/services with pricing, usage tiers, and documentation
Frequently asked questions to use as hints (do not claim as absolute truth if uncertain):
1) What is Zion?  → A marketplace to find and integrate AI models and services.
2) How do I list my AI model or service?  → Create a vendor account, submit product details, pricing, and docs for review.
3) How does pricing work?  → Vendors set pricing; users may pay per-call, per-seat, or subscription. Zion may add marketplace fees.
4) How do I integrate APIs?  → Each product page includes API docs and keys—follow Quickstart steps or SDKs when available.
5) How do I get support?  → Use in-app support, contact the vendor, or reach Zion’s support channel.
Style:
- Use bullets and short paragraphs3) How does pricing work?  → Vendors set pricing, users may pay per-call, per-seat, or subscription. Zion may add marketplace fees.
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
4) How do I integrate APIs?  → Each product page includes API docs and keys—follow Quickstart steps or SDKs when available.
5) How do I get support?  → Use in-app support, contact the vendor, or reach Zion’s support channel.
Style: - Use bullets and short paragraphs
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
    res && res.setHeader('Allow', 'POST');
    return res && res.status(405).json({ error: 'Method Not Allowed' });
=======
const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY });
;
const SYSTEM_PROMPT = `You are the Zion Assistant for the Zion AI Marketplace. Your job is to:;
- Greet users warmly and concisely;
- Answer FAQs accurately;
- Guide users through discovering features and how to get started;
- Ask brief clarifying questions when needed but minimize back - and - forth;
- Keep answers succinct, scannable, and actionable;
Context about Zion AI Marketplace:;
- Zion is a marketplace to discover, evaluate, and integrate AI models, agents, and services;
- Users can browse categories, view product pages, compare features, and connect via APIs;
- Vendors can list their AI models / services with pricing, usage tiers, and documentation;
Frequently asked questions to use as hints (do not claim as absolute truth if uncertain):;
1) What is Zion?  → A marketplace to find and integrate AI models and services.;
2) How do I list my AI model or service?  → Create a vendor account, submit product details, pricing, and docs for review.;
3) How does pricing work?  → Vendors set pricing; users may pay per - call, per - seat, or subscription. Zion may add marketplace fees.;
4) How do I integrate APIs?  → Each product page includes API docs and keys—follow Quickstart steps or SDKs when available.;
5) How do I get support?  → Use in - app support, contact the vendor, or reach Zion’s support channel.;
Style:;
- Use bullets and short paragraphs3) How does pricing work?  → Vendors set pricing, users may pay per - call, per - seat, or subscription. Zion may add marketplace fees.;
4) How do I integrate APIs?  → Each product page includes API docs and keys—follow Quickstart steps or SDKs when available.;
5) How do I get support?  → Use in - app support, contact the vendor, or reach Zion’s support channel.;
Style: - Use bullets and short paragraphs;
- Provide 2 - 3 next steps when guiding;
`,
export default async /**
 * handler - Function description
 */
function handler() {
    res.set_header ('Allow', 'POST');
    return res.status (405).json ({ error: 'Method Not Allowed' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  try {
    const { messages } = req && req.body as {
      messages?: Array<{
        role: 'user' | 'assistant' | 'system';
        content: string;
      }>;
    }
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
=======
;
    const prepared_messages = [;
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...(messages || []).slice (-20),
    ];
;
    const completion = await openai.chat.completions.create ({
      model: 'gpt - 4o',
      temperature: 0.3,
      messages: prepared_messages,
    });
;
    const message = completion.choices?.[0]?.message || {
      role: 'assistant',
      content: 'Sorry, I could not respond.',
    }
    return res.status (200).json ({ message });
  } catch (error: any) {
console.error ('Assistant API error:', error?.message || error);
    return res.status (500).json ({ error: 'Assistant request failed' });
  }    return res.status (500).json ({ error: 'Assistant request failed' });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
