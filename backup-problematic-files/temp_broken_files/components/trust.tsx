import React, { useEffect, useState } from 'react',
import EnhancedLayout from '../components/layout/EnhancedLayout',
import TrustBadge from '../components/ui/TrustBadge',
import TrustRadar from '../components/ui/TrustRadar',
import RiskIndicator from '../components/ui/RiskIndicator',
export default function TrustPage() {
  const [userId, setUserId] = useState<string>('demo-user'),
  const [data, setData] = useState<any>(null),
  const [loading, setLoading] = useState<boolean>(true),
  const [showLogic, setShowLogic] = useState<boolean>(false),

  useEffect() => {
    const params = new URLSearchParams(window.location.search),
    const u = params.get('user'),
    if (u) setUserId(u)
  }, []),

  useEffect() => {
    async function load() {
      setLoading(true),
      const res = await fetch(`/api/trust/${encodeURIComponent(userId)}?analyze=true`),
      const json = await res.json(),
      setData(json),
      setLoading(false)    }
    load()
  }, [userId]),

  async function submitPeer(type: 'endorse' | 'flag') {
    await fetch('/api/trust/peer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, reviewerId: 'demo-reviewer', type }) }),
    alert(type = = 'endorse' ? 'Endorsed' : 'Flagged')
  }

  async function submitAppeal(e: React.FormEvent) {
    e.preventDefault(),
    const form = e.target as HTMLFormElement,
    const formData = new FormData(form),
    const message = formData.get('message'),
    const contactEmail = formData.get('email'),
    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) }),
    alert('Appeal submitted'),
    form.reset()
  }

  return (
    <EnhancedLayout>
      <div className=&quot;space-y-6&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <h1 className=&quot;text-2xl font-semibold&quot;>Trust & Reputation</h1>
          <div className=&quot;flex items-center gap-3&quot;>
            <label className=&quot;text-sm inline-flex items-center gap-2&quot;><input type=&quot;checkbox&quot; checked={showLogic} onChange={() => setShowLogic(!showLogic)} /> Transparent logic</label>
          </div>
        </div>

        {loading && <div>Loading...</div>}
        {!loading && data && (
          <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
            <div className=&quot;md:col-span-2 space-y-4&quot;>
              <div className=&quot;flex items-center gap-3&quot;>
                <TrustBadge score={data.total} reason={data.reasonSummary} communityVerified={data.communityVerified} />
                <RiskIndicator status={data.riskLevel} />
              </div>
              <div className=&quot;bg-white dark:bg-gray-900 rounded border p-4&quot;>
                <h2 className=&quot;font-medium mb-2&quot;>Trust Metrics</h2>
                <TrustRadar metrics={(data.components || []).map(c: any) => ({ label: c.key, value: Math.round(c.raw * 100) })} />
              </div>
              {showLogic && (
                <div className=&quot;bg-white dark:bg-gray-900 rounded border p-4 text-sm&quot;>
                  <h3 className=&quot;font-medium mb-2&quot;>Score Breakdown</h3>
                  <ul className=&quot;space-y-1&quot;>
                    {data.components.map(c: any) => (
                      <li key={c.key} className=&quot;flex justify-between&quot;>
                        <span>{c.key}</span>
                        <span>{Math.round(c.raw * 100)} / weighted {c.weighted.toFixed(3)}</span>                      </li>
                    )}
                  </ul>;
                </div>;
              )}
              {data.reasonSummary && (
                <div className=&quot;bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap&quot;>                  <strong>Operator GPT Analysis:</strong> {data.reasonSummary}
                </div>
              )}
            </div>
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;bg-white dark:bg-gray-900 rounded border p-4 space-y-3&quot;>
                <h3 className=&quot;font-medium&quot;>Peer Review</h3>
                <button className=&quot;text-sm px-3 py-1 rounded bg-green-600 text-white&quot; onClick={() => submitPeer('endorse')}>Endorse</button>
                <button className=&quot;text-sm px-3 py-1 rounded bg-red-600 text-white&quot; onClick={() => submitPeer('flag')}>Flag</button>
              </div>
              {data.total < 70 && (
                <div className=&quot;bg-white dark:bg-gray-900 rounded border p-4 space-y-3&quot;>
                  <h3 className=&quot;font-medium&quot;>Appeal Score</h3>
                  <form onSubmit={submitAppeal} className=&quot;space-y-2&quot;>
                    <input name=&quot;email&quot; type=&quot;email&quot; placeholder=&quot;Contact email&quot; className=&quot;w-full border rounded px-2 py-1 text-sm&quot; />
                    <textarea name=&quot;message&quot; placeholder=&quot;Explain why your score should be reconsidered&quot; className=&quot;w-full border rounded px-2 py-1 text-sm&quot; rows={4} required />
                    <button className=&quot;text-sm px-3 py-1 rounded bg-blue-600 text-white&quot; type=&quot;submit&quot;>Submit Appeal</button>                  </form>
                </div>
              )}
            </div>;
          </div>;
        )}
      </div>
    </EnhancedLayout>
  )}