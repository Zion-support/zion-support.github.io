import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentPromotionBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 NEW: Ultimate Business Automation 2026",
      subtitle: "Transform your business with 80% cost reduction and 300% productivity boost",
      link: "/pages/UltimateBusinessAutomation2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🤖",
      urgency: "Limited Time Offer"
    },
    {
      id: 2,
      title: "🛡️ BREAKTHROUGH: Advanced Cybersecurity Solutions",
      subtitle: "Protect your digital assets with AI-powered threat detection and quantum encryption",
      link: "/pages/AdvancedCybersecuritySolutions2026",
      gradient: "from-red-600 to-orange-600",
      icon: "🔒",
      urgency: "Critical Security Alert"
    },
    {
      id: 3,
      title: "🌟 REVOLUTIONARY: Future Tech Innovation Hub",
      subtitle: "Explore consciousness AI, quantum internet, and neural interface technologies",
      link: "/pages/FutureTechInnovationHub2026",
      gradient: "from-indigo-600 to-purple-600",
      icon: "⚡",
      urgency: "Future Technology"
    },
    {
      id: 4,
      title: "🧠 BREAKTHROUGH: AI Revolutionary Technology",
      subtitle: "Experience the next evolution of artificial intelligence with autonomous reasoning",
      link: "/pages/AIRevolutionaryBreakthrough2026",
      gradient: "from-violet-600 to-fuchsia-600",
      icon: "🧠",
      urgency: "AI Revolution"
    },
    {
      id: 5,
      title: "⚛️ QUANTUM: Computing Revolution 2026",
      subtitle: "Unlock exponential processing power with 1000+ qubit quantum processors",
      link: "/pages/QuantumComputingRevolution2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡",
      urgency: "Quantum Breakthrough"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionalContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [promotionalContent.length]);

  if (!isVisible) return null;

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPromo}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${promotionalContent[currentPromo].gradient} rounded-2xl p-6 mb-8 relative overflow-hidden`}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/50 to-transparent"></div>
          
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-3xl animate-bounce">{promotionalContent[currentPromo].icon}</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white animate-pulse">
                  {promotionalContent[currentPromo].urgency}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {promotionalContent[currentPromo].title}
              </h3>
              <p className="text-white/90 text-lg max-w-3xl">
                {promotionalContent[currentPromo].subtitle}
              </p>
            </div>
            
            <div className="flex flex-col items-end space-y-3">
              <a
                href={promotionalContent[currentPromo].link}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg"
              >
                Explore Now →
              </a>
              <div className="flex space-x-2">
                {promotionalContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPromo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPromo ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Additional Promotion Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {promotionalContent.slice(0, 3).map((promo, index) => (
          <motion.div
            key={promo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${promo.gradient} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => window.location.href = promo.link}
          >
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-2xl">{promo.icon}</span>
              <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold text-white">
                {promo.urgency}
              </span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{promo.title}</h4>
            <p className="text-white/80 text-sm mb-4">{promo.subtitle}</p>
            <div className="flex items-center justify-between">
              <span className="text-white text-sm font-semibold">Explore →</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Special Announcement */}
      <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 mb-8">
        <div className="flex items-center space-x-4">
          <div className="text-4xl animate-spin">🎉</div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-yellow-400 mb-1">
              🚀 EXCLUSIVE: All New Content Available Now!
            </h4>
            <p className="text-yellow-200">
              Discover our complete collection of revolutionary technology content. From business automation to cybersecurity, explore the future today.
            </p>
          </div>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            View All Content →
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentPromotionBanner;