import React, { useState, useEffect } from 'react';

const RevolutionaryTechCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const techShowcases = [
    {
      id: 1,
      title: "AI Consciousness Revolution",
      description: "Experience AI systems with true consciousness, self-awareness, and emotional intelligence",
      icon: "🧠",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/AdvancedAIConsciousness2025",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Problem Solving"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      description: "Harness the power of quantum mechanics to solve impossible problems in seconds",
      icon: "⚡",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/QuantumComputingBreakthrough2025",
      features: ["Exponential Speed", "Quantum Supremacy", "Unbreakable Encryption"]
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for seamless human-machine interaction",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceFuture",
      features: ["Non-Invasive BCI", "Thought Control", "Memory Enhancement"]
    },
    {
      id: 4,
      title: "Edge AI Computing",
      description: "Intelligent processing at the edge for real-time decision making",
      icon: "🌐",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/EdgeAIandIoT2025",
      features: ["Real-Time Processing", "Low Latency", "Autonomous Systems"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % techShowcases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [techShowcases.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive demonstrations and real-time capabilities
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {techShowcases.map((showcase) => (
                <div key={showcase.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${showcase.gradient} p-12 rounded-2xl`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{showcase.icon}</div>
                        <h3 className="text-4xl font-bold mb-6">{showcase.title}</h3>
                        <p className="text-xl mb-8 opacity-90">{showcase.description}</p>
                        <div className="space-y-3 mb-8">
                          {showcase.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={showcase.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
                        >
                          Explore Technology →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                          <div className="text-6xl mb-4">{showcase.icon}</div>
                          <div className="text-2xl font-bold mb-4">Live Demo</div>
                          <div className="text-lg opacity-90 mb-6">
                            Interactive demonstration available
                          </div>
                          <div className="inline-block bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold">
                            Click to Experience
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {techShowcases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + techShowcases.length) % techShowcases.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % techShowcases.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Access to All Technologies</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {techShowcases.map((showcase) => (
              <a
                key={showcase.id}
                href={showcase.link}
                className={`bg-gradient-to-br ${showcase.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-4xl mb-4">{showcase.icon}</div>
                <h4 className="text-lg font-bold mb-2">{showcase.title}</h4>
                <p className="text-sm opacity-90">{showcase.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechCarousel2025;
</p></p>