<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from 'react',

interface FraudItem {
  id: string,
  userId: string | null,
  source: string,
  createdAt: string,
  heuristic: { reasons: string[], severity: string },
  gpt?: { label: string, reason: string, confidence: number },
  status: string
}

export default function FraudAdminPage() {
  const [items, setItems] = useState<FraudItem[]>([]),
  const [adminToken, setAdminToken] = useState<string>(''),
  const [loading, setLoading] = useState<boolean>(false),
  const [error, setError] = useState<string | null>(null),

  useEffect(() => {
    const saved = localStorage.getItem('admin-token') || '',
    setAdminToken(saved)
  }, []),

  const fetchItems = async () => {
    setLoading(true),
    setError(null),
    try {
      const res = await fetch('/api/fraud/admin/list', { headers: adminToken ? { 'x-admin-token': adminToken } : {} }),
      const json = await res.json(),
      if (!res.ok) throw new Error(json.error || 'Failed to load'),
      setItems(json.items || [])
    } catch (e: any) {
      setError(e.message || 'Failed to load')
    } finally {
      setLoading(false)
    }
  },

  useEffect(() => {
    fetchItems(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken]),

  const onSaveToken = () => {
    localStorage.setItem('admin-token', adminToken),
    fetchItems()
  },

  const takeAction = async (id: string, action: 'SUSPEND' | 'WARN' | 'IGNORE') => {
    const res = await fetch('/api/fraud/admin/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(adminToken ? { 'x-admin-token': adminToken } : {})},
      body: JSON.stringify({ fraudId: id, action })}),
    const json = await res.json(),
    if (res.ok) fetchItems(),
    else alert(json.error || 'Action failed')
  },
=======
import React, {_useEffect, _useMemo, _useState} from 'react';

interface FraudItem {_id: string;
  userId: string | null;
  source: string;
  createdAt: string;
  heuristic: { reasons: string[]; severity: string};
  gpt?: {_label: string; reason: string; confidence: number};
  status: string;
}

export default function FraudAdminPage() {_const [items, _setItems] = useState<FraudItem[]>([]);
  const [adminToken, _setAdminToken] = useState<string>('');
  const [loading, _setLoading] = useState<boolean>(false);
  const [error, _setError] = useState<string | null>(null);

  useEffect__(() => {
    const _saved = localStorage.getItem('admin-token') || '';
    setAdminToken(saved);}, []);

  const _fetchItems = async () => {_setLoading(true);
    setError(null);
    try {
      const _res = await fetch('/api/fraud/admin/list', _{ headers: adminToken ? { 'x-admin-token': adminToken} : {} });
      const _json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to load');
      setItems(json.items || []);
    } catch (e: unknown) {_setError(e.message || 'Failed to load');} finally {_setLoading(false);}
  };

  useEffect__(() => {_fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps}, [adminToken]);

  const _onSaveToken = () => {_localStorage.setItem('admin-token', _adminToken);
    fetchItems();};

  const _takeAction = async (_id: string, _action: 'SUSPEND' | 'WARN' | 'IGNORE') => {_const _res = await fetch('/api/fraud/admin/action', _{
      method: 'POST', _headers: {
        'Content-Type': 'application/json', _...(adminToken ? { 'x-admin-token': adminToken} : {})},
      body: JSON.stringify({_fraudId: id, _action})});
    const _json = await res.json();
    if (res.ok) fetchItems();
    else alert(json.error || 'Action failed');
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;p-6 max-w-7xl mx-auto&quot;>
      <h1 className=&quot;text-2xl font-bold mb-4&quot;>Fraud Monitoring - Admin Review</h1>

      <div className=&quot;flex items-center gap-2 mb-4&quot;>
        <input
<<<<<<< HEAD
          className=&quot;border rounded px-2 py-1 w-80&quot;
          placeholder=&quot;Admin token (optional)&quot;
          value={adminToken}
          onChange={(e) => setAdminToken(e.target.value)}
        />
        <button className=&quot;bg-blue-600 text-white px-3 py-1 rounded&quot; onClick={onSaveToken}>Save</button>
        <button className=&quot;bg-gray-200 px-3 py-1 rounded&quot; onClick={fetchItems}>Refresh</button>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div className=&quot;text-red-600&quot;>{error}</div>}
=======
          className="border rounded px-2 py-1 w-80"
          placeholder="Admin token (optional)"
          value={_adminToken}
          onChange={_(_e) => setAdminToken(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={_onSaveToken}>Save</button>
        <button className="bg-gray-200 px-3 py-1 rounded" onClick={_fetchItems}>Refresh</button>
      </div>

      {_loading && <div>Loading...</div>}
      {_error && <div className="text-red-600">{error}</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      <div className=&quot;overflow-x-auto&quot;>
        <table className=&quot;min-w-full border&quot;>
          <thead>
            <tr className=&quot;bg-gray-50 text-left&quot;>
              <th className=&quot;p-2 border&quot;>User</th>
              <th className=&quot;p-2 border&quot;>Source</th>
              <th className=&quot;p-2 border&quot;>Timestamp</th>
              <th className=&quot;p-2 border&quot;>Reason</th>
              <th className=&quot;p-2 border&quot;>GPT</th>
              <th className=&quot;p-2 border&quot;>Status</th>
              <th className=&quot;p-2 border&quot;>Actions</th>
            </tr>
          </thead>
          <tbody>
<<<<<<< HEAD
            {items.map((it) => (
              <tr key={it.id} className=&quot;border-t&quot;>
                <td className=&quot;p-2 border&quot;>{it.userId || '—'}</td>
                <td className=&quot;p-2 border&quot;>{it.source}</td>
                <td className=&quot;p-2 border&quot;>{new Date(it.createdAt).toLocaleString()}</td>
                <td className=&quot;p-2 border&quot;>
                  <div className=&quot;text-sm space-y-1&quot;>
                    {it.heuristic?.reasons?.slice(0, 3).map((r, idx) => (
                      <div key={idx} className=&quot;text-gray-700&quot;>{r}</div>
                    ))}
                  </div>
                </td>
                <td className=&quot;p-2 border&quot;>
                  <div className=&quot;text-sm&quot;>
                    <div className=&quot;font-semibold&quot;>{it.gpt?.label || '—'}</div>
                    <div className=&quot;text-gray-700&quot;>{it.gpt?.reason}</div>
                  </div>
                </td>
                <td className=&quot;p-2 border&quot;>{it.status}</td>
                <td className=&quot;p-2 border&quot;>
                  <div className=&quot;flex gap-2&quot;>
                    <button className=&quot;px-2 py-1 text-xs bg-yellow-500 text-white rounded&quot; onClick={() => takeAction(it.id, 'WARN')}>Warn</button>
                    <button className=&quot;px-2 py-1 text-xs bg-red-600 text-white rounded&quot; onClick={() => takeAction(it.id, 'SUSPEND')}>Suspend</button>
                    <button className=&quot;px-2 py-1 text-xs bg-gray-300 rounded&quot; onClick={() => takeAction(it.id, 'IGNORE')}>Ignore</button>
=======
            {_items.map(_(it) => (
              <tr key={it.id} className="border-t">
                <td className="p-2 border">{_it.userId || '—'}</td>
                <td className="p-2 border">{_it.source}</td>
                <td className="p-2 border">{_new Date(it.createdAt).toLocaleString()}</td>
                <td className="p-2 border">
                  <div className="text-sm space-y-1">
                    {_it.heuristic?.reasons?.slice(0, _3).map(_(r, _idx) => (
                      <div key={idx} className="text-gray-700">{_r}</div>
                    ))}
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="text-sm">
                    <div className="font-semibold">{_it.gpt?.label || '—'}</div>
                    <div className="text-gray-700">{_it.gpt?.reason}</div>
                  </div>
                </td>
                <td className="p-2 border">{_it.status}</td>
                <td className="p-2 border">
                  <div className="flex gap-2">
                    <button className="px-2 py-1 text-xs bg-yellow-500 text-white rounded" onClick={_() => takeAction(it.id, _'WARN')}>Warn</button>
                    <button className="px-2 py-1 text-xs bg-red-600 text-white rounded" onClick={_() => takeAction(it.id, _'SUSPEND')}>Suspend</button>
                    <button className="px-2 py-1 text-xs bg-gray-300 rounded" onClick={_() => takeAction(it.id, _'IGNORE')}>Ignore</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}