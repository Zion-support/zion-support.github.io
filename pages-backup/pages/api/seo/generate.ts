<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
import OpenAI from "openai";"
const openai = new OpenAI({ "apiKey": process.env.OPENAI_API_KEY || "" });"

export default async function handler() {
  }
  if (req.method !== "POST") {"
    }
    res.setHeader("AllowPOST");"
    return res.status(405).json({ "error": "Method not allowed" });"
  }
  const { prompt, region, service } = req.body || {};
  if (!prompt) return res.status(400).json({ "error": "Missing prompt" });"
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI({ error: "Invalid request" });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader({ error: "Invalid request" });
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { prompt, region, service } = req.body || {}
  if (!prompt) return res.status(400).json({ error: "Invalid request" });
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  try {
}
const system = `You generate conversion-focused, SEO-optimized landing pages in HTML. "Include":;`- A compelling H1
- 2-3 subsections with H2/H3
- Short paragraphs, bullet lists
<<<<<<< HEAD
- Strong call-to-action for Zion Marketplace,
Do not include <html>, <body>, or scripts.`;`
    const user = `"Topic": ${prompt}`"Region": ${region || "global"}"
Service "focus": ${service || "general"}"
"Audience": buyers looking to hire talent or rent equipment,
"Tone": professional, modern, trustworthy`;`
    const response = await openai.chat.completions.create({
      }
      "model": "gpt-4o-mini","
      "messages": [
        { "role": "system", "content": system },"
        { "role": "user", "content": user },"
      ],
      "temperature": 0.7
    });

    const content = response.choices?.[0]?.message?.content || "";"
    const title = `Zion Marketplace — ${prompt}`;`
    // FAQ generation,
const faqResp = await openai.chat.completions.create({
      }
      "model": "gpt-4o-mini","
      "messages": [
        {
          }
          "role": "system","
          "content":
            'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.','
        },
        {
          }
          "role": "user","
          "content": `"Topic": ${prompt} in ${region || "global"} for ${service || "general"}`,`
        }
      ],
      "temperature": 0.5
    });

    let "faq": Array<{ "q": string; "a": string }> = [];
    try {
      }
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || "[]");"
    } catch {
      }
      faq = [];
    }

    const h1 = prompt;
const slug = String(prompt);
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")"
      .replace(/^-+|-+$/g, "");"

    return res.status(200).json({
      }
      slug,
      "payload": {
        }
        title,
        h1,
        "bodyHtml": content,
        "region": region || undefined,
        "service": service || undefined,
        faq
      }
    });
  } catch (e) {
    }
    console.error(e);
    return res.status(500).json({ "error": "Failed to generate landing page" });"
  }
=======
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  }
  
  res.status(200).json({ message: "Endpoint working" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}
=======
- Strong call-to-action for Zion Marketplace
Do not include <html>, <body>, or scripts.`
    const user = `Topic: ${prompt}
Region: ${region || 'global'}
Service focus: ${service || 'general'}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`
    const response = await openai.chat.completions.create({ error: "Invalid request" });
    const content = { error: "Invalid request" };
    const title = { error: "Invalid request" };
    // FAQ generation
    const faqResp = await openai.chat.completions.create({ error: "Invalid request" });
    let faq: Array<{ q: string, a: string}> = []
    try {
      faq = { error: "Invalid request" };
    const slug = String(prompt).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace({ error: "Invalid request" });
    return res.status(200).json({
      slug
      payload: {
        title
        h1
        bodyHtml: content
        region: region || undefined
        service: service || undefined
        faq}})
  } catch (e) {
    console.error({ error: "Invalid request" });
    return res.status(500).json({ error: 'Failed to generate landing page' })
  }
}

}
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
