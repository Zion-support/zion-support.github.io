import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Star, 
  Sparkles,
  Brain,
  Atom,
  Network,
  Infinity,
  Eye,
  Heart,
  Zap,
  Rocket,
  Globe,
  Cpu,
  Database,
  Shield,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  Award,
  Gauge,
  CircuitBoard,
  CpuChip,
  Layers,
  Lightbulb,
  Puzzle,
  Activity,
  Waves,
  Hexagon
} from 'lucide-react';
const RevolutionaryContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const revolutionaryContent = [
    {
      id: 1,
      title: "Revolutionary Tech Insights 2026",
      subtitle: "Consciousness Computing & Quantum Reality",
      description: "Discover the revolutionary technology insights that are reshaping our understanding of consciousness, reality, and intelligence in ways never before imagined.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900 to-pink-900",
      features: [
        "Consciousness Computing Revolution",
        "Quantum Reality Engineering", 
        "Universal Mind Network",
        "Infinite Intelligence Systems"
      ],
      link: "/pages/RevolutionaryTechInsights2026",
      status: "Revolutionary",
      impact: "Transcendent"
    },
    {
      id: 2,
      title: "Future Tech Breakthrough 2026",
      subtitle: "Consciousness Transfer & Quantum Intelligence",
      description: "Explore future technology breakthroughs including consciousness transfer, quantum consciousness engines, and universal knowledge networks shaping tomorrow.",
      icon: Atom,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-900 to-blue-900",
      features: [
        "Consciousness Transfer Technology",
        "Quantum Consciousness Engine",
        "Universal Knowledge Network",
        "Infinite Processing Power"
      ],
      link: "/pages/FutureTechBreakthrough2026",
      status: "Breakthrough",
      impact: "Revolutionary"
    },
    {
      id: 3,
      title: "Next-Gen Tech Showcase 2026",
      subtitle: "Advanced AI & Quantum Computing",
      description: "Experience the most revolutionary technologies that are reshaping our world and defining the future of human progress.",
      icon: Network,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900 to-emerald-900",
      features: [
        "Consciousness Computing",
        "Quantum Reality Engine",
        "Universal Mind Network",
        "Infinite Intelligence"
      ],
      impact: "Revolutionary"
      link: "/pages/NextGenTechShowcase2026",
      status: "Live Now",
      impact: "Revolutionary"
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
    }
  ];
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const currentContent = revolutionaryContent[currentSlide];
  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl">
            className={`relative bg-gradient-to-br ${currentContent.bgColor} text-white overflow-hidden`}
          >
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(100)].map((_, i) => (
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                      y: [0, -200, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 2, 1],
                    }}
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="relative z-10 p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                    className="mb-6"
                  >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-semibold">{currentContent.status}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                      {currentContent.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 mb-6">
                      {currentContent.subtitle}
                    </p>
                    <p className="text-lg text-white/80 mb-8 leading-relaxed">
                      {currentContent.description}
                    </p>
                    className="mb-8"
                  >
                    <ul className="space-y-3">
                      {currentContent.features.map((feature, index) => (
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-white/90">{feature}</span>
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a
                      href={currentContent.link}
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-white/90 transition-all duration-300 font-semibold text-lg group"
                    >
                      <Play className="w-5 h-5" />
                      <span>Explore Content</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                      <span>Learn More</span>
                    </button>
                </div>
                {/* Visual */}
                <div className="relative">
                    className="relative"
                  >
                    <div className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-r ${currentContent.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                      <currentContent.icon className="w-16 h-16 text-white" />
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white/40 rounded-full animate-pulse delay-500"></div>
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20"
        >
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
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
                y: [0, -300, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 3, 1],
                rotate: [0, 360, 0],
              }}
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
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">{currentContent.status}</span>
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
                      className="flex items-center space-x-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-200">{feature}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                  className={`inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${currentContent.color} text-white rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg`}
                >
                  <Play className="w-5 h-5" />
                  <span>Explore Content</span>
                  <ArrowRight className="w-5 h-5" />
              className="relative"
            >
              <div className="relative">
                {/* Main Icon */}
                {/* Floating Elements */}
                <div className="absolute inset-0">
                  {stats.map((stat, index) => (
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
        </button>
      </div>
      {/* Auto-play Toggle */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-3 rounded-full transition-all duration-300 ${
            isAutoPlaying ? 'bg-green-500/20 text-green-400' : 'bg-white/20 text-white'
          }`}
        >
          <Play className={`w-5 h-5 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
        </button>
      {/* Main content */}
          className="absolute inset-0 flex items-center"
        >
          <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-6xl">{revolutionaryContent[currentSlide].image}</span>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${revolutionaryContent[currentSlide].color}`}>
                    {revolutionaryContent[currentSlide].status}
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-2 text-white">
                  {revolutionaryContent[currentSlide].title}
                </h2>
                <p className="text-xl text-purple-300 mb-4">
                  {revolutionaryContent[currentSlide].subtitle}
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  {revolutionaryContent[currentSlide].description}
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h3>
                  <div className="flex flex-wrap gap-2">
                    {revolutionaryContent[currentSlide].features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-300 text-sm rounded-full border border-purple-400/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Impact:</h3>
                  <p className="text-indigo-300 italic">
                    {revolutionaryContent[currentSlide].impact}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <span className="mr-1">👁️</span>
                  {revolutionaryContent[currentSlide].stats.views}
                </span>
                <span className="flex items-center">
                  <span className="mr-1">❤️</span>
                  {revolutionaryContent[currentSlide].stats.likes}
                </span>
                <span className="flex items-center">
                  <span className="mr-1">📤</span>
                  {revolutionaryContent[currentSlide].stats.shares}
                </span>
              </div>
              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${revolutionaryContent[currentSlide].color} px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Explore Technology →
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            {/* Visual element */}
            <div className="relative">
              <div className={`w-full h-80 bg-gradient-to-br ${revolutionaryContent[currentSlide].color} rounded-2xl flex items-center justify-center text-8xl opacity-20`}>
                {revolutionaryContent[currentSlide].image}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <span className="text-2xl">‹</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <span className="text-2xl">›</span>
      </button>
      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
      {/* Dots Navigation */}
      <div className="flex justify-center space-x-3 mt-8">
        {revolutionaryContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          key={currentSlide}
        />
      {/* Content Preview Grid */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {revolutionaryContent.map((content, index) => (
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
            <h3 className="text-sm font-semibold mb-1 line-clamp-2">{content.title}</h3>
            <p className="text-xs opacity-75 line-clamp-2">{content.subtitle}</p>
          </divbutton>
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
    </div>
  );
};
export default RevolutionaryContentCarousel;
</div></div></div></div></div></div></div></div>