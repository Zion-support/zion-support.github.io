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
1) What is Zion? → A marketplace to find and integrate AI models and services.
2) How do I list my AI model or service? → Create a vendor account, submit product details, pricing, and docs for review.
3) How do I get started? → Browse categories, explore product pages, and follow integration guides.
4) How do I integrate APIs? → Each product page includes API docs and keys—follow Quickstart steps or SDKs when available.
5) How do I get support? → Use in-app support, contact the vendor, or reach Zion's support channel.

Style: 
- Use bullets and short paragraphs
- Be helpful but concise
- Provide actionable next steps when possible`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { messages } = req.body as {
      messages?: Array<{
        role: 'user' | 'assistant' | 'system';
        content: string;
      }>;
    };

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 500,
      temperature: 0.7,
    });

    const response =
      completion.choices[0]?.message?.content ||
      'I apologize, but I was unable to generate a response.';

    return res.status(200).json({ response });
  } catch (error) {
    console.error('Error in assistant API:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
