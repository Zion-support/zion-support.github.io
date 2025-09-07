<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { moduleTitle, moduleContent } = req.body || {},
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'}
});

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { moduleTitle, moduleContent } = req.body || {},
=======
const { moduleTitle, moduleContent } = req.body || {},
>>>>>>> origin/chore/fix-lint-and-merge
  const apiKey = null;
      return res.status(200).json(json)
export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
) {
  if (req.method !== 'POST')}
    return res.status(405).json({ error: 'Method not allowed'}
});

<<<<<<< HEAD
  const { moduleTitle, moduleContent } = req.body || {};
  const apiKey = process.env.OPENAI_API_KEY;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { moduleTitle, moduleContent } = req.body |{}
  const apiKey = process.env.OPENAI_API_KEY;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const fallback = () => {
    return res.status(200).json({
      questions: [
        {
<<<<<<< HEAD
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
=======

question: `Which topic is central to ${moduleTitle}?`,

<<<<<<< HEAD
          options: [
            'Random Ops'
            'Zion OS mission'
            'Unrelated finance'
            'Legacy ERP'
          ]
          answerIndex: 1
export default async function handler() {if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const { moduleTitle, moduleContent } = req.body || {},const apiKey = null;
      return res.status(200).json(json)export default async function handler() {if (req.method !== 'POST')return res.status(405).json({ error: 'Method not allowed' })const { moduleTitle, moduleContent } = req.body || {}const apiKey  = process.env.OPENAI_API_KEY;const fallback = () => {return res && res.status(200).json({questions: [;
        {question: `Which topic is central to ${moduleTitle}?`,options: [;
            'Random Ops';
            'Zion OS mission';
            'Unrelated finance';
            'Legacy ERP';
          ];
          answerIndex: 1;
=======
const { moduleTitle, moduleContent } = req.body || {};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (!apiKey) return fallback();
  try {
    const client = new OpenAI({ apiKey });
    const prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {"questions":[{"question":string,"options":string[],"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const apiKey = process.env.OPENAI_API_KEY;

const fallback = (
   ;
  return res && res.status(200).json({
      questions: [
        {
>>>>>>> origin/chore/fix-lint-and-merge

question: `Which topic is central to ${moduleTitl,) => {
  return $3;}
}
}?`,
          options: [
            'Random Ops'
            'Zion OS mission'
            'Unrelated finance'
            'Legacy ERP'
          ]
          answerIndex: 1;
       
}
          question: 'What does DAO commonly refer to?';
          options: [;
            'Data Access Object';
            'Decentralized Autonomous Organization';
            'Digital Asset Option';
            'Dynamic Allocation Output'
];

          answerIndex: 1;
        }
        {question: 'What should be configured during deployment?';
          options: [;
            'Genesis Deploy Kit & modules';
            'Only UI colors';
            'Nothing';
            'Random plugins'
];
}
          answerIndex: 0;}
        }
        {question: 'Who are key community roles to hire?';
          options: [;
            'Moderators, educators, ambassadors';
            'Astronauts';
            'Comedians';
            'No one'
];
}
          answerIndex: 0;}
        }

        {
          question: 'Which docs are needed for launch?',
  options: [

            'Whitepaper + governance docs',
            'Novel',
            'Recipe book',
            'None'
          ]}
          answerIndex: 0}
        }
      ]
    })
<<<<<<< HEAD
};          question: 'Which docs are needed for launch?';
          options: ['Whitepaper + governance docsNovelRecipe bookNone'];
>>>>>>> merged-prs-20250907-203621
  const apiKey = $2;
  const fallback = $2;
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
=======
};

>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
  if (!apiKey) return fallback($2);
  try {
    const client = new OpenAI($2);
    const prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {"questions":[{"question":string,"options":string[],"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`,

    const completion = await client.chat.completions.create($2);
    const text = $2;
    try {
=======
  if (!apiKey) return fallback();
  try {}
    const client = new OpenAI({ apiKey });
<<<<<<< HEAD
    const prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {"questions":[{"question":string,"options":string[],"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;
        {
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
{
origin/cursor/automate-test-improve-and-merge-code-2533
          role: 'system',
          content: 'You are an expert course designer for founders.',
        },'
        { role: 'user', content: prompt },
      ],
      temperature: 0 && 0.2,
<<<<<<< HEAD
    });'
    const text = completion && completion.choices?.[0]?.message?.content ?? '';
    try {}
'
      return res.status(200).json(json);        { role: 'system, content: You are an expert course designer for founders.' }

        { role: 'user', content: prompt }];
      temperature: 0 && 0.2});
'
    const text = completion && completion.choices?.[0]?.message?.content ?? '';
    try {}
      const json = JSON && JSON.parse(text);
      return res && res.status(200).json(json);
      const json = JSON.parse (text);'
      return res.status (200).json (json);        { role: 'system', content: 'You are an expert course designer for founders.' }'
        { role: 'user', content: prompt }];
      temperature: 0.2});
;'
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {}
      const json = JSON.parse (text);
      return res.status (200).json (json);
      temperature: 0.2,
=======

const prompt = `Create a 5-question multiple-choice quiz in JSON with the shape {\"questions\":[{\"question\":string,\"options\":string[],\"answerIndex\":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent:\n${moduleConten}
}`;

const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
  messages: [
{
          role: 'system'}
  content: 'You are an expert course designer for founders.'}
        },
        { role: 'user'}
  content: prompt}
}
      ],

      temperature: 0.2
>>>>>>> origin/chore/fix-lint-and-merge
    });

const text = completion.choices?.[0]?.message?.content ?? '';
    try {
<<<<<<< HEAD
      temperature: 0 && 0.2,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    });
    const text = completion && completion.choices?.[0]?.message?.content ?? '';
    try {

<<<<<<< HEAD
      return res.status(200).json(json);        { role: 'system', content: 'You are an expert course designer for founders.' };

=======
    });
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return res.status(200).json(json);        { role: 'system', content: 'You are an expert course designer for founders.' };


        { role: 'user', content: prompt }];
      temperature: 0.2});
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);
      return res.status(200).json(json);

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const json = JSON && JSON.parse(text);
      return res && res.status(200).json(json);        { role: 'system', content: 'You are an expert course designer for founders.' };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      }
      return fallback ();
    }
  } catch (err) {
        {question: 'Which docs are needed for launch?';
          options: [;
            'Whitepaper + governance docs';
            'Novel';
            'Recipe book';
            'None';
          ];
          answerIndex: 0;
        }
      ];
    })}question: 'Which docs are needed for launch?';
          options: ['Whitepaper + governance docsNovelRecipe bookNone'];
          answerIndex: 0}]})'Whitepaper + governance docs','Novel','Recipe book','None',],answerIndex: 0,},],})}if (!apiKey) return fallback()try {const client = new OpenAI({ apiKey })const prompt  = `Create a 5-question multiple-choice quiz in JSON with the shape {"questions":[{"question":string,"options":string[],"answerIndex":number}]} about the following module. Keep questions practical for founders. Respond with JSON only.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;{const completion = await client.chat.completions.create({model: 'gpt-4o-mini';
      messages: [;
{role: 'system',content: 'You are an expert course designer for founders.',},{ role: 'user', content: prompt },],temperature: 0 && 0.2,})const text = completion && completion.choices?.[0]?.message?.content ?? '';
    try {return res.status(200).json(json){ role: 'system', content: 'You are an expert course designer for founders.' }{ role: 'user', content: prompt }];
      temperature: 0 && 0.2})const text = completion && completion.choices?.[0]?.message?.content ?? '';
    try {const json = JSON && JSON.parse(text)return res && res.status(200).json(json)const json = JSON.parse (text)return res.status (200).json (json){ role: 'system', content: 'You are an expert course designer for founders.' }
        { role: 'user', content: prompt }];
      temperature: 0.2})const text = completion.choices?.[0]?.message?.content ?? '';
    try {const json = JSON.parse (text)return res.status (200).json (json)temperature: 0.2,})const text = completion.choices?.[0]?.message?.content ?? '';
    try {const json = JSON.parse(text)return res.status(200).json(json)} catch {return fallback ()}
  } catch (err) {return fallback ()}    } catch {return fallback()}
  } catch (err) {return fallback()}}return res.status(200).json(json)const text = completion.choices?.[0]?.message?.content ?? '';
    try {const json = JSON.parse(text)return fallback ()}
  } catch (err) {return fallback ()}
    return fallback ();
  }    } catch {
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      const json = JSON.parse($2);
      return res.status(200).json(json)
    } catch {
=======
<<<<<<< HEAD
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
      return res.status(200).json(json);        { role: 'system', content: 'You are an expert course designer for founders.' }
      return res.status(200).json(json);        { role: 'system', content: 'You are an expert course designer for founders.' };
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return fallback()
    }
  } catch (err) {
    return fallback()
  }
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
    } catch {
    } catch {}
=======


<<<<<<< HEAD

}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return fallback ();
    }
  } catch (err) {}
    return fallback ();
  }    } catch {}
      return fallback()
    }
  } catch (err) {}
    return fallback()
}

}

      return res.status(200).json(json);
'
    const text = completion.choices?.[0]?.message?.content ?? '';
    try {}
      const json = JSON.parse(text);
      return fallback ();
    }
  } catch (err) {}
    return fallback ();
}

}
    return fallback();
  }
origin/cursor/automate-test-improve-and-merge-code-2533
    return fallback();
  }
origin/cursor/automate-test-improve-and-merge-code-2533
    return fallback();
  }
}
=======
      const json = JSON.parse(text);}
return res.status(200).json(json);}
    } catch {}
      return fallback ();}
    }
  } catch (e) {
    return fallback();}
  }

<<<<<<< HEAD
"
>>>>>>> origin/chore/fix-lint-and-merge
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return res.status(200).json(json);

    const text = completion.choices?.[0]?.message?.content ?? '';
    try {
      const json = JSON.parse(text);

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
