import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Star, 
  Sparkles,
  Brain,
  Atom,
  Network,
  Infinity,
  Eye,
  Heart,
  Rocket,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const RevolutionaryContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Revolutionary Tech Insights 2026",
      description: "Discover the revolutionary technology insights that are reshaping our understanding of consciousness, reality, and intelligence.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900 to-pink-900",
      link: "/pages/RevolutionaryTechInsights2026",
      features: ["Consciousness Computing", "Quantum Reality Engineering", "Universal Mind Network"],
      status: "Revolutionary",
      rating: 5
    },
    {
      id: 2,
      title: "Future Tech Breakthrough 2026",
      description: "Experience the future of technology where consciousness, reality, and intelligence converge to create infinite possibilities.",
      icon: Atom,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-900 to-blue-900",
      link: "/pages/FutureTechBreakthrough2026",
      features: ["Consciousness Transfer", "Quantum Consciousness", "Universal Knowledge"],
      status: "Breakthrough",
      rating: 5
    },
    {
      id: 3,
      title: "Next-Gen Tech Showcase 2026",
      description: "Explore cutting-edge technologies including AI, quantum computing, blockchain, and biotechnology shaping the future.",
      icon: Network,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900 to-emerald-900",
      link: "/pages/NextGenTechShowcase2026",
      features: ["Consciousness Computing", "Quantum Reality Engine", "Universal Mind Network"],
      status: "Live Now",
      rating: 5
    },
    {
      id: 4,
      title: "Advanced AI Transformation 2026",
      description: "Revolutionary AI transformation solutions including autonomous agents, edge AI, generative AI, and advanced analytics.",
      icon: Infinity,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-900 to-red-900",
      link: "/pages/AdvancedAITransformation2026",
      features: ["Synthetic Intelligence", "Autonomous Decision Making", "Creative Problem Solving"],
      status: "Transcendent",
      rating: 5
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion 2026",
      description: "Experience the convergence of quantum computing and neural interfaces creating unprecedented computational power.",
      icon: Eye,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-900 to-purple-900",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Processing", "Neural Integration", "Consciousness Amplification"],
      status: "Advanced",
      rating: 5
    },
    {
      id: 6,
      title: "Synthetic Intelligence 2026",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities beyond human imagination.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-900 to-rose-900",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Autonomous AI Agents", "Synthetic Consciousness", "Collective Intelligence"],
      status: "Live Now",
      rating: 5
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

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <div className={`bg-gradient-to-br ${revolutionaryContent[currentSlide].bgColor} p-12 text-white relative overflow-hidden`}>
              {/* Animated Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -100, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 2, 1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${revolutionaryContent[currentSlide].color} rounded-xl flex items-center justify-center`}>
                        <revolutionaryContent[currentSlide].icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                          {revolutionaryContent[currentSlide].status}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                      {revolutionaryContent[currentSlide].title}
                    </h2>

                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      {revolutionaryContent[currentSlide].description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {revolutionaryContent[currentSlide].features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-8">
                      <div className="flex">
                        {[...Array(revolutionaryContent[currentSlide].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-white/80">({revolutionaryContent[currentSlide].rating}.0 rating)</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={revolutionaryContent[currentSlide].link}
                        className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                      >
                        <Play className="w-5 h-5" />
                        <span>Explore Now</span>
                      </a>
                      <button className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                        <span>Learn More</span>
                      </button>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                    <div className="relative w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-32 h-32 bg-gradient-to-r ${revolutionaryContent[currentSlide].color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                          <revolutionaryContent[currentSlide].icon className="w-16 h-16 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Interactive Demo</h3>
                        <p className="text-white/80">Experience the technology firsthand</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20"
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-3 mt-8">
        {revolutionaryContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
            isAutoPlaying 
              ? 'bg-green-500 text-white hover:bg-green-600' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {isAutoPlaying ? 'Pause Auto-play' : 'Start Auto-play'}
        </button>
      </div>

      {/* Content Grid Preview */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">All Revolutionary Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revolutionaryContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${content.bgColor} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => goToSlide(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${content.color} rounded-lg flex items-center justify-center`}>
                  <content.icon className="w-5 h-5 text-white" />
                </div>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">
                  {content.status}
                </span>
              </div>
              <h4 className="text-lg font-bold mb-2">{content.title}</h4>
              <p className="text-white/80 text-sm mb-4">{content.description}</p>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(content.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white/60 text-sm">({content.rating}.0)</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel;