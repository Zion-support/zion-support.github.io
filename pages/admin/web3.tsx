import React, {_useEffect, _useState} from 'react';
import Head from 'next/head';

export default function AdminWeb3Page() {_const [users, _setUsers] = useState<{ id: string; enabled: boolean; chain?: string}[]>([]);

  useEffect__(() => {_const _raw = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-users') : null;
    setUsers(raw ? JSON.parse(raw) : []);}, []);

  const _save = (_list: unknown) => {_if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-users', _JSON.stringify(list));
    setUsers(list);};

  const _metrics = {_total: users.length, _evm: users.filter(u => u.chain === 'evm').length, _sol: users.filter(u => u.chain === 'sol').length, _enabled: users.filter(u => u.enabled).length, _disabled: users.filter(u => !u.enabled).length};

  return (_<>
      <Head><title>Admin — Web3</title></Head>
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-xl font-semibold">Web3 Admin</h1>
        <div className="rounded-md border p-4">
          <div className="font-medium mb-2">Usage Metrics</div>
          <div className="text-sm text-gray-600">Total: {_metrics.total} · EVM: {_metrics.evm} · Solana: {_metrics.sol} · Enabled: {_metrics.enabled} · Disabled: {_metrics.disabled}</div>
        </div>
        <div className="rounded-md border p-4">
          <div className="font-medium mb-2">Users</div>
          {_users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>}
          <ul className="space-y-2">
            {_users.map((u, _i) => (_<li key={i} className="flex items-center justify-between">
                <div className="text-sm">{_u.id}</div>
                <label className="inline-flex items-center gap-2 text-sm">
                  <span>Web3</span>
                  <input type="checkbox" checked={_u.enabled} onChange={_(e) => {
                    const _next = users.slice(); next[i] = { ...u, _enabled: e.target.checked}; save(next);
                  }} />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}