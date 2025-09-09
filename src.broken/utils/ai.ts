import OpenAI from 'openai';
function getClient(): OpenAI | null {
  const apiKey = $2;
  if (!apiKey) return null,
  return new OpenAI({ apiKey })
}

export async function generateText(prompt: string, system?: string): Promise<string> {
  const client = getClient($2);
  if (!client) {
    return `AI disabled. Mock response for prompt: ${prompt.slice(0, 120)}...`
  }
  const resp = await client.chat.completions.create($2);
      { role: 'user', content: prompt}],
    temperature: 0.4}),
  return resp.choices?.[0]?.message?.content || ''
}
