import React from 'react';

const RevolutionaryAdBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-4 px-6 rounded-lg mb-8 animate-pulse">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-3xl">🚀</div>
          <div>
            <h3 className="text-xl font-bold">🌟 NEW: Revolutionary Tech Breakthrough 2025</h3>
            <p className="text-sm opacity-90">Experience the most advanced technologies that are reshaping our world</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <a 
            href="/pages/UltimateTechRevolution2025" 
            className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
          >
            Explore Now →
          </a>
          <a 
            href="/pages/RevolutionaryTechBreakthrough2025" 
            className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner;