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

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Fraud Monitoring - Admin Review</h1>

      <div className="flex items-center gap-2 mb-4">
        <input
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

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-2 border">User</th>
              <th className="p-2 border">Source</th>
              <th className="p-2 border">Timestamp</th>
              <th className="p-2 border">Reason</th>
              <th className="p-2 border">GPT</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}