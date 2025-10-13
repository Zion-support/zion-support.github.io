import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const AiProjectManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Project Management - Intelligent Project Planning"
        description="Streamline your project management with AI-powered planning, resource allocation, and progress tracking."
        keywords="AI project management, project planning, resource allocation, progress tracking, project optimization"
        canonical="/ai-project-management"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Project Management
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline your project management with AI-powered planning, resource allocation, and progress tracking.
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300 text-lg">Service details coming soon. Contact us for more information.</p>
        </div>
      </div>
    </div>
  );
};

export default AiProjectManagementPage;