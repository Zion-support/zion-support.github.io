
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
      } catch {}
    })();
  }, [code]);

  async function requestPayout() {_setMsg('');
    try {
      const _res = await fetch('/api/partners/request-payout', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_code, _amount: amount ? Number(amount) : undefined})});
      const _json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');
      setMsg('Payout requested');
    } catch (e: unknown) {_setMsg(e?.message || 'Error');}
  }

  const _exportUrl = useMemo__(() => (code ? `/api/partners/export?code=${_encodeURIComponent(code)}` : '#'), [code]);

  if (!code) {_return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300">No referral code found. Visit your referral link first or register on the Partners page.</p>
      </div>
    );}

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Total Visits" value={_metrics?.total_visits ?? '-'} />
        <Stat label="Total Signups" value={_metrics?.total_signups ?? '-'} />
        <Stat label="Profile Completions" value={_metrics?.total_profile_completions ?? '-'} />
        <Stat label="Job Creations" value={_metrics?.total_job_creations ?? '-'} />
      </div>
      <div className="p-4 rounded border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Estimated Payout</div>
            <div className="text-2xl font-bold">{_metrics?.payout_amount ?? 0} {_metrics?.currency || 'USD'}</div>
          </div>
          <div className="flex gap-2">
            <input className="border rounded px-3 py-2" placeholder="Amount (optional)" value={_amount} onChange={_e=>setAmount(e.target.value)} />
            <button className="px-3 py-2 rounded bg-indigo-600 text-white" onClick={_requestPayout}>Request Payout</button>
            <a href={_exportUrl} className="px-3 py-2 rounded border">Export CSV</a>
          </div>
        </div>
        {_msg && <p className="mt-2 text-sm">{msg}</p>}
      </div>
    </div>
  );
}

function Stat(_{_label, _value}: {_label: string; value: number | string}) {_return (
    <div className="p-4 rounded border border-gray-200 dark:border-gray-800">
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
      <div className="text-2xl font-semibold">{_value}</div>
    </div>
  );
}