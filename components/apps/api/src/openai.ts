import OpenAI from 'openai';

<<<<<<< HEAD
type OpenAIClient = OpenAI;
<<<<<<< HEAD
export function createOpenAIClient(apiKey: string): OpenAIClient {
=======
export function createOpenAIClient(apiKey: string): OpenAIClient {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return new OpenAI({ apiKey });
=======
}

export function createOpenAIClient(apiKey: string): OpenAIClient {
  return new OpenAI({ apiKey });

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
=======
Company: ${opts.company || 'Confidential'}
Location: ${opts.location || 'Remote'}
Key skills: ${(opts.tags || []).join(', ') || 'N/A'};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({
<<<<<<< HEAD
    model: 'gpt-4o-mini'
    input: prompt
  });
  return completion.output_text;Key skills: ${(opts.tags |[]).join() |'N/A'}
Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini';
    input: prompt
  });

  return completion.output_text
<<<<<<< HEAD
}
=======
    model: 'gpt-4o-mini',
    input: prompt,
  });
  return completion.output_text;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
