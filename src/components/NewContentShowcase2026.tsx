import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold text-white mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            NEW CONTENT • JANUARY 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Latest AI Insights & Breakthroughs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the newest content covering AI ethics, quantum computing, edge AI, and advanced services that will shape the future of technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">AI Ethics</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Ethics Framework 2026</h3>
            <p className="text-gray-300 mb-4">Comprehensive guide to ethical AI development and deployment</p>
            <Link 
              to="/blog/ai-ethics-framework-2026" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">Quantum Computing</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Computing Breakthrough</h3>
            <p className="text-gray-300 mb-4">Latest advances in quantum computing technology</p>
            <Link 
              to="/blog/quantum-computing-breakthrough-2026" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold">Edge AI</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Edge AI Revolution</h3>
            <p className="text-gray-300 mb-4">How edge AI is transforming industries</p>
            <Link 
              to="/blog/edge-ai-revolution-2026" 
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;