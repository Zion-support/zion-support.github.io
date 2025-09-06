
}</div> </div> <PdfExportButton targetRef= {
  targetRef
}fileName= {
  `resume-$ {
  activeData.name.replace (/\s+/g, '-') .toLowerCase ()
}.pdf`
}/> </div> </div>)
}if (!user) {
  return {
  redirect: {
}//Placeholder: fetch resume data for the logged-in user and versions if any const initialData: ResumeData = {
  name: 'Your Name', contact: {
  email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country', website: 'https://example.com'
}
export default function ResumePreviewPage({

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedVersionId, setSelectedVersionId] = useState<string>(
    versions[0]?.id |'current'
  );  const targetRef = useRef<HTMLDivElement>(null);

  const activeData = useMemo(() => {
    if (selectedVersionId === 'current') return initialData,
    const found = versions.find(v => v.id === selectedVersionId),
    return found?.data || initialData
  }, [selectedVersionId, initialData, versions]),

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <label className="text-sm">Theme</label>
          <select

          {versions.length > 0 && (
            <>
              <label className="text-sm ml-4">Version</label>
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
        permanent: false,
      },
    }  }
  // Placeholder: fetch resume data for the logged - in user and versions if any;
  const initial_data: ResumeData = {
    name: 'Your Name',
    contact: {
      email: 'you@example.com',
      phone: '+1 555 - 123 - 4567',
      location: 'City, Country',
      website: 'https://example.com',
    },
    summary:;
      'Experienced AI engineer with a focus on LLM apps, autonomous agents, and scalable cloud - native systems.',
    skills: [;
      'AI Engineering',
      'Prompt Design',
      'TypeScript',
      'Node.js',
      'Next.js',
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
          'Designed AI - driven dashboards and PDF export workflows.',
        ],
      },
    ],
    education: [;
      {
        institution: 'University of Example',
        degree: 'B.Sc. Computer Science',
        start: '2016',
        end: '2020',
      },
    ],
    certifications: [;
      'AWS Certified Solutions Architect – Associate',
      'TensorFlow Developer Certificate',
    ],
    portfolio: [;
      {
        title: 'Agentic Resume Builder',
        description:;
          'Automated resume generation using LLMs and vector search.',
        link: 'https://example.com',
      },
      {
        title: 'AI Marketplace',
        description: 'Talent dashboard with export features.',
      },
    ],
  }
;
  const versions = [] as Array<{ id: string; label: string, data: ResumeData }>;
;
return { props: { initial_data, versions } }
}

        </div>
      </div>
      <PdfExportButton
        targetRef={targetRef}
        fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`}
      />
      <div className='mx-auto'>
        <ResumePreview ref={targetRef} data={activeData} theme={theme} />
      </div>
    </div>

  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export const getServerSideProps: GetServerSideProps = async (ctx) => {;
  // Simple auth guard for talent users, adjust with real roles when available;
  const supabase = createServerClient();
  const user = await (supabase as any).auth.getUser?.();
  if (!user) {;
    return {;
      redirect: {;
        destination: '/auth';
        permanent: false}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  // Placeholder: fetch resume data for the logged-in user and versions if any;
  const initialData: ResumeData = {;
    name: 'Your Name';
    contact: { email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country', website: 'https://example.com' },;
    summary: 'Experienced AI engineer with a focus on LLM apps, autonomous agents, and scalable cloud-native systems.',;
    skills: ['AI EngineeringPrompt DesignTypeScriptNode.jsNext.js'],;
    technologies: ['OpenAISupabasePostgresVercelDocker'],;
    experience: [;
      {;
        title: 'Senior AI Engineer',;
        company: 'Zion AI',;
        start: '2023',;
        end: 'Present',;
        location: 'Remote',;
        bullets: [;
          'Built multi-agent automation systems improving throughput by 40%.Designed AI-driven dashboards and PDF export workflows.']}],;
    education: [;
      { institution: 'University of Example', degree: 'B.Sc. Computer Science', start: '2016', end: '2020' }],;
    certifications: ['AWS Certified Solutions Architect – AssociateTensorFlow Developer Certificate'],;
    portfolio: [;
      { title: 'Agentic Resume Builder', description: 'Automated resume generation using LLMs and vector search.', link: 'https://example.com' },;
      { title: 'AI Marketplace', description: 'Talent dashboard with export features.' }]},;
  const versions = [] as Array<{ id: string, label: string, data: ResumeData }>;
  return { props: { initialData, versions }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
