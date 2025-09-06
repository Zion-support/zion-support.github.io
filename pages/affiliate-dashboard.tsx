<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react';
import { useEffect, useMemo, useState } from 'react',;
;
function getRefCode(): string {
=======


=======


=======
  if (typeof window;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  useEffect(() => {
    if (!code) return
    (async () => {
      try {
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
const res = await fetch(
          `/api/partners/metrics?code=${encodeURIComponent(code)}`
        );
        const json = await res.json();
        setMetrics(json);
      } catch {}
    })();
  }, [code]);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  async function requestPayout() {
    setMsg('')
    try {
      const res = await fetch('/api/partners/request-payout', {
<<<<<<< HEAD
<<<<<<< HEAD
=======

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, amount: amount ? Number(amount) : undefined })}),
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      setMsg('Payout requested')
    } catch (e: any) {
      setMsg(e?.message |'Error')
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  const exportUrl = useMemo(() => (code ? `/api/partners/export?code=${encodeURIComponent(code)}` : '#'), [code])
<<<<<<< HEAD
=======
      setMsg('Payout requested')
=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
          code,
          amount: amount ? Number(amount) : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');
      setMsg('Payout requested');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    } catch (e: any) {
      setMsg(e?.message || 'Error');
    }
  };

  const exportUrl = useMemo(
    () =>
      code ? `/api/partners/export?code=${encodeURIComponent(code)}` : '#',
    [code]
  );

  if (!code) {
    return (
      <div className='space-y-4'>
        <h1 className='text-2xl font-semibold'>Affiliate Dashboard</h1>
        <p className='text-gray-600 dark:text-gray-300'>
          No referral code found. Visit your referral link first or register on
          the Partners page.
        </p>
      </div>
    );
  }
<<<<<<< HEAD
  const exportUrl = useMemo(() => (code ? `/api/partners/export?code=${encodeURIComponent(code)}` : '#'), [code])
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import { useEffect, useMemo, useState } from 'react';
function getRefCode(): string {;
  if (typeof window === 'undefined') return '',;
  return localStorage.getItem('ref_code') || '';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  const exportUrl = useMemo(() => (code ? `/api/partners/export?code=${encodeURIComponent(code)}` : '#'), [code])

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

function getRefCode(): string {;
  if (typeof window === 'undefined') return '',;
  return localStorage.getItem('ref_code') || '';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======

  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-semibold'>Affiliate Dashboard</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Stat label='Total Visits' value={metrics?.total_visits ?? '-'} />
        <Stat label='Total Signups' value={metrics?.total_signups ?? '-'} />
        <Stat
          label='Profile Completions'
          value={metrics?.total_profile_completions ?? '-'}
        />
        <Stat
          label='Job Creations'
          value={metrics?.total_job_creations ?? '-'}
        />
      </div>
      <div className='p-4 rounded border border-gray-200 dark:border-gray-800'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='text-sm text-gray-600 dark:text-gray-300'>
              Estimated Payout
            </div>
            <div className='text-2xl font-bold'>
              {metrics?.payout_amount ?? 0} {metrics?.currency || 'USD'}
            </div>
          </div>
          <div className='flex gap-2'>
            <input
              className='border rounded px-3 py-2'
              placeholder='Amount (optional)'
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
            <button
              className='px-3 py-2 rounded bg-indigo-600 text-white'
              onClick={requestPayout}
            >
              Request Payout
            </button>
            <a href={exportUrl} className='px-3 py-2 rounded border'>
              Export CSV
            </a>
          </div>
        </div>
        {msg && <p className='mt-2 text-sm'>{msg}</p>}
      </div>
    </div>
  );

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className='p-4 rounded border border-gray-200 dark:border-gray-800'>
      <div className='text-sm text-gray-600 dark:text-gray-300'>{label}</div>
      <div className='text-2xl font-semibold'>{value}</div>
    </div>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  if (!code) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>
        <p className="text-gray-600 dark: text-gray-300">No referral code found. Visit your referral link first or register on the Partners page.</p>
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======


}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======


            <div className="text-2xl font-bold">{metrics?.payout_amount ?? 0} {metrics?.currency || 'USD'}</div>


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </div>
          <div className="flex gap-2">
            <input className="border rounded px-3 py-2" placeholder="Amount (optional)" value={amount} onChange={e=>setAmount(e.target.value)} />
            <button className="px-3 py-2 rounded bg-indigo-600 text-white" onClick={requestPayout}>Request Payout</button>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


            <a href={exportUrl} className="px-3 py-2 rounded border">Export CSV</Link>
          </div>
        </div>
        {msg && <p className="mt-2 text-sm">{msg}</p>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  )
=======
  )
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
;
  const exportUrl = useMemo(() => (code ? `/api/partners/export?code=${encodeURIComponent(code)}` : '#'), [code]);
  if (!code) {;
    return (;
      <div className="space-y-4">;
        <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>;
        <p className="text-gray-600 dark: text-gray-300">No referral code found. Visit your referral link first or register on the Partners page.</p>;
      </div>;
    );
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
;
  const exportUrl = useMemo(() => (code ? `/api/partners/export?code=${encodeURIComponent(code)}` : '#'), [code]);
  if (!code) {;
    return (;
      <div className="space-y-4">;
        <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>;
        <p className="text-gray-600 dark: text-gray-300">No referral code found. Visit your referral link first or register on the Partners page.</p>;
      </div>;
    );
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return (;
    <div className="space-y-6">;
      <h1 className="text-2xl font-semibold">Affiliate Dashboard</h1>;
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <Stat label="Total Visits" value={metrics?.total_visits ?? '-'} />;
        <Stat label="Total Signups" value={metrics?.total_signups ?? '-'} />;
        <Stat label="Profile Completions" value={metrics?.total_profile_completions ?? '-'} />;
        <Stat label="Job Creations" value={metrics?.total_job_creations ?? '-'} />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
      </div>;
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
      <div className="p - 4 rounded border border - gray - 200 dark:border - gray - 800">;
        <div className="flex items - center justify - between">;
          <div>;
            <div className="text - sm text - gray - 600 dark:text - gray - 300">Estimated Payout</div>;
            <div className="text - 2xl font - bold">{metrics?.payout_amount ?? 0} {metrics?.currency || 'USD'}</div>;
          </div>;
          <div className="flex gap - 2">;
            <input className="border rounded px - 3 py - 2" placeholder="Amount (optional)" value={amount} on_change={e=>set_amount (e.target.value)} />;
            <button className="px - 3 py - 2 rounded bg - indigo - 600 text - white" on_click={request_payout}>Request Payout</button>;
            <a href={export_url} className="px - 3 py - 2 rounded border">Export CSV</a>;
          </div>;
        </div>;
        {msg && <p className="mt - 2 text - sm">{msg}</p>}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
/**
 * Stat - Function description
 */
function Stat() {
  return (
    <div className="p - 4 rounded border border - gray - 200 dark:border - gray - 800">;
      <div className="text - sm text - gray - 600 dark:text - gray - 300">{label}</div>;
      <div className="text - 2xl font - semibold">{value}</div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
