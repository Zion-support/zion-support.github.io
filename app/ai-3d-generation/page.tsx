import React from 'react';
import SEOHead from '../components/SEOHead';

const Ai3DGenerationPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI 3D Generation - Zion Tech Group"
        description="Revolutionary AI-powered 3D generation technology. Create stunning 3D models, animations, and visualizations with our advanced AI platform."
        keywords="AI 3D generation, 3D modeling, 3D animation, AI visualization, 3D technology"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionary AI-powered 3D generation technology. Create stunning 3D models, animations, and visualizations with our advanced AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Start Creating
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ai3DGenerationPage;