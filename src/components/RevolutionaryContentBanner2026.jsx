import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Globe, 
  Rocket, 
  Star,
  ArrowRight,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';
const RevolutionaryContentBanner2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const revolutionaryContent = [
    {
      id: 1,
      title: "Synthetic Intelligence 2026",
      subtitle: "Beyond Artificial Intelligence",
      description: "The next evolution of AI that combines consciousness, creativity, and emotional intelligence in ways never seen before.",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-900/20 to-pink-900/20",
      link: "/blog/synthetic-intelligence-2026-beyond-artificial-intelligence",
      stats: "14 min read • 12.5K views"
    },
    {
      id: 2,
      title: "Interdimensional Data Networks",
      subtitle: "Computing Across Realities",
      description: "Revolutionary networking technology that enables data transmission and processing across multiple dimensions and parallel universes.",
      icon: Globe,
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-900/20 to-cyan-900/20",
      link: "/blog/interdimensional-data-networks-computing-realities",
      stats: "18 min read • 8.7K views"
    },
    {
      id: 3,
      title: "Consciousness Transfer Technology",
      subtitle: "Digital Immortality",
      description: "Revolutionary technology that enables human consciousness to be transferred to digital substrates, achieving true digital immortality.",
      icon: Zap,
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-gradient-to-br from-emerald-900/20 to-teal-900/20",
      link: "/blog/consciousness-transfer-technology-digital-immortality",
      stats: "20 min read • 15.2K views"
    },
    {
      id: 4,
      title: "Reality Engineering",
      subtitle: "Shaping the Physical World with Code",
      description: "Revolutionary technology that allows programmers to directly manipulate physical reality through advanced quantum programming interfaces.",
      icon: Rocket,
      color: "from-orange-600 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-900/20 to-red-900/20",
      link: "/blog/reality-engineering-shaping-physical-world-code",
      stats: "17 min read • 9.8K views"
    },
    {
      id: 5,
      title: "Cosmic Intelligence Networks",
      subtitle: "AI Across the Galaxy",
      description: "Revolutionary AI systems that can operate across vast cosmic distances, enabling interplanetary and interstellar artificial intelligence networks.",
      icon: Star,
      color: "from-indigo-600 to-purple-600",
      bgColor: "bg-gradient-to-br from-indigo-900/20 to-purple-900/20",
      link: "/blog/cosmic-intelligence-networks-ai-across-galaxy",
      stats: "19 min read • 11.3K views"
    }
  ];
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  const currentContent = revolutionaryContent[currentSlide];
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden"
        >
          {/* Main Banner */}
          <div className={`relative ${currentContent.bgColor} backdrop-blur-sm border border-white/10 rounded-2xl p-8 mx-4 my-8`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-lg"></div>
            </div>
            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left Side - Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4"
                  >
                    <Sparkles className="w-4 h-4" />
                    NEW REVOLUTIONARY CONTENT 2026
                    <TrendingUp className="w-4 h-4" />
                  </motion.div>
                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl lg:text-4xl font-bold text-white mb-2"
                  >
                    {currentContent.title}
                  </motion.h2>
                  {/* Subtitle */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className={`text-xl lg:text-2xl font-semibold bg-gradient-to-r ${currentContent.color} bg-clip-text text-transparent mb-4`}
                  >
                    {currentContent.subtitle}
                  </motion.h3>
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-gray-300 text-lg mb-6 max-w-2xl"
                  >
                    {currentContent.description}
                  </motion.p>
                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex items-center justify-center lg:justify-start gap-6 mb-6"
                  >
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{currentContent.stats}</span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-semibold">FEATURED</span>
                    </div>
                  </motion.div>
                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    <Link
                      to={currentContent.link}
                      className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-2 border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                    >
                      Explore All Content
                    </Link>
                  </motion.div>
                </div>
                {/* Right Side - Icon */}
                <div className="flex-shrink-0">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`relative p-8 bg-gradient-to-br ${currentContent.color} rounded-2xl shadow-2xl`}
                  >
                    <currentContent.icon className="w-24 h-24 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-black" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {revolutionaryContent.map((_, index) => (
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
          {/* Quick Access Grid */}
          <div className="px-4 mb-8">
            <h3 className="text-2xl font-bold text-white text-center mb-6">More Revolutionary Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {revolutionaryContent.slice(0, 3).map((content, index) => (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <Link
                    to={content.link}
                    className={`block ${content.bgColor} backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 bg-gradient-to-br ${content.color} rounded-lg`}>
                        <content.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">{content.title}</h4>
                        <p className="text-gray-400 text-xs">{content.stats}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-2">{content.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default RevolutionaryContentBanner2026;