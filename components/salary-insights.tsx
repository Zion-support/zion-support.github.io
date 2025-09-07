<<<<<<< HEAD
<<<<<<< HEAD
=======
  LineChart,
  BarChart,
  DonutChart,
} from '../components / salary / InsightCharts';
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useEffect, useMemo, useState } from 'react';


type InsightResponse = {
<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from 'react';

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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

>>>>>>> origin/chore/fix-lint-and-merge

import React, { useEffect, useMemo, useState } from 'react';
import { LineChart, BarChart, DonutChart } from '../components/salary/InsightCharts';

type InsightResponse = any;
import {
  LineChart;
BarChart,}
DonutChart;}
} from '../components/salary/InsightCharts';
type InsightResponse = {;
  recommendedHourlyUsd: number;

  recommendedMonthlyUsd: number;
  medianHourlyUsd: number;
  minHourlyUsd: number;
  maxHourlyUsd: number;

  confidence: number;
<<<<<<< HEAD
}
  trendMonthly: { label: string; value: number,}
}[];
  regionalComparison: { region: string; medianHourlyUsd: number,}
}[];
  tags: string[];
  gptRecommendation?: string;
};
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  trend_monthly: { label: string; value: number }[];
  regional_comparison: { region: string; medianHourlyUsd: number }[];
  tags: string[];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { LineChart, BarChart, DonutChart } from '../components/salary/InsightCharts';
type InsightResponse = {
  recommendedHourlyUsd: number,
  gpt_recommendation?: string;}  recommendedHourlyUsd: number,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  recommendedMonthlyUsd: number,
  medianHourlyUsd: number,
  minHourlyUsd: number,
  maxHourlyUsd: number,
  confidence: number,
trend_monthly: { label: string, value: number }[],
  regional_comparison: { region: string, medianHourlyUsd: number }[],
  tags: string[],
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


export default function SalaryInsightsPage() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======


export default function SalaryInsightsPage() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [roleTitle, setRoleTitle] = useState('Senior AI Engineer');

<<<<<<< HEAD
const [skills, setSkills] = useState('OpenAI, RAG, TypeScript');

const [region, setRegion] = useState('Remote, Global');

const [experienceLevel, setExperienceLevel] = useState<
    'Junior' | 'Mid' | 'Senior' | 'Lead'
=======
<<<<<<< HEAD
  const [experienceLevel, setExperienceLevel] = useState<'Junior' | 'Mid' | 'Senior' | 'Lead'>('Senior');

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
  const [experienceLevel, setExperienceLevel] = useState<'Junior' | 'Mid' | 'Senior' | 'Lead'>('Senior');

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [remote, setRemote] = useState(true);
  const [employmentType, setEmploymentType] = useState<'contract' | 'freelance' | 'full-time'>('contract');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<InsightResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
<<<<<<< HEAD
    (async () => {
      try {
  useEffect(() => {;
    // Lightweight login check via Supabase client if available; otherwise public mode    (async () => {;
      try {;
        const { supabase } = await import('../utils/supabase/client');
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  >('Senior');

<<<<<<< HEAD
const [remote, setRemote] = useState(true);
=======
    (async () => {
      try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const [employmentType, setEmploymentType] = useState<
    'contract' | 'freelance' | 'full-time'
  >('contract');

const [loading, setLoading] = useState(false);

<<<<<<< HEAD
const [data, setData] = useState<InsightResponse | null    />(null);
=======
        const { supabase } = await import('../utils/supabase/client');

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const user = await supabase.auth.getUser();
        setIsLoggedIn(!!user.data.user)
      } catch {
        setIsLoggedIn(false)
      }
    })()
<<<<<<< HEAD
}, []);
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }, []);


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      const json = (await res.json()) as InsightResponse;
  useEffect(() => {
    // Lightweight login check via Supabase client if available; otherwise public mode    (async () => {
      try {
        const { supabase } = await import('../utils/supabase/client');
        const user = await supabase.auth.getUser();
        setIsLoggedIn(!!user.data.user);    // Lightweight login check via Supabase client if available, otherwise public mode
    (async () => {
      try {
        const { supabase } = await import('../utils/supabase/client');
        const user = await supabase.auth.getUser();
        setIsLoggedIn(!!user.data.user);
      } catch {
        setIsLoggedIn(false);
      }
    })();  }, []);      } catch {
        setIsLoggedIn(false)
      }
    })()
  }, []);
  async function fetchInsights() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/salary-insights', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          roleTitle
          skills: skills
            .split(',')
            .map(s => s.trim())
            .filter(Boolean)
          region
          experienceLevel
          remote
          employmentType
        })
      });
      if (!res.ok) throw new Error('Failed to fetch insights');
      const json = (await res.json()) as InsightResponse;
      setData(json);
    } catch (e: any) {
      setError(e.message |'Unexpected error');
    } finally {
      setLoading(false);    }      if (!res.ok) throw new Error('Failed to fetch insights');
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const json = (await res.json()) as InsightResponse;
      setData(json)
    } catch (e: any) {
      setError(e.message |'Unexpected error')
    } finally {
      setLoading(false)

<<<<<<< HEAD
      setLoading(false);    }

=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    }
  }

<<<<<<< HEAD


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
  useEffect(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

      setLoading(false);    }


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const [error, setError] = useState<string | null>(null);

const [isLoggedIn, setIsLoggedIn] = useState(false);
>>>>>>> origin/chore/fix-lint-and-merge

  useEffect(() => {
<<<<<<< HEAD

// Lightweight login check via Supabase client if available; otherwise public mode;
    (async () => {}
      try {}
        const { supabase } = await import('../utils/supabase/client');

const user = await supabase.auth.getUser();
setIsLoggedIn(!!user.data.user);
      } catch {}
        setIsLoggedIn(false);}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function saveInsight() {
    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data },

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    (async () => {
      try {
        const { supabase } = await import('../utils/supabase/client');
        const user = await supabase.auth.getUser();
        if (user.data.user) {
          // Attempt to save to Supabase if table exists
          await supabase.from('salary_insights').insert({
<<<<<<< HEAD
=======


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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const { supabase } = await import ('../utils / supabase / client');
        const user = await supabase.auth.get_user ();
        setIsLoggedIn (!!user.data.user);
      } catch {
        setIsLoggedIn (false);
      }
    })();  }, []);      } catch {
        setIsLoggedIn (false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    })();
  }, []);
  async function fetchInsights() {
    setLoading(true);
    setError(null);
    try {
<<<<<<< HEAD

          region,
experienceLevel
          remote,

    } finally {
      }
      setLoading(false);
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
        remote,

    fetchInsights($2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []),

    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data},
    (async () => {
      }
      try {
        }
=======
        remote,}
        employmentType,}
      },
      output: data}
    (async () => {}
      try {}
        const { supabase } = await import('../utils/supabase/client');
>>>>>>> origin/chore/fix-lint-and-merge

        if (user.data.user) {
<<<<<<< HEAD
          // Attempt to save to Supabase if table exists

          return;
        }
          await supabase.from(salary_insights').insert($2);
          alert($2);
          return
        }
      } catch {
        // fall back
      }

=======
          // Attempt to save to Supabase if table exists;
<<<<<<< HEAD
await supabase.from('salary_insights').insert({

            user_id: user.data.user.id,}
payload,}
=======
          await supabase.from ('salary_insights').insert ({
            user_id: user.data.user.id,
            payload,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          });
          alert ('Insight saved to your profile');
          return;
        }
<<<<<<< HEAD
=======

<<<<<<< HEAD
      } catch {}
        // fall back}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            user_id: user.data.user.id,
            payload});
          alert('Insight saved to your profile');
          return
<<<<<<< HEAD
      } catch {
        // fall back      }          alert ('Insight saved to your profile');
          return;
      } catch {
        // fall back      }          alert ('Insight saved to your profile');
          return;
=======

=======
      } catch {
        // fall back      }          alert ('Insight saved to your profile');
          return;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }
      } catch {;
        // fall back;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
      try {
        const key = 'zion.salary-insights.history';

<<<<<<< HEAD
const history = JSON.parse(localStorage.getItem(key) |'[]');
        history.unshift(payload);
        localStorage.setItem(key, JSON.stringify(history.slice(0, 50)));}
alert('Insight saved locally');}
>>>>>>> origin/chore/fix-lint-and-merge
      } catch {}
    })();
  }
=======

<<<<<<< HEAD
=======
        alert('Insight saved locally');



=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      } catch {}
    })();
  }

<<<<<<< HEAD

<<<<<<< HEAD
                <select;
                  value={experienceLevel}
                  onChange={e => setExperienceLevel(e.target.value as any)}
=======
<<<<<<< HEAD
  const donutData = useMemo(() => {
    if (!data) return [] as { label: string; value: number }[];    const min = data.minHourlyUsd;      } catch {}
        alert('Insight saved locally')
      } catch {}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const donutData = useMemo(() => {
    if (!data) return [] as { label: string; value: number }[];    const min = data.minHourlyUsd;      } catch {}
=======
        alert('Insight saved locally')
      } catch {}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    })()
  }
  const donutData = useMemo(() => {

    if (!data) return [] as { label: string, value: number }[],

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const min = data.minHourlyUsd;
    const median = data.medianHourlyUsd;
    const max = data.maxHourlyUsd;
    const lower = Math.max(0, median - min);
    const upper = Math.max(0, max - median);
    return [
<<<<<<< HEAD
    ];  }, [data]);
  return (
      { label: 'Below Median', value: lower || 1 },
      { label: 'Median', value: median || 1 },
      { label: 'Above Median', value: upper || 1 }]
=======


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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}
    const min = data.minHourlyUsd;
    const median = data.medianHourlyUsd;
    const max = data.maxHourlyUsd;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const lower = Math.max (0, median - min);
    const upper = Math.max (0, max - median);
    return [;
      { label: Below Median', value: lower || 1 },
      { label: 'Median, value: median || 1 },
      { label: Above Median', value: upper || 1 }];  }, [data]);
  return (
<<<<<<< HEAD
    <div>      { label: 'Above Median, value: upper || 1 }];
=======
    <div>      { label: 'Above Median', value: upper || 1 }];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }, [data]);
  return (
<<<<<<< HEAD
        <div className=absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      </div>
        const key = $2;
        const history = $2;
        history.unshift($2);
        localStorage.setItem(key, JSON.stringify(history.slice(0, 50))),
        alert(Insight saved locally')
      } catch {}
    })()
  }


=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow">
        <div className="relative z-10">
          <h1 className="text-2xl font-semibold">Salary Insights</h1>
          <p className="opacity-90">Benchmark rates and set competitive offers in real-time.</p>
<<<<<<< HEAD
</div>
=======
        </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h2 className="font-medium mb-3">Filters</h2>
            <label className="block text-sm mb-2" htmlFor="input-Role title">Role title</label>
            <input value={roleTitle} onChange={(e) => setRoleTitle(e.target.value)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm" placeholder="e.g., Senior AI Engineer" />
            <label className="block text-sm mt-3 mb-2" htmlFor="input-Skills">Skills</label>
            <input value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm" placeholder="Comma-separated" />
            <label className="block text-sm mt-3 mb-2" htmlFor="input-Region">Region</label>
            <input value={region} onChange={(e) => setRegion(e.target.value)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm" placeholder="City, Country" />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label className="block text-sm mb-2" htmlFor="input-Experience">Experience</label>
                <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value as any)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
<<<<<<< HEAD
        </div>
        <div className=&quot;absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl&quot; />
      </div>

      <div className=&quot;mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
        <div className=&quot;lg:col-span-1 space-y-4&quot;>
          <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
            <h2 className=&quot;font-medium mb-3&quot;>Filters</h2>
            <label className=&quot;block text-sm mb-2&quot;>Role title</label>
            <input value={roleTitle} onChange={(e) => setRoleTitle(e.target.value)} className=&quot;w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm&quot; placeholder=&quot;e.g., Senior AI Engineer&quot; />

            <label className=&quot;block text-sm mt-3 mb-2&quot;>Skills</label>
            <input value={skills} onChange={(e) => setSkills(e.target.value)} className=&quot;w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm&quot; placeholder=&quot;Comma-separated&quot; />

            <label className=&quot;block text-sm mt-3 mb-2&quot;>Region</label>
            <input value={region} onChange={(e) => setRegion(e.target.value)} className=&quot;w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm&quot; placeholder=&quot;City, Country&quot; />

            <div className=&quot;grid grid-cols-2 gap-3 mt-3&quot;>
              <div>
                <label className=&quot;block text-sm mb-2&quot;>Experience</label>
                <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value as any)} className=&quot;w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm&quot;>

      { label: 'Below Median', value: lower |1 }
      { label: 'Median', value: median |1 }
      { label: 'Above Median', value: upper |1 }
    ];  }, [data]);
  return (
    <div>      { label: 'Above Median', value: upper |1 }]
  }, [data]);

  return (
    <div>
      <div className='relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow'>
        <div className='relative z-10'>
          <h1 className='text-2xl font-semibold'>Salary Insights</h1>
          <p className='opacity-90'>
            Benchmark rates and set competitive offers in real-time.
          </p>
        </div>
        <div className='absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl' />
      </div>
      <div className='mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-1 space-y-4'>
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
            <h2 className='font-medium mb-3'>Filters</h2>
            <label className='block text-sm mb-2'>Role title</label>
            <input
              value={roleTitle}
              onChange={e => setRoleTitle(e.target.value)}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm'
              placeholder='e.g., Senior AI Engineer'
            />
            <label className='block text-sm mt-3 mb-2'>Skills</label>
            <input
              value={skills}
              onChange={e => setSkills(e.target.value)}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm'
              placeholder='Comma-separated'
            />
            <label className='block text-sm mt-3 mb-2'>Region</label>
            <input
              value={region}
              onChange={e => setRegion(e.target.value)}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm'
              placeholder='City, Country'
            />
            <div className='grid grid-cols-2 gap-3 mt-3'>
              <div>
                <label className='block text-sm mb-2'>Experience</label>
                <select
                  value={experienceLevel}
                  onChange={e => setExperienceLevel(e.target.value as any)}
                  className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm'
                >                  <option>Junior</option>        </div>
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h2 className="font-medium mb-3">Filters</h2>
            <label className="block text-sm mb-2" htmlFor="input-Role title">Role title</label>
            <input value={roleTitle} onChange={(e) => setRoleTitle(e.target.value)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm" placeholder="e.g., Senior AI Engineer" />
            <label className="block text-sm mt-3 mb-2" htmlFor="input-Skills">Skills</label>
            <input value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm" placeholder="Comma-separated" />
            <label className="block text-sm mt-3 mb-2" htmlFor="input-Region">Region</label>
            <input value={region} onChange={(e) => setRegion(e.target.value)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm" placeholder="City, Country" />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label className="block text-sm mb-2" htmlFor="input-Experience">Experience</label>
                <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value as any)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <option>Junior</option>
                  <option>Mid</option>
                  <option>Senior</option>
                  <option>Lead</option>
<<<<<<< HEAD
=======
    if (!data);}
  return [] as { label: string; value: number,}
}[];
=======
                </select>
              </div>
              <div>
<<<<<<< HEAD
                <label className='block text-sm mb-2'>Employment</label>
                <select
                  value={employmentType}
                  onChange={e => setEmploymentType(e.target.value as any)}
                  className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm'
                >
                  <option value='contract'>Contract</option>
                  <option value='freelance'>Freelance</option>
                  <option value='full-time'>Full-time</option>                </select>
              </div>
            </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const min = data.minHourlyUsd;

<<<<<<< HEAD
const median = data.medianHourlyUsd;

const max = data.maxHourlyUsd;

const lower = Math.max(0, median - min);

const upper = Math.max(0, max - median);
    return [

      { label: 'Below Median',}
  value: lower || 1,}
},
      { label: 'Median',}
  value: median || 1,}
},
{ label: 'Above Median',}
  value: upper || 1,}
},
    ];
  }, [data]);
  return (
    <div    />
<div className='relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow'    />
        <div className='relative z-10'    />
          <h1 className='text-2xl font-semibold'    />Salary Insights</h1>
          <p className='opacity-90'    />
            Benchmark rates and set competitive offers in real-time.
          </p>
        </div>
        <div className='absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl'    />
      </div>
      <div className='mt-6 grid grid-cols-1 lg: grid-cols-3 gap-6'    />
        <div className='lg:col-span-1 space-y-4'    />
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />
            <h2 className='font-medium mb-3'    />Filters</h2>
            <label className='block text-sm mb-2'    />Role title</label>
            <input;
value={roleTitle}
              onChange={e =    /> setRoleTitle(e.target.value,}
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <label className="block text-sm mb-2" htmlFor="input-Employment">Employment</label>
                <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value as any)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="full-time">Full-time</option>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm';
              placeholder='e.g., Senior AI Engineer';
            />;
<<<<<<< HEAD
            <label className='block text-sm mt-3 mb-2'    />Skills</label>;
            <input;
=======
            <label className='block text-sm mt-3 mb-2'>Skills</label>;
            <input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              value={skills}
              onChange={e =    /> setSkills(e.target.value)}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm';
              placeholder='Comma-separated';
            />;
<<<<<<< HEAD
            <label className='block text-sm mt-3 mb-2'    />Region</label>;
            <input;
=======
            <label className='block text-sm mt-3 mb-2'>Region</label>;
            <input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              value={region}
              onChange={e =    /> setRegion(e.target.value)}
              className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm';
              placeholder='City, Country';
            />;
<<<<<<< HEAD
            <div className='grid grid-cols-2 gap-3 mt-3'    />;
              <div    />;
                <label className='block text-sm mb-2'    />Experience</label>;
                <select;
                  value={experienceLevel}
                  onChange={e =    /> setExperienceLevel(e.target.value as any)}

                  className='w-full rounded border border-gray-300 dark: border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm'
                >
                  <option    />Junior</option>
                  <option    />Mid</option>
                  <option    />Senior</option>
                  <option    />Lead</option>
>>>>>>> origin/chore/fix-lint-and-merge
                </select>
              </div>
              <div    />
=======
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <input
                id='remote'
                type='checkbox'
                checked={remote}
<<<<<<< HEAD
                </select>
              </div>
            </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
=======
<label className='block text-sm mb-2'    />Employment</label>
                <select;
value={employmentType}
                  onChange={e =    /> setEmploymentType(e.target.value as any)}
                  className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm'
                >
                  <option value='contract'    />Contract</option>
                  <option value='freelance'    />Freelance</option>
                  <option value='full-time'    />Full-time</option>
>>>>>>> origin/chore/fix-lint-and-merge
                </select>
              </div>
            </div>

<<<<<<< HEAD
=======
<div className='flex items-center gap-2 mt-3'    />
              <input;
id='remote'
                type='checkbox'
                checked={remote}

<<<<<<< HEAD
                onChange={e =    /> setRemote(e.target.checked)}
              />
              <label htmlFor='remote' className='text-sm'    />
                Remote role;
              </label>
            </div>
            {!isLoggedIn && (
              <div className='mt-3 text-xs text-gray-500'    />
                Advanced filters are available when you sign in.}
              </div>}
            )}

<button;
onClick={fetchInsights}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="flex items-center gap-2 mt-3">
              <input id="remote" type="checkbox" checked={remote} onChange={(e) => setRemote(e.target.checked)} />
              <label htmlFor="remote" className="text-sm" htmlFor="input-Remote role">Remote role</label>
            </div>
            {!isLoggedIn && (
              <div className="mt-3 text-xs text-gray-500">
                Advanced filters are available when you sign in.
              </div>
                onChange={e => setRemote(e && e.target.checked)}
              />;
              <label htmlFor='remote' className='text-sm'>;
                Remote role;
              </label>;
            </div>;
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <button onClick={fetchInsights} disabled={loading} className="mt-4 w-full rounded bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700 disabled:opacity-50">

              {loading ? 'Calculating…' : 'Update Insights'}

<<<<<<< HEAD
            <button onClick={fetchInsights} disabled={loading} className="mt-4 w-full rounded bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700 disabled:opacity-50">
              {loading ? 'Calculating…' : 'Update Insights'}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </button>;
          </div>;
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
            <h3 className='font-medium mb-2'>Actions</h3>;
            <div className='flex flex-col gap-2'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
=======


          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <h3 className="font-medium mb-2">Actions</h3>
            <div className="flex flex-col gap-2">
              <button onClick={saveInsight} className="rounded border border-gray-300 dark:border-gray-700 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900">Save insight</button>
              <button onClick={() => alert('This would prefill a job posting flow.')} className="rounded bg-emerald-600 text-white py-2 text-sm hover:bg-emerald-700">Use in Job Post</button>
              <button onClick={() => alert('This would suggest a resume rate optimization.')} className="rounded bg-blue-600 text-white py-2 text-sm hover:bg-blue-700">Optimize Resume Rate</button>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                className='rounded bg-blue-600 text-white py-2 text-sm hover:bg-blue-700';
    <div>;
      <div className='relative overflow - hidden rounded - xl bg - gradient - to - r from - indigo - 600 via - violet - 600 to - fuchsia - 600 p - 6 text - white shadow'>;
        <div className='relative z - 10'>;
          <h1 className='text - 2xl font - semibold'>Salary Insights</h1>;
          <p className='opacity - 90'>;
            Benchmark rates and set competitive offers in real - time.;
          </p>;
        </div>;
        <div className='absolute -right - 24 -top - 24 h - 72 w - 72 rounded - full bg - white / 10 blur - 2xl' />;
      </div>;
      <div className='mt - 6 grid grid - cols - 1 lg:grid - cols - 3 gap - 6'>;
        <div className='lg:col - span - 1 space - y-4'>;
          <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
            <h2 className='font - medium mb - 3'>Filters</h2>;
            <label className='block text - sm mb - 2'>Role title</label>;
            <input;
              value={role_title}
              on_change={e => setRoleTitle (e.target.value)}
              className='w - full rounded border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - black px - 3 py - 2 text - sm';
              placeholder='e.g., Senior AI Engineer';
            />;
            <label className='block text - sm mt - 3 mb - 2'>Skills</label>;
            <input;
              value={skills}
              on_change={e => set_skills (e.target.value)}
              className='w - full rounded border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - black px - 3 py - 2 text - sm';
              placeholder='Comma - separated';
            />;
            <label className='block text - sm mt - 3 mb - 2'>Region</label>;
            <input;
              value={region}
              on_change={e => set_region (e.target.value)}
              className='w - full rounded border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - black px - 3 py - 2 text - sm';
              placeholder='City, Country';
            />;
            <div className='grid grid - cols - 2 gap - 3 mt - 3'>;
              <div>;
                <label className='block text - sm mb - 2'>Experience</label>;
                <select;
                  value={experience_level}
                  on_change={e => setExperienceLevel (e.target.value as any)}
                  className='w - full rounded border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - black px - 3 py - 2 text - sm';
                >                  <option > Junior</option>        </div>;
        <div className="absolute -right - 24 -top - 24 h - 72 w - 72 rounded - full bg - white / 10 blur - 2xl" />;
      </div>;
      <div className="mt - 6 grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;
        <div className="lg:col - span - 1 space - y-4">;
          <div className="rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4">;
            <h2 className="font - medium mb - 3">Filters</h2>;
            <label className="block text - sm mb - 2" html_for="input - Role title">Role title</label>;
            <input value={role_title} on_change={(e) => setRoleTitle (e.target.value)} className="w - full rounded border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - black px - 3 py - 2 text - sm" placeholder="e.g., Senior AI Engineer" />;
            <label className="block text - sm mt - 3 mb - 2" html_for="input - Skills">Skills</label>;
            <input value={skills} on_change={(e) => set_skills (e.target.value)} className="w - full rounded border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - black px - 3 py - 2 text - sm" placeholder="Comma - separated" />;
            <label className="block text - sm mt - 3 mb - 2" html_for="input - Region">Region</label>;
            <input value={region} on_change={(e) => set_region (e.target.value)} className="w - full rounded border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - black px - 3 py - 2 text - sm" placeholder="City, Country" />;
            <div className="grid grid - cols - 2 gap - 3 mt - 3">;
              <div>;
                <label className="block text - sm mb - 2" html_for="input - Experience">Experience</label>;
                <select value={experience_level} on_change={(e) => setExperienceLevel (e.target.value as any)} className="w - full rounded border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - black px - 3 py - 2 text - sm">;
                  <option > Junior</option>;
                  <option > Mid</option>;
                  <option > Senior</option>;
                  <option > Lead</option>;
                </select>;
              </div>;
              <div>;
                <label className='block text - sm mb - 2'>Employment</label>;
                <select;
                  value={employment_type}
                  on_change={e => setEmploymentType (e.target.value as any)}
                  className='w - full rounded border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - black px - 3 py - 2 text - sm';
                >;
                  <option value='contract'>Contract</option>;
                  <option value='freelance'>Freelance</option>;
                  <option value='full - time'>Full - time</option>                </select>;
              </div>;
            </div>;
                <label className="block text - sm mb - 2" html_for="input - Employment">Employment</label>;
                <select value={employment_type} on_change={(e) => setEmploymentType (e.target.value as any)} className="w - full rounded border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - black px - 3 py - 2 text - sm">;
                  <option value="contract">Contract</option>;
                  <option value="freelance">Freelance</option>;
                  <option value="full - time">Full - time</option>;
              </div>;
            </div>;
            <div className='flex items - center gap - 2 mt - 3'>;
              <input;
                id='remote';
                type='checkbox';
                checked={remote}
                on_change={e => set_remote (e.target.checked)}
              />;
              <label html_for='remote' className='text - sm'>;
                Remote role;
              </label>;
            </div>;
            {!isLoggedIn && (
              <div className='mt - 3 text - xs text - gray - 500'>                Advanced filters are available when you sign in.;
              </div>)}
            <div className="flex items - center gap - 2 mt - 3">;
              <input id="remote" type="checkbox" checked={remote} on_change={(e) => set_remote (e.target.checked)} />;
              <label html_for="remote" className="text - sm" html_for="input - Remote role">Remote role</label>;
            </div>;
            {!isLoggedIn && (
              <div className="mt - 3 text - xs text - gray - 500">;
                Advanced filters are available when you sign in.;
              </div>)}
            <button;
              on_click={fetch_insights}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              disabled={loading}
              className='mt-4 w-full rounded bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700 disabled:opacity-50'    />

              {loading ? 'Calculating…' : 'Update Insights'}

            </button>
          </div>

<div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />
            <h3 className='font-medium mb-2'    />Actions</h3>
            <div className='flex flex-col gap-2'    />
              <button;
onClick={saveInsigh,}
}
                className='rounded border border-gray-300 dark:border-gray-700 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900'    />;
                Save insight;
              </button>;
              <button;
                onClick={() =    /> alert('This would prefill a job posting flow.')}
                className='rounded bg-emerald-600 text-white py-2 text-sm hover:bg-emerald-700'>
>>>>>>> origin/chore/fix-lint-and-merge

                Use in Job Post;
              </button>;
              <button;
<<<<<<< HEAD
<<<<<<< HEAD
                onClick={() =>;
            )}


=======
                onClick={() =    />;
}
                  alert('This would suggest a resume rate optimization.');}
                }

                className='rounded bg-blue-600 text-white py-2 text-sm hover: bg-blue-700'
              >
                Optimize Resume Rate;
              </button>
>>>>>>> origin/chore/fix-lint-and-merge
            </div>
          </div>
        </div>

<<<<<<< HEAD


          <div className="grid grid-cols-2 md:grid-cols-4 gap-4>
            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="text-xs text-gray-500>Recommended Hourly</div>
              <div className=text-xl font-semibold">{data ? `$${data.recommendedHourlyUsd}` : —'}</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>
              <div className=text-xs text-gray-500">Recommended Monthly</div>
              <div className="text-xl font-semibold>{data ? `$${data.recommendedMonthlyUsd}` : '—}</div>
            </div>
            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="text-xs text-gray-500>Median</div>
              <div className=text-xl font-semibold">{data ? `$${data.medianHourlyUsd}` : —'}</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>
              <div className=text-xs text-gray-500">Confidence</div>
              <div className="text-xl font-semibold>{data ? `${Math.round(data.confidence * 100)}%` : '—}</div>
            </div>
          </div>

          <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium mb-3>Trend: Last 12 months</h3>
            {data ? <LineChart points={data.trendMonthly} /> : <div className=h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4>
            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3>Regional comparison</h3>
              {data ? (
                <BarChart data={data.regionalComparison.map((r) => ({ label: r.region, value: r.medianHourlyUsd }))} />
              ) : (
                <div className=h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />
              )}
              {data && (

                        {d.label}
              ) : (;
                <div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded />                <div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded />;
            </div>

            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3>Distribution</h3>
              {data ? (
                <div className=flex flex-col items-center gap-3">
                  <DonutChart slices={donutData.map((d, i) => ({ label: d.label, value: d.value })) as any} />
                  <div className="flex gap-2 flex-wrap justify-center text-xs>
                    {donutData.map((d) => (
                      <span key={d.label} className=rounded-full border border-gray-300 dark:border-gray-700 px-2 py-0.5">{d.label}</span>
=======
<div className='lg:col-span-2 space-y-6'    />
=======
                on_click={() =>;
                  alert ('This would suggest a resume rate optimization.');
                }
                className='rounded bg - blue - 600 text - white py - 2 text - sm hover:bg - blue - 700';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              >;
                Optimize Resume Rate;
              </button>            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className='lg:col - span - 2 space - y-6'>          <div className="rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4">;
            <h3 className="font - medium mb - 2">Actions</h3>;
            <div className="flex flex - col gap - 2">;
              <button on_click={save_insight} className="rounded border border - gray - 300 dark:border - gray - 700 py - 2 text - sm hover:bg - gray - 50 dark:hover:bg - gray - 900">Save insight</button>;
              <button on_click={() => alert ('This would prefill a job posting flow.')} className="rounded bg - emerald - 600 text - white py - 2 text - sm hover:bg - emerald - 700">Use in Job Post</button>;
              <button on_click={() => alert ('This would suggest a resume rate optimization.')} className="rounded bg - blue - 600 text - white py - 2 text - sm hover:bg - blue - 700">Optimize Resume Rate</button>;
          </div>;
        </div>;
        <div className='lg:col - span - 2 space - y-6'>;
            <div className='rounded border border - red - 300 bg - red - 50 text - red - 800 p - 3 text - sm'>;
              {error}
            </div>)}
          <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 4'>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='text - xs text - gray - 500'>Recommended Hourly</div>;
              <div className='text - xl font - semibold'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {data ? `$${data.recommendedHourlyUsd}` : '—'}
              </div>;
            </div>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='text - xs text - gray - 500'>Recommended Monthly</div>;
              <div className='text - xl font - semibold'>;
                {data ? `$${data.recommendedMonthlyUsd}` : '—'}
              </div>;
            </div>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='text - xs text - gray - 500'>Median</div>;
              <div className='text - xl font - semibold'>;
                {data ? `$${data.medianHourlyUsd}` : '—'}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {error && (
            <div className='rounded border border-red-300 bg-red-50 text-red-800 p-3 text-sm'    />
}
              {erro,}
}
            </div>;
          )}
<<<<<<< HEAD
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'    />;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />;
              <div className='text-xs text-gray-500'    />Recommended Hourly</div>;
              <div className='text-xl font-semibold'    />;
                {data ? `$${data.recommendedHourlyUsd}` : '—'}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              </div>
            </div>
            <div className='rounded-lg border border-gray-200 dark: border-gray-800 p-4'    />
              <div className='text-xs text-gray-500'    />Recommended Monthly</div>
              <div className='text-xl font-semibold'    />

<<<<<<< HEAD
                {data ? `$${data.recommendedMonthlyUsd}` : '—,
}
              </div>;
            </div>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'    />;
              <div className='text - xs text - gray - 500'    />Median</div>;
              <div className='text - xl font - semibold'    />;
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'    />;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />;
              <div className='text-xs text-gray-500'    />Recommended Hourly</div>;
              <div className='text-xl font-semibold'    />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='text-xs text-gray-500'>Recommended Hourly</div>;
              <div className='text-xl font-semibold'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {data ? `$${data && data.recommendedHourlyUsd}` : '—'}
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
<<<<<<< HEAD
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />;
            <h3 className='font-medium mb-3'    />Trend: Last 12 months</h3>;
            {data ? (<LineChart points={data && data.trendMonthly}    />;
            ) : (<div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded'    />;
            )}
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'    />;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />;
              <h3 className='font-medium mb-3'    />Regional comparison</h3>;
              {data ? (<BarChart;}
                  data={data && data.regionalComparison.map(r =    /> ({label: r && r.region,value: r && r.medianHourlyUsd,}))}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                />;

              ) : (;
                <div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded'    />;
              )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              {data && (
                <table className='w-full mt-3 text-sm'    />
                  <thead    />
                    <tr className='text-left text-xs text-gray-500'    />
                      <th className='py-1'    />Region</th>
                      <th className='py-1'    />Median (USD/hr)</th>
                    </tr>
                  </thead>
<<<<<<< HEAD
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
=======
                  <tbody>
                    {data.regionalComparison.map((r) => (
<tr key={r.region} className="border-t border-gray-100 dark:border-gray-900">
                        <td className="py-1">{r.region}</td>
                        <td className="py-1">${r.medianHourlyUsd}</td>
<<<<<<< HEAD
=======
                      </tr>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </tbody>;
                </table>;
              )}
<<<<<<< HEAD
            </div>
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
              <h3 className='font-medium mb-3'>Distribution</h3>
=======

<<<<<<< HEAD
            </div>

<div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />
              <h3 className='font-medium mb-3'    />Distribution</h3>
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {data ? (
                <div className='flex flex - col items - center gap - 3'>;
                  <DonutChart;
                    slices={
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <h3 className='font-medium mb-3'>Distribution</h3>;
              {data ? (;
                <div className='flex flex-col items-center gap-3'>;
                  <DonutChart
                    slices={
                      donutData && donutData.map((d, i) => ({;
                        label: d && d.label,;
                        value: d && d.value,;
                      })) as any;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3">Distribution</h3>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
                    ))}
                  </div>
                </div>
              ) : (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded" />
              )}

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD

              )}
                <div className="h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded />
=======
<div className='h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded'    />
>>>>>>> origin/chore/fix-lint-and-merge
              )}
            </div>
          </div>
          {data?.gptRecommendation && (
<<<<<<< HEAD

              </p>            </div>
          )}
          {data && (            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              )}

<<<<<<< HEAD
            </div>
          </div>
          {data?.gptRecommendation && (
<div className='rounded-lg border border-gray-200 "dark":border-gray-800 p-4'>'
              <h3 className='font-medium mb-2'>GPT Recommendation</h3>'
              <p className='text-sm text-gray-700 "dark":text-gray-300 whitespace-pre-wrap'>'
                {data.gptRecommendation}

            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>

              )}
              <h3 className=font-medium mb-2">GPT Recommendation</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap>{data.gptRecommendation}</p>
=======
<div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />
              <h3 className='font-medium mb-2'    />GPT Recommendation</h3>}
              <p className='text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap'    />}
                {data.gptRecommendation}

              </p>
>>>>>>> origin/chore/fix-lint-and-merge
            </div>
          )}
          {data && (
<div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'    />
              <h3 className='font-medium mb-3'    />Signals</h3>
              <div className='flex gap-2 flex-wrap'    />}
                <span className='rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs'    />}
                  Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr;
                </span>
                {data.tags.map(t => (
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <h3 className="font-medium mb-2">GPT Recommendation</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data.gptRecommendation}</p>
            </div>
          )}
          {data && (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
          )}
  )}
                      donut_data.map ((d, i) => ({label: d.label,value: d.value})) as any;
                    }
                  />;
                  <div className='flex gap - 2 flex - wrap justify - center text - xs>;
                    {donut_data.map (d => (<span;
                        key={d.label}
                        className=rounded - full border border - gray - 300 dark:border - gray - 700 px - 2 py - 0.5';
                      >;
                        {d.label}
                      </span>                    ))}
                  </div>;
                </div>) : (<div className='h - 40 animate - pulse bg - gray - 100 dark:bg - gray - 900 rounded />              )}                <div className=flex flex - col items-center gap-3">;
                  <DonutChart slices={donut_data.map ((d, i) => ({ label: d.label, value: d.value })) as any} />;
                  <div className="flex gap - 2 flex - wrap justify-center text-xs>;
                    {donut_data.map ((d) => (<span key={d.label} className=rounded - full border border - gray - 300 dark:border - gray - 700 px-2 py-0.5">{d.label}</span>;
                  </div>;
                </div>) : (<div className=h - 40 animate - pulse bg - gray - 100 dark:bg - gray - 900 rounded' />                <div className="h - 40 animate - pulse bg - gray - 100 dark:bg-gray-900 rounded />)}
            </div>;
          </div>;
          {data?.gpt_recommendation && (<div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4>;
              <h3 className=font - medium mb - 2'>GPT Recommendation</h3>;
              <p className='text - sm text - gray - 700 dark:text - gray - 300 whitespace - pre - wrap>;
                {data.gpt_recommendation}
              </p>            </div>)}
          {data && (            <div className=rounded - lg border border - gray - 200 dark:border - gray-800 p-4">;
              <h3 className="font-medium mb-2>GPT Recommendation</h3>;
              <p className=text - sm text - gray - 700 dark:text - gray - 300 whitespace-pre-wrap">{data.gpt_recommendation}</p>;
            </div>)}
          {data && (</div>;
          )}<div className=rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <h3 className='font - medium mb - 3>Signals</h3>;
              <div className=flex gap - 2 flex - wrap'>;
                <span className='rounded - full bg - gray - 100 dark:bg - gray - 900 border border - gray - 200 dark:border - gray - 800 px - 3 py - 1 text - xs>;
                  Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr;
                </span>;
                {data.tags.map (t => (<span;
                    key={t}
                    className=rounded - full bg - indigo - 50 dark:bg - indigo - 900 / 30 text - indigo - 700 dark:text - indigo - 300 border border - indigo - 200 dark:border - indigo - 800 px - 3 py - 1 text - xs';
                  >;
                    {t}
                  </span>                ))}            <div className="rounded - lg border border - gray - 200 dark:border - gray-800 p-4>;
              <h3 className=font-medium mb-3">Signals</h3>;
              <div className="flex gap-2 flex-wrap>;
                <span className=rounded - full bg - gray - 100 dark:bg - gray - 900 border border - gray - 200 dark:border - gray - 800 px - 3 py-1 text-xs">Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr</span>;
                {data.tags.map ((t) => (<span key={t} className="rounded - full bg - indigo - 50 dark:bg - indigo - 900 / 30 text - indigo - 700 dark:text - indigo - 300 border border - indigo - 200 dark:border - indigo - 800 px - 3 py-1 text-xs>{t}</span>;
              </div>;
            </div>)}
        </div>;
      </div>;
    </div>)</span>;
=======
                  <span;}
key={,}
}
                    className='rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs'    />;
                    {t}

                  </span>

>>>>>>> origin/chore/fix-lint-and-merge
                ))}
              </div>;
            </div>;
          )}
<<<<<<< HEAD
    </div>);
}
        </div>;
      </div>;
    </div>;
  )}
            <div className=rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-2>GPT Recommendation</h3>
              <p className=text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data.gptRecommendation}</p>
            </div>
          )}

          {data && (
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4>
              <h3 className=font-medium mb-3">Signals</h3>
              <div className="flex gap-2 flex-wrap>
                <span className=rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs">Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr</span>
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3">Signals</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs">Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {data.tags.map((t) => (
                  <span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs">{t}</span>
<<<<<<< HEAD
=======
                ))}
              </div>
            </div>
          )}
=======

>>>>>>> origin/chore/fix-lint-and-merge
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
                      donut_data.map ((d, i) => ({
                        label: d.label,
                        value: d.value,
                      })) as any;
                    }
                  />;
                  <div className='flex gap - 2 flex - wrap justify - center text - xs'>;
                    {donut_data.map (d => (
                      <span;
                        key={d.label}
                        className='rounded - full border border - gray - 300 dark:border - gray - 700 px - 2 py - 0.5';
                      >;
                        {d.label}
                      </span>                    ))}
                  </div>;
                </div>) : (
                <div className='h - 40 animate - pulse bg - gray - 100 dark:bg - gray - 900 rounded' />              )}                <div className="flex flex - col items - center gap - 3">;
                  <DonutChart slices={donut_data.map ((d, i) => ({ label: d.label, value: d.value })) as any} />;
                  <div className="flex gap - 2 flex - wrap justify - center text - xs">;
                    {donut_data.map ((d) => (
                      <span key={d.label} className="rounded - full border border - gray - 300 dark:border - gray - 700 px - 2 py - 0.5">{d.label}</span>;
                  </div>;
                </div>) : (
                <div className='h - 40 animate - pulse bg - gray - 100 dark:bg - gray - 900 rounded' />                <div className="h - 40 animate - pulse bg - gray - 100 dark:bg - gray - 900 rounded" />)}
            </div>;
          </div>;
          {data?.gpt_recommendation && (
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <h3 className='font - medium mb - 2'>GPT Recommendation</h3>;
              <p className='text - sm text - gray - 700 dark:text - gray - 300 whitespace - pre - wrap'>;
                {data.gpt_recommendation}
              </p>            </div>)}
          {data && (            <div className="rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4">;
              <h3 className="font - medium mb - 2">GPT Recommendation</h3>;
              <p className="text - sm text - gray - 700 dark:text - gray - 300 whitespace - pre - wrap">{data.gpt_recommendation}</p>;
            </div>)}
          {data && (
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <h3 className='font - medium mb - 3'>Signals</h3>;
              <div className='flex gap - 2 flex - wrap'>;
                <span className='rounded - full bg - gray - 100 dark:bg - gray - 900 border border - gray - 200 dark:border - gray - 800 px - 3 py - 1 text - xs'>;
                  Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr;
                </span>;
                {data.tags.map (t => (
                  <span;
                    key={t}
                    className='rounded - full bg - indigo - 50 dark:bg - indigo - 900 / 30 text - indigo - 700 dark:text - indigo - 300 border border - indigo - 200 dark:border - indigo - 800 px - 3 py - 1 text - xs';
                  >;
                    {t}
                  </span>                ))}            <div className="rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4">;
              <h3 className="font - medium mb - 3">Signals</h3>;
              <div className="flex gap - 2 flex - wrap">;
                <span className="rounded - full bg - gray - 100 dark:bg - gray - 900 border border - gray - 200 dark:border - gray - 800 px - 3 py - 1 text - xs">Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr</span>;
                {data.tags.map ((t) => (
                  <span key={t} className="rounded - full bg - indigo - 50 dark:bg - indigo - 900 / 30 text - indigo - 700 dark:text - indigo - 300 border border - indigo - 200 dark:border - indigo - 800 px - 3 py - 1 text - xs">{t}</span>;
              </div>;
            </div>)}
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======




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

            </div>
          )}

          {data && (
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
