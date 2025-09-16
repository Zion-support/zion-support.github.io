import React from 'react';

const UltimateContentBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 text-white py-20 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FF6B6B" fill-opacity="0.1"%3E%3Cpolygon points="40,10 50,30 70,30 55,45 60,65 40,55 20,65 25,45 10,30 30,30"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-bounce">
            🌟 ULTIMATE CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            The Ultimate Technology Experience
          </h2>
          <p className="text-3xl opacity-90 max-w-5xl mx-auto mb-12">
            Immerse yourself in the most advanced technology content featuring conscious AI, quantum computing, 
            neural interfaces, and interdimensional technology that will reshape humanity's future
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Space Technology</h3>
            <p className="text-orange-100 mb-4 text-center text-sm">
              Advanced space exploration and colonization technologies
            </p>
            <div className="text-xs text-orange-300 space-y-1">
              <div>• Interstellar travel</div>
              <div>• Terraforming tech</div>
              <div>• Space habitats</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Biotech Revolution</h3>
            <p className="text-red-100 mb-4 text-center text-sm">
              Revolutionary biotechnology and genetic engineering
            </p>
            <div className="text-xs text-red-300 space-y-1">
              <div>• Gene editing</div>
              <div>• Synthetic biology</div>
              <div>• Life extension</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interdimensional Tech</h3>
            <p className="text-pink-100 mb-4 text-center text-sm">
              Technology that transcends dimensional boundaries
            </p>
            <div className="text-xs text-pink-300 space-y-1">
              <div>• Dimensional portals</div>
              <div>• Reality manipulation</div>
              <div>• Multiverse travel</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Energy Revolution</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Clean, infinite energy solutions for the future
            </p>
            <div className="text-xs text-purple-300 space-y-1">
              <div>• Fusion power</div>
              <div>• Zero-point energy</div>
              <div>• Solar optimization</div>
            </div>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Interactive Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-xl font-semibold mb-2">Interactive Demos</h4>
              <p className="text-gray-300">Experience technology through hands-on interactive demonstrations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-semibold mb-2">Real-time Analytics</h4>
              <p className="text-gray-300">Monitor performance metrics and data visualization in real-time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h4 className="text-xl font-semibold mb-2">Future Predictions</h4>
              <p className="text-gray-300">AI-powered predictions about technology trends and developments</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6">
            <button className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-12 py-5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Explore Ultimate Content
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-lg hover:bg-white hover:text-orange-900 transition-all duration-300 font-semibold text-xl">
              Start Free Trial
            </button>
          </div>
          <p className="text-lg opacity-80 mt-6">
            Join over 1 million users experiencing the future of technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2026;