import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  User, 
  Tag, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Cpu,
  Brain,
  Rocket,
  Target,
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  CheckCircle,
  ChevronLeft,
  Pause,
  PlayCircle
} from 'lucide-react';
import { getFeaturedBlogPosts, getRecentBlogPosts, getBlogCategories } from '../data/blog-posts';

const EnhancedContentCarousel2025 = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setFeaturedPosts(getFeaturedBlogPosts());
    setRecentPosts(getRecentBlogPosts(12));
    setCategories(getBlogCategories());
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, featuredPosts.length]);

  const contentSections = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2025',
      description: 'Discover the latest breakthroughs in artificial intelligence',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      posts: featuredPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('ai')))
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Explore the quantum realm and its applications',
      icon: Cpu,
      color: 'from-blue-600 to-cyan-600',
      posts: featuredPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('quantum')))
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Fortress',
      description: 'Protect your digital assets with advanced security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      posts: featuredPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('security')))
    },
    {
      id: 'sustainability',
      title: 'Green Technology',
      description: 'Building a sustainable digital future',
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      posts: featuredPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('green') || tag.toLowerCase().includes('sustainable')))
    },
    {
      id: 'automation',
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation',
      icon: Zap,
      color: 'from-yellow-600 to-orange-600',
      posts: featuredPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('automation')))
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      description: 'Edge-to-edge intelligence and distributed systems',
      icon: Globe,
      color: 'from-indigo-600 to-purple-600',
      posts: featuredPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('cloud')))
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Content
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {' '}Carousel
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our curated collection of cutting-edge technology insights
          </p>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={togglePlayPause}
              className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <PlayCircle className="w-6 h-6 text-white" />}
            </button>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                {featuredPosts[currentSlide] && (
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {featuredPosts[currentSlide].category}
                          </span>
                          <span className="text-yellow-400 flex items-center text-sm">
                            <Star className="w-4 h-4 fill-current mr-1" />
                            Featured
                          </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {featuredPosts[currentSlide].title}
                        </h3>
                        
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                          {featuredPosts[currentSlide].excerpt}
                        </p>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {featuredPosts[currentSlide].readTime}
                          </span>
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            {featuredPosts[currentSlide].author}
                          </span>
                          <span>{featuredPosts[currentSlide].publishDate}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {featuredPosts[currentSlide].tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          to={`/blog/${featuredPosts[currentSlide].slug}`}
                          className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group"
                        >
                          <BookOpen className="w-5 h-5 mr-2" />
                          Read Full Article
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                      
                      {/* Visual */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 h-80 flex items-center justify-center">
                          <BookOpen className="w-24 h-24 text-white opacity-50" />
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredPosts.slice(0, 6).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Explore by Category
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredCard(section.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300 relative z-10">
                  {section.title}
                </h4>
                
                <p className="text-gray-300 mb-4 relative z-10">
                  {section.description}
                </p>
                
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-purple-400 font-semibold">
                    {section.posts.length} Articles
                  </span>
                  <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Latest Articles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.slice(0, 6).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white opacity-50" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="text-yellow-400 flex items-center text-sm">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h4>
                  
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Explore More?
            </h3>
            <p className="text-xl text-purple-100 mb-6">
              Discover our complete collection of technology insights and innovations
            </p>
            <Link
              to="/ultimate-content-showcase-2025"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              View All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;