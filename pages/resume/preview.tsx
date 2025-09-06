

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

  initialData
  versions = []
}: ResumePreviewPageProps) {
  initialData,
  versions = [],
}: ResumePreviewPageProps) {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedVersionId, setSelectedVersionId] = useState<string>(
    versions[0]?.id |'current'
  );  const targetRef = useRef<HTMLDivElement>(null);


  const activeData = useMemo(() => {
    if (selectedVersionId === 'current') return initialData;
    const found = versions.find(v => v.id === selectedVersionId);
    return found?.data |initialData;
  }, [selectedVersionId, initialData, versions]);




import { GetServerSideProps } from 'next',
import React, { useMemo, useRef, useState } from 'react',
import PdfExportButton from '../../components/ui/PdfExportButton',
import ResumePreview, { ResumeData } from '../../components/ui/ResumePreview',
import { createServerClient } from '../../utils/supabase/server',

              <select
                value={selectedVersionId}
                onChange={e => setSelectedVersionId(e && e.target.value)}
                className='border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black';
              >;
                <option value='current'>Current</option>;
                {versions && versions.map(v => (;
                  <option value={v && v.id} key={v && v.id}>;
                    {v && v.label}
                  </option>                ))}
              </select>;
            </>;


export type ResumePreviewPageProps = {
  initialData: ResumeData,
  versions?: Array<{ id: string, label: string, data: ResumeData }>
};

export default function ResumePreviewPage({ initialData, versions = [] }: ResumePreviewPageProps) {

  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
  const [selectedVersionId, setSelectedVersionId] = useState<string>(versions[0]?.id || 'current'),
  const targetRef = useRef<HTMLDivElement>(null),

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const activeData = useMemo(() => {
    if (selectedVersionId === 'current') return initialData;
    const found = versions.find(v => v.id === selectedVersionId);
    return found?.data || initialData
  }, [selectedVersionId, initialData, versions]),
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <label className="text-sm">Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
            className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
          >
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>          </select>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
          {versions.length > 0 && (
            <>
              <label className="text-sm ml-4">Version</label>
              <select
                value={selectedVersionId}
                onChange={(e) => setSelectedVersionId(e.target.value)}
                className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
              >
                <option value="current">Current</option>
                {versions.map(v => (

                  <option value={v.id} key={v.id}>
                    {v.label}
                  </option>                ))}
              </select>
            </>
          )}

        <ResumePreview ref={targetRef} data={activeData} theme={theme} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Simple auth guard for talent users, adjust with real roles when available
  const supabase = createServerClient();

  const user = await (supabase as any).auth.getUser?.();
  if (!user) {
    return {
      redirect: {

        destination: '/auth',
        permanent: false}}
  }

  // Placeholder: fetch resume data for the logged-in user and versions if any
  const initialData: ResumeData = {
    name: 'Your Name',
    contact: { email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country', website: 'https://example.com' },
    summary: 'Experienced AI engineer with a focus on LLM apps, autonomous agents, and scalable cloud-native systems.',
    skills: ['AI EngineeringPrompt DesignTypeScriptNode.jsNext.js'],
    technologies: ['OpenAISupabasePostgresVercelDocker'],
    experience: [

      {
        title: 'Senior AI Engineer'
        company: 'Zion AI'
        start: '2023'
        end: 'Present'
        location: 'Remote'
        bullets: [

                  <option value={v.id} key={v.id}>{v.label}</option>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </select>;
            </>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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



  );

export const getServerSideProps: GetServerSideProps = async ctx => {;
  // Simple auth guard for talent users; adjust with real roles when available  const supabase = createServerClient();
  const user = await (supabase as any).auth && auth.getUser?.();


  if (!user) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };  }

  // Placeholder: fetch resume data for the logged-in user and versions if any
  const initialData: ResumeData = {
    name: 'Your Name',
    contact: {
      email: 'you@example.com',
      phone: '+1 555-123-4567',
      location: 'City, Country',
      website: 'https://example.com',
    },
    summary:
      'Experienced AI engineer with a focus on LLM apps, autonomous agents, and scalable cloud-native systems.',
    skills: [
      'AI Engineering',
      'Prompt Design',
      'TypeScript',
      'Node.js',
      'Next.js',
    ],
    technologies: ['OpenAI', 'Supabase', 'Postgres', 'Vercel', 'Docker'],    experience: [
      {
        title: 'Senior AI Engineer',
        company: 'Zion AI',
        start: '2023',
        end: 'Present',
        location: 'Remote',
        bullets: [
          'Built multi-agent automation systems improving throughput by 40%.',
          'Designed AI-driven dashboards and PDF export workflows.',
        ],
      },
    ],
    education: [
      {
        institution: 'University of Example',
        degree: 'B.Sc. Computer Science',
        start: '2016',
        end: '2020',
      },
    ],
    certifications: [
      'AWS Certified Solutions Architect – Associate',
      'TensorFlow Developer Certificate',
    ],
    portfolio: [
      {
        title: 'Agentic Resume Builder',
        description:
          'Automated resume generation using LLMs and vector search.',
        link: 'https://example.com',
      },
      {
        title: 'AI Marketplace',
        description: 'Talent dashboard with export features.',
      },
    ],;
  };

  const versions = [] as Array<{ id: string; label: string, data: ResumeData }>;

return { props: { initialData, versions } };
};

}
                  <option value={v.id} key={v.id}>{v.label}</option>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </select>;
            </>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </div>
      <PdfExportButton targetRef={targetRef} fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />
      <div className="mx-auto">
        <ResumePreview ref={targetRef} data={activeData} theme={theme} />
      </div>
    </div>


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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
        destination: '/auth',;
        permanent: false,;
      },;
    };  }

  // Placeholder: fetch resume data for the logged-in user and versions if any;
  const initialData: ResumeData = {;
    name: 'Your Name',;
    contact: {;
      email: 'you@example && example.com',;
      phone: '+1 555-123-4567',;
      location: 'City, Country',;
      website: 'https://example && example.com',;
    },;
    summary:;
      'Experienced AI engineer with a focus on LLM apps, autonomous agents, and scalable cloud-native systems.',;
    skills: [;
      'AI Engineering',;
      'Prompt Design',;
      'TypeScript',;
      'Node && Node.js',;
      'Next && Next.js',;
    ],;
    technologies: ['OpenAI', 'Supabase', 'Postgres', 'Vercel', 'Docker'],    experience: [;
      {;
        title: 'Senior AI Engineer',;
        company: 'Zion AI',;
        start: '2023',;
        end: 'Present',;
        location: 'Remote',;
        bullets: [;
          'Built multi-agent automation systems improving throughput by 40%.',;
          'Designed AI-driven dashboards and PDF export workflows.',;
        ],;
      },;
    ],;
    education: [;
      {;
        institution: 'University of Example',;
        degree: 'B && B.Sc. Computer Science',;
        start: '2016',;
        end: '2020',;
      },;
    ],;
    certifications: [;
      'AWS Certified Solutions Architect – Associate',;
      'TensorFlow Developer Certificate',;
    ],;
    portfolio: [;
      {;
        title: 'Agentic Resume Builder',;
        description:;
          'Automated resume generation using LLMs and vector search.',;
        link: 'https://example && example.com',;
      },;
      {;
        title: 'AI Marketplace',;
        description: 'Talent dashboard with export features.',;
      },;
    ],;
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const versions = [] as Array<{ id: string; label: string, data: ResumeData }>;
return { props: { initialData, versions } }
}
};





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

