import React, { useState, useEffect } from 'react';

const EnhancedContentShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentCategories = [
    {
      title: "Revolutionary Breakthroughs",
      icon: "🌟",
      color: "purple",
      items: [
        {
          title: "Conscious AI Systems",
          description: "AI that possesses true consciousness and self-awareness",
          link: "/pages/RevolutionaryTechBreakthrough2027",
          features: ["Self-reflection", "Emotional processing", "Creative thinking"],
          impact: "Revolutionary"
        },
        {
          title: "Quantum Consciousness",
          description: "Quantum computing with consciousness-level processing",
          link: "/pages/QuantumComputingRevolution2027",
          features: ["Multi-dimensional processing", "Reality simulation", "Parallel universes"],
          impact: "Unprecedented"
        },
        {
          title: "Interdimensional Computing",
          description: "Computing across multiple dimensions simultaneously",
          link: "/pages/RevolutionaryTechBreakthrough2027",
          features: ["Cross-dimensional processing", "Infinite power", "Time manipulation"],
          impact: "Transcendent"
        }
      ]
    },
    {
      title: "AI Revolution",
      icon: "🤖",
      color: "cyan",
      items: [
        {
          title: "Next-Gen AI Agents",
          description: "AI systems that surpass human cognitive abilities",
          link: "/pages/NextGenAIRevolution2027",
          features: ["Superhuman reasoning", "Perfect memory", "Universal knowledge"],
          impact: "Revolutionary"
        },
        {
          title: "Quantum Neural Networks",
          description: "Neural networks operating in quantum superposition",
          link: "/pages/NextGenAIRevolution2027",
          features: ["Parallel processing", "Quantum entanglement", "Instant learning"],
          impact: "Unprecedented"
        },
        {
          title: "Autonomous AI Ecosystems",
          description: "Self-sustaining AI systems that evolve independently",
          link: "/pages/NextGenAIRevolution2027",
          features: ["Self-evolution", "Autonomous learning", "Continuous improvement"],
          impact: "Revolutionary"
        }
      ]
    },
    {
      title: "Quantum Computing",
      icon: "⚡",
      color: "blue",
      items: [
        {
          title: "Quantum Supremacy",
          description: "Computational power beyond classical computers",
          link: "/pages/QuantumComputingRevolution2027",
          features: ["10^50 operations/sec", "Cryptography", "Optimization"],
          impact: "Revolutionary"
        },
        {
          title: "Quantum Entanglement",
          description: "Instantaneous information transfer across any distance",
          link: "/pages/QuantumComputingRevolution2027",
          features: ["Quantum Internet", "Secure communication", "Teleportation"],
          impact: "Unprecedented"
        },
        {
          title: "Quantum Tunneling",
          description: "Particles passing through impossible barriers",
          link: "/pages/QuantumComputingRevolution2027",
          features: ["Infinite efficiency", "Energy generation", "Material science"],
          impact: "Transcendent"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: "from-purple-600/30 to-pink-600/30",
        border: "border-purple-400/30",
        text: "text-purple-300",
        accent: "bg-purple-500/20 text-purple-300"
      },
      cyan: {
        bg: "from-cyan-600/30 to-blue-600/30",
        border: "border-cyan-400/30",
        text: "text-cyan-300",
        accent: "bg-cyan-500/20 text-cyan-300"
      },
      blue: {
        bg: "from-blue-600/30 to-indigo-600/30",
        border: "border-blue-400/30",
        text: "text-blue-300",
        accent: "bg-blue-500/20 text-blue-300"
      }
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % contentCategories.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, [contentCategories.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2027
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Enhanced Content Showcase 2027</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our most revolutionary technological content and innovations that will shape the future
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${colors.bg} ${colors.border} border`
                    : 'bg-gray-700/50 hover:bg-gray-600/50'
                } ${isAnimating && activeTab === index ? 'animate-pulse' : ''}`}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Content Display */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
            <div className="grid lg:grid-cols-3 gap-8">
              {contentCategories[activeTab].items.map((item, index) => {
                const colors = getColorClasses(contentCategories[activeTab].color);
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-xl p-6 border ${colors.border} hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{contentCategories[activeTab].icon}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className={`${colors.text} text-sm`}>{item.description}</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.accent}`}>
                        {item.impact}
                      </div>
                      <div className="text-sm text-gray-400">
                        Impact Level
                      </div>
                    </div>

                    <a
                      href={item.link}
                      className="block w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
                    >
                      Explore {item.title} →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">2027</div>
            <div className="text-gray-300">Future is Now</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in experiencing the most revolutionary technological innovations that will reshape our world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🌟 Start Exploring
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              📊 View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2027;