import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface Web3Project {
  id: string;
  name: string;
  description: string;
  category: 'defi' | 'nft' | 'dao' | 'gaming' | 'infrastructure';
  status: 'active' | 'inactive' | 'development';
  blockchain: string;
  tokenAddress?: string;
  contractAddress?: string;
}

export default function Web3Admin() {
  const [projects, setProjects] = useState<Web3Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await fetch('/api/admin/web3-projects');
      const data = await response.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error('Error loading Web3 projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'defi': return 'bg-blue-100 text-blue-800';
      case 'nft': return 'bg-purple-100 text-purple-800';
      case 'dao': return 'bg-green-100 text-green-800';
      case 'gaming': return 'bg-yellow-100 text-yellow-800';
      case 'infrastructure': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'development': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading Web3 projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Web3 Projects Admin - Zion Tech Group</title>
      </Head>
      
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Web3 Projects Management</h1>
          <p className="mt-2 text-gray-600">Manage DeFi, NFT, DAO, and other Web3 projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No Web3 projects found.</p>
            </div>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-500">Category:</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(project.category)}`}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-500">Status:</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-500">Blockchain:</span>
                    <span className="text-sm text-gray-900">{project.blockchain}</span>
                  </div>
                  
                  {project.tokenAddress && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-500">Token:</span>
                      <span className="text-sm font-mono text-gray-900 truncate">
                        {project.tokenAddress.slice(0, 10)}...
                      </span>
                    </div>
                  )}
                  
                  {project.contractAddress && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-500">Contract:</span>
                      <span className="text-sm font-mono text-gray-900 truncate">
                        {project.contractAddress.slice(0, 10)}...
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}