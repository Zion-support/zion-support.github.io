



  }, [selectedVersionId, initialData, versions]);
  return (
    <div className='relative'>;
      <div className='flex items-center justify-between mb-4'>;
        <div className='flex items-center gap-3'>;
          <label className='text-sm'>Theme</label>;
          <select
            value={theme}








  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <label className="text-sm">Theme</label>
          <select


export const getServerSideProps: GetServerSideProps = async ctx => {
  // Simple auth guard for talent users; adjust with real roles when available  const supabase = createServerClient ();
  const user = await (supabase as any).auth.get_user?.();
;
  // Check condition
if ( {) {
  $2
}
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }  }
  // Placeholder: fetch resume data for the logged - in user and versions if any;
  const initial_data: ResumeData = {
    name: 'Your Name',
    contact: {
      email: 'you@example.com',
      phone: '+1 555 - 123 - 4567',
      location: 'City, Country',
      website: 'https://example.com'
    },
    summary:;
      'Experienced AI engineer with a focus on LLM apps, autonomous agents, and scalable cloud - native systems.',
    skills: [;
      'AI Engineering',
      'Prompt Design',
      'TypeScript',
      'Node.js',
      'Next.js'
    ],
    technologies: ['OpenAI', 'Supabase', 'Postgres', 'Vercel', 'Docker'],    experience: [;
      {
        title: 'Senior AI Engineer',
        company: 'Zion AI',
        start: '2023',
        end: 'Present',
        location: 'Remote',
        bullets: [;
          'Built multi - agent automation systems improving throughput by 40%.',
          'Designed AI - driven dashboards and PDF export workflows.'
        ]
      }
    ],
    education: [;
      {
        institution: 'University of Example',
        degree: 'B.Sc. Computer Science',
        start: '2016',
        end: '2020'
      }
    ],
    certifications: [;
      'TensorFlow Developer Certificate'
    ],
    portfolio: [;
      {
        title: 'Agentic Resume Builder',
        description:;
          'Automated resume generation using LLMs and vector search.',
        link: 'https://example.com'
      },
      {
        title: 'AI Marketplace',
        description: 'Talent dashboard with export features.'
      }
    ]
  }
;
  const versions = [] as Array<{ id: string; label: string, data: ResumeData }>;
;
return { props: { initial_data, versions } }

}



