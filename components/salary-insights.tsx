import React, { useEffect, useMemo, useState } from 'react';
import {
  LineChart,
  BarChart,
  DonutChart,;
} from '../components/salary/InsightCharts';

type InsightResponse = {
  recommendedHourlyUsd: number;
  recommendedMonthlyUsd: number;
  medianHourlyUsd: number;
  minHourlyUsd: number;
  maxHourlyUsd: number;
  confidence: number;
  trendMonthly: { label: string; value: number }[];
  regionalComparison: { region: string; medianHourlyUsd: number }[];
  tags: string[];
  gptRecommendation?: string;};
  recommendedHourlyUsd: number,
  recommendedMonthlyUsd: number,
  medianHourlyUsd: number,
  minHourlyUsd: number,
  maxHourlyUsd: number,
  confidence: number,
  trendMonthly: { label: string, value: number }[],
  regionalComparison: { region: string, medianHourlyUsd: number }[],
  tags: string[],
  gptRecommendation?: string

};

export default function SalaryInsightsPage() {
  const [roleTitle, setRoleTitle] = useState('Senior AI Engineer');
  const [skills, setSkills] = useState('OpenAI, RAG, TypeScript');
  const [region, setRegion] = useState('Remote, Global');
  const [experienceLevel, setExperienceLevel] = useState<
    'Junior' | 'Mid' | 'Senior' | 'Lead'
  >('Senior');
  const [remote, setRemote] = useState(true);
  const [employmentType, setEmploymentType] = useState<
    'contract' | 'freelance' | 'full-time'
  >('contract');  const [loading, setLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<InsightResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Lightweight login check via Supabase client if available; otherwise public mode    (async () => {
      try {
        const { supabase } = await import('../utils/supabase/client');
        const user = await supabase.auth.getUser();
        setIsLoggedIn(!!user.data.user);

    (async () => {
      try {
        const { supabase } = await import('../utils/supabase/client');
        const user = await supabase.auth.getUser();

  }, []);

  async function fetchInsights() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/salary-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roleTitle,
          skills: skills
            .split(',')
            .map(s => s.trim())
            .filter(Boolean),
          region,
          experienceLevel,
          remote,
          employmentType,
        }),
      });

      if (!res.ok) throw new Error('Failed to fetch insights');
      const json = (await res.json()) as InsightResponse;
      setData(json);
    } catch (e: any) {
      setError(e.message || 'Unexpected error');
    } finally {
      setLoading(false);    }

    }

  }

  useEffect(() => {
    fetchInsights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function saveInsight() {
    const payload = {
      createdAt: new Date().toISOString(),
      input: {
        roleTitle,
        skills,
        region,
        experienceLevel,
        remote,
        employmentType,
      },
      output: data,
    };    (async () => {

    (async () => {

      try {
        const { supabase } = await import('../utils/supabase/client');
        const user = await supabase.auth.getUser();
        if (user.data.user) {
          // Attempt to save to Supabase if table exists
          await supabase.from('salary_insights').insert({
            user_id: user.data.user.id,
            payload,
          });

          alert('Insight saved to your profile');
          return;
        }
      } catch {
        // fall back      }

      }

      try {
        const key = 'zion.salary-insights.history';
        const history = JSON.parse(localStorage.getItem(key) || '[]');
        history.unshift(payload);
        localStorage.setItem(key, JSON.stringify(history.slice(0, 50)));
        alert('Insight saved locally');

      } catch {}
    })();
  }

  const donutData = useMemo(() => {
    if (!data) return [] as { label: string; value: number }[];    const min = data.minHourlyUsd;

    const min = data.minHourlyUsd;

    const median = data.medianHourlyUsd;
    const max = data.maxHourlyUsd;
    const lower = Math.max(0, median - min);
    const upper = Math.max(0, max - median);
    return [
      { label: 'Below Median', value: lower || 1 },
      { label: 'Median', value: median || 1 },
      { label: 'Above Median', value: upper || 1 },
    ];  }, [data]);

  return (
    <div>

  }, [data]);

  return (
    <div>

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
                  className='w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm'
                >
                  <option value='contract'>Contract</option>
                  <option value='freelance'>Freelance</option>
                  <option value='full-time'>Full-time</option>                </select>
              </div>
            </div>

                <label className="block text-sm mb-2" htmlFor="input-Employment">Employment</label>
                <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value as any)} className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm">
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="full-time">Full-time</option>

                </select>
              </div>
            </div>

                Advanced filters are available when you sign in.
              </div>
            )}

              {loading ? 'Calculating…' : 'Update Insights'}
            </button>
          </div>

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

          {data && (

            </div>
          )}

          {data && (