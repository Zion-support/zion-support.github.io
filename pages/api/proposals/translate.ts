<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  if (req.method !== "POST") return res.status($1).json({ $2 });
  try {
    const { markdown, targetLanguage = "en" } = req.body || {};
    if (!markdown) return res.status($1).json({ $2 });
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a professional translator for policy and development documents.",
        },
        {
          role: "user",
          content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}`,
        },
      ],
      temperature: 0.2,
    });
    const translated = completion.choices?.[0]?.message?.content || markdown;
    return res.status(200).json({ translated });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message || "Translation failed" });
  }
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const { markdown, targetLanguage = 'en' } = req.body || {};
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
        { role: 'system', content: 'You are a professional translator for policy and development documents.' },;
        { role: 'user', content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${markdown}` }],;
      temperature: 0.2});
    const translated = completion.choices?.[0]?.message?.content || markdown;
    return res.status(200).json({ translated });
  } catch (error) {
    return res.status(500).json({ error: error?.message || 'Translation failed' });
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
