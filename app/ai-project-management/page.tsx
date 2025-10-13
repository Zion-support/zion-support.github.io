import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiProjectManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Project Management - Smart Project Solutions | Zion Tech Group</title>
        <meta name="description" content="Streamline project management with AI-powered tools. Smart scheduling, resource optimization, and automated project tracking." />
      </Helmet>
      <div className="min-h-screen pt-16">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Management</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage projects intelligently with AI-powered tools
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiProjectManagementPage;