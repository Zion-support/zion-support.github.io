import React from 'react';
import { Link } from 'react-router-dom';

export function Ultimate2027ContentShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              🎯 ULTIMATE 2027 CONTENT
            </span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">
              BREAKTHROUGH
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Ultimate AI 2027 Content Revolution
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most comprehensive collection of AI 2027 breakthroughs, success stories, and revolutionary solutions that are transforming enterprises worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2">Autonomous Enterprise</h3>
              <p className="text-sm opacity-90 mb-4">95% automation, $1.2B+ ROI success stories</p>
              <Link to="/blog/ai-2027-autonomous-enterprise-revolution"
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Read More
              </Link>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <div className="text-center">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold mb-2">Quantum AI</h3>
              <p className="text-sm opacity-90 mb-4">1000x performance with quantum computing</p>
              <Link to="/blog/ai-2027-quantum-breakthrough-enterprise"
                className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Explore Quantum
              </Link>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <div className="text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-bold mb-2">Success Stories</h3>
              <p className="text-sm opacity-90 mb-4">$1.2B ROI case studies and transformations</p>
              <Link to="/case-studies/ai-2027-revolutionary-breakthrough-success"
                className="bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                View Success
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/content-hub"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Content Hub
            </Link>
            <Link to="/services/ai-2027-revolutionary-breakthrough-solutions"
              className="bg-white bg-opacity-20 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
            >
              Get AI 2027 Solutions
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-8 text-2xl animate-bounce">🚀</div>
        <div className="absolute top-4 right-12 text-xl animate-pulse">⚛️</div>
        <div className="absolute top-12 left-16 text-lg animate-bounce delay-300">🧠</div>
        <div className="absolute top-12 right-8 text-xl animate-pulse delay-700">🤖</div>
        <div className="absolute bottom-8 left-12 text-lg animate-bounce delay-500">🏆</div>
        <div className="absolute bottom-8 right-16 text-xl animate-pulse delay-1000">💎</div>
      </div>
    </div>
  );
}