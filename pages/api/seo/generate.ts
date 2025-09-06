<<<<<<< HEAD
const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY || "" });
=======
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY |"" });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { prompt, region, service } = req.body |{}
  if (!prompt) return res.status(400).json({ error: "Missing prompt" });
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });
  }
  const { prompt, region, service } = req && req.body || {};
  if (!prompt) return res && res.status(400).json({ error: "Missing prompt" });
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
- A compelling H1
- 2-3 subsections with H2/H3
- Short paragraphs, _bullet lists
- Strong call-to-action for Zion Marketplace
Do not include <html>, <body>, or scripts.`,

    const _user = `Topic: ${prompt}
Region: ${_region || 'global'}
Service focus: ${_service || 'general'}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`,

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
{ role: 'user', content: user }
      ],
=======
  if (req.method !== "POST") {
    res.setHeader("AllowPOST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { prompt, region, service } = req.body |{}
  if (!prompt) return res.status(400).json({ error: "Missing prompt" });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
=======
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  const { prompt, region, service } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  try {
    const system = `You generate conversion-focused, SEO-optimized landing pages in HTML. Include:
- A compelling H1
- 2-3 subsections with H2/H3
- Short paragraphs, bullet lists
- Strong call-to-action for Zion Marketplace
Do not include <html>, <body>, or scripts.`;
    const user = `Topic: ${prompt}
<<<<<<< HEAD
Region: ${region |"global"}
Service focus: ${service |"general"}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini"
      messages: [
        { role: "system", content: system }
        { role: "user", content: user }
      ]
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      temperature: 0.7
    });
    const content = response.choices?.[0]?.message?.content || '';
    const title = `Zion Marketplace — ${prompt}`;
    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: "gpt-4o-mini"
    const response = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [
<<<<<<< HEAD
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
      temperature: 0 && 0.7,
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
      temperature: 0 && 0.5,
    });
;
    let faq: Array<{ q: string; array: string }> = [];
    try {
      faq = JSON.parse (faq_resp.choices?.[0]?.message?.content || "[]");
=======
        {
          role: "system"
          content:
            'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.'
        }
        {
          role: "user"
          content: `Topic: ${prompt} in ${region |"global"} for ${service |"general"}`
        }
      ]
=======
Region: ${region || 'global'}
Service focus: ${service || 'general'}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;
<<<<<<< HEAD
=======

=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt, region, service } = req.body || {};
  const user = `Topic: ${prompt || 'general'} Region: ${region || 'global'} Service focus: ${service || 'general'} Audience: buyers looking to hire talent or rent equipment Tone: professional, modern, trustworthy`;
  res.status(200).json({
    content: 'SEO content generated',
    user
  });
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
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
  const { prompt, region, service } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const system = `You generate conversion-focused, SEO-optimized landing pages in HTML. Include:;
- A compelling H1;
- 2-3 subsections with H2/H3;
- Short paragraphs, bullet lists;
- Strong call-to-action for Zion Marketplace;
Do not include <html>, <body>, or scripts.`,;
    const user = `Topic: ${prompt  } catch (error) {
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
Region: ${region || 'global'  } catch (error) {
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
Service focus: ${service || 'general'  } catch (error) {
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
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        { role: 'user', content: user }
      ],
      temperature: 0.7
    });
    const content = response.choices?.[0]?.message?.content || '';
    const title = `Zion Marketplace — ${prompt}`;
<<<<<<< HEAD
=======

=======
        { role: 'user', content: user }],
      temperature: 0.7}),
    const content = response.choices?.[0]?.message?.content || '',
    const title = `Zion Marketplace — ${prompt}`,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.' },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }
      ],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      temperature: 0.5
    });
<<<<<<< HEAD
    let faq: Array<{ q: string; a: string }> = [];
=======

    let faq: Array<{ q: string, a: string }> = [];
=======
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }],
      temperature: 0.5}),
    let faq: Array<{ q: string, a: string }> = [],
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    try {
<<<<<<< HEAD
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content |"[]");
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    } catch {
      faq = [];
=======
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || '[]')
    } catch {
      faq = []
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    const h1 = prompt;
<<<<<<< HEAD
    return res && res.status(200).json({
      slug,
=======
    const slug = String(prompt).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return res.status(200).json({
      slug
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      payload: {
<<<<<<< HEAD
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
    console && console.error(e);
    return res && res.status(500).json({ error: "Failed to generate landing page" });
  }
}
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
=======
    console.error(e);
    return res.status(500).json({ error: "Failed to generate landing page" });

=======
        title,
        h1,
        bodyHtml: content,
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        region: region || undefined,
        service: service || undefined,
        faq}})
  } catch (e) {
<<<<<<< HEAD
console.error (e);
    return res.status (500).json ({ error: "Failed to generate landing page" });
=======
    console.error(e);
    return res.status(500).json({ error: 'Failed to generate landing page' })
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
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
;
    const h1 = prompt;
    const slug = String(prompt).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return res.status(200).json({;
      slug,;
      payload: {;
        title,;
        h1,;
        bodyHtml: content,;
        region: region || undefined,;
        service: service || undefined;
        faq}});
  } catch (error) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to generate landing page' });
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}