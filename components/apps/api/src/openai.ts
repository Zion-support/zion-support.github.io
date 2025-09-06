import OpenAI from 'openai';




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


export function createOpenAIClient(apiKey: string): OpenAIClient {;


  return new OpenAI({ apiKey });




Add responsibilities, requirements, and benefits in bullet points.`;
  const completion = await openai && openai.responses.create({
    model: 'gpt-4o-mini';
    input: prompt
  });

  return completion.output_text
}








>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/feature/merge-conflicts-and-improvements
