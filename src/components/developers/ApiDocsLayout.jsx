import React from 'react';

export const ApiDocsLayout = ({ children, sidebar }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">API Documentation</h2>
        </div>
        {sidebar || (
          <nav className="space-y-2">
            <a href="#authentication" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Authentication
            </a>
            <a href="#endpoints" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Endpoints
            </a>
            <a href="#examples" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Examples
            </a>
            <a href="#errors" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Error Codes
            </a>
            <a href="#rate-limits" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Rate Limits
            </a>
          </nav>
        )}
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          {children}
        </div>
      </div>
    </div>
  );
};