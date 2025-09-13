import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Globe, 
  ArrowRight, 
  Play,
  Star,
  Award,
  Rocket
} from 'lucide-react';

export const QuantumAIBreakthroughShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const breakthroughItems = [
    {
      title: "Neural Synthesis Revolution",
      subtitle: "The Next Evolution of Intelligence",
      description: "Discover how Neural Synthesis technology is creating integrated cognitive networks that can synthesize information from multiple domains simultaneously, delivering 15,000% improvement in problem-solving efficiency.",
      link: "/blog/ai-2025-neural-synthesis-breakthrough",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-600 to-blue-600",
      stats: "15,000% improvement in problem-solving",
      category: "AI Innovation",
      featured: true
    },
    {
      title: "Quantum-AI Fusion Applications",
      subtitle: "Revolutionary Industry Transformations",
      description: "Explore how the fusion of quantum computing and AI is creating unprecedented capabilities, delivering 10,000,000x faster computation for specific problem types and revolutionizing entire industries.",
      link: "/blog/quantum-ai-fusion-2025-revolutionary-applications",
      icon: <Zap className="w-8 h-8" />,
      color: "from-emerald-600 to-cyan-600",
      stats: "10Mx faster computation capabilities",
      category: "Quantum Computing",
      featured: true
    },
    {
      title: "Global Enterprise Transformation",
      subtitle: "$50 Billion Success Story",
      description: "Learn how a Fortune 100 company achieved unprecedented transformation through Quantum-AI integration, generating $50 billion in additional enterprise value while revolutionizing their entire business model.",
      link: "/case-studies/global-enterprise-quantum-ai-transformation-2025",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-600 to-red-600",
      stats: "$50 billion additional enterprise value",
      category: "Case Study",
      featured: true
    },
    {
      title: "AI Implementation Master Guide",
      subtitle: "Complete Roadmap to Success",
      description: "The definitive guide to implementing AI solutions in 2025, featuring comprehensive strategies, best practices, and proven methodologies for achieving maximum ROI and business transformation.",
      link: "/resources/ai-2025-implementation-master-guide",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-indigo-600 to-purple-600",
      stats: "2,500% average ROI within 18 months",
      category: "Implementation Guide",
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % breakthroughItems.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [breakthroughItems.length]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (!isVisible) return null;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-semibold text-purple-300">BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Quantum-AI Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the revolutionary technologies and methodologies that are transforming industries and delivering unprecedented business results in 2025.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Content */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="relative h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full min-h-[500px] bg-gradient-to-br from-slate-800/50 to-purple-900/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${breakthroughItems[activeIndex].color}`}>
                      {breakthroughItems[activeIndex].icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-purple-300 font-semibold">{breakthroughItems[activeIndex].category}</div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {breakthroughItems[activeIndex].title}
                    </h3>
                    <p className="text-lg text-purple-300 mb-4">
                      {breakthroughItems[activeIndex].subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {breakthroughItems[activeIndex].description}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-4 mb-6 border border-purple-500/30">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-semibold text-white">
                        {breakthroughItems[activeIndex].stats}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={breakthroughItems[activeIndex].link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Explore Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Content Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="grid grid-cols-1 gap-6">
              {breakthroughItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/50'
                      : 'bg-slate-800/30 border-slate-700/50 hover:border-purple-500/30'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-purple-300 bg-purple-600/20 px-2 py-1 rounded">
                          {item.category}
                        </span>
                        {item.featured && (
                          <Award className="w-4 h-4 text-yellow-400" />
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl pointer-events-none"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <TrendingUp className="w-6 h-6" />, value: "2,500%", label: "Average ROI" },
            { icon: <Users className="w-6 h-6" />, value: "500+", label: "Companies Transformed" },
            { icon: <Globe className="w-6 h-6" />, value: "60+", label: "Countries Served" },
            { icon: <Award className="w-6 h-6" />, value: "$50B+", label: "Value Generated" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <div className="text-purple-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already achieved unprecedented success with our AI implementation methodologies and breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resources/ai-2025-implementation-master-guide"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Implementation Guide
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <Target className="w-5 h-5 mr-2" />
                View Success Stories
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};