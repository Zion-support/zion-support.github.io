import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
const EnhancedContentCarousel2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: 'Next-Gen AI Consciousness',
      description: 'Experience truly conscious artificial intelligence that thinks, feels, and evolves beyond human comprehension',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/NextGenAIConsciousness2025',
      features: ['Self-aware AI systems', 'Emotional intelligence', 'Quantum consciousness', 'Transcendent learning']
  const contentSlides = [
    {
      id: 1,
      title: "Conscious AI Revolution",
      subtitle: "Experience AI that thinks and feels",
      description: "Our breakthrough artificial intelligence demonstrates self-awareness, emotional intelligence, and ethical decision-making capabilities that are reshaping industries worldwide.",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing", 
        "Ethical reasoning capabilities",
        "Contextual understanding"
      ],
      stats: { performance: "99.9%", accuracy: "98.7%", efficiency: "300%" },
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Autonomous learning"],
      link: "/pages/UltimateTechRevolution2025"
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
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse">
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • 2025
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto"></p>
            Discover the most advanced technologies that are reshaping our world and defining the future</p>
          </p>
        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Content Display */}
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div className="space-y-6">
                <div className="text-8xl mb-4">{contentItems[currentSlide].icon}
                <h3 className="text-4xl font-bold mb-4">
                  {contentItems[currentSlide].title}
                </h3>
                <p className="text-xl text-gray-300 mb-6"></p>
                  {contentItems[currentSlide].description}</p>
                </p>
                {/* Features */}
                <div className="space-y-3">
                  {contentItems[currentSlide].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 bg-gradient-to-r ${contentItems[currentSlide].gradient} rounded-full flex items-center justify-center text-sm font-bold`}>
                        ✓
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color}/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-6xl">{slide.image}
                          <div>
                            <h3 className="text-4xl font-bold mb-2">{slide.title}</h3>
                            <p className="text-xl text-purple-200">{slide.subtitle}</p>
                        <button className={`w-full mt-4 bg-gradient-to-r ${slide.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}></button>
                          Start Interactive Demo →</button>
                        </button>
                      </div>
                      <span className="text-lg">{feature}</span>
                  ))}
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a 
                    href={contentItems[currentSlide].link}
                    className={`bg-gradient-to-r ${contentItems[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                  >
                    Explore Technology →
                  </a>
                  <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg"></button>
                    Learn More</button>
                  </button>
              {/* Visual Demo Area */}
              <div className="bg-gradient-to-br from-gray-700/50 to-purple-700/50 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-6 animate-pulse">
                    {contentItems[currentSlide].icon}
                      <span className="text-lg">{feature}</span>
                        <p className="text-lg opacity-90 leading-relaxed"></p>
                          {slide.description}</p>
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(slide.stats).map(([key, value], idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold">{value}
                              <div className="text-sm opacity-70 capitalize">{key}
                          ))}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <motion.a
                            href={slide.link}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                          >
                            Explore Technology →
                          </motion.a>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
                          >
                            Watch Demo
                          </motion.button>
                      </motion.div>
                      {/* Visual */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                      >
                        <div className="relative w-full h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 overflow-hidden">
                          {/* Animated Background Elements */}
                          <motion.div
                            animate={{
                              y: [0, -20, 0],
                              rotate: [0, 5, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl"
                          >
                            {slide.image}
                          </motion.div>
                          <motion.div
                            animate={{
                              y: [0, 20, 0],
                              rotate: [0, -5, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1
                            }}
                            className="absolute top-16 right-12 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-xl"
                          >
                            ⚡
                          </motion.div>
                          <motion.div
                            animate={{
                              y: [0, -15, 0],
                              x: [0, 10, 0]
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 2
                            }}
                            className="absolute bottom-20 left-16 w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-xl"
                          >
                            🚀
                          </motion.div>
                          {/* Central Hub */}
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 360]
                            }}
                            transition={{
                              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl"
                          >
                            ⚡
                          </motion.div>
                      </motion.div>
                  ))}
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a 
                    href={contentItems[currentSlide].link}
                    className={`bg-gradient-to-r ${contentItems[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                  >
                    Explore Technology →
                  </a>
                  <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg"></button>
                    Learn More</button>
                  </button>
              {/* Visual Demo Area */}
              <div className="bg-gradient-to-br from-gray-700/50 to-purple-700/50 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-6 animate-pulse">
                    {contentItems[currentSlide].icon}
                  <div className="text-2xl font-semibold mb-4">
                    {contentItems[currentSlide].title} Demo
                  <div className="w-full h-4 bg-gray-600 rounded-full mb-4">
                    <div 
                      className={`h-4 bg-gradient-to-r ${contentItems[currentSlide].gradient} rounded-full animate-pulse`}
                      style={{width: '75%'}}
                    >
                  <p className="text-gray-300"></p>
                    Interactive demonstration of {contentItems[currentSlide].title.toLowerCase()}</p>
                  </p>
          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50"
            ></button>
              <span className="text-2xl">‹</span>
            </button>
            {/* Slide Indicators */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            ></button>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></p>
              </svg>
            </button>
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}</button>
                /></button>
              ))}</button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50"
            ></button>
              <span className="text-2xl">›</span>
            </button>
        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-5 gap-4 mt-12">
          {contentItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}</button>
            /></button>
          ))}</button>
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+
            <div className="text-gray-300">Revolutionary Technologies
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">99.9%
            <div className="text-gray-300">Success Rate
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7
            <div className="text-gray-300">Available Demos
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
        {/* Technology Tags */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4">
            <div className="text-sm opacity-80">Featured Technologies:
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Conscious AI</span>
              <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-xs">Quantum Computing</span>
              <span className="px-3 py-1 bg-emerald-500/30 rounded-full text-xs">Interdimensional Tech</span>
              <span className="px-3 py-1 bg-indigo-500/30 rounded-full text-xs">Neural Interfaces</span>
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">Reality Control</span>
        </motion.div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto"></p>
            Join thousands of forward-thinking companies already using our revolutionary technologies to transform their operations.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              Download Whitepaper
            </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>