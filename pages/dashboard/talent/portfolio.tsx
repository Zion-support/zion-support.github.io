email: 'you@example.com',
      phone: '+1 555-123-4567',
      location: 'City, Country',
    },
    summary: 'AI talent focused on LLM apps and marketplaces.',
    skills: ['AI', 'TypeScript', 'Next.js'],
    technologies: ['OpenAI', 'Supabase'],
    experience: [
      {
        title: 'AI Engineer'
        company: 'Zion'
        start: '2023'
        end: 'Present'
        bullets: ['Built resume exporter.']
      }
    ]
    education: [
      {
        institution: 'University of Example'
        degree: 'B.Sc.'
        start: '2016'
        end: '2020'
      }
    ]
    certifications: ['AWS SAA-C03']
    portfolio: [{ title: 'Top Project', description: 'Showcase' }]
  }
  return (
    <div className='relative'>
      <div className='flex items-center gap-3 mb-4'>
        <label className='text-sm'>Theme</label>
        <select
          value={theme}
          onChange={e => setTheme(e.target.value as 'light' | 'dark')}
          className='border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black'
        >
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>
      </div>
      <PdfExportButton
        targetRef={ref}
        fileName={`resume-${data.name.replace(/\s+/g, '-').toLowerCase()}.pdf`}
      />
      <ResumePreview ref={ref} data={data} theme={theme} />
    </div>
  );

export const getServerSideProps: GetServerSideProps = async () => {
  const supabase = createServerClient();
  const user = await (supabase as any).auth.getUser?.()
  if (!user) {
return { redirect: { destination: '/auth', permanent: false } } as any;
  }
  return { props: {} };
};
