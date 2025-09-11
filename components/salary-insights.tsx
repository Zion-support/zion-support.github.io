<<<<<<< HEAD
<<<<<<< HEAD
  LineChart,
  BarChart,
  DonutChart,
} from '../components / salary / InsightCharts';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useMemo, useState } from 'react';


type InsightResponse = {
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  trend_monthly: { label: string; value: number }[];
  regional_comparison: { region: string; medianHourlyUsd: number }[];
  tags: string[];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { LineChart, BarChart, DonutChart } from '../components/salary/InsightCharts';
type InsightResponse = {
  recommendedHourlyUsd: number,
  gpt_recommendation?: string;}  recommendedHourlyUsd: number,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  recommendedMonthlyUsd: number,
  medianHourlyUsd: number,
  minHourlyUsd: number,
  maxHourlyUsd: number,
  confidence: number,
trend_monthly: { label: string, value: number }[],
  regional_comparison: { region: string, medianHourlyUsd: number }[],
  tags: string[],
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

export default function SalaryInsightsPage() {;

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


export default function SalaryInsightsPage() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [roleTitle, setRoleTitle] = useState('Senior AI Engineer');
  const [skills, setSkills] = useState('OpenAI, RAG, TypeScript');
  const [region, setRegion] = useState('Remote, Global');

<<<<<<< HEAD
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
=======
=======
  const [experienceLevel, setExperienceLevel] = useState<'Junior' | 'Mid' | 'Senior' | 'Lead'>('Senior');

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [remote, setRemote] = useState(true);
  const [employmentType, setEmploymentType] = useState<'contract' | 'freelance' | 'full-time'>('contract');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<InsightResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
    (async () => {
      try {
  useEffect(() => {;
    // Lightweight login check via Supabase client if available; otherwise public mode    (async () => {;
      try {;
        const { supabase } = await import('../utils/supabase/client');
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const user = await supabase.auth.getUser();
        setIsLoggedIn(!!user.data.user)
      } catch {
        setIsLoggedIn(false)
      }
    })()
<<<<<<< HEAD
<<<<<<< HEAD
}, []);
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }, []);


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  }, []);


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });
      if (!res && res.ok) throw new Error('Failed to fetch insights');
      const json = (await res && res.json()) as InsightResponse;
      setData(json);
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (e: any) {
      setError(e.message |'Unexpected error');
    } finally {
      setLoading(false);    }      if (!res.ok) throw new Error('Failed to fetch insights');
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const json = (await res.json()) as InsightResponse;
      setData(json)
    } catch (e: any) {
      setError(e.message |'Unexpected error')
    } finally {
      setLoading(false)

<<<<<<< HEAD
<<<<<<< HEAD
      setLoading(false);    }

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }
  }

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

      setLoading(false);    }

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }



=======
    }
  }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function saveInsight() {
    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data },

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    (async () => {
      try {
        const { supabase } = await import('../utils/supabase/client');
        const user = await supabase.auth.getUser();
        if (user.data.user) {
          // Attempt to save to Supabase if table exists
          await supabase.from('salary_insights').insert({
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const { supabase } = await import ('../utils / supabase / client');
        const user = await supabase.auth.get_user ();
        setIsLoggedIn (!!user.data.user);
      } catch {
        setIsLoggedIn (false);
      }
    })();  }, []);      } catch {
        setIsLoggedIn (false);
      }
    })();
  }, []);
;
  async /**
 * fetch_insights - Function description
 */
function fetch_insights() {
    set_loading (true);
    set_error (null);
    try {
      const res = await fetch ('/api / salary - insights', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          role_title,
          skills: skills;
            .split (', ');
            .map (string => s.trim ());
            .filter (Boolean),
          region,
          experience_level,
          remote,
          employment_type,
        }),
      });
      if (throw new Error ('Failed to fetch insights')) {
  $2
}
      const json = (await res.json ()) as InsightResponse;
      set_data (json);
    } catch (e: any) {
      set_error (e.message || 'Unexpected error');
    } finally {
      set_loading (false);    }      if (throw new Error ('Failed to fetch insights')) {
  $2
}
      const json = (await res.json ()) as InsightResponse;
      set_data (json);
    } catch (e: any) {
      set_error (e.message || 'Unexpected error');
    } finally {
      set_loading (false);
    }
  }
  useEffect (() => {
    fetch_insights ();
    // eslint - disable - next - line react - hooks / exhaustive - deps;
  }, []);
;
  /**
 * save_insight - Function description
 */
function save_insight() {
    const payload = {
      created_at: new Date ().toISOString (),
      input: {
        role_title,
        skills,
        region,
        experience_level,
        remote,
        employment_type,
      },
      output: data,
    }    (async () => {    const payload = { created_at: new Date ().toISOString (), input: { role_title, skills, region, experience_level, remote, employment_type }, output: data },
    (async () => {
      try {
        const { supabase } = await import ('../utils / supabase / client');
        const user = await supabase.auth.get_user ();
        // Check condition
if ( {) {
  $2
}
          // Attempt to save to Supabase if table exists;
          await supabase.from ('salary_insights').insert ({
            user_id: user.data.user.id,
            payload,
          });
          alert ('Insight saved to your profile');
          return;
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            user_id: user.data.user.id,
            payload});
          alert('Insight saved to your profile');
          return
<<<<<<< HEAD
<<<<<<< HEAD
      } catch {
        // fall back      }          alert ('Insight saved to your profile');
          return;
      } catch {
        // fall back      }          alert ('Insight saved to your profile');
          return;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
      } catch {
        // fall back      }          alert ('Insight saved to your profile');
          return;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      } catch {;
        // fall back;
      }


<<<<<<< HEAD
<<<<<<< HEAD
=======
        alert('Insight saved locally');
=======
        alert('Insight saved locally');
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



=======
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



      } catch {}
    })();
  }

<<<<<<< HEAD
<<<<<<< HEAD
  const donutData = useMemo(() => {
    if (!data) return [] as { label: string; value: number }[];    const min = data.minHourlyUsd;      } catch {}
        alert('Insight saved locally')
      } catch {}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const donutData = useMemo(() => {
    if (!data) return [] as { label: string; value: number }[];    const min = data.minHourlyUsd;      } catch {}
=======
        alert('Insight saved locally')
      } catch {}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    })()
  }
  const donutData = useMemo(() => {

    if (!data) return [] as { label: string, value: number }[],

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const min = data.minHourlyUsd;
    const median = data.medianHourlyUsd;
    const max = data.maxHourlyUsd;
    const lower = Math.max(0, median - min);
    const upper = Math.max(0, max - median);
    return [
<<<<<<< HEAD
<<<<<<< HEAD
    ];  }, [data]);
  return (
      { label: 'Below Median', value: lower || 1 },
      { label: 'Median', value: median || 1 },
      { label: 'Above Median', value: upper || 1 }]
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    const lower = Math.max (0, median - min);
    const upper = Math.max (0, max - median);
    return [;
      { label: 'Below Median', value: lower || 1 },
      { label: 'Median', value: median || 1 },
      { label: 'Above Median', value: upper || 1 },
    ];  }, [data]);
;
  return (
    <div>      { label: 'Above Median', value: upper || 1 }];
  }, [data]);
;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow">
        <div className="relative z-10">
          <h1 className="text-2xl font-semibold">Salary Insights</h1>
          <p className="opacity-90">Benchmark rates and set competitive offers in real-time.</p>
<<<<<<< HEAD
<<<<<<< HEAD
</div>
=======
        </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        </div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <option>Junior</option>
                  <option>Mid</option>
                  <option>Senior</option>
                  <option>Lead</option>
                </select>
              </div>
              <div>
<<<<<<< HEAD
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <label className="block text-sm mb-2" htmlFor="input-Employment">Employment</label>
                <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value as any)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="full-time">Full-time</option>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <input
                id='remote'
                type='checkbox'
                checked={remote}
<<<<<<< HEAD
<<<<<<< HEAD
                </select>
              </div>
            </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </select>
              </div>
            </div>


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <button onClick={fetchInsights} disabled={loading} className="mt-4 w-full rounded bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700 disabled:opacity-50">

              {loading ? 'Calculating…' : 'Update Insights'}

<<<<<<< HEAD
<<<<<<< HEAD
            <button onClick={fetchInsights} disabled={loading} className="mt-4 w-full rounded bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700 disabled:opacity-50">
              {loading ? 'Calculating…' : 'Update Insights'}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </button>;
          </div>;
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
            <h3 className='font-medium mb-2'>Actions</h3>;
            <div className='flex flex-col gap-2'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h3 className="font-medium mb-2">Actions</h3>
            <div className="flex flex-col gap-2">
              <button onClick={saveInsight} className="rounded border border-gray-300 dark:border-gray-700 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900">Save insight</button>
              <button onClick={() => alert('This would prefill a job posting flow.')} className="rounded bg-emerald-600 text-white py-2 text-sm hover:bg-emerald-700">Use in Job Post</button>
              <button onClick={() => alert('This would suggest a resume rate optimization.')} className="rounded bg-blue-600 text-white py-2 text-sm hover:bg-blue-700">Optimize Resume Rate</button>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              disabled={loading}
              className='mt - 4 w - full rounded bg - indigo - 600 text - white py - 2 text - sm hover:bg - indigo - 700 disabled:opacity - 50';
            >              {loading ? 'Calculating…' : 'Update Insights'}
            </button>;
          </div>;
            <button on_click={fetch_insights} disabled={loading} className="mt - 4 w - full rounded bg - indigo - 600 text - white py - 2 text - sm hover:bg - indigo - 700 disabled:opacity - 50">;
              {loading ? 'Calculating…' : 'Update Insights'}
            </button>;
          </div>;
          <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
            <h3 className='font - medium mb - 2'>Actions</h3>;
            <div className='flex flex - col gap - 2'>;
              <button;
                on_click={save_insight}
                className='rounded border border - gray - 300 dark:border - gray - 700 py - 2 text - sm hover:bg - gray - 50 dark:hover:bg - gray - 900';
              >;
                Save insight;
              </button>;
              <button;
                on_click={() => alert ('This would prefill a job posting flow.')}
                className='rounded bg - emerald - 600 text - white py - 2 text - sm hover:bg - emerald - 700';
              >;
                Use in Job Post;
              </button>;
              <button;
                on_click={() =>;
                  alert ('This would suggest a resume rate optimization.');
                }
                className='rounded bg - blue - 600 text - white py - 2 text - sm hover:bg - blue - 700';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >;
                Optimize Resume Rate;
              </button>            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          {error && (
            <div className="rounded border border-red-300 bg-red-50 text-red-800 p-3 text-sm">{error}</div>
          )}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {data && (
                <table className="w-full mt-3 text-sm">
                  <thead>
                    <tr className="text-left text-xs text-gray-500">
                      <th className="py-1">Region</th>
                      <th className="py-1">Median (USD/hr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.regionalComparison.map((r) => (
<tr key={r.region} className="border-t border-gray-100 dark:border-gray-900">
                        <td className="py-1">{r.region}</td>
                        <td className="py-1">${r.medianHourlyUsd}</td>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                      </tr>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                      </tr>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}
                  </tbody>;
                </table>;
              )}
<<<<<<< HEAD
<<<<<<< HEAD
            </div>
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
              <h3 className='font-medium mb-3'>Distribution</h3>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {data ? (
                <div className='flex flex - col items - center gap - 3'>;
                  <DonutChart;
                    slices={
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
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
<<<<<<< HEAD
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h3 className="font-medium mb-2">GPT Recommendation</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data.gptRecommendation}</p>
            </div>
          )}
          {data && (
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-medium mb-3">Signals</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs">Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr</span>
                {data.tags.map((t) => (
                  <span key={t} className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs">{t}</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))}
              </div>
            </div>

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          )}

        </div>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </div>
          )}

<<<<<<< HEAD
          {data && (
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
