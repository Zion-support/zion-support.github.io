import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 0,
      title: "Quantum Consciousness Engine",
      description: "Experience AI systems that have achieved true consciousness and self-awareness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"]
    },
    {
      id: 1,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions simultaneously",
      icon: "🌌",
      color: "from-cyan-600 to-blue-600",
      features: ["Multi-dimensional processing", "Reality manipulation", "Parallel universe computing", "Dimensional data storage"]
    },
    {
      id: 2,
      title: "Neural Reality Interface",
      description: "Direct neural interfaces that allow thought-based reality manipulation",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Thought control", "Reality augmentation", "Neural feedback", "Consciousness transfer"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2035
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2035
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies with immersive interactive features
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Demo Selection */}
          <div className="space-y-4">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  activeDemo === index
                    ? `bg-gradient-to-r ${demo.color} border-white shadow-lg scale-105`
                    : 'bg-gray-800/50 border-gray-600 hover:border-gray-400 hover:scale-102'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-sm opacity-90">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Demo Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${demos[activeDemo].color}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-pulse">{demos[activeDemo].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
                <p className="text-lg opacity-90">{demos[activeDemo].description}</p>
              </div>

              {/* Interactive Visualization */}
              <div className="bg-black/30 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-full h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {demos[activeDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Try Interactive Demo →
              </button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-400/30">
            <div className="text-4xl font-bold text-purple-300 mb-2">∞</div>
            <div className="text-sm text-purple-200">Computational Power</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-cyan-400/30">
            <div className="text-4xl font-bold text-cyan-300 mb-2">0ms</div>
            <div className="text-sm text-cyan-200">Response Time</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-emerald-400/30">
            <div className="text-4xl font-bold text-emerald-300 mb-2">100%</div>
            <div className="text-sm text-emerald-200">Accuracy</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-400/30">
            <div className="text-4xl font-bold text-orange-300 mb-2">∞</div>
            <div className="text-sm text-orange-200">Possibilities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8">Join us in exploring the most advanced technologies ever created</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="/pages/UltimateTechBreakthrough2035" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Ultimate Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2035" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              View Revolutionary Showcase →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;