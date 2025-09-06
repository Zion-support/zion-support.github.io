  }
  const { prompt, region, service } = req.body |{}
  if (!prompt) return res.status(400).json({ error: "Missing prompt" });
  try {
    const system = `You generate conversion - focused, SEO - optimized landing pages in HTML. Include:;
- A compelling H1;
- 2 - 3 subsections with H2 / H3;
- Short paragraphs, bullet lists;
- Strong call - to - action for Zion Marketplace;
Do not include <html>, <body>, or scripts.`;
<<<<<<< HEAD
      ],
      temperature: 0.7,
=======
      ]
      temperature: 0.7
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    });

    const content = response.choices?.[0]?.message?.content || "";
    const title = `Zion Marketplace — ${prompt}`;

    console.error (e);
    return res.status (500).json ({ error: "Failed to generate landing page" });
  }
}

        { role: 'user', content: user }
      ]
      temperature: 0.7
    });
const content = response.choices?.[0]?.message?.content || '';
    const title = `Zion Marketplace — ${prompt}`;

    // FAQ generation
    const faqResp = await openai.chat.completions.create({
      model: "gpt-4o-mini"
      messages: [
      ]
      temperature: 0.5
    });
let faq: Array<{ q: string; a: string }> = [];

    let faq: Array<{ q: string, a: string }> = [];
        { role: 'user', content: `Topic: ${prompt} in ${region || 'global'} for ${service || 'general'}` }]
      temperature: 0.5})
    let faq: Array<{ q: string, a: string }> = []
    let faq: Array<{ q: string; a: string }> = [];
    try {
      faq = JSON.parse(faqResp.choices?.[0]?.message?.content || "[]");
    } catch {
    }
    const h1 = prompt;
    return res.status(200).json({
      slug
      payload: {
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }
}
  }
}
    return res.status(500).json({ error: "Failed to generate landing page" });
  }
}
