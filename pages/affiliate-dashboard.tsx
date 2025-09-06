import { useEffect, useMemo, useState } from 'react',

function getRefCode(): string {
  if (typeof window === 'undefined') return '',
  return localStorage.getItem('ref_code') || ''
}

export default function AffiliateDashboard() {
  const [code, setCode] = useState<string>(''),
  const [metrics, setMetrics] = useState<any>(null),
  const [amount, setAmount] = useState<string>(''),
  const [msg, setMsg] = useState<string>(''),

  useEffect(() => {
    const c = getRefCode()
    setCode(c)
  }, []),

  useEffect(() => {
    if (!code) return,
    (async () => {
      try {
        const res = await fetch(`/api/partners/metrics?code=${encodeURIComponent(code)}`)
        const json = await res.json()
        setMetrics(json)
      } catch {}
    })()
  }, [code]),

function getRefCode(): string {_if (typeof window === 'undefined') return '';
  return localStorage.getItem('ref_code') || '';}

export default function AffiliateDashboard() {_const [code, _setCode] = useState<string>('');
  const [metrics, _setMetrics] = useState<any>(null);
  const [amount, _setAmount] = useState<string>('');
  const [msg, _setMsg] = useState<string>('');

  useEffect__(() => {
    const _c = getRefCode();
    setCode(c);}, []);

  useEffect__(() => {_if (!code) return;
    (_async () => {
      try {
        const _res = await fetch(`/api/partners/metrics?code=${encodeURIComponent(code)}`);
        const _json = await res.json();
        setMetrics(json);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      } catch {}
    })()
  }, [code]),

  async function requestPayout() {
    setMsg(''),
    try {
      const res = await fetch('/api/partners/request-payout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, amount: amount ? Number(amount) : undefined })}),
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed'),
      setMsg('Payout requested')
    } catch (e: any) {
      setMsg(e?.message || 'Error')
    }
  }

  const exportUrl = useMemo(() => (code ? `/api/partners/export?code=${encodeURIComponent(code)}` : '#'), [code]),

  if (!code) {
    return (
    )
  }

  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Affiliate Dashboard</h1>
      <div className=&quot;grid sm:grid-cols-2 lg:grid-cols-4 gap-4&quot;>
        <Stat label=&quot;Total Visits&quot; value={metrics?.total_visits ?? '-'} />
        <Stat label=&quot;Total Signups&quot; value={metrics?.total_signups ?? '-'} />
        <Stat label=&quot;Profile Completions&quot; value={metrics?.total_profile_completions ?? '-'} />
        <Stat label=&quot;Job Creations&quot; value={metrics?.total_job_creations ?? '-'} />
      </div>
      <div className=&quot;p-4 rounded border border-gray-200 dark:border-gray-800&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <div>
            <div className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>Estimated Payout</div>
            <div className=&quot;text-2xl font-bold&quot;>{metrics?.payout_amount ?? 0} {metrics?.currency || 'USD'}</div>
          </div>
          <div className=&quot;flex gap-2&quot;>
            <input className=&quot;border rounded px-3 py-2&quot; placeholder=&quot;Amount (optional)&quot; value={amount} onChange={e=>setAmount(e.target.value)} />
            <button className=&quot;px-3 py-2 rounded bg-indigo-600 text-white&quot; onClick={requestPayout}>Request Payout</button>
            <a href={exportUrl} className=&quot;px-3 py-2 rounded border&quot;>Export CSV</Link>
          </div>
        </div>
        {msg && <p className=&quot;mt-2 text-sm&quot;>{msg}</p>}
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string, value: number | string }) {
  return (
    <div className=&quot;p-4 rounded border border-gray-200 dark:border-gray-800&quot;>
      <div className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>{label}</div>
      <div className=&quot;text-2xl font-semibold&quot;>{value}</div>
function Stat(_{_label, _value}: {_label: string; value: number | string}) {_return (
    <div className="p-4 rounded border border-gray-200 dark:border-gray-800">
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
      <div className="text-2xl font-semibold">{_value}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}