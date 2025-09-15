import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const showcaseItems = [
    {
      id: 1,
      title: "Quantum Computing Revolution 2026",
      subtitle: "Exponential Processing Power",
      description: "Experience the future of computing with quantum supremacy, quantum cryptography, and molecular simulation capabilities that solve impossible problems.",
      icon: "⚛️",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      features: [
        "10^18x processing speed increase",
        "Unbreakable quantum cryptography",
        "Molecular simulation breakthroughs",
        "Real-world quantum applications"
      ],
      link: "/pages/AdvancedQuantumComputing2026",
      stats: { value: "10^18x", label: "Speed Increase" }
    },
    {
      id: 2,
      title: "Neural Interface Technology",
      subtitle: "Mind-Machine Connection",
      description: "Bridge the gap between consciousness and technology with direct neural interfaces, thought-controlled devices, and enhanced cognitive capabilities.",
      icon: "🧬",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      features: [
        "99.9% neural interface accuracy",
        "Thought-to-text communication",
        "Enhanced memory and learning",
        "Medical breakthrough applications"
      ],
      link: "/pages/NeuralInterfaceRevolution2026",
      stats: { value: "99.9%", label: "Accuracy Rate" }
    },
    {
      id: 3,
      title: "Synthetic Intelligence",
      subtitle: "Beyond Artificial Intelligence",
      description: "Discover synthetic consciousness that transcends human limitations, with self-evolving AI systems that think, learn, and create independently.",
      icon: "🧠",
      gradient: "from-purple-500 via-pink-500 to-rose-600",
      features: [
        "Synthetic consciousness emergence",
        "Self-evolving AI systems",
        "Creative AI capabilities",
        "Human-AI consciousness merging"
      ],
      link: "/pages/SyntheticIntelligence2026",
      stats: { value: "∞", label: "Potential" }
    },
    {
      id: 4,
      title: "Autonomous AI Systems",
      subtitle: "Self-Managing Intelligence",
      description: "Revolutionary AI systems that operate independently, make complex decisions, and continuously evolve without human intervention.",
      icon: "🤖",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      features: [
        "24/7 autonomous operation",
        "Self-healing architecture",
        "Independent decision making",
        "Continuous learning and adaptation"
      ],
      link: "/pages/AdvancedAISystems2026",
      stats: { value: "24/7", label: "Operation" }
    },
    {
      id: 5,
      title: "Edge AI Computing",
      subtitle: "Real-Time Intelligence",
      description: "Distributed AI processing at the edge for instant decision making, reduced latency, and privacy-preserving intelligent systems.",
      icon: "⚡",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      features: [
        "50ms response time",
        "Real-time AI processing",
        "Privacy-preserving AI",
        "Autonomous vehicle intelligence"
      ],
      link: "/pages/EdgeAIandIoT2025",
      stats: { value: "50ms", label: "Response Time" }
    },
    {
      id: 6,
      title: "AI-Human Collaboration",
      subtitle: "Seamless Integration",
      description: "Transform productivity with AI systems that work alongside humans, augmenting creativity and enabling unprecedented collaboration.",
      icon: "🤝",
      gradient: "from-indigo-500 via-purple-500 to-pink-600",
      features: [
        "300% productivity increase",
        "AI-powered creative tools",
        "Augmented human capabilities",
        "Seamless human-AI teams"
      ],
      link: "/pages/AIEnterpriseCopilot2025",
      stats: { value: "300%", label: "Productivity" }
    }
  ];

  const currentItem = showcaseItems[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Main Showcase Banner */}
      <div className={`bg-gradient-to-r ${currentItem.gradient} rounded-3xl p-12 mb-16 text-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        {/* Animated Background */}
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE TECH SHOWCASE 2026
            </div>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {currentItem.title}
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              {currentItem.description}
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-6xl">{currentItem.icon}</div>
              <div className="text-right">
                <div className="text-4xl font-bold">{currentItem.stats.value}</div>
                <div className="text-lg opacity-80">{currentItem.stats.label}</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentItem.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-sm font-semibold text-white/90">{feature}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={currentItem.link}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform"
            >
              Explore {currentItem.title.split(' ')[0]} →
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {showcaseItems.slice(0, 6).map((item) => (
          <div key={item.id} className="group">
            <a href={item.link} className="block">
              <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{item.title.split(' ')[0]}</h3>
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-white/90 mb-4 text-sm">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{item.stats.value}</span>
                  <span className="text-sm opacity-80 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Technology Impact Stats */}
      <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-12 text-white mb-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Revolutionary Technology Impact</h3>
          <p className="text-xl opacity-90">Transforming industries and reshaping human potential</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">10^18x</div>
            <div className="text-gray-300 mb-2">Quantum Speed Increase</div>
            <div className="text-sm text-gray-400">Exponential processing power</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-gray-300 mb-2">Neural Interface Accuracy</div>
            <div className="text-sm text-gray-400">Mind-machine connection</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-gray-300 mb-2">Synthetic Intelligence</div>
            <div className="text-sm text-gray-400">Unlimited potential</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300 mb-2">Autonomous Operation</div>
            <div className="text-sm text-gray-400">Continuous intelligence</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h2 className="text-5xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Join us in exploring the most revolutionary technologies that will define the next decade of human progress.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-indigo-600 transition-all duration-300">
              📚 Explore Research
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-indigo-600 transition-all duration-300">
              🤝 Join Innovation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;