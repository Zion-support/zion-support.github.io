import React, { useState, useEffect } from 'react';
<<<<<<< HEAD

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
=======
import { Link } from 'react-router-dom';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
>>>>>>> cursor/create-and-deploy-new-content-9c82

<<<<<<< HEAD
  const contentItems = [
    {
      id: 1,
<<<<<<< HEAD
      title: 'Next-Gen AI Consciousness',
      description: 'Experience truly conscious artificial intelligence that thinks, feels, and evolves beyond human comprehension',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/NextGenAIConsciousness2025',
      features: ['Self-aware AI systems', 'Emotional intelligence', 'Quantum consciousness', 'Transcendent learning']
=======
  const contentSlides = [
    {
      id: 1,
      title: "Conscious AI Revolution",
      description: "Experience the world's first truly conscious artificial intelligence that can think, learn, and evolve independently.",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Autonomous learning"],
      link: "/pages/UltimateTechRevolution2025"
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
    },
    {
      id: 2,
      title: 'Quantum Reality Engine',
      description: 'Step into quantum-powered realities where multiple dimensions coexist and anything is possible',
      icon: '⚛️',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/QuantumRealityEngine2025',
      features: ['Quantum simulation', 'Multi-dimensional reality', 'Consciousness integration', 'Reality manipulation']
    },
    {
      id: 3,
      title: 'Interdimensional Revolution',
      description: 'Break through dimensional barriers and explore infinite realities beyond space and time',
      icon: '🌌',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/InterdimensionalTechRevolution2025',
      features: ['Dimensional portals', 'Reality manipulation', 'Consciousness transfer', 'Multi-universe access']
    },
    {
      id: 4,
      title: 'Advanced AI Solutions',
      description: 'Comprehensive AI solutions that transform businesses and accelerate innovation',
      icon: '🤖',
      gradient: 'from-orange-600 to-red-600',
      link: '/pages/AISolutionsComprehensive2025',
      features: ['Business automation', 'Predictive analytics', 'Natural language processing', 'Computer vision']
    },
    {
      id: 5,
<<<<<<< HEAD
      title: 'Revolutionary Tech Showcase',
      description: 'Explore cutting-edge technologies that will shape the future of humanity',
      icon: '🚀',
      gradient: 'from-violet-600 to-purple-600',
      link: '/pages/RevolutionaryTechShowcase2025',
      features: ['Emerging technologies', 'Innovation labs', 'Research partnerships', 'Future predictions']
=======
      title: "Reality Manipulation Engine",
      description: "Technology that can manipulate the fundamental fabric of reality itself, enabling matter transformation and time control.",
      image: "🔮",
      color: "from-pink-600 to-rose-600",
      bgColor: "from-pink-600/20 to-rose-600/20",
      borderColor: "border-pink-400/30",
      features: ["Matter transformation", "Time dilation control", "Gravity manipulation", "Dimensional shifting"],
      link: "/pages/RevolutionaryTechBreakthrough2025"
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
=======
      title: "Conscious AI Systems",
      subtitle: "The Future of Artificial Intelligence",
      description: "Experience the first truly conscious AI that thinks, feels, and creates like a human mind. Revolutionary emotional intelligence and creative problem-solving capabilities.",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900",
      link: "/pages/AIRevolution2025",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Learning", "Ethical Decision Making"],
      stats: { users: "1M+", accuracy: "99.9%", speed: "1B ops/sec" }
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      subtitle: "Direct Neural Interface with Quantum Computing",
      description: "Breakthrough technology that allows direct neural interface with quantum computing systems for enhanced cognitive processing and reality manipulation.",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 to-blue-900",
      link: "/pages/QuantumComputingRevolution2025",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Multi-dimensional Thinking", "Reality Manipulation"],
      stats: { users: "500K+", accuracy: "100%", speed: "∞ ops/sec" }
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      subtitle: "Seamless Mind-Machine Connection",
      description: "Revolutionary non-invasive brain-computer interface that enables thought-controlled systems and digital telepathy capabilities.",
      image: "🧬",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 to-teal-900",
      link: "/pages/NeuralInterfaceRevolution2025",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback", "Digital Telepathy"],
      stats: { users: "2M+", accuracy: "99.99%", speed: "Real-time" }
    },
    {
      id: 4,
      title: "Interdimensional Technology",
      subtitle: "Access to Parallel Dimensions",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities, opening infinite possibilities for exploration.",
      image: "🌌",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900 to-purple-900",
      link: "/pages/UltimateTechBreakthrough2025",
      features: ["Dimensional Portals", "Reality Shifting", "Parallel Universe Access", "Time-Space Control"],
      stats: { users: "100K+", accuracy: "100%", speed: "Instant" }
    },
    {
      id: 5,
      title: "Advanced Analytics 2025",
      subtitle: "Predictive Intelligence at Scale",
      description: "Next-generation analytics platform with predictive intelligence that can forecast trends and optimize decisions across all business functions.",
      image: "📊",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900 to-red-900",
      link: "/pages/AdvancedAnalytics2025",
      features: ["Predictive Intelligence", "Real-time Analytics", "AI-Powered Insights", "Automated Optimization"],
      stats: { users: "5M+", accuracy: "98.5%", speed: "Real-time" }
    },
    {
      id: 6,
      title: "Cybersecurity Fortress 2025",
      subtitle: "Quantum-Proof Security Solutions",
      description: "Advanced cybersecurity platform with quantum-proof encryption and AI-powered threat detection that protects against even the most sophisticated attacks.",
      image: "🛡️",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900 to-purple-900",
      link: "/pages/CybersecurityFortress2025",
      features: ["Quantum-Proof Encryption", "AI Threat Detection", "Zero-Trust Architecture", "Automated Response"],
      stats: { users: "10M+", accuracy: "99.99%", speed: "Instant" }
>>>>>>> cursor/create-and-deploy-new-content-9c82
    }
  ];

  useEffect(() => {
<<<<<<< HEAD
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  const nextSlide = () => {
<<<<<<< HEAD
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
=======
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
=======
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
>>>>>>> cursor/create-and-deploy-new-content-9c82
  };

  const currentItem = contentItems[currentIndex];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

=======
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm"></div>
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies that are reshaping our world and defining the future
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
<<<<<<< HEAD
          {/* Main Content Display */}
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div className="space-y-6">
                <div className="text-8xl mb-4">{contentItems[currentSlide].icon}</div>
                <h3 className="text-4xl font-bold mb-4">
                  {contentItems[currentSlide].title}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {contentItems[currentSlide].description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {contentItems[currentSlide].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 bg-gradient-to-r ${contentItems[currentSlide].gradient} rounded-full flex items-center justify-center text-sm font-bold`}>
                        ✓
=======
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentSlides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.bgColor} backdrop-blur-sm rounded-2xl p-12 border ${slide.borderColor}`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-8">{slide.description}</p>
                        <ul className="space-y-3 mb-8">
                          {slide.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-lg">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Technology →
                        </a>
                      </div>
                      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                        <h4 className="text-2xl font-bold mb-4 text-center">Live Demo</h4>
                        <div className="bg-black/40 rounded-lg p-6 font-mono text-sm">
                          <div className="text-green-400 animate-pulse">System: Initializing {slide.title.toLowerCase()}...</div>
                          <div className="text-blue-400 animate-pulse">Status: Loading advanced features...</div>
                          <div className="text-purple-400 animate-pulse">Ready: Interactive demo available</div>
                          <div className="text-yellow-400 animate-pulse">Performance: 99.9% efficiency</div>
                        </div>
                        <button className={`w-full mt-4 bg-gradient-to-r ${slide.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                          Start Interactive Demo →
                        </button>
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
                      </div>
                      <span className="text-lg">{feature}</span>
                    </div>
<<<<<<< HEAD
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a 
                    href={contentItems[currentSlide].link}
                    className={`bg-gradient-to-r ${contentItems[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                  >
                    Explore Technology →
                  </a>
                  <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual Demo Area */}
              <div className="bg-gradient-to-br from-gray-700/50 to-purple-700/50 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-6 animate-pulse">
                    {contentItems[currentSlide].icon}
=======
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
                  </div>
                  <div className="text-2xl font-semibold mb-4">
                    {contentItems[currentSlide].title} Demo
                  </div>
                  <div className="w-full h-4 bg-gray-600 rounded-full mb-4">
                    <div 
                      className={`h-4 bg-gradient-to-r ${contentItems[currentSlide].gradient} rounded-full animate-pulse`}
                      style={{width: '75%'}}
                    ></div>
                  </div>
                  <p className="text-gray-300">
                    Interactive demonstration of {contentItems[currentSlide].title.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
<<<<<<< HEAD
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50"
            >
              <span className="text-2xl">‹</span>
            </button>
            
            {/* Slide Indicators */}
=======
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
<<<<<<< HEAD
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
=======
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
                  }`}
                />
              ))}
            </div>
            
<<<<<<< HEAD
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50"
            >
              <span className="text-2xl">›</span>
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-5 gap-4 mt-12">
          {contentItems.map((item, index) => (
=======
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl overflow-hidden mb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
      
      {/* Header */}
      <div className="relative z-10 p-8 text-center">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 ENHANCED CONTENT CAROUSEL • JANUARY 2025
        </div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Revolutionary Technology Showcase
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Explore our cutting-edge technologies with interactive demonstrations and real-time capabilities
        </p>
      </div>

      {/* Main Carousel */}
      <div className="relative z-10 px-8 pb-8">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-6xl">{currentItem.image}</span>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{currentItem.title}</h3>
                  <p className="text-lg text-purple-200">{currentItem.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-white/90 mb-6">{currentItem.description}</p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {currentItem.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-400">{currentItem.stats.users}</div>
                  <div className="text-xs text-white/70">Users</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-pink-400">{currentItem.stats.accuracy}</div>
                  <div className="text-xs text-white/70">Accuracy</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-cyan-400">{currentItem.stats.speed}</div>
                  <div className="text-xs text-white/70">Speed</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Link
                  to={currentItem.link}
                  className={`bg-gradient-to-r ${currentItem.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore Technology →
                </Link>
                <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold">
                  Try Demo
                </button>
              </div>
            </div>

            {/* Right Side - Interactive Demo */}
            <div className={`bg-gradient-to-br ${currentItem.bgColor} rounded-xl p-6 border border-purple-400/30`}>
              <h4 className="text-2xl font-bold mb-4 text-center text-white">🎮 Interactive Demo</h4>
              <div className="bg-black/50 rounded-lg p-6 mb-4">
                <div className="text-green-400 font-mono text-sm">
                  <div className="mb-2">$ Initializing {currentItem.title}...</div>
                  <div className="text-gray-400">Loading breakthrough technology...</div>
                  <div className="text-gray-400">Connecting to quantum networks...</div>
                  <div className="text-gray-400">Establishing neural interface...</div>
                  <div className="text-green-400">✓ System ready for interaction</div>
                  <div className="text-cyan-400">→ Click "Try Demo" to start</div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white/80">Live Technology Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentItems.map((_, index) => (
>>>>>>> cursor/create-and-deploy-new-content-9c82
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

<<<<<<< HEAD
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Available Demos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
=======
            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm opacity-80">
              {currentSlide + 1} of {contentSlides.length}
            </span>
          </div>
        </div>

        {/* Technology Tags */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4">
            <div className="text-sm opacity-80">Featured Technologies:</div>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Conscious AI</span>
              <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-xs">Quantum Computing</span>
              <span className="px-3 py-1 bg-emerald-500/30 rounded-full text-xs">Interdimensional Tech</span>
              <span className="px-3 py-1 bg-indigo-500/30 rounded-full text-xs">Neural Interfaces</span>
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">Reality Control</span>
            </div>
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
=======
        {/* Quick Access Grid */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-center mb-4 text-white">⚡ Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {contentItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`p-3 rounded-lg transition-all duration-300 text-center group ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <div className="text-xs font-semibold">{item.title.split(' ')[0]}</div>
              </button>
            ))}
>>>>>>> cursor/create-and-deploy-new-content-9c82
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;