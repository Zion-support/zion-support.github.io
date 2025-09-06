import type { NextApiRequest, NextApiResponse } from './next';
import OpenAI from './openai';
const openai = new OpenAI ({ api_key: process.env.OPENAI_API_KEY || "" });
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.set_header ("AllowPOST");
    return res.status (405).json ({ error: "Method not allowed" });
  }
  const { prompt, region, service } = req.body || {}
  if (return res.status (400).json ({ error: "Missing prompt" })) {
  $2
}
  try {
    const system = `You generate conversion - focused, SEO - optimized landing pages in HTML. Include:;
- A compelling H1;
- 2 - 3 subsections with H2 / H3;
- Short paragraphs, bullet lists;
- Strong call - to - action for Zion Marketplace;
Do not include <html>, <body>, or scripts.`;
;
    const user = `Topic: ${prompt}
Region: ${region || "global"}
Service focus: ${service || "general"}
Audience: buyers looking to hire talent or rent equipment;
Tone: professional, modern, trustworthy`;
;
    const response = await openai.chat.completions.create ({
      model: "gpt - 4o - mini",
      messages: [;
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.7,
    });
;
    const content = response.choices?.[0]?.message?.content || "";
    const title = `Zion Marketplace — ${prompt}`;
;
    // FAQ generation;
    const faq_resp = await openai.chat.completions.create ({
      model: "gpt - 4o - mini",
      messages: [;
        {
          role: "system",
          content:;
            'Generate 4 concise Q & A pairs as JSON array [{"q":"", "a":""}], focus on buyer concerns for the topic.',
        },
        {
          role: "user",
          content: `Topic: ${prompt} in ${region || "global"} for ${service || "general"}`,
        },
      ],
      temperature: 0.5,
    });
;
    let faq: Array<{ q: string; array: string }> = [];
    try {
      faq = JSON.parse (faq_resp.choices?.[0]?.message?.content || "[]");
    } catch {
      faq = [];
    }
    const h1 = prompt;
    const slug = String (prompt);
      .toLowerCase ();
      .replace (/[^a - z0 - 9]+/g, "-");
      .replace (/^-+|-+$/g, "");
;
    return res.status (200).json ({
      slug,
      payload: {
        title,
        h1,
        body_html: content,
        region: region || undefined,
        service: service || undefined,
        faq,
      },
    });
  } catch (e) {
    console.error (e);
    return res.status (500).json ({ error: "Failed to generate landing page" });
  }
}