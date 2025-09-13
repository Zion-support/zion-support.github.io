import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Zap, 
  TrendingUp, 
  ArrowRight,
  Play,
  Download,
  Share2,
  X,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const NewContent2025PromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "AI 2025 Ultimate Breakthroughs",
      description: "Revolutionary AI solutions with 10,000x faster processing",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Exponential problem-solving with quantum advantage",
      icon: <Star className="w-6 h-6" />,
      color: "from-indigo-600 to-purple-600"
    },
    {
      title: "Advanced Automation Suite",
      description: "2,500% ROI with intelligent process automation",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-emerald-600 to-blue-600"
    },
    {
      title: "Success Stories & Case Studies",
      description: "Proven results from 50+ companies transformed",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-amber-600 to-orange-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            NEW: Revolutionary Content 2025
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Discover the Future of AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Explore our latest breakthrough content featuring AI solutions, quantum computing, 
            advanced automation, and real success stories from industry leaders.
          </motion.p>
        </div>

        {/* Feature Carousel */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${feature.color} ${
                  currentFeature === index ? 'scale-105 shadow-2xl' : 'scale-100'
                } transition-all duration-500 cursor-pointer group`}
                onClick={() => setCurrentFeature(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                  {currentFeature === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 bg-white rounded-full"
                    />
                  )}
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-white/80 text-sm">
                  {feature.description}
                </p>

                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300">Success Stories</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">3,200%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10,000x</div>
            <div className="text-gray-300">Speed Improvement</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center group">
              <Download className="w-5 h-5 mr-2" />
              Download Resources
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center group">
              <Share2 className="w-5 h-5 mr-2" />
              Share Content
            </button>
          </div>

          <p className="text-gray-400 text-sm">
            Join thousands of professionals already using our AI solutions
          </p>
        </motion.div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2"
      >
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

export default NewContent2025PromotionBanner;