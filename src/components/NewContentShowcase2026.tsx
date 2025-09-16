import React from 'react';

const NewContentShowcase2026: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold text-white mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            NEW CONTENT AVAILABLE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Tech Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Showcase 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and advanced technology solutions
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Innovation Hub */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Innovation Hub</h3>
            <p className="text-gray-300 mb-6">
              Explore cutting-edge AI solutions and revolutionary automation technologies
            </p>
            <Link 
              to="/ai-innovation-hub-2026" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Explore AI Hub
            </Link>
          </div>

          {/* Quantum Computing Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Dive into the quantum realm with our comprehensive computing guide
            </p>
            <Link 
              to="/quantum-computing-guide-2026" 
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300"
            >
              View Guide
            </Link>
          </div>

          {/* Advanced Tech Solutions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Solutions</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary technology solutions for the future of business
            </p>
            <Link 
              to="/advanced-tech-solutions-2026" 
              className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300"
            >
              Discover More
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            View All Content
          </Link>
        </div>
      </div>
=======
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NewContentShowcase2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
>>>>>>> dfce83fecd5efb7c91a4f4abe3933d9108eb5d24
    </div>
  );
};

export default NewContentShowcase2026;