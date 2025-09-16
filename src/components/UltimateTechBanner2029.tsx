import React from 'react';

const UltimateTechBanner2029: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 px-8 rounded-xl mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 mb-4 lg:mb-0">
            <div className="text-4xl animate-bounce">🌟</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Ultimate Tech Breakthrough 2029</h3>
              <p className="text-lg opacity-90">The most revolutionary technologies that will reshape reality</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/UltimateTechBreakthrough2028" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl"
            >
              Experience 2029 →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2028" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2029;