import React from 'react';
import SEOHead from '../components/SEOHead';

const ProjectManagementTool: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Project Management Tool - Zion Tech Group"
        description="Professional project management tool solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Management Tool</h1>
          <p className="text-gray-300">Professional project management tool solutions for modern businesses</p>
        </div>
      </div>
    </>
  );
};

export default ProjectManagementTool;