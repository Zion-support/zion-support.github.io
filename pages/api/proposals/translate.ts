import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from '[^']*';
export default async function handler() {if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })try {const { markdown, targetLanguage;
    return res.status(200).json({ translated })const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })const completion = await openai.chat.completions.create({model: process.env.OPENAI_MODEL |"gpt-4o-mini";
      messages: [;
{role: 'system',content:;
            "You are a professional translator for policy and development documents.";
        }
        {role: "user";
          content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}`;
        }
      ];
      temperature: 0.2;
    })const translated = completion.choices?.[0]?.message?.content |markdown;
    return res.status(200).json({ translated })} catch (error: any) {return res;
      .status(500).json({ error: error?.message |"Translation failed" })}}