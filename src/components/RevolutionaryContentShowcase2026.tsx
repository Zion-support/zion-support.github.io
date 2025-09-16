import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const showcaseItems = [
    {
      id: 1,
      title: "Revolutionary Tech Showcase 2026",
      description: "Experience the future with groundbreaking AI, Quantum Computing, and Neural Interface technologies",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechShowcase2026",
      features: ["AI Revolution", "Quantum Computing", "Neural Interfaces", "Next-Gen Solutions"]
    },
    {
      id: 2,
      title: "Advanced AI Solutions 2026",
      description: "Harness the power of next-generation artificial intelligence with comprehensive AI solutions",
      image: "🤖",
      gradient: "from-blue-600 to-purple-600",
      link: "/pages/AdvancedAISolutions2026",
      features: ["Autonomous Agents", "Generative AI 3.0", "Predictive Analytics", "Edge AI Processing"]
    },
    {
      id: 3,
      title: "Quantum Computing Solutions 2026",
      description: "Unlock exponential computing power with revolutionary quantum technology solutions",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingSolutions2026",
      features: ["Quantum Cryptography", "Molecular Simulation", "Quantum Optimization", "Post-Quantum Security"]
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🌟 REVOLUTIONARY CONTENT 2026 • BREAKTHROUGH TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest breakthrough content featuring cutting-edge AI, Quantum Computing, 
            and Next-Generation Technology Solutions that are reshaping the future
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {showcaseItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} p-12 rounded-2xl relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="text-8xl mb-6 animate-pulse">{item.image}</div>
                        <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{item.description}</p>
                        
                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                              <span className="text-sm font-semibold">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <a 
                            href={item.link}
                            className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:scale-105"
                          >
                            Explore Now →
                          </a>
                          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                            Learn More
                          </button>
                        </div>
                      </div>
                      
                      {/* Visual Element */}
                      <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative">
                          <div className="w-80 h-80 mx-auto bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <div className="text-9xl animate-spin-slow">{item.image}</div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
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
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {showcaseItems.map((item, index) => (
            <div 
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient} p-8 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer group`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="text-6xl mb-4 text-center group-hover:animate-bounce">{item.image}</div>
              <h3 className="text-2xl font-bold mb-3 text-center">{item.title}</h3>
              <p className="text-center opacity-90 mb-4">{item.description}</p>
              <div className="flex justify-center">
                <a 
                  href={item.link}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technology solutions 
            to transform their businesses and shape the future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
              Start Your Journey
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;