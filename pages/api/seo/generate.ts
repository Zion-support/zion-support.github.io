

<<<<<<< HEAD
<<<<<<< HEAD
const openai = new OpenAI({ apiKey: process && process.env.OPENAI_API_KEY || "" });
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("AllowPOST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { prompt, region, service } = req.body |{}
  if (!prompt) return res.status(400).json({ error: "Missing prompt" });
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {

import type { NextApiRequest, NextApiResponse } from 'next';

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });
  }
  const { prompt, region, service } = req && req.body || {};
  if (!prompt) return res && res.status(400).json({ error: "Missing prompt" });
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  const { prompt, region, service } = req.body || {}
  if (return res.status (400).json ({ error: "Missing prompt" })) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const { prompt, region, service } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
    const system = `You generate conversion - focused, SEO - optimized landing pages in HTML. Include:;
- A compelling H1;
- 2 - 3 subsections with H2 / H3;
- Short paragraphs, bullet lists;
- Strong call - to - action for Zion Marketplace;
Do not include <html>, <body>, or scripts.`;
<<<<<<< HEAD
<<<<<<< HEAD
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
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { prompt, region, service } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });
  try {
    const system = `You generate conversion-focused, SEO-optimized landing pages in HTML. Include:
- A compelling H1
- 2-3 subsections with H2/H3
- Short paragraphs, bullet lists
- Strong call-to-action for Zion Marketplace
Do not include <html>, <body>, or scripts.`;
    const user = `Topic: ${prompt}

=======
    const user = `Topic: ${prompt}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
Region: ${region |"global"}
Service focus: ${service |"general"}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini"
      messages: [
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        { role: "system", content: system }
        { role: "user", content: user }
      ]

      temperature: 0.7
    });
<<<<<<< HEAD
    const user = `Topic: ${prompt}

=======
        { role: "system", content: system }
        { role: "user", content: user }
      ]
      temperature: 0.7
    });
    const content = response.choices?.[0]?.message?.content |"";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const title = `Zion Marketplace — ${prompt}`;
    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: "gpt-4o-mini"
      messages: [
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
<<<<<<< HEAD
=======
    const content = response.choices?.[0]?.message?.content |"";
=======
=======
    const user = `Topic: ${prompt}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
Region: ${region || 'global'}
Service focus: ${service || 'general'}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;

<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },
<<<<<<< HEAD
        { role: 'user', content: user }
    const content = response.choices?.[0]?.message?.content || '';
    const title = `Zion Marketplace — ${prompt}`;

<<<<<<< HEAD
        { role: 'user', content: user }],
      temperature: 0.7}),
    const content = response.choices?.[0]?.message?.content || '',
    const title = `Zion Marketplace — ${prompt}`,
    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: "gpt-4o-mini"
    const response = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [
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
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const response = await openai && openai.chat.completions && completions.create({
      model: "gpt-4o-mini",
      messages: [

        {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          role: "user",
          content: `Topic: ${prompt} in ${region || "global"} for ${service || "general"}`,
        },
      ],
      temperature: 0 && 0.5,
    });
<<<<<<< HEAD
<<<<<<< HEAD
;
    let faq: Array<{ q: string; array: string }> = [];
    try {
      faq = JSON.parse (faq_resp.choices?.[0]?.message?.content || "[]");
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
{ role: 'system', content: system },

        { role: 'user', content: user }
      ],
      temperature: 0.7,
    });
const content = response.choices?.[0]?.message?.content || '';
    const title = `Zion Marketplace — ${prompt}`;

    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
{ role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.' },
{ role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }
      ],

      temperature: 0.5
    });
let faq: Array<{ q: string; a: string }> = [];

    try {
faq = JSON.parse(faqResp.choices?.[0]?.message?.content |"[]");
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    } catch {
      faq = [];
    }
    const h1 = prompt;
<<<<<<< HEAD
<<<<<<< HEAD
return res && res.status(200).json({
      slug,
      payload: {
title
        { role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.' },
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }
      ],
      temperature: 0.5
    });
    let faq: Array<{ q: string; a: string }> = [];
=======

    return res && res.status(200).json({

      slug,
      payload: {
        title,
        h1,
        body_html: content,
        region: region || undefined,
        service: service || undefined,

        faq}})
  } catch (e) {

=======
    console.error (e);
    return res.status (500).json ({ error: "Failed to generate landing page" });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.' },


      temperature: 0.5
    });

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    let faq: Array<{ q: string, a: string }> = [];
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }],
      temperature: 0.5}),
    let faq: Array<{ q: string, a: string }> = [],
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content |"[]");
    } catch {
      faq = [];
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || '[]')
    } catch {
      faq = []
<<<<<<< HEAD
    }
    const h1 = prompt;
    const slug = String(prompt).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return res.status(200).json({
      slug
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

=======

    return res && res.status(200).json({

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      slug,
      payload: {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title,
        h1,
body_html: content,
        region: region || undefined,
        service: service || undefined,
<<<<<<< HEAD
    console.error (e);
faq}})
  } catch (e) {
console.error (e);
=======

        faq}})
  } catch (e) {

=======
    console.error (e);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return res.status (500).json ({ error: "Failed to generate landing page" });

    console.error(e);
    return res.status(500).json({ error: 'Failed to generate landing page' })
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
  }
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.' },


      temperature: 0.5
    });


    let faq: Array<{ q: string, a: string }> = [];
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }],
      temperature: 0.5}),
    let faq: Array<{ q: string, a: string }> = [],

    try {

      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || '[]')
    } catch {
      faq = []

  }
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
