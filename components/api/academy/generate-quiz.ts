import type { NextApiRequest, NextApiResponse } from 'next',
import OpenAI from 'openai'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),

  const { moduleTitle, moduleContent } = req.body || {},
  const apiKey = process.env.OPENAI_API_KEY
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  const _fallback = () => {_return res.status(200).json({
      questions: [
        {
          question: `Which topic is central to ${moduleTitle}?`,
          options: ['Random OpsZion OS missionUnrelated financeLegacy ERP'],
          answerIndex: 1},
        {
          question: 'What does DAO commonly refer to?',
          options: ['Data Access ObjectDecentralized Autonomous OrganizationDigital Asset OptionDynamic Allocation Output'],
          answerIndex: 1},
        {
          question: 'What should be configured during deployment?',
          options: ['Genesis Deploy Kit & modulesOnly UI colorsNothingRandom plugins'],
          answerIndex: 0},
        {
          question: 'Who are key community roles to hire?',
          options: ['Moderators, educators, ambassadorsAstronautsComediansNo one'],
          answerIndex: 0},
        {
          question: 'Which docs are needed for launch?',
          options: ['Whitepaper + governance docsNovelRecipe bookNone'],
          answerIndex: 0}]})
  },

  if (!apiKey) return fallback(),

  try {

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are an expert course designer for founders.' },
        { role: 'user', content: prompt }],
      temperature: 0.2}),

    const text = completion.choices?.[0]?.message?.content ?? ''
    try {
      const json = JSON.parse(text)
      return res.status(200).json(json)
    } catch {
      return fallback()
    }
  } catch (err) {
    return fallback()
  }
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}