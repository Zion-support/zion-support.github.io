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
  return (
    <div className=&quot;p-6 max-w-7xl mx-auto&quot;>
      <h1 className=&quot;text-2xl font-bold mb-4&quot;>Fraud Monitoring - Admin Review</h1>

      <div className=&quot;flex items-center gap-2 mb-4&quot;>
        <input
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
                    <button className=&quot;px-2 py-1 text-xs bg-gray-300 rounded&quot; onClick={() => takeAction(it.id, 'IGNORE')}>Ignore</button>                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}