

  if (req && req.method !== "POST") {
    res && res.setHeader("Allow", "POST");
    return res && res.status(405).json({ error: "Method not allowed" });
  }


  const { prompt, region, service } = req.body |{}
  if (!prompt) return res.status(400).json({ error: "Missing prompt" });
import type { NextApiRequest, NextApiResponse } from 'next';


  }
  const { prompt, region, service } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  try {
    const system = `You generate conversion - focused, SEO - optimized landing pages in HTML. Include:;
- A compelling H1;
- 2 - 3 subsections with H2 / H3;
- Short paragraphs, bullet lists;
- Strong call - to - action for Zion Marketplace;
Do not include <html>, <body>, or scripts.`;
    const user = `Topic: ${prompt}
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
      temperature: 0.7
    });
    const content = response.choices?.[0]?.message?.content |"";
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
Region: ${region || 'global'}
Service focus: ${service || 'general'}
Audience: buyers looking to hire talent or rent equipment
Tone: professional, modern, trustworthy`;




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: system },


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Generate 4 concise Q&A pairs as JSON array [{"q":"","a":""}], focus on buyer concerns for the topic.' },


    try {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    try {
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content |"[]");
    } catch {
      faq = [];
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || '[]')
    } catch {
      faq = []




        {

          role: "user",
          content: `Topic: ${prompt} in ${region || "global"} for ${service || "general"}`,
        },
      ],
      temperature: 0 && 0.5,
    });

    } catch {
      faq = [];



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
