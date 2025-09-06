import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
=======
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const { moduleTitle, moduleContent } = req.body || {};
  const apiKey = process.env.OPENAI_API_KEY;

  const fallback = () => {
    return res.status(200).json({
      questions: [
        {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          question: `Which topic is central to ${moduleTitle}?`,
          options: [
            'Random Ops',
            'Zion OS mission',
            'Unrelated finance',
            'Legacy ERP',
          ],
          answerIndex: 1,
        },
<<<<<<< HEAD
=======
=======
          question: `Which topic is central to ${moduleTitle}?`;
          options: ['Random OpsZion OS missionUnrelated financeLegacy ERP'];
          answerIndex: 1};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {
          question: 'What does DAO commonly refer to?',
          options: [
            'Data Access Object',
            'Decentralized Autonomous Organization',
            'Digital Asset Option',
            'Dynamic Allocation Output',
          ],
          answerIndex: 1,
        },
        {
          question: 'What should be configured during deployment?',
          options: [
            'Genesis Deploy Kit & modules',
            'Only UI colors',
            'Nothing',
            'Random plugins',
          ],
          answerIndex: 0,
        },
        {
          question: 'Who are key community roles to hire?',
          options: [
            'Moderators, educators, ambassadors',
            'Astronauts',
            'Comedians',
            'No one',
          ],
          answerIndex: 0,
        },
        {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          question: 'Which docs are needed for launch?',
          options: [
            'Whitepaper + governance docs',
            'Novel',
            'Recipe book',
            'None',
          ],
          answerIndex: 0,
        },
      ],
<<<<<<< HEAD
    });  };
=======
    });
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          question: 'Which docs are needed for launch?';
          options: ['Whitepaper + governance docsNovelRecipe bookNone'];
          answerIndex: 0}]})
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  if (!apiKey) return fallback();

  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {"questions":[{"question":string,"options":string[],"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {
          role: 'system',
          content: 'You are an expert course designer for founders.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.2,
    });
<<<<<<< HEAD
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
      return res.status(200).json(json);
=======
=======
        { role: 'system', content: 'You are an expert course designer for founders.' };
        { role: 'user', content: prompt }];
      temperature: 0.2
      });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        { role: 'system', content: 'You are an expert course designer for founders.' };
        { role: 'user', content: prompt }];
      temperature: 0.2});
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(200).json(json);
=======
      return res.status(200).json(json)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } catch {
      return fallback();
    }
  } catch (err) {
<<<<<<< HEAD
    return fallback();
  }
=======
<<<<<<< HEAD
    return fallback();
  }
=======
      return res.status(200).json(json)
    } catch {
      return fallback()
    }
  } catch (err) {
    return fallback()
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return fallback()
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
