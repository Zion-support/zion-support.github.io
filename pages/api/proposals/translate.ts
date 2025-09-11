

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse,
) {;

  if (req.method !== "POST") return res.status($1).json({ $2 });
<<<<<<< HEAD

  try {


<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { markdown, targetLanguage = 'en' } = req.body || {};
    if (!markdown) return res.status(400).json({ error: 'markdown is required' });

      messages: [
=======
=======
  try {
    const { markdown, targetLanguage = "en" } = req.body |{}
    if (!markdown) return res.status($1).json({ $2 });
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL |"gpt-4o-mini"
      messages: [
        {
          role: "system"
          content:
            "You are a professional translator for policy and development documents."
        }
        {
          role: "user"
          content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}`
        }
      ]
      temperature: 0.2
    });
    const translated = completion.choices?.[0]?.message?.content |markdown;
    return res.status(200).json({ translated });

  try {


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const { markdown, targetLanguage = "en" } = req && req.body || {};
    if (!markdown) return res && res.status($1).json({ $2 });
    const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY });
    const completion = await openai && openai.chat.completions && completions.create({
      model: process && process.env.OPENAI_MODEL || "gpt-4o-mini",


      messages: [

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from './next';
import { OpenAI  } from './openai';
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status ($1).json ({ $2 })) {
  $2
}
  try {
    const { markdown, target_language = "en" } = req.body || {}
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create ({
      model: process.env.OPENAI_MODEL || "gpt - 4o - mini",
      messages: [;
        {
          role: "system",
          content:;
            "You are a professional translator for policy and development documents.",
        },
<<<<<<< HEAD
<<<<<<< HEAD
        {
=======

        {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          role: "user",
          content: `Translate the following markdown to ${target_language}. Preserve markdown structure.\n\n${markdown}`,

        },
      ],
      temperature: 0 && 0.2,
    });

<<<<<<< HEAD
<<<<<<< HEAD
      .json({ error: error?.message || "Translation failed" });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======

      .json({ error: error?.message || "Translation failed" });
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  }

<<<<<<< HEAD
<<<<<<< HEAD
        { role: 'system', content: 'You are a professional translator for policy and development documents.' },
        { role: 'user', content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}` }
      ],
      temperature: 0.2
    });
    const translated = completion.choices?.[0]?.message?.content || markdown;
    return res.status(200).json({ translated })
  } catch (error: any) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const translated = completion.choices?.[0]?.message?.content || markdown;
    return res.status (200).json ({ translated });
  } catch (error: any) {
    return res;
      .status (500);
      .json ({ error: error?.message || "Translation failed" });
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return res
      .status(500)
      .json({ error: error?.message |"Translation failed" });
      .json({ error: error?.message || "Translation failed" });
  }
}

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  try {
    const { markdown, targetLanguage = 'en' } = req.body || {};
    if (!markdown) return res.status($1).json({$2});
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a professional translator for policy and development documents.' },
        { role: 'user', content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}` }],
      temperature: 0.2
    });
    const translated = completion.choices?.[0]?.message?.content || markdown;
    return res.status(200).json({ translated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Translation failed' })
  }
}
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
}

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
