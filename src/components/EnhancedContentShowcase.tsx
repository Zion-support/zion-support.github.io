import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

<<<<<<< HEAD
  const showcaseItems = [
    {
      id: 1,
<<<<<<< HEAD
      title: "Synthetic Intelligence 2026",
      description: "Experience the future with AI agents that possess synthetic consciousness and autonomous capabilities",
      icon: "🤖",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Autonomous AI agents", "Synthetic consciousness", "Collective intelligence", "Creative synthesis"]
    },
    {
      id: 2,
      title: "Advanced Quantum Computing 2026",
      description: "Breakthrough quantum processors with 1000+ logical qubits and quantum supremacy capabilities",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/AdvancedQuantumComputing2026",
      features: ["1000+ logical qubits", "Quantum supremacy", "Molecular simulation", "Quantum AI integration"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2026",
      description: "Direct brain-computer communication with non-invasive neural interfaces and thought control",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-invasive BCI", "Thought control", "Neural feedback", "Medical applications"]
    },
    {
      id: 4,
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary fusion of quantum computing and neural interfaces for unprecedented capabilities",
      icon: "⚛️",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum-neural networks", "Enhanced cognition", "Parallel processing", "Synaptic acceleration"]
=======
      title: "Advanced AI Transformation 2026",
      description: "Experience the next evolution of artificial intelligence with autonomous reasoning, quantum-enhanced processing, and self-evolving neural architectures.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AdvancedAITransformation2026",
      features: ["Autonomous Reasoning", "Quantum Processing", "Self-Evolving Networks", "Industry Transformation"],
      category: "AI & Machine Learning",
      year: "2026"
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary fusion of quantum computing and neural networks, creating unprecedented processing power for complex problem solving.",
      image: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Processing", "Neural Networks", "Fusion Technology", "Exponential Power"],
      category: "Quantum Computing",
      year: "2026"
    },
    {
      id: 3,
      title: "Next-Gen Tech Showcase 2026",
      description: "Discover the most advanced technologies of 2026, featuring revolutionary innovations in AI, quantum computing, and neural interfaces.",
      image: "🌟",
      gradient: "from-violet-600 to-fuchsia-600",
      link: "/pages/NextGenTechShowcase2026",
      features: ["Synthetic Intelligence", "Advanced Quantum", "Neural Interfaces", "Global AI Network"],
      category: "Technology Showcase",
      year: "2026"
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities that think, create, and evolve independently.",
      image: "🤖",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Synthetic Consciousness", "Autonomous Agents", "Creative AI", "Collective Intelligence"],
      category: "Synthetic Intelligence",
      year: "2026"
    },
    {
      id: 5,
      title: "Advanced Quantum Computing 2026",
      description: "Experience exponential processing power with 1000+ qubit quantum processors and quantum supremacy capabilities.",
      image: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AdvancedQuantumComputing2026",
      features: ["1000+ Qubits", "Quantum Supremacy", "Molecular Simulation", "Quantum AI"],
      category: "Quantum Computing",
      year: "2026"
    },
    {
      id: 6,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct brain-computer communication and thought control technology.",
      image: "🧬",
      gradient: "from-rose-600 to-pink-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-invasive BCI", "Thought Control", "Neural Feedback", "Medical Applications"],
      category: "Neural Interfaces",
      year: "2026"
>>>>>>> cursor/create-and-deploy-new-content-3afb
=======
  const contentSlides = [
    {
      id: 1,
      title: "Advanced Quantum Computing 2026",
      description: "Experience exponential processing power with our revolutionary quantum computing platform",
      image: "⚡",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      link: "/pages/AdvancedQuantumComputing2026",
      features: ["1000+ Qubits", "Quantum Supremacy", "Molecular Simulation", "Quantum AI"]
    },
    {
      id: 2,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct brain-computer communication technology",
      image: "🧬",
      gradient: "from-emerald-500 to-cyan-500",
      bgGradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback", "Medical Applications"]
    },
    {
      id: 3,
      title: "Synthetic Intelligence 2026",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities",
      image: "🤖",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Autonomous Agents", "Synthetic Consciousness", "Collective Intelligence", "Creative Synthesis"]
>>>>>>> cursor/create-and-deploy-new-content-634d
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
<<<<<<< HEAD
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
<<<<<<< HEAD
      }, 5000);
=======
      }, 6000);
>>>>>>> cursor/create-and-deploy-new-content-3afb
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, showcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
<<<<<<< HEAD
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ENHANCED CONTENT SHOWCASE • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Enhanced Content Showcase
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience our most advanced and revolutionary content featuring cutting-edge technologies that are reshaping the future
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Showcase Carousel */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🚀 Revolutionary Technology Showcase</h2>
          <p className="text-xl text-purple-200">Interactive exploration of breakthrough technologies</p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Showcase Display */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
=======
=======
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
>>>>>>> cursor/create-and-deploy-new-content-634d
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
<<<<<<< HEAD
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ENHANCED CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our comprehensive collection of cutting-edge technology content featuring 
            AI transformation, quantum computing, neural interfaces, and synthetic intelligence.
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
>>>>>>> cursor/create-and-deploy-new-content-3afb
=======
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Showcase Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
        
        {/* Header */}
        <div className="relative z-10 text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our groundbreaking innovations in quantum computing, neural interfaces, and synthetic intelligence
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative z-10">
          <div className="relative h-96 overflow-hidden rounded-xl">
>>>>>>> cursor/create-and-deploy-new-content-634d
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
<<<<<<< HEAD
                transition={{ duration: 0.5 }}
<<<<<<< HEAD
                className={`absolute inset-0 bg-gradient-to-br ${showcaseItems[currentSlide].gradient} p-12 flex items-center justify-between`}
              >
                <div className="flex-1 text-white">
                  <div className="text-8xl mb-6">{showcaseItems[currentSlide].icon}</div>
                  <h3 className="text-5xl font-bold mb-4">{showcaseItems[currentSlide].title}</h3>
                  <p className="text-xl opacity-90 mb-6 max-w-2xl">
                    {showcaseItems[currentSlide].description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {showcaseItems[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span className="text-sm opacity-90">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href={showcaseItems[currentSlide].link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                  >
                    Explore {showcaseItems[currentSlide].title} →
                  </a>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-80 h-80 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="text-9xl">{showcaseItems[currentSlide].icon}</div>
=======
                className="relative"
              >
                <div className={`bg-gradient-to-br ${showcaseItems[currentSlide].gradient} p-12 rounded-2xl`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                          {showcaseItems[currentSlide].category}
                        </span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                          {showcaseItems[currentSlide].year}
                        </span>
                      </div>
                      <div className="text-8xl mb-6">{showcaseItems[currentSlide].image}</div>
                      <h3 className="text-4xl font-bold mb-6">{showcaseItems[currentSlide].title}</h3>
                      <p className="text-xl opacity-90 mb-8">{showcaseItems[currentSlide].description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {showcaseItems[currentSlide].features.map((feature, index) => (
                          <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                            <span className="text-sm font-semibold">{feature}</span>
=======
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center"
              >
                <div className={`w-full h-full bg-gradient-to-br ${contentSlides[currentSlide].bgGradient} backdrop-blur-sm rounded-xl p-8 border ${contentSlides[currentSlide].borderColor}`}>
                  <div className="flex flex-col lg:flex-row items-center h-full">
                    {/* Content */}
                    <div className="flex-1 text-white">
                      <div className="text-6xl mb-4">{contentSlides[currentSlide].image}</div>
                      <h3 className="text-3xl font-bold mb-4">{contentSlides[currentSlide].title}</h3>
                      <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                        {contentSlides[currentSlide].description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {contentSlides[currentSlide].features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span className="text-sm text-gray-200">{feature}</span>
>>>>>>> cursor/create-and-deploy-new-content-634d
                          </div>
                        ))}
                      </div>
                      
<<<<<<< HEAD
                      <div className="flex gap-4">
                        <a
                          href={showcaseItems[currentSlide].link}
                          className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                        >
                          Explore Now →
                        </a>
                        <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                          Learn More
                        </button>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                        <h4 className="text-2xl font-bold mb-4">Key Highlights</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Revolutionary breakthrough technology</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Industry-leading performance</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Proven real-world applications</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span>Expert-backed research</span>
                          </li>
                        </ul>
                      </div>
                    </div>
>>>>>>> cursor/create-and-deploy-new-content-3afb
=======
                      <a
                        href={contentSlides[currentSlide].link}
                        className={`inline-block bg-gradient-to-r ${contentSlides[currentSlide].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                      >
                        Explore Technology →
                      </a>
                    </div>
                    
                    {/* Visual Element */}
                    <div className="flex-1 flex justify-center items-center">
                      <div className={`w-64 h-64 bg-gradient-to-br ${contentSlides[currentSlide].gradient} rounded-full flex items-center justify-center text-8xl opacity-20`}>
                        {contentSlides[currentSlide].image}
                      </div>
                    </div>
>>>>>>> cursor/create-and-deploy-new-content-634d
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button
              onClick={prevSlide}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              ←
            </button>
            
            <div className="flex space-x-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
=======
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
>>>>>>> cursor/create-and-deploy-new-content-634d
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
<<<<<<< HEAD

            <button
              onClick={nextSlide}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              →
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm"
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
=======
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

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Content Categories */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Content Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['AI & Machine Learning', 'Quantum Computing', 'Neural Interfaces', 'Synthetic Intelligence', 'Technology Showcase', 'Revolutionary Tech'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4 text-center">🚀</div>
                <h4 className="text-xl font-bold mb-3 text-center">{category}</h4>
                <p className="text-sm opacity-90 text-center mb-4">Explore cutting-edge content in this category</p>
                <div className="text-center">
                  <span className="text-purple-300 font-semibold">Explore Category →</span>
                </div>
              </motion.div>
            ))}
>>>>>>> cursor/create-and-deploy-new-content-3afb
          </div>

          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-4xl mb-3 text-center">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-center text-white">{item.title}</h3>
                <p className="text-white/80 mb-4 text-sm text-center">
                  {item.description.substring(0, 80)}...
                </p>
                <a 
                  href={item.link}
                  className="block w-full bg-white text-gray-900 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center text-sm"
                >
                  Explore →
                </a>
              </motion.div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">✨ Enhanced Features</h2>
          <p className="text-xl text-purple-200">Experience interactive technology exploration</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-5xl mb-4 text-center">🎮</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Interactive Experience</h3>
            <p className="text-purple-200 text-center">
              Navigate through revolutionary technologies with intuitive controls and smooth animations
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Real-time Updates</h3>
            <p className="text-purple-200 text-center">
              Stay current with the latest breakthroughs and technology advancements as they happen
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-5xl mb-4 text-center">🌟</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Immersive Design</h3>
            <p className="text-purple-200 text-center">
              Experience stunning visual design with gradient backgrounds and smooth transitions
            </p>
=======
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                  : 'bg-gray-500/20 text-gray-400 border border-gray-400/30'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
>>>>>>> cursor/create-and-deploy-new-content-634d
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Explore the Future?</h2>
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Dive deeper into our revolutionary technologies and discover how they can transform your business
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Start Your Journey →
          </a>
          <a href="/pages/InnovationLanding2025" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
            View All Innovations
          </a>
        </div>
=======
        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">
                    {item.year}
                  </span>
                </div>
                <div className="text-4xl mb-4 text-center">{item.image}</div>
                <h4 className="text-xl font-bold mb-3 text-center">{item.title}</h4>
                <p className="text-sm opacity-90 text-center mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="block w-full bg-white/20 text-white text-center py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
                >
                  Explore →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
>>>>>>> cursor/create-and-deploy-new-content-3afb
=======
      {/* Quick Access Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {contentSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-xl p-6 border ${slide.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => goToSlide(index)}
          >
            <div className="text-4xl mb-3 text-center">{slide.image}</div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">{slide.title}</h3>
            <p className="text-gray-200 text-sm text-center mb-4">{slide.description}</p>
            <a
              href={slide.link}
              className={`block w-full bg-gradient-to-r ${slide.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
            >
              Explore Now →
            </a>
          </motion.div>
        ))}
>>>>>>> cursor/create-and-deploy-new-content-634d
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;