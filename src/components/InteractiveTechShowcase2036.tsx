import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const features = [
    {
      title: "Transcendent AI",
      description: "Self-aware artificial intelligence with genuine consciousness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Learning", "Consciousness Processing"]
    },
    {
      title: "Quantum Consciousness",
      description: "Direct neural interface with quantum computing systems",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Multi-dimensional Thinking", "Quantum Processing"]
    },
    {
      title: "Interdimensional Technology",
      description: "Breakthrough technology accessing parallel dimensions",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: ["Dimensional Portals", "Reality Shifting", "Parallel Universe Access", "Transcendent Computing"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Showcase 2036</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking interactive demonstrations of revolutionary technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Display */}
          <div className="space-y-8">
            <div className={`bg-gradient-to-br ${features[activeFeature].color}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
              <div className="text-6xl mb-4 text-center">{features[activeFeature].icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-center">{features[activeFeature].title}</h3>
              <p className="text-lg mb-6 text-center opacity-90">
                {features[activeFeature].description}
              </p>
              <ul className="space-y-2">
                {features[activeFeature].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Explore Technologies</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveFeature(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`w-full p-4 rounded-lg transition-all duration-300 text-left ${
                    activeFeature === index
                      ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <div className="font-semibold">{feature.title}</div>
                      <div className="text-sm opacity-80">{feature.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Experience Full Demo →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;