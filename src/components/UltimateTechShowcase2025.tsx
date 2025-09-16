import React, { useState, useEffect } from 'react';

const UltimateTechShowcase2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Next-Gen Tech Revolution 2025",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenTechRevolution2025",
      features: ["AI Consciousness", "Quantum Computing", "Neural Interfaces"]
    },
    {
      id: 2,
      title: "Ultimate Tech Breakthrough 2027",
      description: "The most advanced technological innovations that will revolutionize human existence",
      icon: "🌟",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/UltimateTechBreakthrough2027",
      features: ["Conscious AI", "Interdimensional Computing", "Cosmic Processing"]
    },
    {
      id: 3,
      title: "Revolutionary AI Solutions",
      description: "Cutting-edge artificial intelligence that transforms every industry",
      icon: "🤖",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/AIRevolution2025",
      features: ["Autonomous Systems", "Machine Learning", "Predictive Analytics"]
    },
    {
      id: 4,
      title: "Quantum Computing Revolution",
      description: "Revolutionary quantum technology solving impossible problems",
      icon: "⚡",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/QuantumComputingBreakthrough",
      features: ["Quantum Processing", "Cryptography", "Molecular Simulation"]
    },
    {
      id: 5,
      title: "Neural Interface Future",
      description: "Direct brain-computer interfaces revolutionizing human-computer interaction",
      icon: "🧬",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/NeuralInterfaceFuture",
      features: ["Brain-Computer Interface", "Thought Control", "Neural Feedback"]
    },
    {
      id: 6,
      title: "Advanced Tech Solutions",
      description: "Comprehensive technology solutions for modern businesses",
      icon: "🔮",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/AdvancedTechSolutions2025",
      features: ["Cloud Computing", "Blockchain", "IoT Solutions"]
    }
  ];

  return (
    <div className={`py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW: Ultimate Technology Showcase 2025
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover our revolutionary technologies that are reshaping industries and transforming the way we live, work, and think
          </p>
        </div>

        {/* Interactive Showcase */}
        <div className="relative">
          {/* Main Display */}
          <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="text-8xl mb-6">{technologies[currentSlide].icon}</div>
                  <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {technologies[currentSlide].title}
                  </h3>
                  <p className="text-xl opacity-90 mb-8">
                    {technologies[currentSlide].description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {technologies[currentSlide].features.map((feature, index) => (
                      <span key={index} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={technologies[currentSlide].link}
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                  >
                    Explore Technology →
                  </a>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl flex items-center justify-center">
                    <div className="text-9xl animate-pulse">
                      {technologies[currentSlide].icon}
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">All Revolutionary Technologies</h3>
            <p className="text-lg text-gray-600">Explore our complete suite of cutting-edge solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={tech.id}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 ${
                  index === currentSlide ? 'border-purple-500' : 'border-gray-200'
                }`}
              >
                <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-center text-gray-900">{tech.title}</h4>
                <p className="text-gray-600 mb-6 text-center">{tech.description}</p>
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {tech.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                <a 
                  href={tech.link}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${tech.gradient} text-white hover:shadow-lg`}
                >
                  Explore Now →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using our revolutionary technologies
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2025;