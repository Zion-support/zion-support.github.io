import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewResource2025ImplementationRoadmapBanner = () => {
  return (
    <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Implementation Roadmap 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Follow our proven step-by-step roadmap to successfully implement AI 2025 technologies and achieve 2,000% ROI in your organization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Phase 1</h3>
            <p className="text-orange-100 text-sm">Assessment & Planning</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Phase 2</h3>
            <p className="text-orange-100 text-sm">Pilot Implementation</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Phase 3</h3>
            <p className="text-orange-100 text-sm">Full Deployment</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Phase 4</h3>
            <p className="text-orange-100 text-sm">Optimization & Scale</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/resources/ai-2025-implementation-ultimate-framework-2000-roi" 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
          >
            View Roadmap
          </a>
          <a 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-900 transition-all duration-300"
          >
            Get Expert Guidance
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewResource2025ImplementationRoadmapBanner;