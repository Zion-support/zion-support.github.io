import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Brain,
  Cpu as CpuIcon,
  Globe,
  Rocket as RocketIcon,
  Shield,
  Star,
  TrendingUp,
  X
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewContent2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "AI Content Marketing",
      metric: "500% Engagement",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      metric: "99.99% Protection",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Autonomous BI",
      metric: "400% Speed",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CpuIcon,
      title: "Synthetic Intelligence",
      metric: "1000% Improvement",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Metaverse Business",
      metric: "500% Collaboration",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: RocketIcon,
      title: "Revolutionary Tech",
      metric: "600% Innovation",
      color: "from-pink-500 to-rose-500"
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
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                      New Content 2026
                    </span>
                  </div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Revolutionary Content Solutions Now Available
                </h2>
                
                <p className="text-purple-100 text-lg mb-4">
                  Discover cutting-edge AI, quantum security, and autonomous business solutions
                </p>

                {/* Rotating Feature Display */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${features[currentFeature].color} flex items-center justify-center`}>
                        {React.createElement(features[currentFeature].icon, { className: "h-5 w-5 text-white" })}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{features[currentFeature].title}</div>
                        <div className="text-purple-200 text-sm">{features[currentFeature].metric}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    to="/ultimate-content-showcase-2026"
                    className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
                  >
                    Explore New Content
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/blog"
                    className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    Read Latest Posts
                    <TrendingUp className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right Content - Metrics */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <div className="text-2xl font-bold text-white">500%</div>
                  <div className="text-purple-200 text-sm">Engagement Boost</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <div className="text-2xl font-bold text-white">1000%</div>
                  <div className="text-purple-200 text-sm">ROI Increase</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <div className="text-2xl font-bold text-white">99.99%</div>
                  <div className="text-purple-200 text-sm">Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-300"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Animated Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 w-4 h-4 bg-pink-400/30 rounded-full"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 w-3 h-3 bg-purple-400/30 rounded-full"
          />
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 left-20 w-2 h-2 bg-cyan-400/30 rounded-full"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContent2026PromotionBanner;