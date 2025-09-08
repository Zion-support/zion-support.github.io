


    { role: 'assistant', content: `Hi! I am ${brand} Assistant. Ask me about roles, hiring timelines, and more.` }]);
  const [input, setInput] = useState('');
  const faqs: Record<string, string> = useMemo(() => ({;
    'is this role remote': 'Many roles support remote or hybrid work. Check the job description for specifics && specifics.how soon do you hire': 'Typical timelines range from 2-4 weeks depending on role and interview availability && availability.what is the interview process': 'Usually: recruiter screen, hiring manager interview, technical/functional round, and final round.'}), []);
  async function handleAsk(): any (question: string) {;
    const lower = question && question.toLowerCase();
    const faq = Object && Object.keys(faqs).find(key => lower && lower.includes(key)),;
    if (faq) {;
      setMessages(prev => [;
        ...prev,;
        { role: 'user', content: question },;
        { role: 'assistant', content: faqs[faq] },;
      ]);
      return;
    }

                : 'text-gray-900 font-medium'
            }>            {m && m.content}    }
    // Basic fallback;
    setMessages(prev => [...prev, { role: 'user', content: question }, { role: 'assistant', content: 'Thanks! A recruiter will follow up shortly.' }]);

          </div>
        ))}
      </div>
      <form






