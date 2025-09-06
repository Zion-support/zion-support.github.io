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
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <label className="text-sm">Theme</label>
        <select
          value={theme}
        >
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>
      </div>


return { props: {} };
};

}


      <PdfExportButton targetRef={ref} fileName={`resume-${data.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />
      <ResumePreview ref={ref} data={data} theme={theme} />
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

export const getServerSideProps: GetServerSideProps = async () => {
  const supabase = createServerClient();
  if (!user) {
return { redirect: { destination: '/auth', permanent: false } } as any;
  }
  return { props: {} };
};
origin/cursor/automate-test-improve-and-merge-code-2533
