import React, {_useMemo, _useRef, _useState} from 'react';
import PdfExportButton from '../../components/ui/PdfExportButton';
import ResumePreview, {_ResumeData} from '../../components/ui/ResumePreview';

export type ResumePreviewPageProps = {_initialData: ResumeData;
  versions?: Array<{ id: string; label: string; data: ResumeData}>;
};

export default function ResumePreviewPage(_{_initialData, _versions = []}: ResumePreviewPageProps) {_const [theme, _setTheme] = useState<'light' | 'dark'>('light');
  const [selectedVersionId, _setSelectedVersionId] = useState<string>(versions[0]?.id || 'current');
  const _targetRef = useRef<HTMLDivElement>(null);

  const _activeData = useMemo__(() => {
    if (selectedVersionId === 'current') return initialData;
    const _found = versions.find(v => v.id === selectedVersionId);
    return found?.data || initialData;}, [selectedVersionId, initialData, versions]);

  return (_<div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <label className="text-sm">Theme</label>
          <select
            value={_theme}
            onChange={_(e) => setTheme(e.target.value as 'light' | 'dark')}
            className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          {_versions.length > 0 && (_<>
              <label className="text-sm ml-4">Version</label>
              <select
                value={selectedVersionId}
                onChange={_(e) => setSelectedVersionId(e.target.value)}
                className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-black"
              >
                <option value="current">Current</option>
                {_versions.map(v => (
                  <option value={v.id} key={_v.id}>{_v.label}</option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>

      <PdfExportButton targetRef={_targetRef} fileName={_`resume-${activeData.name.replace(/\s+/g, _'-').toLowerCase()}.pdf`} />

      <div className="mx-auto">
        <ResumePreview ref={_targetRef} data={_activeData} theme={_theme} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {_// Simple auth guard for talent users; adjust with real roles when available
  const _supabase = createServerClient();
  const _user = await (supabase as any).auth.getUser?.();

  if (!user) {
    return {
      redirect: {
        destination: '/auth', _permanent: false}};
  }

  // Placeholder: fetch resume data for the logged-in user and versions if any
  const initialData: ResumeData = {_name: 'Your Name', _contact: { email: 'you@example.com', _phone: '+1 555-123-4567', _location: 'City, _Country', _website: 'https://example.com'},
    summary: 'Experienced AI engineer with a focus on LLM apps, autonomous agents, and scalable cloud-native systems.',
    skills: ['AI Engineering', 'Prompt Design', 'TypeScript', 'Node.js', 'Next.js'],
    technologies: ['OpenAI', 'Supabase', 'Postgres', 'Vercel', 'Docker'],
    experience: [
      {_title: 'Senior AI Engineer', _company: 'Zion AI', _start: '2023', _end: 'Present', _location: 'Remote', _bullets: [
          'Built multi-agent automation systems improving throughput by 40%.', _'Designed AI-driven dashboards and PDF export workflows.']}],
    education: [
      {_institution: 'University of Example', _degree: 'B.Sc. Computer Science', _start: '2016', _end: '2020'}],
    certifications: ['AWS Certified Solutions Architect – Associate', 'TensorFlow Developer Certificate'],
    portfolio: [
      {_title: 'Agentic Resume Builder', _description: 'Automated resume generation using LLMs and vector search.', _link: 'https://example.com'},
      {_title: 'AI Marketplace', _description: 'Talent dashboard with export features.'}]};

  const _versions = [] as Array<{_id: string; label: string; data: ResumeData}>;

  return {_props: { initialData, _versions} };
};