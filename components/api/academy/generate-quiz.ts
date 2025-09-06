import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { moduleTitle, moduleContent } = req.body || {},
  const apiKey = null;
      return res.status(200).json(json)
=======
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== 'POST')
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { moduleTitle, moduleContent } = req.body |{}
=======
    return res.status(405).json({ error: 'Method not allowed' });

  
}

const { moduleTitle, moduleContent } = req.body || {};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const apiKey = process.env.OPENAI_API_KEY;
  const fallback = () => {
    return res.status(200).json({
      questions: [
        {
<<<<<<< HEAD
          question: `Which topic is central to ${moduleTitle}?`
=======
          question: `Which topic is central to ${moduleTitle}?`,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
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
=======
            'Whitepaper + governance docs',
            'Novel',
            'Recipe book',
            'None',
          ],
          answerIndex: 0,
        },
      ],
    });
 
};

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (!apiKey) return fallback();
  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {"questions":[{"question":string,"options":string[],"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
        {
<<<<<<< HEAD
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
=======
          role: 'system',
          content: 'You are an expert course designer for founders.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.2,
    });

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
      return res.status(200).json(json);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    } catch {
=======
   
} catch {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      return fallback();
    }
  } catch (err) {
    return fallback();
<<<<<<< HEAD
  }    } catch {
      return fallback()
    }
  } catch (err) {
    return fallback()
}
<<<<<<< HEAD
}
=======
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      return res.status(200).json(json);

    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
