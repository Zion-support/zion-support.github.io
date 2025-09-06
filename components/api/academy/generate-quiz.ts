import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

=======

  const fallback = () => {
    return res.status(200).json({
      questions: [
        {


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  if (!apiKey) return fallback();
  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {"questions":[{"question":string,"options":string[],"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;

        { role: 'user', content: prompt }];
      temperature: 0.2});
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
      return res.status(200).json(json);

    } catch {
      return fallback();
    }
  } catch (err) {
    return fallback();
  }    } catch {

      return fallback()
    }
  } catch (err) {
    return fallback()
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
