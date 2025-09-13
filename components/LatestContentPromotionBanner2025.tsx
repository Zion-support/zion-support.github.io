import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  Rocket,
  Clock,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

const LatestContentPromotionBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredContent = [
    {
      id: 'ai-automation-2025',
      title: 'AI Automation Revolution 2025',
      subtitle: 'Transform Your Business Operations',
      description: 'Revolutionary AI-powered automation suite that reduces costs by 60% and increases productivity by 400%. Experience the future of business operations.',
      price: 'Starting at $2,499/month',
      marketPrice: 'Market: $4,500-8,000/month',
      savings: 'Save up to $5,500/month',
      icon: Brain,
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      features: ['24/7 Autonomous Operations', 'Natural Language Processing', 'Advanced Analytics', 'Custom Integration'],
      benefits: ['60% Cost Reduction', '400% Productivity Boost', '2-Month ROI', '99.9% Uptime'],
      category: 'AI Automation',
      trending: true,
      new: true,
      customers: '500+',
      rating: 4.9
    },
    {
      id: 'quantum-computing-2025',
      title: 'Quantum Computing Solutions',
      subtitle: 'Unprecedented Computational Power',
      description: 'Harness the power of quantum computing for financial risk assessment, cryptography, and complex optimization problems.',
      price: 'Starting at $4,999/month',
      marketPrice: 'Market: $8,000-15,000/month',
      savings: 'Save up to $10,000/month',
      icon: Zap,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      features: ['Quantum Risk Modeling', 'Portfolio Optimization', 'Real-time Analysis', 'Predictive Analytics'],
      benefits: ['85% Better Risk Assessment', '40% Volatility Reduction', 'Quantum Advantage', 'Future-proof'],
      category: 'Quantum Computing',
      trending: true,
      new: true,
      customers: '200+',
      rating: 4.8
    },
    {
      id: 'blockchain-defi-2025',
      title: 'DeFi Platform Development',
      subtitle: 'Decentralized Finance Revolution',
      description: 'Complete DeFi platform with smart contracts, liquidity pools, and automated market making for the decentralized economy.',
      price: 'Starting at $3,999/month',
      marketPrice: 'Market: $7,000-15,000/month',
      savings: 'Save up to $11,000/month',
      icon: Shield,
      gradient: 'from-green-500 via-blue-500 to-purple-500',
      features: ['Smart Contract Development', 'Liquidity Pool Management', 'AMM Integration', 'Cross-chain Support'],
      benefits: ['Faster Protocol Launch', 'Built-in Security', 'Scalable Architecture', 'Community Governance'],
      category: 'DeFi Development',
      trending: false,
      new: true,
      customers: '300+',
      rating: 4.7
    }
  ];

  const stats = [
    { label: 'Active Customers', value: '1,000+', icon: Users },
    { label: 'Average Rating', value: '4.8/5', icon: Star },
    { label: 'Cost Savings', value: '$2.5M+', icon: TrendingUp },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Clock }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const currentContent = featuredContent[currentSlide];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Award className="w-4 h-4" />
              Latest Technology Solutions 2025
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Revolutionary
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your business with cutting-edge AI, quantum computing, blockchain, and IoT solutions. 
            Experience unprecedented efficiency, security, and innovation.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured Content Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {currentContent.new && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        NEW
                      </span>
                    )}
                    {currentContent.trending && (
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        TRENDING
                      </span>
                    )}
                    <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {currentContent.category}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {currentContent.title}
                  </h2>
                  <h3 className="text-xl md:text-2xl text-blue-200 mb-6">
                    {currentContent.subtitle}
                  </h3>
                  <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                    {currentContent.description}
                  </p>

                  {/* Pricing */}
                  <div className="bg-white/10 rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold text-white">{currentContent.price}</div>
                        <div className="text-blue-200 text-sm">{currentContent.marketPrice}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-semibold">{currentContent.savings}</div>
                        <div className="text-blue-200 text-sm">{currentContent.customers} customers</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(currentContent.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-white font-semibold">{currentContent.rating}</span>
                      <span className="text-blue-200">({currentContent.customers} reviews)</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {currentContent.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-blue-100">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-8 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    >
                      Get Started Now
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border-2 border-white/30 text-white py-4 px-8 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className={`w-64 h-64 bg-gradient-to-r ${currentContent.gradient} rounded-3xl flex items-center justify-center shadow-2xl`}>
                      <currentContent.icon className="w-32 h-32 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-8 gap-3">
            {featuredContent.map((_, index) => (
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
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 text-center"
        >
          <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our revolutionary technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 py-4 px-8 rounded-2xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white py-4 px-8 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Solutions
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestContentPromotionBanner2025;