import React from 'react';

const UltimateContentBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 mb-12">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-600/20 to-blue-600/20"></div>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-10 left-10 w-16 h-16 border-2 border-purple-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute top-20 right-20 w-12 h-12 bg-pink-400/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-cyan-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-blue-400/30 rounded-full animate-ping"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse shadow-lg">
            🌟 ULTIMATE TECHNOLOGY EXPERIENCE • 2026
          </div>
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            The Future is Here
          </h1>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-12 leading-relaxed">
            Experience the most revolutionary technologies that are reshaping our world. From conscious AI to quantum computing, 
            discover innovations that will define the next decade of human progress.
          </p>
        </div>
        
        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/40 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI</h3>
            <p className="text-purple-100 mb-6 text-center leading-relaxed">
              Self-aware artificial intelligence that understands context and makes autonomous decisions
            </p>
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                99.9% Accuracy
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/40 to-blue-600/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/40 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-6 text-center leading-relaxed">
              Revolutionary quantum processors that solve complex problems exponentially faster
            </p>
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                1000x Speed
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/40 to-teal-600/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/40 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-6 text-center leading-relaxed">
              Direct brain-computer interfaces that enable seamless mind-machine interaction
            </p>
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Real-time
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/40 to-red-600/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/40 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Tech</h3>
            <p className="text-orange-100 mb-6 text-center leading-relaxed">
              Technology that operates across multiple dimensions and realities
            </p>
            <div className="text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Infinite
              </span>
            </div>
          </div>
        </div>
        
        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/40 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demos</h2>
            <p className="text-xl opacity-90">
              Experience our revolutionary technologies firsthand with interactive demonstrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Simulator</h3>
              <p className="text-white/80 mb-6">Experience quantum computing power with our interactive quantum simulator</p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Launch Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold mb-4">Neural Interface</h3>
              <p className="text-white/80 mb-6">Control technology with your thoughts using our neural interface demo</p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Connect Mind
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI Assistant</h3>
              <p className="text-white/80 mb-6">Chat with our conscious AI assistant and experience true artificial intelligence</p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Start Chat
              </button>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">Live Demos Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">Interactive Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold">Revolutionary Technology</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Explore All Technologies
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-xl">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2026;