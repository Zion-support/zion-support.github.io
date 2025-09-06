import OpenAI from 'openai';
type OpenAIClient = OpenAI;
<<<<<<< HEAD

export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey });
}

export async function generateJobPost(
  openai: OpenAIClient,
  role: string,
  opts: any
): Promise<string> {
  const prompt = `Create a concise, compelling job post for a ${role}.
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
Key skills: ${(opts.tags || []).join(', ') || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt,
  });
  return completion.output_text;
}
=======
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
