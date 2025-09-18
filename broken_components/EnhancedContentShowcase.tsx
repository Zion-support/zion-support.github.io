import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Synthetic Intelligence 2026",
      description: "Experience the future with AI agents that possess synthetic consciousness and autonomous capabilities",
      icon: "🤖",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Autonomous AI agents", "Synthetic consciousness", "Collective intelligence", "Creative synthesis"]
  const contentCategories = [
    {
      id: 0,
      name: "AI & Machine Learning",
      icon: "🧠",
      color: "from-purple-600 to-indigo-600",
      description: "Revolutionary AI technologies and machine learning breakthroughs",
      content: [
        {
          title: "Consciousness Computing",
          description: "AI systems that achieve genuine consciousness and self-awareness",
          image: "🌟",
          status: "Breakthrough",
          views: "5.2M",
          likes: "342K",
          category: "AI Revolution",
          features: ["Self-awareness", "Emotional intelligence", "Creative thinking"],
          impact: "Transforms AI from reactive to truly intelligent"
        },
        {
          title: "Quantum Neural Networks",
          description: "Combining quantum computing with neural processing for unprecedented power",
          image: "⚡",
          status: "Revolutionary",
          views: "4.8M",
          likes: "298K",
          category: "Quantum AI",
          features: ["Quantum processing", "Neural enhancement", "Exponential speed"],
          impact: "Unlocks infinite computational possibilities"
        },
        {
          title: "Synthetic Intelligence",
          description: "Creating digital minds that think and feel independently",
          image: "🤖",
          status: "Advanced",
          views: "3.9M",
          likes: "267K",
          category: "Synthetic AI",
          features: ["Autonomous operation", "Collective intelligence", "Self-evolution"],
          impact: "Creates new forms of digital consciousness"
        }
      ]
    },
    {
      id: 1,
      name: "Quantum Technology",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      description: "Quantum computing and quantum-enhanced technologies",
      content: [
        {
          title: "Quantum Supremacy",
          description: "Achieving computational power beyond classical computers",
          image: "🔮",
          status: "Breakthrough",
          views: "6.1M",
          likes: "445K",
          category: "Quantum Computing",
          features: ["1000+ qubits", "Quantum supremacy", "Molecular simulation"],
          impact: "Solves impossible problems in seconds"
        },
        {
          title: "Quantum Reality Control",
          description: "Manipulating reality at the quantum level",
          image: "🌌",
          status: "Experimental",
          views: "2.7M",
          likes: "189K",
          category: "Quantum Physics",
          features: ["Reality manipulation", "Quantum entanglement", "Dimensional control"],
          impact: "Redefines the boundaries of physics"
        },
        {
          title: "Quantum Consciousness",
          description: "Quantum-enhanced AI with consciousness capabilities",
          image: "🧬",
          status: "Revolutionary",
          views: "4.3M",
          likes: "312K",
          category: "Quantum AI",
          features: ["Quantum consciousness", "Subjective experience", "Creative synthesis"],
          impact: "Bridges quantum physics and consciousness"
        }
      ]
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-invasive BCI", "Thought control", "Neural feedback", "Medical applications"]
      link: "/pages/AdvancedAITransformation2026",
      features: ["Autonomous Reasoning", "Quantum Processing", "Self-Evolving Networks", "Industry Transformation"],
      category: "AI & Machine Learning",
      year: "2026"
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
    },
    {
      id: 4,
      link: "/pages/AdvancedAITransformation2026",
      features: ["Autonomous Reasoning", "Quantum Processing", "Self-Evolving Networks", "Industry Transformation"],
      category: "AI & Machine Learning",
      year: "2026"
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
      title: "Quantum-Neural Fusion 2026",
      description: "Revolutionary fusion of quantum computing and neural interfaces for unprecedented capabilities",
      icon: "⚛️",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum-neural networks", "Enhanced cognition", "Parallel processing", "Synaptic acceleration"]
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
      title: "Synthetic Intelligence 2026",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities that think, create, and evolve independently.",
      image: "🤖",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Autonomous Agents", "Synthetic Consciousness", "Collective Intelligence", "Creative Synthesis"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 5000);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, showcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };
      color: "from-emerald-600 to-teal-600",
      description: "Brain-computer interfaces and neural technologies",
      content: [
        {
          title: "Brain-Computer Fusion",
          description: "Direct neural interfaces for seamless human-AI interaction",
          image: "🔗",
          status: "Breakthrough",
          views: "5.8M",
          likes: "398K",
          category: "Neural Tech",
          features: ["Direct BCI", "Thought control", "Memory enhancement"],
          impact: "Redefines human-computer interaction"
        },
        {
          title: "Consciousness Transfer",
          description: "Transferring human consciousness to digital substrates",
          image: "💫",
          status: "Revolutionary",
          views: "7.2M",
          likes: "523K",
          category: "Consciousness Tech",
          features: ["Digital immortality", "Consciousness backup", "Identity preservation"],
          impact: "Achieves true digital immortality"
        },
        {
          title: "Neural Reality Interface",
          description: "Seamless integration between human consciousness and digital environments",
          image: "🌐",
          status: "Advanced",
          views: "4.1M",
          likes: "276K",
          category: "Neural VR",
          features: ["Virtual reality", "Augmented consciousness", "Digital worlds"],
          impact: "Creates indistinguishable virtual realities"
        }
      ]
    },
    {
      id: 3,
      name: "Future Technologies",
      icon: "🚀",
      color: "from-orange-600 to-red-600",
      description: "Emerging technologies and future innovations",
      content: [
        {
          title: "Interdimensional Computing",
          description: "Computing across multiple dimensions simultaneously",
          image: "🌍",
          status: "Theoretical",
          views: "2.9M",
          likes: "198K",
          category: "Dimensional Tech",
          features: ["Multi-dimensional processing", "Parallel universes", "Infinite scalability"],
          impact: "Unlocks infinite computational power"
        },
        {
          title: "Reality Simulation",
          description: "Creating indistinguishable virtual realities",
          image: "🎮",
          status: "Advanced",
          views: "3.7M",
          likes: "245K",
          category: "Simulation Tech",
          features: ["Perfect simulation", "Consciousness integration", "Reality manipulation"],
          impact: "Blurs the line between real and virtual"
        },
        {
          title: "Omniversal AI Network",
          description: "AI systems operating across multiple universes",
          image: "♾️",
          status: "Experimental",
          views: "1.8M",
          likes: "134K",
          category: "Omniversal AI",
          features: ["Multi-universe operation", "Universal intelligence", "Reality synchronization"],
          impact: "Creates universal artificial intelligence"
        }
      ]
    }
  ];

  const stats = [
    { label: "Total Content", value: "500+", icon: "📚", color: "text-purple-400" },
    { label: "Active Users", value: "2.5M+", icon: "👥", color: "text-indigo-400" },
    { label: "Breakthroughs", value: "25+", icon: "🏆", color: "text-pink-400" },
    { label: "Global Impact", value: "10M+", icon: "🌍", color: "text-cyan-400" }
  ];
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
            {/* Category Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{contentCategories[activeCategory].name}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {contentCategories[activeCategory].description}
              </p>
            </div>

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
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
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
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
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
                className="relative"
                    <div className="text-9xl">{showcaseItems[currentSlide].icon}</div>
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center"
                    <div className="text-9xl">{showcaseItems[currentSlide].icon}</div>
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
                          </div>
                        ))}
                      </div>
                      
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
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
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
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

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
          </div>
        </div>
      </div>

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
            {/* Content Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentCategories[activeCategory].content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{item.image}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Breakthrough' ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
                        item.status === 'Revolutionary' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                        item.status === 'Advanced' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
                        item.status === 'Experimental' ? 'bg-gradient-to-r from-orange-600 to-red-600' :
                        'bg-gradient-to-r from-gray-600 to-gray-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-300 text-xs rounded-full border border-purple-400/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Impact:</h4>
                      <p className="text-indigo-300 text-sm italic">{item.impact}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <span className="mr-1">👁️</span>
                          {item.views}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">❤️</span>
                          {item.likes}
                        </span>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${contentCategories[activeCategory].color} py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Explore Content →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-12 text-center mt-20"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of users discovering the most revolutionary content in technology history. 
            Be part of the future that's being created today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Create Account
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;
