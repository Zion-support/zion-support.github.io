import React from "react";
import { Link } from "react-router-dom";

const APIDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">API Documentation</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              API Endpoints
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Content Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Manage content and resources through our RESTful API.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                  <code className="text-sm">
                    GET /api/content
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;
