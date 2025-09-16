import React from 'react';

const NewContentBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 mb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-4 right-4 text-6xl animate-bounce">🚀</div>
      <div className="absolute bottom-4 left-4 text-4xl animate-pulse">✨</div>
      
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="text-5xl animate-spin">🌟</span>
          <h2 className="text-5xl font-bold text-white">NEW CONTENT 2026</h2>
          <span className="text-5xl animate-spin">🌟</span>
        </div>
        
        <p className="text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
          Discover the latest breakthrough technologies and innovative solutions that are shaping the future. 
          From AI consciousness to quantum computing, explore cutting-edge content that will transform your understanding of technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          <a 
            href="/pages/AdvancedTechBreakthrough2025" 
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🚀</span>
              <span>Tech Breakthrough</span>
            </div>
          </a>
          
          <a 
            href="/pages/InnovationShowcase2025" 
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">✨</span>
              <span>Innovation Hub</span>
            </div>
          </a>
          
          <a 
            href="/pages/AdvancedAITransformation2025" 
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🧠</span>
              <span>AI Transformation</span>
            </div>
          </a>
          
          <a 
            href="/pages/QuantumComputingRevolution2025" 
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span>Quantum Revolution</span>
            </div>
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore All Content
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
            Subscribe for Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContentBanner2026;