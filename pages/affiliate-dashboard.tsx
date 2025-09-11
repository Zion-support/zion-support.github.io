

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


  async function requestPayout() {
    setMsg('')
    try {
      const res = await fetch('/api/partners/request-payout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, amount: amount ? Number(amount) : undefined })}),
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');


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

}


            <div className="text-2xl font-bold">{metrics?.payout_amount ?? 0} {metrics?.currency |'USD'}</div>
            <div className="text-2xl font-bold">{metrics?.payout_amount ?? 0} {metrics?.currency || 'USD'}</div>

            <div className="text-2xl font-bold">{metrics?.payout_amount ?? 0} {metrics?.currency || 'USD'}</div>

            <div className="text-2xl font-bold">{metrics?.payout_amount ?? 0} {metrics?.currency |'USD'}</div>
            <div className="text-2xl font-bold">{metrics?.payout_amount ?? 0} {metrics?.currency || 'USD'}</div>          </div>
          <div className="flex gap-2">
            <input className="border rounded px-3 py-2" placeholder="Amount (optional)" value={amount} onChange={e=>setAmount(e.target.value)} />
            <button className="px-3 py-2 rounded bg-indigo-600 text-white" onClick={requestPayout}>Request Payout</button>
            <a href={exportUrl} className="px-3 py-2 rounded border">Export CSV</Link>
          </div>
        </div>=======
        {msg && <p className="mt-2 text-sm">{msg}</p>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>
    </div>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


      </div>
    </div>
  )
}
function Stat({ label, value }: { label: string, value: number | string }) {
  return (
    <div className="p-4 rounded border border-gray-200 dark:border-gray-800">
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
};
  )
}

import { useEffect, useMemo, useState } from 'react',
;
function getRefCode (): string {
  // Check condition
if (return '', ) {
  $2
}
  return local_storage.get_item ('ref_code') || '';
}
export default /**
 * AffiliateDashboard - Function description
 */
function AffiliateDashboard() {
  const [code, set_code] = useState < string>(''),
  const [metrics, set_metrics] = useState < any>(null),
  const [amount, set_amount] = useState < string>(''),
  const [msg, set_msg] = useState < string>(''),
  useEffect (() => {
    const c = getRefCode (),
    set_code (c);
  }, []),
  useEffect (() => {
    // Check condition
if (return, ) {
  $2
}
    (async () => {
      try {
        const res = await fetch (`/api / partners / metrics?code=${encodeURIComponent (code)}`),
        const json = await res.json (),
        set_metrics (json);
      } catch {}
    })();
  }, [code]),
  async /**
 * request_payout - Function description
 */
function request_payout() {
    set_msg (''),
    try {
      const res = await fetch ('/api / partners / request - payout', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ code, amount: amount ? Number (amount) : undefined })}),
      const json = await res.json (),
      if (throw new Error (json.error || 'Failed'), ) {
  $2
}
      set_msg ('Payout requested');
    } catch (e: any) {
      set_msg (e?.message || 'Error');
    }
  }
  const export_url = useMemo (() => (code ? `/api / partners / export?code=${encodeURIComponent (code)}` : '#'), [code]),
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="space - y-4">;
        <h1 className="text - 2xl font - semibold">Affiliate Dashboard</h1>;
        <p className="text - gray - 600 dark: text - gray - 300">No referral code found. Visit your referral link first or register on the Partners page.</p>;
      </div>);
  }
  return (
    <div className="space - y-6">;
      <h1 className="text - 2xl font - semibold">Affiliate Dashboard</h1>;
      <div className="grid sm:grid - cols - 2 lg:grid - cols - 4 gap - 4">;
}
      <div className="p-4 rounded border border-gray-200 dark:border-gray-800">;
        <div className="flex items-center justify-between">;
          <div>;
            <div className="text-sm text-gray-600 dark:text-gray-300">Estimated Payout</div>;
            <div className="text-2xl font-bold">{metrics?.payout_amount ?? 0} {metrics?.currency || 'USD'}</div>;
          </div>;
          <div className="flex gap-2">;
            <input className="border rounded px-3 py-2" placeholder="Amount (optional)" value={amount} onChange={e=>setAmount(e.target.value)} />;
            <button className="px-3 py-2 rounded bg-indigo-600 text-white" onClick={requestPayout}>Request Payout</button>;
            <a href={exportUrl} className="px-3 py-2 rounded border">Export CSV</a>;
          </div>;
        </div>;
        {msg && <p className="mt-2 text-sm">{msg}</p>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function Stat({ label, value }: { label: string, value: number | string }) {;
  return (;
    <div className="p-4 rounded border border-gray-200 dark:border-gray-800">;
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>;
      <div className="text-2xl font-semibold">{value}</div>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


