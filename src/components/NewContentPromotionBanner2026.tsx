import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Globe, Shield, Brain, Rocket } from 'lucide-react';

const NewContentPromotionBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 New 2026 Content Available!",
      subtitle: "Discover Revolutionary AI & Tech Solutions",
      description: "Explore our latest blog posts and cutting-edge services that are transforming industries worldwide.",
      cta: "Explore Now",
      icon: Rocket,
      gradient: "from-blue-600 to-purple-600",
      features: ["10+ New Blog Posts", "Advanced AI Services", "Quantum Computing Solutions"]
    },
    {
      id: 2,
      title: "⚡ AI Business Transformation",
      subtitle: "Complete Digital Revolution Package",
      description: "Transform your business with our comprehensive AI solutions and digital transformation services.",
      cta: "Get Started",
      icon: Brain,
      gradient: "from-green-600 to-teal-600",
      features: ["40% Efficiency Increase", "50% Cost Reduction", "Future-Ready Operations"]
    },
    {
      id: 3,
      title: "🌍 Sustainable Technology",
      subtitle: "Green Innovation for a Better Future",
      description: "Join the sustainable tech revolution with our eco-friendly solutions and green innovation services.",
      cta: "Learn More",
      icon: Globe,
      gradient: "from-emerald-600 to-green-600",
      features: ["50% Carbon Reduction", "Energy Optimization", "Environmental Compliance"]
    },
    {
      id: 4,
      title: "🔒 Advanced Cybersecurity",
      subtitle: "Next-Gen Protection for Digital Assets",
      description: "Protect your organization with our AI-powered cybersecurity solutions and threat detection systems.",
      cta: "Secure Now",
      icon: Shield,
      gradient: "from-red-600 to-orange-600",
      features: ["99.9% Threat Detection", "Real-time Response", "Zero False Positives"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentContent = promotionalContent[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-12"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-2 text-yellow-400 mb-4"
                  >
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-sm font-semibold uppercase tracking-wider">New Content 2026</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl lg:text-5xl font-bold text-white leading-tight"
                  >
                    {currentContent.title}
                  </motion.h2>

                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl lg:text-2xl text-blue-200 font-semibold"
                  >
                    {currentContent.subtitle}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg text-gray-300 leading-relaxed"
                  >
                    {currentContent.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  >
                    {currentContent.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <span>{currentContent.cta}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:border-white/50">
                      View All Content
                    </button>
                  </motion.div>
                </div>

                {/* Visual Element */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className={`w-full h-80 bg-gradient-to-br ${currentContent.gradient} rounded-2xl p-8 flex items-center justify-center relative overflow-hidden`}>
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      className="relative z-10"
                    >
                      <currentContent.icon className="w-32 h-32 text-white/90" />
                    </motion.div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-500"></div>
                    <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>

                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Stats overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-2xl"
                  >
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      <div>
                        <div className="text-2xl font-bold text-gray-900">50+</div>
                        <div className="text-sm text-gray-600">New Services</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {promotionalContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;