import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Cpu,
  Brain,
  Rocket,
  Award,
  ChevronRight,
  Play,
  BookOpen,
  X,
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import { getFeaturedBlogPosts, getRecentBlogPosts } from '../data/blog-posts';

const UltimateContentBanner2025 = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setFeaturedPosts(getFeaturedBlogPosts());
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const bannerContent = [
    {
      title: "🚀 AI Revolution 2025",
      subtitle: "Discover the latest breakthroughs in artificial intelligence",
      description: "Explore cutting-edge AI technologies that are reshaping industries and creating new possibilities for human-machine collaboration.",
      cta: "Explore AI Content",
      link: "/ai-solutions",
      color: "from-purple-600 to-blue-600",
      icon: Brain
    },
    {
      title: "🔒 Cybersecurity Fortress",
      subtitle: "Protect your digital assets with advanced security",
      description: "Learn about the latest cybersecurity measures and best practices to safeguard your organization's critical data and systems.",
      cta: "Secure Your Future",
      link: "/cybersecurity",
      color: "from-red-600 to-orange-600",
      icon: Shield
    },
    {
      title: "🌱 Green Tech Revolution",
      subtitle: "Building a sustainable digital future",
      description: "Discover how technology companies are implementing sustainable practices and green innovations to create a better tomorrow.",
      cta: "Go Green",
      link: "/sustainability",
      color: "from-green-600 to-emerald-600",
      icon: Globe
    }
  ];

  const quickStats = [
    { label: "New Articles", value: "48+", icon: BookOpen },
    { label: "Expert Authors", value: "15+", icon: Award },
    { label: "Categories", value: "12+", icon: TrendingUp },
    { label: "Featured", value: "25+", icon: Star }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-400 font-semibold text-sm uppercase tracking-wide">
                  New Content Available
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ultimate Tech
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {' '}Showcase 2025
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover the most comprehensive collection of technology insights, 
                AI breakthroughs, and future innovations. Stay ahead with expert 
                analysis and cutting-edge research.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {quickStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                  >
                    <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/ultimate-content-showcase-2025"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Explore All Content
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/blog"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read Latest Articles
                </Link>
              </div>
            </motion.div>

            {/* Rotating Content Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100, rotateY: 90 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -100, rotateY: -90 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${bannerContent[currentSlide].color} rounded-xl flex items-center justify-center mb-6`}>
                      <bannerContent[currentSlide].icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {bannerContent[currentSlide].title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {bannerContent[currentSlide].description}
                    </p>
                    
                    <Link
                      to={bannerContent[currentSlide].link}
                      className={`inline-flex items-center bg-gradient-to-r ${bannerContent[currentSlide].color} text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300`}
                    >
                      {bannerContent[currentSlide].cta}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {bannerContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-purple-400 scale-125' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Articles Preview */}
      <div className="bg-slate-800/50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-gray-300">
              Handpicked content showcasing the latest in technology innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.slice(0, 3).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-yellow-400 flex items-center text-sm">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    Featured
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                  <span>{post.publishDate}</span>
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 text-sm"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/ultimate-content-showcase-2025"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300 z-10"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default UltimateContentBanner2025;