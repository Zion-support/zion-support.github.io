<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
<<<<<<< HEAD
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY |"" });
=======
const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY || "" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "POST") {
    res.setHeader("AllowPOST");
    return res.status(405).json({ error: "Method not allowed" });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  }
  const { prompt, region, service } = req.body |{}
  if (!prompt) return res.status(400).json({ error: "Missing prompt" });
=======
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });
  }
  const { prompt, region, service } = req && req.body || {};
  if (!prompt) return res && res.status(400).json({ error: "Missing prompt" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  try {
    const system = `You generate conversion - focused, SEO - optimized landing pages in HTML. Include:;
- A compelling H1;
- 2 - 3 subsections with H2 / H3;
- Short paragraphs, bullet lists;
- Strong call - to - action for Zion Marketplace;
Do not include <html>, <body>, or scripts.`;
<<<<<<< HEAD
    const user = `Topic: ${prompt}
Region: ${region |"global"}
Service focus: ${service |"general"}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;
<<<<<<< HEAD
<<<<<<< HEAD
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini"
      messages: [
        { role: "system", content: system }
        { role: "user", content: user }
      ]
      temperature: 0.7
    });
    const content = response.choices?.[0]?.message?.content |"";
=======

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user }
      ],
      temperature: 0.7
    });

    const content = response.choices?.[0]?.message?.content || '';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    const title = `Zion Marketplace — ${prompt}`;
    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: "gpt-4o-mini"
=======
    const response = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0 && 0.7,
    });
<<<<<<< HEAD
    const content = response && response.choices?.[0]?.message?.content || "";
    const title = `Zion Marketplace — ${prompt}`;
    // FAQ generation
    const faqResp = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      messages: [
        {
          role: "system"
          content:
            'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.'
        }
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        {
<<<<<<< HEAD
          role: "user"
          content: `Topic: ${prompt} in ${region |"global"} for ${service |"general"}`
        }
      ]
      temperature: 0.5
    });
    let faq: Array<{ q: string; a: string }> = [];
    try {
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content |"[]");
=======
          role: "user",
          content: `Topic: ${prompt} in ${region || "global"} for ${service || "general"}`,
        },
      ],
      temperature: 0 && 0.5,
    });
<<<<<<< HEAD
    let faq: Array<{ q: string; a: string }> = [];
    try {
      faq = JSON && JSON.parse(faqResp && faqResp.choices?.[0]?.message?.content || "[]");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
    let faq: Array<{ q: string; array: string }> = [];
    try {
      faq = JSON.parse (faq_resp.choices?.[0]?.message?.content || "[]");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } catch {
      faq = [];
    }
    const h1 = prompt;
<<<<<<< HEAD
    const slug = String(prompt)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
<<<<<<< HEAD
    return res.status(200).json({
      slug
=======
    return res && res.status(200).json({
      slug,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      payload: {
        title
        h1
        bodyHtml: content
        region: region |undefined
        service: service |undefined
        faq
      }
    });
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
    return res.status(500).json({ error: "Failed to generate landing page" });

=======
    console && console.error(e);
    return res && res.status(500).json({ error: "Failed to generate landing page" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
}
=======
        { role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.' },
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }
      ],
      temperature: 0.5
    });

    let faq: Array<{ q: string, a: string }> = [];
    try {
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || '[]')
    } catch {
      faq = []
    }

    const h1 = prompt;
    const slug = String(prompt).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    return res.status(200).json({
=======
    const slug = String (prompt);
      .toLowerCase ();
      .replace (/[^a - z0 - 9]+/g, "-");
      .replace (/^-+|-+$/g, "");
;
    return res.status (200).json ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      slug,
      payload: {
        title,
        h1,
        body_html: content,
        region: region || undefined,
        service: service || undefined,
        faq}})
  } catch (e) {
<<<<<<< HEAD
    console.error(e);
    return res.status(500).json({ error: 'Failed to generate landing page' })
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    console.error (e);
    return res.status (500).json ({ error: "Failed to generate landing page" });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
