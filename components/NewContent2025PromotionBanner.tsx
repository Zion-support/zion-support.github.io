import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ArrowRight, 
  Brain, 
  Atom, 
  Cog, 
  Zap, 
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  Play,
  BookOpen,
  Download
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
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/20 to-pink-600/20",
      url: "/ai-2025-2030-predictions",
      features: ["Interactive Timeline", "Industry Analysis", "Technology Roadmap", "ROI Projections"]
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
      icon: Atom,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      url: "/quantum-computing-breakthroughs-2025",
      features: ["Quantum Algorithms", "Hardware Analysis", "Applications", "Implementation Guide"]
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
      icon: Cog,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-600/20 to-emerald-600/20",
      url: "/advanced-automation-solutions-2025",
      features: ["Process Automation", "AI Integration", "ROI Calculator", "Case Studies"]
    }
  ];

  const stats = [
    { label: "New Content Added", value: "50+", icon: BookOpen },
    { label: "Total Views", value: "2.5M+", icon: Users },
    { label: "User Engagement", value: "95%", icon: TrendingUp },
    { label: "Content Quality", value: "99.9%", icon: Star }
  ];

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
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            New Content 2025 - Revolutionary Insights
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Our Latest Breakthrough Content
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore cutting-edge AI predictions, quantum computing breakthroughs, and advanced automation solutions 
            that are reshaping the future of technology and business.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {featuredContent.map((content, index) => (
                <div
                  key={content.id}
                  className={`${index === currentSlide ? 'block' : 'hidden'} relative`}
                >
                  <div className={`bg-gradient-to-r ${content.bgColor} rounded-2xl p-8 md:p-12 border border-white/20`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Content Info */}
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${content.color} flex items-center justify-center`}>
                            <content.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-purple-400 font-semibold text-sm">{content.category}</div>
                            <div className="text-gray-300 text-sm">{content.type}</div>
                          </div>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {content.title}
                        </h3>

                        <p className="text-lg text-gray-300 mb-6">
                          {content.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {content.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {content.views} views
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            {content.likes} likes
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {content.duration}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link
                            to={content.url}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                          >
                            <BookOpen className="w-5 h-5 mr-2" />
                            Read Full Content
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Link>
                          <button className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                            <Play className="w-5 h-5 mr-2" />
                            Watch Preview
                          </button>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="relative">
                        <div className={`w-full h-64 rounded-xl bg-gradient-to-br ${content.color} opacity-20 flex items-center justify-center`}>
                          <content.icon className="w-32 h-32 text-white/60" />
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </div>
                        </div>
                        
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 gap-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${content.color} flex items-center justify-center mr-4`}>
                  <content.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    {content.category}
                  </h4>
                  <p className="text-gray-400 text-sm">{content.type}</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {content.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {content.views}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {content.likes}
                  </div>
                </div>
                
                <Link
                  to={content.url}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Revolutionary Content?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already leveraging our cutting-edge insights 
              to transform their businesses and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/content-library"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Full Library
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/newsletter"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Download className="w-5 h-5 mr-2" />
                Get Weekly Updates
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewContent2025PromotionBanner;