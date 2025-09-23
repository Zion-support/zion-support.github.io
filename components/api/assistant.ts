import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';



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


4) How do I integrate APIs?  → Each product page includes API docs and keys—follow Quickstart steps or SDKs when available.
5) How do I get support?  → Use in-app support, contact the vendor, or reach Zion’s support channel.
Style: - Use bullets and short paragraphs


  }
  try {
    const { messages } = req && req.body as {
      messages?: Array<{
        role: 'user' | 'assistant' | 'system';
        content: string;
      }>;
    }



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

  };

}





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



