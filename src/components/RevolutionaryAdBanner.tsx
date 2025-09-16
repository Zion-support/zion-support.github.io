import React from 'react';

const RevolutionaryAdBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-4 px-6 rounded-lg mb-8 animate-pulse">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="text-3xl">🚀</div>
          <div>
            <h3 className="text-xl font-bold">NEW: Revolutionary Tech 2028-2029</h3>
            <p className="text-sm opacity-90">Experience the future of technology today</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <a 
            href="/pages/RevolutionaryTechShowcase2028" 
            className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
          >
            Explore 2028 →
          </a>
          <a 
            href="/pages/UltimateTechBreakthrough2028" 
            className="bg-white text-pink-600 px-6 py-2 rounded-lg hover:bg-pink-50 transition-colors font-semibold"
          >
            See Breakthrough →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner;