<<<<<<< HEAD
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
export default function AdminWeb3Page() {
<<<<<<< HEAD
  const [users, setUsers] = useState<{ id: string, enabled: boolean, chain?: string }[]>([])
=======
  const [users, setUsers] = useState<{ id: string, enabled: boolean, chain?: string }[]>([]),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  useEffect(() => {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-users') : null
    setUsers(raw ? JSON.parse(raw) : [])
<<<<<<< HEAD
  }, [])
=======
  }, []),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const save = (list: any) => {
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-users', JSON.stringify(list))
    setUsers(list)
<<<<<<< HEAD
  };
  const metrics = {
=======
<<<<<<< HEAD
  }
  const metrics = {
    total: users.length
    evm: users.filter(u => u.chain === 'evm').length
    sol: users.filter(u => u.chain === 'sol').length
    enabled: users.filter(u => u.enabled).length
    disabled: users.filter(u => !u.enabled).length}

=======
  },
  const metrics = {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    total: users.length,
    evm: users.filter(u => u.chain === 'evm').length,
    sol: users.filter(u => u.chain === 'sol').length,
    enabled: users.filter(u => u.enabled).length,
    disabled: users.filter(u => !u.enabled).length},
<<<<<<< HEAD
return (
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
          {users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>}
=======
          {users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <ul className="space-y-2">
            {users.map((u, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="text-sm">{u.id}</div>
                <label className="inline-flex items-center gap-2 text-sm">
                  <span>Web3</span>
                  <input type="checkbox" checked={u.enabled} onChange={(e) => {
                    const next = users.slice(), next[i] = { ...u, enabled: e.target.checked }, save(next)
<<<<<<< HEAD

  return (_<>
      <Head><title>Admin — Web3</title></Head>
      <div className=&quot;max-w-3xl mx-auto space-y-6&quot;>
        <h1 className=&quot;text-xl font-semibold&quot;>Web3 Admin</h1>
        <div className=&quot;rounded-md border p-4&quot;>
          <div className=&quot;font-medium mb-2&quot;>Usage Metrics</div>
          <div className=&quot;text-sm text-gray-600&quot;>Total: {metrics.total} · EVM: {metrics.evm} · Solana: {metrics.sol} · Enabled: {metrics.enabled} · Disabled: {metrics.disabled}</div>
        </div>
        <div className=&quot;rounded-md border p-4&quot;>
          <div className=&quot;font-medium mb-2&quot;>Users</div>
          {users.length === 0 && <div className=&quot;text-sm text-gray-500&quot;>No data yet</div>}
          <ul className=&quot;space-y-2&quot;>
            {users.map((u, i) => (
              <li key={i} className=&quot;flex items-center justify-between&quot;>
                <div className=&quot;text-sm&quot;>{u.id}</div>
                <label className=&quot;inline-flex items-center gap-2 text-sm&quot;>
                  <span>Web3</span>

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  }} />
                </label>
              </li>
<<<<<<< HEAD
=======
<<<<<<< HEAD
            ))}
          </ul>
        </div>
      </div>
    </>
<<<<<<< HEAD
  )
}
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
=======
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
