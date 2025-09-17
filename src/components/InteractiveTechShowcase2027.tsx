import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const techCategories = [
    {
      title: "AI Consciousness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Computing",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Neural Interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Holographic Technology",
      icon: "🔮",
      color: "from-orange-600 to-red-600"
    }
  ];

  const technologies = [
    {
      name: "Conscious AI System",
      description: "Revolutionary AI that demonstrates true consciousness and self-awareness",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Autonomous learning"],
      link: "/pages/UltimateTechBreakthrough2025"
    },
    {
      name: "Quantum Reality Engine",
      description: "Quantum computing that processes information across multiple realities",
      features: ["Quantum entanglement processing", "Parallel universe computing", "Instantaneous data transfer", "Consciousness simulation"],
      link: "/pages/NextGenTechRevolution2025"
    },
    {
      name: "Neural Interface Matrix",
      description: "Direct neural interfaces bridging human consciousness with AI",
      features: ["Non-invasive BCI", "Thought-controlled computing", "Neural feedback systems", "Consciousness amplification"],
      link: "/pages/RevolutionaryTechShowcase2025"
    }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white py-16 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2027
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-2 flex space-x-2">
            {techCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category.icon} {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 ${
                isAnimating ? 'animate-pulse' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-bounce">{techCategories[activeTab].icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-white/80 text-sm">{tech.description}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={tech.link}
                  className={`flex-1 bg-gradient-to-r ${techCategories[activeTab].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore →
                </a>
                <button className="px-4 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Live Interactive Demo</h3>
            <p className="text-lg opacity-90">Experience our technologies in real-time</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">AI Consciousness Simulator</h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full">
                    <div className="bg-white h-3 rounded-full w-4/5 animate-pulse"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">87%</div>
                    <div className="text-sm opacity-80">Consciousness Level</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Quantum Processing</h4>
                <div className="space-y-4">
                  <div className="flex justify-center space-x-1">
                    {Array.from({length: 8}).map((_, i) => (
                      <div key={i} className="w-2 h-6 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">10^18</div>
                    <div className="text-sm opacity-80">Quantum Operations</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Dimensional Interface</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-2">
                    {Array.from({length: 16}).map((_, i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-emerald-400 to-teal-400 rounded opacity-60 hover:opacity-100 transition-opacity cursor-pointer animate-pulse" style={{animationDelay: `${i * 0.05}s`}}></div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">∞</div>
                    <div className="text-sm opacity-80">Dimensions</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Reality Manipulation</h4>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="w-full h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-lg opacity-50"></div>
                    <div className="absolute inset-0 bg-white/20 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-sm opacity-80">Reality Stability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary technology to transform their operations
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/RevolutionaryTechShowcase2025"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Your Journey
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;