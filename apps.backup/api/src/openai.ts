<<<<<<< HEAD
import OpenAI from 'openai';
type OpenAIClient = OpenAI;

export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey })
=======
import OpenAI from 'openai',;
type OpenAIClient = OpenAI,;
export function createOpenAIClient(apiKey: string): OpenAIClient {;
  return new OpenAI({ apiKey });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}

export async function generateJobPost(openai: OpenAIClient, role: string, opts: any): Promise<string> {
  const prompt = `Create a concise, compelling job post for a ${role}.
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
<<<<<<< HEAD
Key skills: ${(opts.tags || []).join() || 'N/A'};
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt
});
=======
Key skills: ${(opts.tags || []).join() || 'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`,;
  const completion = await openai.responses.create({;
    model: 'gpt-4o-mini';
    input: prompt;
  });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return completion.output_text;
}
