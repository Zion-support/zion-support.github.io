import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  Brain,
  Zap,
  Cpu,
  Atom,
  Globe,
  Shield,
  Rocket,
  Sparkles,
  ExternalLink,
  Clock,
  Eye
} from 'lucide-react';
const UltimateContentShowcaseCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Showcase 2025",
      subtitle: "Experience the Future of Technology",
      description: "Discover revolutionary technologies that are reshaping our world. From AI consciousness to quantum computing, explore the most advanced innovations of 2025.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      category: "Technology",
      readTime: "15 min read",
      views: "2.3k",
      rating: 4.9,
      features: ["AI Consciousness", "Quantum Computing", "Neural Interfaces", "Revolutionary Tech"],
      color: "from-purple-500 to-pink-500",
      icon: Brain,
      href: "/ultimate-tech-showcase-2025"
    },
    {
      id: 2,
      title: "AI Innovation Revolution 2025",
      subtitle: "Transform Your Business with AI",
      description: "Experience the most advanced artificial intelligence technologies that are reshaping industries and creating unprecedented opportunities for growth.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "Artificial Intelligence",
      readTime: "12 min read",
      views: "3.1k",
      rating: 4.8,
      features: ["Conscious AI", "Quantum Neural Networks", "Autonomous Systems", "Real-time Learning"],
      color: "from-blue-500 to-cyan-500",
      icon: Zap,
      href: "/ai-innovation-revolution-2025"
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough",
      subtitle: "Unlock Unprecedented Computational Power",
      description: "Revolutionary quantum computing technologies that are solving problems previously thought impossible. Experience the future of computation.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
      category: "Quantum Computing",
      readTime: "18 min read",
      views: "1.8k",
      rating: 4.9,
      features: ["Quantum Supremacy", "Cryptographic Security", "Optimization Algorithms", "Molecular Simulation"],
      color: "from-green-500 to-emerald-500",
      icon: Atom,
      href: "/quantum-computing-breakthrough"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      subtitle: "Direct Brain-Computer Communication",
      description: "Breakthrough neural interface technologies that enable direct communication between the human brain and computers. The future of human-computer interaction.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      category: "Neural Technology",
      readTime: "20 min read",
      views: "2.7k",
      rating: 4.7,
      features: ["Brain-Computer Interface", "Neural Reality", "Consciousness Transfer", "Immersive Tech"],
      color: "from-orange-500 to-red-500",
      icon: Cpu,
      href: "/neural-interface-revolution"
    },
    {
      id: 5,
      title: "Space Technology 2030",
      subtitle: "Colonizing the Stars",
      description: "Next-generation space technologies that will enable human colonization of other worlds. From advanced propulsion to sustainable life support systems.",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
      category: "Space Technology",
      readTime: "16 min read",
      views: "1.5k",
      rating: 4.8,
      features: ["Interstellar Travel", "Space Colonization", "Advanced Propulsion", "Life Support"],
      color: "from-indigo-500 to-purple-500",
      icon: Rocket,
      href: "/space-technology-2030"
    },
    {
      id: 6,
      title: "Green Tech Revolution",
      subtitle: "Saving Our Planet",
      description: "Revolutionary environmental technologies that will reverse climate change and create a sustainable future for all humanity.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      category: "Green Technology",
      readTime: "14 min read",
      views: "2.9k",
      rating: 4.9,
      features: ["Carbon Capture", "Renewable Energy", "Climate Solutions", "Sustainability"],
      color: "from-green-500 to-teal-500",
      icon: Globe,
      href: "/green-tech-revolution"
    }
  ];
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  const slideVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 }
  };
  const currentItem = contentItems[currentSlide];
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the most revolutionary technologies and innovations that are reshaping our world. 
            Discover the future today.
          </p>
        </motion.div>
        {/* Main Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${currentItem.color} rounded-lg flex items-center justify-center`}>
                    <currentItem.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-purple-400 font-semibold text-sm uppercase tracking-wide">
                      {currentItem.category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{currentItem.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{currentItem.views} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{currentItem.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {currentItem.title}
                </h3>
                <p className="text-xl text-purple-200 font-medium">
                  {currentItem.subtitle}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {currentItem.description}
                </p>
                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {currentItem.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${currentItem.color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <Play className="w-5 h-5" />
                    <span>Explore Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
              {/* Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${currentItem.color} opacity-20`} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{currentItem.title}</h4>
                      <p className="text-gray-200 text-sm">{currentItem.subtitle}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-12">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-purple-400 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <Play className={`w-4 h-4 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </button>
        </div>
      </div>
    </div>
  );

export default UltimateContentShowcaseCarousel;
</div></div>