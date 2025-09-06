
<<<<<<< HEAD
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
import React, { useEffect, useState } from 'react';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import EnhancedLayout from '../components/layout/EnhancedLayout';
import TrustBadge from '../components/ui/TrustBadge';
import TrustRadar from '../components/ui/TrustRadar';
import RiskIndicator from '../components/ui/RiskIndicator';
<<<<<<< HEAD
<<<<<<< HEAD
export default function TrustPage() {
  const [userId, setUserId] = useState<string>('demo-user'),
  const [data, setData] = useState<any>(null),
export default function TrustPage() {;
  const [userId, setUserId] = useState<string>('demo-user');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showLogic, setShowLogic] = useState<boolean>(false);
  useEffect(() => {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const [loading, setLoading] = useState<boolean>(true);
  const [showLogic, setShowLogic] = useState<boolean>(false);
  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const u = params.get('user');
    if (u) setUserId(u);    if (u) setUserId(u)
=======
    const params = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  }, []);
  useEffect(() => {
    async function load() {
<<<<<<< HEAD

export default function TrustPage() {;
  const [userId, setUserId] = useState<string>('demo-user');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showLogic, setShowLogic] = useState<boolean>(false);



=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }, []);

  useEffect(() => {;
    async function load() {;
      setLoading(true);
<<<<<<< HEAD
=======
const res = await fetch(
        `/api/trust/${encodeURIComponent(userId)}?analyze=true`
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      );
      const json = await res && res.json();
      setData(json);
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setLoading(false);
    }
    load();
  }, [userId]);
<<<<<<< HEAD
<<<<<<< HEAD

    <EnhancedLayout>    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) });
    alert('Appeal submitted');
=======
    form && form.reset();  }
  return (
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <EnhancedLayout>    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) });
    alert('Appeal submitted');

    form.reset()
    <EnhancedLayout>

    <EnhancedLayout>    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) });
    alert('Appeal submitted');

    form.reset()
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    <EnhancedLayout>    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) });
    alert('Appeal submitted');

    form && form.reset();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
  async function submitPeer(type: 'endorse' | 'flag') {
    await fetch('/api/trust/peer', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId, reviewerId: 'demo-reviewer', type })
    });
    alert(type === 'endorse' ? 'Endorsed' : 'Flagged');
  }
  async function submitAppeal(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const message = formData.get('message');
    const contactEmail = formData.get('email');
await fetch('/api/trust/appeal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, message, contactEmail }),
    });
    alert('Appeal submitted');
    form.reset();
    form.reset()
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  }
  return (
    <EnhancedLayout>
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <div className='space-y-6'>
=======
<div className='space-y-6'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Trust & Reputation</h1>
          <div className='flex items-center gap-3'>
            <label className='text-sm inline-flex items-center gap-2'>
              <input
                type='checkbox'
                checked={showLogic}
                onChange={() => setShowLogic(!showLogic)}
              />{' '}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Trust & Reputation</h1>
          <div className="flex items-center gap-3">
            <label className="text-sm inline-flex items-center gap-2"><input type="checkbox" checked={showLogic} onChange={() => setShowLogic(!showLogic)} /> Transparent logic</label>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <div className="bg-white dark:bg-gray-900 rounded border p-4">
                <h2 className="font-medium mb-2">Trust Metrics</h2>
                <TrustRadar metrics={(data.components |[]).map((c: any) => ({ label: c.key, value: Math.round(c.raw * 100) }))} />
              </div>
              {showLogic && (
                <div className="bg-white dark:bg-gray-900 rounded border p-4 text-sm">
                  <h3 className="font-medium mb-2">Score Breakdown</h3>
                  <ul className="space-y-1">
                    {data.components.map((c: any) => (
                      <li key={c.key} className="flex justify-between">

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }
  return (
    <EnhancedLayout>

<<<<<<< HEAD
=======


=======
              Transparent logic
            </label>
          </div>
        </div>
        {loading && <div>Loading...</div>}
        {!loading && data && (
<div className='grid md:grid-cols-3 gap-6'>
            <div className='md:col-span-2 space-y-4'>
              <div className='flex items-center gap-3'>
                <TrustBadge
                  score={data.total}
                  reason={data.reasonSummary}
                  communityVerified={data.communityVerified}
                />
                <RiskIndicator status={data.riskLevel} />
              </div>
              <div className='bg-white dark:bg-gray-900 rounded border p-4'>
                <h2 className='font-medium mb-2'>Trust Metrics</h2>
                <TrustRadar
                  metrics={(data.components |[]).map((c: any) => ({
                    label: c.key
                    value: Math.round(c.raw * 100)
                  }))}
                />
              </div>
              {showLogic && (
                <div className='bg-white dark:bg-gray-900 rounded border p-4 text-sm'>
                  <h3 className='font-medium mb-2'>Score Breakdown</h3>
                  <ul className='space-y-1'>
                    {data.components.map((c: any) => (
                      <li key={c.key} className='flex justify-between'>
                        <span>{c.key}</span>
                        <span>
                          {Math.round(c.raw * 100)} / weighted{' '}
                          {c.weighted.toFixed(3)}
                        </span>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      </li>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    ))}
                  </ul>;
                </div>;
              )}
              {data && data.reasonSummary && (;
                <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap'>                  <strong>Operator GPT Analysis:</strong> {data && data.reasonSummary}
                </div>;
              )}
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  return (
    <EnhancedLayout>


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

                      </li>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    ))}
                  </ul>;
                </div>;
              )}
              {data && data.reasonSummary && (;
                <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap'>                  <strong>Operator GPT Analysis:</strong> {data && data.reasonSummary}
                </div>;
              )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    ))}
                  </ul>
                </div>
              )}
              {data.reasonSummary && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap'>                  <strong>Operator GPT Analysis:</strong> {data.reasonSummary}
                </div>
              )}
            </div>                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap">
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <strong>Operator GPT Analysis:</strong> {data.reasonSummary}
                </div>
              )}
            </div>
<div className='space-y-4'>
              <div className='bg-white dark:bg-gray-900 rounded border p-4 space-y-3'>
                <h3 className='font-medium'>Peer Review</h3>
                <button
                  className='text-sm px-3 py-1 rounded bg-green-600 text-white'
                  onClick={() => submitPeer('endorse')}
                    <input
                      name='email'
                      type='email'
                      placeholder='Contact email'
                      className='w-full border rounded px-2 py-1 text-sm'
                    <textarea
                      name='message'
                      placeholder='Explain why your score should be reconsidered'
                      className='w-full border rounded px-2 py-1 text-sm'
                      rows={4}
                      required
<<<<<<< HEAD
<<<<<<< HEAD
                    />
                    <button
                      className='text-sm px-3 py-1 rounded bg-blue-600 text-white'
                      type='submit'
                    >
                      Submit Appeal
                    </button>                  </form>                <div className="bg-white dark:bg-gray-900 rounded border p-4 space-y-3">
                  <h3 className="font-medium">Appeal Score</h3>
                  <form onSubmit={submitAppeal} className="space-y-2">
                    <input name="email" type="email" placeholder="Contact email" className="w-full border rounded px-2 py-1 text-sm" />
                    <textarea name="message" placeholder="Explain why your score should be reconsidered" className="w-full border rounded px-2 py-1 text-sm" rows={4} required />
                    <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white" type="submit">Submit Appeal</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </EnhancedLayout>
);
}
            </div>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                  <strong>Operator GPT Analysis:</strong> {data.reasonSummary}
                </div>
              )}
            </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            </div>;
          </div>;
        )}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      </div>;
    </EnhancedLayout>;
  );
}

=======
                    />
                    <button
                      className='text-sm px-3 py-1 rounded bg-blue-600 text-white'
                      type='submit'
                    >
                      Submit Appeal
                    </button>
                  </form>
                </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              )}
            </div>;
          </div>;
        )}
<<<<<<< HEAD
  );
}
import EnhancedLayout from '../components / layout / EnhancedLayout';
import TrustBadge from '../components / ui / TrustBadge';
import TrustRadar from '../components / ui / TrustRadar';
import RiskIndicator from '../components / ui / RiskIndicator';
export default /**
 * TrustPage - Function description
 */
function TrustPage() {
  const [user_id, setUserId] = useState < string>('demo - user');
  const [data, set_data] = useState < any>(null);
  const [loading, set_loading] = useState < boolean>(true);
  const [show_logic, setShowLogic] = useState < boolean>(false);
;
  useEffect (() => {
    const params = new URLSearchParams (window.location.search);
    const u = params.get ('user');
    if (setUserId (u)) {
  $2
}    if (setUserId (u)) {
  $2
}
  }, []);
;
  useEffect (() => {
    async /**
 * load - Function description
 */
function load() {
      set_loading (true);
      const res = await fetch (
        `/api / trust/${encodeURIComponent (user_id)}?analyze = true`);
      const json = await res.json ();
      set_data (json);
      set_loading (false);
    }
    load ();
  }, [user_id]);
;
  async /**
 * submit_peer - Function description
 */
function submit_peer() {
    await fetch ('/api / trust / peer', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ user_id, reviewer_id: 'demo - reviewer', type }),
    });
    alert (type === 'endorse' ? 'Endorsed' : 'Flagged');  }      const json = await res.json ();
      set_data (json);
      set_loading (false);
    }
    load ();
  }, [user_id]);
;
  async /**
 * submit_peer - Function description
 */
function submit_peer() {
    await fetch ('/api / trust / peer', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ user_id, reviewer_id: 'demo - reviewer', type }) });
    alert (type === 'endorse' ? 'Endorsed' : 'Flagged');
  }
  async /**
 * submit_appeal - Function description
 */
function submit_appeal() {
    e.prevent_default ();
    const form = e.target as HTMLFormElement;
    const form_data = new FormData (form);
    const message = form_data.get ('message');
    const contact_email = form_data.get ('email');
    await fetch ('/api / trust / appeal', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ user_id, message, contact_email }),
    });
    alert ('Appeal submitted');
    form.reset ();  }
  return (
    <EnhancedLayout>    await fetch ('/api / trust / appeal', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ user_id, message, contact_email }) });
    alert ('Appeal submitted');
    form.reset ();
  }
  return (
    <EnhancedLayout>;
      <div className='space - y-6'>;
        <div className='flex items - center justify - between'>;
          <h1 className='text - 2xl font - semibold'>Trust & Reputation</h1>;
          <div className='flex items - center gap - 3'>;
            <label className='text - sm inline - flex items - center gap - 2'>;
              <input;
                type='checkbox';
                checked={show_logic}
                on_change={() => setShowLogic (!show_logic)}
              />{' '}
              Transparent logic;
            </label>          </div>      <div className="space-y-6">;
        <div className="flex items-center justify-between">;
          <h1 className="text-2xl font-semibold">Trust & Reputation</h1>;
          <div className="flex items-center gap-3">;
            <label className="text - sm inline - flex items-center gap-2"><input type="checkbox" checked={show_logic} on_change={() => setShowLogic (!show_logic)} /> Transparent logic</label>;
        </div>;
        {loading && <div > Loading...</div>}
        {!loading && data && (
          <div className='grid md:grid - cols - 3 gap - 6'>;
            <div className='md:col - span - 2 space - y-4'>;
              <div className='flex items - center gap - 3'>;
                <TrustBadge;
                  score={data.total}
                  reason={data.reason_summary}
                  community_verified={data.community_verified}
                />;
                <RiskIndicator status={data.risk_level} />;
              </div>;
              <div className='bg - white dark:bg - gray - 900 rounded border p - 4'>;
                <h2 className='font - medium mb - 2'>Trust Metrics</h2>;
                <TrustRadar;
                  metrics={(data.components || []).map ((c: any) => ({
                    label: c.key,
                    value: Math.round (c.raw * 100),
                  }))}
                />;
              </div>;
              {show_logic && (
                <div className='bg - white dark:bg - gray - 900 rounded border p - 4 text - sm'>;
                  <h3 className='font - medium mb - 2'>Score Breakdown</h3>;
                  <ul className='space - y-1'>;
                    {data.components.map ((c: any) => (
                      <li key={c.key} className='flex justify - between'>;
                        <span>{c.key}</span>;
                        <span>;
                          {Math.round (c.raw * 100)} / weighted{' '}
                          {c.weighted.to_fixed (3)}
                        </span>                      </li>                <RiskIndicator status={data.risk_level} />;
              </div>;
              <div className="bg - white dark:bg - gray-900 rounded border p-4">;
                <h2 className="font-medium mb-2">Trust Metrics</h2>;
                <TrustRadar metrics={(data.components || []).map ((c: any) => ({ label: c.key, value: Math.round (c.raw * 100) }))} />;
              </div>;
              {show_logic && (
                <div className="bg - white dark:bg - gray - 900 rounded border p-4 text-sm">;
                  <h3 className="font-medium mb-2">Score Breakdown</h3>;
                  <ul className="space-y-1">;
                    {data.components.map ((c: any) => (
                      <li key={c.key} className="flex justify-between">;
                        <span>{c.key}</span>;
                        <span>{Math.round (c.raw * 100)} / weighted {c.weighted.to_fixed (3)}</span>;
                      </li>))}
                  </ul>;
                </div>)}
              {data.reason_summary && (
                <div className='bg - blue - 50 dark:bg - blue - 900 / 20 border border - blue - 200 dark:border - blue - 800 rounded p - 3 text - sm whitespace - pre - wrap'>                  <strong > Operator GPT Analysis:</strong> {data.reason_summary}
                </div>)}
            </div>                <div className="bg - blue - 50 dark:bg - blue - 900 / 20 border border - blue - 200 dark:border - blue - 800 rounded p - 3 text - sm whitespace-pre-wrap">;
                  <strong > Operator GPT Analysis:</strong> {data.reason_summary}
                </div>)}
            </div>;
            <div className='space - y-4'>;
              <div className='bg - white dark:bg - gray - 900 rounded border p - 4 space - y-3'>;
                <h3 className='font - medium'>Peer Review</h3>;
                <button;
                  className='text - sm px - 3 py - 1 rounded bg - green - 600 text - white';
                  on_click={() => submit_peer ('endorse')}
                >;
                  Endorse;
                </button>;
                <button;
                  className='text - sm px - 3 py - 1 rounded bg - red - 600 text - white';
                  on_click={() => submit_peer ('flag')}
                >;
                  Flag;
                </button>;
              </div>;
              {data.total < 70 && (
                <div className='bg - white dark:bg - gray - 900 rounded border p - 4 space - y-3'>;
                  <h3 className='font - medium'>Appeal Score</h3>;
                  <form on_submit={submit_appeal} className='space - y-2'>;
                    <input;
                      name='email';
                      type='email';
                      placeholder='Contact email';
                      className='w - full border rounded px - 2 py - 1 text - sm';
                    />;
                    <textarea;
                      name='message';
                      placeholder='Explain why your score should be reconsidered';
                      className='w - full border rounded px - 2 py - 1 text - sm';
                      rows={4}
                      required;
                    />;
                    <button;
                      className='text - sm px - 3 py - 1 rounded bg - blue - 600 text - white';
                      type='submit';
                    >;
                      Submit Appeal;
                    </button>                  </form>                <div className="bg - white dark:bg - gray - 900 rounded border p-4 space-y-3">;
                  <h3 className="font-medium">Appeal Score</h3>;
                  <form on_submit={submit_appeal} className="space-y-2">;
                    <input name="email" type="email" placeholder="Contact email" className="w - full border rounded px - 2 py-1 text-sm" />;
                    <textarea name="message" placeholder="Explain why your score should be reconsidered" className="w - full border rounded px - 2 py-1 text-sm" rows={4} required />;
                    <button className="text - sm px - 3 py - 1 rounded bg - blue-600 text-white" type="submit">Submit Appeal</button>;
                </div>)}
            </div>;
          </div>)}
      </div>;
    </EnhancedLayout>);
}

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
      </div>
    </EnhancedLayout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
