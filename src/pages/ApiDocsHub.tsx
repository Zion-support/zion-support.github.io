import React from 'react';

export default function ApiDocsHub() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">API Documentation Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Authentication API</h2>
          <p className="text-gray-600 mb-4">Endpoints for user authentication and authorization.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Docs
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">User Management API</h2>
          <p className="text-gray-600 mb-4">Manage user profiles and account settings.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Docs
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Data API</h2>
          <p className="text-gray-600 mb-4">Access and manipulate application data.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Docs
          </button>
        </div>
      </div>
    </div>
  );
}