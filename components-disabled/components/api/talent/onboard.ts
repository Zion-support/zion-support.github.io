  try {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey: openaiApiKey });
    const prompt = `Create a concise professional summary (max 70 words) and extract 8-15 concise skill tags from the following profile. Respond as JSON with keys: summary, tags.\n\nTEXT:\n${combinedText}`;

    const content = response.choices?.[0]?.message?.content || '';
    try {
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed.summary === 'string' && Array.isArray(parsed.tags)) {
      bio,
      projects,
      yearsOfExperience,
      skills,
      tools,
      availability,
      timezone,
    if (cvFile?.base64 && cvFile?.name) {
      const ext = path.extname(cvFile.name) || '.pdf';
      const filename = `${id}-cv${ext}`;
      const filePath = path.join(uploadsDir, filename);
      bio,
      projects,
      skills,
      tools,
    });
      skills,
      tools,
      availability,
      timezone,
