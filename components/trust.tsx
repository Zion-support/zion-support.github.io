
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
import EnhancedLayout from '../components/layout/EnhancedLayout';
import TrustBadge from '../components/ui/TrustBadge';
import TrustRadar from '../components/ui/TrustRadar';
import RiskIndicator from '../components/ui/RiskIndicator';
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
  const [loading, setLoading] = useState<boolean>(true);
  const [showLogic, setShowLogic] = useState<boolean>(false);
  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const u = params.get('user');
    if (u) setUserId(u);    if (u) setUserId(u)
  }, []);
  useEffect(() => {
    async function load() {

export default function TrustPage() {;
  const [userId, setUserId] = useState<string>('demo-user');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showLogic, setShowLogic] = useState<boolean>(false);



  }, []);
  useEffect(() => {;
    async function load() {;
      setLoading(true);


    });
    alert(type === 'endorse' ? 'Endorsed' : 'Flagged');  }      const json = await res && res.json();
      setData(json);
=======
      setLoading(true);
      const res = await fetch(
        `/api/trust/${encodeURIComponent(userId)}?analyze=true`
      );
      const json = await res.json();
      setData(json);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      setLoading(false);
    }
    load();
  }, [userId]);

    <EnhancedLayout>    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) });
    alert('Appeal submitted');
=======
    form && form.reset();  }
  return (
    <EnhancedLayout>    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) });
    alert('Appeal submitted');

    form.reset()
    <EnhancedLayout>

    <EnhancedLayout>    await fetch('/api/trust/appeal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, message, contactEmail }) });
    alert('Appeal submitted');

    form.reset()
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
  return (
=======
    <EnhancedLayout>
      <div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Trust & Reputation</h1>
          <div className='flex items-center gap-3'>
            <label className='text-sm inline-flex items-center gap-2'>
              <input
                type='checkbox'
                checked={showLogic}
                onChange={() => setShowLogic(!showLogic)}
              />{' '}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    <EnhancedLayout>

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Trust & Reputation</h1>
          <div className="flex items-center gap-3">
            <label className="text-sm inline-flex items-center gap-2"><input type="checkbox" checked={showLogic} onChange={() => setShowLogic(!showLogic)} /> Transparent logic</label>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
  }
  return (
    <EnhancedLayout>


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    ))}
                  </ul>;
                </div>;
              )}
              {data && data.reasonSummary && (;
                <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap'>                  <strong>Operator GPT Analysis:</strong> {data && data.reasonSummary}
                </div>;
              )}

                    ))}
                  </ul>
                </div>
              )}
              {data.reasonSummary && (
=======
                <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap'>                  <strong>Operator GPT Analysis:</strong> {data.reasonSummary}
                </div>
              )}
            </div>                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap">
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
                >
                  Endorse
                </button>
                <button
                  className='text-sm px-3 py-1 rounded bg-red-600 text-white'
                  onClick={() => submitPeer('flag')}
                >
                  Flag
                </button>
              </div>
              {data.total < 70 && (
                <div className='bg-white dark:bg-gray-900 rounded border p-4 space-y-3'>
                  <h3 className='font-medium'>Appeal Score</h3>
                  <form onSubmit={submitAppeal} className='space-y-2'>
                    <input
                      name='email'
                      type='email'
                      placeholder='Contact email'
                      className='w-full border rounded px-2 py-1 text-sm'
                    />
                    <textarea
                      name='message'
                      placeholder='Explain why your score should be reconsidered'
                      className='w-full border rounded px-2 py-1 text-sm'
                      rows={4}
                      required
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
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            </div>;
          </div>;
        )}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
