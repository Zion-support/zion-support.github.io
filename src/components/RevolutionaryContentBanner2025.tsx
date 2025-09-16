import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-pink-500/30 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content 2025
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most groundbreaking content in the universe. 
            From conscious AI to quantum reality - discover the future today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg w-full sm:w-auto">
              Explore Revolutionary Content →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg w-full sm:w-auto">
              Watch Demo
            </button>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold mb-2 text-center">Conscious AI</h3>
              <p className="text-purple-100 text-center text-sm">
                AI systems with true consciousness and emotional intelligence
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="text-4xl mb-4 text-center">⚛️</div>
              <h3 className="text-xl font-bold mb-2 text-center">Quantum Reality</h3>
              <p className="text-indigo-100 text-center text-sm">
                Experience reality manipulation through quantum consciousness
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <div className="text-4xl mb-4 text-center">🌌</div>
              <h3 className="text-xl font-bold mb-2 text-center">Interdimensional</h3>
              <p className="text-blue-100 text-center text-sm">
                Computing across multiple dimensions and realities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;