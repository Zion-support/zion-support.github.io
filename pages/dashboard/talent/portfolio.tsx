import { GetServerSideProps } from 'next';
import React, { useRef, useState } from 'react';
import PdfExportButton from '../../../components/ui/PdfExportButton';
<<<<<<< HEAD
<<<<<<< HEAD
import ResumePreview, {
  ResumeData,;
} from '../../../components/ui/ResumePreview';
import { createServerClient } from '../../../utils/supabase/server';

=======
import ResumePreview, { ResumeData } from '../../../components/ui/ResumePreview';
import { createServerClient } from '../../../utils/supabase/server';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import ResumePreview, { ResumeData } from '../../../components/ui/ResumePreview';
import { createServerClient } from '../../../utils/supabase/server';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function TalentPortfolio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const ref = useRef<HTMLDivElement>(null);

  const data: ResumeData = {
    name: 'Your Name',
<<<<<<< HEAD
    contact: {
<<<<<<< HEAD
      email: 'you@example.com',
      phone: '+1 555-123-4567',
      location: 'City, Country',
    },
=======
    contact: { email: 'you@example.com', phone: '+1 555-123-4567', location: 'City, Country' };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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

      <PdfExportButton targetRef={ref} fileName={`resume-${data.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />
      <ResumePreview ref={ref} data={data} theme={theme} />
    </div>
<<<<<<< HEAD
  );
=======
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

      <PdfExportButton targetRef={ref} fileName={`resume-${data.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />
      <ResumePreview ref={ref} data={data} theme={theme} />
    </div>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export const getServerSideProps: GetServerSideProps = async () => {
  const supabase = createServerClient();
  const user = await (supabase as any).auth.getUser?.();
  if (!user) {
<<<<<<< HEAD
<<<<<<< HEAD
    return { redirect: { destination: '/auth', permanent: false } } as any;
  }
  return { props: {} };
};
=======
    return { redirect: { destination: '/auth', permanent: false } } as any
  }
  return { props: {} }
};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return { redirect: { destination: '/auth', permanent: false } } as any
  }
  return { props: {} }
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
