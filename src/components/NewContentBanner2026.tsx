import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 'ai-innovation',
      title: '🚀 AI Innovation Hub 2026',
      description: 'Discover revolutionary AI technologies with conscious systems and quantum-enhanced intelligence',
      link: '/pages/AIInnovationHub2026',
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-900/20 to-pink-900/20'
    },
    {
      id: 'quantum-solutions',
      title: '⚡ Quantum Computing Solutions 2026',
      description: 'Harness exponential computational power with quantum optimization and simulation',
      link: '/pages/QuantumComputingSolutions2026',
      gradient: 'from-cyan-600 to-blue-600',
      bgGradient: 'from-cyan-900/20 to-blue-900/20'
    },
    {
      id: 'neural-interface',
      title: '🧬 Neural Interface Revolution 2026',
      description: 'Bridge mind and machine with direct brain-computer interfaces and neural enhancement',
      link: '/pages/NeuralInterfaceRevolution2026',
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'from-emerald-900/20 to-teal-900/20'
    }
  ];

  const features = [
    {
      icon: '🌟',
      title: 'Breakthrough Technology',
      description: 'Cutting-edge innovations that redefine possibilities'
    },
    {
      icon: '⚡',
      title: 'Exponential Performance',
      description: 'Revolutionary speed and efficiency improvements'
    },
    {
      icon: '🔬',
      title: 'Scientific Validation',
      description: 'Peer-reviewed research and clinical trials'
    },
    {
      icon: '🚀',
      title: 'Future-Ready',
      description: 'Technologies that shape tomorrow\'s world'
    }
  ];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-cyan-900/10 to-emerald-900/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-blue-600/5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-600/5 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🚀 NEW: Revolutionary Technology 2026 • BREAKTHROUGH INNOVATIONS
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Experience the Future Today
          </h1>
          <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Discover our most advanced technology solutions featuring AI Innovation, Quantum Computing, 
            and Neural Interfaces that are reshaping industries and human potential.
          </p>
        </div>

        {/* Carousel Slides */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
                    <div className="text-center">
                      <h2 className="text-4xl font-bold mb-4 text-white">{slide.title}</h2>
                      <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">{slide.description}</p>
                      <div className="flex justify-center space-x-4">
                        <Link
                          to={slide.link}
                          className={`bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Now →
                        </Link>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                          Watch Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Quick Access to New Content</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/pages/AIInnovationHub2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center font-semibold"
            >
              <div className="text-3xl mb-2">🧠</div>
              <div>AI Innovation Hub</div>
              <div className="text-sm opacity-90">Conscious AI Systems</div>
            </Link>
            <Link
              to="/pages/QuantumComputingSolutions2026"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center font-semibold"
            >
              <div className="text-3xl mb-2">⚡</div>
              <div>Quantum Computing</div>
              <div className="text-sm opacity-90">Exponential Power</div>
            </Link>
            <Link
              to="/pages/NeuralInterfaceRevolution2026"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center font-semibold"
            >
              <div className="text-3xl mb-2">🧬</div>
              <div>Neural Interface</div>
              <div className="text-sm opacity-90">Mind-Machine Fusion</div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-200">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Ready to Experience the Future?</h3>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators who are already using our revolutionary technologies to transform their businesses and lives.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/pages/ComprehensiveServices2025"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                View All Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentBanner2026;