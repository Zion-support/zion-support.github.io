<<<<<<< HEAD
<<<<<<< HEAD
 > <option value="light" >Light</option> <option value="dark" >Dark</option> </select>) ) 
}</select> </>) 
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
=======
import { GetServerSideProps } from 'next';
import React, { useMemo, useRef, useState } from 'react';
import PdfExportButton from '../../components/ui/PdfExportButton';
import ResumePreview, { ResumeData } from '../../components/ui/ResumePreview';
import { createServerClient } from '../../utils/supabase/server';
export type ResumePreviewPageProps = {
  initialData: ResumeData,
  versions?: Array<{ id: string, label: string, data: ResumeData }>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default function ResumePreviewPage({ initialData, versions = [] }: ResumePreviewPageProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
<<<<<<< HEAD
  const [selectedVersionId, setSelectedVersionId] = useState<string>(
    versions[0]?.id || 'current'
  );
=======
import { GetServerSideProps } from 'next';
import React, { useMemo, useRef, useState } from 'react';
import PdfExportButton from '../../components/ui/PdfExportButton';
import ResumePreview, { ResumeData } from '../../components/ui/ResumePreview';
import { createServerClient } from '../../utils/supabase/server';
export type ResumePreviewPageProps = {
  initialData: ResumeData,
  versions?: Array<{ id: string, label: string, data: ResumeData }>
};

export default function ResumePreviewPage({ initialData, versions = [] }: ResumePreviewPageProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedVersionId, setSelectedVersionId] = useState<string>(versions[0]?.id || 'current');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const [selectedVersionId, setSelectedVersionId] = useState<string>(versions[0]?.id || 'current');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const targetRef = useRef<HTMLDivElement>(null);

  const activeData = useMemo(() => {
    if (selectedVersionId === 'current') return initialData;
    const found = versions.find(v => v.id === selectedVersionId);
<<<<<<< HEAD
<<<<<<< HEAD
    return found?.data || initialData;
=======
    return found?.data || initialData
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [selectedVersionId, initialData, versions]);

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
<<<<<<< HEAD
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
=======
    return found?.data || initialData
  }, [selectedVersionId, initialData, versions]);

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
            <option value="light">Light</option>
            <option value="dark">Dark</option>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <option value="light">Light</option>
            <option value="dark">Dark</option>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </select>

          {versions.length > 0 && (
            <>
<<<<<<< HEAD
<<<<<<< HEAD
              <label className='text-sm ml-4'>Version</label>
=======
              <label className="text-sm ml-4">Version</label>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <select
                value={selectedVersionId}
                onChange={(e) => setSelectedVersionId(e.target.value)}
                className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
              >
                <option value="current">Current</option>
                {versions.map(v => (
<<<<<<< HEAD
                  <option value={v.id} key={v.id}>
                    {v.label}
                  </option>
=======
              <label className="text-sm ml-4">Version</label>
              <select
                value={selectedVersionId}
                onChange={(e) => setSelectedVersionId(e.target.value)}
                className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
              >
                <option value="current">Current</option>
                {versions.map(v => (
                  <option value={v.id} key={v.id}>{v.label}</option>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <option value={v.id} key={v.id}>{v.label}</option>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                ))}
              </select>
            </>
          )}
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      <PdfExportButton
        targetRef={targetRef}
        fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`}
      />
=======
      <PdfExportButton targetRef={targetRef} fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

      <div className="mx-auto">
        <ResumePreview ref={targetRef} data={activeData} theme={theme} />
      </div>
    </div>
  )
}

<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async ctx => {
  // Simple auth guard for talent users; adjust with real roles when available
=======
      <PdfExportButton targetRef={targetRef} fileName={`resume-${activeData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />

      <div className="mx-auto">
        <ResumePreview ref={targetRef} data={activeData} theme={theme} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Simple auth guard for talent users, adjust with real roles when available
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Simple auth guard for talent users, adjust with real roles when available
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const supabase = createServerClient();
  const user = await (supabase as any).auth.getUser?.();

  if (!user) {
    return {
      redirect: {
        destination: '/auth',
<<<<<<< HEAD
<<<<<<< HEAD
        permanent: false,
      },
    };
=======
        permanent: false}}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        permanent: false}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  // Placeholder: fetch resume data for the logged-in user and versions if any
  const initialData: ResumeData = {
    name: 'Your Name',
<<<<<<< HEAD
<<<<<<< HEAD
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
    technologies: ['OpenAI', 'Supabase', 'Postgres', 'Vercel', 'Docker'],
=======
    contact: { email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country', website: 'https://example.com' },
    summary: 'Experienced AI engineer with a focus on LLM apps, autonomous agents, and scalable cloud-native systems.',
    skills: ['AI EngineeringPrompt DesignTypeScriptNode.jsNext.js'],
    technologies: ['OpenAISupabasePostgresVercelDocker'],
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    contact: { email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country', website: 'https://example.com' },
    summary: 'Experienced AI engineer with a focus on LLM apps, autonomous agents, and scalable cloud-native systems.';
    skills: ['AI EngineeringPrompt DesignTypeScriptNode.jsNext.js'],
    technologies: ['OpenAISupabasePostgresVercelDocker'],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    experience: [
      {
        title: 'Senior AI Engineer',
        company: 'Zion AI',
        start: '2023',
        end: 'Present',
        location: 'Remote',
        bullets: [
<<<<<<< HEAD
<<<<<<< HEAD
          'Built multi-agent automation systems improving throughput by 40%.',
          'Designed AI-driven dashboards and PDF export workflows.',
        ],
      },
    ],
=======
          'Built multi-agent automation systems improving throughput by 40%.Designed AI-driven dashboards and PDF export workflows.']}];
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    education: [
      { institution: 'University of Example', degree: 'B.Sc. Computer Science', start: '2016', end: '2020' }],
    certifications: ['AWS Certified Solutions Architect – AssociateTensorFlow Developer Certificate'],
    portfolio: [
<<<<<<< HEAD
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
    ],
  };

  const versions = [] as Array<{ id: string; label: string; data: ResumeData }>;

  return { props: { initialData, versions } };
};
=======
          'Built multi-agent automation systems improving throughput by 40%.Designed AI-driven dashboards and PDF export workflows.']}];
    education: [
      { institution: 'University of Example', degree: 'B.Sc. Computer Science', start: '2016', end: '2020' }],
    certifications: ['AWS Certified Solutions Architect – AssociateTensorFlow Developer Certificate'],
    portfolio: [
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      { title: 'Agentic Resume Builder', description: 'Automated resume generation using LLMs and vector search.', link: 'https://example.com' },
      { title: 'AI Marketplace', description: 'Talent dashboard with export features.' }]},
  const versions = [] as Array<{ id: string, label: string, data: ResumeData }>,
  return { props: { initialData, versions } }
<<<<<<< HEAD
};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
