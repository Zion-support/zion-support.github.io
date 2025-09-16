import React from 'react';

const RevolutionaryAdBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white py-12 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🔥 REVOLUTIONARY AD • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
            🚀 BREAKTHROUGH ALERT: Revolutionary Technology Now Available!
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technological advances that will reshape our world. 
            Don't miss out on the future - it's happening now!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Access</h3>
              <p className="text-sm opacity-80">Get immediate access to revolutionary technology</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600/30 to-yellow-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Limited Time</h3>
              <p className="text-sm opacity-80">Exclusive access for early adopters only</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl font-bold mb-2">Revolutionary</h3>
              <p className="text-sm opacity-80">Technology that changes everything</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse">
              🚀 GET REVOLUTIONARY ACCESS NOW →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
          
          <div className="mt-6 text-sm opacity-80">
            ⚠️ Limited spots available • Revolutionary technology • 99.9% success rate
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2025;