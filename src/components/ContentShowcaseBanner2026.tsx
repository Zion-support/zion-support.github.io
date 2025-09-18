import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Clock, Users, TrendingUp, Zap, Shield, Globe } from 'lucide-react';

const ContentShowcaseBanner2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const featuredContent = [
    {
      id: 1,
      title: "Revolutionary AI Services 2026",
      subtitle: "Cutting-edge artificial intelligence solutions",
      description: "Discover our latest AI innovations including quantum computing, neural interfaces, and synthetic intelligence platforms.",
      image: "/images/hero/ai-revolution-2026.jpg",
      category: "AI Innovation",
      readTime: "5 min read",
      featured: true,
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      icon: Zap,
      stats: { views: "2.3M", rating: 4.9 }
    },
      id: 2,
      title: "Quantum Computing Breakthrough",
      subtitle: "Practical applications in enterprise",
      description: "Explore how quantum computing is transforming industries with real-world applications and business solutions.",
      image: "/images/hero/quantum-computing-2026.jpg",
      category: "Quantum Tech",
      readTime: "12 min read",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      icon: Globe,
      stats: { views: "1.8M", rating: 4.8 }
      id: 3,
      title: "Neural Interface Future",
      subtitle: "Next frontier in human-computer interaction",
      description: "Brain-computer interfaces are revolutionizing how we interact with technology. Learn about the latest developments.",
      image: "/images/hero/neural-interfaces-2026.jpg",
      category: "Emerging Tech",
      readTime: "10 min read",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      icon: Users,
      stats: { views: "1.5M", rating: 4.7 }
      id: 4,
      title: "Cybersecurity Fortress 2026",
      subtitle: "Advanced protection against AI threats",
      description: "Comprehensive cybersecurity solutions powered by artificial intelligence to protect against intelligent threats.",
      image: "/images/hero/cybersecurity-2026.jpg",
      category: "Security",
      readTime: "8 min read",
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      icon: Shield,
      stats: { views: "2.1M", rating: 4.9 }
    }
  ];
  // Append our new 2026 evidence-led ops article to featured slides
  featuredContent.push({
    id: 5,
    title: "Autonomous, Evidence‑Led Ops",
    subtitle: "Run agents with auditable traces and eval gates",
    description: "Operationalize agents with traces, evaluation gates, and runtime guardrails that drive reliable autonomy.",
    image: "/images/hero/evidence-led-ops-2026.jpg",
    category: "Operations",
    readTime: "6 min read",
    featured: true,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: Zap,
    stats: { views: "1.1M", rating: 4.8 }
  });
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const currentContent = featuredContent[currentSlide];
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
          />
        ))}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">Featured Content</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Content</span>
            <br />
            for 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge insights, innovative solutions, and transformative technologies
            that are shaping the future of business and technology.
          </p>
        </motion.div>
        {/* Main Content Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Content Info */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${currentContent.gradient}`}>
                      <currentContent.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-purple-300">{currentContent.category}</span>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>{currentContent.readTime}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{currentContent.stats.rating}</span>
                        </div>
                      </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{currentContent.title}</h3>
                    <p className="text-lg text-purple-200 mb-4">{currentContent.subtitle}</p>
                    <p className="text-gray-300 text-lg leading-relaxed">{currentContent.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-300">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{currentContent.stats.views} views</span>
                        <Users className="w-4 h-4" />
                        <span>Featured</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      <span>Explore Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>
                {/* Content Image */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className={`aspect-video bg-gradient-to-br ${currentContent.gradient} flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <currentContent.icon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <p className="text-lg font-medium">Featured Content</p>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        {currentContent.category}
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
        </div>
        {/* Additional Content Grid */}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
          <h3 className="text-2xl font-bold text-white text-center mb-8">More Featured Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.slice(0, 4).map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${content.gradient} flex items-center justify-center mb-4`}>
                  <content.icon className="w-6 h-6 text-white" />
                <h4 className="text-lg font-semibold text-white mb-2">{content.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{content.subtitle}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{content.readTime}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{content.stats.rating}</span>
              </motion.div>
    </div>
  );
};
export default ContentShowcaseBanner2026;
