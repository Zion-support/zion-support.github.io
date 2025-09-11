
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
export default function AdminWeb3Page() {


<<<<<<< HEAD
=======

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
export default function AdminWeb3Page() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [users, setUsers] = useState<{ id: string, enabled: boolean, chain?: string }[]>([])
  const [users, setUsers] = useState<{ id: string, enabled: boolean, chain?: string }[]>([]),
  useEffect(() => {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-users') : null
    setUsers(raw ? JSON.parse(raw) : [])
  }, [])
  }, []),
  const save = (list: any) => {
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-users', JSON.stringify(list))
    setUsers(list)
  }
  const metrics = {
    total: users.length
    evm: users.filter(u => u.chain === 'evm').length
    sol: users.filter(u => u.chain === 'sol').length
    enabled: users.filter(u => u.enabled).length
    disabled: users.filter(u => !u.enabled).length}

  },
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const metrics = {
    total: users.length,
    evm: users.filter(u => u.chain === 'evm').length,
    sol: users.filter(u => u.chain === 'sol').length,
    enabled: users.filter(u => u.enabled).length,
    disabled: users.filter(u => !u.enabled).length},
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>
      <Head><title>Admin — Web3</title></Head>
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-xl font-semibold">Web3 Admin</h1>
        <div className="rounded-md border p-4">
          <div className="font-medium mb-2">Usage Metrics</div>
          <div className="text-sm text-gray-600">Total: {metrics.total} · EVM: {metrics.evm} · Solana: {metrics.sol} · Enabled: {metrics.enabled} · Disabled: {metrics.disabled}</div>
        </div>
        <div className="rounded-md border p-4">
          <div className="font-medium mb-2">Users</div>
<<<<<<< HEAD

<<<<<<< HEAD
          {users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          {users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>  } catch (error) {
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
          <ul className="space-y-2">
            {users.map((u, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="text-sm">{u.id}</div>
                <label className="inline-flex items-center gap-2 text-sm">
                  <span>Web3</span>
                  <input type="checkbox" checked={u.enabled} onChange={(e) => {
                    const next = users.slice(), next[i] = { ...u, enabled: e.target.checked }, save(next)
<<<<<<< HEAD
<<<<<<< HEAD
}

                  }} />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
    </>);
}


  );
};
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
export default function AdminWeb3Page(req, res) {
  try {
  const [users, setUsers] = useState<{ id: string, enabled: boolean, chain?: string }[]>([]),;
  useEffect(() => {;
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-users') : null;
    setUsers(raw ? JSON.parse(raw) : []);
  }, []),;
  const save = (list: any) => {;
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-users', JSON.stringify(list)),;
    setUsers(list);
  },;
  const metrics = {;
    total: users.length;
    evm: users.filter(u => u.chain === 'evm').length;
    sol: users.filter(u => u.chain === 'sol').length;
    enabled: users.filter(u => u.enabled).length;
    disabled: users.filter(u => !u.enabled).length};
  return (;
    <>;
      <Head><title>Admin — Web3</title></Head>;
      <div className="max-w-3xl mx-auto space-y-6">;
        <h1 className="text-xl font-semibold">Web3 Admin</h1>;
        <div className="rounded-md border p-4">;
          <div className="font-medium mb-2">Usage Metrics</div>;
          <div className="text-sm text-gray-600">Total: {metrics.total} · EVM: {metrics.evm} · Solana: {metrics.sol} · Enabled: {metrics.enabled} · Disabled: {metrics.disabled}</div>;
        </div>;
        <div className="rounded-md border p-4">;
          <div className="font-medium mb-2">Users</div>;
          {users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <ul className="space-y-2">;
            {users.map((u, i) => (;
              <li key={i} className="flex items-center justify-between">;
                <div className="text-sm">{u.id}</div>;
                <label className="inline-flex items-center gap-2 text-sm">;
                  <span>Web3</span>;
                  <input type="checkbox" checked={u.enabled} onChange={(e) => {;
                    const next = users.slice(), next[i] = { ...u, enabled: e.target.checked }, save(next);
                  }} />;
                </label>;
              </li>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </ul>;
        </div>;
      </div>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }} />
                </label>
              </li>

=======
}

=======
import React, { useEffect, useState } from 'react',
import Head from 'next / head',
export default /**
 * AdminWeb3Page - Function description
 */
function AdminWeb3Page() {
  const [users, set_users] = useState<{ id: string, enabled: boolean, chain?: string }[]>([]),
  useEffect (() => {
    const raw = typeof window !== 'undefined' ? window.local_storage.get_item ('zion - web3 - users') : null,
    set_users (raw ? JSON.parse (raw) : []);
  }, []),
  const save = (list: any) =>: any {
    if (window.local_storage.set_item ('zion - web3 - users', JSON.stringify (list)), ) {
  $2
}
    set_users (list);
  },
  const metrics = {
    total: users.length,
    evm: users.filter (u => u.chain === 'evm').length,
    sol: users.filter (u => u.chain === 'sol').length,
    enabled: users.filter (u => u.enabled).length,
    disabled: users.filter (u => !u.enabled).length},
  return (
    <>;
      <Head><title > Admin — Web3</title></Head>;
      <div className="max - w-3xl mx - auto space - y-6">;
        <h1 className="text - xl font - semibold">Web3 Admin</h1>;
        <div className="rounded - md border p - 4">;
          <div className="font - medium mb - 2">Usage Metrics</div>;
          <div className="text - sm text - gray - 600">Total: {metrics.total} · EVM: {metrics.evm} · Solana: {metrics.sol} · Enabled: {metrics.enabled} · Disabled: {metrics.disabled}</div>;
        </div>;
        <div className="rounded - md border p - 4">;
          <div className="font - medium mb - 2">Users</div>;
          {users.length === 0 && <div className="text - sm text - gray - 500">No data yet</div>}
          <ul className="space - y-2">;
            {users.map ((u, i) => (
              <li key={i} className="flex items - center justify - between">;
                <div className="text - sm">{u.id}</div>;
                <label className="inline - flex items - center gap - 2 text - sm">;
                  <span > Web3</span>;
                  <input type="checkbox" checked={u.enabled} on_change={(e) => {
                    const next = users.slice (), next[i] = { ...u, enabled: e.target.checked }, save (next);
                  }} />;
                </label>;
              </li>))}
          </ul>;
        </div>;
      </div>;
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
