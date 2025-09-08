



  }, [selectedVersionId, initialData, versions]);
  return (
    <div className='relative'>;
      <div className='flex items-center justify-between mb-4'>;
        <div className='flex items-center gap-3'>;
          <label className='text-sm'>Theme</label>;
          <select
            value={theme}







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



  const activeData = useMemo(() => {
    if (selectedVersionId === 'current') return initialData,
    const found = versions.find(v => v.id === selectedVersionId),
    return found?.data || initialData
  }, [selectedVersionId, initialData, versions]);

  }, [selectedVersionId, initialData, versions]),
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <label className="text-sm">Theme</label>
          <select


            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>






          {versions.length > 0 && (
            <>
              <label className="text-sm ml-4">Version</label>
              <select

      <PdfExportButton targetRef={targetRef} fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />


                {versions.map(v => (


      <PdfExportButton targetRef={targetRef} fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />


      <div className="mx-auto">
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


