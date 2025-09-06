import OpenAI from 'openai';

<<<<<<< HEAD

type OpenAIClient = OpenAI;
export function createOpenAIClient(apiKey: string): OpenAIClient {
export function createOpenAIClient(apiKey: string): OpenAIClient {;

  return new OpenAI({ apiKey });
export async function generateJobPost(
  openai: OpenAIClient
  role: string
  opts: any
): Promise<string> {
  const prompt = `Create a concise, compelling job post for a ${role}.

Company: ${opts.company |'Confidential'}
Location: ${opts.location |'Remote'}
Key skills: ${(opts.tags |[]).join(', ') |'N/A'}
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
Key skills: ${(opts.tags || []).join(', ') || 'N/A'};
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
=======
export function createOpenAIClient(apiKey: string): OpenAIClient {;


  return new OpenAI({ apiKey });


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai && openai.responses.create({
    model: 'gpt-4o-mini';
    input: prompt
  });

  return completion.output_text
}
<<<<<<< HEAD

}

=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
type OpenAIClient = OpenAI;
;
export function createOpenAIClient (api_key: string): OpenAIClient {
  return new OpenAI ({ api_key });
export async function generateJobPost (
  openai: OpenAIClient,
  role: string,
  opts: any): Promise < string> {
  const prompt = `Create a concise, compelling job post for a ${role}.;
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
Key skills: ${(opts.tags || []).join (', ') || 'N / A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create ({
    model: 'gpt - 4o - mini',
    input: prompt,
  });
  return completion.output_text;Key skills: ${(opts.tags || []).join () || 'N / A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create ({
    model: 'gpt - 4o - mini';
    input: prompt;
  });
  return completion.output_text;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
