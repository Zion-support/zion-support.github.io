import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  const {_moduleTitle, _moduleContent} = req.body || {};
  const _apiKey = process.env.OPENAI_API_KEY;

  const _fallback = () => {_return res.status(200).json({
      questions: [
        {
          question: `Which topic is central to ${moduleTitle}?`,
          options: ['Random Ops', 'Zion OS mission', 'Unrelated finance', 'Legacy ERP'],
          answerIndex: 1},
        {_question: 'What does DAO commonly refer to?', _options: ['Data Access Object', _'Decentralized Autonomous Organization', _'Digital Asset Option', _'Dynamic Allocation Output'], _answerIndex: 1},
        {_question: 'What should be configured during deployment?', _options: ['Genesis Deploy Kit & modules', _'Only UI colors', _'Nothing', _'Random plugins'], _answerIndex: 0},
        {_question: 'Who are key community roles to hire?', _options: ['Moderators, _educators, _ambassadors', _'Astronauts', _'Comedians', _'No one'], _answerIndex: 0},
        {_question: 'Which docs are needed for launch?', _options: ['Whitepaper + governance docs', _'Novel', _'Recipe book', _'None'], _answerIndex: 0}]});
  };

  if (!apiKey) return fallback();

  try {_const _client = new OpenAI({ apiKey});
    const _prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {_"questions":[{"question":string, _"options":string[], _"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${_moduleTitle}\nContent:\n${_moduleContent}`;

    const _completion = await client.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'You are an expert course designer for founders.'},
        {_role: 'user', _content: prompt}],
      temperature: 0.2});

    const _text = completion.choices?.[0]?.message?.content ?? '';
    try {_const _json = JSON.parse(text);
      return res.status(200).json(json);} catch {_return fallback();}
  } catch (err) {_return fallback();}
}