


  if (!prompt) return res.status(400).json({ error: "Missing prompt" });
  try {
    const system = `You generate conversion - focused, SEO - optimized landing pages in HTML. Include:;
- A compelling H1;
- 2 - 3 subsections with H2 / H3;
- Short paragraphs, bullet lists;
- Strong call - to - action for Zion Marketplace;
Do not include <html>, <body>, or scripts.`;


        { role: "system", content: system }
        { role: "user", content: user }
      ]
      temperature: 0.7
    });
    const content = response.choices?.[0]?.message?.content |"";


    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [



    let faq: Array<{ q: string; a: string }> = [];
    try {
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || "[]");
    } catch {}
    const h1 = prompt;


    return res.status(200).json({
      slug
      payload: {

        title,
        h1,
        bodyHtml: content,
        region: region || undefined,
        service: service || undefined,
        faq
      }
    });
  } catch (e) {
    console.error(e);

  }
}


