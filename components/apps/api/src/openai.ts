import OpenAI from 'openai';
    model: 'gpt-4o-mini',
    input: prompt,
  });
  return completion.output_text;
  return completion.output_text
}
