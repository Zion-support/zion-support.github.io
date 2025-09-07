
      temperature: 0.3
    const completion = await client.chat.completions.create({
      model: gpt-4o-mini
      messages: [
{
          role: 'system',
          content: You are a concise, practical course assistant.},
        { role: 'user', content: prompt }],
      temperature: 0.3,
origin/cursor/automate-test-improve-and-merge-code-2533
    });

