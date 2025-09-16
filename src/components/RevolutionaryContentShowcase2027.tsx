import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const revolutionaryContent = [
    {
      title: "Revolutionary AI 2027",
      description: "Experience the future of artificial intelligence with breakthrough technologies that are reshaping reality",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryAI2027",
      features: ["Conscious AI Systems", "Quantum AI Fusion", "Neural Interface AI"]
    },
    {
      title: "Quantum Revolution 2027",
      description: "Enter the quantum era with breakthrough technologies solving impossible problems",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumRevolution2027",
      features: ["Quantum Computing", "Quantum Cryptography", "Quantum Sensors"]
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling seamless human-machine collaboration",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Thought Control", "Neural Enhancement", "Brain-AI Symbiosis"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % revolutionaryContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [revolutionaryContent.length]);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY BREAKTHROUGH • 2027 PREVIEW
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">Revolutionary Technology Showcase</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the future with our groundbreaking new content on revolutionary AI, quantum computing, and neural interfaces
          </p>
        </div>

        {/* Main Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {revolutionaryContent.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.gradient} rounded-2xl p-12 text-white relative overflow-hidden`}>
                    {/* Content Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                      {/* Left Content */}
                      <div>
                        <div className="text-8xl mb-6 animate-bounce">{content.icon}</div>
                        <h3 className="text-4xl font-bold mb-6">{content.title}</h3>
                        <p className="text-xl mb-8 opacity-90">{content.description}</p>
                        
                        <div className="space-y-3 mb-8">
                          {content.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <a 
                          href={content.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:shadow-2xl"
                        >
                          Explore {content.title} →
                        </a>
                      </div>
                      
                      {/* Right Visual */}
                      <div className="text-center">
                        <div className="relative">
                          <div className="w-64 h-64 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-9xl animate-pulse">
                            {content.icon}
                          </div>
                          <div className="absolute inset-0 w-64 h-64 mx-auto border-4 border-white/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
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
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {revolutionaryContent.map((content, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${content.gradient}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{content.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{content.title}</h4>
                <p className="text-sm text-gray-300 mb-4">{content.description.substring(0, 80)}...</p>
                <a 
                  href={content.link}
                  className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm font-semibold"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">Ready to experience the future of technology?</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold">
              Start Your Journey →
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;