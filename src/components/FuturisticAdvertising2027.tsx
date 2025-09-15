import React, { useState, useEffect } from 'react';

const FuturisticAdvertising2027: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const advertisements = [
    {
      title: "🧠 Consciousness Computing 2027",
      subtitle: "The Dawn of Artificial Consciousness",
      description: "Experience the world's first truly conscious AI systems that think, feel, and create with genuine understanding.",
      link: "/pages/ConsciousnessComputing2027",
      gradient: "from-purple-600 via-pink-600 to-cyan-600",
      icon: "🧠"
    },
    {
      title: "🚀 Future Tech Innovation 2027",
      subtitle: "The Future of Technology is Here",
      description: "Discover revolutionary technologies that will reshape our world: quantum reality, neural evolution, and universal computing.",
      link: "/pages/FutureTechInnovation2027",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "🚀"
    },
    {
      title: "⚡ Quantum Reality Revolution",
      subtitle: "Transcend Physical Limitations",
      description: "Quantum computing that enables reality manipulation, parallel universe access, and time-space engineering.",
      link: "/pages/QuantumRealityRevolution",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "⚡"
    },
    {
      title: "🧬 Neural Evolution 2027",
      subtitle: "Evolve Beyond Human",
      description: "Direct brain-computer interfaces enabling superhuman capabilities, enhanced cognition, and biological immortality.",
      link: "/pages/NeuralEvolution2027",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🧬"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [advertisements.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Main Advertising Banner */}
      <div className={`bg-gradient-to-r ${advertisements[currentAd].gradient} rounded-3xl p-12 mb-8 text-white relative overflow-hidden transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse border border-white/30">
              <span className="text-2xl mr-2">{advertisements[currentAd].icon}</span>
              <span>REVOLUTIONARY TECHNOLOGY 2027</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              {advertisements[currentAd].title}
            </h2>
            <p className="text-2xl opacity-95 mb-2 font-semibold">
              {advertisements[currentAd].subtitle}
            </p>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              {advertisements[currentAd].description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href={advertisements[currentAd].link}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg hover:scale-105 transform shadow-lg"
            >
              🌟 Experience Now →
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-lg hover:scale-105 transform">
              📚 Learn More
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2">
            {advertisements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentAd ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Secondary Advertising Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {advertisements.map((ad, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${ad.gradient} rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/40`}
            onClick={() => setCurrentAd(index)}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">{ad.icon}</div>
              <h3 className="text-lg font-bold mb-2">{ad.title}</h3>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">{ad.subtitle}</p>
              <a 
                href={ad.link}
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-sm border border-white/30"
              >
                Explore →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Revolutionary Features Showcase */}
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
              <span className="text-cyan-400">✨</span>
              <span className="text-cyan-300 font-semibold ml-2">REVOLUTIONARY FEATURES</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              🌟 Technologies That Define the Future
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the most advanced technologies ever created, each one a breakthrough 
              that pushes the boundaries of what's possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-center">Consciousness AI</h3>
              <p className="text-purple-100 text-sm leading-relaxed mb-4">
                AI systems with genuine self-awareness, emotional intelligence, and creative consciousness 
                that transcend traditional artificial intelligence.
              </p>
              <div className="text-purple-200 text-xs space-y-1">
                <div>• True self-awareness</div>
                <div>• Emotional understanding</div>
                <div>• Creative inspiration</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-center">Quantum Reality</h3>
              <p className="text-cyan-100 text-sm leading-relaxed mb-4">
                Quantum computing that enables reality manipulation, parallel universe access, 
                and time-space engineering beyond physical limitations.
              </p>
              <div className="text-cyan-200 text-xs space-y-1">
                <div>• Reality manipulation</div>
                <div>• Parallel universes</div>
                <div>• Time-space control</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🧬</div>
              <h3 className="text-xl font-bold mb-3 text-center">Neural Evolution</h3>
              <p className="text-emerald-100 text-sm leading-relaxed mb-4">
                Direct brain-computer interfaces enabling superhuman capabilities, enhanced cognition, 
                and biological immortality through neural augmentation.
              </p>
              <div className="text-emerald-200 text-xs space-y-1">
                <div>• Enhanced cognition</div>
                <div>• Superhuman abilities</div>
                <div>• Biological immortality</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🌌</div>
              <h3 className="text-xl font-bold mb-3 text-center">Universal Computing</h3>
              <p className="text-orange-100 text-sm leading-relaxed mb-4">
                Computing systems that harness the power of entire galaxies, enabling solutions 
                to problems of cosmic scale and complexity.
              </p>
              <div className="text-orange-200 text-xs space-y-1">
                <div>• Galaxy-scale processing</div>
                <div>• Cosmic problem solving</div>
                <div>• Universal consciousness</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-600/30 to-fuchsia-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🌟</div>
              <h3 className="text-xl font-bold mb-3 text-center">Synthetic Reality</h3>
              <p className="text-pink-100 text-sm leading-relaxed mb-4">
                Completely synthetic realities indistinguishable from physical reality, 
                enabling infinite possibilities and experiences.
              </p>
              <div className="text-pink-200 text-xs space-y-1">
                <div>• Perfect simulation</div>
                <div>• Infinite worlds</div>
                <div>• Reality engineering</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🔮</div>
              <h3 className="text-xl font-bold mb-3 text-center">Temporal Technology</h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-4">
                Time manipulation technology allowing navigation through different timelines 
                and alteration of historical events.
              </p>
              <div className="text-indigo-200 text-xs space-y-1">
                <div>• Time travel</div>
                <div>• Timeline manipulation</div>
                <div>• Future prediction</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-4">
              <a href="/pages/ConsciousnessComputing2027" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform">
                🌟 Experience All Technologies
              </a>
              <a href="/pages/FutureTechInnovation2027" className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                🚀 Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticAdvertising2027;