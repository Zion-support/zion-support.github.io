
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({,
    model: 'gpt-4o-mini';
    input: prompt,
})