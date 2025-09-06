<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


  try {
    const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.
Title: ${slide.title}\nContent:\n${slide.content}`
    let title = slide.title
    let content = slide.content
    try {
      const chat = await client.chat.completions.create({
        model: 'gpt-4o-mini'
        messages: [


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    } catch (err) {
      // keep original if AI fails;
    }
<<<<<<< HEAD
res.status(200).json({ title, content })
  } catch (e: any) {

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'POST') {
      const { slide } = req.body;
      if (!slide) return res.status(400).json({ error: 'Slide required' });

      const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.

Title: ${slide.title}
Content:
${slide.content}`;

      let title = slide.title;
      let content = slide.content;
      
      try {
        // Mock AI rewrite - replace with real AI service
        const rewritten = {
          title: title + ' (Enhanced)',
          content: content + ' [AI Enhanced]'
        };
        res.json({ slide: rewritten });
      } catch (aiError) {
        console.error('AI rewrite error:', aiError);
        res.json({ slide: { title, content } });
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}

=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


  }
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
