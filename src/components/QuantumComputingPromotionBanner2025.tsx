import React from 'react';

<<<<<<< HEAD
const QuantumComputingPromotionBanner2025: React.FC = () => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-cyan-500/20 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Left side - Quantum Badge */}
            <div className="flex items-center gap-4">
              <div
                key={currentFeature}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${features[currentFeature].color} text-white font-bold text-sm animate-pulse`}
              >
                QUANTUM REVOLUTION
              </div>
              
              {/* Rotating Icon */}
              <div
                key={`icon-${currentFeature}`}
                className={`p-2 rounded-full bg-gradient-to-r ${features[currentFeature].color}`}
              >
                <features[currentFeature].icon className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Center - Feature Content */}
            <div className="flex-1 text-center px-8">
              <div
                key={`content-${currentFeature}`}
                className="space-y-1"
              >
                <h3 className="text-lg font-bold text-white">
                  {features[currentFeature].title}
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  {features[currentFeature].description}
                </p>
              </div>
            </div>

            {/* Right side - CTA and Close */}
            <div className="flex items-center gap-4">
              <a href="/quantum-computing-showcase-2025">
                <divbutton
                  className={`bg-gradient-to-r ${features[currentFeature].color} hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center gap-2`}
                >
                  <Star className="w-4 h-4" />
                  Explore Quantum
                  <ArrowRight className="w-4 h-4" />
                </divbutton>
              </a>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-purple-500/5 animate-pulse"></div>
        
        {/* Quantum Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
                y: [0-20],
                opacity: [010],
                scale: [0.51.50.5],
              }}
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
=======
const COMPONENT: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Technology Showcase
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience revolutionary technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
            <p className="text-gray-300">Revolutionary technology that pushes the boundaries of what's possible.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Systems</h3>
            <p className="text-gray-300">Cutting-edge systems that revolutionize how we interact with technology.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-white mb-3">Future Vision</h3>
            <p className="text-gray-300">A glimpse into the future of technology and innovation.</p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in discovering the future of technology and innovation.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            Explore Now
          </button>
>>>>>>> origin/merged-prs
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default QuantumComputingPromotionBanner2025;
</div></div>
=======
export default COMPONENT;
>>>>>>> origin/merged-prs
