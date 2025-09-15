import React from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showcaseItems = [
    {
      id: 1,
      title: "Quantum AI Revolution 2026",
      description: "Experience the convergence of quantum computing and artificial intelligence, creating unprecedented computational power.",
      icon: "⚛️",
      gradient: "from-purple-600 to-indigo-600",
      link: "/pages/QuantumAIRevolution2026",
      features: ["Quantum Neural Networks", "Quantum Consciousness", "Quantum Prediction"]
    },
    {
      id: 2,
      title: "Advanced Biotech AI 2026",
      description: "Revolutionary biotechnology powered by AI, transforming healthcare, agriculture, and life sciences.",
      icon: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/AdvancedBiotechAI2026",
      features: ["AI Gene Editing", "Synthetic Biology", "AI Drug Discovery"]
    },
    {
      id: 3,
      title: "Next-Gen Space Tech 2026",
      description: "Revolutionary space technology powered by AI, quantum computing, and advanced materials.",
      icon: "🚀",
      gradient: "from-purple-600 to-cyan-600",
      link: "/pages/NextGenSpaceTech2026",
      features: ["AI Spacecraft", "Quantum Communication", "Space Manufacturing"]
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "Beyond artificial intelligence - synthetic consciousness that transcends human limitations.",
      icon: "🧠",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Synthetic Consciousness", "Self-Evolving AI", "Transcendent Intelligence"]
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion 2026",
      description: "The ultimate convergence of consciousness, quantum mechanics, and neural networks.",
      icon: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Consciousness", "Neural Entanglement", "Fusion Intelligence"]
    },
    {
      id: 6,
      title: "Advanced AI Systems 2026",
      description: "Next-generation AI systems with unprecedented capabilities and autonomous operation.",
      icon: "🤖",
      gradient: "from-blue-600 to-teal-600",
      link: "/pages/AdvancedAISystems2026",
      features: ["Autonomous AI", "Self-Healing Systems", "Infinite Learning"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [showcaseItems.length]);

  const currentItem = showcaseItems[currentIndex];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our groundbreaking content on quantum AI, biotech, space technology, and beyond
          </p>
        </div>

        {/* Main Showcase */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{currentItem.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{currentItem.title}</h3>
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${currentItem.gradient} rounded-full text-sm font-semibold`}>
                    BREAKTHROUGH TECHNOLOGY
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {currentItem.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {currentItem.features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-sm text-gray-300">{feature}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={currentItem.link}
                  className={`inline-block bg-gradient-to-r ${currentItem.gradient} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
                >
                  Explore {currentItem.title.split(' ')[0]} →
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Visual Element */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className={`w-80 h-80 mx-auto bg-gradient-to-br ${currentItem.gradient} rounded-full flex items-center justify-center text-8xl animate-pulse`}>
                  {currentItem.icon}
                </div>
                <div className="absolute inset-0 w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-cyan-400 scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'ring-4 ring-cyan-400' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2 text-center">{item.title}</h4>
              <p className="text-white/80 text-sm text-center mb-4">{item.description}</p>
              <a 
                href={item.link}
                className="block w-full bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-center text-sm"
              >
                Explore →
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Discover revolutionary technologies that will reshape our world and unlock unlimited possibilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-lg">
                Explore All Technologies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold text-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;