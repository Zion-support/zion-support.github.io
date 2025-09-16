import React from 'react';

const NewContentBanner2028: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-pink-500/30 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🚀 NEW CONTENT • JANUARY 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary New Content Available Now!
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most advanced technological innovations and business solutions that will reshape the future. 
            Experience cutting-edge AI, quantum computing, and revolutionary business transformations.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Revolutionary Tech Showcase 2028 */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
            <h3 className="text-2xl font-bold mb-3">Revolutionary Tech Showcase 2028</h3>
            <p className="text-purple-100 mb-4 text-sm">
              Experience conscious AI systems, quantum consciousness, and interdimensional computing that will reshape humanity's future.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-purple-500/50 px-2 py-1 rounded-full">NEW</span>
              <a 
                href="/pages/RevolutionaryTechShowcase2028" 
                className="text-purple-300 hover:text-white font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300"
              >
                Explore Now →
              </a>
            </div>
          </div>

          {/* AI Business Revolution 2028 */}
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏢</div>
            <h3 className="text-2xl font-bold mb-3">AI Business Revolution 2028</h3>
            <p className="text-blue-100 mb-4 text-sm">
              Transform your business with autonomous operations, intelligent financial management, and AI-powered customer experiences.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-blue-500/50 px-2 py-1 rounded-full">HOT</span>
              <a 
                href="/pages/AIBusinessRevolution2028" 
                className="text-blue-300 hover:text-white font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔮</div>
            <h3 className="text-2xl font-bold mb-3">More Revolutionary Content</h3>
            <p className="text-emerald-100 mb-4 text-sm">
              Stay tuned for more groundbreaking content including quantum neural networks, synthetic intelligence, and more.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-emerald-500/50 px-2 py-1 rounded-full">COMING SOON</span>
              <span className="text-emerald-300 font-semibold text-sm">
                Stay Updated →
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/RevolutionaryTechShowcase2028"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              Explore Revolutionary Tech
            </a>
            <a 
              href="/pages/AIBusinessRevolution2028"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              Transform Your Business
            </a>
          </div>
          <p className="text-sm opacity-70 mt-4">
            Join thousands of innovators already exploring the future of technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewContentBanner2028;