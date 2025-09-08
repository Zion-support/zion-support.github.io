


import {;
  LineChart,;
  BarChart,;
  DonutChart,;

</div> <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" /> </div> <div className="grid grid-cols-2 gap-3 mt-3" > <div> <option>Junior</option> <option>Mid</option> <option>Senior</option> <option>Lead</option> </select> </div> <div> </select> </div> </div> Advanced filters are available when you sign in. </div>) 
}</div> </div> </div>) : (<div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />) 
}<thead> <tr className="text-left text-xs text-gray-500" > <th className="py-1" >Region</th> <th className="py-1" >Median (USD/hr) </th> </tr> </thead> <tbody> </tr>) ) 
}</tbody> </table>) 
}</div>) ) 
}</div> </div>) : (<div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />) 
}</div> </div>) ) 
}</div> </div>) 
}</div> </div> </div>) 
}

} from '../components/salary/InsightCharts';
type InsightResponse = {;
  }
  "recommendedHourlyUsd": number;

  "recommendedMonthlyUsd": number;
  "medianHourlyUsd": number;
  "minHourlyUsd": number;
  "maxHourlyUsd": number;

  "confidence": number;

  "trendMonthly": { "label": string; "value": number
}[];
  "regionalComparison": { "region": string; "medianHourlyUsd": number
}[];
  "tags": string[];
  gptRecommendation?: string
};

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


    }
  }


  useEffect(() => {;


    }
  }


const [error, setError] = useState<string | null>(null);

const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {


    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function saveInsight() {
    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data },


    (async () => {
      try {
        const { supabase } = await import('../utils/supabase/client');
        const user = await supabase.auth.getUser();
        if (user.data.user) {
          // Attempt to save to Supabase if table exists
          await supabase.from('salary_insights').insert({



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

      const res = await fetch('/api/salary-insights', {
        method: 'POST',}
  headers: { 'Content-Type': 'application/json',}
}
        body: JSON.stringify({
roleTitle,
          skills: skills;
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
          region;
experienceLevel,
remote;}
employmentType}
        })
      });
      if (!res && res.ok) throw new Error('Failed to fetch insights');

const json = (await res && res.json()) as InsightResponse;
      setData(json);

    } catch (e) {
      setError(e.message |'Unexpected error');}
    } finally {}
      setLoading(false);}

    }
  }

  useEffect(() => {
;}
}
      setLoading(false);    }

    }
  }

  useEffect(() => {

    fetchInsights();}
    // eslint-disable-next-line react-hooks/exhaustive-deps;}
  }, []);

  function saveInsight() {
const payload = {
      createdAt: new Date().toISOString(),
      input: {
        roleTitle,
        skills,
        region,
        experienceLevel,

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

      }
      try {
        const key = 'zion.salary-insights.history';





      } catch {}
    })();
  }



  const donutData = useMemo(() => {
    if (!data) return [] as { label: string; value: number }[];    const min = data.minHourlyUsd;      } catch {}


    })()
  }
  const donutData = useMemo(() => {

    if (!data) return [] as { label: string, value: number }[],



    const min = data.minHourlyUsd;
    const median = data.medianHourlyUsd;
    const max = data.maxHourlyUsd;
    const lower = Math.max(0, median - min);
    const upper = Math.max(0, max - median);
    return [



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


    const lower = Math.max (0, median - min);
    const upper = Math.max (0, max - median);
    return [;
      { label: Below Median', value: lower || 1 },
      { label: 'Median, value: median || 1 },
      { label: Above Median', value: upper || 1 }];  }, [data]);
  return (

    <div>      { label: 'Above Median', value: upper || 1 }];

  }, [data]);
  return (


                  <option>Junior</option>
                  <option>Mid</option>
                  <option>Senior</option>
                  <option>Lead</option>

    if (!data);}
  return [] as { label: string; value: number,}
}[];


                Use in Job Post;
              </button>;
              <button;

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



              {data ? (
                <div className='flex flex - col items - center gap - 3'    />;
}
                  <DonutChart;}
                    slices={}
                     />;
                  <div className='flex gap-2 flex-wrap justify-center text-xs'    />;

                    {donutData && donutData.map(d => (;}
                      <span;}
key={d.label}
                        className='rounded-full border border-gray-300 dark: border-gray-700 px-2 py-0.5'    />

                        {d.label}

                      </span>

                    ))}
                  </div>
                </div>
              ) : (


                  <span

                    {t}
                      </span>;
                    ))}
                  </div>;
                </div>;
              ) : (<div className=h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded' />;
              )}</div>;
          </div>;
          {data?.gptRecommendation && (<div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4>;
              <h3 className=font-medium mb-2'>GPT Recommendation</h3>;
              <p className='text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap>;
                {data.gptRecommendation}</p>            </div>;
          )}
          {data && (            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
              )}</div>;
          </div>;
          {data?.gptRecommendation && (<div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>;
              )}
              <h3 className=font-medium mb-2">GPT Recommendation</h3>;
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap>{data.gptRecommendation}</p>;
            </div>;
          )}
          {data && (</p>;
            </div>;
          )}
          {data && (<div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <h3 className='font-medium mb-3>Signals</h3>;
              <div className=flex gap-2 flex-wrap'>;
                <span className='rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs>;
                  Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr;
                </span>;
                {data.tags.map(t => (<span;
                    key={t}
                    className=rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs'>;
                    {t}</span>                ))}            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
                  </span>                ))}            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>;
              <h3 className=font-medium mb-3">Signals</h3>;
              <div className="flex gap-2 flex-wrap>;
                <span className=rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs">Range: ${data && data.minHourlyUsd} - ${data && data.maxHourlyUsd} / hr</span>;
                {data && data.tags.map((t) => (<span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs>{t}</span>;
              </div>;
            </div>;

                  <span;}
key={,}
}
                    className='rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs'    />;
                    {t}

                  </span>


                ))}
              </div>;
            </div>;
          )}


                {data.tags.map((t) => (
                  <span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs">{t}</span>

                ))}
              </div>
            </div>
          )}











