<<<<<<< HEAD
<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
=======
import {GetServerSideProps} from 'next';
import React, { useRef, useState } from 'react';
import PdfExportButton from '../../../components/ui/PdfExportButton';
import ResumePreview, {;
  ResumeData,;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { GetServerSideProps } from 'next',
import React, { useRef, useState } from 'react',
import PdfExportButton from '../../../components/ui/PdfExportButton',
import ResumePreview, { ResumeData } from '../../../components/ui/ResumePreview',
import { createServerClient } from '../../../utils/supabase/server',
export default function TalentPortfolio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
  const ref = useRef<HTMLDivElement>(null),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const data: ResumeData = {
    name: 'Your Name',
    contact: {
       email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country' 
    },
    summary: 'AI talent focused on LLM apps and marketplaces.',
    skills: ['AITypeScriptNext.js'],
    technologies: ['OpenAISupabase'],
    experience: [{ title: 'AI Engineer', company: 'Zion', start: '2023', end: 'Present', bullets: ['Built resume exporter.'] }],
    education: [{ institution: 'University of Example', degree: 'B.Sc.', start: '2016', end: '2020' }],
    certifications: ['AWS SAA-C03'],
    portfolio: [{ title: 'Top Project', description: 'Showcase' }]},
  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <label className="text-sm">Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
          className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
<<<<<<< HEAD
      <PdfExportButton
        targetRef={ref}
        fileName={`resume-${data.name.replace(/\s+/g, '-').toLowerCase()}.pdf`}
      />
      <ResumePreview ref={ref} data={data} theme={theme} />
    </div>
  );
export const getServerSideProps: GetServerSideProps = async () => {;
  const supabase = createServerClient();
  const user = await (supabase as any).auth.getUser?.()
  if (!user) {
    return { redirect: { destination: '/auth', permanent: false } } as any;
  }
<<<<<<< HEAD
return { props: {} }
}

=======
return { props: {} };
};

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

      <PdfExportButton targetRef={ref} fileName={`resume-${data.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />
      <ResumePreview ref={ref} data={data} theme={theme} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const supabase = createServerClient();
  const user = await (supabase as any).auth.getUser?.();
  if (!user) {
    return { redirect: { destination: '/auth', permanent: false } } as any
  }
  return { props: {} }
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
