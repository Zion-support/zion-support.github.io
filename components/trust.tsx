<<<<<<< HEAD
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search),
    const u = params.get('user'),
    if (u) setUserId(u)
  }, []),

  useEffect(() => {
    async function load() {
      setLoading(true),
      const res = await fetch(`/api/trust/${encodeURIComponent(userId)}?analyze=true`),
      const json = await res.json(),
      setData(json),
      setLoading(false)
=======
import React, {_useEffect, _useState} from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import TrustBadge from '../components/ui/TrustBadge';
import TrustRadar from '../components/ui/TrustRadar';
import RiskIndicator from '../components/ui/RiskIndicator';

export default function TrustPage() {_const [userId, _setUserId] = useState<string>('demo-user');
  const [data, _setData] = useState<any>(null);
  const [loading, _setLoading] = useState<boolean>(true);
  const [showLogic, _setShowLogic] = useState<boolean>(false);

  useEffect__(() => {
    const _params = new URLSearchParams(window.location.search);
    const _u = params.get('user');
    if (u) setUserId(u);}, []);

  useEffect__(() => {_async function load() {
      setLoading(true);
      const _res = await fetch(`/api/trust/${encodeURIComponent(userId)}?analyze=true`);
      const _json = await res.json();
      setData(json);
      setLoading(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    load()
  }, [userId]),

<<<<<<< HEAD
  async function submitPeer(type: 'endorse' | 'flag') {
    await fetch('/api/trust/peer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, reviewerId: 'demo-reviewer', type }) }),
    alert(type === 'endorse' ? 'Endorsed' : 'Flagged')
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
                <TrustRadar metrics={(data.components || []).map((c: any) => ({ label: c.key, value: Math.round(c.raw * 100) }))} />
              </div>
              {showLogic && (
                <div className=&quot;bg-white dark:bg-gray-900 rounded border p-4 text-sm&quot;>
                  <h3 className=&quot;font-medium mb-2&quot;>Score Breakdown</h3>
                  <ul className=&quot;space-y-1&quot;>
                    {data.components.map((c: any) => (
                      <li key={c.key} className=&quot;flex justify-between&quot;>
                        <span>{c.key}</span>
                        <span>{Math.round(c.raw * 100)} / weighted {c.weighted.toFixed(3)}</span>
=======
  async function submitPeer(_type: 'endorse' | 'flag') {_await fetch('/api/trust/peer', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_userId, _reviewerId: 'demo-reviewer', _type}) });
    alert(type === 'endorse' ? 'Endorsed' : 'Flagged');
  }

  async function submitAppeal(_e: React.FormEvent) {_e.preventDefault();
    const _form = e.target as HTMLFormElement;
    const _formData = new FormData(form);
    const _message = formData.get('message');
    const _contactEmail = formData.get('email');
    await fetch('/api/trust/appeal', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_userId, _message, _contactEmail}) });
    alert('Appeal submitted');
    form.reset();
  }

  return (_<EnhancedLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Trust & Reputation</h1>
          <div className="flex items-center gap-3">
            <label className="text-sm inline-flex items-center gap-2"><input type="checkbox" checked={_showLogic} onChange={_() => setShowLogic(!showLogic)} /> Transparent logic</label>
          </div>
        </div>

        {_loading && <div>Loading...</div>}
        {_!loading && data && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <TrustBadge score={data.total} reason={_data.reasonSummary} communityVerified={_data.communityVerified} />
                <RiskIndicator status={_data.riskLevel} />
              </div>
              <div className="bg-white dark:bg-gray-900 rounded border p-4">
                <h2 className="font-medium mb-2">Trust Metrics</h2>
                <TrustRadar metrics={_(data.components || []).map(_(c: unknown) => ({ label: c.key, _value: Math.round(c.raw * 100)}))} />
              </div>
              {_showLogic && (_<div className="bg-white dark:bg-gray-900 rounded border p-4 text-sm">
                  <h3 className="font-medium mb-2">Score Breakdown</h3>
                  <ul className="space-y-1">
                    {data.components.map((c: unknown) => (
                      <li key={c.key} className="flex justify-between">
                        <span>{_c.key}</span>
                        <span>{_Math.round(c.raw * 100)} / weighted {_c.weighted.toFixed(3)}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>
                </div>
              )}
<<<<<<< HEAD
              {data.reasonSummary && (
                <div className=&quot;bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap&quot;>
=======
              {_data.reasonSummary && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-sm whitespace-pre-wrap">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <strong>Operator GPT Analysis:</strong> {data.reasonSummary}
                </div>
              )}
            </div>
<<<<<<< HEAD
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
                    <button className=&quot;text-sm px-3 py-1 rounded bg-blue-600 text-white&quot; type=&quot;submit&quot;>Submit Appeal</button>
=======
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 rounded border p-4 space-y-3">
                <h3 className="font-medium">Peer Review</h3>
                <button className="text-sm px-3 py-1 rounded bg-green-600 text-white" onClick={_() => submitPeer('endorse')}>Endorse</button>
                <button className="text-sm px-3 py-1 rounded bg-red-600 text-white" onClick={_() => submitPeer('flag')}>Flag</button>
              </div>
              {_data.total < 70 && (
                <div className="bg-white dark:bg-gray-900 rounded border p-4 space-y-3">
                  <h3 className="font-medium">Appeal Score</h3>
                  <form onSubmit={submitAppeal} className="space-y-2">
                    <input name="email" type="email" placeholder="Contact email" className="w-full border rounded px-2 py-1 text-sm" />
                    <textarea name="message" placeholder="Explain why your score should be reconsidered" className="w-full border rounded px-2 py-1 text-sm" rows={_4} required />
                    <button className="text-sm px-3 py-1 rounded bg-blue-600 text-white" type="submit">Submit Appeal</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </EnhancedLayout>
  )
}