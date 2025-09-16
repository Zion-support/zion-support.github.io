import React from 'react';

const RevolutionaryTechBanner2030: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-6 px-8 rounded-xl mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 mb-4 lg:mb-0">
            <div className="text-4xl animate-pulse">⚡</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Revolutionary Tech 2030</h3>
              <p className="text-lg opacity-90">Experience the convergence of AI consciousness and quantum reality</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/RevolutionaryTechShowcase2028" 
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl"
            >
              Explore 2030 →
            </a>
            <a 
              href="/pages/UltimateTechBreakthrough2028" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-center"
            >
              See Future
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2030;