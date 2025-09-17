import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Clock,
  ExternalLink,
  Play,
  Sparkles,
  Brain,
  Rocket,
  Zap
} from 'lucide-react';
const FeaturedContentCarousel2026: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredContent = [
    {
      id: 1,
      title: "AI Innovation Showcase 2026",
      subtitle: "Revolutionary AI Technologies",
      description: "Discover the latest breakthroughs in artificial intelligence, from autonomous AI agents to consciousness-driven computing systems that are reshaping industries worldwide.",
      image: "/images/ai-innovation-showcase-2026.jpg",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      views: "12.5K",
      rating: 4.9,
      tags: ["AI", "Innovation", "Technology", "Future"],
      link: "/ai-innovation-showcase-2026",
      icon: Brain,
      gradient: "from-blue-600 to-purple-600",
      stats: {
        innovations: "15+",
        caseStudies: "25+",
        successRate: "99.7%"
      },
      featured: true
    },
    {
      id: 2,
      title: "Next-Gen Tech Trends 2026",
      subtitle: "Future Technology Predictions",
      description: "Explore the revolutionary technologies that will define the next decade, including quantum-classical hybrid computing, interdimensional processing, and neural-quantum interfaces.",
      image: "/images/next-gen-tech-trends-2026.jpg",
      category: "Technology Trends",
      readTime: "12 min read",
      views: "8.7K",
      rating: 4.8,
      tags: ["Trends", "Predictions", "Future", "Innovation"],
      link: "/next-gen-tech-trends-2026",
      icon: TrendingUp,
      gradient: "from-purple-600 to-pink-600",
      stats: {
        predictions: "6+",
        marketSize: "$8.3T",
        timeline: "2026-2030"
      },
      featured: true
    },
    {
      id: 3,
      title: "Advanced AI Solutions 2026",
      subtitle: "Enterprise AI Transformation",
      description: "Transform your business with cutting-edge AI solutions designed for enterprise-scale deployment, featuring autonomous operations and real-time intelligent analytics.",
      image: "/images/advanced-ai-solutions-2026.jpg",
      category: "Enterprise Solutions",
      readTime: "10 min read",
      views: "15.2K",
      rating: 4.9,
      tags: ["Enterprise", "AI", "Solutions", "Business"],
      link: "/advanced-ai-solutions-2026",
      icon: Rocket,
      gradient: "from-green-600 to-blue-600",
      stats: {
        clients: "500+",
        deployments: "1000+",
        efficiency: "85%"
      },
      featured: true
    },
    {
      id: 4,
      title: "Consciousness Computing 2026",
      subtitle: "Ethical AI Systems",
      description: "Explore the next frontier of AI with consciousness-driven computing systems that demonstrate advanced self-awareness, ethical reasoning, and moral decision-making capabilities.",
      image: "/images/consciousness-computing-2026.jpg",
      category: "Cognitive AI",
      readTime: "9 min read",
      views: "6.3K",
      rating: 4.7,
      tags: ["Consciousness", "Ethics", "AI", "Cognitive"],
      link: "/consciousness-computing-2026",
      icon: Zap,
      gradient: "from-orange-600 to-red-600",
      stats: {
        frameworks: "12+",
        compliance: "99.9%",
        applications: "50+"
      },
      featured: false
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [featuredContent.length]);
  const currentContent = featuredContent[currentIndex];
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 font-semibold">FEATURED CONTENT</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Latest Innovations & Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge content showcasing the future of technology, AI innovations, and revolutionary solutions transforming industries worldwide.
          </p>
        </motion.div>
        {/* Main Content Card */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${currentContent.gradient} rounded-xl`}>
                      <currentContent.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full">
                        {currentContent.category}
                      </span>
                      {currentContent.featured && (
                        <span className="ml-2 px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {currentContent.title}
                  </h3>
                  <p className="text-xl text-purple-400 font-semibold mb-6">
                    {currentContent.subtitle}
                  </p>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {currentContent.description}
                  </p>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(currentContent.stats).map(([key, value], index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentContent.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {/* Meta Info */}
                  <div className="flex items-center gap-6 mb-8 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{currentContent.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{currentContent.views} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{currentContent.rating}</span>
                    </div>
                  </div>
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300`}
                  >
                    <Play className="w-5 h-5" />
                    Explore Content
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
                {/* Visual */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentContent.gradient} opacity-20`}></div>
                  <div className="relative h-full min-h-[500px] flex items-center justify-center p-12">
                    <div className="relative">
                      <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                        <currentContent.icon className="w-32 h-32 text-white/60" />
                      </div>
                      {/* Floating elements */}
                      <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -top-8 -right-8 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
                      >
                        <Sparkles className="w-8 h-8 text-white/60" />
                      </motion.div>
                      <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                        className="absolute -bottom-8 -left-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                      >
                        <Star className="w-6 h-6 text-white/60" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-400 scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {featuredContent.slice(0, 3).map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-slate-800/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? 'ring-2 ring-purple-400/50' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-gradient-to-r ${content.gradient} rounded-lg`}>
                    <content.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-purple-400 font-semibold">{content.category}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{content.readTime}</span>
                      <Users className="w-3 h-3 ml-2" />
                      <span>{content.views}</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{content.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{content.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">{content.rating}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

};


export default FeaturedContentCarousel2026;
