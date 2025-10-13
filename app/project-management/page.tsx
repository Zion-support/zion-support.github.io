import React from 'react';
import { Helmet } from 'react-helmet-async';

const ProjectManagementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Project Management - Zion Tech Group</title>
        <meta name="description" content="Advanced project management solutions for teams and organizations." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-white mb-6">Project Management</h1>
        <p className="text-xl text-gray-300">Coming Soon - Advanced project management solutions</p>
      </div>
    </div>
  );
};

export default ProjectManagementPage;