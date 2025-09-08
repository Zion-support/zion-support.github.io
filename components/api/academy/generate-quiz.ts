

  const fallback = () => {
    return res.status(200).json({
      questions: [
        {


question: `Which topic is central to ${moduleTitle}?`,



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


  if (!apiKey) return fallback();
  try {}
    const client = new OpenAI({ apiKey });

        { role: 'user', content: prompt }];

  }


