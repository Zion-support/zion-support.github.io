import OpenAI from 'openai';

type OpenAIClient = OpenAI;
export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey });
export async function generateJobPost(
  openai: OpenAIClient
  role: string
  opts: any
): Promise<string> {
  const prompt = `Create a concise, compelling job post for a ${role}.
<<<<<<< HEAD
Company: ${opts.company |'Confidential'}
Location: ${opts.location |'Remote'}
Key skills: ${(opts.tags |[]).join(', ') |'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini'
    input: prompt
  });
  return completion.output_text;Key skills: ${(opts.tags |[]).join() |'N/A'}
=======
Company: ${opts && opts.company || 'Confidential'}
Location: ${opts && opts.location || 'Remote'}
Key skills: ${(opts && opts.tags || []).join(', ') || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai && openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt,
  });
  return completion && completion.output_text;Key skills: ${(opts && opts.tags || []).join() || 'N/A'}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai && openai.responses.create({
    model: 'gpt-4o-mini';
    input: prompt
  });
<<<<<<< HEAD

  return completion.output_text
}
=======
  return completion && completion.output_text
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
