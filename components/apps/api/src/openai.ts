import OpenAI from 'openai';
type OpenAIClient = OpenAI;

export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
=======
  return completion.output_text
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
