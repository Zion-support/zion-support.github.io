import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  X, 
  Star, 
  Zap, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  Clock,
  Gift,
  Sparkles
} from 'lucide-react';

export const PromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "🚀 New AI Services Available!",
      subtitle: "Revolutionary AI solutions starting at $199/month",
      cta: "Explore Now",
      link: "/service-showcase",
      color: "from-purple-500 to-pink-500",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 2,
      title: "⭐ 30% Off First Project!",
      subtitle: "Limited time offer - Transform your business today",
      cta: "Claim Discount",
      link: "/contact",
      color: "from-orange-500 to-red-500",
      icon: <Gift className="w-6 h-6" />
    },
    {
      id: 3,
      title: "📊 Success Stories Available",
      subtitle: "See how we've helped 500+ businesses transform",
      cta: "View Cases",
      link: "/case-studies",
      color: "from-green-500 to-emerald-500",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  // Auto-rotate promotions every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentPromo];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPromo}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-4 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <div className="absolute top-2 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3 right-20 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-2 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="font-semibold text-sm sm:text-base">
                  {currentPromotion.title}
                </span>
              </div>
              
              <div className="hidden md:block">
                <p className="text-sm opacity-90">
                  {currentPromotion.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to={currentPromotion.link}
                className="hidden sm:inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-semibold group"
              >
                {currentPromotion.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                aria-label="Close banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile content */}
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <p className="text-sm opacity-90 mb-3">
              {currentPromotion.subtitle}
            </p>
            <Link
              to={currentPromotion.link}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-semibold"
            >
              {currentPromotion.cta}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Promotion indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentPromo ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to promotion ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const SpecialOfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed bottom-4 right-4 z-50 max-w-sm"
    >
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl shadow-2xl border border-orange-400 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Gift className="w-5 h-5" />
              <span className="font-bold text-sm">LIMITED TIME</span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <h3 className="font-bold text-lg mb-2">30% Off Your First Project!</h3>
          <p className="text-sm opacity-90 mb-4">
            Transform your business with our cutting-edge technology solutions
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-xs opacity-75">
              <Clock className="w-3 h-3 inline mr-1" />
              Offer expires soon
            </div>
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Claim Now
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const AchievementBanner = () => {
  const achievements = [
    { icon: <Award className="w-5 h-5" />, text: "500+ Projects Completed" },
    { icon: <Users className="w-5 h-5" />, text: "10K+ Happy Clients" },
    { icon: <Star className="w-5 h-5" />, text: "4.9/5 Rating" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "99.9% Success Rate" }
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 py-8 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-3">
                {achievement.icon}
              </div>
              <div className="text-sm font-semibold text-gray-700">
                {achievement.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};