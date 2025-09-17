import React from 'react';

const RevolutionaryCaseStudiesBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-12 left-12 w-20 h-20 bg-indigo-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-36 right-16 w-16 h-16 bg-purple-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-16 left-1/4 w-14 h-14 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-12 right-1/3 w-18 h-18 bg-cyan-500/30 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 REVOLUTIONARY CASE STUDIES • JANUARY 2026
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Case Studies 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover how our breakthrough technologies are transforming industries and changing the world. 
            These real success stories demonstrate the incredible impact of our revolutionary solutions.
          </p>
        </div>

        {/* Success Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🏥</div>
            <h3 className="text-lg font-bold mb-2 text-center">Medical Breakthrough</h3>
            <p className="text-green-100 text-sm text-center">
              99.9% diagnostic accuracy achieved
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌍</div>
            <h3 className="text-lg font-bold mb-2 text-center">Climate Solution</h3>
            <p className="text-blue-100 text-sm text-center">
              50% reduction in global emissions
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🚀</div>
            <h3 className="text-lg font-bold mb-2 text-center">Space Exploration</h3>
            <p className="text-purple-100 text-sm text-center">
              First contact with alien civilizations
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/RevolutionaryCaseStudies2026" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              📊 View Case Studies →
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2026" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🌟 Tech Breakthrough →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🚀 Ultimate Revolution →
            </a>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">99.9%</div>
            <div className="text-sm text-green-200">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">1B+</div>
            <div className="text-sm text-blue-200">Lives Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">$50T</div>
            <div className="text-sm text-purple-200">Economic Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400">∞</div>
            <div className="text-sm text-pink-200">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudiesBanner2026;