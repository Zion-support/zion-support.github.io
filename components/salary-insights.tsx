<<<<<<< HEAD



=======
import React, { useEffect, useMemo, useState } from 'react';


import React, { useEffect, useMemo, useState } from 'react';'
import { LineChart, BarChart, DonutChart } from '../components/salary/InsightCharts';'

type InsightResponse = any;
import {
  }
  LineChart,
BarChart
  DonutChart;
} from '../components/salary/InsightCharts';'

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  LineChart,;
  BarChart,;
  DonutChart,;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

} from '../components/salary/InsightCharts';
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
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
=======
import React, { useEffect, useMemo, useState } from 'react';
import { LineChart, BarChart, DonutChart } from '../components/salary/InsightCharts';
type InsightResponse = $2;

  recommendedMonthlyUsd: number,
  medianHourlyUsd: number,
  minHourlyUsd: number,
  maxHourlyUsd: number,
  confidence: number,
trend_monthly: { label: string, value: number }[],
  regional_comparison: { region: string, medianHourlyUsd: number }[],
  tags: string[],

const user = await supabase.auth.getUser();
setIsLoggedIn(!!user.data.user);
      } catch {
        setIsLoggedIn(false)
      }
    })()

  }, []),

  async function fetchInsights() {
    }
  }


const json = (await res && res.json()) as InsightResponse;
      setData(json);

    } catch ("e": any) {
      }
      setError(e.message |'Unexpected error');'
    } finally {
      }
      setLoading(false);
    }

  useEffect(() => {
;

      }

      setLoading(false);    }
>>>>>>> origin/cursor/delete-old-data-records-6bba


    }
  }
<<<<<<< HEAD


  useEffect(() => {;


    }
  }

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

const [error, setError] = useState<string | null>(null);

const [isLoggedIn, setIsLoggedIn] = useState(false);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  useEffect(() => {


<<<<<<< HEAD
=======
const user = await supabase.auth.getUser();
setIsLoggedIn(!!user.data.user);
      } catch {}
        setIsLoggedIn(false);}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function saveInsight() {
    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data },

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    (async () => {
      try {
        const { supabase } = await import('../utils/supabase/client');
        const user = await supabase.auth.getUser();
        if (user.data.user) {
          // Attempt to save to Supabase if table exists
          await supabase.from('salary_insights').insert({
<<<<<<< HEAD



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

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

  useEffect(() => {
;}
}
      setLoading(false);    }

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
<<<<<<< HEAD

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

=======
        remote,
        employmentType
      },
      "output": data
    };
    fetchInsights($2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []),

  function saveInsight() {
    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data},
    (async () => {

>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
      try {
        const key = 'zion.salary-insights.history';


<<<<<<< HEAD



      } catch {}
    })();
  }



  const donutData = useMemo(() => {
    if (!data) return [] as { label: string; value: number }[];    const min = data.minHourlyUsd;      } catch {}


=======
  const donutData = useMemo(() => {
    if (!data) return [] as { label: string; value: number }[];    const min = data.minHourlyUsd;      } catch {}
        alert('Insight saved locally')
      } catch {}
  const donutData = useMemo(() => {
    if (!data) return [] as { label: string; value: number }[];    const min = data.minHourlyUsd;      } catch {}
        alert('Insight saved locally')
      } catch {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    })()
  }
  const donutData = useMemo(() => {

    if (!data) return [] as { label: string, value: number }[],

<<<<<<< HEAD


=======
      try {;
        const key = 'zion && zion.salary-insights && insights.history';
        const history = JSON && JSON.parse(localStorage && localStorage.getItem(key) || '[]');
        history && history.unshift(payload);
        localStorage && localStorage.setItem(key, JSON && JSON.stringify(history && history.slice(0, 50)));
        alert('Insight saved locally');
      } catch {}
    })();
  }
        alert('Insight saved locally')
      } catch {}
    })()
  }
const donutData = useMemo(() => {
    if (!data) return [] as { label: string, value: number }[],
            user_id: user.data.user.id
            payload
          });
          alert('Insight saved to your profile');
          return;
        }
      } catch {
        // fall back      }          alert('Insight saved to your profile');
          return
        }
      } catch {
        // fall back;
      }
      try {
        const key = 'zion.salary-insights.history';
        const history = JSON.parse(localStorage.getItem(key) |'[]');
        history.unshift(payload);
        localStorage.setItem(key, JSON.stringify(history.slice(0, 50)));
        alert('Insight saved locally');
      } catch {}
    })();
  }


      } catch {}
    })();
  }

  const donutData = useMemo(() => {
    if (!data) return [] as { label: string; value: number }[];    const min = data.minHourlyUsd;      } catch {}
    })()
  }
  const donutData = useMemo(() => {
    if (!data) return [] as { label: string, value: number }[]
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const min = data.minHourlyUsd;
    const median = data.medianHourlyUsd;
    const max = data.maxHourlyUsd;
    const lower = Math.max(0, median - min);
    const upper = Math.max(0, max - median);
    return [
<<<<<<< HEAD



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


=======
    ];  }, [data]);
  return (
      { label: 'Below Median', value: lower || 1 },
      { label: 'Median', value: median || 1 },
      { label: 'Above Median', value: upper || 1 }]
        const key = 'zion.salary - insights.history';
        const history = JSON.parse (local_storage.get_item (key) || '[]');
        history.unshift (payload);
        local_storage.set_item (key, JSON.stringify (history.slice (0, 50)));
        alert ('Insight saved locally');
      } catch {}
    })();
  }
  const donut_data = useMemo (() => {
    // Check condition
if (return [] as { label: string) {
  $2
} value: number }[];    const min = data.minHourlyUsd;      } catch {}
    })();
  }
  const donut_data = useMemo (() => {
    // Check condition
if (return [] as { label: string, value: number }[], ) {
  $2
const user = await supabase.auth.getUser();
        if (user.data.user) {
          // Attempt to save to Supabase if table exists
}
    const min = data.minHourlyUsd;
    const median = data.medianHourlyUsd;
    const max = data.maxHourlyUsd;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const lower = Math.max (0, median - min);
    const upper = Math.max (0, max - median);
    return [;
      { label: 'Below Median', value: lower || 1 },
      { label: 'Median', value: median || 1 },
      { label: 'Above Median', value: upper || 1 },
    ];  }, [data]);
;
  return (
<<<<<<< HEAD

    <div>      { label: 'Above Median', value: upper || 1 }];

=======
    <div>      { label: 'Above Median', value: upper || 1 }];
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }, [data]);
;
  return (
<<<<<<< HEAD


=======

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      </div>
        const key = $2;
        const history = $2;
        history.unshift($2);
        localStorage.setItem(key, JSON.stringify(history.slice(0, 50))),
        alert('Insight saved locally')
      } catch {}
    })()
  }


                  className='w-full rounded border border-gray-300 "dark": border-gray-700 bg-white "dark":bg-black px-3 py-2 text-sm''
                >
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <option>Junior</option>
                  <option>Mid</option>
                  <option>Senior</option>
                  <option>Lead</option>
                </select>
              </div>
              <div>
                <label className='block text-sm mb-2'>Employment</label>
                <select
                  value={employmentType}
                  onChange={e => setEmploymentType(e.target.value as any)}
                  className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm'><option value='contract'>Contract</option>
                  <option value='freelance'>Freelance</option>
                  <option value='full-time'>Full-time</option>                </select>
              </div>
            </div>
                <label className="block text-sm mb-2" htmlFor="input-Employment">Employment</label>
                <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value as any)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="full-time">Full-time</option>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-3'>
              <input
                id='remote'
                type='checkbox'
                checked={remote}
                onChange={e => setRemote(e.target.checked)}
              />
              <label htmlFor='remote' className='text-sm'>
                Remote role
              </label>
            </div>
            {!isLoggedIn && (
              <div className='mt-3 text-xs text-gray-500'>                Advanced filters are available when you sign in.
              </div>
            )}
            <div className="flex items-center gap-2 mt-3">
              <input id="remote" type="checkbox" checked={remote} onChange={(e) => setRemote(e.target.checked)} />
              <label htmlFor="remote" className="text-sm" htmlFor="input-Remote role">Remote role</label>
            </div>
            {!isLoggedIn && (
              <div className="mt-3 text-xs text-gray-500">
                Advanced filters are available when you sign in.
              </div>
            )}
            <button
              onClick={fetchInsights}
              disabled={loading}
              className='mt-4 w-full rounded bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700 disabled:opacity-50'    />

              {loading ? 'Calculating…' : 'Update Insights'}

            </button>
          </div>

<div className='rounded-lg border border-gray-200 "dark":border-gray-800 p-4'>'
            <h3 className='font-medium mb-2'>Actions</h3>'
            <div className='flex flex-col gap-2'>'
              <button,
onClick={saveInsigh
}
                className='rounded border border-gray-300 "dark":border-gray-700 py-2 text-sm "hover":bg-gray-50 "dark":"hover":bg-gray-900'>;'
                Save insight;
              </button>;
              <button;
                onClick={() => alert('This would prefill a job posting flow.')}'
                className='rounded bg-emerald-600 text-white py-2 text-sm "hover":bg-emerald-700'>'
>>>>>>> origin/cursor/delete-old-data-records-6bba

                Use in Job Post;
              </button>;
              <button;

<<<<<<< HEAD
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



=======

<div className='"lg":col-span-2 space-y-6'>'
          {error && (
            <div className='rounded border border-red-300 bg-red-50 text-red-800 p-3 text-sm'    />
}
              {erro,}
}
            </div>;
          )}

          <div className='grid grid-cols-2 "md":grid-cols-4 gap-4'>;'
            <div className='rounded-lg border border-gray-200 "dark":border-gray-800 p-4'>;'
              <div className='text-xs text-gray-500'>Recommended Hourly</div>;'
              <div className='text-xl font-semibold'>;'
                {data ? `$${data.recommendedHourlyUsd}` : '—'}'
              </div>
            <div className='rounded-lg border border-gray-200 "dark": border-gray-800 p-4'>'
              <div className='text-xs text-gray-500'>Recommended Monthly</div>'
              <div className='text-xl font-semibold'>'

                {data ? `$${data.recommendedMonthlyUsd}` : '—,'}
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />;
              <div className='text-xs text-gray-500'    />Recommended Monthly</div>;
              <div className='text-xl font-semibold'    />;
                {data ? `$${data && data.recommendedMonthlyUsd}` : '—'}
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />;
              <div className='text-xs text-gray-500'    />Median</div>;
              <div className='text-xl font-semibold'    />;
                {data ? `$${data && data.medianHourlyUsd}` : '—'}
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />;
              <div className='text-xs text-gray-500'    />Confidence</div>;
              <div className='text-xl font-semibold'    />;
                {data ? `${Math && Math.round(data && data.confidence * 100)}%` : '—'}
              </div>;
            </div>;
          </div>;

          <div className='rounded-lg border border-gray-200 "dark":border-gray-800 p-4'>;'
            <h3 className='font-medium mb-3'>"Trend": Last 12 months</h3>;'
            {data ? (<LineChart points={data && data.trendMonthly} />;
            ) : (<div className='h-40 animate-pulse bg-gray-100 "dark":bg-gray-900 rounded' />;'
            )}
          </div>;
          <div className='grid grid-cols-1 "md":grid-cols-2 gap-4'>;'
            <div className='rounded-lg border border-gray-200 "dark":border-gray-800 p-4'>;'
              <h3 className='font-medium mb-3'>Regional comparison</h3>;'
              {data ? (<BarChart;
                  }
                  data={data && data.regionalComparison.map(r => ({"label": r && r.region,"value": r && r.medianHourlyUsd}))}
                />;

              ) : (;
                <div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded'    />;
              )}


          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="text-xs text-gray-500">Recommended Hourly</div>
              <div className="text-xl font-semibold">{data ? `$${data.recommendedHourlyUsd}` : '—'}</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="text-xs text-gray-500">Recommended Monthly</div>
              <div className="text-xl font-semibold">{data ? `$${data.recommendedMonthlyUsd}` : '—'}</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="text-xs text-gray-500">Median</div>
              <div className="text-xl font-semibold">{data ? `$${data.medianHourlyUsd}` : '—'}</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="text-xs text-gray-500">Confidence</div>
              <div className="text-xl font-semibold">{data ? `${Math.round(data.confidence * 100)}%` : '—'}</div>
            </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium mb-3">Trend: Last 12 months</h3>
            {data ? <LineChart points={data.trendMonthly} /> : <div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3">Regional comparison</h3>
              {data ? (
                <BarChart data={data.regionalComparison.map((r) => ({ label: r.region, value: r.medianHourlyUsd }))} />
              ) : (
                <div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />
              )}
              {data && (
                <table className='w-full mt-3 text-sm'    />
                  <thead    />
                    <tr className='text-left text-xs text-gray-500'    />
                      <th className='py-1'    />Region</th>
                      <th className='py-1'    />Median (USD/hr)</th>
                    </tr>
                  </thead>
                  <tbody    />
                    {data.regionalComparison.map(r => (}
                      <tr;}
key={r.region}
                        className='border-t border-gray-100 dark: border-gray-900'
                          />
                        <td className='py-1'    />{r.region}</td>
                        <td className='py-1'    />${r.medianHourlyUsd}</td>
                      </tr>
                    ),
}
                    ))}
                    {data.regionalComparison.map(r => (
                      <tr
}
key={r.region}
                        className='border-t border-gray-100 "dark": border-gray-900''
                      >
                        <td className='py-1'>{r.region}</td>'
                        <td className='py-1'>${r.medianHourlyUsd}</td>'
                      </tr>
                    )
}
                  </tbody>;
                </table>;
              )}
            </div>
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
              <h3 className='font-medium mb-3'>Distribution</h3>
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

              {data ? (
                <div className='flex flex - col items - center gap - 3'>;
                  <DonutChart;
                    slices={

                    }
                  />;
                  <div className='flex gap-2 flex-wrap justify-center text-xs'>;
                    {donutData && donutData.map(d => (;
                      <span
                        key={d && d.label}
                        className='rounded-full border border-gray-300 dark:border-gray-700 px-2 py-0 && 0.5'>;
                        {d && d.label}
                      </span>                    ))}
                  </div>;
                </div>;
              ) : (;
                <div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded' />              )}                <div className="flex flex-col items-center gap-3">;
                  <DonutChart slices={donutData && donutData.map((d, i) => ({ label: d && d.label, value: d && d.value })) as any} />;
                  <div className="flex gap-2 flex-wrap justify-center text-xs">;
                    {donutData && donutData.map((d) => (;
                      <span key={d && d.label} className="rounded-full border border-gray-300 dark:border-gray-700 px-2 py-0 && 0.5">{d && d.label}</span>;
                  </div>;
                </div>;
              ) : (;
                <div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded' />                <div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />;

            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3">Distribution</h3>
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    ))}
                  </div>
              ) : (

<<<<<<< HEAD

=======
<div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded'    />
              )}
            </div>
          </div>
          {data?.gptRecommendation && (

              </p>            </div>
          )}
          {data && (            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              )}


              <h3 className="font-medium mb-2">GPT Recommendation</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data.gptRecommendation}</p>
            </div>
          )}
          {data && (

<div className='rounded-lg border border-gray-200 "dark":border-gray-800 p-4'>'
              <h3 className='font-medium mb-3'>Signals</h3>'
              <div className='flex gap-2 flex-wrap'>'
                <span className='rounded-full bg-gray-100 "dark":bg-gray-900 border border-gray-200 "dark":border-gray-800 px-3 py-1 text-xs'>'
                  }
                  "Range": ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr
                </span>
                {data.tags.map(t => (
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <span
}
key={
}
                    className='rounded-full bg-indigo-50 "dark":bg-indigo-900/30 text-indigo-700 "dark":text-indigo-300 border border-indigo-200 "dark":border-indigo-800 px-3 py-1 text-xs'>;'
                    {t}
                      </span>;
                    ))}
                  </div>;
              ) : (<div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded' />;
              )}</div>;
          </div>;
          {data?.gptRecommendation && (<div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <h3 className='font-medium mb-2'>GPT Recommendation</h3>;
              <p className='text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap'>;
                {data.gptRecommendation}</p>            </div>;
          )}
          {data && (            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
              )}</div>;
          </div>;
          {data?.gptRecommendation && (<div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
              )}
              <h3 className="font-medium mb-2">GPT Recommendation</h3>;
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data.gptRecommendation}</p>;
            </div>;
          )}
          {data && (</p>;
            </div>;
          )}
          {data && (<div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <h3 className='font-medium mb-3'>Signals</h3>;
              <div className='flex gap-2 flex-wrap'>;
                <span className='rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs'>;
                  Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr;
                </span>;
                {data.tags.map(t => (<span;
                    key={t}
                    className='rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs'>;
                    {t}</span>                ))}            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
                  </span>                ))}            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
              <h3 className="font-medium mb-3">Signals</h3>;
              <div className="flex gap-2 flex-wrap">;
                <span className="rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs">Range: ${data && data.minHourlyUsd} - ${data && data.maxHourlyUsd} / hr</span>;
                {data && data.tags.map((t) => (<span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs">{t}</span>;
              </div>;
<<<<<<< HEAD
            </div>;

=======
          )}
                      donut_data.map ((d, i) => ({label: d.label,value: d.value,})) as any;
                    }
                  />;
                  <div className='flex gap - 2 flex - wrap justify - center text - xs'>;
                    {donut_data.map (d => (<span;
                        key={d.label}
                        className='rounded - full border border - gray - 300 dark:border - gray - 700 px - 2 py - 0.5';
                      >;
                        {d.label}
                      </span>                    ))}
                  </div>;
                </div>) : (<div className='h - 40 animate - pulse bg - gray - 100 dark:bg - gray - 900 rounded' />              )}                <div className="flex flex - col items-center gap-3">;
                  <DonutChart slices={donut_data.map ((d, i) => ({ label: d.label, value: d.value })) as any} />;
                  <div className="flex gap - 2 flex - wrap justify-center text-xs">;
                    {donut_data.map ((d) => (<span key={d.label} className="rounded - full border border - gray - 300 dark:border - gray - 700 px-2 py-0.5">{d.label}</span>;
                  </div>;
                </div>) : (<div className='h - 40 animate - pulse bg - gray - 100 dark:bg - gray - 900 rounded' />                <div className="h - 40 animate - pulse bg - gray - 100 dark:bg-gray-900 rounded" />)}
            </div>;
          {data?.gpt_recommendation && (<div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <h3 className='font - medium mb - 2'>GPT Recommendation</h3>;
              <p className='text - sm text - gray - 700 dark:text - gray - 300 whitespace - pre - wrap'>;
                {data.gpt_recommendation}
              </p>            </div>)}
          {data && (            <div className="rounded - lg border border - gray - 200 dark:border - gray-800 p-4">;
              <h3 className="font-medium mb-2">GPT Recommendation</h3>;
              <p className="text - sm text - gray - 700 dark:text - gray - 300 whitespace-pre-wrap">{data.gpt_recommendation}</p>;
            </div>)}
          {data && (</div>;
          )}<div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <h3 className='font - medium mb - 3'>Signals</h3>;
              <div className='flex gap - 2 flex - wrap'>;
                <span className='rounded - full bg - gray - 100 dark:bg - gray - 900 border border - gray - 200 dark:border - gray - 800 px - 3 py - 1 text - xs'>;
                  Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr;
                </span>;
                {data.tags.map (t => (<span;
                    key={t}
                    className='rounded - full bg - indigo - 50 dark:bg - indigo - 900 / 30 text - indigo - 700 dark:text - indigo - 300 border border - indigo - 200 dark:border - indigo - 800 px - 3 py - 1 text - xs';
                  >;
                    {t}
                  </span>                ))}            <div className="rounded - lg border border - gray - 200 dark:border - gray-800 p-4">;
              <h3 className="font-medium mb-3">Signals</h3>;
              <div className="flex gap-2 flex-wrap">;
                <span className="rounded - full bg - gray - 100 dark:bg - gray - 900 border border - gray - 200 dark:border - gray - 800 px - 3 py-1 text-xs">Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr</span>;
                {data.tags.map ((t) => (<span key={t} className="rounded - full bg - indigo - 50 dark:bg - indigo - 900 / 30 text - indigo - 700 dark:text - indigo - 300 border border - indigo - 200 dark:border - indigo - 800 px - 3 py-1 text-xs">{t}</span>;
              </div>;
            </div>)}
        </div>;
    </div>)</span>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <span;}
key={,}
}
                    className='rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs'    />;
                    {t}

                  </span>

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                ))}
              </div>;
          )}
<<<<<<< HEAD


                {data.tags.map((t) => (
                  <span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs">{t}</span>

                ))}
              </div>
            </div>
          )}











=======
    </div>);
}
        </div>;
  )}
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-2">GPT Recommendation</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data.gptRecommendation}</p>
            </div>
          )}

          {data && (

            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3">Signals</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs">Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr</span>
                {data.tags.map((t) => (
                  <span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs">{t}</span>
        </div>
      </div>
    </div>
  );
}


>>>>>>> origin/cursor/delete-old-data-records-6bba
