import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface Web3Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'development';
  blockchain: string;
  contractAddress?: string;
  createdAt: string;
  lastDeployed?: string;
}

const mockWeb3Projects: Web3Project[] = [
  {
    id: '1',
    name: 'Zion Token',
    description: 'Utility token for the Zion ecosystem',
    status: 'active',
    blockchain: 'Ethereum',
    contractAddress: '0x1234...5678',
    createdAt: '2024-01-15T00:00:00Z',
    lastDeployed: '2025-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'NFT Marketplace',
    description: 'Decentralized marketplace for digital assets',
    status: 'development',
    blockchain: 'Polygon',
    createdAt: '2024-03-20T00:00:00Z'
  },
  {
    id: '3',
    name: 'DeFi Protocol',
    description: 'Automated market maker protocol',
    status: 'inactive',
    blockchain: 'Ethereum',
    contractAddress: '0xabcd...efgh',
    createdAt: '2024-06-10T00:00:00Z',
    lastDeployed: '2024-12-01T15:30:00Z'
  }
];

const AdminWeb3Page: React.FC = () => {
  const [projects, setProjects] = useState<Web3Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive' | 'development'>('all');

  useEffect(() => {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-users') : null,
    setUsers(raw ? JSON.parse(raw) : [])
  }, []),

  const save = (list: any) => {
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-users', JSON.stringify(list)),
    setUsers(list)
  },

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'development': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getBlockchainColor = (blockchain: string) => {
    switch (blockchain.toLowerCase()) {
      case 'ethereum': return 'bg-blue-100 text-blue-800';
      case 'polygon': return 'bg-purple-100 text-purple-800';
      case 'binance': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const activeProjects = projects.filter(p => p.status === 'active').length;
  const developmentProjects = projects.filter(p => p.status === 'development').length;
  const totalProjects = projects.length;

  return (
    <>
      <Head>
        <title>Admin Web3 - Zion Tech Group</title>
        <meta name="description" content="Manage Web3 projects and blockchain integrations" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Web3 Project Management</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Projects</h3>
            <p className="text-2xl font-bold">{totalProjects}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
            <p className="text-2xl font-bold text-green-600">{activeProjects}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">In Development</h3>
            <p className="text-2xl font-bold text-yellow-600">{developmentProjects}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded ${
                filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded ${
                filter === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Active ({activeProjects})
            </button>
            <button
              onClick={() => setFilter('development')}
              className={`px-4 py-2 rounded ${
                filter === 'development' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Development ({developmentProjects})
            </button>
            <button
              onClick={() => setFilter('inactive')}
              className={`px-4 py-2 rounded ${
                filter === 'inactive' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Inactive
            </button>
          </div>
        </div>

        {/* Projects List */}
        {loading ? (
          <div className="text-center py-8">Loading Web3 projects...</div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No Web3 projects found matching your criteria.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-xl">{project.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getBlockchainColor(project.blockchain)}`}>
                        {project.blockchain}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-3">{project.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Created:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>
                        {project.lastDeployed && (
                          <p><strong>Last Deployed:</strong> {new Date(project.lastDeployed).toLocaleDateString()}</p>
                        )}
                      </div>
                      <div>
                        {project.contractAddress && (
                          <p><strong>Contract:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{project.contractAddress}</code></p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                      Deploy
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200">
                      Archive
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ul>;
        </div>;
      </div>;
    </>;
  );
};

export default AdminWeb3Page;
