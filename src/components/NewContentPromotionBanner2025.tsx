import React from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW BREAKTHROUGH CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Next-Gen AI Breakthrough</h3>
            <p className="text-purple-100 mb-6 text-center">
              Discover the most advanced AI technologies that are reshaping industries
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Conscious AI Systems</li>
              <li>• Autonomous Agents</li>
              <li>• Neural Interfaces</li>
              <li>• Quantum AI Processing</li>
            </ul>
            <a href="/pages/NextGenTechBreakthrough2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI Revolution →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Revolutionary AI Services</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Transform your business with cutting-edge AI services that deliver unprecedented results
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Business Intelligence</li>
              <li>• Autonomous Operations</li>
              <li>• Predictive Analytics</li>
              <li>• AI Security Systems</li>
            </ul>
            <a href="/pages/RevolutionaryAIServices2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              View AI Services →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interactive Demos</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Experience our technologies firsthand with interactive demonstrations
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Live AI Demonstrations</li>
              <li>• Quantum Computing Demos</li>
              <li>• Neural Interface Trials</li>
              <li>• Virtual Reality Tours</li>
            </ul>
            <a href="/pages/NextGenTechBreakthrough2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Try Interactive Demo →
            </a>
          </div>
        </div>

        {/* Additional Promotional Content */}
        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">New Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-sm text-gray-300">Possibilities</div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore All Content
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
              Watch Video Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;