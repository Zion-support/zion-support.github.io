<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { GetServerSideProps  } from 'next';
import React, { useMemo, useRef, useState } from 'react',
import PdfExportButton from '../../components/ui/PdfExportButton',
import ResumePreview, { ResumeData } from '../../components/ui/ResumePreview';
import { createServerClient } from '../../utils/supabase/server';
export type ResumePreviewPageProps = any;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
> <option value="light" >Light</option> <option value="dark" >Dark</option> </select>) )
=======
 > <option value="light" >Light</option> <option value="dark" >Dark</option> </select>) )
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}</select> </>)
=======
> <option value="light" >Light</option> <option value="dark" >Dark</option> </select>) ) 
}</select> </>) 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
}//Placeholder: fetch resume data for the logged-in user and versions if any const initialData: ResumeData = {
  name: 'Your Name', contact: {
  email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country', website: 'https://example.com'
}
=======

}//Placeholder: fetch resume data for the logged-in user and versions if any const initialData: ResumeData = {
  name: 'Your Name', contact: {
  email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country', website: 'https://example.com'
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function ResumePreviewPage({
<<<<<<< HEAD
  initialData
  versions = []
}: ResumePreviewPageProps) {
=======
  initialData,
  versions = [],
}: ResumePreviewPageProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedVersionId, setSelectedVersionId] = useState<string>(
<<<<<<< HEAD
    versions[0]?.id |'current'
  );  const targetRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
  const activeData = useMemo(() => {
    if (selectedVersionId === 'current') return initialData;
    const found = versions.find(v => v.id === selectedVersionId);
    return found?.data |initialData;
=======
    versions[0]?.id || 'current'
  );
  const targetRef = useRef<HTMLDivElement>(null);

  const activeData = useMemo(() => {
    if (selectedVersionId === 'current') return initialData;
    const found = versions.find(v => v.id === selectedVersionId);
    return found?.data || initialData;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }, [selectedVersionId, initialData, versions]);
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { GetServerSideProps } from 'next',
import React, { useMemo, useRef, useState } from 'react',
import PdfExportButton from '../../components/ui/PdfExportButton',
import ResumePreview, { ResumeData } from '../../components/ui/ResumePreview',
import { createServerClient } from '../../utils/supabase/server',
export type ResumePreviewPageProps = {
  initialData: ResumeData,
  versions?: Array<{ id: string, label: string, data: ResumeData }>
},
export default function ResumePreviewPage({ initialData, versions = [] }: ResumePreviewPageProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
  const [selectedVersionId, setSelectedVersionId] = useState<string>(versions[0]?.id || 'current'),
  const targetRef = useRef<HTMLDivElement>(null),
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const activeData = useMemo(() => {
    if (selectedVersionId === 'current') return initialData,
    const found = versions.find(v => v.id === selectedVersionId),
    return found?.data || initialData
  }, [selectedVersionId, initialData, versions]),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <label className="text-sm">Theme</label>
          <select
            value={theme  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onChange={(e) => setTheme(e.target.value as 'light' | 'dark')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
          >
<<<<<<< HEAD
            <option value='light'>Light</option>
<<<<<<< HEAD
            <option value='dark'>Dark</option>          </select>
=======
<<<<<<< HEAD
            <option value='dark'>Dark</option>
          </select>

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          {versions.length > 0 && (
            <>
              <label className="text-sm ml-4">Version</label>
              <select
                value={selectedVersionId  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                onChange={(e) => setSelectedVersionId(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
              >
                <option value="current">Current</option>
                {versions.map(v => (
<<<<<<< HEAD
                  <option value={v.id} key={v.id}>
                    {v.label}
<<<<<<< HEAD
                  </option>                ))}
=======
                  </option>
                ))}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </select>
            </>
          )}
<<<<<<< HEAD
        </div>
      </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      <PdfExportButton
        targetRef={targetRef}
        fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`}
      />
      <div className='mx-auto'>
        <ResumePreview ref={targetRef} data={activeData} theme={theme} />
      </div>
    </div>
  );
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async ctx => {
  // Simple auth guard for talent users; adjust with real roles when available  const supabase = createServerClient();
=======
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  // Simple auth guard for talent users; adjust with real roles when available
  const supabase = createServerClient();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const user = await (supabase as any).auth.getUser?.();
  if (!user) {
    return {
      redirect: {
<<<<<<< HEAD
        destination: '/auth'
        permanent: false
      }
    };  }
  // Placeholder: fetch resume data for the logged-in user and versions if any
  const initialData: ResumeData = {
    name: 'Your Name'
=======
        destination: '/auth',
        permanent: false,
      },
    };
  }

  // Placeholder: fetch resume data for the logged-in user and versions if any
  const initialData: ResumeData = {
    name: 'Your Name',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    contact: {
      email: 'you@example.com'
      phone: '+1 555-123-4567'
      location: 'City, Country'
      website: 'https://example.com'
    }
    summary:
      'Experienced AI engineer with a focus on LLM apps, autonomous agents, and scalable cloud-native systems.'
    skills: [
<<<<<<< HEAD
      'AI Engineering'
      'Prompt Design'
      'TypeScript'
      'Node.js'
      'Next.js'
    ]
    technologies: ['OpenAI', 'Supabase', 'Postgres', 'Vercel', 'Docker'],    experience: [
=======
      'AI Engineering',
      'Prompt Design',
      'TypeScript',
      'Node.js',
      'Next.js',
    ],
    technologies: ['OpenAI', 'Supabase', 'Postgres', 'Vercel', 'Docker'],
    experience: [
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      {
        title: 'Senior AI Engineer'
        company: 'Zion AI'
        start: '2023'
        end: 'Present'
        location: 'Remote'
        bullets: [
<<<<<<< HEAD
          'Built multi-agent automation systems improving throughput by 40%.'
          'Designed AI-driven dashboards and PDF export workflows.'
        ]
      }
    ]
=======
          'Built multi-agent automation systems improving throughput by 40%.',
          'Designed AI-driven dashboards and PDF export workflows.',
        ],
      },
    ],
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    education: [
      {
        institution: 'University of Example'
        degree: 'B.Sc. Computer Science'
        start: '2016'
        end: '2020'
      }
    ]
    certifications: [
      'AWS Certified Solutions Architect – Associate'
      'TensorFlow Developer Certificate'
    ]
    portfolio: [
      {
        title: 'Agentic Resume Builder'
        description:
          'Automated resume generation using LLMs and vector search.'
        link: 'https://example.com'
      }
      {
<<<<<<< HEAD
        title: 'AI Marketplace'
        description: 'Talent dashboard with export features.'
      }
    ]
  }
  const versions = [] as Array<{ id: string; label: string, data: ResumeData }>;
return { props: { initialData, versions } }
}
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
        title: 'AI Marketplace',
        description: 'Talent dashboard with export features.',
      },
    ],
  };

  const versions = [] as Array<{ id: string; label: string; data: ResumeData }>;

  return { props: { initialData, versions } };
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
  );

export const getServerSideProps: GetServerSideProps = async ctx => {;
  // Simple auth guard for talent users; adjust with real roles when available  const supabase = createServerClient();
  const user = await (supabase as any).auth.getUser?.();

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
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
