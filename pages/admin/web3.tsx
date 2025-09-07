import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function AdminWeb3Page() {
  const [users, setUsers] = useState<{ id: string, enabled: boolean, chain?: string }[]>([]);
  
  useEffect(() => {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-users') : null;
    setUsers(raw ? JSON.parse(raw) : []);
  }, []);

  const save = (list: any) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('zion-web3-users', JSON.stringify(list));
    }
    setUsers(list);
  };

  const metrics = {
    total: users.length,
    evm: users.filter(u => u.chain === 'evm').length,
    sol: users.filter(u => u.chain === 'sol').length,
    enabled: users.filter(u => u.enabled).length,
    disabled: users.filter(u => !u.enabled).length
  };

  const toggleUser = (id: string) => {
    const updated = users.map(u => 
      u.id === id ? { ...u, enabled: !u.enabled } : u
    );
    save(updated);
  };

  const addUser = () => {
    const id = prompt('Enter user ID:');
    if (id) {
      const updated = [...users, { id, enabled: true, chain: 'evm' }];
      save(updated);
    }
  };

  const removeUser = (id: string) => {
    const updated = users.filter(u => u.id !== id);
    save(updated);
  };

  return (
    <>
      <Head>
        <title>Web3 Admin - Zion Tech Group</title>
      </Head>
      
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Web3 User Management</h1>
        
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
            <p className="text-2xl font-bold text-gray-900">{metrics.total}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">EVM Users</h3>
            <p className="text-2xl font-bold text-blue-600">{metrics.evm}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Solana Users</h3>
            <p className="text-2xl font-bold text-purple-600">{metrics.sol}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Enabled</h3>
            <p className="text-2xl font-bold text-green-600">{metrics.enabled}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={addUser}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add User
          </button>
        </div>

        {/* User List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chain
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.chain || 'EVM'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.enabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => toggleUser(user.id)}
                      className={`mr-2 px-3 py-1 text-xs rounded ${
                        user.enabled 
                          ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {user.enabled ? 'Disable' : 'Enable'}
                    </button>
                    <button
                      onClick={() => removeUser(user.id)}
                      className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}