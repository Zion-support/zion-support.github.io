import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Zap, 
  ArrowRight, 
  X, 
  Brain,
  Rocket,
  Shield,
  Cpu,
  TrendingUp,
  Users,
  CheckCircle,
  Lightbulb,
  Globe,
  Target
} from 'lucide-react';

const RevolutionaryContentPromotionBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "AI Consciousness Revolution",
      description: "Achieve human-level AI consciousness and reasoning",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Quantum-AI Fusion",
      description: "10,000x faster processing with quantum computing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Space Technology Platform",
      description: "Commercial space operations and exploration",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Defense",
      description: "Autonomous threat detection and defense",
      color: "from-red-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold mb-8 shadow-lg shadow-purple-500/25"
            >
              <Star className="w-5 h-5 mr-2 animate-spin" />
              REVOLUTIONARY CONTENT 2026
              <Star className="w-5 h-5 ml-2 animate-spin" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Revolutionary Technology
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Breakthroughs 2026
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Discover the most advanced technology solutions that will revolutionize your business. 
              From AI consciousness to quantum computing - the future is here.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              <div className="flex items-center text-white">
                <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
                <span className="text-2xl font-bold">10,000x</span>
                <span className="text-gray-300 ml-2">Faster</span>
              </div>
              <div className="flex items-center text-white">
                <Target className="w-6 h-6 mr-2 text-blue-400" />
                <span className="text-2xl font-bold">99.9%</span>
                <span className="text-gray-300 ml-2">Accuracy</span>
              </div>
              <div className="flex items-center text-white">
                <Users className="w-6 h-6 mr-2 text-purple-400" />
                <span className="text-2xl font-bold">500%</span>
                <span className="text-gray-300 ml-2">Productivity</span>
              </div>
            </motion.div>
          </div>

          {/* Feature Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Featured Revolutionary Solutions</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${features[currentFeature].color} mb-6`}>
                    {React.createElement(features[currentFeature].icon, { 
                      className: "w-12 h-12 text-white" 
                    })}
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4">
                    {features[currentFeature].title}
                  </h4>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {features[currentFeature].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Feature Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentFeature 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-gray-300 text-sm">Thousands of businesses transformed with measurable ROI</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Innovation First</h4>
              <p className="text-gray-300 text-sm">Cutting-edge technology ahead of the competition</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Global Impact</h4>
              <p className="text-gray-300 text-sm">Revolutionary solutions for worldwide transformation</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/revolutionary-content-2026"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center justify-center group"
              >
                Explore Revolutionary Solutions
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Custom Consultation
                <Users className="w-6 h-6 ml-2" />
              </Link>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              Join 10,000+ businesses already transforming with our revolutionary technology
            </p>
          </motion.div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default RevolutionaryContentPromotionBanner2026;