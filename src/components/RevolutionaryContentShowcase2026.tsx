import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Bot, 
  TrendingUp, 
  Star, 
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

interface RevolutionaryContentShowcase2026Props {
  className?: string;
}

const RevolutionaryContentShowcase2026: React.FC<RevolutionaryContentShowcase2026Props> = ({ 
  className = "" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const revolutionaryContent = [
    {
      id: 1,
      icon: Brain,
      title: "Next-Generation Autonomous Systems 2026",
      category: "Blog Post",
      description: "Revolutionary AI consciousness and quantum neural networks transforming enterprise operations with 99.9% efficiency",
      link: "/blog/ai-2026-next-generation-autonomous-systems-ultimate-breakthrough",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      stats: "99.9% Efficiency",
      featured: true,
      readTime: "12 min read"
    },
    {
      id: 2,
      icon: Zap,
      title: "Quantum AI Business Transformation Guide",
      category: "Ultimate Guide",
      description: "The definitive guide to implementing quantum AI for 500% ROI and market leadership in 2026",
      link: "/blog/quantum-ai-2026-business-transformation-guide",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-600/20 to-cyan-600/20",
      stats: "500% ROI",
      featured: true,
      readTime: "18 min read"
    },
    {
      id: 3,
      icon: Bot,
      title: "Enterprise Quantum AI Success Story",
      category: "Case Study",
      description: "How a Fortune 500 company achieved 400% ROI with quantum consciousness AI transformation",
      link: "/case-studies/enterprise-quantum-ai-transformation-2026",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-600/20 to-emerald-600/20",
      stats: "400% ROI",
      featured: true,
      readTime: "15 min read"
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Quantum Consciousness Implementation Master Guide",
      category: "Implementation Guide",
      description: "Step-by-step guide to implementing quantum consciousness AI systems with proven success metrics",
      link: "/resources/ai-2026-quantum-consciousness-implementation-master-guide",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-600/20 to-red-600/20",
      stats: "1000% ROI",
      featured: true,
      readTime: "25 min read"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % revolutionaryContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [revolutionaryContent.length]);

  const handleContentClick = (link: string) => {
    window.location.href = link;
  };

  const currentContent = revolutionaryContent[currentIndex];

  return (
    <div className={`revolutionary-content-showcase-2026 ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full mb-4"
        >
          <Star className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-semibold">REVOLUTIONARY CONTENT 2026</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
        >
          Next-Generation AI Revolution
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Discover the breakthrough technologies and strategies that are transforming enterprise operations in 2026
        </motion.p>
      </div>

      {/* Main Content Showcase */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentContent.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`relative bg-gradient-to-br ${currentContent.bgGradient} backdrop-blur-lg rounded-3xl p-8 border border-white/10 cursor-pointer group hover:scale-105 transition-all duration-500`}
                onClick={() => handleContentClick(currentContent.link)}
              >
                {/* Featured Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  FEATURED
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                  <span className="text-white text-sm font-medium">{currentContent.category}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentContent.gradient} p-4 mb-6`}>
                  <currentContent.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {currentContent.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Stats and Meta */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-purple-300">
                      <Target className="w-4 h-4 mr-1" />
                      <span className="text-sm font-semibold">{currentContent.stats}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{currentContent.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center text-purple-300 group-hover:text-white transition-colors">
                  <span className="font-semibold mr-2">Explore Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Animated Background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Content Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Key Benefits */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                Key Benefits
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Revolutionary AI consciousness capabilities
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Quantum-enhanced processing power
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Proven ROI of 400-1000%
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  Enterprise-ready implementation guides
                </li>
              </ul>
            </div>

            {/* Success Metrics */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award className="w-6 h-6 text-yellow-400 mr-2" />
                Success Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">99.9%</div>
                  <div className="text-sm text-gray-400">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">500%</div>
                  <div className="text-sm text-gray-400">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">1000x</div>
                  <div className="text-sm text-gray-400">Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-300">98%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {revolutionaryContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-purple-400 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* All Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Explore All Revolutionary Content
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revolutionaryContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${content.bgGradient} backdrop-blur-lg rounded-2xl p-6 border border-white/10 cursor-pointer group hover:scale-105 transition-all duration-300`}
                onClick={() => handleContentClick(content.link)}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${content.gradient} p-3 mb-4`}>
                  <content.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="text-xs text-purple-300 font-semibold mb-2">
                  {content.category}
                </div>
                
                <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                  {content.title}
                </h4>
                
                <p className="text-gray-300 text-sm mb-4">
                  {content.description.substring(0, 100)}...
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 text-sm font-semibold">
                    {content.stats}
                  </span>
                  <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;