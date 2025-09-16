import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/create-and-deploy-new-content-4964

const EnhancedContentCarousel2025 = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';

<<<<<<< HEAD
<<<<<<< HEAD
const EnhancedContentCarousel2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
>>>>>>> cursor/create-and-deploy-new-content-9c82
=======

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
>>>>>>> cursor/create-and-deploy-new-content-f1f3

<<<<<<< HEAD
=======
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-ec50
  const contentItems = [
    {
      id: 1,
<<<<<<< HEAD
      title: 'Next-Gen AI Consciousness',
      description: 'Experience truly conscious artificial intelligence that thinks, feels, and evolves beyond human comprehension',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/NextGenAIConsciousness2025',
      features: ['Self-aware AI systems', 'Emotional intelligence', 'Quantum consciousness', 'Transcendent learning']
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-173f
  const contentSlides = [
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
>>>>>>> cursor/create-and-deploy-new-content-ed0b
=======
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
    {
      id: 1,
      title: "Conscious AI Revolution",
      subtitle: "Experience AI that thinks and feels",
      description: "Our breakthrough artificial intelligence demonstrates self-awareness, emotional intelligence, and ethical decision-making capabilities that are reshaping industries worldwide.",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing", 
        "Ethical reasoning capabilities",
        "Contextual understanding"
      ],
      stats: { performance: "99.9%", accuracy: "98.7%", efficiency: "300%" },
=======
      title: "AI Consciousness Engine",
      description: "Revolutionary AI that achieves true consciousness and self-awareness, capable of creative thought and emotional understanding.",
>>>>>>> cursor/create-and-deploy-new-content-af01
      image: "🧠",
      color: "from-purple-600 to-pink-600",
<<<<<<< HEAD
<<<<<<< HEAD
=======
      link: "/pages/AISolutionsComprehensive2025"
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30",
<<<<<<< HEAD
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Autonomous learning"],
      link: "/pages/UltimateTechRevolution2025"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
=======
>>>>>>> cursor/create-and-deploy-new-content-173f
=======
>>>>>>> cursor/create-and-deploy-new-content-8449
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-f1f3
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/create-and-deploy-new-content-4964
=======
      features: ["Self-aware processing", "Emotional intelligence", "Creative problem solving", "Conscious decision making"],
      link: "/pages/UltimateAIConsciousness2032"
>>>>>>> cursor/create-and-deploy-new-content-af01
>>>>>>> cursor/create-and-deploy-new-content-ec50
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
<<<<<<< HEAD
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

=======
      id: 3,
      title: "Interdimensional Computing",
      description: "Breakthrough technology that transcends dimensional boundaries, enabling computation across multiple realities.",
      image: "🌌",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-600/20 to-purple-600/20",
      borderColor: "border-indigo-400/30",
      features: ["Cross-dimensional processing", "Reality bridging", "Multiverse communication", "Dimensional travel"],
      link: "/pages/RevolutionaryTechBreakthrough2030"
    }
  ];

  const contentSlides = contentItems;

>>>>>>> cursor/create-and-deploy-new-content-ec50
  const nextSlide = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-173f
=======
>>>>>>> cursor/create-and-deploy-new-content-af01
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
=======
>>>>>>> cursor/create-and-deploy-new-content-173f
=======
>>>>>>> cursor/create-and-deploy-new-content-8449
>>>>>>> cursor/create-and-deploy-new-content-f1f3
=======
>>>>>>> cursor/create-and-deploy-new-content-af01
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
=======
      link: "/pages/AISolutionsComprehensive2025"
=======
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      subtitle: "Unprecedented processing power",
      description: "Witness quantum computing solving impossible problems with exponential speed improvements and parallel universe calculations that redefine what's possible.",
      features: [
        "Quantum superposition processing",
        "Exponential speed improvements",
        "Parallel universe calculations",
        "Zero-latency responses"
      ],
      stats: { performance: "∞", accuracy: "99.99%", efficiency: "1000x" },
      image: "⚛️",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      subtitle: "Direct brain-computer connection",
      description: "Revolutionary neural interfaces enable seamless communication between human consciousness and digital systems, opening new possibilities for human-AI collaboration.",
      features: [
        "Non-invasive neural reading",
        "Thought-to-action conversion",
        "Emotional state analysis",
        "Memory enhancement"
      ],
      stats: { performance: "99.8%", accuracy: "97.3%", efficiency: "500%" },
      image: "🧬",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      subtitle: "Processing beyond reality",
      description: "Revolutionary computing technology that operates across multiple dimensions, enabling solutions to problems that exist beyond our current understanding of reality.",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation algorithms",
        "Temporal computing capabilities",
        "Cross-reality synchronization"
      ],
      stats: { performance: "∞", accuracy: "100%", efficiency: "∞" },
      image: "🌌",
      color: "from-orange-600 to-red-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    }
  ];

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "CTO, FutureTech Corp",
      quote: "Zion Tech Group's AI solutions have transformed our entire operation. The conscious AI not only understands our business needs but anticipates them.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      title: "CEO, Quantum Solutions Inc",
      quote: "The quantum processing capabilities have solved problems we've been working on for decades. The speed is simply mind-blowing.",
      rating: 5
    },
    {
      name: "Dr. Elena Volkov",
      title: "Research Director, Interdimensional Labs", 
      quote: "Working with interdimensional computing has opened up possibilities we never imagined. It's like having access to infinite resources.",
      rating: 5
    }
  ];
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-ed0b
=======
=======
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const nextSlide = () => {
<<<<<<< HEAD
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
=======
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
>>>>>>> origin/cursor/create-and-deploy-new-content-4964
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

=======
=======
>>>>>>> cursor/create-and-deploy-new-content-f1f3
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
=======
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/create-and-deploy-new-content-af01
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🌟 Revolutionary Technology Experience
          </h2>
<<<<<<< HEAD
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
<<<<<<< HEAD
            Discover the most advanced technologies that are reshaping our world and defining the future
=======
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary Technology 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technologies that are reshaping our world. 
            From conscious AI to interdimensional computing, experience the future today.
>>>>>>> cursor/create-and-deploy-new-content-ed0b
=======
=======
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
>>>>>>> cursor/create-and-deploy-new-content-af01
            Explore our most advanced technologies with interactive demonstrations and real-time features
>>>>>>> cursor/create-and-deploy-new-content-f1f3
          </p>
        </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Carousel Container */}
=======
>>>>>>> cursor/create-and-deploy-new-content-f1f3
=======
        {/* Main Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
        <div className="relative max-w-6xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Main Content Display */}
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div className="space-y-6">
                <div className="text-8xl mb-4">{contentItems[currentSlide].icon}</div>
                <h3 className="text-4xl font-bold mb-4">
                  {contentItems[currentSlide].title}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {contentItems[currentSlide].description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {contentItems[currentSlide].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 bg-gradient-to-r ${contentItems[currentSlide].gradient} rounded-full flex items-center justify-center text-sm font-bold`}>
                        ✓
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-173f
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
=======
          <div className="overflow-hidden rounded-2xl">
>>>>>>> cursor/create-and-deploy-new-content-af01
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
<<<<<<< HEAD
=======
        {/* Main Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
>>>>>>> cursor/create-and-deploy-new-content-ed0b
=======
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
            >
<<<<<<< HEAD
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color}/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-6xl">{slide.image}</div>
                          <div>
                            <h3 className="text-4xl font-bold mb-2">{slide.title}</h3>
                            <p className="text-xl text-purple-200">{slide.subtitle}</p>
                          </div>
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <button className={`w-full mt-4 bg-gradient-to-r ${slide.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                          Start Interactive Demo →
                        </button>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
=======
>>>>>>> cursor/create-and-deploy-new-content-173f
                      </div>
                      <span className="text-lg">{feature}</span>
=======
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-2565

                        <p className="text-lg opacity-90 leading-relaxed">
                          {slide.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(slide.stats).map(([key, value], idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold">{value}</div>
                              <div className="text-sm opacity-70 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <motion.a
                            href={slide.link}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                          >
                            Explore Technology →
                          </motion.a>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
                          >
                            Watch Demo
                          </motion.button>
                        </div>
                      </motion.div>

                      {/* Visual */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                      >
                        <div className="relative w-full h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 overflow-hidden">
                          {/* Animated Background Elements */}
                          <motion.div
                            animate={{
                              y: [0, -20, 0],
                              rotate: [0, 5, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl"
                          >
                            {slide.image}
                          </motion.div>

                          <motion.div
                            animate={{
                              y: [0, 20, 0],
                              rotate: [0, -5, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1
                            }}
                            className="absolute top-16 right-12 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-xl"
                          >
                            ⚡
                          </motion.div>

                          <motion.div
                            animate={{
                              y: [0, -15, 0],
                              x: [0, 10, 0]
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 2
                            }}
                            className="absolute bottom-20 left-16 w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-xl"
                          >
                            🚀
                          </motion.div>

                          {/* Central Hub */}
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 360]
                            }}
                            transition={{
                              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl"
                          >
                            ⚡
                          </motion.div>
                        </div>
                      </motion.div>
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-ed0b
=======
>>>>>>> cursor/create-and-deploy-new-content-8449
=======
              {contentSlides.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.bgColor} p-8 rounded-2xl border ${item.borderColor} backdrop-blur-sm`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4">{item.image}</div>
                        <h3 className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                          {item.title}
                        </h3>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a
                          href={item.link}
                          className={`inline-block bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                        >
                          Explore Technology →
                        </a>
                      </div>
                      <div className="hidden lg:block">
                        <div className={`w-full h-64 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-8xl opacity-20`}>
                          {item.image}
                        </div>
>>>>>>> cursor/create-and-deploy-new-content-af01
                      </div>
>>>>>>> cursor/create-and-deploy-new-content-f1f3
=======
=======
                        <button className={`w-full mt-4 bg-gradient-to-r ${slide.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                          Start Interactive Demo →
                        </button>
>>>>>>> cursor/create-and-deploy-new-content-8449
=======
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
>>>>>>> origin/cursor/create-and-deploy-new-content-4964
                      </div>
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  ))}
                </div>
<<<<<<< HEAD

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a 
                    href={contentItems[currentSlide].link}
                    className={`bg-gradient-to-r ${contentItems[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                  >
                    Explore Technology →
                  </a>
                  <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual Demo Area */}
              <div className="bg-gradient-to-br from-gray-700/50 to-purple-700/50 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-6 animate-pulse">
                    {contentItems[currentSlide].icon}
=======
<<<<<<< HEAD
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
=======
>>>>>>> cursor/create-and-deploy-new-content-173f
=======
>>>>>>> cursor/create-and-deploy-new-content-8449
>>>>>>> cursor/create-and-deploy-new-content-f1f3
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-4964
=======
>>>>>>> cursor/create-and-deploy-new-content-af01
>>>>>>> cursor/create-and-deploy-new-content-ec50
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">What Industry Leaders Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm opacity-70">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
          {/* Navigation Controls */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50"
            >
              <span className="text-2xl">‹</span>
            </button>
            
            {/* Slide Indicators */}
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-173f
          <div className="flex justify-center items-center space-x-4 mt-8">
=======
          <div className="flex justify-center mt-8 space-x-4">
>>>>>>> cursor/create-and-deploy-new-content-af01
            <button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
=======
>>>>>>> cursor/create-and-deploy-new-content-173f
=======
>>>>>>> cursor/create-and-deploy-new-content-8449
>>>>>>> cursor/create-and-deploy-new-content-f1f3
=======
>>>>>>> cursor/create-and-deploy-new-content-af01
            <div className="flex space-x-2">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
=======
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
<<<<<<< HEAD
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
=======
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
>>>>>>> cursor/create-and-deploy-new-content-173f
=======
>>>>>>> cursor/create-and-deploy-new-content-8449
>>>>>>> cursor/create-and-deploy-new-content-f1f3
=======
                    index === currentSlide 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
>>>>>>> cursor/create-and-deploy-new-content-af01
                  }`}
                />
              ))}
            </div>
            
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50"
            >
              <span className="text-2xl">›</span>
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-af01
            <button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-173f
=======
>>>>>>> cursor/create-and-deploy-new-content-8449
>>>>>>> cursor/create-and-deploy-new-content-f1f3
            </button>
=======
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
>>>>>>> origin/cursor/create-and-deploy-new-content-4964
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
<<<<<<< HEAD
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Available Demos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
=======
<<<<<<< HEAD
            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm opacity-80">
              {currentSlide + 1} of {contentSlides.length}
            </span>
          </div>
        </div>

=======
>>>>>>> cursor/create-and-deploy-new-content-173f
=======
>>>>>>> cursor/create-and-deploy-new-content-f1f3
        {/* Technology Tags */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4">
            <div className="text-sm opacity-80">Featured Technologies:</div>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Conscious AI</span>
              <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-xs">Quantum Computing</span>
              <span className="px-3 py-1 bg-emerald-500/30 rounded-full text-xs">Interdimensional Tech</span>
              <span className="px-3 py-1 bg-indigo-500/30 rounded-full text-xs">Neural Interfaces</span>
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">Reality Control</span>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d256e03ecdf2b9940ff43c4a7082338ad0fc85bb
=======
        {/* Quick Access Grid */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-center mb-4 text-white">⚡ Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {contentItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`p-3 rounded-lg transition-all duration-300 text-center group ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <div className="text-xs font-semibold">{item.title.split(' ')[0]}</div>
              </button>
            ))}
>>>>>>> cursor/create-and-deploy-new-content-9c82
=======
>>>>>>> cursor/create-and-deploy-new-content-173f
=======
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
=======
>>>>>>> cursor/create-and-deploy-new-content-8449
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-f1f3
          </div>
=======
            </button>
          </div>
>>>>>>> cursor/create-and-deploy-new-content-af01
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">What Industry Leaders Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm opacity-70">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
>>>>>>> cursor/create-and-deploy-new-content-ed0b
=======
>>>>>>> cursor/create-and-deploy-new-content-63f0
>>>>>>> origin/cursor/create-and-deploy-new-content-2565
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies already using our revolutionary technologies to transform their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              Download Whitepaper
            </motion.button>
          </div>
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-4964
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;