import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ArrowRight, 
  Brain, 
  Atom, 
  Cog, 
  Globe, 
  Zap, 
  TrendingUp,
  BookOpen,
  Play,
  Download,
  Share2,
  Clock,
  Users,
  Target
} from 'lucide-react';

const NewContent2025PromotionBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredContent = [
    {
      id: 1,
      title: "AI 2025-2030: Comprehensive Future Predictions",
      description: "Revolutionary predictions shaping the next decade of artificial intelligence with breakthrough technologies and industry transformations.",
      category: "AI Predictions",
      type: "Interactive Report",
      duration: "45 min read",
      views: "12.5K",
      likes: "2.3K",
      trending: true,
      featured: true,
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/20 to-pink-600/20",
      url: "/ai-2025-2030-predictions",
      stats: {
        predictions: "50+",
        accuracy: "99.9%",
        impact: "2,500% ROI"
      }
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs 2025",
      description: "Revolutionary quantum technologies reshaping computation and cryptography with real-world applications achieving quantum advantage.",
      category: "Quantum Computing",
      type: "Technical Guide",
      duration: "30 min read",
      views: "8.7K",
      likes: "1.8K",
      trending: true,
      featured: true,
      icon: Atom,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      url: "/quantum-computing-breakthroughs-2025",
      stats: {
        qubits: "1,000+",
        speedup: "10^15x",
        accuracy: "99.9%"
      }
    },
    {
      id: 3,
      title: "Advanced Automation Solutions 2025",
      description: "Revolutionary automation technologies transforming business operations with unprecedented efficiency and ROI through intelligent process automation.",
      category: "Automation",
      type: "Implementation Guide",
      duration: "35 min read",
      views: "15.2K",
      likes: "3.1K",
      trending: true,
      featured: true,
      icon: Cog,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-600/20 to-emerald-600/20",
      url: "/advanced-automation-solutions-2025",
      stats: {
        efficiency: "2,500%",
        costReduction: "85%",
        accuracy: "99.9%"
      }
    }
  ];

  const currentContent = featuredContent[currentSlide];

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            New Content 2025 - Revolutionary Breakthroughs
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Future of Technology
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore our latest revolutionary content featuring AI predictions, quantum computing breakthroughs, 
            and advanced automation solutions that are reshaping industries worldwide.
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-r ${currentContent.bgColor} rounded-2xl p-8 border border-white/20 overflow-hidden`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Details */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${currentContent.color} flex items-center justify-center`}>
                    <currentContent.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-300">{currentContent.category}</span>
                      {currentContent.trending && (
                        <div className="flex items-center px-2 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </div>
                      )}
                      {currentContent.featured && (
                        <div className="flex items-center px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </div>
                      )}
                    </div>
                    <span className="text-sm text-gray-400">{currentContent.type}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {currentContent.title}
                </h3>

                <p className="text-lg text-gray-300 mb-6">
                  {currentContent.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(currentContent.stats).map(([key, value], index) => (
                    <div key={index} className="text-center p-3 bg-white/10 rounded-lg">
                      <div className="text-xl font-bold text-white">{value}</div>
                      <div className="text-sm text-gray-300 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={currentContent.url}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Read Full Content
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <button className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </button>
                  <button className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </button>
                </div>
              </div>

              {/* Content Preview */}
              <div className="relative">
                <div className={`w-full h-80 rounded-xl bg-gradient-to-br ${currentContent.color} p-8 flex items-center justify-center`}>
                  <currentContent.icon className="w-32 h-32 text-white/80" />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center text-white">
                    <Eye className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{currentContent.views}</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center text-white">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{currentContent.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
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
        </div>

        {/* Content Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            More Revolutionary Content
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
              >
                <div className={`h-32 bg-gradient-to-r ${content.color} flex items-center justify-center`}>
                  <content.icon className="w-12 h-12 text-white" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">{content.category}</span>
                    <div className="flex items-center gap-2">
                      {content.trending && (
                        <div className="flex items-center px-2 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {content.views}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.duration}
                    </div>
                  </div>
                  
                  <Link
                    to={content.url}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the Revolution
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest content, breakthrough insights, and revolutionary technology updates. 
              Join thousands of forward-thinking professionals shaping the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/content-library"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Globe className="w-5 h-5 mr-2" />
                Explore Full Library
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/newsletter"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Users className="w-5 h-5 mr-2" />
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewContent2025PromotionBanner;