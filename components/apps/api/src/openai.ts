import OpenAI from 'openai';
type OpenAIClient = OpenAI;

export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey });
export async function generateJobPost(
  openai: OpenAIClient,
  role: string,
  opts: any
): Promise<string> {
  const prompt = `Create a concise, compelling job post for a ${role}.
Company: ${opts && opts.company || 'Confidential'}
Location: ${opts && opts.location || 'Remote'}
Key skills: ${(opts && opts.tags || []).join(', ') || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai && openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt,
  });
  return completion && completion.output_text;Key skills: ${(opts && opts.tags || []).join() || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai && openai.responses.create({
    model: 'gpt-4o-mini';
    input: prompt
  });
  return completion && completion.output_text
}
