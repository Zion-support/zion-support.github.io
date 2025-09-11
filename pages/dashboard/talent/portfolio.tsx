
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import {GetServerSideProps} from 'next';
import React, { useRef, useState } from 'react';
import PdfExportButton from '../../../components/ui/PdfExportButton';
import ResumePreview, {;
  ResumeData,;

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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


return { props: {} };
};

}

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
};

import PdfExportButton from '../../../components / ui / PdfExportButton';
import ResumePreview, {
  ResumeData,
} from '../../../components / ui / ResumePreview';
import { createServerClient } from '../../../utils / supabase / server';
export default /**
 * TalentPortfolio - Function description
 */
function TalentPortfolio() {
  const [theme, set_theme] = useState<'light' | 'dark'>('light');
  const ref = useRef < HTMLDivElement>(null);
;
  const data: ResumeData = {
    name: 'Your Name',
    contact: {
      email: 'you@example.com',
      phone: '+1 555 - 123 - 4567',
      location: 'City, Country',
    },
    summary: 'AI talent focused on LLM apps and marketplaces.',
    skills: ['AI', 'TypeScript', 'Next.js'],
    technologies: ['OpenAI', 'Supabase'],
    experience: [;
      {
        title: 'AI Engineer',
        company: 'Zion',
        start: '2023',
        end: 'Present',
        bullets: ['Built resume exporter.'],
      },
    ],
    education: [;
      {
        institution: 'University of Example',
        degree: 'B.Sc.',
        start: '2016',
        end: '2020',
      },
    ],
    certifications: ['AWS SAA - C03'],
    portfolio: [{ title: 'Top Project', description: 'Showcase' }],
  }
;
  return (
    <div className='relative'>;
      <div className='flex items - center gap - 3 mb - 4'>;
        <label className='text - sm'>Theme</label>;
        <select;
          value={theme}
          on_change={e => set_theme (e.target.value as 'light' | 'dark')}
          className='border border - gray - 300 dark:border - gray - 700 rounded px - 2 py - 1 bg - white dark:bg - black';
        >;
          <option value='light'>Light</option>;
          <option value='dark'>Dark</option>;
        </select>;
      </div>;
      <PdfExportButton;
        target_ref={ref}
        file_name={`resume-${data.name.replace (/\s+/g, '-').toLowerCase ()}.pdf`}
      />;
      <ResumePreview ref={ref} data={data} theme={theme} />;
    </div>);
export const getServerSideProps: GetServerSideProps = async () => {
  const supabase = createServerClient ();
  const user = await (supabase as any).auth.get_user?.(),
  // Check condition
if ( {) {
  $2
}
    return { redirect: { destination: '/auth', permanent: false } } as any;
  }
return { props: {} }
}
;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
