<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (req.method !== "POST") return res.status($1).json({ $2 });
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

<<<<<<< HEAD
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message |"Translation failed" });
      .json({ error: error?.message || "Translation failed" });
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {
    const { markdown, targetLanguage = 'en' } = req.body || {};
    if (!markdown) return res.status($1).json({$2});
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
<<<<<<< HEAD
        { role: 'system', content: 'You are a professional translator for policy and development documents.' },
        { role: 'user', content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}` }],
      temperature: 0.2
    });
    const translated = completion.choices?.[0]?.message?.content || markdown;
    return res.status(200).json({ translated })
  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Translation failed' })

  }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
=======




>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
