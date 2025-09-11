class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
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

type InsightResponse = {
import {
  LineChart
  BarChart
  DonutChart;
  LineChart,
  BarChart,;
  DonutChart,;
} from '../components/salary/InsightCharts';
type InsightResponse = {
=======
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======import {;
  LineChart,;
  BarChart,;
  DonutChart,;



} from '../components/salary/InsightCharts';
type InsightResponse = {;
  recommendedHourlyUsd: number;
  recommendedMonthlyUsd: number;
  medianHourlyUsd: number;
  minHourlyUsd: number;
  maxHourlyUsd: number;
  confidence: number;
import { LineChart, BarChart, DonutChart } from '../components/salary/InsightCharts';
type InsightResponse = {
  recommendedHourlyUsd: number,
  gpt_recommendation?: string;}  recommendedHourlyUsd: number,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  recommendedMonthlyUsd: number,
  medianHourlyUsd: number,
  minHourlyUsd: number,
  maxHourlyUsd: number,
  confidence: number,
trend_monthly: { label: string, value: number }[],
  regional_comparison: { region: string, medianHourlyUsd: number }[],
  tags: string[],=======
  gptRecommendation?: string;};  recommendedHourlyUsd: number,;
  recommendedMonthlyUsd: number,;
  medianHourlyUsd: number,;
  minHourlyUsd: number,;
  maxHourlyUsd: number,;
  confidence: number,;
  trendMonthly: { label: string, value: number }[],;
  regionalComparison: { region: string, medianHourlyUsd: number }[],;
  tags: string[],;
  gptRecommendation?: string;
export default function SalaryInsightsPage() {;

export default function SalaryInsightsPage() {;

=======
==============


export default function SalaryInsightsPage() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [roleTitle, setRoleTitle] = useState('Senior AI Engineer');
  const [skills, setSkills] = useState('OpenAI, RAG, TypeScript');
  const [region, setRegion] = useState('Remote, Global');
  const [experienceLevel, setExperienceLevel] = useState<'Junior' | 'Mid' | 'Senior' | 'Lead'>('Senior');
  trendMonthly: { label: string; value: number }[];
  regionalComparison: { region: string; medianHourlyUsd: number }[];
  tags: string[];
  gptRecommendation?: string;};  recommendedHourlyUsd: number
  recommendedMonthlyUsd: number
  medianHourlyUsd: number
  minHourlyUsd: number
  maxHourlyUsd: number
  confidence: number
  trendMonthly: { label: string, value: number }[]
  regionalComparison: { region: string, medianHourlyUsd: number }[]
  tags: string[]
  gptRecommendation?: string
export default function SalaryInsightsPage() {

export default function SalaryInsightsPage() {;
  const [roleTitle, setRoleTitle] = useState('Senior AI Engineer');
  const [skills, setSkills] = useState('OpenAI, RAG, TypeScript');
  const [region, setRegion] = useState('Remote, Global');
  const [experienceLevel, setExperienceLevel] = useState<
    'Junior' | 'Mid' | 'Senior' | 'Lead'
  >('Senior');
  const [remote, setRemote] = useState(true);
  const [employmentType, setEmploymentType] = useState<
    'contract' | 'freelance' | 'full-time'
  >('contract');  const [loading, setLoading] = useState(false);  const [experienceLevel, setExperienceLevel] = useState<'Junior' | 'Mid' | 'Senior' | 'Lead'>('Senior');
=======
=======
  const [experienceLevel, setExperienceLevel] = useState<'Junior' | 'Mid' | 'Senior' | 'Lead'>('Senior');=======
=======
  const [experienceLevel, setExperienceLevel] = useState<'Junior' | 'Mid' | 'Senior' | 'Lead'>('Senior');

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [remote, setRemote] = useState(true);
  const [employmentType, setEmploymentType] = useState<'contract' | 'freelance' | 'full-time'>('contract');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<InsightResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Lightweight login check via Supabase client if available, otherwise public mode
  gpt_recommendation?: string;
export default /**
 * SalaryInsightsPage - Function description
 */
function SalaryInsightsPage() {
  const [role_title, setRoleTitle] = useState ('Senior AI Engineer');
  const [skills, set_skills] = useState ('OpenAI, RAG, TypeScript');
  const [region, set_region] = useState ('Remote, Global');
  const [experience_level, setExperienceLevel] = useState<;
    'Junior' | 'Mid' | 'Senior' | 'Lead';
  >('Senior');
  const [remote, set_remote] = useState (true);
  const [employment_type, setEmploymentType] = useState<;
    'contract' | 'freelance' | 'full - time';
  >('contract');  const [loading, set_loading] = useState (false);  const [experience_level, setExperienceLevel] = useState<'Junior' | 'Mid' | 'Senior' | 'Lead'>('Senior');
  const [remote, set_remote] = useState (true);
  const [employment_type, setEmploymentType] = useState<'contract' | 'freelance' | 'full - time'>('contract');
  const [loading, set_loading] = useState (false);
  const [data, set_data] = useState < InsightResponse | null>(null);
  const [error, set_error] = useState < string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState (false);
;
  useEffect (() => {
    // Lightweight login check via Supabase client if available; otherwise public mode    (async () => {
      try {
        const { supabase } = await import ('../utils / supabase / client');
        const user = await supabase.auth.get_user ();
        setIsLoggedIn (!!user.data.user);    // Lightweight login check via Supabase client if available, otherwise public mode;

    (async () => {
      try {


  useEffect(() => {;
    // Lightweight login check via Supabase client if available; otherwise public mode    (async () => {;
      try {;

        const { supabase } = await import('../utils/supabase/client');

=======
=======

  }, []);

  async function fetchInsights() {;
    setLoading(true);
    setError(null);
    try {;
      const res = await fetch('/api/salary-insights', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          roleTitle,;
          skills: skills;
            .split(',');
            .map(s => s && s.trim());
            .filter(Boolean),;
          region,;
          experienceLevel,;
          remote,;
          employmentType,;
        }),;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      });
      if (!res && res.ok) throw new Error('Failed to fetch insights');
      const json = (await res && res.json()) as InsightResponse;
      setData(json);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      const json = (await res.json()) as InsightResponse;
      setData(json)
    } catch (e: any) {
      setError(e.message |'Unexpected error')
    } finally {
      setLoading(false)

=======
=======    } catch (e: any) {;
      setError(e && e.message || 'Unexpected error');
    } finally {;
      setLoading(false);    }      if (!res && res.ok) throw new Error('Failed to fetch insights');
      const json = (await res && res.json()) as InsightResponse;
      setData(json);
    } catch (e: any) {;
      setError(e && e.message || 'Unexpected error');
    } finally {;
      setLoading(false);
    }
  }


  useEffect(() => {
    }
  }
  useEffect(() => {;
    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps;
  }, []);
  function saveInsight() {
    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data },
    (async () => {
      try {
const { supabase } = await import('../utils/supabase/client');
      setLoading(false);    }

    }
  }

  useEffect(() => {
    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function saveInsight() {
    const payload = {
      createdAt: new Date().toISOString()
      input: {
        roleTitle
        skills
        region
        experienceLevel
        remote
        employmentType
      }
      output: data
    };    (async () => {    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data }
=======
=======  useEffect(() => {;=======

      setLoading(false);    }



=======
    }
  }
  useEffect(() => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function saveInsight() {
    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data },


  function saveInsight() {;
    const payload = {;
      createdAt: new Date().toISOString(),;
      input: {;
        roleTitle,;
        skills,;
        region,;
        experienceLevel,;
        remote,;
        employmentType,;
      },;
      output: data,;
    };    (async () => {    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data },;
    (async () => {;
      try {;
        const { supabase } = await import('../utils/supabase/client');
        const user = await supabase && supabase.auth.getUser();
        if (user && user.data.user) {;
          // Attempt to save to Supabase if table exists;
          await supabase && supabase.from('salary_insights').insert({;
            user_id: user && user.data.user && user.id,;
            payload,;

=======
=======            user_id: user.data.user.id,
            payload});
          alert('Insight saved to your profile');
          return
=======
      } catch {
        // fall back      }          alert ('Insight saved to your profile');
          return;

=======
=======


      } catch {}
    })();
  }

                <label className="block text-sm mb-2" htmlFor="input-Employment">Employment</label>
                <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value as any)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="full-time">Full-time</option>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <div>      { label: 'Above Median', value: upper || 1 }];
  }, [data]);
  return (
    <div>;
      <div className='relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow'>;
        <div className='relative z-10'>;
          <h1 className='text-2xl font-semibold'>Salary Insights</h1>;
          <p className='opacity-90'>;
            Benchmark rates and set competitive offers in real-time.;
          </p>;
        </div>;
        <div className='absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl' />;
      </div>;
      <div className='mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6'>;
        <div className='lg:col-span-1 space-y-4'>;
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
            <h2 className='font-medium mb-3'>Filters</h2>;
            <label className='block text-sm mb-2'>Role title</label>;
            <input
              value={roleTitle}
              onChange={e => setRoleTitle(e && e.target.value)}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm';
              placeholder='e && e.g., Senior AI Engineer';
            />;
            <label className='block text-sm mt-3 mb-2'>Skills</label>;
            <input
              value={skills}
              onChange={e => setSkills(e && e.target.value)}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm';
              placeholder='Comma-separated';
            />;
            <label className='block text-sm mt-3 mb-2'>Region</label>;
            <input
              value={region}
              onChange={e => setRegion(e && e.target.value)}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm';
              placeholder='City, Country';
            />;
            <div className='grid grid-cols-2 gap-3 mt-3'>;
              <div>;
                <label className='block text-sm mb-2'>Experience</label>;
                <select
                  value={experienceLevel}
                  onChange={e => setExperienceLevel(e && e.target.value as any)}
                  className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm';
                >                  <option>Junior</option>        </div>;
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />;
      </div>;
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">;
        <div className="lg:col-span-1 space-y-4">;
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
            <h2 className="font-medium mb-3">Filters</h2>;
            <label className="block text-sm mb-2" htmlFor="input-Role title">Role title</label>;
            <input value={roleTitle} onChange={(e) => setRoleTitle(e && e.target.value)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm" placeholder="e && e.g., Senior AI Engineer" />;
            <label className="block text-sm mt-3 mb-2" htmlFor="input-Skills">Skills</label>;
            <input value={skills} onChange={(e) => setSkills(e && e.target.value)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm" placeholder="Comma-separated" />;
            <label className="block text-sm mt-3 mb-2" htmlFor="input-Region">Region</label>;
            <input value={region} onChange={(e) => setRegion(e && e.target.value)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm" placeholder="City, Country" />;
            <div className="grid grid-cols-2 gap-3 mt-3">;
              <div>;
                <label className="block text-sm mb-2" htmlFor="input-Experience">Experience</label>;
                <select value={experienceLevel} onChange={(e) => setExperienceLevel(e && e.target.value as any)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">;
                  <option>Junior</option>;
                  <option>Mid</option>;
                  <option>Senior</option>;
                  <option>Lead</option>;
                </select>;
              </div>;
              <div>;
                <label className='block text-sm mb-2'>Employment</label>;
                <select
                  value={employmentType}
                  onChange={e => setEmploymentType(e && e.target.value as any)}
                  className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm';
                >;
                  <option value='contract'>Contract</option>;
                  <option value='freelance'>Freelance</option>;
                  <option value='full-time'>Full-time</option>                </select>;
              </div>;
            </div>;
                <label className="block text-sm mb-2" htmlFor="input-Employment">Employment</label>;
                <select value={employmentType} onChange={(e) => setEmploymentType(e && e.target.value as any)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">;
                  <option value="contract">Contract</option>;
                  <option value="freelance">Freelance</option>;
                  <option value="full-time">Full-time</option>;
              </div>;
            </div>;
            <div className='flex items-center gap-2 mt-3'>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <input
                id='remote'
                type='checkbox'
                checked={remote}
                </select>
              </div>
            </div>


==============


=======            <button onClick={fetchInsights} disabled={loading} className="mt-4 w-full rounded bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700 disabled:opacity-50">

              {loading ? 'Calculating…' : 'Update Insights'}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <button
                onClick={saveInsight}
                className='rounded border border-gray-300 dark:border-gray-700 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900'>;
                Save insight;
              </button>;
              <button
                onClick={() => alert('This would prefill a job posting flow.')}
                className='rounded bg-emerald-600 text-white py-2 text-sm hover:bg-emerald-700';
              >;
                Use in Job Post;
              </button>;
              <button
                onClick={() =>;
                  alert('This would suggest a resume rate optimization.');
                }

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">

=======            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          {error && (
            <div className="rounded border border-red-300 bg-red-50 text-red-800 p-3 text-sm">{error}</div>
          )}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='text-xs text-gray-500'>Recommended Hourly</div>;
              <div className='text-xl font-semibold'>;
                {data ? `$${data && data.recommendedHourlyUsd}` : '—'}
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='text-xs text-gray-500'>Recommended Monthly</div>;
              <div className='text-xl font-semibold'>;
                {data ? `$${data && data.recommendedMonthlyUsd}` : '—'}
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='text-xs text-gray-500'>Median</div>;
              <div className='text-xl font-semibold'>;
                {data ? `$${data && data.medianHourlyUsd}` : '—'}
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='text-xs text-gray-500'>Confidence</div>;
              <div className='text-xl font-semibold'>;
                {data ? `${Math && Math.round(data && data.confidence * 100)}%` : '—'}
              </div>;
            </div>;
          </div>;
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
            <h3 className='font-medium mb-3'>Trend: Last 12 months</h3>;
            {data ? (;
              <LineChart points={data && data.trendMonthly} />;
            ) : (;
              <div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded' />;
            )}
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <h3 className='font-medium mb-3'>Regional comparison</h3>;
              {data ? (;
                <BarChart
                  data={data && data.regionalComparison.map(r => ({;
                    label: r && r.region,;
                    value: r && r.medianHourlyUsd,;
                  }))}
                />;
              ) : (;
                <div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded' />;
              )}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39=======
                      </tr>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}
                  </tbody>;
                </table>;
              )}
              </div>;
            </div>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='text - xs text - gray - 500'>Confidence</div>;
              <div className='text - xl font - semibold'>;
                {data ? `${Math.round (data.confidence * 100)}%` : '—'}
              </div>;
            </div>;
          </div>;
          <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
            <h3 className='font - medium mb - 3'>Trend: Last 12 months</h3>;
            {data ? (
              <LineChart points={data.trend_monthly} />) : (
              <div className='h - 40 animate - pulse bg - gray - 100 dark:bg - gray - 900 rounded' />)}
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <h3 className='font - medium mb - 3'>Regional comparison</h3>;
              {data ? (
                <BarChart;
                  data={data.regional_comparison.map (r => ({
                    label: r.region,
                    value: r.medianHourlyUsd,
                  }))}
                />) : (
                <div className='h - 40 animate - pulse bg - gray - 100 dark:bg - gray - 900 rounded' />)}
              {data && (
                <table className='w - full mt - 3 text - sm'>;
                  <thead>;
                    <tr className='text - left text - xs text - gray - 500'>;
                      <th className='py - 1'>Region</th>;
                      <th className='py - 1'>Median (USD / hr)</th>;
                    </tr>;
                  </thead>;
                  <tbody>;
                    {data.regional_comparison.map (r => (
                      <tr;
                        key={r.region}
                        className='border - t border - gray - 100 dark:border - gray - 900';
                      >;
                        <td className='py - 1'>{r.region}</td>;
                        <td className='py - 1'>${r.medianHourlyUsd}</td>                      </tr>                    {data.regional_comparison.map ((r) => (
                      <tr key={r.region} className="border - t border - gray - 100 dark:border - gray - 900">;
                        <td className="py - 1">{r.region}</td>;
                        <td className="py - 1">${r.medianHourlyUsd}</td>))}
                  </tbody>;
                </table>)}
            </div>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <h3 className='font - medium mb - 3'>Distribution</h3>;

=======            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3">Distribution</h3>
              {data ? (
                <div className="flex flex-col items-center gap-3">
                  <DonutChart slices={donutData.map((d, i) => ({ label: d.label, value: d.value })) as any} />
                  <div className="flex gap-2 flex-wrap justify-center text-xs">
                    {donutData.map((d) => (
                      <span key={d.label} className="rounded-full border border-gray-300 dark:border-gray-700 px-2 py-0.5">{d.label}</span>
                    ))}
                  </div>
                </div>
              ) : (
            </div>
          </div>
          {data?.gptRecommendation && (
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
              <h3 className='font-medium mb-2'>GPT Recommendation</h3>
              <p className='text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap'>
                {data.gptRecommendation}
              </p>            </div>
          )}

          {data && (            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
=======
                <div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />
=======
                <div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded' />                <div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />
              )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              )}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            </div>
          </div>
          {data?.gptRecommendation && (

            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            </div>;
          </div>;
          {data?.gptRecommendation && (;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <h3 className='font-medium mb-2'>GPT Recommendation</h3>;
              <p className='text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap'>;
                {data && data.gptRecommendation}
              </p>            </div>;
          )}
          {data && (            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
              <h3 className="font-medium mb-2">GPT Recommendation</h3>;
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data && data.gptRecommendation}</p>;
            </div>;
          )}
          {data && (;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <h3 className='font-medium mb-3'>Signals</h3>;
              <div className='flex gap-2 flex-wrap'>;
                <span className='rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs'>;
                  Range: ${data && data.minHourlyUsd} - ${data && data.maxHourlyUsd} / hr;
                </span>;
                {data && data.tags.map(t => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <span
                    key={t}
                    className='rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs'>;
                    {t}
                  </span>                ))}            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
              <h3 className="font-medium mb-3">Signals</h3>;
              <div className="flex gap-2 flex-wrap">;
                <span className="rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs">Range: ${data && data.minHourlyUsd} - ${data && data.maxHourlyUsd} / hr</span>;
                {data && data.tags.map((t) => (;
                  <span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs">{t}</span>;
              </div>;
            </div>;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3">Signals</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs">Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr</span>
                {data.tags.map((t) => (
                  <span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs">{t}</span>
        </div>;
      </div>;
    </div>;
  );
}




<<<<<<< HEAD
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
);
}

          {data && (
=======
            </div>
          )}

