
function getRefCode(): string {

  if (typeof window === 'undefined') return ''
  return localStorage.getItem('ref_code') |''
}
export default function AffiliateDashboard() {
  const [code, setCode] = useState<string>('')
  const [metrics, setMetrics] = useState<any>(null)
  const [amount, setAmount] = useState<string>('')
  const [msg, setMsg] = useState<string>('')
  useEffect(() => {
    const c = getRefCode()
    setCode(c)
  }, [])

  useEffect(() => {
    if (!code) return
    (async () => {
      try {
        const res = await fetch(`/api/partners/metrics?code=${encodeURIComponent(code)}`);
        const json = await res.json();
        setMetrics(json)
      } catch {}
    })()

      setMsg('Payout requested')
    } catch (e: any) {
      setMsg(e?.message |'Error')
    }

function getRefCode(): string {;
  if (typeof window === 'undefined') return '',;
  return localStorage.getItem('ref_code') || '';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
;
export default function AffiliateDashboard(req, res) {
  try {
  const [code, setCode] = useState<string>('');
  const [metrics, setMetrics] = useState<any>(null);
  const [amount, setAmount] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  useEffect(() => {;
    const c = getRefCode();
    setCode(c);
  }, []),;
  useEffect(() => {;
    if (!code) return,;
    (async () => {;
      try {
        const res = await fetch(`/api/partners/metrics?code=${encodeURIComponent(code)}`);
        const json = await res.json();
        setMetrics(json);
      } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    })();
  }, [code]),;
  async function requestPayout() {;
    setMsg('');
    try {
      const res = await fetch('/api/partners/request-payout', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ code, amount: amount ? Number(amount) : undefined })}),;
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');
      setMsg('Payout requested');
    } catch (error) {
      setMsg(e?.message || 'Error');
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const exportUrl = useMemo(() => (code ? `/api/partners/export?code=${encodeURIComponent(code)}` : '#'), [code]),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  if (!code) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>
        <p className="text-gray-600 dark: text-gray-300">No referral code found. Visit your referral link first or register on the Partners page.</p>
      </div>
    )
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======

}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Total Visits" value={metrics?.total_visits ?? '-'} />
        <Stat label="Total Signups" value={metrics?.total_signups ?? '-'} />
        <Stat label="Profile Completions" value={metrics?.total_profile_completions ?? '-'} />
        <Stat label="Job Creations" value={metrics?.total_job_creations ?? '-'} />
      </div>
      <div className="p-4 rounded border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Estimated Payout</div>

          </div>
          <div className="flex gap-2">
            <input className="border rounded px-3 py-2" placeholder="Amount (optional)" value={amount} onChange={e=>setAmount(e.target.value)} />
            <button className="px-3 py-2 rounded bg-indigo-600 text-white" onClick={requestPayout}>Request Payout</button>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      </div>
    </div>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
function Stat({ label, value }: { label: string, value: number | string }) {
  return (
    <div className="p-4 rounded border border-gray-200 dark:border-gray-800">
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>

  )

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <Stat label="Total Visits" value={metrics?.total_visits ?? '-'} />;
        <Stat label="Total Signups" value={metrics?.total_signups ?? '-'} />;
        <Stat label="Profile Completions" value={metrics?.total_profile_completions ?? '-'} />;
        <Stat label="Job Creations" value={metrics?.total_job_creations ?? '-'} />;
      </div>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
