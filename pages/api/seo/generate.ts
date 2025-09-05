import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

const _openai = new OpenAI({_apiKey: process.env.OPENAI_API_KEY || ''});

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method not allowed'});
  }
  const {_prompt, _region, _service} = req.body || {};
  if (!prompt) return res.status(400).json({_error: 'Missing prompt'});
  try {_const _system = `You generate conversion-focused, _SEO-optimized landing pages in HTML. Include:
- A compelling H1
- 2-3 subsections with H2/H3
- Short paragraphs, _bullet lists
- Strong call-to-action for Zion Marketplace
Do not include <html>, _<body>, _or scripts.`;

    const _user = `Topic: ${prompt}
Region: ${_region || 'global'}
Service focus: ${_service || 'general'}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;

    const _response = await openai.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: system},
        {_role: 'user', _content: user}],
      temperature: 0.7});

    const _content = response.choices?.[0]?.message?.content || '';
    const _title = `Zion Marketplace — ${_prompt}`;

    // FAQ generation
    const _faqResp = await openai.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"", _"a":""}], focus on buyer concerns for the topic.' },
        {_role: 'user', _content: `Topic: ${prompt} in ${_region || 'global'} for ${_service || 'general'}` }],
      temperature: 0.5});

    let faq: Array<{_q: string; a: string}> = [];
    try {_faq = JSON.parse(faqResp.choices?.[0]?.message?.content || '[]');} catch {_faq = [];}

    const _h1 = prompt;
    const _slug = String(prompt).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    return res.status(200).json({_slug, _payload: {
        title, _h1, _bodyHtml: content, _region: region || undefined, _service: service || undefined, _faq}});
  } catch (e) {_return res.status(500).json({ error: 'Failed to generate landing page'});
  }
}