import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary Tech Showcase 2026",
      description: "Experience groundbreaking technologies that are reshaping our world in 2026. From quantum computing to neural interfaces, discover the innovations that will define tomorrow.",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechShowcase2026",
      features: ["Quantum Computing", "Neural Interfaces", "Synthetic Intelligence", "Quantum Neural Fusion"]
    },
    {
      id: 2,
      title: "Advanced AI Solutions 2026",
      description: "Harness the power of advanced artificial intelligence with our cutting-edge solutions that deliver unprecedented performance, accuracy, and business value.",
      image: "🤖",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/AdvancedAISolutions2026",
      features: ["Autonomous AI Agents", "Predictive Analytics", "Natural Language Processing", "Computer Vision"]
    },
    {
      id: 3,
      title: "Quantum Computing Solutions 2026",
      description: "Experience the power of quantum computing with our breakthrough solutions that solve impossible problems and unlock new possibilities across industries.",
      image: "⚡",
      gradient: "from-cyan-600 to-purple-600",
      link: "/pages/QuantumComputingSolutions2026",
      features: ["Quantum Optimization", "Quantum ML", "Quantum Cryptography", "Quantum Simulation"]
    },
    {
      id: 4,
      title: "Next-Gen AI Revolution 2026",
      description: "Discover the next generation of artificial intelligence that surpasses human capabilities and creates entirely new forms of intelligent systems.",
      image: "🧠",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/NextGenAIRevolution2026",
      features: ["Superintelligent AI", "Quantum AI", "Neural Networks", "Autonomous Systems"]
    },
    {
      id: 5,
      title: "Quantum Computing Revolution 2026",
      description: "Witness the quantum computing revolution that's transforming industries with exponential computational power and breakthrough algorithms.",
      image: "🔮",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/QuantumComputingRevolution2026",
      features: ["Exponential Speed", "Quantum Algorithms", "Secure Communication", "Molecular Simulation"]
    },
    {
      id: 6,
      title: "Neural Interface Revolution 2026",
      description: "Connect your mind to machines with revolutionary neural interface technology that enables thought-controlled computing and enhanced cognitive abilities.",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Brain-Computer Interface", "Thought Control", "Memory Enhancement", "Cognitive Augmentation"]
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🌟 REVOLUTIONARY CONTENT 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our groundbreaking content that showcases the most advanced technologies 
            and innovations that will shape the future of humanity.
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} p-12 rounded-2xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6 animate-bounce">{item.image}</div>
                        <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{item.description}</p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                              <span className="text-sm font-semibold">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={item.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                          <h4 className="text-2xl font-semibold mb-4">Key Features</h4>
                          <ul className="space-y-3">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-lg">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div 
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient} p-8 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="text-6xl mb-4 text-center">{item.image}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
              <p className="text-sm opacity-90 mb-6 text-center">{item.description}</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {item.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                    <span className="text-xs font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href={item.link}
                className="block w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
              >
                Explore →
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Features */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 text-center mb-16">
          <h3 className="text-3xl font-bold mb-6">🎮 Interactive Features</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience our revolutionary content through interactive demonstrations, 
            virtual reality experiences, and real-time simulations.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Interactive Demos</h4>
              <p className="text-sm opacity-90 mb-4">Try our technologies in real-time</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Launch Demo
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-4">🥽</div>
              <h4 className="text-xl font-semibold mb-2">VR Experience</h4>
              <p className="text-sm opacity-90 mb-4">Immerse yourself in the future</p>
              <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Enter VR
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Live Simulation</h4>
              <p className="text-sm opacity-90 mb-4">Watch quantum computing in action</p>
              <button className="bg-white text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Start Simulation
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already exploring the revolutionary technologies 
            that will define the next decade. Start your journey into the future today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;