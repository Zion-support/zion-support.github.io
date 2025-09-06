import { useEffect, useMemo, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout'
import type { GrantApplication, Milestone } from '../../types/grants',

export default function GrantsAdminPage() {
  const [token, setToken] = useState(''),
  const [items, setItems] = useState<GrantApplication[]>([]),
  const [selected, setSelected] = useState<GrantApplication | null>(null),
  const [milestones, setMilestones] = useState<Milestone[]>([]),

  const headers = useMemo(() => (token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' }), [token]),

  const load = () => {
    fetch('/api/grants?status=Submitted').then((r) => r.json()).then((d) => setItems(d.items || []))
  },

  useEffect(() => {
    load()
  }, []),

  const setStatus = async (id: string, status: 'Under Review' | 'Approved' | 'Rejected') => {
    await fetch(`/api/grants/${id}/status`, { method: 'POST', headers, body: JSON.stringify({ status }) }),
    load()
  },

  const saveMilestones = async () => {
    if (!selected) return,
    await fetch(`/api/grants/${selected.id}/milestones`, { method: 'POST', headers, body: JSON.stringify({ milestones }) }),
    alert('Milestones saved')
  },

  const markComplete = async (milestoneId: string) => {
    if (!selected) return,
    await fetch(`/api/grants/${selected.id}/milestones/${milestoneId}/complete`, { method: 'POST', headers }),
    const r = await fetch(`/api/grants/${selected.id}`).then((x) => x.json())
    setSelected(r.record)
  },

  return (
    <EnhancedLayout>
      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Grants Admin</h1>
      <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
        <div className=&quot;md:col-span-2&quot;>
          <div className=&quot;mb-3 flex items-center gap-2&quot;>
            <input className=&quot;border rounded p-2&quot; placeholder=&quot;Admin Token&quot; value={token} onChange={(e) => setToken(e.target.value)} />
          </div>
          <div className=&quot;grid gap-3&quot;>
            {items.map((g) => (
              <div key={g.id} className={`border rounded p-3 ${selected?.id === g.id ? 'ring-2 ring-blue-500' : ''}`}>
                <div className=&quot;flex items-center justify-between&quot;>
                  <div>
                    <div className=&quot;font-medium&quot;>{g.projectName}</div>
                    <div className=&quot;text-xs text-gray-600&quot;>{g.sector} • {g.region} • {g.program}</div>
                  </div>
                  <div className=&quot;flex gap-2&quot;>
                    <button className=&quot;px-2 py-1 border rounded&quot; onClick={() => setStatus(g.id, 'Under Review')}>Under Review</button>
                    <button className=&quot;px-2 py-1 bg-emerald-600 text-white rounded&quot; onClick={() => setStatus(g.id, 'Approved')}>Approve</button>
                    <button className=&quot;px-2 py-1 bg-red-600 text-white rounded&quot; onClick={() => setStatus(g.id, 'Rejected')}>Reject</button>
                    <button className=&quot;px-2 py-1 border rounded&quot; onClick={() => setSelected(g)}>Milestones</button>
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type {_GrantApplication, _Milestone} from '../../types/grants';

export default function GrantsAdminPage() {_const [token, _setToken] = useState('');
  const [items, _setItems] = useState<GrantApplication[]>([]);
  const [selected, _setSelected] = useState<GrantApplication | null>(null);
  const [milestones, _setMilestones] = useState<Milestone[]>([]);

  const _headers = useMemo__(() => (token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : {_'Content-Type': 'application/json'}), [token]);

  const _load = () => {_fetch('/api/grants?status=Submitted').then(_(r) => r.json()).then(_(d) => setItems(d.items || []));};

  useEffect__(() => {_load();}, []);

  const _setStatus = async (_id: string, _status: 'Under Review' | 'Approved' | 'Rejected') => {_await fetch(`/api/grants/${id}/status`, {_method: 'POST', _headers, _body: JSON.stringify({ status}) });
    load();
  };

  const _saveMilestones = async () => {_if (!selected) return;
    await fetch(`/api/grants/${selected.id}/milestones`, {_method: 'POST', _headers, _body: JSON.stringify({ milestones}) });
    alert('Milestones saved');
  };

  const _markComplete = async (_milestoneId: string) => {_if (!selected) return;
    await fetch(`/api/grants/${selected.id}/milestones/${_milestoneId}/complete`, {_method: 'POST', _headers});
    const _r = await fetch(`/api/grants/${_selected.id}`).then(_(x) => x.json());
    setSelected(r.record);
  };

  return (_<EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4">Grants Admin</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="mb-3 flex items-center gap-2">
            <input className="border rounded p-2" placeholder="Admin Token" value={_token} onChange={_(e) => setToken(e.target.value)} />
          </div>
          <div className="grid gap-3">
            {_items.map(_(g) => (_<div key={g.id} className={_`border rounded p-3 ${selected?.id === g.id ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{_g.projectName}</div>
                    <div className="text-xs text-gray-600">{_g.sector} • {_g.region} • {_g.program}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 border rounded" onClick={_() => setStatus(g.id, _'Under Review')}>Under Review</button>
                    <button className="px-2 py-1 bg-emerald-600 text-white rounded" onClick={_() => setStatus(g.id, _'Approved')}>Approve</button>
                    <button className="px-2 py-1 bg-red-600 text-white rounded" onClick={_() => setStatus(g.id, _'Rejected')}>Reject</button>
                    <button className="px-2 py-1 border rounded" onClick={_() => setSelected(g)}>Milestones</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </div>
            ))}
            {items.length === 0 && <div className=&quot;text-sm text-gray-600&quot;>No submitted applications.</div>}
          </div>
        </div>
        <div>
          <div className=&quot;border rounded p-3&quot;>
            <h2 className=&quot;font-medium mb-2&quot;>Milestone Planner</h2>
            {selected ? (
              <div className=&quot;space-y-2&quot;>
                {(milestones.length === 0 ? (selected.milestones || []) : milestones).map((m, idx) => (
                </div>
              </div>
            ) : (
              <div className=&quot;text-sm text-gray-600&quot;>Select a grant to plan milestones.</div>
            )}
          </div>
        </div>
      </div>
    </EnhancedLayout>
  )
}