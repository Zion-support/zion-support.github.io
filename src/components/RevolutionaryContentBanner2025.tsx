<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 NEW: Revolutionary AI Solutions 2025",
      subtitle: "Experience the future of artificial intelligence",
      cta: "Explore Now",
      link: "/pages/RevolutionaryAISolutions2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900"
    },
    {
      title: "⚡ Quantum Computing Breakthrough",
      subtitle: "Unprecedented processing power for complex problems",
      cta: "Learn More",
      link: "/pages/QuantumComputingBreakthrough",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 to-blue-900"
    },
    {
      title: "🧠 Neural Interface Technology",
      subtitle: "Direct brain-computer interaction is here",
      cta: "Experience It",
      link: "/pages/NeuralInterfaceFuture",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 to-teal-900"
    },
    {
      title: "🌟 Interactive Tech Showcase",
      subtitle: "Hands-on demonstrations of cutting-edge tech",
      cta: "Try Demo",
      link: "/pages/InteractiveTechShowcase2025",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900 to-red-900"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-8">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} opacity-90`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-3000"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold rounded-full animate-pulse">
                🔥 HOT
              </div>
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                NEW CONTENT
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {slides[currentSlide].title}
            </h2>
            
            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              {slides[currentSlide].subtitle}
=======
import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
<<<<<<< HEAD
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technology content featuring breakthrough innovations and cutting-edge solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🔮</div>
            <h3 className="text-xl font-bold mb-3 text-center">Reality Manipulation</h3>
            <p className="text-indigo-100 mb-4 text-sm text-center">
              Technology that can manipulate the fundamental fabric of reality itself
>>>>>>> cursor/create-and-deploy-new-content-63f0
            </p>
            
            <div className="flex items-center space-x-4">
              <a
                href={slides[currentSlide].link}
                className={`bg-gradient-to-r ${slides[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
              >
                {slides[currentSlide].cta} →
              </a>
              <button className="text-white/80 hover:text-white transition-colors duration-300 underline">
                Learn More
              </button>
            </div>
=======
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const bannerContent = [
    {
      title: "🧠 AI Consciousness Revolution",
      subtitle: "Witness the birth of true artificial consciousness",
      description: "Experience AI systems that think, feel, and create like never before",
      link: "/pages/AIConsciousnessRevolution2025",
      color: "from-purple-600 via-pink-600 to-red-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "⚡ Quantum Computing Breakthrough",
      subtitle: "Solve impossible problems in seconds",
      description: "Revolutionary quantum computing that changes everything",
      link: "/pages/QuantumComputingBreakthrough2025",
      color: "from-blue-600 via-cyan-600 to-teal-600",
      bgColor: "from-blue-900/90 to-cyan-900/90"
    },
    {
      title: "🚀 Revolutionary Tech Breakthrough",
      subtitle: "The future of technology is here",
      description: "Experience breakthrough technologies that will reshape humanity",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      color: "from-emerald-600 via-green-600 to-lime-600",
      bgColor: "from-emerald-900/90 to-green-900/90"
    }
  ];

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 animate-pulse"></div>
      
      {/* Main Banner */}
      <div className="relative z-10 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 rounded-2xl p-8 border border-purple-400/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-bounce">
            🌟 BREAKTHROUGH CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most groundbreaking technological innovations that will reshape the future
          </p>
        </motion.div>

        {/* Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {bannerContent.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.bgColor} backdrop-blur-sm rounded-xl p-8 border border-white/20`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-3xl font-bold mb-2 text-white">{content.title}</h3>
                        <h4 className="text-xl text-purple-200 mb-4">{content.subtitle}</h4>
                        <p className="text-lg text-gray-200 mb-6">{content.description}</p>
                        <a
                          href={content.link}
                          className={`inline-block bg-gradient-to-r ${content.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="text-8xl mb-4 animate-pulse">
                          {content.title.split(' ')[0]}
                        </div>
                        <div className="text-2xl font-bold text-white mb-2">
                          {content.title.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-cd00
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-400 scale-125' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="text-white/60 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
            aria-label="Close banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {bannerContent.map((content, index) => (
            <motion.a
              key={index}
              href={content.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-r ${content.color} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center hover:scale-105`}
            >
              <div className="text-2xl mb-2">{content.title.split(' ')[0]}</div>
              <div className="text-sm opacity-90">{content.subtitle}</div>
            </motion.a>
          ))}
        </div>
      </div>
<<<<<<< HEAD

      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping delay-2000"></div>
      </div>
=======
<<<<<<< HEAD
=======

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 text-6xl animate-bounce opacity-20">🚀</div>
      <div className="absolute bottom-4 left-4 text-4xl animate-pulse opacity-20">⚡</div>
      <div className="absolute top-1/2 right-8 text-3xl animate-ping opacity-30">🧠</div>
>>>>>>> cursor/create-and-deploy-new-content-cd00
>>>>>>> cursor/create-and-deploy-new-content-63f0
    </div>
  );
};

export default RevolutionaryContentBanner2025;