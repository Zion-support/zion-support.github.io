import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold text-white mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            NEW CONTENT 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Content
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the latest breakthroughs in AI technology, quantum computing, and autonomous systems that are reshaping our future.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Innovation Hub */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Innovation Hub</h3>
            <p className="text-gray-300 mb-6">
              Explore cutting-edge AI technologies and their real-world applications across industries.
            </p>
            <Link 
              to="/ai-innovation-hub-2026" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Explore Hub
            </Link>
          </div>

          {/* Quantum Computing Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Dive deep into quantum computing principles and their revolutionary potential.
            </p>
            <Link 
              to="/quantum-computing-guide-2026" 
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Advanced Tech Solutions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Solutions</h3>
            <p className="text-gray-300 mb-6">
              Discover next-generation technology solutions for modern business challenges.
            </p>
            <Link 
              to="/advanced-tech-solutions-2026" 
              className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
            >
              View Solutions
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex space-x-4">
            <Link 
              to="/blog" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get Custom Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;