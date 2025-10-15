import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIProjectManagementProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered project management solution with intelligent task prioritization and resource allocation." />
        <meta name="keywords" content="project management, AI, task management, resource allocation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Project Management Pro
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered project management solution with intelligent task prioritization and resource allocation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIProjectManagementProPage;