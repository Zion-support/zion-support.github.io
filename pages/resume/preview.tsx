<<<<<<< HEAD

<<<<<<< HEAD
=======
> <option value="light" >Light</option> <option value="dark" >Dark</option> </select>) )
}</select> </>)
> <option value="light" >Light</option> <option value="dark" >Dark</option> </select>) ) 
}</select> </>) 
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedVersionId, setSelectedVersionId] = useState<string>(
    versions[0]?.id |'current'
  );  const targetRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
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

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  }, [selectedVersionId, initialData, versions]);
  return (
    <div className='relative'>;
      <div className='flex items-center justify-between mb-4'>;
        <div className='flex items-center gap-3'>;
          <label className='text-sm'>Theme</label>;
          <select
            value={theme}





<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            onChange={e => setTheme(e && e.target.value as 'light' | 'dark')}
            className='border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black';
          >;
            <option value='light'>Light</option>;
            <option value='dark'>Dark</option>          </select>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

          {versions && versions.length > 0 && (;
            <>;
              <label className='text-sm ml-4'>Version</label>;
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

<<<<<<< HEAD
=======
import { GetServerSideProps } from 'next';
import React, { useMemo, useRef, useState } from 'react';
import PdfExportButton from '../../components/ui/PdfExportButton';
import ResumePreview, { ResumeData } from '../../components/ui/ResumePreview';
import { createServerClient } from '../../utils/supabase/server';
=======
  const activeData = useMemo(() => {
    if (selectedVersionId === 'current') return initialData;
    const found = versions.find(v => v.id === selectedVersionId);
    return found?.data |initialData;
  }, [selectedVersionId, initialData, versions]);

import { GetServerSideProps } from 'next';
import React, { useMemo, useRef, useState } from 'react';
import PdfExportButton from '../../components/ui/PdfExportButton';
import ResumePreview, { ResumeData } from '../../components/ui/ResumePreview';
import { createServerClient } from '../../utils/supabase/server';

import { GetServerSideProps } from 'next',
import React, { useMemo, useRef, useState } from 'react',
import PdfExportButton from '../../components/ui/PdfExportButton',
import ResumePreview, { ResumeData } from '../../components/ui/ResumePreview',
import { createServerClient } from '../../utils/supabase/server',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type ResumePreviewPageProps = {
  initialData: ResumeData,
  versions?: Array<{ id: string, label: string, data: ResumeData }>
},
export default function ResumePreviewPage({ initialData, versions = [] }: ResumePreviewPageProps) {

<<<<<<< HEAD
=======
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
  const [selectedVersionId, setSelectedVersionId] = useState<string>(versions[0]?.id || 'current'),
  const targetRef = useRef<HTMLDivElement>(null),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const activeData = useMemo(() => {
    if (selectedVersionId === 'current') return initialData;
    const found = versions.find(v => v.id === selectedVersionId);
    return found?.data || initialData
  }, [selectedVersionId, initialData, versions]);

<<<<<<< HEAD
=======
  }, [selectedVersionId, initialData, versions]),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

export default function ResumePreviewPage({ initialData, versions = [] }: ResumePreviewPageProps) {

  const activeData = useMemo(() => {
    if (selectedVersionId === 'current') return initialData;
    const found = versions.find(v => v.id === selectedVersionId);
    return found?.data || initialData
  }, [selectedVersionId, initialData, versions]),
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <label className="text-sm">Theme</label>
          <select
<<<<<<< HEAD
            value={theme}
            onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
            className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
          >

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


<<<<<<< HEAD
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>          </select>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {versions.length > 0 && (
            <>
              <label className="text-sm ml-4">Version</label>
              <select
<<<<<<< HEAD
<<<<<<< HEAD
                value={selectedVersionId}
                onChange={(e) => setSelectedVersionId(e.target.value)}
                className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
              >
                <option value="current">Current</option>
                {versions.map(v => (
=======
        </div>
      </div>
      <PdfExportButton
        targetRef={targetRef}
        fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`}
      />
      <div className='mx-auto'>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


      <PdfExportButton targetRef={targetRef} fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />

<<<<<<< HEAD
=======

      <PdfExportButton targetRef={targetRef} fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />

                  <option value={v.id} key={v.id}>{v.label}</option>
                ))}
              </select>
            </>
          )}
<PdfExportButton targetRef={targetRef} fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="mx-auto">
        <ResumePreview ref={targetRef} data={activeData} theme={theme} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Simple auth guard for talent users, adjust with real roles when available
  const supabase = createServerClient();
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const user = await (supabase as any).auth.getUser?.();
  if (!user) {
    return {
      redirect: {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {
        title: 'Senior AI Engineer'
        company: 'Zion AI'
        start: '2023'
        end: 'Present'
        location: 'Remote'
        bullets: [
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>;
      </div>;

      <PdfExportButton
        targetRef={targetRef}
        fileName={`resume-${activeData && activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`}
      />;

      <div className='mx-auto'>;
        <ResumePreview ref={targetRef} data={activeData} theme={theme} />;
      </div>;
    </div>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD
  const user = await (supabase as any).auth && auth.getUser?.();
<<<<<<< HEAD


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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          'Built multi-agent automation systems improving throughput by 40%.Designed AI-driven dashboards and PDF export workflows.']}];
    education: [
      { institution: 'University of Example', degree: 'B.Sc. Computer Science', start: '2016', end: '2020' }],
    certifications: ['AWS Certified Solutions Architect – AssociateTensorFlow Developer Certificate'],
    portfolio: [
      { title: 'Agentic Resume Builder', description: 'Automated resume generation using LLMs and vector search.', link: 'https://example.com' },
      { title: 'AI Marketplace', description: 'Talent dashboard with export features.' }]},
  const versions = [] as Array<{ id: string, label: string, data: ResumeData }>,
  return { props: { initialData, versions } }

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
> <option value="light" >Light</option> <option value="dark" >Dark</option> </select>) );
}</select> </>);
}</div> </div> <PdfExportButton target_ref= {
  target_ref;
}file_name= {
  `resume-$ {
  active_data.name.replace (/\s+/g, '-') .toLowerCase ();
}.pdf`;
}/> </div> </div>);
}// Check condition
if ( {) {
  $2
}
  return {
  redirect: {
}//Placeholder: fetch resume data for the logged - in user and versions if any const initial_data: ResumeData = {
  name: 'Your Name', contact: {
  email: 'you@example.com', phone: '+1 555 - 123 - 4567', location: 'City, Country', website: 'https://example.com';
}
;
export default /**
 * ResumePreviewPage - Function description
 */
function ResumePreviewPage() {
  const [theme, set_theme] = useState<'light' | 'dark'>('light');
  const [selectedVersionId, setSelectedVersionId] = useState < string>(
    versions[0]?.id || 'current');  const target_ref = useRef < HTMLDivElement>(null);
;
  const active_data = useMemo (() => {
    // Check condition
if (return initial_data) {
  $2
}
    const found = versions.find (v => v.id === selectedVersionId);
    return found?.data || initial_data;
  }, [selectedVersionId, initial_data, versions]);
;
  return (
    <div className='relative'>;
      <div className='flex items - center justify - between mb - 4'>;
        <div className='flex items - center gap - 3'>;
          <label className='text - sm'>Theme</label>;
          <select;
            value={theme}
            on_change={e => set_theme (e.target.value as 'light' | 'dark')}
            className='border border - gray - 300 dark:border - gray - 700 rounded px - 2 py - 1 bg - white dark:bg - black';
          >;
            <option value='light'>Light</option>;
            <option value='dark'>Dark</option>          </select>;
          {versions.length > 0 && (
            <>;
              <label className='text - sm ml - 4'>Version</label>;
              <select;
                value={selectedVersionId}
                on_change={e => setSelectedVersionId (e.target.value)}
                className='border border - gray - 300 dark:border - gray - 700 rounded px - 2 py - 1 bg - white dark:bg - black';
              >;
                <option value='current'>Current</option>;
                {versions.map (v => (
                  <option value={v.id} key={v.id}>;
                    {v.label}
                  </option>                ))}
              </select>;
            </>)}
        </div>;
      </div>;
      <PdfExportButton;
        target_ref={target_ref}
        file_name={`resume-${active_data.name.replace (/\s+/g, '-').toLowerCase ()}.pdf`}
      />;
      <div className='mx - auto'>;
        <ResumePreview ref={target_ref} data={active_data} theme={theme} />;
      </div>;
    </div>);
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
                  <option value={v.id} key={v.id}>
                    {v.label}
                  </option>                ))}
              </select>
            </>
          )}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
        bullets: [;
=======
bullets: [;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        bullets: [;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
}
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
};



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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
};


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
