



interface FraudItem {


export default function FraudAdminPage() {
  const [items, setItems] = useState<FraudItem[]>([])
  const [adminToken, setAdminToken] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {

    const saved = localStorage.getItem('admin-token') || '';
    setAdminToken(saved)
  }, []);


    const saved = localStorage.getItem('admin-token') |''
    setAdminToken(saved)
  }, [])
  const fetchItems = async () => {
    setLoading(true)
    setError(null)
    try {


=======
export default /**
 * FraudAdminPage - Function description
 */
function FraudAdminPage() {
  const [items, set_items] = useState < FraudItem[]>([]),
  const [admin_token, setAdminToken] = useState < string>(''),
  const [loading, set_loading] = useState < boolean>(false),
  const [error, set_error] = useState < string | null>(null),
  useEffect (() => {
    const saved = local_storage.get_item ('admin - token') || '',
    setAdminToken (saved);
  }, []),
  const fetch_items = async () => {
    set_loading (true),
    set_error (null),
    try {
      const res = await fetch ('/api / fraud / admin / list', { headers: admin_token ? { 'x - admin - token': admin_token } : {} }),
      const json = await res.json (),
      if (throw new Error (json.error || 'Failed to load'), ) {
  $2
}
      set_items (json.items || []);
    } catch (e: any) {
      set_error (e.message || 'Failed to load');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {

      set_loading (false);

    }

    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken]);

  const onSaveToken = () => {
    localStorage.setItem('admin-token', adminToken);

    fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken])
  const onSaveToken = () => {
    localStorage.setItem('admin-token', adminToken)
    fetchItems()
  }
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
  const takeAction = async (id: string, action: 'SUSPEND' | 'WARN' | 'IGNORE') => {
    const res = await fetch('/api/fraud/admin/action', {
      method: 'POST'
      headers: {
        'Content-Type': 'application/json'
        ...(adminToken ? { 'x-admin-token': adminToken } : {})}
      body: JSON.stringify({ fraudId: id, action })})
    const json = await res.json()
    if (res.ok) fetchItems()
    else alert(json.error |'Action failed')
  }

        'Content-Type': 'application/json',
        ...(adminToken ? { 'x-admin-token': adminToken } : {})
      },
      body: JSON.stringify({ fraudId: id, action })
    });
    const json = await res.json();
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
          value={adminToken}
          onChange={(e) => setAdminToken(e.target.value)}
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={onSaveToken}>Save</button>
        <button className="bg-gray-200 px-3 py-1 rounded" onClick={fetchItems}>Refresh</button>
      </div>




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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
                <td className="p-2 border">{it.userId |'—'}</td>
                <td className="p-2 border">{it.userId || '—'}</td>
                <td className="p-2 border">{it.source}</td>
                <td className="p-2 border">{new Date(it.createdAt).toLocaleString()}</td>
                <td className="p-2 border">
                  <div className="text-sm space-y-1">
                    {it.heuristic?.reasons?.slice(0, 3).map((r, idx) => (
                      <div key={idx} className="text-gray-700">{r}</div>
                    ))}
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="text-sm">
                    <div className="font-semibold">{it.gpt?.label |'—'}</div>
                    <div className="font-semibold">{it.gpt?.label || '—'}</div>
                    <div className="text-gray-700">{it.gpt?.reason}</div>
                  </div>
                </td>
                <td className="p-2 border">{it.status}</td>
                <td className="p-2 border">
                  <div className="flex gap-2">
                    <button className="px-2 py-1 text-xs bg-yellow-500 text-white rounded" onClick={() => takeAction(it.id, 'WARN')}>Warn</button>
                    <button className="px-2 py-1 text-xs bg-red-600 text-white rounded" onClick={() => takeAction(it.id, 'SUSPEND')}>Suspend</button>
                    <button className="px-2 py-1 text-xs bg-gray-300 rounded" onClick={() => takeAction(it.id, 'IGNORE')}>Ignore</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
