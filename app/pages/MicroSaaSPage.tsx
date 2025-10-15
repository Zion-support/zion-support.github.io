import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaaSPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS solutions designed to solve specific business problems with focused, efficient applications." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focused, efficient SaaS applications that solve specific business problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Task Management</h3>
              <p className="text-gray-300 mb-4">
                Streamlined task management tools for small teams and individuals.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Project Tracking</li>
                <li>• Team Collaboration</li>
                <li>• Deadline Management</li>
                <li>• Progress Analytics</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-pink-400">Analytics Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Custom analytics dashboards for specific business metrics and KPIs.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Real-time Data</li>
                <li>• Custom Metrics</li>
                <li>• Visual Reports</li>
                <li>• Export Capabilities</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">API Management</h3>
              <p className="text-gray-300 mb-4">
                Simple API management tools for developers and small businesses.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• API Documentation</li>
                <li>• Rate Limiting</li>
                <li>• Usage Analytics</li>
                <li>• Developer Portal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaaSPage;