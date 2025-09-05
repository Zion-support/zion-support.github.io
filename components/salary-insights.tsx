import React, { useEffect, useMemo, useState } from 'react',
import { LineChart, BarChart, DonutChart } from '../components/salary/InsightCharts',

type InsightResponse = {
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
},

export default function SalaryInsightsPage() {
  const [roleTitle, setRoleTitle] = useState('Senior AI Engineer'),
  const [skills, setSkills] = useState('OpenAI, RAG, TypeScript'),
  const [region, setRegion] = useState('Remote, Global'),
  const [experienceLevel, setExperienceLevel] = useState<'Junior' | 'Mid' | 'Senior' | 'Lead'>('Senior'),
  const [remote, setRemote] = useState(true),
  const [employmentType, setEmploymentType] = useState<'contract' | 'freelance' | 'full-time'>('contract'),
  const [loading, setLoading] = useState(false),
  const [data, setData] = useState<InsightResponse | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [isLoggedIn, setIsLoggedIn] = useState(false),

  useEffect(() => {
    // Lightweight login check via Supabase client if available, otherwise public mode
    (async () => {
      try {
        const { supabase } = await import('../utils/supabase/client'),
        const user = await supabase.auth.getUser(),
        setIsLoggedIn(!!user.data.user)
      } catch {
        setIsLoggedIn(false)
      }
    })()
  }, []),

  async function fetchInsights() {
    setLoading(true),
    setError(null),
    try {
      const res = await fetch('/api/salary-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roleTitle,
          skills: skills.split().map((s) => s.trim()).filter(Boolean),
          region,
          experienceLevel,
          remote,
          employmentType})}),
      if (!res.ok) throw new Error('Failed to fetch insights'),
      const json = (await res.json()) as InsightResponse,
      setData(json)
    } catch (e: any) {
      setError(e.message || 'Unexpected error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInsights(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []),

  function saveInsight() {
    const payload = { createdAt: new Date().toISOString(), input: { roleTitle, skills, region, experienceLevel, remote, employmentType }, output: data },
    (async () => {
      try {
        const { supabase } = await import('../utils/supabase/client'),
        const user = await supabase.auth.getUser(),
        if (user.data.user) {
          // Attempt to save to Supabase if table exists
          await supabase.from('salary_insights').insert({
            user_id: user.data.user.id,
            payload}),
          alert('Insight saved to your profile'),
          return
        }
      } catch {
        // fall back
      }
      try {
        const key = 'zion.salary-insights.history',
        const history = JSON.parse(localStorage.getItem(key) || '[]'),
        history.unshift(payload),
        localStorage.setItem(key, JSON.stringify(history.slice(0, 50))),
        alert('Insight saved locally')
      } catch {}
    })()
  }

  const donutData = useMemo(() => {
    if (!data) return [] as { label: string, value: number }[],
    const min = data.minHourlyUsd,
    const median = data.medianHourlyUsd,
    const max = data.maxHourlyUsd,
    const lower = Math.max(0, median - min),
    const upper = Math.max(0, max - median),
    return [
      { label: 'Below Median', value: lower || 1 },
      { label: 'Median', value: median || 1 },
      { label: 'Above Median', value: upper || 1 }]
  }, [data]),

  return (
    <div>
      <div className=&quot;relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow&quot;>
        <div className=&quot;relative z-10&quot;>
          <h1 className=&quot;text-2xl font-semibold&quot;>Salary Insights</h1>
          <p className=&quot;opacity-90&quot;>Benchmark rates and set competitive offers in real-time.</p>        </div>
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
                <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value as any)} className=&quot;w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm&quot;>                  <option>Junior</option>
                  <option>Mid</option>
                  <option>Senior</option>
                  <option>Lead</option>
                </select>
              </div>
              <div>
                <label className=&quot;block text-sm mb-2&quot;>Employment</label>
                <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value as any)} className=&quot;w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-sm&quot;>
                  <option value=&quot;contract&quot;>Contract</option>
                  <option value=&quot;freelance&quot;>Freelance</option>
                  <option value=&quot;full-time&quot;>Full-time</option>                </select>
              </div>
            </div>

            <div className=&quot;flex items-center gap-2 mt-3&quot;>
              <input id=&quot;remote&quot; type=&quot;checkbox&quot; checked={remote} onChange={(e) => setRemote(e.target.checked)} />
              <label htmlFor=&quot;remote&quot; className=&quot;text-sm&quot;>Remote role</label>
            </div>

            {!isLoggedIn && (
              <div className=&quot;mt-3 text-xs text-gray-500&quot;>                Advanced filters are available when you sign in.
              </div>
            )}

            <button onClick={fetchInsights} disabled={loading} className=&quot;mt-4 w-full rounded bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700 disabled:opacity-50&quot;>
              {loading ? 'Calculating…' : 'Update Insights'}
            </button>
          </div>

          <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
            <h3 className=&quot;font-medium mb-2&quot;>Actions</h3>
            <div className=&quot;flex flex-col gap-2&quot;>
              <button onClick={saveInsight} className=&quot;rounded border border-gray-300 dark:border-gray-700 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900&quot;>Save insight</button>
              <button onClick={() => alert('This would prefill a job posting flow.')} className=&quot;rounded bg-emerald-600 text-white py-2 text-sm hover:bg-emerald-700&quot;>Use in Job Post</button>
              <button onClick={() => alert('This would suggest a resume rate optimization.')} className=&quot;rounded bg-blue-600 text-white py-2 text-sm hover:bg-blue-700&quot;>Optimize Resume Rate</button>            </div>
          </div>
        </div>

        <div className=&quot;lg:col-span-2 space-y-6&quot;>
          {error && (
            <div className=&quot;rounded border border-red-300 bg-red-50 text-red-800 p-3 text-sm&quot;>{error}</div>
          )}

          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4&quot;>
            <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
              <div className=&quot;text-xs text-gray-500&quot;>Recommended Hourly</div>
              <div className=&quot;text-xl font-semibold&quot;>{data ? `$${data.recommendedHourlyUsd}` : '—'}</div>
            </div>
            <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
              <div className=&quot;text-xs text-gray-500&quot;>Recommended Monthly</div>
              <div className=&quot;text-xl font-semibold&quot;>{data ? `$${data.recommendedMonthlyUsd}` : '—'}</div>
            </div>
            <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
              <div className=&quot;text-xs text-gray-500&quot;>Median</div>
              <div className=&quot;text-xl font-semibold&quot;>{data ? `$${data.medianHourlyUsd}` : '—'}</div>
            </div>
            <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
              <div className=&quot;text-xs text-gray-500&quot;>Confidence</div>
              <div className=&quot;text-xl font-semibold&quot;>{data ? `${Math.round(data.confidence * 100)}%` : '—'}</div>
            </div>
          </div>

          <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
            <h3 className=&quot;font-medium mb-3&quot;>Trend: Last 12 months</h3>
            {data ? <LineChart points={data.trendMonthly} /> : <div className=&quot;h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded&quot; />}
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
              <h3 className=&quot;font-medium mb-3&quot;>Regional comparison</h3>
              {data ? (
                <BarChart data={data.regionalComparison.map((r) => ({ label: r.region, value: r.medianHourlyUsd }))} />              ) : (
                <div className=&quot;h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded&quot; />
              )}
              {data && (
                <table className=&quot;w-full mt-3 text-sm&quot;>                  <thead>
                    <tr className=&quot;text-left text-xs text-gray-500&quot;>
                      <th className=&quot;py-1&quot;>Region</th>
                      <th className=&quot;py-1&quot;>Median (USD/hr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.regionalComparison.map((r) => (
                      <tr key={r.region} className=&quot;border-t border-gray-100 dark:border-gray-900&quot;>
                        <td className=&quot;py-1&quot;>{r.region}</td>
                        <td className=&quot;py-1&quot;>${r.medianHourlyUsd}</td>                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
              <h3 className=&quot;font-medium mb-3&quot;>Distribution</h3>
              {data ? (
                <div className=&quot;flex flex-col items-center gap-3&quot;>
                  <DonutChart slices={donutData.map((d, i) => ({ label: d.label, value: d.value })) as any} />
                  <div className=&quot;flex gap-2 flex-wrap justify-center text-xs&quot;>
                    {donutData.map((d) => (
                      <span key={d.label} className=&quot;rounded-full border border-gray-300 dark:border-gray-700 px-2 py-0.5&quot;>{d.label}</span>                    ))}
                  </div>
                </div>
              ) : (
                <div className=&quot;h-40 animate-pulse bg-gray-100 dark:bg-gray-900 rounded&quot; />
              )}
            </div>
          </div>

          {data?.gptRecommendation && (
            <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
              <h3 className=&quot;font-medium mb-2&quot;>GPT Recommendation</h3>
              <p className=&quot;text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap&quot;>{data.gptRecommendation}</p>
            </div>
          )}

          {data && (
            <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
              <h3 className=&quot;font-medium mb-3&quot;>Signals</h3>
              <div className=&quot;flex gap-2 flex-wrap&quot;>
                <span className=&quot;rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs&quot;>Range: ${data.minHourlyUsd} - ${data.maxHourlyUsd} / hr</span>
                {data.tags.map((t) => (
                  <span key={t} className=&quot;rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs&quot;>{t}</span>                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}