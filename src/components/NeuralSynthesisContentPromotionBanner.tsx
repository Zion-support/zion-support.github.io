import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Brain, Zap, Target, ArrowRight, Sparkles } from 'lucide-react';

export const NeuralSynthesisContentPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      title: "Neural Synthesis Breakthrough",
      description: "The next evolution of AI intelligence - 15,000% improvement in problem-solving",
      link: "/blog/ai-2025-neural-synthesis-breakthrough",
      icon: <Brain className="w-5 h-5" />,
      color: "from-purple-500 to-blue-500",
      badge: "BREAKTHROUGH"
    },
    {
      title: "Quantum-AI Fusion Guide",
      description: "Revolutionary applications transforming industries with 10Mx faster computation",
      link: "/blog/quantum-ai-fusion-2025-revolutionary-applications",
      icon: <Zap className="w-5 h-5" />,
      color: "from-emerald-500 to-cyan-500",
      badge: "REVOLUTIONARY"
    },
    {
      title: "Enterprise Success Story",
      description: "$50 billion transformation case study - Fortune 100 company results",
      link: "/case-studies/global-enterprise-quantum-ai-transformation-2025",
      icon: <Target className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      badge: "CASE STUDY"
    }
  ];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-6 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Sparkles className="w-6 h-6 animate-pulse text-yellow-400" />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping"></div>
                </div>
                <div>
                  <span className="font-bold text-lg bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    NEURAL SYNTHESIS REVOLUTION
                  </span>
                  <div className="text-sm text-gray-300">Breakthrough AI content now available</div>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center space-x-8">
                {contentItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="group flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                          {item.badge}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-white group-hover:text-yellow-300 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-300 line-clamp-2">
                        {item.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/resources/ai-2025-implementation-master-guide"
                className="hidden sm:inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Brain className="w-4 h-4 mr-2" />
                Master Guide
              </Link>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <div className="lg:hidden mt-6 pt-6 border-t border-white/20">
            <div className="grid grid-cols-1 gap-4">
              {contentItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="group flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        {item.badge}
                      </span>
                    </div>
                    <div className="font-bold text-white group-hover:text-yellow-300 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-300 mt-1">
                      {item.description}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
              
              <Link
                to="/resources/ai-2025-implementation-master-guide"
                className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Brain className="w-5 h-5" />
                <span>Complete Implementation Master Guide</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};