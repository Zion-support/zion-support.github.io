<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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


<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from 'react';
import React, { useEffect, useMemo, useState } from 'react',;
;
import React, { useEffect, useMemo, useState } from 'react';
interface FraudItem {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {

      set_loading (false);

    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
  useEffect(() => {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken]);
<<<<<<< HEAD
  const onSaveToken = () => {
    localStorage.setItem('admin-token', adminToken);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  const onSaveToken = () => {
    localStorage.setItem('admin-token', adminToken);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken])
  const onSaveToken = () => {
    localStorage.setItem('admin-token', adminToken)
    fetchItems()
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function FraudAdminPage() {

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const takeAction = async (id: string, action: 'SUSPEND' | 'WARN' | 'IGNORE') => {
    const res = await fetch('/api/fraud/admin/action', {
      method: 'POST'
      headers: {
<<<<<<< HEAD

<<<<<<< HEAD
        'Content-Type': 'application/json',
        ...(adminToken ? { 'x-admin-token': adminToken } : {})
      },
      body: JSON.stringify({ fraudId: id, action })
    });
    const json = await res.json();
    if (res.ok) fetchItems();
    else alert(json.error || 'Action failed');
  };


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        'Content-Type': 'application/json'
        ...(adminToken ? { 'x-admin-token': adminToken } : {})}
      body: JSON.stringify({ fraudId: id, action })})
    const json = await res.json()
    if (res.ok) fetchItems()
    else alert(json.error |'Action failed')
  }
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        'Content-Type': 'application/json',
        ...(adminToken ? { 'x-admin-token': adminToken } : {})
      },
      body: JSON.stringify({ fraudId: id, action })
    });
    const json = await res.json();
    if (res.ok) fetchItems();
    else alert(json.error || 'Action failed');
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======


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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Fraud Monitoring - Admin Review</h1>
      <div className="flex items-center gap-2 mb-4">
        <input
          className="border rounded px-2 py-1 w-80"
          placeholder="Admin token (optional)"
<<<<<<< HEAD

<<<<<<< HEAD
          value={adminToken}
          onChange={(e) => setAdminToken(e.target.value)}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          value={adminToken}
          onChange={(e) => setAdminToken(e.target.value)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={onSaveToken}>Save</button>
        <button className="bg-gray-200 px-3 py-1 rounded" onClick={fetchItems}>Refresh</button>
      </div>



<<<<<<< HEAD
<<<<<<< HEAD
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
                <td className="p-2 border">{it.userId || '—'}</td>


                <td className="p-2 border">{it.userId |'—'}</td>
                <td className="p-2 border">{it.userId || '—'}</td>
=======

                <td className="p-2 border">{it.userId || '—'}</td>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <td className="p-2 border">{it.userId |'—'}</td>
                <td className="p-2 border">{it.userId || '—'}</td>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <td className="p-2 border">{it.source}</td>
                <td className="p-2 border">{new Date(it.createdAt).toLocaleString()}</td>
                <td className="p-2 border">
                  <div className="text-sm space-y-1">
                    {it.heuristic?.reasons?.slice(0, 3).map((r, idx) => (
                      <div key={idx} className="text-gray-700">{r}</div>
<<<<<<< HEAD

<<<<<<< HEAD
                    ))}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="text-sm">
<<<<<<< HEAD

<<<<<<< HEAD
                    <div className="font-semibold">{it.gpt?.label || '—'}</div>


                    <div className="font-semibold">{it.gpt?.label |'—'}</div>
                    <div className="font-semibold">{it.gpt?.label || '—'}</div>
=======

                    <div className="font-semibold">{it.gpt?.label || '—'}</div>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    <div className="font-semibold">{it.gpt?.label |'—'}</div>
                    <div className="font-semibold">{it.gpt?.label || '—'}</div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
            ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </tbody>
        </table>
      </div>
    </div>
<<<<<<< HEAD

<<<<<<< HEAD
}

  )
}
=======
=======
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
  );

  );
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  );

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
