<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from 'react';
import React, { useEffect, useMemo, useState } from 'react',;
;
import React, { useEffect, useMemo, useState } from 'react';

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface FraudItem {
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
<<<<<<< HEAD:pages/admin/fraud.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function FraudAdminPage() {
=======
interface FraudItem {}
export default function FraudAdminPage() {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
  const [items, setItems] = useState<FraudItem[]>([])
  const [adminToken, setAdminToken] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
:pages_backup/admin/fraud.tsx
  useEffect(() => {
<<<<<<< HEAD
    const saved = localStorage.getItem('admin-token') || '';
    setAdminToken(saved)
  }, []);

'
    const saved = localStorage.getItem('admin-token') |''
    setAdminToken(saved)
  }, [])
:pages_backup/admin/fraud.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const fetchItems = async () => {
    setLoading(true)
    setError(null)
    try {
:pages/admin/fraud.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {

      set_loading (false);

    }

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
:pages_backup/admin/fraud.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const takeAction = async (id: string, action: 'SUSPEND' | 'WARN' | 'IGNORE') => {

    const res = await fetch('/api/fraud/admin/action', {
      method: 'POST'
      headers: {
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
});
    const json = await res.json();
    if (res.ok) fetchItems();
    else alert(json.error || 'Action failed');
  };

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
:pages_backup/admin/fraud.tsx
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={onSaveToken}>Save</button>
=======

        />"
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={onSaveToken}>Save</button>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
        <button className="bg-gray-200 px-3 py-1 rounded" onClick={fetchItems}>Refresh</button>
      </div>
{loading && <div>Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}

:pages_backup/admin/fraud.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

:pages_backup/admin/fraud.tsx

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
:pages_backup/admin/fraud.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
:pages_backup/admin/fraud.tsx
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/fraud.tsx
                  </div>
                </td>"
                <td className="p-2 border">"
                  <div className="text-sm">
:pages_backup/admin/fraud.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD:pages/admin/fraud.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  );

:pages_backup/admin/fraud.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
