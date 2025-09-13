'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Zap, 
  TrendingUp,
  Gift,
  Clock,
  CheckCircle
} from 'lucide-react';

const NewContent2025PromotionBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    "Futuristic AI Services 2026",
    "Business Transformation Revolution",
    "Interactive Success Metrics",
    "Next-Gen AI Showcase"
  ];

  return (
    <section className="relative py-12 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-4"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              🚀 NEW CONTENT JUST LAUNCHED! 🚀
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 mb-6 max-w-4xl mx-auto"
          >
            Experience the future with our revolutionary AI services and business transformation solutions. 
            Limited-time exclusive access with incredible bonuses!
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-full mb-8 shadow-2xl"
          >
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-bold mr-4">LIMITED TIME:</span>
            <div className="flex space-x-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="text-2xl font-bold">{value.toString().padStart(2, '0')}</div>
                  <div className="text-xs uppercase">{unit}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature}</h3>
              <div className="text-gray-300 text-sm">Revolutionary technology at your fingertips</div>
            </motion.div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-xl border border-green-400/30"
          >
            <Gift className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">FREE Consultation</h3>
            <p className="text-gray-300 text-sm">Get personalized strategy session worth $500</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl border border-blue-400/30"
          >
            <Zap className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">50% OFF</h3>
            <p className="text-gray-300 text-sm">Limited-time discount on all services</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-xl border border-purple-400/30"
          >
            <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Guaranteed ROI</h3>
            <p className="text-gray-300 text-sm">500%+ return on investment or money back</p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="inline-block"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-black font-bold text-xl rounded-full shadow-2xl transition-all duration-300 flex items-center mx-auto"
            >
              <span className="mr-3">🔥 GET INSTANT ACCESS NOW 🔥</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-gray-300 text-sm mt-4"
          >
            ⚡ Join 50,000+ businesses already transforming with our AI solutions ⚡
          </motion.p>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 text-4xl"
      >
        ✨
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 text-4xl"
      >
        🚀
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -15, 0],
          x: [0, 5, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 right-20 text-3xl"
      >
        💎
      </motion.div>
    </section>
  );
};

export default NewContent2025PromotionBanner;