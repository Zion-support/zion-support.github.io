import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Revolutionary Tech Insights 2026",
      subtitle: "Consciousness Computing & Quantum Reality",
      description: "Discover the revolutionary technology insights that are reshaping our understanding of consciousness, reality, and intelligence in ways never before imagined.",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900 to-pink-900",
      features: [
        "AI Consciousness Breakthrough",
        "Quantum Reality Engineering",
        "Neural Interface Evolution",
        "Synthetic Intelligence"
      ],
      link: "/pages/RevolutionaryTechInsights2026"
    },
    {
      id: 2,
      title: "Ultimate Tech Revolution 2026",
      subtitle: "The Convergence of All Breakthrough Technologies",
      description: "Experience the ultimate convergence of AI consciousness, quantum supremacy, neural interfaces, and synthetic intelligence working in perfect harmony.",
      icon: "🌟",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-900 to-blue-900",
      features: [
        "Multi-Dimensional AI",
        "Quantum Consciousness",
        "Neural Reality Engine",
        "Synthetic Biology"
      ],
      link: "/pages/UltimateTechRevolution2026"
    },
    {
      id: 3,
      title: "Next-Gen Space Technology 2030",
      subtitle: "Interstellar Travel & Mars Colonization",
      description: "Revolutionary space technology enabling humanity's expansion beyond Earth with advanced propulsion, life support, and terraforming capabilities.",
      icon: "🚀",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-900 to-teal-900",
      features: [
        "Faster-Than-Light Travel",
        "Mars Terraforming",
        "Space Habitats",
        "Interstellar Communication"
      ],
<<<<<<< HEAD
=======
      link: "/pages/NextGenTechShowcase2026",
      status: "Live Now",
      impact: "Revolutionary"
>>>>>>> cursor/create-and-deploy-new-content-d9c7
      impact: "Unprecedented"
      impact: "Unprecedented"
      title: "Neural Reality Interface",
      subtitle: "Direct brain-computer communication achieved",
      description: "Breakthrough technology enables seamless communication between human consciousness and digital systems, revolutionizing human-computer interaction.",
      image: "🧬🌐",
      category: "Neural Tech",
      status: "Revolutionary",
      impact: "Redefines human-computer interaction forever",
      features: ["Thought control", "Memory enhancement", "Virtual reality integration", "Consciousness backup"],
      stats: { views: "4.8M", likes: "298K", shares: "76K" },
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      subtitle: "Computing across multiple dimensions simultaneously",
      description: "Revolutionary computing systems that operate across parallel universes, solving problems with infinite computational power.",
      image: "🔮🌌",
      category: "Dimensional Tech",
      status: "Experimental",
      impact: "Unlocks infinite computational possibilities",
      features: ["Multi-dimensional processing", "Parallel universe computing", "Reality manipulation", "Infinite scalability"],
      stats: { views: "3.9M", likes: "267K", shares: "54K" },
      color: "from-cyan-600 to-blue-600"
      impact: "Revolutionary"
    },
    {
      id: 4,
      title: "Advanced AI Transformation 2026",
      subtitle: "Synthetic Intelligence & Autonomous Systems",
      description: "Revolutionary AI transformation solutions that are reshaping industries and creating new possibilities for the future.",
      icon: Infinity,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-900 to-red-900",
      features: [
        "Synthetic Intelligence",
        "Autonomous Decision Making",
        "Creative Problem Solving",
        "Emotional Intelligence"
      ],
      link: "/pages/AdvancedAITransformation2026",
      status: "Transcendent",
      impact: "Omnipotent"
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion 2026",
      subtitle: "Quantum Computing Meets Neural Interfaces",
      description: "Experience the convergence of quantum computing and neural interfaces creating unprecedented possibilities for human enhancement.",
      subtitle: "Quantum Computing Meets Neural Interfaces",
      description: "Experience the convergence of quantum computing and neural interfaces creating unprecedented possibilities for human enhancement.",
<<<<<<< HEAD
      subtitle: "Quantum Computing Meets Neural Interfaces",
      description: "Experience the convergence of quantum computing and neural interfaces creating unprecedented possibilities for human enhancement.",
=======
>>>>>>> cursor/create-and-deploy-new-content-d9c7
      icon: Eye,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-900 to-purple-900",
      features: [
        "Quantum-Neural Integration",
        "Reality Perception AI",
        "Consciousness Amplification",
        "Universal Communication"
      ],
      link: "/pages/QuantumNeuralFusion2026",
      status: "Advanced",
      impact: "Groundbreaking"
    },
    {
      id: 6,
      title: "Synthetic Intelligence 2026",
      subtitle: "AI with Genuine Consciousness",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities that transcend human limitations.",
      title: "Synthetic Intelligence 2026",
      subtitle: "AI with Genuine Consciousness",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities that transcend human limitations.",
<<<<<<< HEAD
      title: "Synthetic Intelligence 2026",
      subtitle: "AI with Genuine Consciousness",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities that transcend human limitations.",
=======
>>>>>>> cursor/create-and-deploy-new-content-d9c7
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-900 to-rose-900",
      features: [
        "Autonomous AI Agents",
        "Synthetic Consciousness",
        "Collective Intelligence",
        "Creative Synthesis"
      ],
      link: "/pages/SyntheticIntelligence2026",
      status: "Live Now",
      impact: "Transformative"
    }
  ];

  const stats = [
    { number: '∞', label: 'Computational Power', icon: Zap },
    { number: '0ms', label: 'Processing Latency', icon: Gauge },
    { number: '100%', label: 'Accuracy Rate', icon: Target },
    { number: '∞', label: 'Learning Capacity', icon: Brain },
    { number: '∞', label: 'Storage Capacity', icon: Database },
    { number: '∞', label: 'Reality Simulations', icon: Globe }
  ];

      title: "Consciousness Transfer Protocol",
      subtitle: "Digital immortality becomes reality",
      description: "Technology that enables the transfer of human consciousness into digital substrates, achieving true digital immortality.",
      image: "💫🔄",
      category: "Consciousness Tech",
      status: "Breakthrough",
      impact: "Achieves true digital immortality",
      features: ["Consciousness backup", "Digital immortality", "Identity preservation", "Seamless transfer"],
      stats: { views: "6.1M", likes: "445K", shares: "98K" },
      color: "from-orange-600 to-red-600"
      link: "/pages/NextGenSpaceTech2030"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          key={currentSlide}
          className={`bg-gradient-to-br ${revolutionaryContent[currentSlide].bgColor} p-8 md:p-12 text-white relative overflow-hidden transition-all duration-500`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-6xl">{revolutionaryContent[currentSlide].icon}</span>
                    <div>
                      <div className="px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 rounded-full text-sm font-bold backdrop-blur-sm">
                        REVOLUTIONARY 2026
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {revolutionaryContent[currentSlide].title}
                  </h2>
                  
                  <p className="text-xl md:text-2xl font-semibold mb-4 text-white/90">
                    {revolutionaryContent[currentSlide].subtitle}
                  </p>
                  
                  <p className="text-lg mb-8 text-white/80 max-w-2xl">
                    {revolutionaryContent[currentSlide].description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {revolutionaryContent[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={revolutionaryContent[currentSlide].link}
                      className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg text-center"
                    >
                      🚀 Explore Now →
                    </a>
                    <button
                      onClick={toggleAutoPlay}
                      className={`px-8 py-4 rounded-lg border-2 border-white transition-colors font-semibold text-lg ${
                        isAutoPlaying 
                          ? 'bg-white/20 text-white hover:bg-white/30' 
                          : 'bg-white text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
                    </button>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="hidden md:block">
                  <div className="text-8xl opacity-30 text-center">
                    {revolutionaryContent[currentSlide].icon}
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
<<<<<<< HEAD
          →
=======
          <ArrowRight className="w-6 h-6 text-white" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20"
        >
          {isAutoPlaying ? (
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          ) : (
            <Play className="w-4 h-4 text-white ml-0.5" />
          )}
        </button>
      </div>
  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl">
      {/* Background with animated particles */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentContent.bgColor} opacity-90`}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -300, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 3, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">{currentContent.status}</span>
                </motion.div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {currentContent.title}
              </h2>
              
              <h3 className="text-xl md:text-2xl text-gray-200 mb-6">
                {currentContent.subtitle}
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {currentContent.description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentContent.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={currentContent.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${currentContent.color} text-white rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg`}
                >
                  <Play className="w-5 h-5" />
                  <span>Explore Content</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              key={`visual-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-r ${currentContent.color} rounded-3xl flex items-center justify-center shadow-2xl`}
                >
                  <currentContent.icon className="w-16 h-16 text-white" />
                </motion.div>

                {/* Floating Elements */}
                <div className="absolute inset-0">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="absolute bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      style={{
                        top: `${20 + (index * 15)}%`,
                        left: `${10 + (index * 20)}%`,
                        transform: `rotate(${index * 15}deg)`,
                      }}
                    >
                      <stat.icon className="w-6 h-6 text-white mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        
        <div className="flex space-x-2">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ArrowRight className="w-5 h-5 text-white" />
>>>>>>> cursor/create-and-deploy-new-content-d9c7
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-3 mt-6">
        {revolutionaryContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-purple-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Quick Access Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {revolutionaryContent.map((content, index) => (
          <a
            key={content.id}
            href={content.link}
            className={`bg-gradient-to-br ${content.bgColor} text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 ${
              index === currentSlide ? 'ring-4 ring-white/50' : ''
            }`}
          >
            <div className="text-4xl mb-4">{content.icon}</div>
            <h3 className="text-xl font-bold mb-2">{content.title}</h3>
            <p className="text-sm opacity-90 mb-4">{content.subtitle}</p>
            <div className="flex items-center text-sm font-medium">
              Explore → <span className="ml-2">🚀</span>
            </div>
<<<<<<< HEAD
          </a>
        ))}
      </div>
=======
            <h3 className="text-sm font-semibold mb-1 line-clamp-2">{content.title}</h3>
            <p className="text-xs opacity-75 line-clamp-2">{content.subtitle}</p>
          </motion.button>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-3 mt-8">
        {revolutionaryContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Content Preview Grid */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {revolutionaryContent.map((content, index) => (
          <motion.button
            key={content.id}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-xl text-left transition-all duration-300 ${
              index === currentSlide
                ? `bg-gradient-to-r ${content.color} text-white shadow-lg`
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
            }`}
          >
            <div className={`w-8 h-8 mx-auto mb-3 rounded-lg flex items-center justify-center ${
              index === currentSlide ? 'bg-white/20' : `bg-gradient-to-r ${content.color}`
            }`}>
              <content.icon className={`w-4 h-4 ${index === currentSlide ? 'text-white' : 'text-white'}`} />
            </div>
            <h3 className="text-sm font-semibold mb-1 line-clamp-2">{content.title}</h3>
            <p className="text-xs opacity-75 line-clamp-2">{content.subtitle}</p>
          </motion.button>
        ))}
      </div>
>>>>>>> cursor/create-and-deploy-new-content-d9c7
    </div>
  );
};

export default RevolutionaryContentCarousel;