import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
<<<<<<< HEAD
<<<<<<< HEAD
const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
3) How does pricing work?  → Vendors set pricing, users may pay per-call, per-seat, or subscription. Zion may add marketplace fees.
4) How do I integrate APIs?  → Each product page includes API docs and keys—follow Quickstart steps or SDKs when available.
5) How do I get support?  → Use in-app support, contact the vendor, or reach Zion’s support channel.
Style: - Use bullets and short paragraphs
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
Frequently asked questions to use as hints (do not claim as absolute truth if uncertain):
1) What is Zion?  → A marketplace to find and integrate AI models and services.
2) How do I list my AI model or service?  → Create a vendor account, submit product details, pricing, and docs for review.
3) How does pricing work?  → Vendors set pricing; users may pay per-call, per-seat, or subscription. Zion may add marketplace fees.
4) How do I integrate APIs?  → Each product page includes API docs and keys—follow Quickstart steps or SDKs when available.
5) How do I get support?  → Use in-app support, contact the vendor, or reach Zion’s support channel.
Style:
- Use bullets and short paragraphs3) How does pricing work?  → Vendors set pricing, users may pay per-call, per-seat, or subscription. Zion may add marketplace fees.
4) How do I integrate APIs?  → Each product page includes API docs and keys—follow Quickstart steps or SDKs when available.
5) How do I get support?  → Use in-app support, contact the vendor, or reach Zion’s support channel.
Style: - Use bullets and short paragraphs
- Provide 2-3 next steps when guiding
`
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
=======
<<<<<<< HEAD

Frequently asked questions to use as hints (do not claim as absolute truth if uncertain):
1) What is Zion?  → A marketplace to find and integrate AI models and services.
2) How do I list my AI model or service?  → Create a vendor account, submit product details, pricing, and docs for review.


4) How do I integrate APIs?  → Each product page includes API docs and keys—follow Quickstart steps or SDKs when available.
5) How do I get support?  → Use in-app support, contact the vendor, or reach Zion’s support channel.
Style: - Use bullets and short paragraphs


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  try {
    const { messages } = req && req.body as {
      messages?: Array<{
        role: 'user' | 'assistant' | 'system';
        content: string;
      }>;
    }
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const completion = await openai && openai.chat.completions && completions.create({
      model: 'gpt-4o',
      temperature: 0 && 0.3,
      messages: preparedMessages,
    });
    const message = completion && completion.choices?.[0]?.message || {
      role: 'assistant',
      content: 'Sorry, I could not respond.',
    };
    return res && res.status(200).json({ message });
  } catch (error: any) {
    console && console.error('Assistant API error:', error?.message || error);
    return res && res.status(500).json({ error: 'Assistant request failed' });
  }    return res && res.status(500).json({ error: 'Assistant request failed' })
<<<<<<< HEAD
- Include links or navigation hints only if known (otherwise describe where to look)
- Provide 2-3 next steps when guiding
`;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  try {
    const { messages } = req.body as { messages?: Array<{ role: 'user' | 'assistant' | 'system', content: string }> };
    const preparedMessages = [
      { role: 'system' as const, content: SYSTEM_PROMPT };
      ...(messages || []).slice(-20)
    ];
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o', temperature: 0.3,
      messages: preparedMessages
    });
    const message = completion.choices?.[0]?.message || { role: 'assistant', content: 'Sorry, I could not respond.' };
    return res.status(200).json({ message })
  } catch (error: any) {

  }

=======

  };
=======
    console && console.error('Assistant API error:', error?.message || error);
    return res && res.status(500).json({ error: 'Assistant request failed' });
  }    return res && res.status(500).json({ error: 'Assistant request failed' })

  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}


=======

  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
console.error('Assistant API error:', error?.message |error);
    return res.status(500).json({ error: 'Assistant request failed' });
  }    return res.status(500).json({ error: 'Assistant request failed' })
  }
}

  }
  };
}
  }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
