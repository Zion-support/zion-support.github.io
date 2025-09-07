import {GetServerSideProps} from 'next';
import React, { useRef, useState } from 'react';
import PdfExportButton from '../../../components/ui/PdfExportButton';
import ResumePreview, {
  ResumeData;
} from '../../../components/ui/ResumePreview';
import { createServerClient } from '../../../utils/supabase/server';
export default function TalentPortfolio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const ref = useRef<HTMLDivElement>(null);
  const data: ResumeData = {
    name: 'Your Name'
    contact: {
      email: 'you@example.com'
      phone: '+1 555-123-4567'
      location: 'City, Country'
    }
    summary: 'AI talent focused on LLM apps and marketplaces.'
    skills: ['AI', 'TypeScript', 'Next.js']
    technologies: ['OpenAI', 'Supabase']
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
    name: 'Your Name',
    contact: { email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country' },
    summary: 'AI talent focused on LLM apps and marketplaces.',
    skills: ['AITypeScriptNext.js'],
    technologies: ['OpenAISupabase'],
    experience: [{ title: 'AI Engineer', company: 'Zion', start: '2023', end: 'Present', bullets: ['Built resume exporter.'] }],
    education: [{ institution: 'University of Example', degree: 'B.Sc.', start: '2016', end: '2020' }],
    certifications: ['AWS SAA-C03'],
    portfolio: [{ title: 'Top Project', description: 'Showcase' }]},
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
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
return { props: {} }
}
