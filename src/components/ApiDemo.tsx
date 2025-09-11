import React, { useState, useEffect } from 'react';
import { api, ApiResponse } from '@/services/api';

interface User {
  id: number;
  name: string;
  email: string;
  createdAt?: string;
}

const ApiDemo: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [healthStatus, setHealthStatus] = useState<string>('Checking...');

  // Check API health on component mount
  useEffect(() => {
    checkHealth();
    fetchUsers();
  }, []);

  const checkHealth = async () => {
    try {
      const response = await api.health();
      setHealthStatus(`✅ API Healthy - ${response.data?.environment} mode`);
    } catch (err) {
      setHealthStatus('❌ API Unhealthy');
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.getUsers();
      if (response.success && response.data) {
        setUsers(response.data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newUser.name.trim() || !newUser.email.trim()) {
      setError('Name and email are required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await api.createUser(newUser);
      if (response.success && response.data) {
        setUsers(prev => [...prev, response.data!]);
        setNewUser({ name: '', email: '' });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🚀 Vite + Node.js Hybrid App Demo
        </h2>
        
        {/* API Health Status */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">API Status</h3>
          <p className="text-sm text-gray-600">{healthStatus}</p>
        </div>

        {/* Create User Form */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Create New User</h3>
          <form onSubmit={handleCreateUser} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser(prev => ({ ...prev, name: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create User'}
            </button>
          </form>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Users List */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Users ({users.length})</h3>
            <button
              onClick={fetchUsers}
              disabled={loading}
              className="px-3 py-1 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Refresh'}
            </button>
          </div>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading users...</p>
            </div>
          ) : users.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No users found. Create one above!</p>
          ) : (
            <div className="space-y-3">
              {users.map((user) => (
                <div key={user.id} className="flex justify-between items-center p-3 bg-white rounded-md border">
                  <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    {user.createdAt && (
                      <p className="text-xs text-gray-400">
                        Created: {new Date(user.createdAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    ID: {user.id}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Architecture Info */}
        <div className="mt-8 p-4 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold text-green-700 mb-2">🏗️ Architecture</h3>
          <div className="text-sm text-green-700 space-y-1">
            <p>• <strong>Frontend:</strong> Vite + React (Port 3000) - Fast HMR & optimized builds</p>
            <p>• <strong>Backend:</strong> Node.js + Express (Port 5000) - API endpoints & business logic</p>
            <p>• <strong>Development:</strong> Vite proxy forwards /api calls to Node.js</p>
            <p>• <strong>Production:</strong> Node.js serves built frontend + API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDemo;