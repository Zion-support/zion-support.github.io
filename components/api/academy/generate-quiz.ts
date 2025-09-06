import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
<<<<<<< HEAD


=======
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { moduleTitle, moduleContent } = req.body || {};
  const apiKey = process.env.OPENAI_API_KEY;
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const { moduleTitle, moduleContent } = req && req.body || {};
  const apiKey = process && process.env.OPENAI_API_KEY;
  const fallback = () => {
    return res && res.status(200).json({
      questions: [
        {
          question: `Which topic is central to ${moduleTitle}?`;
          options: ['Random OpsZion OS missionUnrelated financeLegacy ERP'],
          answerIndex: 1};
        {
          question: 'What does DAO commonly refer to?', options: ['Data Access ObjectDecentralized Autonomous OrganizationDigital Asset OptionDynamic Allocation Output'],
          answerIndex: 1};
        {
          question: 'What should be configured during deployment?', options: ['Genesis Deploy Kit & modulesOnly UI colorsNothingRandom plugins'],
          answerIndex: 0};
        {
          question: 'Who are key community roles to hire?',
          options: ['Moderators, educators, ambassadorsAstronautsComediansNo one'];
          answerIndex: 0};
        {
          question: 'Which docs are needed for launch?', options: ['Whitepaper + governance docsNovelRecipe bookNone'],
          answerIndex: 0}]})
  };
=======

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { moduleTitle, moduleContent } = req.body |{}
  const apiKey = process.env.OPENAI_API_KEY;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const fallback = () => {
    return res.status(200).json({
      questions: [
        {
<<<<<<< HEAD


=======
          question: `Which topic is central to ${moduleTitle}?`
          options: [
            'Random Ops'
            'Zion OS mission'
            'Unrelated finance'
            'Legacy ERP'
          ]
          answerIndex: 1
        }
          question: 'What does DAO commonly refer to?'
          options: [
            'Data Access Object'
            'Decentralized Autonomous Organization'
            'Digital Asset Option'
            'Dynamic Allocation Output'
          ]
          answerIndex: 1
        }
        {
          question: 'What should be configured during deployment?'
          options: [
            'Genesis Deploy Kit & modules'
            'Only UI colors'
            'Nothing'
            'Random plugins'
          ]
          answerIndex: 0
        }
        {
          question: 'Who are key community roles to hire?'
          options: [
            'Moderators, educators, ambassadors'
            'Astronauts'
            'Comedians'
            'No one'
          ]
          answerIndex: 0
        }
        {
          question: 'Which docs are needed for launch?'
          options: [
            'Whitepaper + governance docs'
            'Novel'
            'Recipe book'
            'None'
          ]
          answerIndex: 0
        }
      ]
    });  };          question: 'Which docs are needed for launch?';
          options: ['Whitepaper + governance docsNovelRecipe bookNone'];
          answerIndex: 0}]})
  }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (!apiKey) return fallback();
  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {"questions":[{"question":string,"options":string[],"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;
<<<<<<< HEAD


    const completion = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [

=======
<<<<<<< HEAD
    const completion = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { module_title, module_content } = req.body || {}
  const api_key = process.env.OPENAI_API_KEY;
;
  const fallback = () =>: any {
    return res.status (200).json ({
      questions: [;
        {
          question: `Which topic is central to ${module_title}?`,
          options: [;
            'Random Ops',
            'Zion OS mission',
            'Unrelated finance',
            'Legacy ERP',
          ],
          answer_index: 1,
        },
          question: 'What does DAO commonly refer to?',
          options: [;
            'Data Access Object',
            'Decentralized Autonomous Organization',
            'Digital Asset Option',
            'Dynamic Allocation Output',
          ],
          answer_index: 1,
        },
        {
          question: 'What should be configured during deployment?',
          options: [;
            'Genesis Deploy Kit & modules',
            'Only UI colors',
            'Nothing',
            'Random plugins',
          ],
          answer_index: 0,
        },
        {
          question: 'Who are key community roles to hire?',
          options: [;
            'Moderators, educators, ambassadors',
            'Astronauts',
            'Comedians',
            'No one',
          ],
          answer_index: 0,
        },
        {
          question: 'Which docs are needed for launch?',
          options: [;
            'Whitepaper + governance docs',
            'Novel',
            'Recipe book',
            'None',
          ],
          answer_index: 0,
        },
      ],
    });  }          question: 'Which docs are needed for launch?';
          options: ['Whitepaper + governance docsNovelRecipe book_none'];
          answer_index: 0}]});
  }
;
  if (return fallback ()) {
  $2
}
  try {
    const client = new OpenAI ({ api_key });
    const prompt = `Create a 5 - question multiple - choice quiz in JSON with the shape {"questions":[{"question":string, "options":string[], "answer_index":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\n_title: ${module_title}\n_content:\n${module_content}`;
;
    const completion = await client.chat.completions.create ({
      model: 'gpt - 4o - mini',
      messages: [;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

    });
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);

<<<<<<< HEAD
=======
      return res.status(200).json(json);        { role: 'system', content: 'You are an expert course designer for founders.' };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        { role: 'user', content: prompt }];
      temperature: 0.2});
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
      return res.status(200).json(json);

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const json = JSON && JSON.parse(text);
      return res && res.status(200).json(json);        { role: 'system', content: 'You are an expert course designer for founders.' };
        { role: 'user', content: prompt }];
      temperature: 0 && 0.2});
    const text = completion && completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON && JSON.parse(text);
      return res && res.status(200).json(json);
      const json = JSON.parse (text);
      return res.status (200).json (json);        { role: 'system', content: 'You are an expert course designer for founders.' }
        { role: 'user', content: prompt }];
      temperature: 0.2});
;
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse (text);
      return res.status (200).json (json);
    } catch {
      return fallback ();
    }
  } catch (err) {
    return fallback ();
  }    } catch {
<<<<<<< HEAD


=======
        { role: 'system', content: 'You are an expert course designer for founders.' };
        { role: 'user', content: prompt }];
      temperature: 0.2
      });
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);

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
=======
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
        {
          role: 'system'
          content: 'You are an expert course designer for founders.'
        }
        { role: 'user', content: prompt }
      ]
      temperature: 0.2
    });
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(200).json(json);        { role: 'system', content: 'You are an expert course designer for founders.' }
=======
      return res.status(200).json(json);        { role: 'system', content: 'You are an expert course designer for founders.' };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return fallback()
    }
  } catch (err) {
    return fallback()
}
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return fallback ();
    }
  } catch (err) {
    return fallback ();
}

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return res.status(200).json(json);

    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
