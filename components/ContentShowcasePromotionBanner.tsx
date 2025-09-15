import React from 'react';
ArrowRightStarZapBrainAtom

export default function ContentShowcasePromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Revolutionary
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Content Showcase
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore our latest AI innovationsquantum computing breakthroughsand advanced automation solutions. 
            Experience the future of technology today.
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* AI Innovation Showcase */}
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="bg-blue-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">AI Innovation Showcase</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Revolutionary AI breakthroughsquantum AI fusionand next-generation neural interfaces 
              that are transforming the future of artificial intelligence.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                Explore Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="flex items-center text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm">Featured</span>
              </div>
            </div>
          </div>

          {/* Quantum Computing Breakthrough */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="bg-purple-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Atom className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">Quantum Computing</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Experience the quantum revolution with groundbreaking quantum computing solutions
              quantum neural networksand unprecedented computational power.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                Discover More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="flex items-center text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm">New</span>
              </div>
            </div>
          </div>

          {/* Advanced Automation Solutions */}
          <div className="bg-gradient-to-br from-cyan-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="bg-cyan-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">Automation Solutions</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Transform your business with intelligent workflowsautonomous operations
              and AI-powered automation that delivers unprecedented efficiency and productivity.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="flex items-center text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm">Popular</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Explore All Content
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}