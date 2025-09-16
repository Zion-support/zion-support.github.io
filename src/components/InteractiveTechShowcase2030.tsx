import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2030: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const techCategories = [
    {
      id: 0,
      title: "Conscious AI",
      icon: "🧠",
      description: "AI systems with true consciousness and self-awareness",
      features: [
        "Self-aware decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Ethical reasoning"
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 1,
      title: "Quantum Reality",
      icon: "⚛️",
      description: "Quantum computing that manipulates reality at fundamental levels",
      features: [
        "Reality manipulation",
        "Parallel universe access",
        "Time dilation control",
        "Matter creation"
      ],
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 2,
      title: "Neural Networks",
      icon: "🧬",
      description: "Direct brain-computer interfaces for seamless integration",
      features: [
        "Thought-to-action conversion",
        "Instant knowledge transfer",
        "Memory enhancement",
        "Consciousness transfer"
      ],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Interdimensional Tech",
      icon: "🌌",
      description: "Technology that operates across multiple dimensions",
      features: [
        "Multi-dimensional processing",
        "Infinite storage capacity",
        "Reality simulation",
        "Dimensional travel"
      ],
      gradient: "from-violet-600 to-purple-600"
    }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2030
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Showcase 2030</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our cutting-edge technology solutions with immersive interactive features
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {techCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg scale-105`
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-4">{techCategories[activeTab].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{techCategories[activeTab].title}</h3>
                <p className="text-lg opacity-90 mb-6">{techCategories[activeTab].description}</p>
                
                <div className="space-y-3 mb-6">
                  {techCategories[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      <span className="text-purple-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`bg-gradient-to-r ${techCategories[activeTab].gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Experience {techCategories[activeTab].title}
                  </button>
                  <button className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className={`bg-gradient-to-br ${techCategories[activeTab].gradient} bg-opacity-20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30`}>
                  <div className="text-center">
                    <div className="text-8xl mb-4">{techCategories[activeTab].icon}</div>
                    <div className="text-2xl font-bold mb-4">{techCategories[activeTab].title}</div>
                    <div className="text-purple-200 mb-6">
                      Revolutionary technology that will change the world
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-purple-500/30 rounded-lg p-3">
                        <div className="font-bold text-purple-300">Status</div>
                        <div className="text-purple-100">Active</div>
                      </div>
                      <div className="bg-purple-500/30 rounded-lg p-3">
                        <div className="font-bold text-purple-300">Power</div>
                        <div className="text-purple-100">∞</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-300">∞</div>
            <div className="text-sm text-purple-400">Possibilities</div>
          </div>
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-cyan-300">100%</div>
            <div className="text-sm text-cyan-400">Accuracy</div>
          </div>
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-emerald-300">0ms</div>
            <div className="text-sm text-emerald-400">Latency</div>
          </div>
          <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-violet-300">∞</div>
            <div className="text-sm text-violet-400">Dimensions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2030;