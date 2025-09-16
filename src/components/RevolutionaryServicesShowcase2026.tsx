import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Rocket, 
  Star, 
  Infinity, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Shield,
  Users,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

const RevolutionaryServicesShowcase2026: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % featuredServices.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredServices.length]);

  const currentService = featuredServices[currentServiceIndex];

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'Revolutionary AI':
      case 'Consciousness AI':
        return <Brain className="w-8 h-8" />;
      case 'Quantum Technology':
      case 'Quantum AI':
        return <Zap className="w-8 h-8" />;
      case 'Space Technology':
        return <Rocket className="w-8 h-8" />;
      case 'Holographic Technology':
        return <Globe className="w-8 h-8" />;
      case 'Digital Immortality':
        return <Star className="w-8 h-8" />;
      case 'Reality Technology':
        return <Infinity className="w-8 h-8" />;
      default:
        return <Sparkles className="w-8 h-8" />;
    }
  };

  const getServiceGradient = (category: string) => {
    switch (category) {
      case 'Revolutionary AI':
      case 'Consciousness AI':
        return 'from-purple-500 to-pink-500';
      case 'Quantum Technology':
      case 'Quantum AI':
        return 'from-blue-500 to-cyan-500';
      case 'Space Technology':
        return 'from-orange-500 to-red-500';
      case 'Holographic Technology':
        return 'from-green-500 to-emerald-500';
      case 'Digital Immortality':
        return 'from-yellow-500 to-amber-500';
      case 'Reality Technology':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Revolutionary Services 2026
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          >
            Transform Your Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
          >
            Discover revolutionary AI services that will reshape your business and unlock unlimited potential
          </motion.p>
        </div>

        {/* Main Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentServiceIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Service Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${getServiceGradient(currentService.category)}`}>
                      {getServiceIcon(currentService.category)}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-300 uppercase tracking-wide">
                        {currentService.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {currentService.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {currentService.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {currentService.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Features</h4>
                      <ul className="space-y-2">
                        {currentService.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-white">
                        {formatPrice(currentService.price)}
                      </div>
                      <div className="text-sm text-gray-400">Starting price</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {currentService.aiScore}/100
                      </div>
                      <div className="text-sm text-gray-400">AI Score</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {currentService.reviews.rating}
                      </div>
                      <div className="text-sm text-gray-400">Rating</div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-8 rounded-xl font-bold text-white bg-gradient-to-r ${getServiceGradient(currentService.category)} hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Service Visualization */}
                <div className="relative">
                  <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                      <div className={`absolute inset-0 bg-gradient-to-r ${getServiceGradient(currentService.category)} opacity-20`} />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-32 h-32 rounded-full bg-gradient-to-r from-white/20 to-white/10 flex items-center justify-center"
                      >
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${getServiceGradient(currentService.category)} flex items-center justify-center`}>
                          {getServiceIcon(currentService.category)}
                        </div>
                      </motion.div>
                    </div>

                    {/* Floating Particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        animate={{
                          x: [0, Math.random() * 200 - 100],
                          y: [0, Math.random() * 200 - 100],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}

                    {/* Service Stats */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-white">{currentService.aiScore}</div>
                            <div className="text-xs text-gray-400">AI Score</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{currentService.reviews.count}</div>
                            <div className="text-xs text-gray-400">Reviews</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{currentService.deliveryTime}</div>
                            <div className="text-xs text-gray-400">Delivery</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentServiceIndex((prev) => (prev - 1 + featuredServices.length) % featuredServices.length)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {featuredServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentServiceIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentServiceIndex((prev) => (prev + 1) % featuredServices.length)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`p-3 rounded-full transition-colors ${
                isAutoPlaying ? 'bg-purple-500 hover:bg-purple-600' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {isAutoPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Service Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">All Revolutionary Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.02, y: -5 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getServiceGradient(service.category)}`}>
                    {getServiceIcon(service.category)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{service.title}</h4>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">
                    {formatPrice(service.price)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.reviews.rating}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-2 px-4 rounded-lg font-semibold text-white bg-gradient-to-r ${getServiceGradient(service.category)} hover:shadow-lg transition-all duration-300`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryServicesShowcase2026;