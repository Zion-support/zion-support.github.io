'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';

const AIProjectManagerPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Project Manager - Zion Tech Group"
        description="Advanced AI-powered project manager for task automation, resource optimization, and project planning. Manage projects efficiently with AI technology."
        keywords="AI project manager, task automation, resource optimization, project planning, project management technology, project AI"
      />
      
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 holographic-text">AI Project Manager</h1>
          <p className="text-xl text-gray-300 mb-8">Coming Soon - Advanced AI-powered project management</p>
          <div className="cyber-loader mx-auto"></div>
        </div>
      </div>
    </>
  );
};

export default AIProjectManagerPage;