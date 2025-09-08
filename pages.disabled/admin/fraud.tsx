





interface FraudItem {


id: string;
  userId: string | null;
  source: string;
  createdAt: string;
  heuristic: { reasons: string[]; severity: string };
  gpt?: { label: string; reason: string; confidence: number };
  status: string;

  status: string
}
origin/cursor/automate-test-improve-and-merge-code-2533
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
export default function FraudAdminPage() {
  const [items, setItems] = useState<FraudItem[]>([])
  const [adminToken, setAdminToken] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {

    const saved = localStorage.getItem('admin-token') |''
    setAdminToken(saved)
  }, [])


  const fetchItems = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/fraud/admin/list', { headers: adminToken ? { 'x-admin-token': adminToken } : {} })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error |'Failed to load')
      setItems(json.items |[])
    } catch (e: any) {
      setError(e.message |'Failed to load')
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


export default function FraudAdminPage() {

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
    fetchItems()
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





  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Fraud Monitoring - Admin Review</h1>
      <div className="flex items-center gap-2 mb-4">
        <input
          className="border rounded px-2 py-1 w-80"
          placeholder="Admin token (optional)"



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




        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={onSaveToken}>Save</button>
        <button className="bg-gray-200 px-3 py-1 rounded" onClick={fetchItems}>Refresh</button>
      </div>





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



                <td className="p-2 border">{it.source}</td>
                <td className="p-2 border">{new Date(it.createdAt).toLocaleString()}</td>
                <td className="p-2 border">
                  <div className="text-sm space-y-1">
                    {it.heuristic?.reasons?.slice(0, 3).map((r, idx) => (
                      <div key={idx} className="text-gray-700">{r}</div>



                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




                  </div>
                </td>
                <td className="p-2 border">
                  <div className="text-sm">



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
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </tbody>
        </table>
      </div>
    </div>
  );
};



  },
  useEffect (() => {
    fetch_items (),
    // eslint - disable - next - line react - hooks / exhaustive - deps;
  }, [admin_token]),
  const onSaveToken = () =>: any {
    local_storage.set_item ('admin - token', admin_token),
    fetch_items ();
  },
  const take_action = async (id: string, action: 'SUSPEND' | 'WARN' | 'IGNORE') => {
    const res = await fetch ('/api / fraud / admin / action', {
      method: 'POST',
      headers: {
        'Content - Type': 'application / json',
        ...(admin_token ? { 'x - admin - token': admin_token } : {})},
      body: JSON.stringify ({ fraud_id: id, action })}),
    const json = await res.json (),
    if (fetch_items (), ) {
  $2
}
    else alert (json.error || 'Action failed');
  },
  return (
    <div className="p - 6 max - w-7xl mx - auto">;
      <h1 className="text - 2xl font - bold mb - 4">Fraud Monitoring - Admin Review</h1>;
      <div className="flex items - center gap - 2 mb - 4">;
        <input;
          className="border rounded px - 2 py - 1 w - 80";
          placeholder="Admin token (optional)";
          value={admin_token}
          on_change={(e) => setAdminToken (e.target.value)}
        />;
        <button className="bg - blue - 600 text - white px - 3 py - 1 rounded" on_click={onSaveToken}>Save</button>;
        <button className="bg - gray - 200 px - 3 py - 1 rounded" on_click={fetch_items}>Refresh</button>;
      </div>;
      {loading && <div > Loading...</div>}
      {error && <div className="text - red - 600">{error}</div>}
      <div className="overflow - x-auto">;
        <table className="min - w-full border">;
          <thead>;
            <tr className="bg - gray - 50 text - left">;
              <th className="p - 2 border">User</th>;
              <th className="p - 2 border">Source</th>;
              <th className="p - 2 border">Timestamp</th>;
              <th className="p - 2 border">Reason</th>;
              <th className="p - 2 border">GPT</th>;
              <th className="p - 2 border">Status</th>;
              <th className="p - 2 border">Actions</th>;
            </tr>;
          </thead>;
          <tbody>;
            {items.map ((it) => (
              <tr key={it.id} className="border - t">;
                <td className="p - 2 border">{it.user_id || '—'}</td>;
                <td className="p - 2 border">{it.source}</td>;
                <td className="p - 2 border">{new Date (it.created_at).toLocaleString ()}</td>;
                <td className="p - 2 border">;
                  <div className="text - sm space - y-1">;
                    {it.heuristic?.reasons?.slice (0, 3).map ((r, idx) => (
                      <div key={idx} className="text - gray - 700">{r}</div>))}
                  </div>;
                </td>;
                <td className="p - 2 border">;
                  <div className="text - sm">;
                    <div className="font - semibold">{it.gpt?.label || '—'}</div>;
                    <div className="text - gray - 700">{it.gpt?.reason}</div>;
                  </div>;
                </td>;
                <td className="p - 2 border">{it.status}</td>;
                <td className="p - 2 border">;
                  <div className="flex gap - 2">;
                    <button className="px - 2 py - 1 text - xs bg - yellow - 500 text - white rounded" on_click={() => take_action (it.id, 'WARN')}>Warn</button>;
                    <button className="px - 2 py - 1 text - xs bg - red - 600 text - white rounded" on_click={() => take_action (it.id, 'SUSPEND')}>Suspend</button>;
                    <button className="px - 2 py - 1 text - xs bg - gray - 300 rounded" on_click={() => take_action (it.id, 'IGNORE')}>Ignore</button>;
                  </div>;
                </td>;
              </tr>))}
          </tbody>;
        </table>;
      </div>;
    </div>);
}



  );


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }




