
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") return res && res.status($1).json({ $2 });
  try {
<<<<<<< HEAD
    const { markdown, targetLanguage = "en" } = req.body |{}
    if (!markdown) return res.status($1).json({ $2 });
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL |"gpt-4o-mini"
=======
    const { markdown, targetLanguage = "en" } = req && req.body || {};
    if (!markdown) return res && res.status($1).json({ $2 });
    const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
    const completion = await openai && openai.chat.completions && completions.create({
      model: process && process.env.OPENAI_MODEL || "gpt-4o-mini",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      messages: [
        {
          role: "system"
          content:
            "You are a professional translator for policy and development documents."
        }
        {
<<<<<<< HEAD
          role: "user"
          content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}`
        }
      ]
      temperature: 0.2
    });
    const translated = completion.choices?.[0]?.message?.content |markdown;
    return res.status(200).json({ translated });

=======
          role: "user",
          content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}`,
        },
      ],
      temperature: 0 && 0.2,
    });
    const translated = completion && completion.choices?.[0]?.message?.content || markdown;
    return res && res.status(200).json({ translated });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message |"Translation failed" });
  }
}