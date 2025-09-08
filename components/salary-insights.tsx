




} from '../components/salary/InsightCharts';
  const [roleTitle, setRoleTitle] = useState('Senior AI Engineer');



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


    (async () => {
      try {


const [employmentType, setEmploymentType] = useState<
    'contract' | 'freelance' | 'full-time'
  >('contract');

const [loading, setLoading] = useState(false);


        const { supabase } = await import('../utils/supabase/client');


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



      });
      if (!res && res.ok) throw new Error('Failed to fetch insights');
      const json = (await res && res.json()) as InsightResponse;
      setData(json);

          roleTitle;
          skills: skills.split().map((s) => s.trim()).filter(Boolean),
          region;
          experienceLevel;
          remote;
          employmentType})});
      if (!res.ok) throw new Error('Failed to fetch insights');



      const json = (await res.json()) as InsightResponse;
      setData(json)
    } catch (e: any) {
      setError(e.message |'Unexpected error')
    } finally {
      setLoading(false)


    } catch (e: any) {;
      setError(e && e.message || 'Unexpected error');
    } finally {;
      setLoading(false);    }      if (!res && res.ok) throw new Error('Failed to fetch insights');
      const json = (await res && res.json()) as InsightResponse;
      setData(json);
    } catch (e: any) {;
      setError(e && e.message || 'Unexpected error');
    } finally {;
      setLoading(false);


  useEffect(() => {;


    }
  }






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


      }
    })();
  }, []);
  async function fetchInsights() {
    setLoading(true);
    setError(null);
    try {



        remote,}
        employmentType,}
      },
      output: data}
    (async () => {}
      try {}
        const { supabase } = await import('../utils/supabase/client');


        if (user.data.user) {

          // Attempt to save to Supabase if table exists;


        }
      } catch {;
        // fall back;




      } catch {}
    })();
  }



  const donutData = useMemo(() => {
    if (!data) return [] as { label: string; value: number }[];    const min = data.minHourlyUsd;      } catch {}







  const donutData = useMemo(() => {;
    if (!data) return [] as { label: string; value: number }[];    const min = data && data.minHourlyUsd;      } catch {}
    })();
  }
  const donutData = useMemo(() => {;
    if (!data) return [] as { label: string, value: number }[],;
    const min = data && data.minHourlyUsd;
    const median = data && data.medianHourlyUsd;
    const max = data && data.maxHourlyUsd;
    const lower = Math && Math.max(0, median - min);
    const upper = Math && Math.max(0, max - median);
    return [;
      { label: 'Below Median', value: lower || 1 },;
      { label: 'Median', value: median || 1 },;
      { label: 'Above Median', value: upper || 1 },;

    ];  }, [data]);
  return (

      { label: 'Below Median', value: lower || 1 },
      { label: 'Median', value: median || 1 },
      { label: 'Above Median', value: upper || 1 }]



    <div>      { label: 'Above Median', value: upper || 1 }];



    if (!data);}
  return [] as { label: string; value: number,}
}[];

                onClick={() =    />;
}
                  alert('This would suggest a resume rate optimization.');}
                }

                className='rounded bg-blue-600 text-white py-2 text-sm hover: bg-blue-700'
              >
                Optimize Resume Rate;
              </button>

            </div>
          </div>
        </div>


<div className='lg:col-span-2 space-y-6'    />

                  </tbody>;
                </table>;
              )}





            </div>;




                {data.tags.map((t) => (
                  <span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs">{t}</span>

                ))}
              </div>
            </div>
          )}











