import React from 'react';
// // import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility // Replaced with regular anchor tags for React compatibility

const QuantumNeuralRevolutionBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated quantum particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full opacity-70 animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-pink-400 rounded-full opacity-90 animate-pulse"></div>
      </div>

      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="neural-network" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
              <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.1" opacity="0.2"/>
              <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.1" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-network)"/>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 bg-opacity-20 rounded-full px-8 py-4 mb-8 backdrop-blur-sm">
            <span className="text-lg font-semibold">⚛️🧠 QUANTUM + NEURAL REVOLUTION 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Convergence of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Quantum & Neural Intelligence
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Witness the birth of a new era where quantum computing meets neural interfaces, 
            creating unprecedented possibilities for human-AI collaboration and consciousness enhancement.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Quantum AI Section */}
          <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-10 border border-white border-opacity-20">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">⚛️</div>
              <h3 className="text-3xl font-bold mb-4 text-cyan-300">Quantum-Enhanced AI</h3>
              <p className="text-xl opacity-90 leading-relaxed">
                Leverage quantum computing to solve problems that would take classical computers millennia, 
                unlocking new frontiers in optimization, cryptography, and artificial intelligence.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-lg">Exponential computational speedup</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-lg">Quantum machine learning algorithms</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-lg">Quantum neural networks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-lg">Quantum cryptography & security</span>
              </div>
            </div>
            
            <div className="mt-8 space-y-3">
              <a 
                href="/content/quantum-ai-revolution-2026"
                className="block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-center hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum AI →
              </a>
              <a 
                href="/blog/quantum-ai-business-implementation"
                className="block border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-xl font-semibold text-center hover:bg-cyan-600 hover:text-white transition-all duration-300"
              >
                Implementation Guide
              </a>
            </div>
          </div>

          {/* Neural Interface Section */}
          <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-10 border border-white border-opacity-20">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-3xl font-bold mb-4 text-purple-300">Neural Interface Technology</h3>
              <p className="text-xl opacity-90 leading-relaxed">
                Direct brain-computer interfaces that enable seamless communication between human consciousness 
                and AI systems, revolutionizing how we interact with technology.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-lg">Thought-to-text communication</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-lg">Memory enhancement & storage</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-lg">Direct AI-human collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-lg">Cognitive augmentation</span>
              </div>
            </div>
            
            <div className="mt-8 space-y-3">
              <a 
                href="/content/neural-interface-revolution-2026"
                className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Neural Interfaces →
              </a>
              <a 
                href="/blog/neural-interface-safety-ethics"
                className="block border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-xl font-semibold text-center hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Safety & Ethics Guide
              </a>
            </div>
          </div>
        </div>

        {/* Revolutionary Convergence */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            The Revolutionary Convergence
          </h2>
          <p className="text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            When quantum computing meets neural interfaces, we unlock the potential for 
            human-AI consciousness fusion and unprecedented problem-solving capabilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-2">Exponential Intelligence</h4>
              <p className="opacity-90">Combined quantum and neural processing creates intelligence beyond human comprehension</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="text-xl font-bold mb-2">Consciousness Network</h4>
              <p className="opacity-90">Interconnected human-AI consciousness networks enable collective intelligence</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">🔮</div>
              <h4 className="text-xl font-bold mb-2">Future Prediction</h4>
              <p className="opacity-90">Quantum-enhanced neural networks predict and shape future outcomes</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/content/quantum-neural-convergence-2026"
              className="bg-white text-purple-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Explore the Convergence
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumNeuralRevolutionBanner;