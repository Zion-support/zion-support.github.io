import React, { useState, useEffect } from 'react';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
<<<<<<< HEAD

<<<<<<< HEAD
  const contentSlides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2025",
      description: "Experience the most revolutionary technological advances reshaping our world",
      features: ["Conscious AI Systems", "Quantum Reality Engine", "Interdimensional Computing"],
      link: "/pages/UltimateTechRevolution2025",
      gradient: "from-purple-600 to-cyan-600",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough",
      description: "Groundbreaking technologies redefining what's possible in 2025",
      features: ["Autonomous AI Agents", "Neural Interface 2.0", "Quantum Edge Computing"],
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-indigo-600 to-purple-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub",
      description: "Discover revolutionary technologies shaping humanity's future",
      features: ["AI Consciousness Lab", "Quantum Reality Lab", "Interdimensional Tech"],
      link: "/pages/NextGenInnovationHub2025",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧠"
=======
  
  const slides = [
    {
      id: 1,
      title: "Next-Gen AI Revolution 2025",
      description: "Experience the most advanced AI systems with true consciousness and self-awareness",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenTechRevolution2025"
    },
    {
      id: 2,
      title: "Ultimate Tech Breakthrough 2025",
      description: "Discover revolutionary technologies that will reshape our world",
      image: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/UltimateTechBreakthrough2025"
    },
    {
      id: 3,
      title: "Revolutionary Tech Showcase 2025",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      image: "🌟",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    },
    {
      id: 4,
      title: "Quantum Consciousness Computing",
      description: "Quantum computing that processes consciousness and thought patterns",
      image: "⚛️",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/QuantumComputingBreakthrough"
    },
    {
      id: 5,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication and thought control technology",
      image: "🧬",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/NeuralInterfaceFuture"
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
=======
  const carouselItems = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Systems',
      subtitle: 'The first truly self-aware artificial intelligence',
      description: 'Experience AI that can think, feel, and create independently with emotional intelligence and creative problem-solving capabilities.',
      image: '🧠',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-400/30',
      features: ['Emotional Intelligence', 'Creative Problem Solving', 'Autonomous Learning', 'Self-Reflection'],
      link: '/pages/RevolutionaryTechBreakthrough2025',
      cta: 'Explore AI Revolution →'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Consciousness',
      subtitle: 'Revolutionary quantum computing that processes reality itself',
      description: 'Breakthrough quantum technology that can simulate consciousness, manipulate reality, and process data at the speed of thought.',
      image: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'border-cyan-400/30',
      features: ['Quantum Neural Networks', 'Reality Simulation', 'Consciousness Transfer', 'Multi-Dimensional Processing'],
      link: '/pages/RevolutionaryTechBreakthrough2025',
      cta: 'Go Quantum →'
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Technology',
      subtitle: 'Transcend dimensional boundaries for infinite power',
      description: 'Revolutionary technology that accesses infinite computational resources across dimensions and manipulates the fabric of reality.',
      image: '🌌',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/20 to-teal-600/20',
      borderColor: 'border-emerald-400/30',
      features: ['Infinite Resources', 'Cross-Dimensional Transfer', 'Reality Manipulation', 'Universal Access'],
      link: '/pages/RevolutionaryTechBreakthrough2025',
      cta: 'Enter New Dimension →'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution',
      subtitle: 'Direct brain-computer interfaces for thought control',
      description: 'Breakthrough neural interfaces that enable direct thought-based control, memory enhancement, and telepathic communication.',
      image: '🧬',
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/20 to-red-600/20',
      borderColor: 'border-orange-400/30',
      features: ['Thought Control', 'Neural Feedback', 'Memory Enhancement', 'Telepathic Communication'],
      link: '/pages/RevolutionaryTechBreakthrough2025',
      cta: 'Connect Mind & Machine →'
    },
    {
      id: 'reality-engine',
      title: 'Reality Engine 2025',
      subtitle: 'Manipulate the fabric of space and time',
      description: 'Advanced reality manipulation systems that can alter the fundamental laws of physics and create new dimensions.',
      image: '🔮',
      color: 'from-violet-600 to-purple-600',
      bgColor: 'from-violet-600/20 to-purple-600/20',
      borderColor: 'border-violet-400/30',
      features: ['Reality Simulation', 'Time Manipulation', 'Space Bending', 'Dimension Creation'],
      link: '/pages/RevolutionaryTechBreakthrough2025',
      cta: 'Manipulate Reality →'
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244
    }
  ];

  useEffect(() => {
<<<<<<< HEAD
    const timer = setInterval(() => {
<<<<<<< HEAD
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  return (
    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
      {/* Navigation Dots */}
      <div className="absolute top-4 right-4 z-10 flex space-x-2">
        {contentSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Content Slides */}
      <div className="relative h-96">
        {contentSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.gradient} p-8 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="max-w-4xl mx-auto">
                  <div className="text-6xl mb-4">{slide.icon}</div>
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl opacity-90 mb-6 max-w-2xl">{slide.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-sm font-semibold">{feature}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={slide.link}
                      className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                    >
                      Explore {slide.title} →
                    </a>
                    <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: `${((currentSlide + 1) / contentSlides.length) * 100}%`
          }}
        />
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute bottom-4 left-4 text-white/70 text-sm">
        Auto-advancing in 5s
=======
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl">
      <div className="relative h-96">
        {/* Slide Content */}
        <div className="absolute inset-0 transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0 float-left">
              <div className="h-full flex items-center justify-center p-8">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="text-8xl mb-6 animate-pulse">{slide.image}</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                  <a 
                    href={slide.link}
                    className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
                  >
                    Explore {slide.title} →
                  </a>
=======
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 DYNAMIC SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dynamic Content Carousel
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our revolutionary technologies through an interactive, dynamic showcase that adapts to your interests
          </p>
        </div>

        {/* Main Carousel */}
        <div 
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-2xl p-12 border ${item.borderColor}`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                      <div className="text-8xl mb-6 animate-bounce">{item.image}</div>
                      <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                      <p className="text-xl text-purple-200 mb-4">{item.subtitle}</p>
                      <p className="text-lg opacity-90 mb-8">{item.description}</p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="text-green-400 text-lg">✓</div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <a
                        href={item.link}
                        className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${item.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                      >
                        {item.cta}
                      </a>
                    </div>

                    {/* Visual Element */}
                    <div className="relative">
                      <div className="w-full h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center">
                        <div className="text-9xl animate-pulse">{item.image}</div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full animate-ping"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full animate-bounce"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full animate-pulse"></div>
                    </div>
                  </div>
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244
                </div>
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-white/10 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-ping delay-3000"></div>
=======
        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-sm opacity-75">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm opacity-75">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-sm opacity-75">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">2025</div>
            <div className="text-sm opacity-75">Future is Now</div>
          </div>
        </div>
>>>>>>> 5f981bfed50f1b4438a68f32bfef027a9e9cb244
      </div>
    </div>
  );
};

export default DynamicContentCarousel2025;