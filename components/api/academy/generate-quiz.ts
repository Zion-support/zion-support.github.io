import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';


  const fallback = () => {
    return res.status(200).json({
      questions: [
        {


  if (!apiKey) return fallback();
  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {"questions":[{"question":string,"options":string[],"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;


    const completion = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [

        {
          role: 'system',
          content: 'You are an expert course designer for founders.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0 && 0.2,
    });
    const text = completion && completion.choices?.[0]?.message?.content ?? '';
    try {

    });
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
<<<<<<< HEAD



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

      return res.status(200).json(json);        { role: 'system', content: 'You are an expert course designer for founders.' };


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        { role: 'user', content: prompt }];
      temperature: 0.2});
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
      return res.status(200).json(json);



<<<<<<< HEAD
=======
      return fallback()
    }
  } catch (err) {
    return fallback()
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


=======
      return res.status(200).json(json);

    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
