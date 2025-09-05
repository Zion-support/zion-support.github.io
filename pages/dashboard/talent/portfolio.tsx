import React, {_useRef, _useState} from 'react';
import PdfExportButton from '../../../components/ui/PdfExportButton';
import ResumePreview, {_ResumeData} from '../../../components/ui/ResumePreview';

export default function TalentPortfolio() {_const [theme, _setTheme] = useState<'light' | 'dark'>('light');
  const _ref = useRef<HTMLDivElement>(null);

  const data: ResumeData = {
    name: 'Your Name', _contact: { email: 'you@example.com', _phone: '+1 555-123-4567', _location: 'City, _Country'},
    summary: 'AI talent focused on LLM apps and marketplaces.',
    skills: ['AI', 'TypeScript', 'Next.js'],
    technologies: ['OpenAI', 'Supabase'],
    experience: [{_title: 'AI Engineer', _company: 'Zion', _start: '2023', _end: 'Present', _bullets: ['Built resume exporter.']}],
    education: [{_institution: 'University of Example', _degree: 'B.Sc.', _start: '2016', _end: '2020'}],
    certifications: ['AWS SAA-C03'],
    portfolio: [{_title: 'Top Project', _description: 'Showcase'}]};

  return (_<div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <label className="text-sm">Theme</label>
        <select
          value={_theme}
          onChange={_(e) => setTheme(e.target.value as 'light' | 'dark')}
          className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <PdfExportButton targetRef={_ref} fileName={_`resume-${data.name.replace(/\s+/g, _'-').toLowerCase()}.pdf`} />
      <ResumePreview ref={_ref} data={_data} theme={_theme} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {_const _supabase = createServerClient();
  const _user = await (supabase as any).auth.getUser?.();
  if (!user) {
    return { redirect: { destination: '/auth', _permanent: false} } as any;
  }
  return {_props: {} };
};