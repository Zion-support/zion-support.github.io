<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from 'react';
interface FraudItem {
  id: string;
  userId: string | null;
  source: string;
  createdAt: string;
<<<<<<< HEAD
  heuristic: { reasons: string[], severity: string },
  gpt?: { label: string, reason: string, confidence: number },
=======
<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from 'react';
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from 'react',;
;
=======
import React, { useEffect, useMemo, useState } from 'react';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface FraudItem {

  id: string
  userId: string | null
  source: string
  createdAt: string
  heuristic: { reasons: string[], severity: string }
  gpt?: { label: string, reason: string, confidence: number }

  status: string
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
  heuristic: { reasons: string[]; severity: string };
  gpt?: { label: string; reason: string; confidence: number };
  status: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function FraudAdminPage() {
<<<<<<< HEAD
  const [items, setItems] = useState<FraudItem[]>([])
  const [adminToken, setAdminToken] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const saved = null;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    const saved = localStorage.getItem('admin-token') |''
    setAdminToken(saved)
  }, [])
=======
    const saved = localStorage.getItem('admin-token') || '';
    setAdminToken(saved);
  }, []);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const fetchItems = async () => {
    setLoading(true)
    setError(null)
    try {
<<<<<<< HEAD
      const res = await fetch('/api/fraud/admin/list', { headers: adminToken ? { 'x-admin-token': adminToken } : {} })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error |'Failed to load')
      setItems(json.items |[])
    } catch (e: any) {
      setError(e.message |'Failed to load')
    } finally {
      setLoading(false)
=======
      const res = await fetch('/api/fraud/admin/list', {
        headers: adminToken ? { 'x-admin-token': adminToken } : {},
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to load');
      setItems(json.items || []);
    } catch (e: any) {
      setError(e.message || 'Failed to load');
    } finally {
      setLoading(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
  }
  useEffect(() => {
<<<<<<< HEAD
    fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken])
  const onSaveToken = () => {
    localStorage.setItem('admin-token', adminToken)
    fetchItems()
  }
=======
  const [items, setItems] = useState<FraudItem[]>([]);
  const [adminToken, setAdminToken] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const saved = localStorage.getItem('admin-token') || '';
    setAdminToken(saved);
  }, []);
  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/fraud/admin/list', { headers: adminToken ? { 'x-admin-token': adminToken } : {} });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to load');
      setItems(json.items || []);
    } catch (e: any) {
      setError(e.message || 'Failed to load');
    } finally {
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken]);
  const onSaveToken = () => {
    localStorage.setItem('admin-token', adminToken);
    fetchItems();
  };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const takeAction = async (id: string, action: 'SUSPEND' | 'WARN' | 'IGNORE') => {
    const res = await fetch('/api/fraud/admin/action', {
      method: 'POST'
      headers: {
<<<<<<< HEAD
        'Content-Type': 'application/json'
        ...(adminToken ? { 'x-admin-token': adminToken } : {})}
      body: JSON.stringify({ fraudId: id, action })})
    const json = await res.json()
    if (res.ok) fetchItems()
    else alert(json.error |'Action failed')
  }

=======
        'Content-Type': 'application/json',
        ...(adminToken ? { 'x-admin-token': adminToken } : {})
      },
      body: JSON.stringify({ fraudId: id, action })
    });
    const json = await res.json();
    if (res.ok) fetchItems();
    else alert(json.error || 'Action failed');
  };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Fraud Monitoring - Admin Review</h1>
      <div className="flex items-center gap-2 mb-4">
        <input
          className="border rounded px-2 py-1 w-80"
          placeholder="Admin token (optional)"
<<<<<<< HEAD
          value={adminToken}
          onChange={(e) => setAdminToken(e.target.value)}
=======
          value={adminToken  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          onChange={(e) => setAdminToken(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={onSaveToken}>Save</button>
        <button className="bg-gray-200 px-3 py-1 rounded" onClick={fetchItems}>Refresh</button>
      </div>
<<<<<<< HEAD
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      {loading && <div>Loading...</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      {error && <div className="text-red-600">{error}</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
            {items.map((it) => (
              <tr key={it.id} className="border-t">
<<<<<<< HEAD
                <td className="p-2 border">{it.userId |'—'}</td>
=======
                <td className="p-2 border">{it.userId || '—'}</td>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                <td className="p-2 border">{it.source}</td>
                <td className="p-2 border">{new Date(it.createdAt).toLocaleString()}</td>
                <td className="p-2 border">
                  <div className="text-sm space-y-1">
                    {it.heuristic?.reasons?.slice(0, 3).map((r, idx) => (
                      <div key={idx} className="text-gray-700">{r}</div>
<<<<<<< HEAD
                    ))}
=======
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="text-sm">
<<<<<<< HEAD
                    <div className="font-semibold">{it.gpt?.label |'—'}</div>
=======
                    <div className="font-semibold">{it.gpt?.label || '—'}</div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                    <div className="text-gray-700">{it.gpt?.reason}</div>
                  </div>
                </td>
                <td className="p-2 border">{it.status}</td>
                <td className="p-2 border">
                  <div className="flex gap-2">
                    <button className="px-2 py-1 text-xs bg-yellow-500 text-white rounded" onClick={() => takeAction(it.id, 'WARN')}>Warn</button>
                    <button className="px-2 py-1 text-xs bg-red-600 text-white rounded" onClick={() => takeAction(it.id, 'SUSPEND')}>Suspend</button>
                    <button className="px-2 py-1 text-xs bg-gray-300 rounded" onClick={() => takeAction(it.id, 'IGNORE')}>Ignore</button>
=======
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken]);

  const onSaveToken = () => {
    localStorage.setItem('admin-token', adminToken);
    fetchItems();
  };

  const takeAction = async (
    id: string,
    action: 'SUSPEND' | 'WARN' | 'IGNORE'
  ) => {
    const res = await fetch('/api/fraud/admin/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(adminToken ? { 'x-admin-token': adminToken } : {}),
      },
      body: JSON.stringify({ fraudId: id, action }),
    });
    const json = await res.json();
    if (res.ok) fetchItems();
    else alert(json.error || 'Action failed');
  };

const FraudPage: React.FC = () => {
  return (
    <div className='p-6 max-w-7xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>
        Fraud Monitoring - Admin Review
      </h1>

      <div className='flex items-center gap-2 mb-4'>
        <input
          className='border rounded px-2 py-1 w-80'
          placeholder='Admin token (optional)'
          value={adminToken}
          onChange={e => setAdminToken(e.target.value)}
        />
        <button
          className='bg-blue-600 text-white px-3 py-1 rounded'
          onClick={onSaveToken}
        >
          Save
        </button>
        <button className='bg-gray-200 px-3 py-1 rounded' onClick={fetchItems}>
          Refresh
        </button>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div className='text-red-600'>{error}</div>}

      <div className='overflow-x-auto'>
        <table className='min-w-full border'>
          <thead>
            <tr className='bg-gray-50 text-left'>
              <th className='p-2 border'>User</th>
              <th className='p-2 border'>Source</th>
              <th className='p-2 border'>Timestamp</th>
              <th className='p-2 border'>Reason</th>
              <th className='p-2 border'>GPT</th>
              <th className='p-2 border'>Status</th>
              <th className='p-2 border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(it => (
              <tr key={it.id} className='border-t'>
                <td className='p-2 border'>{it.userId || '—'}</td>
                <td className='p-2 border'>{it.source}</td>
                <td className='p-2 border'>
                  {new Date(it.createdAt).toLocaleString()}
                </td>
                <td className='p-2 border'>
                  <div className='text-sm space-y-1'>
                    {it.heuristic?.reasons?.slice(0, 3).map((r, idx) => (
                      <div key={idx} className='text-gray-700'>
                        {r}
                      </div>
                    ))}
                  </div>
                </td>
                <td className='p-2 border'>
                  <div className='text-sm'>
                    <div className='font-semibold'>{it.gpt?.label || '—'}</div>
                    <div className='text-gray-700'>{it.gpt?.reason}</div>
                  </div>
                </td>
                <td className='p-2 border'>{it.status}</td>
                <td className='p-2 border'>
                  <div className='flex gap-2'>
                    <button
                      className='px-2 py-1 text-xs bg-yellow-500 text-white rounded'
                      onClick={() => takeAction(it.id, 'WARN')}
                    >
                      Warn
                    </button>
                    <button
                      className='px-2 py-1 text-xs bg-red-600 text-white rounded'
                      onClick={() => takeAction(it.id, 'SUSPEND')}
                    >
                      Suspend
                    </button>
                    <button
                      className='px-2 py-1 text-xs bg-gray-300 rounded'
                      onClick={() => takeAction(it.id, 'IGNORE')}
                    >
                      Ignore
                    </button>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  </div>
                </td>
              </tr>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </tbody>
        </table>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  );
<<<<<<< HEAD
};
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
