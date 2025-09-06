<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from 'react';
import React, { useEffect, useMemo, useState } from 'react',;
;
import React, { useEffect, useMemo, useState } from 'react';
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/admin/fraud.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface FraudItem {

=======

=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/fraud.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/fraud.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default function FraudAdminPage() {
=======
interface FraudItem {}
export default function FraudAdminPage() {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
  const [items, setItems] = useState<FraudItem[]>([])
  const [adminToken, setAdminToken] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
<<<<<<< HEAD:pages_backup/admin/fraud.tsx
  useEffect(() => {
<<<<<<< HEAD:pages/admin/fraud.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
  useEffect(() => {}
';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
    const saved = localStorage.getItem('admin-token') || '';
    setAdminToken(saved)
  }, []);

'
    const saved = localStorage.getItem('admin-token') |''
    setAdminToken(saved)
  }, [])
<<<<<<< HEAD:pages_backup/admin/fraud.tsx
<<<<<<< HEAD
=======
=======
    const saved = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    const saved = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/fraud.tsx
  const fetchItems = async () => {
    setLoading(true)
    setError(null)
    try {
<<<<<<< HEAD:pages/admin/fraud.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
=======

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
<<<<<<< HEAD
  const [items, setItems] = useState<FraudItem[]>([])
  const [adminToken, setAdminToken] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
<<<<<<< HEAD

    const saved = localStorage.getItem('admin-token') |''
    setAdminToken(saved)
  }, [])
=======
    const saved = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } finally {

      set_loading (false);

    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken]);
  const onSaveToken = () => {
    localStorage.setItem('admin-token', adminToken);

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const fetchItems = async () => {}
    setLoading(true)
    setError(null)
    try {}
    } finally {}
      set_loading (false);

    }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
    fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps;
  }, [adminToken])
  const onSaveToken = () => {'
    localStorage.setItem('admin-token', adminToken)
    fetchItems()
  }
<<<<<<< HEAD:pages_backup/admin/fraud.tsx
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const takeAction = async (id: string, action: 'SUSPEND' | 'WARN' | 'IGNORE') => {

    const res = await fetch('/api/fraud/admin/action', {
      method: 'POST'
      headers: {

=======
<<<<<<< HEAD
=======
=======
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
=======
    fetchItems()
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/fraud.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const res = await fetch('/api/fraud/admin/list', {
        headers: adminToken ? { 'x-admin-token': adminToken } : {},
      });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to load');
      setItems(json.items || []);
    } catch (e: any) {
      setError(e.message || 'Failed to load');
    } finally {
      setLoading(false);
<<<<<<< HEAD
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const takeAction = async (id: string, action: 'SUSPEND' | 'WARN' | 'IGNORE') => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const res = await fetch('/api/fraud/admin/action', {
      method: 'POST'
      headers: {
<<<<<<< HEAD
=======


        'Content-Type': 'application/json',
        ...(adminToken ? { 'x-admin-token': adminToken } : {})
      },
      body: JSON.stringify({ fraudId: id, action })
=======
    }
  }
  useEffect(() => {
    fetchItems();
origin/cursor/automate-test-improve-and-merge-code-2533
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    });
    const json = await res.json();
    if (res.ok) fetchItems();
    else alert(json.error || 'Action failed');
  };

<<<<<<< HEAD

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/fraud.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/fraud.tsx
=======

'
  const takeAction = async (id: string, action: 'SUSPEND' | 'WARN' | 'IGNORE') => {}
'
    const res = await fetch('/api/fraud/admin/action', {'
      method: 'POST'
      headers: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <div className="p-6 max-w-7xl mx-auto">"
      <h1 className="text-2xl font-bold mb-4">Fraud Monitoring - Admin Review</h1>"
      <div className="flex items-center gap-2 mb-4">
        <input"
          className="border rounded px-2 py-1 w-80""
          placeholder="Admin token (optional)"
<<<<<<< HEAD:pages_backup/admin/fraud.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={onSaveToken}>Save</button>
=======


        />"
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={onSaveToken}>Save</button>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
        <button className="bg-gray-200 px-3 py-1 rounded" onClick={fetchItems}>Refresh</button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f




<<<<<<< HEAD:pages_backup/admin/fraud.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {loading && <div>Loading...</div>  } catch (error) {
    console.error("Error:", error);
=======

      {loading && <div>Loading...</div>  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
      {error && <div className="text-red-600">{error}</div>  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD:pages_backup/admin/fraud.tsx


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className="overflow-x-auto">
=======
"
      <div className="overflow-x-auto">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
        <table className="min-w-full border">
          <thead>"
            <tr className="bg-gray-50 text-left">"
              <th className="p-2 border">User</th>"
              <th className="p-2 border">Source</th>"
              <th className="p-2 border">Timestamp</th>"
              <th className="p-2 border">Reason</th>"
              <th className="p-2 border">GPT</th>"
              <th className="p-2 border">Status</th>"
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => ("
              <tr key={it.id} className="border-t">
<<<<<<< HEAD:pages_backup/admin/fraud.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======


                <td className="p-2 border">{it.userId || '—'}</td>


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <td className="p-2 border">{it.source}</td>
                <td className="p-2 border">{new Date(it.createdAt).toLocaleString()}</td>
                <td className="p-2 border">
=======
"
                <td className="p-2 border">{it.source}</td>"
                <td className="p-2 border">{new Date(it.createdAt).toLocaleString()}</td>"
                <td className="p-2 border">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
                  <div className="text-sm space-y-1">
                    {it.heuristic?.reasons?.slice(0, 3).map((r, idx) => ("
                      <div key={idx} className="text-gray-700">{r}</div>
<<<<<<< HEAD:pages_backup/admin/fraud.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
                  </div>
                </td>"
                <td className="p-2 border">"
                  <div className="text-sm">
<<<<<<< HEAD:pages_backup/admin/fraud.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======


                    <div className="font-semibold">{it.gpt?.label || '—'}</div>


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
                    <div className="text-gray-700">{it.gpt?.reason}</div>
                  </div>
                </td>"
                <td className="p-2 border">{it.status}</td>"
                <td className="p-2 border">"
                  <div className="flex gap-2">'"
                    <button className="px-2 py-1 text-xs bg-yellow-500 text-white rounded" onClick={() => takeAction(it.id, 'WARN')}>Warn</button>'"
                    <button className="px-2 py-1 text-xs bg-red-600 text-white rounded" onClick={() => takeAction(it.id, 'SUSPEND')}>Suspend</button>'"
                    <button className="px-2 py-1 text-xs bg-gray-300 rounded" onClick={() => takeAction(it.id, 'IGNORE')}>Ignore</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/admin/fraud.tsx
<<<<<<< HEAD:pages/admin/fraud.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
  );
};
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx



  );

<<<<<<< HEAD:pages_backup/admin/fraud.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  );
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/fraud.tsx
=======

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
