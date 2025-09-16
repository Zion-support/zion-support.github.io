import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Rocket, 
  X,
  Play,
  BookOpen,
  Sparkles
} from 'lucide-react';

const RevolutionaryContentBanner2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "AI Consciousness 2026: The Dawn of Digital Sentience",
      excerpt: "Revolutionary breakthroughs in artificial consciousness that are creating truly sentient AI systems.",
      category: "AI Consciousness",
      readTime: "15 min read",
      image: "/images/blog/ai-consciousness-2026-dawn-sentience.jpg",
      slug: "ai-consciousness-2026-dawn-digital-sentience",
      featured: true,
      badge: "NEW"
    },
    {
      id: 2,
      title: "Quantum Neural Networks: Computing at the Speed of Thought",
      excerpt: "How quantum-enhanced neural networks are achieving unprecedented processing speeds and capabilities.",
      category: "Quantum Computing",
      readTime: "12 min read",
      image: "/images/blog/quantum-neural-networks-speed-thought.jpg",
      slug: "quantum-neural-networks-computing-speed-thought",
      featured: true,
      badge: "BREAKTHROUGH"
    },
    {
      id: 3,
      title: "Revolutionary AI Services 2026",
      excerpt: "Experience the future of artificial intelligence with our cutting-edge services that are reshaping reality.",
      category: "AI Services",
      readTime: "Explore Now",
      image: "/images/services/revolutionary-ai-services-2026.jpg",
      slug: "revolutionary-ai-services-2026",
      featured: true,
      badge: "FEATURED"
    },
    {
      id: 4,
      title: "Metaverse 3.0: The Ultimate Digital Universe",
      excerpt: "The next evolution of the metaverse featuring photorealistic avatars and seamless reality integration.",
      category: "Metaverse Technology",
      readTime: "14 min read",
      image: "/images/blog/metaverse-3-0-ultimate-digital-universe.jpg",
      slug: "metaverse-3-0-ultimate-digital-universe",
      featured: true,
      badge: "REVOLUTIONARY"
    },
    {
      id: 5,
      title: "Autonomous AI Agents: The Future Workforce",
      excerpt: "Revolutionary AI agents that can independently manage entire business operations and drive innovation.",
      category: "AI Automation",
      readTime: "11 min read",
      image: "/images/blog/autonomous-ai-agents-future-workforce.jpg",
      slug: "autonomous-ai-agents-future-workforce",
      featured: true,
      badge: "FUTURE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'NEW': return 'bg-green-500';
      case 'BREAKTHROUGH': return 'bg-blue-500';
      case 'FEATURED': return 'bg-purple-500';
      case 'REVOLUTIONARY': return 'bg-red-500';
      case 'FUTURE': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Consciousness': return Brain;
      case 'Quantum Computing': return Zap;
      case 'AI Services': return Rocket;
      case 'Metaverse Technology': return Sparkles;
      case 'AI Automation': return Play;
      default: return BookOpen;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Revolutionary Content 2026</h2>
                <p className="text-gray-300 text-sm">Discover the future of technology</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(featuredContent[currentSlide].badge)}`}>
                        {featuredContent[currentSlide].badge}
                      </span>
                      <div className="flex items-center text-blue-400 text-sm">
                        {React.createElement(getCategoryIcon(featuredContent[currentSlide].category), { className: "w-4 h-4 mr-1" })}
                        {featuredContent[currentSlide].category}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {featuredContent[currentSlide].title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-lg">
                      {featuredContent[currentSlide].excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center text-gray-400 text-sm">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {featuredContent[currentSlide].readTime}
                      </div>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                      >
                        Explore Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                      </motion.button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            {React.createElement(getCategoryIcon(featuredContent[currentSlide].category), { className: "w-8 h-8 text-white" })}
                          </div>
                          <p className="text-white font-semibold">Revolutionary Technology</p>
                          <p className="text-white/70 text-sm">2026</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-yellow-900 fill-current" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredContent.slice(0, 4).map((item, index) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentSlide(index)}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white/20 border-blue-400'
                    : 'bg-white/5 border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  {React.createElement(getCategoryIcon(item.category), { className: "w-4 h-4 text-blue-400" })}
                  <span className={`px-2 py-1 rounded text-xs font-bold text-white ${getBadgeColor(item.badge)}`}>
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs line-clamp-2">
                  {item.excerpt}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;