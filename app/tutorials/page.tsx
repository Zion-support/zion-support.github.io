import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const TutorialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Tutorials - Zion Tech Group"
        description="Learn about AI, technology, and digital transformation with our comprehensive tutorials and guides."
        keywords="tutorials, guides, learning, AI, technology, digital transformation"
        canonical="/tutorials"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Tutorials
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about AI, technology, and digital transformation with our comprehensive tutorials and guides.
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300 text-lg">Tutorials coming soon. Check back for learning resources.</p>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;